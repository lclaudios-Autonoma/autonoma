export interface ReceitaTier {
  tier: string;
  name: string;
  bullets: string[];
  price: string;
  priceSub: string;
  accent: 'neutral' | 'core' | 'mid' | 'high' | 'max';
}

export const receitaTiers: ReceitaTier[] = [
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
];
