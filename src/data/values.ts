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
      title: 'Memória = Moat',
      text:
        'Qualquer concorrente acessa a mesma Claude API. Ninguém acessa os meses de histórico acumulado de cada usuária. Esse dado contextual permanente é o moat — torna a Noma insubstituível. Zapia prova o apetite do mercado (6M usuários LATAM); AutoNoma vai além com receita desde o M1.',
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
      title: 'Memory = Moat',
      text:
        'Any competitor can access the same Claude API. Nobody accesses the months of accumulated history we build for each user. That persistent contextual data is the moat — it makes Noma irreplaceable. Zapia proves market appetite (6M users across LATAM); AutoNoma goes further with revenue from Day 1.',
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
