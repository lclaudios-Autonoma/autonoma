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
      value: '6,9×',
      sub:
        'LTV R$551 ÷ CAC R$80 · benchmark saudável ≥ 3× · escala para 10,3× (Base) e 13,9× (Otimista) conforme conversão e churn melhorem',
      barPct: 69,
    },
    {
      label: 'Payback do CAC',
      value: '1,8m',
      sub:
        'CAC R$80 ÷ margem unitária R$44,07/mês · recuperação em menos de 2 meses · referência SaaS: 12–18 meses',
      barPct: 92,
    },
    {
      label: 'Margem Unitária',
      value: 'R$44,07',
      sub:
        'Ticket R$49,90 (assinatura + uso agentes) − API R$5,83 (Sonnet 4.6 cacheado) · escala com volume de assinantes',
      barPct: 78,
    },
  ],
  en: [
    {
      label: 'LTV / CAC · Conservative',
      value: '6.9×',
      sub:
        'LTV R$551 ÷ CAC R$80 · healthy benchmark ≥ 3× · scales to 10.3× (Base) and 13.9× (Optimistic) as conversion and churn improve',
      barPct: 69,
    },
    {
      label: 'CAC Payback',
      value: '1.8mo',
      sub:
        'CAC R$80 ÷ unit margin R$44.07/mo · recovered in under 2 months · SaaS reference: 12–18 months',
      barPct: 92,
    },
    {
      label: 'Unit Margin',
      value: 'R$44.07',
      sub:
        'Ticket R$49.90 (subscription + agent usage) − API R$5.83 (cached Sonnet 4.6) · scales with subscriber volume',
      barPct: 78,
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
      sub: 'Plano Essencial + uso agentes (cenário base)',
      value: '+ R$49,90',
      tone: 'revenue',
    },
    {
      label: 'Claude API (Anthropic)',
      sub: 'Sonnet 4.6 · prompt caching · uso médio/mês',
      value: '− R$5,83',
      tone: 'cost',
    },
    {
      label: 'Margem de contribuição',
      sub: 'Por assinante · mês · cenário Conservador',
      value: '+ R$44,07',
      tone: 'margin',
    },
    { label: 'Ticket líquido s/ impostos (15%)', value: 'R$42,42 efetivo', tone: 'total' },
  ],
  en: [
    {
      label: 'Gross revenue',
      sub: 'Essencial plan + agent usage (base scenario)',
      value: '+ R$49.90',
      tone: 'revenue',
    },
    {
      label: 'Claude API (Anthropic)',
      sub: 'Sonnet 4.6 · prompt caching · average use/mo',
      value: '− R$5.83',
      tone: 'cost',
    },
    {
      label: 'Contribution margin',
      sub: 'Per subscriber · month · Conservative scenario',
      value: '+ R$44.07',
      tone: 'margin',
    },
    { label: 'Net ticket after taxes (15%)', value: 'R$42.42 effective', tone: 'total' },
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
    { label: 'Lista de espera (convite)', count: '1.000', pct: '100%', bar: 100 },
    { label: 'Completa onboarding', count: '880', pct: '88%', bar: 88 },
    { label: 'Ativa Free semana 1', count: '634', pct: '72%', bar: 72 },
    { label: 'Retorna no mês 1', count: '285', pct: '45%', bar: 45 },
    { label: 'Converte para pago (10% Essencial)', count: '~100', pct: '10% do total', bar: 20 },
  ],
  en: [
    { label: 'Waitlist (invite)', count: '1,000', pct: '100%', bar: 100 },
    { label: 'Completes onboarding', count: '880', pct: '88%', bar: 88 },
    { label: 'Activates Free in week 1', count: '634', pct: '72%', bar: 72 },
    { label: 'Returns in month 1', count: '285', pct: '45%', bar: 45 },
    { label: 'Converts to paid (10% Essencial)', count: '~100', pct: '10% of total', bar: 20 },
  ],
};

