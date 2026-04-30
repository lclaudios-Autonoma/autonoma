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
      { val: '5.950', label: 'Assinantes mês 12' },
      { val: '39K', label: 'Assinantes mês 24' },
      { val: 'R$26,2M', label: 'ARR mês 24' },
      { val: 'Mês 6', label: 'Breakeven' },
    ],
    assumptions: [
      'K viral = 0,6 · CPL médio R$8',
      'Conversão Free → pago: 8% das ativas',
      'Churn: 5%/mês · Essencial',
      'Ticket Essencial: R$49,90',
      'NPS ≥ 60 na semana 1 como gate',
    ],
  },
  {
    label: '🚀 Cenário Otimista · +40%',
    tone: 'otimista',
    metrics: [
      { val: '8.640', label: 'Assinantes mês 12' },
      { val: '50,9K', label: 'Assinantes mês 24' },
      { val: 'R$31,2M', label: 'ARR mês 24' },
      { val: 'Mês 3', label: 'Breakeven' },
    ],
    assumptions: [
      'K viral = 0,8 · NPS acima de 70 orgânico',
      'Conversão Free → pago: 10% das ativas',
      'Churn: 3,8%/mês desde o mês 6',
      'Ticket médio: R$49,90 → R$62 com agentes',
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
  { label: 'M3', base: 87.8, optimistic: 126.4, baseLabel: 'R$87,8K', optimisticLabel: 'R$126,4K' },
  { label: 'M4', base: 115.8, optimistic: 168.5, baseLabel: 'R$115,8K', optimisticLabel: 'R$168,5K' },
  { label: 'M5', base: 143.7, optimistic: 210.6, baseLabel: 'R$143,7K', optimisticLabel: 'R$210,6K' },
  {
    label: 'M6',
    base: 171.7,
    optimistic: 252.8,
    baseLabel: 'R$171,7K',
    optimisticLabel: 'R$252,8K',
    marker: 'BE',
  },
  { label: 'M7', base: 199.7, optimistic: 294.9, baseLabel: 'R$199,7K', optimisticLabel: 'R$294,9K' },
  { label: 'M8', base: 227.6, optimistic: 337.0, baseLabel: 'R$227,6K', optimisticLabel: 'R$337,0K' },
  { label: 'M12', base: 339.4, optimistic: 505.5, baseLabel: 'R$339,4K', optimisticLabel: 'R$505,5K' },
  {
    label: 'M18',
    base: 1029,
    optimistic: 1583,
    baseLabel: 'R$1,03M',
    optimisticLabel: 'R$1,58M',
    marker: 'Série A',
  },
  {
    label: 'M24',
    base: 2181,
    optimistic: 2602,
    baseLabel: 'R$2,18M',
    optimisticLabel: 'R$2,60M',
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
    free: '11.000',
    paid: '1.540',
    mrr: 'R$87,8K',
    arr: 'ARR R$1,05M',
  },
  {
    month: 'Mês 4',
    event: 'Primeiros Pagantes',
    sub: 'Planos ativos · dados de conversão iniciais',
    free: '14.500',
    paid: '2.030',
    mrr: 'R$115,8K',
    arr: 'ARR R$1,39M',
  },
  {
    month: 'Mês 6 ⚡',
    event: 'Breakeven Operacional',
    sub: 'Custo fixo coberto · caixa positivo a partir daqui',
    free: '21.500',
    paid: '3.010',
    mrr: 'R$171,7K',
    arr: 'ARR R$2,06M',
    tone: 'be',
  },
  {
    month: 'Mês 12',
    event: 'Gate Seed Round',
    sub: 'Pitch para Seed · dados de 8 meses de conversão',
    free: '42.500',
    paid: '5.950',
    mrr: 'R$339,4K',
    arr: 'ARR R$4,07M',
    tone: 'seed',
  },
  {
    month: 'Mês 18',
    event: 'Série A · Expansão',
    sub: 'ARR R$12,4M · 19K assinantes · churn 3,5%',
    free: '66.500',
    paid: '19.377',
    mrr: 'R$1,03M',
    arr: 'ARR R$12,4M',
    tone: 'seriea',
  },
  {
    month: 'Mês 24',
    event: 'Gate LATAM Aberto',
    sub: '90K Free Brasil · entrada México + Colômbia',
    free: '90.500',
    paid: '39.042',
    mrr: 'R$2,18M',
    arr: 'ARR R$26,2M',
    tone: 'latam',
  },
];

export const sensitivity = [
  {
    label: 'Sensibilidade · Conversão Free→pago',
    lines: [
      '5% conv. → BE mês 8 · MRR R$1,3M mês 24',
      '8% conv. → BE mês 6 · MRR R$2,18M mês 24 (base)',
      '12% conv. → BE mês 4 · MRR R$3,2M mês 24',
    ],
    tone: 'noma' as const,
  },
  {
    label: 'Sensibilidade · Churn mensal',
    lines: [
      '8% churn → LTV R$408 · ARR R$18M mês 24',
      '5% churn → LTV R$650 · ARR R$26,2M mês 24 (base)',
      '3% churn → LTV R$1.085 · ARR R$38M mês 24',
    ],
    tone: 'gold' as const,
  },
];
