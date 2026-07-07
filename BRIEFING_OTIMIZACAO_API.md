# Briefing: Otimização de Custo da API Claude — autonoma-api

## Contexto
O backend em `/Users/Cadu 1/app-autonoma/autonoma-api` está gastando mais do que o projetado no business plan.
A meta é: **R$2,30/usuário ativo free** e **R$5,83/assinante pago** por mês.

O roteamento de modelo já está correto (Haiku → free, Sonnet 4.6 → pago) e o prompt caching já está ativado
no header (`anthropic-beta: prompt-caching-2024-07-31`) e no system prompt (`cache_control: ephemeral`).

O custo alto vem de 4 problemas no código. Implemente todos os 4.

---

## Problema 1 — Histórico de 20 mensagens sem cache (maior impacto)

**Arquivo:** `src/main/java/com/autonoma/api/conversation/MessageRepository.java`
**Arquivo:** `src/main/java/com/autonoma/api/noma/NomaService.java` (método `loadHistory`, linha ~731)

**Situação atual:**
- `loadHistory` chama `findTop20ByConversationIdOrderByCreatedAtAsc` — 20 mensagens por request
- Essas 20 mensagens são enviadas como input tokens novos a cada request (sem cache)
- O cache está só no system prompt; o histórico não é cacheado

**O que fazer:**

1. Em `MessageRepository.java`, adicionar método:
```java
List<ConversationMessage> findTop8ByConversationIdOrderByCreatedAtAsc(String conversationId);
```

2. Em `NomaService.java`, trocar `loadHistory` para usar `findTop8`:
```java
private List<Map<String, String>> loadHistory(String conversationId) {
    return buildHistory(messages.findTop8ByConversationIdOrderByCreatedAtAsc(conversationId));
}
```

3. Em `AnthropicClient.java` (método `buildMessages`), adicionar `cache_control` na penúltima
   mensagem do histórico (a última antes da mensagem atual do usuário), para que o Claude possa
   cachear o turno anterior. O cache funciona em checkpoints — colocar no penúltimo turn garante
   que a próxima chamada reutilize tudo até aquele ponto:

```java
private List<Map<String, Object>> buildMessages(List<Map<String, String>> history,
                                                List<Attachment> attachments) {
    List<Map<String, Object>> result = new ArrayList<>();
    int cacheCheckpointIdx = history.size() >= 2 ? history.size() - 2 : -1; // penúltima mensagem

    for (int i = 0; i < history.size(); i++) {
        Map<String, String> m = history.get(i);
        boolean isLast = i == history.size() - 1;
        boolean isCacheCheckpoint = i == cacheCheckpointIdx;

        if (isLast && attachments != null && !attachments.isEmpty()
                && "user".equals(m.get("role"))) {
            // lógica de anexos já existente — sem mudança
            List<Map<String, Object>> blocks = new ArrayList<>();
            for (Attachment a : attachments) {
                String mediaType = (a.mediaType() == null || a.mediaType().isBlank())
                        ? "application/pdf" : a.mediaType();
                String blockType = mediaType.startsWith("image/") ? "image" : "document";
                blocks.add(Map.of(
                        "type", blockType,
                        "source", Map.of(
                                "type", "base64",
                                "media_type", mediaType,
                                "data", a.data()
                        )
                ));
            }
            blocks.add(Map.of("type", "text", "text", m.get("content")));
            result.add(Map.of("role", "user", "content", blocks));
        } else if (isCacheCheckpoint) {
            // Adiciona cache_control no penúltimo turn para cachear o histórico acumulado
            List<Map<String, Object>> blocks = List.of(Map.of(
                    "type", "text",
                    "text", m.get("content"),
                    "cache_control", Map.of("type", "ephemeral")
            ));
            result.add(Map.of("role", m.get("role"), "content", blocks));
        } else {
            result.add(Map.of(
                    "role", m.get("role"),
                    "content", m.get("content")
            ));
        }
    }
    return result;
}
```

