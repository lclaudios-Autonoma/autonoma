import { Lang } from '../i18n/LanguageContext';

export type ContentKind = 'video' | 'image' | 'podcast';

export interface ContentItem {
  kind: ContentKind;
  number: string;
  title: string;
  description: string;
  src: string;
  poster?: string;
}

// EN: vídeos (áudio PT), mapa mental e infográfico (texto PT) são excluídos
// da versão em inglês — apenas os documentos para download permanecem.
export const contentItems: Record<Lang, ContentItem[]> = {
  pt: [
    {
      kind: 'video',
      number: 'Noma',
      title: 'Quem eu Sou?',
      description:
        'Conheça a Noma — a assistente financeira inteligente da AutoNoma. Quem ela é, como pensa e por que foi criada para cuidar do seu dinheiro.',
      src: '/media/NomaQuemsou.mp4',
    },
    {
      kind: 'video',
      number: 'Noma',
      title: 'Meu time especializado',
      description:
        'Conheça os agentes especializados que trabalham com a Noma — cada um com uma função específica para otimizar suas finanças.',
      src: '/media/NomaAgents.mp4',
    },
    {
      kind: 'video',
      number: 'Vídeo 01',
      title: 'AutoNoma Finance',
      description:
        'Vídeo aula completa que percorre o dashboard financeiro — premissas, cenários, unit economics e valuation em 24 meses.',
      src: '/media/AutoNoma_Finance.mp4',
    },
    {
      kind: 'video',
      number: 'Vídeo 02',
      title: 'Quem Somos',
      description:
        'Quem é a AutoNoma, qual problema resolve e por que agora — visão completa do negócio, produto e tese de investimento.',
      src: '/media/Quem_somos.mp4',
    },
    {
      kind: 'podcast',
      number: 'Podcast',
      title: 'Podcast AutoNoma',
      description:
        'Episódio explicativo sobre o modelo AutoNoma — tese de investimento, produto e visão de futuro.',
      src: '/media/Podcast.m4a',
    },
    {
      kind: 'image',
      number: 'Infográfico',
      title: 'Infográfico do Produto',
      description:
        'Ilustração completa do produto, jornada da usuária e modelo de receita. Clique para expandir em tela cheia.',
      src: '/media/Infografico.png',
    },
  ],
  en: [],
};
