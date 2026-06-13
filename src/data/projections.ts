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
        { val: '4.819', label: 'Pagantes mês 12' },
        { val: '8.027', label: 'Pagantes mês 24' },
        { val: 'R$467k', label: 'MRR mês 24' },
        { val: 'M6', label: 'Breakeven operacional' },
        { val: 'R$19,9M', label: 'Valuation M24' },
        { val: '2,99×', label: 'Retorno do anjo' },
      ],
      assumptions: [
        'Conv. Free→Essencial 10% · Churn Essencial 8%/mês',
        'Leads Free: 2.000 (M1) · 3.000/mês (M2–12) · 3.500/mês (M13–24)',
        'CAC full-loaded R$80 · LTV/CAC 6,9×',
        'Payback CAC: 1,8 meses',
        'Múltiplo ARR: 3×',
        'Caixa acumulado positivo no M10',
      ],
    },
    {
      label: '📊 Cenário Base',
      tone: 'base',
      metrics: [
        { val: '7.490', label: 'Pagantes mês 12' },
        { val: '12.472', label: 'Pagantes mês 24' },
        { val: 'R$718k', label: 'MRR mês 24' },
        { val: 'M5', label: 'Breakeven operacional' },
        { val: 'R$50,8M', label: 'Valuation M24' },
        { val: '7,62×', label: 'Retorno do anjo' },
      ],
      assumptions: [
        'Conv. Free→Essencial 15% · Churn Essencial 7%/mês',
        'Leads Free: 2.000 (M1) · 3.500/mês (M2–12) · 4.000/mês (M13–24)',
        'CAC R$60 · LTV/CAC 10,3×',
        'Payback CAC: 1,4 meses',
        'Múltiplo ARR: 5×',
        'Receita acumulada 24m: R$10,2M',
      ],
    },
    {
      label: '🚀 Cenário Otimista',
      tone: 'otimista',
      metrics: [
        { val: '10.745', label: 'Pagantes mês 12' },
        { val: '18.439', label: 'Pagantes mês 24' },
        { val: 'R$1,04M', label: 'MRR mês 24' },
        { val: 'M4', label: 'Breakeven operacional' },
        { val: 'R$101M', label: 'Valuation M24' },
        { val: '15,2×', label: 'Retorno do anjo' },
      ],
      assumptions: [
        'Conv. Free→Essencial 20% · Churn Essencial 5%/mês',
        'Leads Free: 2.000 (M1) · 4.000/mês (M2–12) · 4.500/mês (M13–24)',
        'CAC R$60 · LTV/CAC 13,9×',
        'Payback CAC: 1,4 meses',
        'Múltiplo ARR: 7×',
        'Receita acumulada 24m: R$14,5M',
      ],
    },
  ],
  en: [
    {
      label: '🛡️ Conservative Scenario',
      tone: 'conservador',
      metrics: [
        { val: '4,819', label: 'Paying users month 12' },
        { val: '8,027', label: 'Paying users month 24' },
        { val: 'R$467K', label: 'MRR month 24' },
        { val: 'M6', label: 'Operational breakeven' },
        { val: 'R$19.9M', label: 'Valuation M24' },
        { val: '2.99×', label: 'Angel return' },
      ],
      assumptions: [
        'Conv. Free→Essencial 10% · Essencial churn 8%/mo',
        'Free leads: 2,000 (M1) · 3,000/mo (M2–12) · 3,500/mo (M13–24)',
        'Full-loaded CAC R$80 · LTV/CAC 6.9×',
        'CAC payback: 1.8 months',
        'ARR multiple: 3×',
        'Accumulated cash positive in M10',
      ],
    },
    {
      label: '📊 Base Scenario',
      tone: 'base',
      metrics: [
        { val: '7,490', label: 'Paying users month 12' },
        { val: '12,472', label: 'Paying users month 24' },
        { val: 'R$718K', label: 'MRR month 24' },
        { val: 'M5', label: 'Operational breakeven' },
        { val: 'R$50.8M', label: 'Valuation M24' },
        { val: '7.62×', label: 'Angel return' },
      ],
      assumptions: [
        'Conv. Free→Essencial 15% · Essencial churn 7%/mo',
        'Free leads: 2,000 (M1) · 3,500/mo (M2–12) · 4,000/mo (M13–24)',
        'CAC R$60 · LTV/CAC 10.3×',
        'CAC payback: 1.4 months',
        'ARR multiple: 5×',
        'Accumulated revenue 24m: R$10.2M',
      ],
    },
    {
      label: '🚀 Optimistic Scenario',
      tone: 'otimista',
      metrics: [
        { val: '10,745', label: 'Paying users month 12' },
        { val: '18,439', label: 'Paying users month 24' },
        { val: 'R$1.04M', label: 'MRR month 24' },
        { val: 'M4', label: 'Operational breakeven' },
        { val: 'R$101M', label: 'Valuation M24' },
        { val: '15.2×', label: 'Angel return' },
      ],
      assumptions: [
        'Conv. Free→Essencial 20% · Essencial churn 5%/mo',
        'Free leads: 2,000 (M1) · 4,000/mo (M2–12) · 4,500/mo (M13–24)',
        'CAC R$60 · LTV/CAC 13.9×',
        'CAC payback: 1.4 months',
        'ARR multiple: 7×',
        'Accumulated revenue 24m: R$14.5M',
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
