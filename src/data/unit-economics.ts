// ─────────────────────────────────────────────────────────────
//  AutoNoma · Unit Economics
//  Fonte: resumo cenarios .xlsx (BPAUTONOMA)
//  Cenário de referência: Conservador
// ─────────────────────────────────────────────────────────────
import { Lang } from '../i18n/LanguageContext';

export interface KPI {
  label: string;
  value: string;
  sub: string;
  barPct: number;
}

export const kpis: Record<Lang, KPI[]> = {
  pt: [
    {
      label: 'LTV / CAC · Conservador',
      value: '5,3×',
      sub:
        'LTV R$431 ÷ CAC R$60 · benchmark saudável ≥ 3× · escala para 7,3× (Base) e 10,2× (Otimista) conforme conversão e churn melhorem',
      barPct: 53,
    },
    {
      label: 'Payback do CAC',
      value: '~2,5m',
      sub:
        'CAC R$60 ÷ margem unitária R$25,41/mês (Essencial) · recuperação em 2–3 meses · referência SaaS: 12–18 meses',
      barPct: 85,
    },
    {
      label: 'Margem Unitária (Essencial)',
      value: 'R$25,41',
      sub:
        'Ticket R$44,90 − imposto 10% − API R$15,00 (Haiku trial / Sonnet 4.6 pago) · margem 56,6% do preço',
      barPct: 72,
    },
  ],
  en: [
    {
      label: 'LTV / CAC · Conservative',
      value: '5.3×',
      sub:
        'LTV R$431 ÷ CAC R$60 · healthy benchmark ≥ 3× · scales to 7.3× (Base) and 10.2× (Optimistic) as conversion and churn improve',
      barPct: 53,
    },
    {
      label: 'CAC Payback',
      value: '~2.5mo',
      sub:
        'CAC R$60 ÷ unit margin R$25.41/mo (Essencial) · recovered in 2–3 months · SaaS reference: 12–18 months',
      barPct: 85,
    },
    {
      label: 'Unit Margin (Essencial)',
      value: 'R$25.41',
      sub:
        'Ticket R$44.90 − 10% tax − API R$15.00 (Haiku trial / cached Sonnet 4.6 paid) · 56.6% gross margin',
      barPct: 72,
    },
  ],
};

export interface BreakdownRow {
  label: string;
  sub?: string;
  value: string;
  tone: 'revenue' | 'cost' | 'margin' | 'total';
}

// Fonte: planilha resumo cenarios .xlsx (plano Essencial · cenário Conservador)
export const breakdown: Record<Lang, BreakdownRow[]> = {
  pt: [
    {
      label: 'Receita bruta',
      sub: 'Plano Essencial (trial Haiku / pago Sonnet)',
      value: '+ R$44,90',
      tone: 'revenue',
    },
    {
      label: 'Imposto sobre receita',
      sub: 'Ano 1: 10% · Ano 2+: 13%',
      value: '− R$4,49',
      tone: 'cost',
    },
    {
      label: 'Claude API (Anthropic)',
      sub: 'Haiku trial / Sonnet 4.6 · prompt caching · uso médio',
      value: '− R$15,00',
      tone: 'cost',
    },
    {
      label: 'Margem de contribuição',
      sub: 'Por assinante Essencial · mês · Conservador',
      value: '+ R$25,41',
      tone: 'margin',
    },
    { label: 'Margem líquida %', value: '56,6% do preço', tone: 'total' },
  ],
  en: [
    {
      label: 'Gross revenue',
      sub: 'Essencial plan (trial Haiku / paid Sonnet)',
      value: '+ R$44.90',
      tone: 'revenue',
    },
    {
      label: 'Revenue tax',
      sub: 'Year 1: 10% · Year 2+: 13%',
      value: '− R$4.49',
      tone: 'cost',
    },
    {
      label: 'Claude API (Anthropic)',
      sub: 'Haiku trial / Sonnet 4.6 · prompt caching · avg use',
      value: '− R$15.00',
      tone: 'cost',
    },
    {
      label: 'Contribution margin',
      sub: 'Per Essencial subscriber · month · Conservative',
      value: '+ R$25.41',
      tone: 'margin',
    },
    { label: 'Net margin %', value: '56.6% of ticket', tone: 'total' },
  ],
};

export interface FunnelStep {
  label: string;
  count: string;
  pct: string;
  bar: number;
}

export const funnelSteps: Record<Lang, FunnelStep[]> = {
  pt: [
    { label: 'Inicia trial gratuito 30d', count: '1.500', pct: '100%', bar: 100 },
    { label: 'Completa onboarding', count: '1.320', pct: '88%', bar: 88 },
    { label: 'Ativa primeiro agente sem pago', count: '1.080', pct: '72%', bar: 72 },
    { label: 'Retorna semana 2–4 do trial', count: '540', pct: '36%', bar: 36 },
    { label: 'Converte para pago (15% média)', count: '~225', pct: '15% (trial)',  bar: 30 },
  ],
  en: [
    { label: 'Starts free 30-day trial', count: '1,500', pct: '100%', bar: 100 },
    { label: 'Completes onboarding', count: '1,320', pct: '88%', bar: 88 },
    { label: 'Activates first agent (unpaid)', count: '1,080', pct: '72%', bar: 72 },
    { label: 'Returns in weeks 2–4 of trial', count: '540', pct: '36%', bar: 36 },
    { label: 'Converts to paid (15% avg)', count: '~225', pct: '15% (trial)',  bar: 30 },
  ],
};

