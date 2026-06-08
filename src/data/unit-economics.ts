// ─────────────────────────────────────────────────────────────
//  AutoNoma · Unit Economics
//  Fonte: descritivo_modelo_negocio_autonoma.docx · Tabelas 5 e 6
//  Cenário de referência: Conservador
// ─────────────────────────────────────────────────────────────

export const kpis = [
  {
    label: 'LTV / CAC · Conservador',
    value: '5,3×',
    sub:
      'LTV R$425,89 ÷ CAC R$80 · benchmark saudável ≥ 3× · escala para 9,0× (Base) e 10,4× (Otimista) conforme conversão e churn melhorem',
    barPct: 53,
  },
  {
    label: 'Payback do CAC',
    value: '2,35m',
    sub:
      'CAC R$80 ÷ margem unitária R$34,07/mês · recuperação em menos de um trimestre · referência SaaS: 12–18 meses',
    barPct: 88,
  },
  {
    label: 'Margem Unitária',
    value: 'R$34,07',
    sub:
      'Ticket R$39,90 − API R$5,83 (Sonnet 4.6 cacheado) − demais custos variáveis · escala com volume de assinantes',
    barPct: 72,
  },
];

export interface BreakdownRow {
  label: string;
  sub?: string;
  value: string;
  tone: 'revenue' | 'cost' | 'margin' | 'total';
}

// Fonte: Tabela 5 do documento (plano Essencial · cenário Conservador)
export const breakdown: BreakdownRow[] = [
  {
    label: 'Receita bruta',
    sub: 'Plano Essencial · preço de lançamento',
    value: '+ R$39,90',
    tone: 'revenue',
  },
  {
    label: 'Claude API (Anthropic)',
    sub: 'Sonnet 4.6 · prompt caching · uso médio/mês',
    value: '− R$5,83',
    tone: 'cost',
  },
  {
    label: 'Infraestrutura cloud',
    sub: 'Memória persistente · banco vetorial',
    value: '− R$1,80',
    tone: 'cost',
  },
  {
    label: 'Pagamento (gateway)',
    sub: 'Pix automático + cartão recorrente',
    value: '− R$1,00',
    tone: 'cost',
  },
  { label: 'CS + suporte', sub: 'Média por usuária ativa', value: '− R$1,50', tone: 'cost' },
  {
    label: 'Haiku Free subsidiado',
    sub: 'Haiku 4.5 ÷ taxa conversão 11%',
    value: '− R$2,20',
    tone: 'cost',
  },
  {
    label: 'Margem de contribuição',
    sub: 'Por assinante · mês · cenário Conservador',
    value: '+ R$34,07',
    tone: 'margin',
  },
  { label: 'Ticket líquido s/ impostos (12%)', value: 'R$35,11 efetivo', tone: 'total' },
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
  { label: 'Converte para pago (11% total)', count: '~110', pct: '11% do total', bar: 22 },
];

export const funnelLevers = [
  '3 resoluções na semana 1 = conversão 2× maior',
  'Onboarding profundo prediz qual agente converter',
  'Reativação automática 48h = +12% de retorno',
  'Memória contextual = maior retenção e lock-in',
];

export const ltvCalc = [
  { val: 'R$39,90', label: 'Ticket Essencial (cenário Conservador)', tone: 'noma' },
  { val: '12,5m', label: 'Vida média estimada (churn 8%/mês)', tone: 'gold' },
  { val: 'R$425,89', label: 'LTV Essencial · cenário Conservador', tone: 'dark' },
  { val: 'R$780+', label: 'LTV otimista (churn 3,5% · mês 18+)', tone: 'noma-solid' },
];

export const ltvSubMetrics = [
  { label: 'CAC full-loaded', value: 'R$80', sub: 'inclui mkt + CS + onboarding', tone: 'noma' },
  { label: 'Churn Essencial', value: '8%/mês', sub: '= vida média ~12,5 meses', tone: 'noma' },
  { label: 'Churn meta M18', value: '3,5%/mês', sub: 'Memória = lock-in real', tone: 'gold' },
  { label: 'LTV/CAC Conservador', value: '5,3×', sub: '→ 9,0× Base · 10,4× Otimista', tone: 'noma' },
];

export const breakeven = [
  {
    label: 'Breakeven operacional',
    value: 'Mês 6 · ~1.980 assinantes',
    sub:
      'Resultado mensal torna-se positivo em M6. Caixa acumulado cruza o zero no M10. A partir daí o negócio é auto-sustentável.',
  },
  {
    label: 'Runway com R$1M',
    value: '~18 meses',
    sub:
      'Aporte de R$1M (15% equity) cobre operação até o breakeven de caixa (M10) com margem de segurança para Seed Round.',
  },
  {
    label: 'Retorno ao anjo · Conservador',
    value: '4,2× sobre aporte',
    sub:
      'Valuation M24 R$27,7M · fatia 15% = R$4,15M · sobre aporte R$1M. Cenário Base: 11,3× · Otimista: 22,3×.',
  },
];
