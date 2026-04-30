export type ContentKind = 'video' | 'image';

export interface ContentItem {
  kind: ContentKind;
  number: string;
  title: string;
  description: string;
  src: string;
  poster?: string;
}

export const contentItems: ContentItem[] = [
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
    kind: 'image',
    number: 'MindMap',
    title: 'Mapa Mental do Produto',
    description:
      'Visão estruturada de todos os módulos, agentes e fluxos da AutoNoma. Clique para expandir em tela cheia.',
    src: '/media/MindMap.png',
  },
  {
    kind: 'image',
    number: 'Infográfico',
    title: 'Infográfico do Produto',
    description:
      'Ilustração completa do produto, jornada da usuária e modelo de receita. Clique para expandir em tela cheia.',
    src: '/media/Infografico.png',
  },
];
