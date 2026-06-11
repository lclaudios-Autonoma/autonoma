import { Lang } from '../i18n/LanguageContext';

export interface Risk {
  icon: string;
  name: string;
  sub: string;
  level: 'alto' | 'medio' | 'baixo';
  levelLabel: string;
  mitigation: string;
}

export const risks: Record<Lang, Risk[]> = {
  pt: [
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
  ],
  en: [
    {
      icon: '🔴',
      name: 'Free retention below 35%',
      sub: 'Scale engine compromised',
      level: 'alto',
      levelLabel: 'High',
      mitigation:
        'Conversational onboarding + visible memory by the 2nd interaction + 48h reactivation + target of 3 resolutions in week 1. Decision gate: NPS < 50 in week 1 = stop and adjust before scaling.',
    },
    {
      icon: '🔴',
      name: 'Meta restricts WhatsApp again',
      sub: 'Main channel threatened',
      level: 'alto',
      levelLabel: 'High',
      mitigation:
        'The native app is the main channel from month 1. Telegram as immediate channel B. Cade (Brazilian antitrust) is investigating Meta — active regulatory protection in Brazil. Noma’s memory migrates between channels without loss.',
    },
    {
      icon: '🟡',
      name: 'Claude API cost scales with usage',
      sub: 'Compressed margin',
      level: 'medio',
      levelLabel: 'Medium',
      mitigation:
        'Caching of frequent responses. Token-optimized prompts. Free tier has a daily interaction limit (enough for real use). Cost/user monitored from day 1. Target: below R$2.30 per active user.',
    },
    {
      icon: '🟡',
      name: 'Free → paid conversion below 8%',
      sub: 'Revenue projection compromised',
      level: 'medio',
      levelLabel: 'Medium',
      mitigation:
        'Gate at month 4: if conversion < 5%, adjust the offer before scaling. Test contextual upgrade framing vs push. Deep onboarding predicts which agent will convert — A/B test per pain.',
    },
    {
      icon: '🟡',
      name: 'Zapia or big tech replicate the model',
      sub: 'Accelerated competition',
      level: 'medio',
      levelLabel: 'Medium',
      mitigation:
        'The moat is memory and the relationship — impossible to replicate without the preference database. Zapia has no female focus or specialized agents. Big tech is generic by nature.',
    },
    {
      icon: '🟢',
      name: 'LGPD and sensitive data',
      sub: 'Rich profile collected at onboarding',
      level: 'baixo',
      levelLabel: 'Low',
      mitigation:
        'DPO from month 1. Explicit per-category consent at onboarding. End-to-end encryption of memory. Data is never sold — the model is subscription, not data.',
    },
  ],
};
