import { Lang } from '../i18n/LanguageContext';

export interface Plan {
  id: 'trial' | 'noma' | 'anual' | 'marketplace';
  name: string;
  price: string;
  priceSub: string;
  agentNote?: string;
  agentNoteDetail?: string;
  kicker: string;
  quote: string;
  features: string[];
  highlighted?: boolean;
  icon: 'chat' | 'shield' | 'bolt' | 'play';
}

export const plans: Record<Lang, Plan[]> = {
  pt: [
    {
      id: 'trial',
      name: 'Noma Trial',
      price: 'R$0',
      priceSub: '14 dias · conversão obrigatória',
      kicker: 'Gratuito',
      quote: '"Experimenta antes de assinar"',
      features: [
        '90 interações com a Noma',
        'Onboarding personalizado',
        'Memória ativa durante o trial',
        'Sem cartão para começar',
      ],
      icon: 'chat',
    },
    {
      id: 'noma',
      name: 'Noma',
      price: 'R$39,90',
      priceSub: '/mês · plano único',
      kicker: 'Assinatura',
      quote: '"A companheira que resolve"',
      features: [
        '120 interações Sonnet por mês',
        'Haiku ilimitado como fallback',
        'Memória persistente completa',
        'Agentes especializados à parte',
      ],
      icon: 'shield',
      highlighted: true,
    },
    {
      id: 'anual',
      name: 'Noma Anual',
      price: 'R$399',
      priceSub: '/ano · R$33,25/mês · 17% off',
      kicker: 'Melhor valor',
      quote: '"Compromisso que poupa"',
      features: [
        'Tudo do plano Noma mensal',
        'Desconto de 17% no ano',
        'Acesso ao Noma Club',
        'Pix ou cartão',
      ],
      icon: 'bolt',
    },
    {
      id: 'marketplace',
      name: 'Noma Especialistas',
      price: 'R$2,99/dia',
      priceSub: 'R$14,90/sem · R$29,90/mês por agente',
      kicker: 'Marketplace',
      quote: '"Ativa só quando precisar"',
      agentNote: 'Pool separado do plano Noma',
      agentNoteDetail: '6 agentes no lançamento · Onda 2 em M7 · Onda 3 em M13',
      features: [
        'Agentes especializados por dor',
        'Billing diário · semanal · mensal',
        'Pool de interações independente',
        'Agentes episódicos e contínuos',
      ],
      icon: 'play',
    },
  ],
  en: [
    {
      id: 'trial',
      name: 'Noma Trial',
      price: 'R$0',
      priceSub: '14 days · mandatory conversion',
      kicker: 'Free',
      quote: '"Try before you subscribe"',
      features: [
        '90 interactions with Noma',
        'Personalized onboarding',
        'Active memory during trial',
        'No credit card to start',
      ],
      icon: 'chat',
    },
    {
      id: 'noma',
      name: 'Noma',
      price: 'R$39.90',
      priceSub: '/mo · single plan',
      kicker: 'Subscription',
      quote: '"The companion that resolves"',
      features: [
        '120 Sonnet interactions per month',
        'Unlimited Haiku as fallback',
        'Complete persistent memory',
        'Specialist agents sold separately',
      ],
      icon: 'shield',
      highlighted: true,
    },
    {
      id: 'anual',
      name: 'Noma Annual',
      price: 'R$399',
      priceSub: '/year · R$33.25/mo · 17% off',
      kicker: 'Best value',
      quote: '"Commitment that saves"',
      features: [
        'Everything in monthly Noma plan',
        '17% annual discount',
        'Noma Club access',
        'Pix or card',
      ],
      icon: 'bolt',
    },
    {
      id: 'marketplace',
      name: 'Noma Specialists',
      price: 'R$2.99/day',
      priceSub: 'R$14.90/wk · R$29.90/mo per agent',
      kicker: 'Marketplace',
      quote: '"Activate only when you need it"',
      agentNote: 'Pool separate from Noma plan',
      agentNoteDetail: '6 agents at launch · Wave 2 in M7 · Wave 3 in M13',
      features: [
        'Specialist agents by pain point',
        'Daily · weekly · monthly billing',
        'Independent interaction pool',
        'Episodic and continuous agents',
      ],
      icon: 'play',
    },
  ],
};
