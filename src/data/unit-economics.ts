export const kpis = [
  {
    label: 'LTV / CAC',
    value: '15×',
    sub:
      'LTV R$505 ÷ CAC R$33 · benchmark saudável ≥ 3× · top quartile SaaS: 5–8× · AutoNoma está em tier elite',
    barPct: 92,
  },
  {
    label: 'Payback do CAC',
    value: '25d',
    sub:
      'CAC R$33 ÷ margem R$28/mês · assinatura pré-paga = recuperação quase imediata · referência SaaS: 12–18 meses',
    barPct: 96,
  },
  {
    label: 'Margem Bruta',
    value: '70%',
    sub:
      'R$39,90 ticket − R$12 custos totais/mês · escala para 78–82% com volume acima de 5K assinantes',
    barPct: 78,
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
    value: '+ R$39,90',
    tone: 'revenue',
  },
  {
    label: 'Claude API (Anthropic)',
    sub: '~180 msgs/mês · cache otimizado',
    value: '− R$4,80',
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
    value: '+ R$27,90',
    tone: 'margin',
  },
  { label: 'Margem bruta', value: '69,9% → 78% (vol.)', tone: 'total' },
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
  { val: 'R$47', label: 'Ticket médio ponderado (mix Free→pago)', tone: 'noma' },
  { val: '13,5', label: 'Meses de vida (churn 5% → 1/0,074)', tone: 'gold' },
  { val: 'R$505', label: 'LTV 12 meses · base conservador', tone: 'dark' },
  { val: 'R$945', label: 'LTV otimista (churn 3,5% mês 18)', tone: 'noma-solid' },
];

export const ltvSubMetrics = [
  { label: 'CAC blended', value: 'R$33', sub: 'R$8 viral · R$45 paid mix', tone: 'noma' },
  { label: 'Churn meta mês 6', value: '5%/mês', sub: '= 93 dias vida média', tone: 'noma' },
  { label: 'Churn mês 18', value: '3,5%/mês', sub: 'Memória = lock-in real', tone: 'gold' },
  { label: 'LTV/CAC ratio', value: '15× base', sub: '→ 28× otimista mês 18', tone: 'noma' },
];

export const breakeven = [
  {
    label: 'Breakeven operacional',
    value: 'Mês 6 · 1.500 assinantes',
    sub:
      'Custo fixo R$40K/mês ÷ margem R$27,90 = 1.434 assinantes. Margem de segurança: +66 assinantes.',
  },
  {
    label: 'Runway com R$1M',
    value: '18–22 meses',
    sub:
      'BE no mês 6 · 12+ meses de geração positiva · margem para Série A sem pressão de caixa',
  },
  {
    label: 'Retorno ao anjo',
    value: '12–15× via Série A',
    sub:
      'ARR R$22M mês 24 · valuation 4–6× ARR = R$88–132M · SAFe conversível protege downside',
  },
];
