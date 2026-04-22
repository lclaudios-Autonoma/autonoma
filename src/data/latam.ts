export interface Country {
  flag: string;
  country: string;
  priority: string;
  why: string;
  stats: { num: string; label: string }[];
  note: string;
}

export const latamGate = {
  label: 'Gate de expansão LATAM',
  headline: '200.000 assinantes ativos validados no Brasil',
  sub: '+ churn <3% + NPS >70 + MRR >R$12M',
  tam: '600M',
  tamLabel: 'latinoamericanas com a mesma dor',
};

export const countries: Country[] = [
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
];
