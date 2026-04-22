export interface Risk {
  icon: string;
  name: string;
  sub: string;
  level: 'alto' | 'medio' | 'baixo';
  levelLabel: string;
  mitigation: string;
}

export const risks: Risk[] = [
  {
    icon: '🔴',
    name: 'Retenção Free abaixo de 35%',
    sub: 'Motor de escala comprometido',
    level: 'alto',
    levelLabel: 'Alto',
    mitigation:
      'Onboarding em conversa + memória visível na 2ª interação + reativação 48h + meta de 3 resoluções na semana 1. Gate de decisão: NPS < 50 na semana 1 = parar e ajustar antes de escalar.',
  },
  {
    icon: '🔴',
    name: 'Meta restringe WhatsApp novamente',
    sub: 'Canal principal ameaçado',
    level: 'alto',
    levelLabel: 'Alto',
    mitigation:
      'App nativa é o canal principal desde o mês 1. Telegram como canal B imediato. Cade investigando Meta — proteção regulatória ativa no Brasil. Memória da Noma migra entre canais sem perda.',
  },
  {
    icon: '🟡',
    name: 'Custo Claude API escala com uso',
    sub: 'Margem comprimida',
    level: 'medio',
    levelLabel: 'Médio',
    mitigation:
      'Cache de respostas frequentes. Prompts otimizados por token. Free tem limite de interações diárias (suficiente para uso real). Monitor custo/usuária desde o dia 1. Meta: abaixo de R$2,30/ativa.',
  },
  {
    icon: '🟡',
    name: 'Conversão Free → pago abaixo de 8%',
    sub: 'Projeção de receita comprometida',
    level: 'medio',
    levelLabel: 'Médio',
    mitigation:
      'Gate no mês 4: se conversão < 5%, ajustar oferta antes de escalar. Testar framing de upgrade contextual vs push. O onboarding profundo prediz qual agente converter — teste A/B por dor.',
  },
  {
    icon: '🟡',
    name: 'Zapia ou big tech replicam o modelo',
    sub: 'Concorrência acelerada',
    level: 'medio',
    levelLabel: 'Médio',
    mitigation:
      'Moat é a memória e o relacionamento — impossível replicar sem a base de dados de preferências. Zapia não tem foco feminino nem agentes especializados. Big tech é genérico por natureza.',
  },
  {
    icon: '🟢',
    name: 'LGPD e dados sensíveis',
    sub: 'Perfil rico coletado no onboarding',
    level: 'baixo',
    levelLabel: 'Baixo',
    mitigation:
      'DPO desde o mês 1. Consentimento explícito por categoria no onboarding. Criptografia end-to-end na memória. Dados nunca vendidos — modelo é assinatura, não dados.',
  },
];
