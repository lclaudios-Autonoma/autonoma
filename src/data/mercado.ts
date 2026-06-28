import { Lang } from '../i18n/LanguageContext';

export interface MarketStat {
  num: string;
  label: string;
}

export interface CompetitorCard {
  name: string;
  origin: string;
  model: string;
  stats: MarketStat[];
  note: string;
}

export const marketStats: Record<Lang, MarketStat[]> = {
  pt: [
    { num: '6M+', label: 'usuárias Zapia na América Latina' },
    { num: 'R$100M+', label: 'captados pela Zapia até hoje' },
    { num: '0%', label: 'da base Zapia paga — monetização ainda não validada' },
    { num: '4×', label: 'preço Sonnet vs Haiku — por isso o trial roda em Haiku' },
  ],
  en: [
    { num: '6M+', label: 'Zapia users across Latin America' },
    { num: 'R$100M+', label: 'raised by Zapia to date' },
    { num: '0%', label: "of Zapia\'s base pays — monetization still unvalidated" },
    { num: '4×', label: 'Sonnet vs Haiku price — why trial runs on Haiku' },
  ],
};

export const competitor: Record<Lang, CompetitorCard> = {
  pt: {
    name: 'Zapia',
    origin: 'Uruguai · operação pan-LATAM, Brasil é o maior mercado',
    model: '100% gratuita · sem anúncios · monetização ainda não definida',
    stats: [
      { num: '6M+', label: 'usuárias na América Latina' },
      { num: 'R$100M+', label: 'captados (Prosus Ventures e outros)' },
      { num: 'R$36M', label: 'extensão seed mais recente · lançamento do Zapia Max' },
    ],
    note: 'O capital de risco já apostou pesado na categoria "assistente de IA que executa, não só responde" — mesmo sem nenhuma linha de receita validada. Isso prova apetite de mercado e de investidor. A AutoNoma vai além: receita recorrente desde o dia 1.',
  },
  en: {
    name: 'Zapia',
    origin: 'Uruguay · pan-LATAM operation, Brazil is the largest market',
    model: '100% free · no ads · monetization still undefined',
    stats: [
      { num: '6M+', label: 'users across Latin America' },
      { num: 'R$100M+', label: 'raised (Prosus Ventures and others)' },
      { num: 'R$36M', label: 'latest seed extension · Zapia Max launch' },
    ],
    note: 'Venture capital has already bet heavily on the "AI assistant that executes, not just responds" category — with zero validated revenue line. That proves market and investor appetite. AutoNoma goes further: recurring revenue from day one.',
  },
};

export const positioningRows: Record<Lang, { label: string; zapia: string; autonoma: string; edge?: boolean }[]> = {
  pt: [
    { label: 'Monetização', zapia: 'Gratuita, sem modelo definido', autonoma: 'Assinatura paga desde o dia 1', edge: true },
    { label: 'Distribuição', zapia: 'WhatsApp (sujeito a política da Meta)', autonoma: 'App próprio + WhatsApp + Telegram' },
    { label: 'Público', zapia: 'Generalista, pan-LATAM', autonoma: 'Vertical: mulher brasileira 25–50, carga mental', edge: true },
    { label: 'Memória', zapia: 'Contextual por sessão', autonoma: 'Persistente entre sessões (mem0 + pgvector)', edge: true },
    { label: 'Motor de IA', zapia: 'Modelo proprietário', autonoma: 'Anthropic — Haiku (trial) + Sonnet (pagos)' },
  ],
  en: [
    { label: 'Monetization', zapia: 'Free, no defined model', autonoma: 'Paid subscription from day one', edge: true },
    { label: 'Distribution', zapia: 'WhatsApp (subject to Meta policy)', autonoma: 'Own app + WhatsApp + Telegram' },
    { label: 'Audience', zapia: 'Generalist, pan-LATAM', autonoma: 'Vertical: Brazilian woman 25–50, mental load', edge: true },
    { label: 'Memory', zapia: 'Session-level context', autonoma: 'Persistent across sessions (mem0 + pgvector)', edge: true },
    { label: 'AI engine', zapia: 'Proprietary model', autonoma: 'Anthropic — Haiku (trial) + Sonnet (paid)' },
  ],
};
