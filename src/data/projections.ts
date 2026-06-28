// ─────────────────────────────────────────────────────────────
//  AutoNoma · Projeções Financeiras — Modelo 3.1
//  Fonte: AUTONOMA_3_1_MODELO_UNICO_MARKETPLACE.md
//  Cenário operacional ÚNICO + 3 múltiplos de valuation
// ─────────────────────────────────────────────────────────────
import { Lang } from '../i18n/LanguageContext';

export interface Scenario {
  label: string;
  tone: 'conservador' | 'base' | 'otimista';
  metrics: { val: string; label: string }[];
  assumptions: string[];
}

export const scenarios: Record<Lang, Scenario[]> = {
  pt: [
    {
      label: '🛡️ Valuation Conservador',
      tone: 'conservador',
      metrics: [
        { val: '3.420', label: 'Pagantes mês 12' },
        { val: '6.955', label: 'Pagantes mês 24' },
        { val: 'R$326K', label: 'MRR mês 24' },
        { val: 'M9', label: 'Breakeven operacional' },
        { val: 'R$15,7M', label: 'Valuation M24' },
        { val: '2,3×', label: 'Retorno do anjo' },
      ],
      assumptions: [
        'Múltiplo ARR: 4× · ARR M24 R$3,91M',
        'Plano único Noma R$39,90/mês',
        'Trial 14 dias · conv. M1: 10% · M2+: 15%',
        'Churn: 8%/mês (sem agente) · 5% (com agente) · 3% (anual)',
        'CAC full-loaded R$60 · LTV/CAC 6,2× (base)',
        'Receita acumulada 24m: R$4,27M',
      ],
    },
    {
      label: '📊 Valuation Base',
      tone: 'base',
      metrics: [
        { val: '3.420', label: 'Pagantes mês 12' },
        { val: '6.955', label: 'Pagantes mês 24' },
        { val: 'R$326K', label: 'MRR mês 24' },
        { val: 'M9', label: 'Breakeven operacional' },
        { val: 'R$19,6M', label: 'Valuation M24' },
        { val: '2,9×', label: 'Retorno do anjo' },
      ],
      assumptions: [
        'Múltiplo ARR: 5× · ARR M24 R$3,91M',
        'ARPU M24 R$46,89 (40% base com agente)',
        'Split mensal/anual: 55%/45% em M24',
        'Marketplace: 40% da base paga ao menos 1 agente',
        'Resultado acumulado M24: R$899K',
        'Margem operacional M24: 38,9%',
      ],
    },
    {
      label: '🚀 Valuation Otimista',
      tone: 'otimista',
      metrics: [
        { val: '3.420', label: 'Pagantes mês 12' },
        { val: '6.955', label: 'Pagantes mês 24' },
        { val: 'R$326K', label: 'MRR mês 24' },
        { val: 'M9', label: 'Breakeven operacional' },
        { val: 'R$27,4M', label: 'Valuation M24' },
        { val: '4,1×', label: 'Retorno do anjo' },
      ],
      assumptions: [
        'Múltiplo ARR: 7× · ARR M24 R$3,91M',
        'LTV/CAC com agente: 12,1× (Anual + Agente)',
        'Payback CAC: 1,7m (mensal + agente)',
        'NomaCorporate: upside não modelado',
        'Onda 3 agentes M13: 18 agentes no marketplace',
        'Expansão LATAM como upside qualitativo',
      ],
    },
  ],
  en: [
    {
      label: '🛡️ Conservative Valuation',
      tone: 'conservador',
      metrics: [
        { val: '3,420', label: 'Paying users month 12' },
        { val: '6,955', label: 'Paying users month 24' },
        { val: 'R$326K', label: 'MRR month 24' },
        { val: 'M9', label: 'Operational breakeven' },
        { val: 'R$15.7M', label: 'Valuation M24' },
        { val: '2.3×', label: 'Angel return' },
      ],
      assumptions: [
        'ARR multiple: 4× · ARR M24 R$3.91M',
        'Single Noma plan R$39.90/mo',
        '14-day trial · M1 conv: 10% · M2+: 15%',
        'Churn: 8%/mo (no agent) · 5% (with agent) · 3% (annual)',
        'Full-loaded CAC R$60 · LTV/CAC 6.2× (base)',
        'Accumulated revenue 24m: R$4.27M',
      ],
    },
    {
      label: '📊 Base Valuation',
      tone: 'base',
      metrics: [
        { val: '3,420', label: 'Paying users month 12' },
        { val: '6,955', label: 'Paying users month 24' },
        { val: 'R$326K', label: 'MRR month 24' },
        { val: 'M9', label: 'Operational breakeven' },
        { val: 'R$19.6M', label: 'Valuation M24' },
        { val: '2.9×', label: 'Angel return' },
      ],
      assumptions: [
        'ARR multiple: 5× · ARR M24 R$3.91M',
        'ARPU M24 R$46.89 (40% base with agent)',
        'Monthly/annual split: 55%/45% at M24',
        'Marketplace: 40% of paying base with at least 1 agent',
        'Accumulated result M24: R$899K',
        'Operating margin M24: 38.9%',
      ],
    },
    {
      label: '🚀 Optimistic Valuation',
      tone: 'otimista',
      metrics: [
        { val: '3,420', label: 'Paying users month 12' },
        { val: '6,955', label: 'Paying users month 24' },
        { val: 'R$326K', label: 'MRR month 24' },
        { val: 'M9', label: 'Operational breakeven' },
        { val: 'R$27.4M', label: 'Valuation M24' },
        { val: '4.1×', label: 'Angel return' },
      ],
      assumptions: [
        'ARR multiple: 7× · ARR M24 R$3.91M',
        'LTV/CAC with agent: 12.1× (Annual + Agent)',
        'CAC payback: 1.7mo (monthly + agent)',
        'NomaCorporate: upside not modeled',
        'Wave 3 agents M13: 18 agents in marketplace',
        'LATAM expansion as qualitative upside',
      ],
    },
  ],
};

