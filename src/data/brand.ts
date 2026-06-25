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
      text: 'A marca-mãe. O ecossistema onde assinantes vivem, pagam e crescem.',
    },
    {
      kind: 'agent',
      kicker: 'Agente Principal · A Alma',
      name: 'Noma',
      text: 'A companheira. Resolve o cotidiano, aprende quem você é, aciona o agente certo.',
    },
    {
      kind: 'modules',
      kicker: 'Módulos Especializados',
      name: 'Agentes Noma',
      text: '10 agentes cobrados por uso. Noma identifica a dor e oferece o agente certo.',
    },
  ],
  en: [
    {
      kind: 'ecosystem',
      kicker: 'The App · The Ecosystem',
      name: 'AutoNoma',
      text: 'The mother brand. The ecosystem where subscribers live, pay and grow.',
    },
    {
      kind: 'agent',
      kicker: 'Main Agent · The Soul',
      name: 'Noma',
      text: 'The companion. Handles everyday life, learns who you are, triggers the right agent.',
    },
    {
      kind: 'modules',
      kicker: 'Specialized Modules',
      name: 'Noma Agents',
      text: '10 agents charged per use. Noma identifies pain and offers the right agent.',
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
