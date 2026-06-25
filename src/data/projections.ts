// ─────────────────────────────────────────────────────────────
//  AutoNoma · Projeções Financeiras
//  Fonte: resumo cenarios .xlsx (BPAUTONOMA)
//  3 Cenários: Conservador · Base · Otimista
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
      label: '🛡️ Cenário Conservador',
      tone: 'conservador',
      metrics: [
        { val: '3.876', label: 'Pagantes mês 12' },
        { val: '5.590', label: 'Pagantes mês 24' },
        { val: 'R$347k', label: 'MRR mês 24' },
        { val: 'M4', label: 'Breakeven operacional' },
        { val: 'R$16,7M', label: 'Valuation M24' },
        { val: '2,5×', label: 'Retorno do anjo' },
      ],
      assumptions: [
        'Conv. Trial→Pago: Essencial 8% · Churn Essencial 8%/mês',
        'Trials: 1.500 (M1) · 3.000/mês (constante M5+)',
        'CAC full-loaded R$60 · LTV/CAC 5,3×',
        'Payback CAC: ~2,5 meses',
        'Múltiplo ARR: 4×',
        'Receita acumulada 24m: R$4,9M',
      ],
    },
    {
      label: '📊 Cenário Base',
      tone: 'base',
      metrics: [
        { val: '5.075', label: 'Pagantes mês 12' },
        { val: '7.062', label: 'Pagantes mês 24' },
        { val: 'R$446k', label: 'MRR mês 24' },
        { val: 'M4', label: 'Breakeven operacional' },
        { val: 'R$26,7M', label: 'Valuation M24' },
        { val: '4,0×', label: 'Retorno do anjo' },
      ],
      assumptions: [
        'Conv. Trial→Pago: Essencial 9% · Churn Essencial 7%/mês',
        'Trials: 1.800 (M1) → 3.000/mês (M5+)',
        'CAC full-loaded R$50 · LTV/CAC 7,3×',
        'Payback CAC: ~1,8 meses',
        'Múltiplo ARR: 5×',
        'Receita acumulada 24m: R$6,2M',
      ],
    },
    {
      label: '🚀 Cenário Otimista',
      tone: 'otimista',
      metrics: [
        { val: '6.238', label: 'Pagantes mês 12' },
        { val: '8.761', label: 'Pagantes mês 24' },
        { val: 'R$539k', label: 'MRR mês 24' },
        { val: 'M4', label: 'Breakeven operacional' },
        { val: 'R$45,3M', label: 'Valuation M24' },
        { val: '6,8×', label: 'Retorno do anjo' },
      ],
      assumptions: [
        'Conv. Trial→Pago: Essencial 10% · Churn Essencial 5%/mês',
        'Trials: 2.000 (M1) → 3.000/mês (M5+)',
        'CAC full-loaded R$50 · LTV/CAC 10,2×',
        'Payback CAC: ~1,6 meses',
        'Múltiplo ARR: 7×',
        'Receita acumulada 24m: R$7,3M',
      ],
    },
  ],
  en: [
    {
      label: '🛡️ Conservative Scenario',
      tone: 'conservador',
      metrics: [
        { val: '3,876', label: 'Paying users month 12' },
        { val: '5,590', label: 'Paying users month 24' },
        { val: 'R$347K', label: 'MRR month 24' },
        { val: 'M4', label: 'Operational breakeven' },
        { val: 'R$16.7M', label: 'Valuation M24' },
        { val: '2.5×', label: 'Angel return' },
      ],
      assumptions: [
        'Conv. Trial→Paid: Essential 8% · Churn Essential 8%/mo',
        'Trials: 1,500 (M1) · 3,000/mo (constant M5+)',
        'Full-loaded CAC R$60 · LTV/CAC 5.3×',
        'CAC payback: ~2.5 months',
        'ARR multiple: 4×',
        'Accumulated revenue 24m: R$4.9M',
      ],
    },
    {
      label: '📊 Base Scenario',
      tone: 'base',
      metrics: [
        { val: '5,075', label: 'Paying users month 12' },
        { val: '7,062', label: 'Paying users month 24' },
        { val: 'R$446K', label: 'MRR month 24' },
        { val: 'M4', label: 'Operational breakeven' },
        { val: 'R$26.7M', label: 'Valuation M24' },
        { val: '4.0×', label: 'Angel return' },
      ],
      assumptions: [
        'Conv. Trial→Paid: Essential 9% · Churn Essential 7%/mo',
        'Trials: 1,800 (M1) → 3,000/mo (M5+)',
        'Full-loaded CAC R$50 · LTV/CAC 7.3×',
        'CAC payback: ~1.8 months',
        'ARR multiple: 5×',
        'Accumulated revenue 24m: R$6.2M',
      ],
    },
    {
      label: '🚀 Optimistic Scenario',
      tone: 'otimista',
      metrics: [
        { val: '6,238', label: 'Paying users month 12' },
        { val: '8,761', label: 'Paying users month 24' },
        { val: 'R$539K', label: 'MRR month 24' },
        { val: 'M4', label: 'Operational breakeven' },
        { val: 'R$45.3M', label: 'Valuation M24' },
        { val: '6.8×', label: 'Angel return' },
      ],
      assumptions: [
        'Conv. Trial→Paid: Essential 10% · Churn Essential 5%/mo',
        'Trials: 2,000 (M1) → 3,000/mo (M5+)',
        'Full-loaded CAC R$50 · LTV/CAC 10.2×',
        'CAC payback: ~1.6 months',
        'ARR multiple: 7×',
        'Accumulated revenue 24m: R$7.3M',
      ],
    },
  ],
};

