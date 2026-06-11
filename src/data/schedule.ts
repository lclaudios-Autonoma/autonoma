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
        '3 agentes core',
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
        'Convite + código de acesso',
        'Onboarding ativado',
        'CS ativo nas primeiras 72h',
        'Meta 3 resoluções na semana 1',
        'NPS gate ≥ 60',
      ],
      kpi: '500',
      kpiLabel: 'Free ativos',
    },
    {
      index: 5,
      period: 'Mês 4–12',
      name: 'Escala Brasil',
      tags: [
        'Planos Autônoma + Livre ativos',
        'AutoNomas Fase 2 por demanda',
        'Breakeven mês 6',
        'Seed round preparado',
        '5.950 assinantes mês 12',
      ],
      kpi: 'R$339K',
      kpiLabel: 'MRR mês 12',
    },
    {
      index: 6,
      period: 'Mês 13–24',
      name: 'Consolidação + LATAM',
      tags: [
        '90K Free Brasil',
        '39K assinantes pagantes',
        'MRR R$2,18M',
        'Série A captada',
        'México + Colômbia iniciados',
      ],
      kpi: 'LATAM',
      kpiLabel: 'gate aberto',
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
        '3 core agents',
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
        'Invite + access code',
        'Onboarding activated',
        'Active CS in the first 72h',
        'Target 3 resolutions in week 1',
        'NPS gate ≥ 60',
      ],
      kpi: '500',
      kpiLabel: 'active Free users',
    },
    {
      index: 5,
      period: 'Month 4–12',
      name: 'Brazil Scale',
      tags: [
        'Autônoma + Livre plans active',
        'Phase 2 agents on demand',
        'Breakeven month 6',
        'Seed round prepared',
        '5,950 subscribers month 12',
      ],
      kpi: 'R$339K',
      kpiLabel: 'MRR month 12',
    },
    {
      index: 6,
      period: 'Month 13–24',
      name: 'Consolidation + LATAM',
      tags: [
        '90K Free users Brazil',
        '39K paying subscribers',
        'MRR R$2.18M',
        'Series A raised',
        'Mexico + Colombia started',
      ],
      kpi: 'LATAM',
      kpiLabel: 'gate open',
    },
  ],
};
