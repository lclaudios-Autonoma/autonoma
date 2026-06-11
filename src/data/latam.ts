import { Lang } from '../i18n/LanguageContext';

export interface Country {
  flag: string;
  country: string;
  priority: string;
  why: string;
  stats: { num: string; label: string }[];
  note: string;
}

export interface LatamGate {
  label: string;
  headline: string;
  sub: string;
  tam: string;
  tamLabel: string;
}

export const latamGate: Record<Lang, LatamGate> = {
  pt: {
    label: 'Gate de expansão LATAM',
    headline: '200.000 assinantes ativos validados no Brasil',
    sub: '+ churn <3% + NPS >70 + MRR >R$12M',
    tam: '600M',
    tamLabel: 'latinoamericanas com a mesma dor',
  },
  en: {
    label: 'LATAM expansion gate',
    headline: '200,000 active subscribers validated in Brazil',
    sub: '+ churn <3% + NPS >70 + MRR >R$12M',
    tam: '600M',
    tamLabel: 'Latin American women with the same pain',
  },
};

export const countries: Record<Lang, Country[]> = {
  pt: [
    {
      flag: '🇲🇽',
      country: 'México',
      priority: 'Prioridade 1',
      why: '"2º maior mercado LATAM. WhatsApp dominante. 94% de penetração."',
      stats: [
        { num: '60M+', label: 'mulheres 25–50' },
        { num: 'Ano 2', label: 'entrada' },
      ],
      note: 'Pagamento: OXXO + Conekta. Idioma: espanhol nativo, não traduzido.',
    },
    {
      flag: '🇨🇴',
      country: 'Colômbia',
      priority: 'Prioridade 2',
      why: '"Nequi tem papel semelhante ao Pix. Classe média digital crescente."',
      stats: [
        { num: '22M+', label: 'mulheres 25–50' },
        { num: 'Ano 2', label: 'junto MX' },
      ],
      note: 'Começar em Bogotá — concentra 30% do TAM colombiano.',
    },
    {
      flag: '🇦🇷',
      country: 'Argentina',
      priority: 'Prioridade 3',
      why: '"Alto nível educacional. Terapia é cultural — Noma4you tem potencial enorme."',
      stats: [
        { num: '18M+', label: 'mulheres 25–50' },
        { num: 'Ano 3', label: 'entrada' },
      ],
      note: 'Risco cambial: precificar em dólar ou indexado. Alto NPS esperado.',
    },
    {
      flag: '🇨🇱',
      country: 'Chile',
      priority: 'Prioridade 4',
      why: '"Maior renda per capita LATAM. Ticket Premium US$25–35/mês viável."',
      stats: [
        { num: '8M+', label: 'mulheres 25–50' },
        { num: 'Ano 3', label: 'entrada' },
      ],
      note: 'Menor mercado mas maior margem. Validador de modelo premium na região.',
    },
  ],
  en: [
    {
      flag: '🇲🇽',
      country: 'Mexico',
      priority: 'Priority 1',
      why: '"2nd largest LATAM market. WhatsApp dominant. 94% penetration."',
      stats: [
        { num: '60M+', label: 'women 25–50' },
        { num: 'Year 2', label: 'entry' },
      ],
      note: 'Payments: OXXO + Conekta. Language: native Spanish, not translated.',
    },
    {
      flag: '🇨🇴',
      country: 'Colombia',
      priority: 'Priority 2',
      why: '"Nequi plays a role similar to Pix. Growing digital middle class."',
      stats: [
        { num: '22M+', label: 'women 25–50' },
        { num: 'Year 2', label: 'with MX' },
      ],
      note: 'Start in Bogotá — it concentrates 30% of the Colombian TAM.',
    },
    {
      flag: '🇦🇷',
      country: 'Argentina',
      priority: 'Priority 3',
      why: '"High education level. Therapy is cultural — Noma4you has huge potential."',
      stats: [
        { num: '18M+', label: 'women 25–50' },
        { num: 'Year 3', label: 'entry' },
      ],
      note: 'Currency risk: price in dollars or indexed. High NPS expected.',
    },
    {
      flag: '🇨🇱',
      country: 'Chile',
      priority: 'Priority 4',
      why: '"Highest income per capita in LATAM. Premium ticket US$25–35/mo viable."',
      stats: [
        { num: '8M+', label: 'women 25–50' },
        { num: 'Year 3', label: 'entry' },
      ],
      note: 'Smallest market but highest margin. Premium model validator in the region.',
    },
  ],
};
