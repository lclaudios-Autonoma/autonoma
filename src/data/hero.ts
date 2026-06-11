import { Lang } from '../i18n/LanguageContext';

export interface HeroPill {
  label: string;
  primary?: boolean;
}

export const heroPills: Record<Lang, HeroPill[]> = {
  pt: [
    { label: 'Freemium + Agentes', primary: true },
    { label: 'R$1M Pre-Seed' },
    { label: '42,8M TAM Brasil' },
    { label: 'Anthropic Claude API' },
    { label: 'WhatsApp · Telegram · App' },
    { label: '200K → LATAM' },
  ],
  en: [
    { label: 'Freemium + Agents', primary: true },
    { label: 'R$1M Pre-Seed' },
    { label: '42.8M TAM Brazil' },
    { label: 'Anthropic Claude API' },
    { label: 'WhatsApp · Telegram · App' },
    { label: '200K → LATAM' },
  ],
};

export const heroBadge: Record<Lang, string> = {
  pt: 'Modelo de Negócio Completo · v4.0 · Redesign Premium',
  en: 'Complete Business Model · v4.0 · Premium Redesign',
};

export const heroSub: Record<Lang, string> = {
  pt: 'Asset Light SaaS · Brasil · Expansão LATAM',
  en: 'Asset Light SaaS · Brazil · LATAM Expansion',
};

export const chaosChips: Record<Lang, string[]> = {
  pt: [
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
  ],
  en: [
    'Book the pediatrician',
    'Grocery list',
    'Boss’s e-mail',
    'Gift for Dudu',
    'Gym today?',
    'Follow up with João',
    'Mom’s medicine',
    'Pay the bill',
    'Outfit for the meeting',
    'Dinner?',
    'Condo fee due',
    'Mother-in-law’s birthday',
  ],
};

export interface MindBranch {
  key: string;
  label: string;
  icon: string;
  angle: number;
  chips: string[];
  pool: string[];
}

export const mindMapBranches: Record<Lang, MindBranch[]> = {
  pt: [
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
  ],
  en: [
    {
      key: 'casa',
      label: 'Home',
      icon: '🏠',
      angle: 90,
      chips: ['Grocery list', 'Dinner tonight?'],
      pool: ['Hallway light', 'Saturday market', 'Breakfast', 'Fresh sheets'],
    },
    {
      key: 'filhos',
      label: 'Kids',
      icon: '👶',
      angle: 30,
      chips: ['Book the pediatrician', 'Pickup at 5pm'],
      pool: ['Dudu’s dentist', 'Homework', 'Vaccines up to date'],
    },
    {
      key: 'trabalho',
      label: 'Work',
      icon: '💼',
      angle: -30,
      chips: ['Boss’s e-mail', 'Outfit for the meeting'],
      pool: ['Friday’s deck', '10am call', 'Review proposal'],
    },
    {
      key: 'financas',
      label: 'Finances',
      icon: '💰',
      angle: -90,
      chips: ['Pay the bill', 'Follow up with João'],
      pool: ['Condo fee', 'Renew the license', 'Property tax due'],
    },
    {
      key: 'saude',
      label: 'Health',
      icon: '💚',
      angle: -150,
      chips: ['Gym today?', 'Mom’s medicine'],
      pool: ['Doctor on the 12th', 'Sleep early', 'Drink 2L of water'],
    },
    {
      key: 'pessoal',
      label: 'Personal',
      icon: '✨',
      angle: 150,
      chips: ['In-law’s birthday', 'Gift for Dudu'],
      pool: ['Call a friend', 'Breathe 5 min', 'Read at night'],
    },
  ],
};
