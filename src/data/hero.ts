export const heroPills = [
  { label: 'Freemium + Agentes', primary: true },
  { label: 'R$1M Pre-Seed' },
  { label: '42,8M TAM Brasil' },
  { label: 'Anthropic Claude API' },
  { label: 'WhatsApp · Telegram · App' },
  { label: '200K → LATAM' },
];

export const heroBadge = 'Modelo de Negócio Completo · v4.0 · Redesign Premium';
export const heroSub = 'Asset Light SaaS · Brasil · Expansão LATAM';

export const chaosChips = [
  'Agendar pediatra',
  'Lista do mercado',
  'E-mail do chefe',
  'Presente do Dudu',
  'Academia hoje?',
  'Cobrar o João',
  'Remédio da mãe',
  'Pagar fatura',
  'Roupa da reunião',
  'Janta?',
  'Boleto do condomínio',
  'Aniversário da sogra',
];

export interface MindBranch {
  key: string;
  label: string;
  icon: string;
  angle: number;
  chips: string[];
  pool: string[];
}

export const mindMapBranches: MindBranch[] = [
  {
    key: 'casa',
    label: 'Casa',
    icon: '🏠',
    angle: 90,
    chips: ['Lista do mercado', 'Janta hoje?'],
    pool: ['Luz do corredor', 'Feira sábado', 'Café da manhã', 'Lençol lavado'],
  },
  {
    key: 'filhos',
    label: 'Filhos',
    icon: '👶',
    angle: 30,
    chips: ['Agendar pediatra', 'Buscar 17h'],
    pool: ['Dentista do Dudu', 'Lição de casa', 'Vacina em dia'],
  },
  {
    key: 'trabalho',
    label: 'Trabalho',
    icon: '💼',
    angle: -30,
    chips: ['E-mail do chefe', 'Roupa da reunião'],
    pool: ['Deck de 6ª', 'Call às 10h', 'Revisar proposta'],
  },
  {
    key: 'financas',
    label: 'Finanças',
    icon: '💰',
    angle: -90,
    chips: ['Pagar fatura', 'Cobrar o João'],
    pool: ['Boleto condomínio', 'Renovar a CNH', 'IPTU vence'],
  },
  {
    key: 'saude',
    label: 'Saúde',
    icon: '💚',
    angle: -150,
    chips: ['Academia hoje?', 'Remédio da mãe'],
    pool: ['Médico dia 12', 'Dormir cedo', 'Beber 2L de água'],
  },
  {
    key: 'pessoal',
    label: 'Pessoal',
    icon: '✨',
    angle: 150,
    chips: ['Aniversário sogra', 'Presente Dudu'],
    pool: ['Ligar p/ amiga', 'Respirar 5 min', 'Ler à noite'],
  },
];
