export interface Scenario {
  label: string;
  tone: 'conservador' | 'otimista';
  metrics: { val: string; label: string }[];
  assumptions: string[];
}

export const scenarios: Scenario[] = [
  {
    label: '📊 Cenário Base · Conservador',
    tone: 'conservador',
    metrics: [
      { val: '3K', label: 'Assinantes mês 12' },
      { val: '30K', label: 'Assinantes mês 24' },
      { val: 'R$22M', label: 'ARR mês 24' },
      { val: 'Mês 6', label: 'Breakeven' },
    ],
    assumptions: [
      'K viral = 0,6 · CPL médio R$8',
      'Conversão Free → pago: 8% das ativas',
      'Churn: 5%/mês → 3,5% no mês 18',
      'Ticket médio: R$47 → R$62 no mês 24',
      'NPS ≥ 60 na semana 1 como gate',
    ],
  },
  {
    label: '🚀 Cenário Otimista · +40%',
    tone: 'otimista',
    metrics: [
      { val: '5,2K', label: 'Assinantes mês 12' },
      { val: '42K', label: 'Assinantes mês 24' },
      { val: 'R$36M', label: 'ARR mês 24' },
      { val: 'Mês 4', label: 'Breakeven' },
    ],
    assumptions: [
      'K viral = 0,8 · NPS acima de 70 orgânico',
      'Conversão Free → pago: 12% das ativas',
      'Churn: 3,8%/mês desde o mês 6',
      'Ticket médio: R$55 → R$78 com agentes',
      'LATAM antecipada para mês 20',
    ],
  },
];

export interface MrrBar {
  label: string;
  base: number;
  optimistic: number;
  baseLabel: string;
  optimisticLabel: string;
  marker?: string;
}

export const mrrBars: MrrBar[] = [
  { label: 'M3', base: 0, optimistic: 0, baseLabel: 'R$0', optimisticLabel: 'R$0' },
  { label: 'M4', base: 8.6, optimistic: 12, baseLabel: 'R$8,6K', optimisticLabel: 'R$12K' },
  { label: 'M5', base: 20, optimistic: 30, baseLabel: 'R$20K', optimisticLabel: 'R$30K' },
  {
    label: 'M6',
    base: 70,
    optimistic: 100,
    baseLabel: 'R$70K',
    optimisticLabel: 'R$100K',
    marker: 'BE',
  },
  { label: 'M7', base: 100, optimistic: 140, baseLabel: 'R$100K', optimisticLabel: 'R$140K' },
  { label: 'M8', base: 130, optimistic: 172, baseLabel: 'R$130K', optimisticLabel: 'R$172K' },
  { label: 'M12', base: 155, optimistic: 183, baseLabel: 'R$155K', optimisticLabel: 'R$183K' },
  {
    label: 'M18',
    base: 580,
    optimistic: 810,
    baseLabel: 'R$580K',
    optimisticLabel: 'R$810K',
    marker: 'Série A',
  },
  {
    label: 'M24',
    base: 1860,
    optimistic: 3100,
    baseLabel: 'R$1,86M',
    optimisticLabel: 'R$3,1M',
    marker: 'LATAM',
  },
];

export interface Milestone {
  month: string;
  event: string;
  sub: string;
  free: string;
  paid: string;
  mrr: string;
  arr: string;
  tone?: 'be' | 'seed' | 'seriea' | 'latam';
}

export const milestones: Milestone[] = [
  {
    month: 'Mês 3',
    event: 'MVP Lançado',
    sub: 'Trial gratuito · coleta dados · viral loop ativo',
    free: '3.000',
    paid: '0',
    mrr: 'R$0',
    arr: '—',
  },
  {
    month: 'Mês 4',
    event: 'Primeiros Pagantes',
    sub: 'Planos ativos · dados de conversão iniciais',
    free: '5.400',
    paid: '~200',
    mrr: 'R$8,6K',
    arr: 'ARR R$103K',
  },
  {
    month: 'Mês 6 ⚡',
    event: 'Breakeven Operacional',
    sub: 'Custo fixo coberto · caixa positivo a partir daqui',
    free: '14.580',
    paid: '1.500',
    mrr: 'R$70K',
    arr: 'ARR R$840K',
    tone: 'be',
  },
  {
    month: 'Mês 12',
    event: 'Gate Seed Round',
    sub: 'Pitch para Seed · dados de 8 meses de conversão',
    free: '42.000',
    paid: '3.000',
    mrr: 'R$155K',
    arr: 'ARR R$1,86M',
    tone: 'seed',
  },
  {
    month: 'Mês 18',
    event: 'Série A · Expansão',
    sub: 'ARR R$7M · 10K assinantes · churn 3,5%',
    free: '98.000',
    paid: '10.000',
    mrr: 'R$580K',
    arr: 'ARR R$6,96M',
    tone: 'seriea',
  },
  {
    month: 'Mês 24',
    event: 'Gate LATAM Aberto',
    sub: '200K Free Brasil · entrada México + Colômbia',
    free: '210.000',
    paid: '30.000',
    mrr: 'R$1,86M',
    arr: 'ARR R$22,3M',
    tone: 'latam',
  },
];

export const sensitivity = [
  {
    label: 'Sensibilidade · Conversão Free→pago',
    lines: [
      '5% conv. → BE mês 8 · MRR R$1,1M mês 24',
      '8% conv. → BE mês 6 · MRR R$1,86M mês 24 (base)',
      '12% conv. → BE mês 4 · MRR R$2,8M mês 24',
    ],
    tone: 'noma' as const,
  },
  {
    label: 'Sensibilidade · Churn mensal',
    lines: [
      '8% churn → LTV R$315 · ARR R$14M mês 24',
      '5% churn → LTV R$505 · ARR R$22M mês 24 (base)',
      '3% churn → LTV R$840 · ARR R$34M mês 24',
    ],
    tone: 'gold' as const,
  },
];