export interface MrrBar {
  label: string;
  base: number;
  optimistic: number;
  baseLabel: string;
  optimisticLabel: string;
  marker?: string;
}

// Valores do cenário Conservador (base) e Otimista
// Fonte: planilha resumo cenarios .xlsx · helper rows
export const mrrBars: Record<Lang, MrrBar[]> = {
  pt: [
    { label: 'M3',  base: 81.7,   optimistic: 161.4,  baseLabel: 'R$81,7K',   optimisticLabel: 'R$161,4K' },
    { label: 'M4',  base: 109.1,  optimistic: 220.7,  baseLabel: 'R$109,1K',  optimisticLabel: 'R$220,7K' },
    { label: 'M5',  base: 134.8,  optimistic: 277.3,  baseLabel: 'R$134,8K',  optimisticLabel: 'R$277,3K' },
    {
      label: 'M6',
      base: 159.1,
      optimistic: 331.1,
      baseLabel: 'R$159,1K',
      optimisticLabel: 'R$331,1K',
      marker: 'BE',
    },
    { label: 'M7',  base: 181.8,  optimistic: 382.3,  baseLabel: 'R$181,8K',  optimisticLabel: 'R$382,3K' },
    { label: 'M8',  base: 203.2,  optimistic: 431.0,  baseLabel: 'R$203,2K',  optimisticLabel: 'R$431,0K' },
    { label: 'M12', base: 277.3,  optimistic: 604.3,  baseLabel: 'R$277,3K',  optimisticLabel: 'R$604,3K', marker: 'Seed' },
    {
      label: 'M18',
      base: 388.4,
      optimistic: 854.5,
      baseLabel: 'R$388,4K',
      optimisticLabel: 'R$854,5K',
      marker: 'Série A',
    },
    {
      label: 'M24',
      base: 467.2,
      optimistic: 1043.5,
      baseLabel: 'R$467,2K',
      optimisticLabel: 'R$1,04M',
      marker: 'LATAM',
    },
  ],
  en: [
    { label: 'M3',  base: 81.7,   optimistic: 161.4,  baseLabel: 'R$81.7K',   optimisticLabel: 'R$161.4K' },
    { label: 'M4',  base: 109.1,  optimistic: 220.7,  baseLabel: 'R$109.1K',  optimisticLabel: 'R$220.7K' },
    { label: 'M5',  base: 134.8,  optimistic: 277.3,  baseLabel: 'R$134.8K',  optimisticLabel: 'R$277.3K' },
    {
      label: 'M6',
      base: 159.1,
      optimistic: 331.1,
      baseLabel: 'R$159.1K',
      optimisticLabel: 'R$331.1K',
      marker: 'BE',
    },
    { label: 'M7',  base: 181.8,  optimistic: 382.3,  baseLabel: 'R$181.8K',  optimisticLabel: 'R$382.3K' },
    { label: 'M8',  base: 203.2,  optimistic: 431.0,  baseLabel: 'R$203.2K',  optimisticLabel: 'R$431.0K' },
    { label: 'M12', base: 277.3,  optimistic: 604.3,  baseLabel: 'R$277.3K',  optimisticLabel: 'R$604.3K', marker: 'Seed' },
    {
      label: 'M18',
      base: 388.4,
      optimistic: 854.5,
      baseLabel: 'R$388.4K',
      optimisticLabel: 'R$854.5K',
      marker: 'Series A',
    },
    {
      label: 'M24',
      base: 467.2,
      optimistic: 1043.5,
      baseLabel: 'R$467.2K',
      optimisticLabel: 'R$1.04M',
      marker: 'LATAM',
    },
  ],
};

