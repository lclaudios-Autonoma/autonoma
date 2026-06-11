import { Lang } from '../i18n/LanguageContext';

export type NavGroup = 'fundacao' | 'produto' | 'negocio' | 'extras';

export interface NavItem {
  id: string;
  number: string;
  title: string;
  group: NavGroup;
}

export const groupOrder: NavGroup[] = ['fundacao', 'produto', 'negocio', 'extras'];

export const groupLabels: Record<Lang, Record<NavGroup, string>> = {
  pt: {
    fundacao: 'Fundação',
    produto: 'Produto',
    negocio: 'Negócio',
    extras: 'Conteúdos · NDA',
  },
  en: {
    fundacao: 'Foundation',
    produto: 'Product',
    negocio: 'Business',
    extras: 'Contents · NDA',
  },
};

export const navItems: Record<Lang, NavItem[]> = {
  pt: [
    { id: 'proposta', number: '01', title: 'Proposta de Valor', group: 'fundacao' },
    { id: 'marca', number: '02', title: 'Marca & Produto', group: 'fundacao' },
    { id: 'persona', number: '03', title: 'A Persona', group: 'fundacao' },
    { id: 'receita', number: '04', title: 'Modelo de Receita', group: 'produto' },
    { id: 'agentes', number: '05', title: 'Agentes AutoNoma', group: 'produto' },
    { id: 'planos', number: '06', title: 'Planos', group: 'produto' },
    { id: 'onboarding', number: '07', title: 'Onboarding & Viral', group: 'produto' },
    { id: 'unit', number: '08', title: 'Unit Economics', group: 'negocio' },
    { id: 'projecao', number: '09', title: 'Projeção', group: 'negocio' },
    { id: 'cronograma', number: '10', title: 'Cronograma', group: 'negocio' },
    { id: 'riscos', number: '11', title: 'Riscos', group: 'negocio' },
    { id: 'latam', number: '12', title: 'LATAM', group: 'negocio' },
    { id: 'conteudos', number: '13', title: '📚 Conteúdos Extras', group: 'extras' },
  ],
  en: [
    { id: 'proposta', number: '01', title: 'Value Proposition', group: 'fundacao' },
    { id: 'marca', number: '02', title: 'Brand & Product', group: 'fundacao' },
    { id: 'persona', number: '03', title: 'The Persona', group: 'fundacao' },
    { id: 'receita', number: '04', title: 'Revenue Model', group: 'produto' },
    { id: 'agentes', number: '05', title: 'AutoNoma Agents', group: 'produto' },
    { id: 'planos', number: '06', title: 'Plans', group: 'produto' },
    { id: 'onboarding', number: '07', title: 'Onboarding & Viral', group: 'produto' },
    { id: 'unit', number: '08', title: 'Unit Economics', group: 'negocio' },
    { id: 'projecao', number: '09', title: 'Projections', group: 'negocio' },
    { id: 'cronograma', number: '10', title: 'Timeline', group: 'negocio' },
    { id: 'riscos', number: '11', title: 'Risks', group: 'negocio' },
    { id: 'latam', number: '12', title: 'LATAM', group: 'negocio' },
    { id: 'conteudos', number: '13', title: '📚 Extra Contents', group: 'extras' },
  ],
};

// Ids idênticos nos dois idiomas — âncoras e useActiveSection independem do idioma.
export const navOrder = navItems.pt.map((n) => n.id);
