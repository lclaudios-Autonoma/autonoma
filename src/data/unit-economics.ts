// ─────────────────────────────────────────────────────────────
//  AutoNoma · Unit Economics — Modelo 3.1
//  Fonte: AUTONOMA_3_1_MODELO_UNICO_MARKETPLACE.md
//  4 perfis: Mensal · Anual · Mensal+Agente · Anual+Agente
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
      label: 'LTV / CAC · Noma Mensal (base)',
      value: '6,2×',
      sub:
        'LTV R$374 ÷ CAC R$60 · benchmark saudável ≥ 3× · sobe para 12,1× com Anual + Agente',
      barPct: 62,
    },
    {
      label: 'Payback do CAC',
      value: '60 dias',
      sub:
        'CAC R$60 ÷ margem unitária R$29,91/mês (Noma Mensal) · recuperação em ~2 meses · referência SaaS: 12–18 meses',
      barPct: 90,
    },
    {
      label: 'Margem Unitária (Noma Mensal)',
      value: 'R$29,91',
      sub:
        'Ticket R$39,90 − imposto 10% (R$3,99) − API Sonnet R$6,00 (com Prompt Caching) · margem 75%',
      barPct: 75,
    },
  ],
  en: [
    {
      label: 'LTV / CAC · Noma Monthly (base)',
      value: '6.2×',
      sub:
        'LTV R$374 ÷ CAC R$60 · healthy benchmark ≥ 3× · rises to 12.1× with Annual + Agent',
      barPct: 62,
    },
    {
      label: 'CAC Payback',
      value: '60 days',
      sub:
        'CAC R$60 ÷ unit margin R$29.91/mo (Noma Monthly) · recovered in ~2 months · SaaS reference: 12–18 months',
      barPct: 90,
    },
    {
      label: 'Unit Margin (Noma Monthly)',
      value: 'R$29.91',
      sub:
        'Ticket R$39.90 − 10% tax (R$3.99) − Sonnet API R$6.00 (with Prompt Caching) · 75% margin',
      barPct: 75,
    },
  ],
};

export interface BreakdownRow {
  label: string;
  sub?: string;
  value: string;
  tone: 'revenue' | 'cost' | 'margin' | 'total';
}

// Plano Noma Mensal · Modelo 3.1
export const breakdown: Record<Lang, BreakdownRow[]> = {
  pt: [
    {
      label: 'Receita bruta',
      sub: 'Plano Noma mensal · Prompt Caching obrigatório',
      value: '+ R$39,90',
      tone: 'revenue',
    },
    {
      label: 'Imposto sobre receita',
      sub: 'Ano 1: 10% · Ano 2+: 13%',
      value: '− R$3,99',
      tone: 'cost',
    },
    {
      label: 'Claude API (Anthropic)',
      sub: 'Sonnet 4.6 · 120 interações · Prompt Caching (−90% input) · Haiku fallback',
      value: '− R$6,00',
      tone: 'cost',
    },
    {
      label: 'Margem de contribuição',
      sub: 'Por assinante Noma Mensal · SEM Caching custo sobe para R$35–50/usuária',
      value: '+ R$29,91',
      tone: 'margin',
    },
    { label: 'Margem líquida %', value: '75% do preço', tone: 'total' },
  ],
  en: [
    {
      label: 'Gross revenue',
      sub: 'Noma monthly plan · Prompt Caching mandatory',
      value: '+ R$39.90',
      tone: 'revenue',
    },
    {
      label: 'Revenue tax',
      sub: 'Year 1: 10% · Year 2+: 13%',
      value: '− R$3.99',
      tone: 'cost',
    },
    {
      label: 'Claude API (Anthropic)',
      sub: 'Sonnet 4.6 · 120 interactions · Prompt Caching (−90% input) · Haiku fallback',
      value: '− R$6.00',
      tone: 'cost',
    },
    {
      label: 'Contribution margin',
      sub: 'Per Noma Monthly subscriber · WITHOUT Caching cost rises to R$35–50/user',
      value: '+ R$29.91',
      tone: 'margin',
    },
    { label: 'Net margin %', value: '75% of ticket', tone: 'total' },
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
    { label: 'Inicia trial 14 dias (sem cartão)', count: '3.000', pct: '100%', bar: 100 },
    { label: 'Completa onboarding com IA', count: '2.640', pct: '88%', bar: 88 },
    { label: 'Ativa primeira interação útil', count: '2.160', pct: '72%', bar: 72 },
    { label: 'Retorna na semana 2 do trial', count: '1.080', pct: '36%', bar: 36 },
    { label: 'Converte para Noma pago (15%)', count: '~450', pct: '15% (trial)', bar: 30 },
  ],
  en: [
    { label: 'Starts 14-day trial (no card)', count: '3,000', pct: '100%', bar: 100 },
    { label: 'Completes AI-driven onboarding', count: '2,640', pct: '88%', bar: 88 },
    { label: 'Activates first useful interaction', count: '2,160', pct: '72%', bar: 72 },
    { label: 'Returns in trial week 2', count: '1,080', pct: '36%', bar: 36 },
    { label: 'Converts to paid Noma (15%)', count: '~450', pct: '15% (trial)', bar: 30 },
  ],
};

