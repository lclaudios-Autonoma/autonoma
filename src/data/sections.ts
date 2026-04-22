export interface NavItem {
  id: string;
  number: string;
  title: string;
  group: 'Fundação' | 'Produto' | 'Negócio' | 'Conteúdos · NDA';
}

export const navItems: NavItem[] = [
  { id: 'proposta', number: '01', title: 'Proposta de Valor', group: 'Fundação' },
  { id: 'marca', number: '02', title: 'Marca & Produto', group: 'Fundação' },
  { id: 'persona', number: '03', title: 'A Persona', group: 'Fundação' },
  { id: 'receita', number: '04', title: 'Modelo de Receita', group: 'Produto' },
  { id: 'agentes', number: '05', title: 'Agentes AutoNoma', group: 'Produto' },
  { id: 'planos', number: '06', title: 'Planos', group: 'Produto' },
  { id: 'onboarding', number: '07', title: 'Onboarding & Viral', group: 'Produto' },
  { id: 'unit', number: '08', title: 'Unit Economics', group: 'Negócio' },
  { id: 'projecao', number: '09', title: 'Projeção', group: 'Negócio' },
  { id: 'cronograma', number: '10', title: 'Cronograma', group: 'Negócio' },
  { id: 'riscos', number: '11', title: 'Riscos', group: 'Negócio' },
  { id: 'latam', number: '12', title: 'LATAM', group: 'Negócio' },
  { id: 'conteudos', number: '13', title: '🎬 Vídeos & Debates', group: 'Conteúdos · NDA' },
];

export const navOrder = navItems.map((n) => n.id);
