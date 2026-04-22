export interface BrandLayer {
  kind: 'ecosystem' | 'agent' | 'modules';
  kicker: string;
  name: string;
  text: string;
}

export const brandLayers: BrandLayer[] = [
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
];

export interface Channel {
  kicker: string;
  name: string;
  text: string;
  accent: 'noma' | 'whatsapp' | 'telegram';
}

export const channels: Channel[] = [
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
];
