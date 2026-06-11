import { Lang } from '../i18n/LanguageContext';

export interface ReceitaTier {
  tier: string;
  name: string;
  bullets: string[];
  price: string;
  priceSub: string;
  accent: 'neutral' | 'core' | 'mid' | 'high' | 'max';
}

export const receitaTiers: Record<Lang, ReceitaTier[]> = {
  pt: [
    {
      tier: 'Topo do funil',
      name: 'Lista de Espera',
      bullets: [
        'Onboarding chat completo (8 perguntas)',
        'Perfil profundo coletado antes do acesso',
        'Convite obrigatório de 1 pessoa',
        'Código único gerado automaticamente',
        'Viral loop K ≈ 0,6–0,8',
      ],
      price: 'R$0',
      priceSub: 'sem cobrança',
      accent: 'neutral',
    },
    {
      tier: 'Base · Motor de escala',
      name: 'Noma Free',
      bullets: [
        'Chat Noma ilimitado',
        'Busca imparcial em todas plataformas',
        'Memória básica de preferências',
        'Agentes por uso avulso (pay per use)',
        'WhatsApp + Telegram + App',
      ],
      price: 'R$0',
      priceSub: 'custo R$2,30/ativa',
      accent: 'core',
    },
    {
      tier: 'Upgrade natural do Free',
      name: 'Essencial',
      bullets: [
        'Chat ilimitado com a Noma',
        'Memória completa e persistente',
        'Busca avançada em todas as plataformas',
        'Agentes por uso avulso mantidos',
      ],
      price: 'R$39,90',
      priceSub: '/mês',
      accent: 'mid',
    },
    {
      tier: 'Resolve dor profunda',
      name: 'Autônoma',
      bullets: [
        'Chat + 1 Agente Noma à escolha',
        'Memória completa e persistente',
        'Noma proativa (avisa antes de pedir)',
        'Pagamento via Pix automático ou cartão',
      ],
      price: 'R$59,90',
      priceSub: '/mês',
      accent: 'high',
    },
    {
      tier: 'Power user · máximo',
      name: 'Livre',
      bullets: [
        'Chat + 2 Agentes Noma à escolha dela',
        'Relatório mensal de tudo resolvido',
        'Suporte prioritário',
        'Relatório mensal completo',
      ],
      price: 'R$79,90',
      priceSub: '/mês',
      accent: 'max',
    },
  ],
  en: [
    {
      tier: 'Top of funnel',
      name: 'Waitlist',
      bullets: [
        'Full chat onboarding (8 questions)',
        'Deep profile collected before access',
        'Mandatory invite of 1 person',
        'Unique code generated automatically',
        'Viral loop K ≈ 0.6–0.8',
      ],
      price: 'R$0',
      priceSub: 'no charge',
      accent: 'neutral',
    },
    {
      tier: 'Base · Scale engine',
      name: 'Noma Free',
      bullets: [
        'Unlimited Noma chat',
        'Impartial search across all platforms',
        'Basic preference memory',
        'Agents on pay-per-use',
        'WhatsApp + Telegram + App',
      ],
      price: 'R$0',
      priceSub: 'cost R$2.30/active user',
      accent: 'core',
    },
    {
      tier: 'Natural upgrade from Free',
      name: 'Essencial',
      bullets: [
        'Unlimited chat with Noma',
        'Complete, persistent memory',
        'Advanced search across all platforms',
        'Pay-per-use agents kept',
      ],
      price: 'R$39.90',
      priceSub: '/mo',
      accent: 'mid',
    },
    {
      tier: 'Cures a deep pain',
      name: 'Autônoma',
      bullets: [
        'Chat + 1 Noma Agent of her choice',
        'Complete, persistent memory',
        'Proactive Noma (warns before being asked)',
        'Payment via automatic Pix or card',
      ],
      price: 'R$59.90',
      priceSub: '/mo',
      accent: 'high',
    },
    {
      tier: 'Power user · maximum',
      name: 'Livre',
      bullets: [
        'Chat + 2 Noma Agents of her choice',
        'Monthly report of everything solved',
        'Priority support',
        'Complete monthly report',
      ],
      price: 'R$79.90',
      priceSub: '/mo',
      accent: 'max',
    },
  ],
};