export interface MrrBar {
  label: string;
  mrr: number;
  mrrLabel: string;
  pagantes: number;
  marker?: string;
}

// Fonte: AUTONOMA_3_1_MODELO_UNICO_MARKETPLACE.md · Tabela Mestre · Marcos
export const mrrBars: Record<Lang, MrrBar[]> = {
  pt: [
    { label: 'M1',  mrr: 12.6,   mrrLabel: 'R$12,6K',  pagantes: 300  },
    { label: 'M4',  mrr: 50.8,   mrrLabel: 'R$50,8K',  pagantes: 1076 },
    { label: 'M6',  mrr: 69.6,   mrrLabel: 'R$69,6K',  pagantes: 1691 },
    { label: 'M9',  mrr: 97.2,   mrrLabel: 'R$97,2K',  pagantes: 2274, marker: 'BE ⚡' },
    { label: 'M12', mrr: 155.9,  mrrLabel: 'R$156K',   pagantes: 3420 },
    { label: 'M18', mrr: 244.1,  mrrLabel: 'R$244K',   pagantes: 5281 },
    { label: 'M24', mrr: 326.1,  mrrLabel: 'R$326K',   pagantes: 6955 },
  ],
  en: [
    { label: 'M1',  mrr: 12.6,   mrrLabel: 'R$12.6K',  pagantes: 300  },
    { label: 'M4',  mrr: 50.8,   mrrLabel: 'R$50.8K',  pagantes: 1076 },
    { label: 'M6',  mrr: 69.6,   mrrLabel: 'R$69.6K',  pagantes: 1691 },
    { label: 'M9',  mrr: 97.2,   mrrLabel: 'R$97.2K',  pagantes: 2274, marker: 'BE ⚡' },
    { label: 'M12', mrr: 155.9,  mrrLabel: 'R$156K',   pagantes: 3420 },
    { label: 'M18', mrr: 244.1,  mrrLabel: 'R$244K',   pagantes: 5281 },
    { label: 'M24', mrr: 326.1,  mrrLabel: 'R$326K',   pagantes: 6955 },
  ],
};

export interface Milestone {
  month: string;
  event: string;
  sub: string;
  pagantes: string;
  mrr: string;
  resultado: string;
  tone?: 'be' | 'seed' | 'seriea' | 'latam';
}

