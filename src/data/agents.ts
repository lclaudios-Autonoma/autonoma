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
      label: 'Fase 01 · Lançamento · Mês 1–6',
      name: '4 Agentes de Lançamento',
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
      ],
    },
    {
      label: 'Fase 02 · Expansão · Mês 7–24',
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
  ],
  en: [
    {
      label: 'Phase 01 · Launch · Month 1–6',
      name: '4 Launch Agents',
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
      ],
    },
    {
      label: 'Phase 02 · Expansion · Month 7–24',
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
