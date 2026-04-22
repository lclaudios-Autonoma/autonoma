export interface DemoRow {
  label: string;
  value: string;
  highlight?: boolean;
}

export const demographics: DemoRow[] = [
  { label: 'Faixa etária', value: '25–50 anos' },
  { label: 'Situação', value: 'Trabalha · ativa' },
  { label: 'Renda mensal', value: 'R$3K–15K' },
  { label: 'Localização', value: 'Capitais e interior' },
  { label: 'TAM Brasil', value: '42,8M · IBGE 2024', highlight: true },
];

export interface Pain {
  index: string;
  title: string;
  text: string;
}

export const pains: Pain[] = [
  {
    index: '01',
    title: 'Tempo & Decisão',
    text: 'não tem tempo de pesquisar, decide errada ou não decide',
  },
  {
    index: '02',
    title: 'Sobrecarga mental',
    text: 'lista interminável que não para nem quando dorme',
  },
  {
    index: '03',
    title: 'Dinheiro & culpa',
    text: 'medo de comprar errado, culpa de gastar em si',
  },
  {
    index: '04',
    title: 'Invisibilidade',
    text: 'nenhum produto foi feito pensando nela de verdade',
  },
  {
    index: '05',
    title: 'Confiança',
    text: 'já foi enganada, desconfia de tudo, pesquisa até travar',
  },
  {
    index: '06',
    title: 'Solidão de resolver',
    text: 'quer alguém que diga "pode deixar comigo"',
  },
];