---

## Problema 2 — VOICE_ACTION_SUFFIX injeta a data → cache miss garantido no modo voz

**Arquivo:** `src/main/java/com/autonoma/api/noma/PromptBuilder.java`

**Situação atual:**
```java
// buildInternal (linha ~132)
if (voiceMode) {
    String today = LocalDate.now(ZoneId.of("America/Sao_Paulo")).format(DATE_BR);
    prompt += String.format(VOICE_ACTION_SUFFIX, today);  // muda todo dia → cache miss sempre
}
```
O system prompt muda todo dia porque embute a data. O cache do system prompt nunca é aproveitado
para chamadas de voz — que são as mais frequentes no produto.

**O que fazer:**

Remover a data do system prompt. Passar a data como primeira mensagem do histórico (user turn),
que não precisa ser cacheada e não invalida o system prompt.

Em `PromptBuilder.java`, alterar `buildInternal`:
```java
private String buildInternal(AgentType agent, String userName, List<String> memories, boolean voiceMode) {
    String name = (userName != null && !userName.isBlank()) ? userName.split(" ")[0] : "você";

    String memoriesText = memories.isEmpty()
            ? "(sem histórico ainda — esta pode ser a primeira conversa)"
            : String.join("\n- ", memories);
    if (!memories.isEmpty()) memoriesText = "- " + memoriesText;

    String prompt = TEMPLATE
            .replace("{{user_name}}", name)
            .replace("{{active_agent}}", agentLabel(agent))
            .replace("{{agent_behavior}}", agentBehavior(agent).replace("{{user_name}}", name))
            .replace("{{user_memories}}", memoriesText);

    if (voiceMode) {
        // Sufixo SEM a data — a data vai no primeiro user turn (ver NomaService)
        prompt += VOICE_ACTION_SUFFIX.replace("{{user_name}}", name);
    }

    return prompt;
}
```

Remover o `String.format` da classe — o `VOICE_ACTION_SUFFIX` não deve mais ter `%s`.
Substituir no TEMPLATE a linha:
```
Hoje é %s.
```
Por:
```
A data atual é informada pela usuária no contexto da conversa.
```

Em `NomaService.java`, no método `chatAudio`, antes de chamar `anthropic.stream`, injetar a data
no início do histórico:
```java
// Injetar data como primeiro contexto do histórico (não invalida cache do system prompt)
String today = LocalDate.now(ZoneId.of("America/Sao_Paulo")).format(
    DateTimeFormatter.ofPattern("dd/MM/yyyy", new Locale("pt", "BR")));
history.add(0, Map.of("role", "user", "content", "Data de hoje: " + today));
history.add(1, Map.of("role", "assistant", "content", "Entendido."));

// depois adiciona a mensagem atual do usuário (já existente):
history.add(Map.of("role", "user", "content", transcript));
```

---

## Problema 3 — Rate limit diário para plano Free não está implementado

**Arquivo:** `src/main/java/com/autonoma/api/noma/NomaService.java`
**Arquivo:** `src/main/java/com/autonoma/api/conversation/MessageRepository.java`

**Situação atual:** O `ModelRouter` roteia corretamente Haiku para free, mas não há limite de
quantas mensagens o free pode enviar. O business plan projetou "Chat com limite diário".

**O que fazer:**

1. Em `MessageRepository.java`, adicionar:
```java
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.time.Instant;

@Query("SELECT COUNT(m) FROM ConversationMessage m WHERE m.userId = :userId AND m.role = 'user' AND m.createdAt >= :since")
long countUserMessagesSince(@Param("userId") String userId, @Param("since") Instant since);
```

2. Em `NomaService.java`, nos métodos `chatSync` e `chat` (SSE), logo após carregar o `user`,
   adicionar a verificação antes de qualquer chamada ao Claude:

