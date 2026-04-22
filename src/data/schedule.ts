export interface Phase {
  period: string;
  name: string;
  tags: string[];
  kpi: string;
  kpiLabel: string;
  index: number;
}

export const phases: Phase[] = [
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
      '3.000 assinantes mês 12',
    ],
    kpi: 'R$155K',
    kpiLabel: 'MRR mês 12',
  },
  {
    index: 6,
    period: 'Mês 13–24',
    name: 'Consolidação + LATAM',
    tags: [
      '200K Free Brasil',
      '30K assinantes pagantes',
      'MRR R$1,86M',
      'Série A captada',
      'México + Colômbia iniciados',
    ],
    kpi: 'LATAM',
    kpiLabel: 'gate aberto',
  },
];
