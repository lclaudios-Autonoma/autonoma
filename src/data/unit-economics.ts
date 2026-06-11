// ─────────────────────────────────────────────────────────────
//  AutoNoma · Unit Economics
//  Fonte: descritivo_modelo_negocio_autonoma.docx · Tabelas 5 e 6
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
  ],
  en: [
    {
      label: 'LTV / CAC · Conservative',
      value: '5.3×',
      sub:
        'LTV R$425.89 ÷ CAC R$80 · healthy benchmark ≥ 3× · scales to 9.0× (Base) and 10.4× (Optimistic) as conversion and churn improve',
      barPct: 53,
    },
    {
      label: 'CAC Payback',
      value: '2.35mo',
      sub:
        'CAC R$80 ÷ unit margin R$34.07/mo · recovered in under a quarter · SaaS reference: 12–18 months',
      barPct: 88,
    },
    {
      label: 'Unit Margin',
      value: 'R$34.07',
      sub:
        'Ticket R$39.90 − API R$5.83 (cached Sonnet 4.6) − other variable costs · scales with subscriber volume',
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

// Fonte: Tabela 5 do documento (plano Essencial · cenário Conservador)
export const breakdown: Record<Lang, BreakdownRow[]> = {
  pt: [
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
  ],
  en: [
    {
      label: 'Gross revenue',
      sub: 'Essencial plan · launch price',
      value: '+ R$39.90',
      tone: 'revenue',
    },
    {
      label: 'Claude API (Anthropic)',
      sub: 'Sonnet 4.6 · prompt caching · average use/mo',
      value: '− R$5.83',
      tone: 'cost',
    },
    {
      label: 'Cloud infrastructure',
      sub: 'Persistent memory · vector database',
      value: '− R$1.80',
      tone: 'cost',
    },
    {
      label: 'Payments (gateway)',
      sub: 'Automatic Pix + recurring card',
      value: '− R$1.00',
      tone: 'cost',
    },
    { label: 'CS + support', sub: 'Average per active user', value: '− R$1.50', tone: 'cost' },
    {
      label: 'Subsidized Free tier (Haiku)',
      sub: 'Haiku 4.5 ÷ 11% conversion rate',
      value: '− R$2.20',
      tone: 'cost',
    },
    {
      label: 'Contribution margin',
      sub: 'Per subscriber · month · Conservative scenario',
      value: '+ R$34.07',
      tone: 'margin',
    },
    { label: 'Net ticket after taxes (12%)', value: 'R$35.11 effective', tone: 'total' },
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
    { label: 'Converte para pago (11% total)', count: '~110', pct: '11% do total', bar: 22 },
  ],
  en: [
    { label: 'Waitlist (invite)', count: '1,000', pct: '100%', bar: 100 },
    { label: 'Completes onboarding', count: '880', pct: '88%', bar: 88 },
    { label: 'Activates Free in week 1', count: '634', pct: '72%', bar: 72 },
    { label: 'Returns in month 1', count: '285', pct: '45%', bar: 45 },
    { label: 'Converts to paid (11% total)', count: '~110', pct: '11% of total', bar: 22 },
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
    { val: 'R$39,90', label: 'Ticket Essencial (cenário Conservador)', tone: 'noma' },
    { val: '12,5m', label: 'Vida média estimada (churn 8%/mês)', tone: 'gold' },
    { val: 'R$425,89', label: 'LTV Essencial · cenário Conservador', tone: 'dark' },
    { val: 'R$780+', label: 'LTV otimista (churn 3,5% · mês 18+)', tone: 'noma-solid' },
  ],
  en: [
    { val: 'R$39.90', label: 'Essencial ticket (Conservative scenario)', tone: 'noma' },
    { val: '12.5mo', label: 'Estimated average lifetime (8%/mo churn)', tone: 'gold' },
    { val: 'R$425.89', label: 'Essencial LTV · Conservative scenario', tone: 'dark' },
    { val: 'R$780+', label: 'Optimistic LTV (3.5% churn · month 18+)', tone: 'noma-solid' },
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
    { label: 'Churn meta M18', value: '3,5%/mês', sub: 'Memória = lock-in real', tone: 'gold' },
    { label: 'LTV/CAC Conservador', value: '5,3×', sub: '→ 9,0× Base · 10,4× Otimista', tone: 'noma' },
  ],
  en: [
    { label: 'Full-loaded CAC', value: 'R$80', sub: 'includes mkt + CS + onboarding', tone: 'noma' },
    { label: 'Essencial churn', value: '8%/mo', sub: '= avg lifetime ~12.5 months', tone: 'noma' },
    { label: 'Churn target M18', value: '3.5%/mo', sub: 'Memory = real lock-in', tone: 'gold' },
    { label: 'LTV/CAC Conservative', value: '5.3×', sub: '→ 9.0× Base · 10.4× Optimistic', tone: 'noma' },
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
  ],
  en: [
    {
      label: 'Operational breakeven',
      value: 'Month 6 · ~1,980 subscribers',
      sub:
        'Monthly result turns positive in M6. Accumulated cash crosses zero in M10. From there the business is self-sustaining.',
    },
    {
      label: 'Runway with R$1M',
      value: '~18 months',
      sub:
        'A R$1M investment (15% equity) covers operations through cash breakeven (M10) with a safety margin for the Seed Round.',
    },
    {
      label: 'Angel return · Conservative',
      value: '4.2× on investment',
      sub:
        'M24 valuation R$27.7M · 15% stake = R$4.15M · on a R$1M investment. Base scenario: 11.3× · Optimistic: 22.3×.',
    },
  ],
};