export const funnelLevers: Record<Lang, string[]> = {
  pt: [
    '3 resoluções na semana 1 = conversão 2× maior',
    'Onboarding profundo prediz qual agente converter',
    'Reativação automática 48h = +12% de retorno',
    'Memória contextual = maior retenção e lock-in',
  ],
  en: [
    '3 resolutions in week 1 = 2× higher conversion',
    'Deep onboarding predicts which agent will convert',
    'Automatic 48h reactivation = +12% return rate',
    'Contextual memory = higher retention and lock-in',
  ],
};

export interface LtvItem {
  val: string;
  label: string;
  tone: string;
}

export const ltvCalc: Record<Lang, LtvItem[]> = {
  pt: [
    { val: 'R$49,90', label: 'Ticket Essencial + agentes (cenário Conservador)', tone: 'noma' },
    { val: '12,5m', label: 'Vida média estimada (churn 8%/mês)', tone: 'gold' },
    { val: 'R$551', label: 'LTV Essencial · cenário Conservador', tone: 'dark' },
    { val: 'R$831+', label: 'LTV otimista (churn 5% · vida 20m)', tone: 'noma-solid' },
  ],
  en: [
    { val: 'R$49.90', label: 'Essencial ticket + agents (Conservative scenario)', tone: 'noma' },
    { val: '12.5mo', label: 'Estimated average lifetime (8%/mo churn)', tone: 'gold' },
    { val: 'R$551', label: 'Essencial LTV · Conservative scenario', tone: 'dark' },
    { val: 'R$831+', label: 'Optimistic LTV (5% churn · 20mo lifetime)', tone: 'noma-solid' },
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
    { label: 'CAC full-loaded', value: 'R$80', sub: 'inclui mkt + CS + onboarding', tone: 'noma' },
    { label: 'Churn Essencial', value: '8%/mês', sub: '= vida média ~12,5 meses', tone: 'noma' },
    { label: 'Churn Otimista', value: '5%/mês', sub: '= vida média ~20 meses', tone: 'gold' },
    { label: 'LTV/CAC Conservador', value: '6,9×', sub: '→ 10,3× Base · 13,9× Otimista', tone: 'noma' },
  ],
  en: [
    { label: 'Full-loaded CAC', value: 'R$80', sub: 'includes mkt + CS + onboarding', tone: 'noma' },
    { label: 'Essencial churn', value: '8%/mo', sub: '= avg lifetime ~12.5 months', tone: 'noma' },
    { label: 'Optimistic churn', value: '5%/mo', sub: '= avg lifetime ~20 months', tone: 'gold' },
    { label: 'LTV/CAC Conservative', value: '6.9×', sub: '→ 10.3× Base · 13.9× Optimistic', tone: 'noma' },
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
      value: 'Mês 6 · ~2.785 assinantes',
      sub:
        'Resultado mensal torna-se positivo em M6. A partir daí o negócio é auto-sustentável.',
    },
    {
      label: 'Runway com R$1M',
      value: '~18 meses',
      sub:
        'Aporte de R$1M (15% equity) cobre operação até o breakeven com margem de segurança para Seed Round.',
    },
    {
      label: 'Retorno ao anjo · Conservador',
      value: '2,99× sobre aporte',
      sub:
        'Valuation M24 R$19,9M · fatia 15% = R$2,99M · sobre aporte R$1M. Cenário Base: 7,62× · Otimista: 15,2×.',
    },
  ],
  en: [
    {
      label: 'Operational breakeven',
      value: 'Month 6 · ~2,785 subscribers',
      sub:
        'Monthly result turns positive in M6. From there the business is self-sustaining.',
    },
    {
      label: 'Runway with R$1M',
      value: '~18 months',
      sub:
        'A R$1M investment (15% equity) covers operations through breakeven with a safety margin for the Seed Round.',
    },
    {
      label: 'Angel return · Conservative',
      value: '2.99× on investment',
      sub:
        'M24 valuation R$19.9M · 15% stake = R$2.99M · on a R$1M investment. Base scenario: 7.62× · Optimistic: 15.2×.',
    },
  ],
};
