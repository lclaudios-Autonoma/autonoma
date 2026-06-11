import { Lang } from '../i18n/LanguageContext';

export interface Plan {
  id: 'free' | 'essencial' | 'autonoma' | 'livre';
  name: string;
  price: string;
  priceSub: string;
  agentNote?: string;       // detalhe de uso de agentes no plano Essencial
  agentNoteDetail?: string; // explicação da premissa do cenário base
  kicker: string;
  quote: string;
  features: string[];
  highlighted?: boolean;
  icon: 'chat' | 'shield' | 'bolt' | 'play';
}

export const plans: Record<Lang, Plan[]> = {
  pt: [
    {
      id: 'free',
      name: 'Noma Free',
      price: 'R$0',
      priceSub: 'Motor de escala e viral loop',
      kicker: 'Gratuito',
      quote: '"Resolve o dia a dia"',
      features: [
        'Chat com limite diário',
        'Busca básica imparcial',
        'Memória simples',
        'Agentes por uso avulso',
      ],
      icon: 'chat',
    },
    {
      id: 'essencial',
      name: 'Essencial',
      price: 'R$39,90',
      priceSub: '/mês · assinatura base',
      agentNote: '+ R$10,00 uso de agentes = R$49,90/mês',
      agentNoteDetail:
        'Cenário base: assinante usa agentes diariamente (média R$10/mês) — premissa para que ela experimente antes de migrar ao plano Autônoma.',
      kicker: 'Assinatura',
      quote: '"Sem limite, sem travar"',
      features: [
        'Chat ilimitado com a Noma',
        'Memória completa e persistente',
        'Busca avançada todas plataformas',
        'Agentes por uso avulso (pay-per-use)',
      ],
      icon: 'shield',
    },
    {
      id: 'autonoma',
      name: 'Autônoma',
      price: 'R$59,90',
      priceSub: '/mês · Pix automático',
      kicker: 'Recomendado',
      quote: '"Cura uma dor profunda"',
      features: [
        'Tudo do Essencial',
        '1 Agente Noma à escolha dela',
        'Noma proativa — avisa antes',
      ],
      icon: 'bolt',
      highlighted: true,
    },
    {
      id: 'livre',
      name: 'Livre',
      price: 'R$79,90',
      priceSub: '/mês · Pix automático',
      kicker: 'Power user',
      quote: '"Vive sem se preocupar"',
      features: [
        'Tudo do Autônoma',
        '2 Agentes Noma à escolha dela',
        'Relatório mensal de tudo resolvido',
      ],
      icon: 'play',
    },
  ],
  en: [
    {
      id: 'free',
      name: 'Noma Free',
      price: 'R$0',
      priceSub: 'Scale engine and viral loop',
      kicker: 'Free',
      quote: '"Handles everyday life"',
      features: [
        'Chat with daily limit',
        'Basic impartial search',
        'Simple memory',
        'Agents on pay-per-use',
      ],
      icon: 'chat',
    },
    {
      id: 'essencial',
      name: 'Essencial',
      price: 'R$39.90',
      priceSub: '/mo · base subscription',
      agentNote: '+ R$10.00 agent usage = R$49.90/mo',
      agentNoteDetail:
        'Base scenario: the subscriber uses agents daily (average R$10/mo) — the premise being she tries them before upgrading to the Autônoma plan.',
      kicker: 'Subscription',
      quote: '"No limits, no blocks"',
      features: [
        'Unlimited chat with Noma',
        'Complete, persistent memory',
        'Advanced search across all platforms',
        'Agents on pay-per-use',
      ],
      icon: 'shield',
    },
    {
      id: 'autonoma',
      name: 'Autônoma',
      price: 'R$59.90',
      priceSub: '/mo · automatic Pix',
      kicker: 'Recommended',
      quote: '"Cures a deep pain"',
      features: [
        'Everything in Essencial',
        '1 Noma Agent of her choice',
        'Proactive Noma — warns ahead',
      ],
      icon: 'bolt',
      highlighted: true,
    },
    {
      id: 'livre',
      name: 'Livre',
      price: 'R$79.90',
      priceSub: '/mo · automatic Pix',
      kicker: 'Power user',
      quote: '"Lives worry-free"',
      features: [
        'Everything in Autônoma',
        '2 Noma Agents of her choice',
        'Monthly report of everything solved',
      ],
      icon: 'play',
    },
  ],
};
