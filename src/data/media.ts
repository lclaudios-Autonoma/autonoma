export interface MediaItem {
  kind: 'video' | 'audio';
  tag: string;
  tagAccent: 'noma' | 'purple' | 'gold' | 'terra';
  title: string;
  description: string;
  src: string;
  emoji?: string;
  wide?: boolean;
}

export const mediaItems: MediaItem[] = [
  {
    kind: 'video',
    tag: '🎬 Vídeo',
    tagAccent: 'noma',
    title: 'AutoNoma: Resolvendo Tudo',
    description:
      'Produto, persona e proposta de valor. Como a Noma resolve o cotidiano de 42,8M de mulheres.',
    src: '/media/video_resolvendo_tudo.mp4',
  },
  {
    kind: 'video',
    tag: '🎬 Simulação',
    tagAccent: 'noma',
    title: 'Oportunidade de 15×',
    description:
      'Retorno ao anjo, unit economics e tese de saída via Série A. Por que o momento é agora.',
    src: '/media/video_oportunidade_15x.mp4',
  },
  {
    kind: 'video',
    tag: '🎬 Extra',
    tagAccent: 'purple',
    title: 'AutoNoma: A Companheira IA',
    description:
      'Memória, personalidade e como a IA aprende quem a usuária é a cada interação.',
    src: '/media/companheira_ia.mp4',
  },
  {
    kind: 'audio',
    tag: '🎙️ Debate',
    tagAccent: 'gold',
    title: 'Database Podcast — AutoNoma',
    description:
      'Modelo de negócio, expansão LATAM e posicionamento competitivo em profundidade.',
    src: '/media/debate_database_podcast.mp4',
    emoji: '🎙️',
  },
];

export const fullWidthDebate: MediaItem = {
  kind: 'audio',
  tag: '🎙️ Debate · Análise',
  tagAccent: 'terra',
  title: 'O Lucro por Trás da Exaustão Feminina',
  description:
    'O mercado invisível da sobrecarga feminina — por que nenhuma empresa resolveu de verdade, e por que a AutoNoma é a oportunidade histórica desta janela. ~25 minutos.',
  src: '/media/debate_lucro_exaustao_feminina.mp3',
  emoji: '🎙️',
  wide: true,
};

export const finalAsk = {
  headline: 'A janela está aberta.',
  headline2: 'O mercado está pronto.',
  quote: '"Ela resolve tudo para todo mundo. Nós resolvemos para ela."',
  pills: [
    { label: 'Pre-Seed · R$1M', kind: 'neutral' as const },
    { label: '20% equity', kind: 'neutral' as const },
    { label: 'Valuation cap R$5M', kind: 'neutral' as const },
    { label: 'SAFe conversível', kind: 'neutral' as const },
    { label: 'Retorno projetado 12–15×', kind: 'highlight' as const },
  ],
  footer: 'AutoNoma · Documento Confidencial · Protegido por NDA · Brasil 2025',
};
