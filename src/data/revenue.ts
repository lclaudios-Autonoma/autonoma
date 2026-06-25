import { Lang } from '../i18n/LanguageContext';

export interface ReceitaTier {
  tier: string;
  name: string;
  bullets: string[];
  price: string;
  priceSub: string;
  accent: 'neutral' | 'core' | 'mid' | 'high' | 'max';
}

export const receitaTiers: Record<Lang, ReceitaTier[]> = {
  pt: [
    {
      tier: 'Fase 0',
      name: 'MVP',
      bullets: [
        'MVP funcional no ar',
        'Closed beta com 50 usuárias',
        'Validação de dor profunda',
        'Dados para pitch',
      ],
      price: 'R$0',
      priceSub: 'custo: feedback',
      accent: 'neutral',
    },
    {
      tier: 'Fase 1',
      name: 'Lista de Espera',
      bullets: [
        'Onboarding chat completo',
        'Perfil profundo (DNA, dores, agentes)',
        'Convite obrigatório viral',
        'Código único + rank de indicação',
      ],
      price: 'R$0',
      priceSub: 'viral K 0,6–0,8',
      accent: 'neutral',
    },
    {
      tier: 'Fase 2 · Escala',
      name: 'Trial 30D · Haiku',
      bullets: [
        'Chat ilimitado com Noma',
        'Modelo Haiku 4.5 (custo ~R$0,50/mês)',
        'Memória persistente simples',
        'Sem agentes no trial',
      ],
      price: 'R$0',
      priceSub: 'por 30 dias',
      accent: 'core',
    },
    {
      tier: 'Conversão · Pago',
      name: 'Essencial · Sonnet',
      bullets: [
        'Chat + Memória completa',
        'Sonnet 4.6 com Prompt Caching',
        'Agentes by use',
        'Pix automático',
      ],
      price: 'R$44,90',
      priceSub: '/mês',
      accent: 'high',
    },
    {
      tier: 'Premium',
      name: 'Autônoma + Livre',
      bullets: [
        'Autônoma: 1 agente incluído + Proativa',
        'Livre: 2 agentes + relatório mensal',
        'Segmentação por profundidade de dor',
        'LTV 15,8× a 23×',
      ],
      price: 'R$69,90 / R$89,90',
      priceSub: '/mês',
      accent: 'max',
    },
  ],
  en: [
    {
      tier: 'Phase 0',
      name: 'MVP',
      bullets: [
        'Functional MVP live',
        'Closed beta with 50 users',
        'Deep pain validation',
        'Data for pitch',
      ],
      price: 'R$0',
      priceSub: 'cost: feedback',
      accent: 'neutral',
    },
    {
      tier: 'Phase 1',
      name: 'Waitlist',
      bullets: [
        'Complete chat onboarding',
        'Deep profile (DNA, pains, agents)',
        'Mandatory viral invite',
        'Unique code + referral rank',
      ],
      price: 'R$0',
      priceSub: 'viral K 0.6–0.8',
      accent: 'neutral',
    },
    {
      tier: 'Phase 2 · Scale',
      name: 'Trial 30D · Haiku',
      bullets: [
        'Unlimited chat with Noma',
        'Haiku 4.5 model (~R$0.50/mo cost)',
        'Simple persistent memory',
        'No agents in trial',
      ],
      price: 'R$0',
      priceSub: 'for 30 days',
      accent: 'core',
    },
    {
      tier: 'Conversion · Paid',
      name: 'Essencial · Sonnet',
      bullets: [
        'Chat + Complete memory',
        'Sonnet 4.6 with Prompt Caching',
        'Agents by use',
        'Automatic Pix',
      ],
      price: 'R$44.90',
      priceSub: '/mo',
      accent: 'high',
    },
    {
      tier: 'Premium',
      name: 'Autônoma + Livre',
      bullets: [
        'Autônoma: 1 agent included + Proactive',
        'Livre: 2 agents + monthly report',
        'Segmented by pain depth',
        'LTV 15.8× to 23×',
      ],
      price: 'R$69.90 / R$89.90',
      priceSub: '/mo',
      accent: 'max',
    },
  ],
};