```java
// Rate limit: plano free/trial = máximo 10 mensagens por dia
if (user.getPlan() == null || "trial".equals(user.getPlan()) || "free".equals(user.getPlan())) {
    Instant startOfDay = LocalDate.now(ZoneId.of("America/Sao_Paulo"))
            .atStartOfDay(ZoneId.of("America/Sao_Paulo")).toInstant();
    long todayCount = messages.countUserMessagesSince(userId, startOfDay);
    if (todayCount >= 10) {
        throw new ApiException(HttpStatus.TOO_MANY_REQUESTS,
            "Você atingiu o limite diário de mensagens do plano gratuito. "
            + "Assine o plano Essencial para continuar sem limites.");
    }
}
```

Fazer o mesmo no `chatAudio` para o modo voz free.

O limite de 10/dia é um valor inicial — pode ser ajustado em `application.yml` se quiser tornar
configurável (`app.limits.free-daily-messages: 10`).

---

## Problema 4 — Memórias não estão sendo passadas para o Claude

**Arquivo:** `src/main/java/com/autonoma/api/noma/NomaService.java`

**Situação atual:**
```java
// chatSync linha ~585, chat SSE linha ~648, chatAudio linha ~191
String systemPrompt = promptBuilder.build(agentType, user.getDisplayName(), Collections.emptyList());
//                                                                            ^^^^^^^^^^^^^^^^^^^^
//                                                                            sempre vazia!
```

Não existe tabela/entidade de memórias ainda no projeto. Por ora, usar os últimos eventos
da agenda como contexto de memória, que já existe no banco:

```java
// Buscar até 5 eventos futuros da usuária como contexto de memória
List<String> memories = eventRepository.findByUserIdAndStartAtAfter(userId, Instant.now())
        .stream()
        .limit(5)
        .map(e -> "Compromisso: " + e.getTitle() +
                  (e.getStartAt() != null ? " em " + e.getStartAt().toString() : ""))
        .collect(java.util.stream.Collectors.toList());

String systemPrompt = promptBuilder.build(agentType, user.getDisplayName(), memories);
```

Verificar se `EventRepository` tem `findByUserIdAndStartAtAfter` — se não tiver, adicionar:
```java
List<Event> findByUserIdAndStartAtAfterOrderByStartAtAsc(String userId, Instant after);
```

---

---

## Problema 5 — WhatsApp Agent usa Sonnet quando devia usar Haiku

**Arquivo:** `src/main/java/com/autonoma/api/whatsapp/NomaWhatsAppAgent.java`

**Situação atual:**
```java
// linha 58 — usa o plano da usuária para escolher o modelo
String model = modelRouter.forPlan(userPlan);
```
Assinantes pagos acionam Sonnet 4.6 para a negociação de cancelamento/remarcação/agendamento via
WhatsApp. Mas essa tarefa é simples e estruturada: 2-4 trocas de mensagens curtas + extrair um JSON.
Haiku é suficiente e custa 5× menos que Sonnet.

**Agravante:** o system prompt embute a data atual (`today`) → cache miss todo dia.

**O que fazer:**

1. Em `NomaWhatsAppAgent.java`, ignorar o plano e sempre usar Haiku:
```java
// Trocar:
String model = modelRouter.forPlan(userPlan);

// Por:
String model = "claude-haiku-4-5-20251001"; // tarefa simples, Haiku é suficiente
```

2. Remover a data do system prompt e passá-la como primeira mensagem do histórico
   (mesmo padrão do fix do Problema 2).

Em `buildSystemPrompt`, remover todas as ocorrências de:
```java
String today = java.time.LocalDate.now(java.time.ZoneId.of("America/Sao_Paulo"))
        .format(java.time.format.DateTimeFormatter.ofPattern("dd/MM/yyyy"));
```
E remover as linhas `ATENÇÃO: Hoje é %s...` e o respectivo `today` do `.formatted(...)`.

