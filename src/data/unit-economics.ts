export const kpis = [
  {
    label: 'LTV / CAC',
    value: '10,84×',
    sub:
      'LTV R$650 ÷ CAC R$60 · benchmark saudável ≥ 3× · top quartile SaaS: 5–8× · AutoNoma está em tier elite',
    barPct: 81,
  },
  {
    label: 'Payback do CAC',
    value: '41d',
    sub:
      'CAC R$60 ÷ margem R$43,36/mês · assinatura pré-paga = recuperação quase imediata · referência SaaS: 12–18 meses',
    barPct: 94,
  },
  {
    label: 'Margem Bruta',
    value: '74%',
    sub:
      'R$49,90 ticket − R$6,54 custo API/mês · escala para 82% com volume acima de 5K assinantes',
    barPct: 82,
  },
];

export interface BreakdownRow {
  label: string;
  sub?: string;
  value: string;
  tone: 'revenue' | 'cost' | 'margin' | 'total';
}

export const breakdown: BreakdownRow[] = [
  {
    label: 'Receita bruta',
    sub: 'Plano Essencial base',
    value: '+ R$49,90',
    tone: 'revenue',
  },
  {
    label: 'Claude API (Anthropic)',
    sub: '~140 msgs/mês · Sonnet 4.6 · cache otimizado',
    value: '− R$6,54',
    tone: 'cost',
  },
  {
    label: 'Infraestrutura cloud',
    sub: 'AWS/GCP · memória persistente',
    value: '− R$2,10',
    tone: 'cost',
  },
  {
    label: 'Pagamento (gateway)',
    sub: 'Pix automático + cartão',
    value: '− R$1,20',
    tone: 'cost',
  },
  { label: 'CS + suporte', sub: 'Média por usuária ativa', value: '− R$1,90', tone: 'cost' },
  {
    label: 'Free users subsidiados',
    sub: 'R$2,30/ativa ÷ conversão 8%',
    value: '− R$2,00',
    tone: 'cost',
  },
  {
    label: 'Margem de contribuição',
    sub: 'Por assinante / mês',
    value: '+ R$36,16',
    tone: 'margin',
  },
  { label: 'Margem bruta', value: '74,2% → 82% (vol.)', tone: 'total' },
];

export interface FunnelStep {
  label: string;
  count: string;
  pct: string;
  bar: number;
}

export const funnelSteps: FunnelStep[] = [
  { label: 'Lista de espera (convite)', count: '1.000', pct: '100%', bar: 100 },
  { label: 'Completa onboarding', count: '880', pct: '88%', bar: 88 },
  { label: 'Ativa Free semana 1', count: '634', pct: '72%', bar: 72 },
  { label: 'Retorna no mês 1', count: '285', pct: '45%', bar: 45 },
  { label: 'Converte para pago', count: '~80', pct: '8% do total', bar: 16 },
];

export const funnelLevers = [
  '3 resoluções na semana 1 = conversão 2× maior',
  'Onboarding profundo prediz qual agente converter',
  'Reativação automática 48h = +12% de retorno',
  'Meta: 12% conversão no mês 12',
];

export const ltvCalc = [
  { val: 'R$49,90', label: 'Ticket Essencial (plano base)', tone: 'noma' },
  { val: '15', label: 'Meses de vida média (churn 5%/mês)', tone: 'gold' },
  { val: 'R$650', label: 'LTV Essencial · cenário base', tone: 'dark' },
  { val: 'R$945', label: 'LTV otimista (churn 3,5% mês 18)', tone: 'noma-solid' },
];

export const ltvSubMetrics = [
  { label: 'CAC full-loaded', value: 'R$60', sub: 'inclui mkt+CS+onboarding', tone: 'noma' },
  { label: 'Churn meta mês 6', value: '5%/mês', sub: '= 20 meses vida média', tone: 'noma' },
  { label: 'Churn mês 18', value: '3,5%/mês', sub: 'Memória = lock-in real', tone: 'gold' },
  { label: 'LTV/CAC ratio', value: '10,84× base', sub: '→ 18× otimista mês 18', tone: 'noma' },
];

export const breakeven = [
  {
    label: 'Breakeven operacional',
    value: 'Mês 6 · 3.010 assinantes',
    sub:
      'Custo fixo R$63K/mês ÷ margem R$43,36 = ~1.452 assinantes necessários. Margem de segurança: +1.558 assinantes.',
  },
  {
    label: 'Runway com R$2,5M',
    value: '18–22 meses',
    sub:
      'BE no mês 6 · 12+ meses de geração positiva · margem para Série A sem pressão de caixa',
  },
  {
    label: 'Retorno ao anjo',
    value: '8,47× sobre aporte',
    sub:
      'Receita acum. R$17,3M × 5× = valuation R$86,4M · 24,5% equity = R$21,2M · aporte R$2,5M',
  },
];
