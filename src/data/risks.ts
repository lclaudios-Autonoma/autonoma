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
      name: 'Retenção Trial abaixo de 35%',
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
        'Prompt Caching reduz custo em 90%. Cap de 120 interações Sonnet/mês + Haiku ilimitado como fallback. Custo controlado: R$6,00/usuária/mês. Monitor custo/usuária desde o dia 1.',
    },
    {
      icon: '🟡',
      name: 'Conversão Trial → pago abaixo de 10%',
      sub: 'Projeção de receita comprometida',
      level: 'medio',
      levelLabel: 'Médio',
      mitigation:
        'Gate no mês 4: se conversão < 10%, ajustar oferta antes de escalar. Trial de 14 dias com onboarding agressivo (dia 1: primeira resolução, dia 7: resumo de valor, dia 10: alerta de expiração). Benchmark B2C mediana: 15%.',
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
      name: 'Trial retention below 35%',
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
        "The native app is the main channel from month 1. Telegram as immediate channel B. Cade (Brazilian antitrust) is investigating Meta — active regulatory protection in Brazil. Noma's memory migrates between channels without loss.",
    },
    {
      icon: '🟡',
      name: 'Claude API cost scales with usage',
      sub: 'Compressed margin',
      level: 'medio',
      levelLabel: 'Medium',
      mitigation:
        'Prompt Caching cuts cost by 90%. Cap of 120 Sonnet interactions/month + unlimited Haiku as fallback. Controlled cost: R$6.00/active user/month. Cost-per-user monitored from day 1.',
    },
    {
      icon: '🟡',
      name: 'Trial → paid conversion below 10%',
      sub: 'Revenue projection compromised',
      level: 'medio',
      levelLabel: 'Medium',
      mitigation:
        'Gate at month 4: if conversion < 10%, adjust the offer before scaling. 14-day trial with aggressive onboarding (day 1: first resolution, day 7: value summary, day 10: expiration alert). B2C median benchmark: 15%.',
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