Em `nextTurn`, antes de chamar `anthropic.stream`, injetar a data no histórico:
```java
String today = java.time.LocalDate.now(java.time.ZoneId.of("America/Sao_Paulo"))
        .format(java.time.format.DateTimeFormatter.ofPattern("dd/MM/yyyy"));
if (claudeHistory.isEmpty() || !"user".equals(claudeHistory.get(0).get("role"))) {
    claudeHistory = new ArrayList<>(claudeHistory);
    claudeHistory.add(0, Map.of("role", "user", "content", "Data de hoje: " + today));
    claudeHistory.add(1, Map.of("role", "assistant", "content", "Entendido."));
}
```

---

## Problema 6 — NomaHome chama Haiku mesmo no cache hit (custo desnecessário)

**Arquivo:** `src/main/java/com/autonoma/api/nomahome/NomaHomeService.java`

**Situação atual:**
```java
// linha 84-86 — mesmo com dados em cache, ainda chama o Claude
if (!cached.isEmpty()) {
    return curateFromCache(cached, query, location, displayName);  // chama Haiku!
}
```
O método `curateFromCache` chama `callHaiku` só para escolher o melhor prestador de uma lista
que já está no banco. Essa lógica é simples o suficiente para fazer em Java: melhor nota +
`reclameAquiOk = true`. Sem nenhum custo de API.

**O que fazer:**

Substituir `curateFromCache` por seleção direta em Java:

```java
private NomaHomeResult curateFromCache(List<Provider> cached, String query,
                                        String location, String displayName) {
    // Prioridade: reclameAquiOk=true, depois maior nota
    Provider best = cached.stream()
            .filter(p -> Boolean.TRUE.equals(p.getReclameAquiOk()))
            .max(Comparator.comparing(p -> p.getRating() != null ? p.getRating() : BigDecimal.ZERO))
            .orElse(cached.get(0)); // fallback: primeiro da lista

    String justificativa = "Prestador verificado com avaliações positivas e sem reclamações graves"
            + (best.getRating() != null ? " (nota " + best.getRating().toPlainString() + ")." : ".");

    log.info("[NomaHome] Cache HIT sem Claude — escolhido '{}'", best.getName());

    return new NomaHomeResult(
            best.getName(),
            best.getCategory(),
            best.getRating() != null ? best.getRating().doubleValue() : null,
            null,
            best.getReclameAquiOk() != null && best.getReclameAquiOk()
                    ? "Sem reclamações graves" : null,
            null, null,
            justificativa,
            null,
            best.getPhone()
    );
}
```

Verificar os campos exatos do record `NomaHomeResult` antes de ajustar os parâmetros do construtor.

---

## Ordem de implementação recomendada

| Prioridade | Problema | Impacto |
|---|---|---|
| 1 | Histórico 20→8 + cache no penúltimo turn | Maior redução de input tokens |
| 2 | WhatsApp Agent → sempre Haiku | Elimina Sonnet de tarefa simples |
| 3 | Data fora do system prompt (voz + WhatsApp) | Cache hit passa a funcionar |
| 4 | Rate limit free (10 msg/dia) | Custo free tier previsível |
| 5 | NomaHome cache hit sem Claude | Elimina chamada de API desnecessária |
| 6 | Memórias reais | Melhora qualidade e reduz repetição |

## Arquivos a modificar (resumo)

| Arquivo | Mudança |
|---|---|
| `conversation/MessageRepository.java` | Adicionar `findTop8...` e `countUserMessagesSince` |
| `llm/AnthropicClient.java` | `buildMessages` com `cache_control` no penúltimo turn |
| `noma/PromptBuilder.java` | Remover data do `VOICE_ACTION_SUFFIX` |
| `noma/NomaService.java` | `loadHistory` usa Top8, data no histórico de voz, rate limit free, memórias reais |
| `event/EventRepository.java` | Adicionar `findByUserIdAndStartAtAfterOrderByStartAtAsc` se não existir |
| `whatsapp/NomaWhatsAppAgent.java` | Sempre Haiku, data fora do system prompt |
| `nomahome/NomaHomeService.java` | `curateFromCache` sem chamada ao Claude |
