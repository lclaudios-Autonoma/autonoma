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

export const agentPhases: AgentPhase[] = [
  {
    label: 'Fase 1 · Mês 1–3',
    name: 'MVP · 3 Agentes Core',
    description:
      'Agentes com maior demanda imediata e menor custo de build. Validação de modelo antes de escalar.',
    arr: 'R$29–75K',
    arrLabel: 'potencial MRR adicional',
    accent: 'mvp',
    agents: [
      {
        icon: '👗',
        name: 'NomaStyle',
        dor: '"Me sinto invisível. Não sei mais o que combina comigo."',
        scope: 'Autoestima · closet · looks · compras',
        pricing: { diaria: 'Diária R$3,99', semanal: 'Semanal R$19,90', mensal: 'Mensal R$29,90' },
        potential: 'Potencial: 15–20% das Free ativam · 🔥 maior apelo emocional',
        barPct: 85,
      },
      {
        icon: '🧠',
        name: 'Noma4you',
        dor: '"Estou me perdendo. Ansiedade, exaustão, não sei quem sou."',
        scope: 'Emoções · ansiedade · presença · foco',
        pricing: { diaria: 'Diária R$2,99', semanal: 'Semanal R$14,99', mensal: 'Mensal R$24,99' },
        potential: 'Potencial: 10–15% das Free · alto NPS gerado · fideliza',
        barPct: 75,
      },
      {
        icon: '✨',
        name: 'NomaBe',
        dor: '"Quero me cuidar mas nunca tenho tempo de pesquisar."',
        scope: 'Beleza · salão · cuidado pessoal · spa',
        pricing: { diaria: 'Diária R$1,99', semanal: 'Semanal R$12,99', mensal: 'Mensal R$19,99' },
        potential: 'Potencial: ticket médio mensal mais baixo · alta frequência',
        barPct: 65,
      },
    ],
  },
  {
    label: 'Fase 2 · Mês 6–12',
    name: 'Expansão · 3 Agentes',
    description:
      'Ativados por demanda dos dados de onboarding. Só entram quando base valida a dor.',
    arr: 'R$80–150K',
    arrLabel: 'potencial MRR fase 2',
    accent: 'f2',
    agents: [
      {
        icon: '🕊️',
        name: 'NomaGod',
        dor: '"Preciso de um conselho que venha do coração."',
        scope: 'Espiritualidade · direção · fé · propósito',
        pricing: { diaria: 'Diária R$1,99', semanal: 'Semanal R$7,99', mensal: 'Mensal R$14,99' },
        potential: 'Diferencial único no mercado · fidelidade altíssima',
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
        barPct: 55,
      },
    ],
  },
  {
    label: 'Fase 3 · Mês 13–24',
    name: 'LATAM Ready · 4 Agentes',
    description:
      'Construídos com dados brasileiros, prontos para escalar com localização mínima na LATAM.',
    arr: 'R$200K+',
    arrLabel: 'potencial MRR fase 3',
    accent: 'f3',
    agents: [
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
        icon: '🏠',
        name: 'NomaHome',
        dor: '"Casa sempre com algo pra resolver."',
        scope: 'Casa · manutenção · prestadores · rotina',
        pricing: { mensal: 'R$14,99/mês' },
        potential: 'Tickets avulsos adicionais de prestadores',
        barPct: 65,
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
      {
        icon: '✈️',
        name: 'NomaTrip',
        dor: '"Quero viajar mas nunca sai do plano."',
        scope: 'Viagem · roteiro · reservas · pacotes',
        pricing: { diaria: 'R$9,99/dia', semanal: 'R$19,99/sem', mensal: 'Mensal' },
        potential: 'Alto ticket pontual · viral pós-viagem',
        barPct: 50,
      },
    ],
  },
];

export const agentsTotals = [
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
];