export const funnelLevers: Record<Lang, string[]> = {
  pt: [
    'Trial 14 dias força conversão: sem "free permanente", só pago ou saída',
    'Onboarding agressivo identifica qual agente cada usuária vai usar',
    'IA no onboarding aumenta ativação em 27% (Sensor Tower 2026)',
    'Trial 14 dias converte 8–12% melhor que trial de 30 dias (GrowthSpree 2026)',
  ],
  en: [
    '14-day trial drives conversion: no "permanent free," only paid or exit',
    'Aggressive onboarding identifies which agent each user will adopt',
    'AI in onboarding increases activation by 27% (Sensor Tower 2026)',
    '14-day trial converts 8–12% better than 30-day trial (GrowthSpree 2026)',
  ],
};

export interface LtvItem {
  val: string;
  label: string;
  tone: string;
}

export const ltvCalc: Record<Lang, LtvItem[]> = {
  pt: [
    { val: 'R$29,91', label: 'Margem unitária Noma Mensal (R$39,90 − impostos − API)', tone: 'noma' },
    { val: '12,5m', label: 'Vida média sem agente (churn 8%/mês)', tone: 'gold' },
    { val: 'R$374', label: 'LTV Noma Mensal · sem agente', tone: 'dark' },
    { val: 'R$727', label: 'LTV Mensal + Agente (churn 5% · vida 20m)', tone: 'noma-solid' },
    { val: 'R$728', label: 'LTV Anual + Agente (churn 3% · vida 24m)', tone: 'gold' },
  ],
  en: [
    { val: 'R$29.91', label: 'Noma Monthly unit margin (R$39.90 − taxes − API)', tone: 'noma' },
    { val: '12.5mo', label: 'Avg lifetime without agent (8%/mo churn)', tone: 'gold' },
    { val: 'R$374', label: 'LTV Noma Monthly · no agent', tone: 'dark' },
    { val: 'R$727', label: 'LTV Monthly + Agent (5% churn · 20mo lifetime)', tone: 'noma-solid' },
    { val: 'R$728', label: 'LTV Annual + Agent (3% churn · 24mo lifetime)', tone: 'gold' },
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
    { label: 'Churn sem agente', value: '8%/mês', sub: '= vida média 12,5m · LTV R$374', tone: 'noma' },
    { label: 'Churn com agente', value: '5%/mês', sub: '= vida média 20m · LTV R$727 (lock-in de dados)', tone: 'gold' },
    { label: 'LTV/CAC · melhor perfil', value: '12,1×', sub: 'Anual + Agente · payback 2,0m', tone: 'noma' },
  ],
  en: [
    { label: 'Full-loaded CAC', value: 'R$60', sub: 'includes mkt + CS + onboarding blended', tone: 'noma' },
    { label: 'Churn without agent', value: '8%/mo', sub: '= avg lifetime 12.5mo · LTV R$374', tone: 'noma' },
    { label: 'Churn with agent', value: '5%/mo', sub: '= avg lifetime 20mo · LTV R$727 (data lock-in)', tone: 'gold' },
    { label: 'LTV/CAC · best profile', value: '12.1×', sub: 'Annual + Agent · payback 2.0mo', tone: 'noma' },
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
      value: 'Mês 9 · cenário único',
      sub:
        'Resultado mensal torna-se positivo em M9 com 2.274 pagantes e MRR R$97K. A partir daí o negócio é auto-sustentável.',
    },
    {
      label: 'Runway com R$1M',
      value: '~20 meses cobertos',
      sub:
        'Aporte de R$1M (15% equity): 40% Produto/Eng · 35% Mkt/Aquisição · 25% Operações/Infra. Cobre operação bem além do breakeven.',
    },
    {
      label: 'Retorno ao anjo · M24 (15% equity)',
      value: '2,3× a 4,1× sobre aporte',
      sub:
        'Conservador: 2,3× (Val. R$15,7M · 4× ARR) · Base: 2,9× (Val. R$19,6M · 5× ARR) · Otimista: 4,1× (Val. R$27,4M · 7× ARR).',
    },
  ],
  en: [
    {
      label: 'Operational breakeven',
      value: 'Month 9 · single scenario',
      sub:
        'Monthly result turns positive in M9 with 2,274 paying users and MRR R$97K. From there the business is self-sustaining.',
    },
    {
      label: 'Runway with R$1M',
      value: '~20 months covered',
      sub:
        'R$1M investment (15% equity): 40% Product/Eng · 35% Mkt/Acquisition · 25% Operations/Infra. Covers operations well beyond breakeven.',
    },
    {
      label: 'Angel return · M24 (15% equity)',
      value: '2.3× to 4.1× on investment',
      sub:
        'Conservative: 2.3× (Val. R$15.7M · 4× ARR) · Base: 2.9× (Val. R$19.6M · 5× ARR) · Optimistic: 4.1× (Val. R$27.4M · 7× ARR).',
    },
  ],
};
