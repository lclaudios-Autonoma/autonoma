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
      name: 'Trial 14d · Haiku',
      bullets: [
        'Chat ilimitado com Noma',
        'Modelo Haiku 4.5 (custo ~R$0,50/mês)',
        'Memória persistente simples',
        'Sem agentes no trial',
      ],
      price: 'R$0',
      priceSub: 'por 14 dias',
      accent: 'core',
    },
    {
      tier: 'Conversão · Pago',
      name: 'Noma · Sonnet',
      bullets: [
        'Chat + Memória completa',
        'Sonnet 4.6 com Prompt Caching',
        'API R$6,00/mês (cache) · margem 75%',
        'Pix automático',
      ],
      price: 'R$39,90',
      priceSub: '/mês · ou R$399/ano',
      accent: 'high',
    },
    {
      tier: 'Upsell · Marketplace',
      name: 'Agentes Especializados',
      bullets: [
        '6 agentes no lançamento',
        'Organizadora · Financeira · Casa',
        'Maternidade · Carreira · Bem-Estar',
        'LTV/CAC até 12,1× com agente',
      ],
      price: 'R$29,90',
      priceSub: '/agente/mês',
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
      name: 'Trial 14d · Haiku',
      bullets: [
        'Unlimited chat with Noma',
        'Haiku 4.5 model (~R$0.50/mo cost)',
        'Simple persistent memory',
        'No agents in trial',
      ],
      price: 'R$0',
      priceSub: 'for 14 days',
      accent: 'core',
    },
    {
      tier: 'Conversion · Paid',
      name: 'Noma · Sonnet',
      bullets: [
        'Chat + Complete memory',
        'Sonnet 4.6 with Prompt Caching',
        'API R$6.00/mo (cache) · 75% margin',
        'Automatic Pix',
      ],
      price: 'R$39.90',
      priceSub: '/mo · or R$399/yr',
      accent: 'high',
    },
    {
      tier: 'Upsell · Marketplace',
      name: 'Specialized Agents',
      bullets: [
        '6 agents at launch',
        'Organizer · Financial · Home',
        'Maternity · Career · Wellbeing',
        'LTV/CAC up to 12.1× with agent',
      ],
      price: 'R$29.90',
      priceSub: '/agent/mo',
      accent: 'max',
    },
  ],
};
