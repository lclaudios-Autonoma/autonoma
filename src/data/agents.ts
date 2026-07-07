import { Lang } from '../i18n/LanguageContext';

export interface AgentPricing {
  diaria?: string;
  semanal?: string;
  mensal: string;
}

export interface Agent {
  icon: string;
  name: string;
  dor: string;
  scope: string;
  pricing: AgentPricing;
  potential: string;
  barPct: number;
}

export interface AgentPhase {
  label: string;
  name: string;
  description: string;
  arr: string;
  arrLabel: string;
  accent: 'mvp' | 'f2' | 'f3';
  agents: Agent[];
}

export const agentPhases: Record<Lang, AgentPhase[]> = {
  pt: [
    {
      label: 'Onda 01 · Lançamento · Mês 1–6',
      name: '6 Agentes de Lançamento',
      description:
        'Os agentes com maior demanda imediata e apelo emocional. Validam o modelo antes de escalar.',
      arr: 'R$40–90K',
      arrLabel: 'potencial MRR adicional',
      accent: 'mvp',
      agents: [
        {
          icon: '👗',
          name: 'NomaStyle',
          dor: '"Me sinto invisível. Não sei mais o que combina comigo."',
          scope: 'Autoestima · closet · looks · compras',
          pricing: { diaria: 'Diária R$3,99', semanal: 'Semanal R$19,90', mensal: 'Mensal R$29,90' },
          potential: '15–20% das usuárias ativam · 🔥 maior apelo emocional',
          barPct: 85,
        },
        {
          icon: '✨',
          name: 'NomaBe',
          dor: '"Quero me cuidar mas nunca tenho tempo de pesquisar."',
          scope: 'Beleza · salão · cuidado pessoal · spa',
          pricing: { diaria: 'Diária R$1,99', semanal: 'Semanal R$12,99', mensal: 'Mensal R$19,99' },
          potential: 'Alta frequência de uso · fideliza pelo hábito',
          barPct: 70,
        },
        {
          icon: '📋',
          name: 'NomaPlan',
          dor: '"Minha agenda é um caos. Nunca sei o que é prioridade."',
          scope: 'Agenda · planejamento · prioridades · rotina',
          pricing: { semanal: 'Semanal R$9,99', mensal: 'Mensal R$19,99' },
          potential: 'Core da carga mental · base de uso diário',
          barPct: 80,
        },
        {
          icon: '🏠',
          name: 'NomaHome',
          dor: '"Casa sempre com algo pra resolver."',
          scope: 'Casa · manutenção · prestadores · rotina',
          pricing: { mensal: 'Mensal R$14,99' },
          potential: 'Tickets avulsos adicionais de prestadores',
          barPct: 65,
        },
        {
          icon: '🍳',
          name: 'NomaFood',
          dor: '"Não sei o que fazer de jantar. De novo."',
          scope: 'Alimentação · receitas · compras · cardápio',
          pricing: { semanal: 'Semanal R$7,99', mensal: 'Mensal R$14,99' },
          potential: 'Uso diário garantido · maior frequência do portfólio',
          barPct: 78,
        },
        {
          icon: '🤝',
          name: 'NomaConnect',
          dor: '"Minhas amizades sumiram depois que virei mãe."',
          scope: 'Conexões · eventos · socialização · comunidade',
          pricing: { semanal: 'Semanal R$9,99', mensal: 'Mensal R$19,99' },
          potential: 'Viral loop nativo · cada conexão traz outra usuária',
          barPct: 72,
        },
      ],
    },
    {
      label: 'Onda 02 · Expansão · Mês 7–12',
      name: '6 Agentes de Expansão',
      description:
        'Ativados por demanda dos dados de onboarding. Só entram quando a base valida cada dor.',
      arr: 'R$150–350K',
      arrLabel: 'potencial MRR fase 2',
      accent: 'f2',
      agents: [
        {
          icon: '🧠',
          name: 'Noma4you',
          dor: '"Estou me perdendo. Ansiedade, exaustão, não sei quem sou."',
          scope: 'Emoções · ansiedade · presença · foco',
          pricing: { diaria: 'Diária R$2,99', semanal: 'Semanal R$14,99', mensal: 'Mensal R$24,99' },
          potential: '10–15% das usuárias · alto NPS · fideliza',
          barPct: 75,
        },
        {
          icon: '🕊️',
          name: 'NomaGod',
          dor: '"Preciso de um conselho que venha do coração."',
          scope: 'Espiritualidade · direção · fé · propósito',
          pricing: { diaria: 'Diária R$1,99', semanal: 'Semanal R$7,99', mensal: 'Mensal R$14,99' },
          potential: 'Diferencial único · fidelidade altíssima',
          barPct: 60,
        },
        {
          icon: '💪',
          name: 'NomaFit',
          dor: '"Começo. Paro. Me culpo. Nunca consigo manter."',
          scope: 'Saúde · movimento · rotina · sem culpa',
          pricing: { semanal: 'Semanal R$9,99', mensal: 'Mensal R$19,99' },
          potential: 'Alto potencial viral · conteúdo shareable',
          barPct: 70,
        },
        {
          icon: '💰',
          name: 'NomaFinance',
          dor: '"O dinheiro some e eu não sei por quê."',
          scope: 'Finanças · gastos · controle · planejamento',
          pricing: { mensal: 'Mensal R$14,99' },
          potential: 'Churn mais baixo do portfólio · lock-in financeiro',
          barPct: 75,
        },
        {
          icon: '👶',
          name: 'NomaMama',
          dor: '"Agenda dos filhos = caos."',
          scope: 'Filhos · escola · família · rotina',
          pricing: { semanal: 'R$9,99/sem', mensal: 'R$17,99/mês' },
          potential: 'TAM: 50%+ das usuárias têm filhos',
          barPct: 80,
        },
        {
          icon: '🚀',
          name: 'NomaCareer',
          dor: '"Minha carreira trava enquanto cuido de tudo."',
          scope: 'Carreira · crescimento · networking · foco',
          pricing: { semanal: 'R$9,99/sem', mensal: 'R$19,99/mês' },
          potential: 'Maior ticket · público C-level',
          barPct: 60,
        },
      ],
    },
    {
      label: 'Onda 03 · Consolidação · Mês 13–24',
      name: '6 Agentes de Série A',
      description:
        'Marketplace maduro. Agentes de nicho com alto LTV, validados por dados reais de 12 meses de operação.',
      arr: 'R$200–500K',
      arrLabel: 'potencial MRR fase 3',
      accent: 'f3',
      agents: [
        {
          icon: '✈️',
          name: 'NomaGo',
          dor: '"Quero viajar mas não tenho tempo de pesquisar tudo."',
          scope: 'Viagens · roteiros · passagens · hospedagem',
          pricing: { diaria: 'Diária R$4,99', semanal: 'Semanal R$19,99', mensal: 'Mensal R$29,90' },
          potential: 'Ticket alto · sazonalidade previsível · alto NPS',
          barPct: 70,
        },
        {
          icon: '🐾',
          name: 'NomaPet',
          dor: '"Meu pet precisa de cuidado e eu não tenho tempo."',
          scope: 'Pets · veterinário · passeador · pet shop',
          pricing: { semanal: 'Semanal R$9,99', mensal: 'Mensal R$17,99' },
          potential: '67% dos lares BR têm pet · mercado R$67bi',
          barPct: 75,
        },
        {
          icon: '⚖️',
          name: 'NomaRights',
          dor: '"Não sei meus direitos. Tenho medo de procurar ajuda."',
          scope: 'Direitos · orientação legal · divórcio · pensão',
          pricing: { diaria: 'Diária R$3,99', mensal: 'Mensal R$24,99' },
          potential: 'Impacto social forte · diferencial competitivo único',
          barPct: 55,
        },
        {
          icon: '📚',
          name: 'NomaLearn',
          dor: '"Quero estudar mas não sei por onde começar."',
          scope: 'Educação · cursos · desenvolvimento · idiomas',
          pricing: { semanal: 'Semanal R$9,99', mensal: 'Mensal R$19,99' },
          potential: 'Retenção longa · complementa NomaCareer',
          barPct: 65,
        },
        {
          icon: '🧓',
          name: 'NomaSenior',
          dor: '"Cuido dos meus pais sozinha. Ninguém fala sobre isso."',
          scope: 'Pais idosos · saúde · cuidadores · rotina',
          pricing: { mensal: 'Mensal R$19,99' },
          potential: 'Dor invisível · fidelização emocional profunda',
          barPct: 60,
        },
        {
          icon: '🎉',
          name: 'NomaSocial',
          dor: '"Organizar qualquer evento vira minha responsabilidade."',
          scope: 'Eventos · festas · datas · organização social',
          pricing: { diaria: 'Diária R$2,99', semanal: 'Semanal R$9,99', mensal: 'Mensal R$17,99' },
          potential: 'Sazonalidade alta · uso intenso em datas comemorativas',
          barPct: 68,
        },
      ],
    },
  ],
  en: [
    {
      label: 'Wave 01 · Launch · Month 1–6',
      name: '6 Launch Agents',
      description:
        'Agents with the highest immediate demand and emotional appeal. Validate the model before scaling.',
      arr: 'R$40–90K',
      arrLabel: 'additional MRR potential',
      accent: 'mvp',
      agents: [
        {
          icon: '👗',
          name: 'NomaStyle',
          dor: '"I feel invisible. I no longer know what suits me."',
          scope: 'Self-esteem · closet · outfits · shopping',
          pricing: { diaria: 'Daily R$3.99', semanal: 'Weekly R$19.90', mensal: 'Monthly R$29.90' },
          potential: '15–20% of users activate · 🔥 strongest emotional appeal',
          barPct: 85,
        },
        {
          icon: '✨',
          name: 'NomaBe',
          dor: '"I want to take care of myself but never have time to research."',
          scope: 'Beauty · salon · self-care · spa',
          pricing: { diaria: 'Daily R$1.99', semanal: 'Weekly R$12.99', mensal: 'Monthly R$19.99' },
          potential: 'High usage frequency · builds habit loyalty',
          barPct: 70,
        },
        {
          icon: '📋',
          name: 'NomaPlan',
          dor: '"My schedule is chaos. I never know what the priority is."',
          scope: 'Calendar · planning · priorities · routine',
          pricing: { semanal: 'Weekly R$9.99', mensal: 'Monthly R$19.99' },
          potential: 'Core of mental load · daily use base',
          barPct: 80,
        },
        {
          icon: '🏠',
          name: 'NomaHome',
          dor: '"There\'s always something to fix at home."',
          scope: 'Home · maintenance · providers · routine',
          pricing: { mensal: 'Monthly R$14.99' },
          potential: 'Additional one-off provider tickets',
          barPct: 65,
        },
        {
          icon: '🍳',
          name: 'NomaFood',
          dor: '"I don\'t know what to cook for dinner. Again."',
          scope: 'Food · recipes · groceries · meal planning',
          pricing: { semanal: 'Weekly R$7.99', mensal: 'Monthly R$14.99' },
          potential: 'Guaranteed daily use · highest frequency in portfolio',
          barPct: 78,
        },
        {
          icon: '🤝',
          name: 'NomaConnect',
          dor: '"My friendships disappeared after I became a mom."',
          scope: 'Connections · events · socializing · community',
          pricing: { semanal: 'Weekly R$9.99', mensal: 'Monthly R$19.99' },
          potential: 'Native viral loop · each connection brings another user',
          barPct: 72,
        },
      ],
    },
    {
      label: 'Wave 02 · Expansion · Month 7–12',
      name: '6 Expansion Agents',
      description:
        'Activated by demand from onboarding data. Only launched once the user base validates each pain.',
      arr: 'R$150–350K',
      arrLabel: 'phase 2 MRR potential',
      accent: 'f2',
      agents: [
        {
          icon: '🧠',
          name: 'Noma4you',
          dor: '"I\'m losing myself. Anxiety, exhaustion, I don\'t know who I am."',
          scope: 'Emotions · anxiety · presence · focus',
          pricing: { diaria: 'Daily R$2.99', semanal: 'Weekly R$14.99', mensal: 'Monthly R$24.99' },
          potential: '10–15% of users · high NPS · builds loyalty',
          barPct: 75,
        },
        {
          icon: '🕊️',
          name: 'NomaGod',
          dor: '"I need advice that comes from the heart."',
          scope: 'Spirituality · direction · faith · purpose',
          pricing: { diaria: 'Daily R$1.99', semanal: 'Weekly R$7.99', mensal: 'Monthly R$14.99' },
          potential: 'Unique differentiator · extremely high loyalty',
          barPct: 60,
        },
        {
          icon: '💪',
          name: 'NomaFit',
          dor: '"I start. I stop. I blame myself. I can never keep it up."',
          scope: 'Health · movement · routine · guilt-free',
          pricing: { semanal: 'Weekly R$9.99', mensal: 'Monthly R$19.99' },
          potential: 'High viral potential · shareable content',
          barPct: 70,
        },
        {
          icon: '💰',
          name: 'NomaFinance',
          dor: '"Money disappears and I don\'t know why."',
          scope: 'Finances · spending · control · planning',
          pricing: { mensal: 'Monthly R$14.99' },
          potential: 'Lowest churn in portfolio · financial lock-in',
          barPct: 75,
        },
        {
          icon: '👶',
          name: 'NomaMama',
          dor: '"The kids\' schedule = chaos."',
          scope: 'Kids · school · family · routine',
          pricing: { semanal: 'R$9.99/wk', mensal: 'R$17.99/mo' },
          potential: 'TAM: 50%+ of users have children',
          barPct: 80,
        },
        {
          icon: '🚀',
          name: 'NomaCareer',
          dor: '"My career stalls while I take care of everything."',
          scope: 'Career · growth · networking · focus',
          pricing: { semanal: 'R$9.99/wk', mensal: 'R$19.99/mo' },
          potential: 'Highest ticket · C-level audience',
          barPct: 60,
        },
      ],
    },
    {
      label: 'Wave 03 · Consolidation · Month 13–24',
      name: '6 Series A Agents',
      description:
        'Mature marketplace. Niche agents with high LTV, validated by 12 months of real operational data.',
      arr: 'R$200–500K',
      arrLabel: 'phase 3 MRR potential',
      accent: 'f3',
      agents: [
        {
          icon: '✈️',
          name: 'NomaGo',
          dor: '"I want to travel but have no time to research everything."',
          scope: 'Travel · itineraries · flights · accommodation',
          pricing: { diaria: 'Daily R$4.99', semanal: 'Weekly R$19.99', mensal: 'Monthly R$29.90' },
          potential: 'High ticket · predictable seasonality · high NPS',
          barPct: 70,
        },
        {
          icon: '🐾',
          name: 'NomaPet',
          dor: '"My pet needs care and I don\'t have the time."',
          scope: 'Pets · vet · dog walker · pet shop',
          pricing: { semanal: 'Weekly R$9.99', mensal: 'Monthly R$17.99' },
          potential: '67% of BR homes have pets · R$67bi market',
          barPct: 75,
        },
        {
          icon: '⚖️',
          name: 'NomaRights',
          dor: '"I don\'t know my rights. I\'m afraid to seek help."',
          scope: 'Rights · legal guidance · divorce · child support',
          pricing: { diaria: 'Daily R$3.99', mensal: 'Monthly R$24.99' },
          potential: 'Strong social impact · unique competitive edge',
          barPct: 55,
        },
        {
          icon: '📚',
          name: 'NomaLearn',
          dor: '"I want to study but don\'t know where to start."',
          scope: 'Education · courses · development · languages',
          pricing: { semanal: 'Weekly R$9.99', mensal: 'Monthly R$19.99' },
          potential: 'Long retention · complements NomaCareer',
          barPct: 65,
        },
        {
          icon: '🧓',
          name: 'NomaSenior',
          dor: '"I take care of my parents alone. No one talks about this."',
          scope: 'Elderly parents · health · caregivers · routine',
          pricing: { mensal: 'Monthly R$19.99' },
          potential: 'Invisible pain · deep emotional loyalty',
          barPct: 60,
        },
        {
          icon: '🎉',
          name: 'NomaSocial',
          dor: '"Organizing any event becomes my responsibility."',
          scope: 'Events · parties · dates · social planning',
          pricing: { diaria: 'Daily R$2.99', semanal: 'Weekly R$9.99', mensal: 'Monthly R$17.99' },
          potential: 'High seasonality · intense use on holidays',
          barPct: 68,
        },
      ],
    },
  ],
};

export interface AgentTotal {
  label: string;
  value: string;
}

export const agentsTotals: Record<Lang, AgentTotal[]> = {
  pt: [
    {
      label: 'Receita adicional estimada · mês 24 (use avulso + planos com agentes)',
      value: 'R$280–420K/mês',
    },
    {
      label: 'Contribuição ao ARR total',
      value: '+25–35%',
    },
    {
      label: 'Agentes com maior LTV projetado',
      value: 'NomaFinance · NomaMama',
    },
    {
      label: 'Margem bruta por agente (sem infra adicional)',
      value: '78–84%',
    },
  ],
  en: [
    {
      label: 'Estimated additional revenue · month 24 (pay-per-use + plans with agents)',
      value: 'R$280–420K/mo',
    },
    {
      label: 'Contribution to total ARR',
      value: '+25–35%',
    },
    {
      label: 'Agents with highest projected LTV',
      value: 'NomaFinance · NomaMama',
    },
    {
      label: 'Gross margin per agent (no additional infra)',
      value: '78–84%',
    },
  ],
};
