import { Lang } from '../i18n/LanguageContext';

export interface BrandLayer {
  kind: 'ecosystem' | 'agent' | 'modules';
  kicker: string;
  name: string;
  text: string;
}

export const brandLayers: Record<Lang, BrandLayer[]> = {
  pt: [
    {
      kind: 'ecosystem',
      kicker: 'O App · O Ecossistema',
      name: 'AutoNoma',
      text:
        '"Quem usa AutoNoma se torna AutoNoma." A marca-mãe. O app. O ecossistema completo onde a assinante vive, paga e cresce.',
    },
    {
      kind: 'agent',
      kicker: 'Agente Principal · A Alma',
      name: 'Noma',
      text:
        'A companheira. A amiga organizada. Resolve o cotidiano, aprende quem você é, identifica dores profundas e aciona o agente certo no momento certo.',
    },
    {
      kind: 'modules',
      kicker: 'Módulos Especializados',
      name: 'Agentes Noma',
      text:
        '10 agentes que curam dores profundas. Cobrados por uso — diária, semanal ou mensal. A Noma identifica a dor e oferece o agente certo na conversa.',
    },
  ],
  en: [
    {
      kind: 'ecosystem',
      kicker: 'The App · The Ecosystem',
      name: 'AutoNoma',
      text:
        '"Whoever uses AutoNoma becomes AutoNoma." The mother brand. The app. The complete ecosystem where the subscriber lives, pays and grows.',
    },
    {
      kind: 'agent',
      kicker: 'Main Agent · The Soul',
      name: 'Noma',
      text:
        'The companion. The organized friend. She handles everyday life, learns who you are, identifies deep pains and triggers the right agent at the right moment.',
    },
    {
      kind: 'modules',
      kicker: 'Specialized Modules',
      name: 'Noma Agents',
      text:
        '10 agents that cure deep pains. Charged per use — daily, weekly or monthly. Noma identifies the pain and offers the right agent in the conversation.',
    },
  ],
};

export interface Channel {
  kicker: string;
  name: string;
  text: string;
  accent: 'noma' | 'whatsapp' | 'telegram';
}

export const channels: Record<Lang, Channel[]> = {
  pt: [
    {
      kicker: 'Canal principal · Mês 1',
      name: '📱 App AutoNoma',
      text: 'Experiência completa. Voz + chat + agentes + planos. 100% sob controle da AutoNoma.',
      accent: 'noma',
    },
    {
      kicker: 'Porta de entrada · Mês 1',
      name: '💬 WhatsApp',
      text: '93% das brasileiras já usam. Monitorado via Cade — aberto no Brasil. Canal B.',
      accent: 'whatsapp',
    },
    {
      kicker: 'Backup sem risco · Mês 1',
      name: '✈️ Telegram',
      text: 'API gratuita, sem restrições. Zero risco regulatório. Canal C imediato.',
      accent: 'telegram',
    },
  ],
  en: [
    {
      kicker: 'Main channel · Month 1',
      name: '📱 AutoNoma App',
      text: 'Complete experience. Voice + chat + agents + plans. 100% under AutoNoma’s control.',
      accent: 'noma',
    },
    {
      kicker: 'Entry door · Month 1',
      name: '💬 WhatsApp',
      text: '93% of Brazilian women already use it. Monitored via Cade (antitrust) — open in Brazil. Channel B.',
      accent: 'whatsapp',
    },
    {
      kicker: 'Risk-free backup · Month 1',
      name: '✈️ Telegram',
      text: 'Free API, no restrictions. Zero regulatory risk. Immediate Channel C.',
      accent: 'telegram',
    },
  ],
};
