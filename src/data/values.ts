import { Lang } from '../i18n/LanguageContext';

export interface ValueCard {
  label: string;
  title: string;
  text: string;
}

export interface PVHero {
  label: string;
  paragraphs: string[];
}

export const pvHero: Record<Lang, PVHero> = {
  pt: {
    label: 'A crença fundadora · Simon Sinek · WHY',
    paragraphs: [
      'Acreditamos que nenhuma mulher deveria resolver tudo sozinha.',
      '**42,8 milhões** de mulheres ocupadas no Brasil carregam uma lista mental interminável — casa, filhos, trabalho, saúde, relacionamento — e nenhum produto foi construído de verdade para resolver isso.',
      'A AutoNoma existe porque essa companheira, até hoje, **não existia.**',
    ],
  },
  en: {
    label: 'The founding belief · Simon Sinek · WHY',
    paragraphs: [
      'We believe no woman should have to solve everything alone.',
      '**42.8 million** working women in Brazil carry an endless mental list — home, kids, work, health, relationships — and no product was ever truly built to solve this.',
      'AutoNoma exists because this companion, until today, **did not exist.**',
    ],
  },
};

export const valueCards: Record<Lang, ValueCard[]> = {
  pt: [
    {
      label: 'O que entregamos',
      title: 'Solução, não sugestão',
      text:
        'A Noma não joga opções no colo. Ela decide, age e entrega. A usuária confirma — não escolhe entre 10 coisas que ela não tem energia pra avaliar. Peça. Resolvi. Simples assim.',
    },
    {
      label: 'Como nos diferenciamos',
      title: 'Memória + Personalidade',
      text:
        'A Zapia tem 2,1M de usuários no Brasil sem memória, sem foco feminino e sem agentes especializados. A AutoNoma conhece quem você é antes da primeira conversa — e fica melhor a cada interação.',
    },
    {
      label: 'Por que agora',
      title: '4 convergências únicas',
      text:
        'Meta baniu IAs genéricas (jan/2026, suspenso pelo Cade). Pix Automático lançado. SaaS LATAM cresce 23%/ano. Nenhum concorrente com DNA completo. A janela está aberta.',
    },
    {
      label: 'Modelo estrutural',
      title: 'Asset Light SaaS',
      text:
        'Zero ativos físicos. Zero prestadores próprios. A AutoNoma orquestra — busca imparcial nas melhores plataformas sem ganhar comissão de ninguém. Margem bruta de 70%+. Escala sem limite físico.',
    },
  ],
  en: [
    {
      label: 'What we deliver',
      title: 'Solution, not suggestion',
      text:
        'Noma doesn’t dump options in your lap. She decides, acts and delivers. The user confirms — she doesn’t choose among 10 things she has no energy to evaluate. Ask. Done. That simple.',
    },
    {
      label: 'How we differentiate',
      title: 'Memory + Personality',
      text:
        'Zapia has 2.1M users in Brazil with no memory, no female focus and no specialized agents. AutoNoma knows who you are before the first conversation — and gets better with every interaction.',
    },
    {
      label: 'Why now',
      title: '4 unique convergences',
      text:
        'Meta banned generic AIs (Jan/2026, suspended by Cade, the Brazilian antitrust authority). Pix Automático (recurring instant payments) launched. LATAM SaaS grows 23%/year. No competitor with the complete DNA. The window is open.',
    },
    {
      label: 'Structural model',
      title: 'Asset Light SaaS',
      text:
        'Zero physical assets. Zero in-house service providers. AutoNoma orchestrates — impartial search across the best platforms without taking commission from anyone. 70%+ gross margin. Scales without physical limits.',
    },
  ],
};
