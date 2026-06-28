import { Lang } from '../i18n/LanguageContext';

export interface Phase {
  period: string;
  name: string;
  tags: string[];
  kpi: string;
  kpiLabel: string;
  index: number;
}

export const phases: Record<Lang, Phase[]> = {
  pt: [
    {
      index: 1,
      period: 'Dias 1–30',
      name: 'Produção',
      tags: [
        'Prompt Noma + Claude API',
        'App + bot WhatsApp + Telegram',
        '6 agentes core (1 por dor)',
        'Pix + cartão integrado',
        'Landing lista de espera',
        'Anjo fechado',
      ],
      kpi: '30d',
      kpiLabel: 'produto vivo',
    },
    {
      index: 2,
      period: 'Dias 31–45',
      name: 'Campanha',
      tags: [
        '5–8 micro-influenciadoras briefadas',
        'Conteúdo UGC da dor',
        'Copy e-mail + landing finalizados',
        'PR em veículos femininos',
        'Meta Ads configurado',
      ],
      kpi: '15d',
      kpiLabel: 'plano pronto',
    },
    {
      index: 3,
      period: 'Dias 46–90',
      name: 'Lista de espera',
      tags: [
        'Influenciadoras ao vivo',
        'Meta Ads · CPL meta <R$8',
        'Viral loop ativo',
        'NPS semana 1 monitorado',
        'Meta 3.000 leads',
      ],
      kpi: '3.000',
      kpiLabel: 'leads meta',
    },
    {
      index: 4,
      period: 'Dias 91–105',
      name: 'Conversão',
      tags: [
        'Trial 14 dias ativado',
        'Onboarding ativado',
        'CS ativo nas primeiras 72h',
        'Meta 3 resoluções na semana 1',
        'NPS gate ≥ 60',
      ],
      kpi: '300',
      kpiLabel: 'pagantes',
    },
    {
      index: 5,
      period: 'Mês 4–12',
      name: 'Escala Brasil',
      tags: [
        'Plano Noma + Marketplace de agentes ativo',
        'Onda 2: +6 agentes no mês 7',
        'Breakeven mês 9',
        'Seed Round · dados reais de conversão',
        '3.420 assinantes mês 12',
      ],
      kpi: 'R$156K',
      kpiLabel: 'MRR mês 12',
    },
    {
      index: 6,
      period: 'Mês 13–24',
      name: 'Consolidação · Série A',
      tags: [
        '18 agentes (3 ondas de 6)',
        '6.955 assinantes pagantes',
        'MRR R$326K',
        'ARR R$3,91M · Valuation R$15,7M–27,4M',
        'Série A preparada',
      ],
      kpi: 'Série A',
      kpiLabel: 'gate M24',
    },
  ],
  en: [
    {
      index: 1,
      period: 'Days 1–30',
      name: 'Build',
      tags: [
        'Noma prompt + Claude API',
        'App + WhatsApp + Telegram bot',
        '6 core agents (1 per pain)',
        'Pix + card integrated',
        'Waitlist landing page',
        'Angel round closed',
      ],
      kpi: '30d',
      kpiLabel: 'product live',
    },
    {
      index: 2,
      period: 'Days 31–45',
      name: 'Campaign',
      tags: [
        '5–8 micro-influencers briefed',
        'UGC content around the pain',
        'E-mail copy + landing finalized',
        'PR in women-focused outlets',
        'Meta Ads configured',
      ],
      kpi: '15d',
      kpiLabel: 'plan ready',
    },
    {
      index: 3,
      period: 'Days 46–90',
      name: 'Waitlist',
      tags: [
        'Influencers live',
        'Meta Ads · CPL target <R$8',
        'Viral loop active',
        'Week-1 NPS monitored',
        'Target 3,000 leads',
      ],
      kpi: '3,000',
      kpiLabel: 'leads target',
    },
    {
      index: 4,
      period: 'Days 91–105',
      name: 'Conversion',
      tags: [
        '14-day trial activated',
        'Onboarding activated',
        'Active CS in the first 72h',
        'Target 3 resolutions in week 1',
        'NPS gate ≥ 60',
      ],
      kpi: '300',
      kpiLabel: 'paying users',
    },
    {
      index: 5,
      period: 'Month 4–12',
      name: 'Brazil Scale',
      tags: [
        'Noma plan + Agent Marketplace active',
        'Wave 2: +6 agents in month 7',
        'Breakeven month 9',
        'Seed Round · real conversion data',
        '3,420 subscribers month 12',
      ],
      kpi: 'R$156K',
      kpiLabel: 'MRR month 12',
    },
    {
      index: 6,
      period: 'Month 13–24',
      name: 'Consolidation · Series A',
      tags: [
        '18 agents (3 waves of 6)',
        '6,955 paying subscribers',
        'MRR R$326K',
        'ARR R$3.91M · Valuation R$15.7M–27.4M',
        'Series A prepared',
      ],
      kpi: 'Series A',
      kpiLabel: 'M24 gate',
    },
  ],
};