export interface Milestone {
  month: string;
  event: string;
  sub: string;
  free: string;
  paid: string;
  mrr: string;
  resultado: string;
  tone?: 'be' | 'seed' | 'seriea' | 'latam';
}

// Fonte: planilha resumo cenarios .xlsx · helper rows (cenário Conservador)
export const milestones: Record<Lang, Milestone[]> = {
  pt: [
    {
      month: 'Mês 1',
      event: 'Lançamento',
      sub: 'Trial gratuito ativo · primeiros dados de conversão',
      free: '2.000',
      paid: '380',
      mrr: 'R$21.562',
      resultado: '− R$39.536',
    },
    {
      month: 'Mês 6 ⚡',
      event: 'Breakeven Operacional',
      sub: 'Resultado mensal vira positivo · caixa começa a acumular',
      free: '17.000',
      paid: '2.785',
      mrr: 'R$159.062',
      resultado: '+ R$58.863',
      tone: 'be',
    },
    {
      month: 'Mês 12',
      event: 'Gate Seed Round',
      sub: 'Pitch Seed · 8 meses de dados de conversão reais',
      free: '35.000',
      paid: '4.819',
      mrr: 'R$277.318',
      resultado: '+ R$143.101',
      tone: 'seed',
    },
    {
      month: 'Mês 24',
      event: 'Gate LATAM · Série A',
      sub: '75K Free Brasil · entrada México + Colômbia',
      free: '75.000',
      paid: '8.027',
      mrr: 'R$467.197',
      resultado: '+ R$262.769',
      tone: 'latam',
    },
  ],
  en: [
    {
      month: 'Month 1',
      event: 'Launch',
      sub: 'Free trial active · first conversion data',
      free: '2,000',
      paid: '380',
      mrr: 'R$21,562',
      resultado: '− R$39,536',
    },
    {
      month: 'Month 6 ⚡',
      event: 'Operational Breakeven',
      sub: 'Monthly result turns positive · cash starts accumulating',
      free: '17,000',
      paid: '2,785',
      mrr: 'R$159,062',
      resultado: '+ R$58,863',
      tone: 'be',
    },
    {
      month: 'Month 12',
      event: 'Seed Round Gate',
      sub: 'Seed pitch · 8 months of real conversion data',
      free: '35,000',
      paid: '4,819',
      mrr: 'R$277,318',
      resultado: '+ R$143,101',
      tone: 'seed',
    },
    {
      month: 'Month 24',
      event: 'LATAM Gate · Series A',
      sub: '75K Free Brazil · Mexico + Colombia entry',
      free: '75,000',
      paid: '8,027',
      mrr: 'R$467,197',
      resultado: '+ R$262,769',
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
      label: 'Sensibilidade · Conversão Free→pago',
      lines: [
        '10% conv. → LTV/CAC 6,9× · MRR M24 R$467K (conservador)',
        '15% conv. → LTV/CAC 10,3× · MRR M24 R$718K (base)',
        '20% conv. → LTV/CAC 13,9× · MRR M24 R$1,04M (otimista)',
      ],
      tone: 'noma',
    },
    {
      label: 'Sensibilidade · Churn mensal (Essencial)',
      lines: [
        '15% churn → LTV/CAC ~4,8× · modelo ainda saudável',
        '8% churn → LTV R$551 · vida média 12,5m (conservador)',
        '5% churn → LTV R$831 · vida média 20m (otimista)',
      ],
      tone: 'gold',
    },
  ],
  en: [
    {
      label: 'Sensitivity · Free→paid conversion',
      lines: [
        '10% conv. → LTV/CAC 6.9× · MRR M24 R$467K (conservative)',
        '15% conv. → LTV/CAC 10.3× · MRR M24 R$718K (base)',
        '20% conv. → LTV/CAC 13.9× · MRR M24 R$1.04M (optimistic)',
      ],
      tone: 'noma',
    },
    {
      label: 'Sensitivity · Monthly churn (Essencial)',
      lines: [
        '15% churn → LTV/CAC ~4.8× · model still healthy',
        '8% churn → LTV R$551 · avg lifetime 12.5mo (conservative)',
        '5% churn → LTV R$831 · avg lifetime 20mo (optimistic)',
      ],
      tone: 'gold',
    },
  ],
};
