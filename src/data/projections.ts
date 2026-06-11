// ─────────────────────────────────────────────────────────────
//  AutoNoma · Projeções Financeiras
//  Fonte: descritivo_modelo_negocio_autonoma.docx + DASHAUTONOMA_FINAL.xlsx
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
        { val: '3.960', label: 'Pagantes mês 12' },
        { val: '28.363', label: 'Pagantes mês 24' },
        { val: 'R$1,23M', label: 'MRR mês 24' },
        { val: 'M6', label: 'Breakeven operacional' },
        { val: 'R$27,7M', label: 'Valuation M24' },
        { val: '4,2×', label: 'Retorno do anjo' },
      ],
      assumptions: [
        'Conv. Free→Essencial 7% · Autônoma 3% · Livre 1%',
        'Churn: Essencial 8% · Autônoma 5% · Livre 3%/mês',
        'Leads Free: 3.000/mês (M1–12) · 3.500/mês (M13–24)',
        'CAC full-loaded R$80 · LTV/CAC 5,3×',
        'Payback CAC: 2,35 meses',
        'Caixa acumulado positivo no M10',
      ],
    },
    {
      label: '📊 Cenário Base',
      tone: 'base',
      metrics: [
        { val: '~6.900', label: 'Pagantes mês 12' },
        { val: '37.090', label: 'Pagantes mês 24' },
        { val: 'R$2,1M', label: 'MRR mês 24 (est.)' },
        { val: 'M5', label: 'Breakeven operacional' },
        { val: 'R$75M', label: 'Valuation M24' },
        { val: '11,3×', label: 'Retorno do anjo' },
      ],
      assumptions: [
        'Conv. total ~13% · menor churn por retenção forte',
        'Leads Free: 4.000/mês com paid media moderado',
        'Churn médio: ~4,5%/mês · NPS ≥ 70 meta mês 9',
        'CAC R$70 · LTV/CAC 9,0×',
        'Payback CAC: 1,38 meses',
        'Receita acumulada 24m: R$15M',
      ],
    },
    {
      label: '🚀 Cenário Otimista',
      tone: 'otimista',
      metrics: [
        { val: '~9.600', label: 'Pagantes mês 12' },
        { val: '49.885', label: 'Pagantes mês 24' },
        { val: 'R$2,9M', label: 'MRR mês 24 (est.)' },
        { val: 'M4', label: 'Breakeven operacional' },
        { val: 'R$148,7M', label: 'Valuation M24' },
        { val: '22,3×', label: 'Retorno do anjo' },
      ],
      assumptions: [
        'Conv. total ~15% · K viral ≥ 0,8 · orgânico forte',
        'Leads Free: 5.000+/mês · expansão LATAM antecipada',
        'Churn: 3,5%/mês desde mês 6 · memória como lock-in',
        'Ticket médio sobe com upsell de agentes',
        'CAC R$65 · LTV/CAC 10,4×',
        'Payback CAC: 1,20 meses · Receita acum. R$21,2M',
      ],
    },
  ],
  en: [
    {
      label: '🛡️ Conservative Scenario',
      tone: 'conservador',
      metrics: [
        { val: '3,960', label: 'Paying users month 12' },
        { val: '28,363', label: 'Paying users month 24' },
        { val: 'R$1.23M', label: 'MRR month 24' },
        { val: 'M6', label: 'Operational breakeven' },
        { val: 'R$27.7M', label: 'Valuation M24' },
        { val: '4.2×', label: 'Angel return' },
      ],
      assumptions: [
        'Conv. Free→Essencial 7% · Autônoma 3% · Livre 1%',
        'Churn: Essencial 8% · Autônoma 5% · Livre 3%/mo',
        'Free leads: 3,000/mo (M1–12) · 3,500/mo (M13–24)',
        'Full-loaded CAC R$80 · LTV/CAC 5.3×',
        'CAC payback: 2.35 months',
        'Accumulated cash positive in M10',
      ],
    },
    {
      label: '📊 Base Scenario',
      tone: 'base',
      metrics: [
        { val: '~6,900', label: 'Paying users month 12' },
        { val: '37,090', label: 'Paying users month 24' },
        { val: 'R$2.1M', label: 'MRR month 24 (est.)' },
        { val: 'M5', label: 'Operational breakeven' },
        { val: 'R$75M', label: 'Valuation M24' },
        { val: '11.3×', label: 'Angel return' },
      ],
      assumptions: [
        'Total conv. ~13% · lower churn from strong retention',
        'Free leads: 4,000/mo with moderate paid media',
        'Average churn: ~4.5%/mo · NPS ≥ 70 target month 9',
        'CAC R$70 · LTV/CAC 9.0×',
        'CAC payback: 1.38 months',
        'Accumulated revenue 24m: R$15M',
      ],
    },
    {
      label: '🚀 Optimistic Scenario',
      tone: 'otimista',
      metrics: [
        { val: '~9,600', label: 'Paying users month 12' },
        { val: '49,885', label: 'Paying users month 24' },
        { val: 'R$2.9M', label: 'MRR month 24 (est.)' },
        { val: 'M4', label: 'Operational breakeven' },
        { val: 'R$148.7M', label: 'Valuation M24' },
        { val: '22.3×', label: 'Angel return' },
      ],
      assumptions: [
        'Total conv. ~15% · viral K ≥ 0.8 · strong organic',
        'Free leads: 5,000+/mo · early LATAM expansion',
        'Churn: 3.5%/mo from month 6 · memory as lock-in',
        'Average ticket rises with agent upsell',
        'CAC R$65 · LTV/CAC 10.4×',
        'CAC payback: 1.20 months · Accum. revenue R$21.2M',
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
// Referências do documento: M6=R$97K, M12=R$194K, M24=R$1.230K (Conservador)
// Otimista: ~1,76× conservador em M24 (Pagantes 49.885 ÷ 28.363)
export const mrrBars: Record<Lang, MrrBar[]> = {
  pt: [
    { label: 'M3',  base: 48.5,   optimistic: 85.3,   baseLabel: 'R$48,5K',   optimisticLabel: 'R$85,3K' },
    { label: 'M4',  base: 64.7,   optimistic: 113.8,  baseLabel: 'R$64,7K',   optimisticLabel: 'R$113,8K' },
    { label: 'M5',  base: 80.9,   optimistic: 142.4,  baseLabel: 'R$80,9K',   optimisticLabel: 'R$142,4K' },
    {
      label: 'M6',
      base: 97.0,
      optimistic: 170.7,
      baseLabel: 'R$97,0K',
      optimisticLabel: 'R$170,7K',
      marker: 'BE',
    },
    { label: 'M7',  base: 113.2,  optimistic: 199.2,  baseLabel: 'R$113,2K',  optimisticLabel: 'R$199,2K' },
    { label: 'M8',  base: 129.3,  optimistic: 227.6,  baseLabel: 'R$129,3K',  optimisticLabel: 'R$227,6K' },
    { label: 'M12', base: 194.0,  optimistic: 341.4,  baseLabel: 'R$194,0K',  optimisticLabel: 'R$341,4K', marker: 'Seed' },
    {
      label: 'M18',
      base: 485.0,
      optimistic: 853.6,
      baseLabel: 'R$485,0K',
      optimisticLabel: 'R$853,6K',
      marker: 'Série A',
    },
    {
      label: 'M24',
      base: 1230,
      optimistic: 2165,
      baseLabel: 'R$1,23M',
      optimisticLabel: 'R$2,17M',
      marker: 'LATAM',
    },
  ],
  en: [
    { label: 'M3',  base: 48.5,   optimistic: 85.3,   baseLabel: 'R$48.5K',   optimisticLabel: 'R$85.3K' },
    { label: 'M4',  base: 64.7,   optimistic: 113.8,  baseLabel: 'R$64.7K',   optimisticLabel: 'R$113.8K' },
    { label: 'M5',  base: 80.9,   optimistic: 142.4,  baseLabel: 'R$80.9K',   optimisticLabel: 'R$142.4K' },
    {
      label: 'M6',
      base: 97.0,
      optimistic: 170.7,
      baseLabel: 'R$97.0K',
      optimisticLabel: 'R$170.7K',
      marker: 'BE',
    },
    { label: 'M7',  base: 113.2,  optimistic: 199.2,  baseLabel: 'R$113.2K',  optimisticLabel: 'R$199.2K' },
    { label: 'M8',  base: 129.3,  optimistic: 227.6,  baseLabel: 'R$129.3K',  optimisticLabel: 'R$227.6K' },
    { label: 'M12', base: 194.0,  optimistic: 341.4,  baseLabel: 'R$194.0K',  optimisticLabel: 'R$341.4K', marker: 'Seed' },
    {
      label: 'M18',
      base: 485.0,
      optimistic: 853.6,
      baseLabel: 'R$485.0K',
      optimisticLabel: 'R$853.6K',
      marker: 'Series A',
    },
    {
      label: 'M24',
      base: 1230,
      optimistic: 2165,
      baseLabel: 'R$1.23M',
      optimisticLabel: 'R$2.17M',
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

// Fonte: Tabela 6 do documento (cenário Conservador)
export const milestones: Record<Lang, Milestone[]> = {
  pt: [
    {
      month: 'Mês 1',
      event: 'Lançamento',
      sub: 'Trial gratuito ativo · primeiros dados de conversão',
      free: '3.000',
      paid: '330',
      mrr: 'R$16.167',
      resultado: '− R$44.124',
    },
    {
      month: 'Mês 6 ⚡',
      event: 'Breakeven Operacional',
      sub: 'Resultado mensal vira positivo · caixa começa a acumular',
      free: '18.000',
      paid: '1.980',
      mrr: 'R$97.002',
      resultado: '+ R$10.254',
      tone: 'be',
    },
    {
      month: 'Mês 12',
      event: 'Gate Seed Round',
      sub: 'Pitch Seed · 8 meses de dados de conversão reais',
      free: '36.000',
      paid: '3.960',
      mrr: 'R$194.004',
      resultado: '+ R$75.508',
      tone: 'seed',
    },
    {
      month: 'Mês 24',
      event: 'Gate LATAM · Série A',
      sub: '78K Free Brasil · entrada México + Colômbia · caixa acum. R$4,96M',
      free: '78.000',
      paid: '28.363',
      mrr: 'R$1.230.264',
      resultado: '+ R$805.393',
      tone: 'latam',
    },
  ],
  en: [
    {
      month: 'Month 1',
      event: 'Launch',
      sub: 'Free trial active · first conversion data',
      free: '3,000',
      paid: '330',
      mrr: 'R$16,167',
      resultado: '− R$44,124',
    },
    {
      month: 'Month 6 ⚡',
      event: 'Operational Breakeven',
      sub: 'Monthly result turns positive · cash starts accumulating',
      free: '18,000',
      paid: '1,980',
      mrr: 'R$97,002',
      resultado: '+ R$10,254',
      tone: 'be',
    },
    {
      month: 'Month 12',
      event: 'Seed Round Gate',
      sub: 'Seed pitch · 8 months of real conversion data',
      free: '36,000',
      paid: '3,960',
      mrr: 'R$194,004',
      resultado: '+ R$75,508',
      tone: 'seed',
    },
    {
      month: 'Month 24',
      event: 'LATAM Gate · Series A',
      sub: '78K Free Brazil · Mexico + Colombia entry · accum. cash R$4.96M',
      free: '78,000',
      paid: '28,363',
      mrr: 'R$1,230,264',
      resultado: '+ R$805,393',
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
        '5% conv. → LTV/CAC 3,8× · MRR M24 R$878K',
        '11% conv. → LTV/CAC 5,3× · MRR M24 R$1,23M (conservador)',
        '15% conv. → LTV/CAC 10,4× · MRR M24 R$2,17M (otimista)',
      ],
      tone: 'noma',
    },
    {
      label: 'Sensibilidade · Churn mensal (Essencial)',
      lines: [
        '15% churn → LTV/CAC ~4,8× · modelo ainda saudável',
        '8% churn → LTV R$425,89 · ARR M24 R$14,8M (conservador)',
        '3,5% churn → LTV R$780 · ARR M24 R$26M+ (otimista)',
      ],
      tone: 'gold',
    },
  ],
  en: [
    {
      label: 'Sensitivity · Free→paid conversion',
      lines: [
        '5% conv. → LTV/CAC 3.8× · MRR M24 R$878K',
        '11% conv. → LTV/CAC 5.3× · MRR M24 R$1.23M (conservative)',
        '15% conv. → LTV/CAC 10.4× · MRR M24 R$2.17M (optimistic)',
      ],
      tone: 'noma',
    },
    {
      label: 'Sensitivity · Monthly churn (Essencial)',
      lines: [
        '15% churn → LTV/CAC ~4.8× · model still healthy',
        '8% churn → LTV R$425.89 · ARR M24 R$14.8M (conservative)',
        '3.5% churn → LTV R$780 · ARR M24 R$26M+ (optimistic)',
      ],
      tone: 'gold',
    },
  ],
};
