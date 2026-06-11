import { Lang } from '../i18n/LanguageContext';

export interface DemoRow {
  label: string;
  value: string;
  highlight?: boolean;
}

export const demographics: Record<Lang, DemoRow[]> = {
  pt: [
    { label: 'Faixa etária', value: '25–50 anos' },
    { label: 'Situação', value: 'Trabalha · ativa' },
    { label: 'Renda mensal', value: 'R$3K–15K' },
    { label: 'Localização', value: 'Capitais e interior' },
    { label: 'TAM Brasil', value: '42,8M · IBGE 2024', highlight: true },
  ],
  en: [
    { label: 'Age range', value: '25–50 years' },
    { label: 'Status', value: 'Working · active' },
    { label: 'Monthly income', value: 'R$3K–15K' },
    { label: 'Location', value: 'Capitals and countryside' },
    { label: 'TAM Brazil', value: '42.8M · IBGE 2024', highlight: true },
  ],
};

export interface Pain {
  index: string;
  title: string;
  text: string;
}

export const pains: Record<Lang, Pain[]> = {
  pt: [
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
  ],
  en: [
    {
      index: '01',
      title: 'Time & Decision',
      text: 'no time to research — decides wrong or doesn’t decide at all',
    },
    {
      index: '02',
      title: 'Mental overload',
      text: 'an endless list that doesn’t stop even when she sleeps',
    },
    {
      index: '03',
      title: 'Money & guilt',
      text: 'fear of buying wrong, guilt for spending on herself',
    },
    {
      index: '04',
      title: 'Invisibility',
      text: 'no product was ever truly designed with her in mind',
    },
    {
      index: '05',
      title: 'Trust',
      text: 'she’s been deceived before, distrusts everything, researches until she freezes',
    },
    {
      index: '06',
      title: 'The loneliness of solving',
      text: 'she wants someone who says "leave it to me"',
    },
  ],
};