// Fonte: AUTONOMA_3_1_MODELO_UNICO_MARKETPLACE.md · Marcos do Modelo (Cenário Único)
export const milestones: Record<Lang, Milestone[]> = {
  pt: [
    {
      month: 'Mês 1',
      event: 'Lançamento',
      sub: 'Trial 14 dias · primeiros dados de conversão · 3.000 downloads',
      pagantes: '300',
      mrr: 'R$12.606',
      resultado: '− R$56.045',
    },
    {
      month: 'Mês 4',
      event: 'Tração inicial',
      sub: 'Marketplace de agentes ativo · embaixadoras onboarded',
      pagantes: '1.076',
      mrr: 'R$50.770',
      resultado: '− R$35.799',
    },
    {
      month: 'Mês 9 ⚡',
      event: 'Breakeven Operacional',
      sub: 'Resultado mensal vira positivo · caixa começa a acumular',
      pagantes: '2.274',
      mrr: 'R$97.174',
      resultado: '+ R$3.077',
      tone: 'be',
    },
    {
      month: 'Mês 12',
      event: 'Gate Seed Round',
      sub: 'Pitch Seed · dados reais de marketplace e agentes',
      pagantes: '3.420',
      mrr: 'R$155.889',
      resultado: '+ R$29.768',
      tone: 'seed',
    },
    {
      month: 'Mês 18',
      event: 'Onda 2 Agentes',
      sub: '12 agentes no marketplace · NomaCorporate em validação',
      pagantes: '5.281',
      mrr: 'R$244.108',
      resultado: '+ R$68.414',
    },
    {
      month: 'Mês 24',
      event: 'Gate Série A · LATAM',
      sub: 'R$899K acumulado · 40% base com agente · 18 agentes',
      pagantes: '6.955',
      mrr: 'R$326.113',
      resultado: '+ R$127.121',
      tone: 'latam',
    },
  ],
  en: [
    {
      month: 'Month 1',
      event: 'Launch',
      sub: '14-day trial · first conversion data · 3,000 downloads',
      pagantes: '300',
      mrr: 'R$12,606',
      resultado: '− R$56,045',
    },
    {
      month: 'Month 4',
      event: 'Initial traction',
      sub: 'Agent marketplace live · ambassadors onboarded',
      pagantes: '1,076',
      mrr: 'R$50,770',
      resultado: '− R$35,799',
    },
    {
      month: 'Month 9 ⚡',
      event: 'Operational Breakeven',
      sub: 'Monthly result turns positive · cash starts accumulating',
      pagantes: '2,274',
      mrr: 'R$97,174',
      resultado: '+ R$3,077',
      tone: 'be',
    },
    {
      month: 'Month 12',
      event: 'Seed Round Gate',
      sub: 'Seed pitch · real marketplace and agent data',
      pagantes: '3,420',
      mrr: 'R$155,889',
      resultado: '+ R$29,768',
      tone: 'seed',
    },
    {
      month: 'Month 18',
      event: 'Agent Wave 2',
      sub: '12 agents in marketplace · NomaCorporate in validation',
      pagantes: '5,281',
      mrr: 'R$244,108',
      resultado: '+ R$68,414',
    },
    {
      month: 'Month 24',
      event: 'Series A Gate · LATAM',
      sub: 'R$899K accumulated · 40% base with agent · 18 agents',
      pagantes: '6,955',
      mrr: 'R$326,113',
      resultado: '+ R$127,121',
      tone: 'latam',
    },
  ],
};

export interface SensitivityBlock {
  label: string;
  lines: string[];
  tone: 'noma' | 'gold';
}

export const sensitivity: Record<Lang, SensitivityBlock[]> = {
  pt: [
    {
      label: 'Sensibilidade · Adoção de Agentes',
      lines: [
        '15% base c/ agente → ARPU R$43,79 · LTV/CAC 8,5× (mensal)',
        '40% base c/ agente → ARPU R$46,89 · LTV/CAC 12,1× (anual+agente)',
        'Agente diário (Stylist) → billing episódico · lock-in comportamental',
      ],
      tone: 'noma',
    },
    {
      label: 'Sensibilidade · Churn por perfil',
      lines: [
        'Sem agente mensal: 8%/mês → vida média 12,5m · LTV R$374',
        'Com agente mensal: 5%/mês → vida média 20m · LTV R$727',
        'Plano anual: 3%/mês → vida média 24m (teto) · LTV R$574–728',
      ],
      tone: 'gold',
    },
  ],
  en: [
    {
      label: 'Sensitivity · Agent Adoption',
      lines: [
        '15% base with agent → ARPU R$43.79 · LTV/CAC 8.5× (monthly)',
        '40% base with agent → ARPU R$46.89 · LTV/CAC 12.1× (annual+agent)',
        'Daily agent (Stylist) → episodic billing · behavioral lock-in',
      ],
      tone: 'noma',
    },
    {
      label: 'Sensitivity · Churn by profile',
      lines: [
        'No agent monthly: 8%/mo → avg lifetime 12.5mo · LTV R$374',
        'With agent monthly: 5%/mo → avg lifetime 20mo · LTV R$727',
        'Annual plan: 3%/mo → avg lifetime 24mo (cap) · LTV R$574–728',
      ],
      tone: 'gold',
    },
  ],
};