export const funnelLevers: Record<Lang, string[]> = {
  pt: [
    'Trial 30d força conversão: sem "free permanente", só pago ou saída',
    'Onboarding profundo identifica qual agente cada usuária vai usar',
    'Reativação automática 48h durante trial = +12% de retorno no fim do período',
    'Memória contextual acumula histórico: moat cresce com dias de trial',
  ],
  en: [
    'Trial 30d drives conversion: no "permanent free," only paid or exit',
    'Deep onboarding identifies which agent each user will adopt',
    'Automatic 48h reactivation during trial = +12% return at period end',
    'Contextual memory builds history: moat grows with trial days',
  ],
};

export interface LtvItem {
  val: string;
  label: string;
  tone: string;
}

export const ltvCalc: Record<Lang, LtvItem[]> = {
  pt: [
    { val: 'R$25,41', label: 'Margem unitária Essencial (R$44,90 − impostos − API)', tone: 'noma' },
    { val: '17m', label: 'Vida média efetiva (churn 8%/mês, teto 24m)', tone: 'gold' },
    { val: 'R$431', label: 'LTV Essencial · cenário Conservador', tone: 'dark' },
    { val: 'R$509+', label: 'LTV otimista (churn 5% · vida 20m)', tone: 'noma-solid' },
  ],
  en: [
    { val: 'R$25.41', label: 'Essencial unit margin (R$44.90 − taxes − API)', tone: 'noma' },
    { val: '17mo', label: 'Effective avg lifetime (8%/mo churn, capped 24m)', tone: 'gold' },
    { val: 'R$431', label: 'Essencial LTV · Conservative scenario', tone: 'dark' },
    { val: 'R$509+', label: 'Optimistic LTV (5% churn · 20mo lifetime)', tone: 'noma-solid' },
  ],
};

export interface LtvSubMetric {
  label: string;
  value: string;
  sub: string;
  tone: string;
}

export const ltvSubMetrics: Record<Lang, LtvSubMetric[]> = {
  pt: [
    { label: 'CAC full-loaded', value: 'R$60', sub: 'inclui mkt + CS + onboarding blended', tone: 'noma' },
    { label: 'Churn Essencial', value: '8%/mês', sub: '= vida média ~17m (teto 24m)', tone: 'noma' },
    { label: 'Churn Otimista', value: '5%/mês', sub: '= vida média 20m', tone: 'gold' },
    { label: 'LTV/CAC Conservador', value: '5,3×', sub: '→ 7,3× Base · 10,2× Otimista', tone: 'noma' },
  ],
  en: [
    { label: 'Full-loaded CAC', value: 'R$60', sub: 'includes mkt + CS + onboarding blended', tone: 'noma' },
    { label: 'Essencial churn', value: '8%/mo', sub: '= avg lifetime ~17mo (capped 24m)', tone: 'noma' },
    { label: 'Optimistic churn', value: '5%/mo', sub: '= avg lifetime 20mo', tone: 'gold' },
    { label: 'LTV/CAC Conservative', value: '5.3×', sub: '→ 7.3× Base · 10.2× Optimistic', tone: 'noma' },
  ],
};

export interface BreakevenItem {
  label: string;
  value: string;
  sub: string;
}

export const breakeven: Record<Lang, BreakevenItem[]> = {
  pt: [
    {
      label: 'Breakeven operacional',
      value: 'Mês 4 · todos os cenários',
      sub:
        'Resultado mensal torna-se positivo em M4 (Conservador) a M4 (Otimista). A partir daí o negócio é auto-sustentável sem mais aporte.',
    },
    {
      label: 'Runway com R$1M',
      value: '~22 meses até M24',
      sub:
        'Aporte de R$1M (15% equity) cobre operação bem além do breakeven. Fluxo de caixa positivo a partir de M5.',
    },
    {
      label: 'Retorno ao anjo · M24 (15% equity)',
      value: '2,5× a 6,8× sobre aporte',
      sub:
        'Conservador: 2,5× (Val. R$16,7M) · Base: 4,0× (Val. R$26,7M) · Otimista: 6,8× (Val. R$45,3M). Múltiplo ARR: 4–7×.',
    },
  ],
  en: [
    {
      label: 'Operational breakeven',
      value: 'Month 4 · all scenarios',
      sub:
        'Monthly result turns positive in M4 across Conservative to Optimistic. From there the business is self-sustaining without further funding.',
    },
    {
      label: 'Runway with R$1M',
      value: '~22 months until M24',
      sub:
        'A R$1M investment (15% equity) covers operations well beyond breakeven. Positive cash flow from M5 onward.',
    },
    {
      label: 'Angel return · M24 (15% equity)',
      value: '2.5× to 6.8× on investment',
      sub:
        'Conservative: 2.5× (Val. R$16.7M) · Base: 4.0× (Val. R$26.7M) · Optimistic: 6.8× (Val. R$45.3M). ARR multiple: 4–7×.',
    },
  ],
};
