import { Lang } from './LanguageContext';

interface UIDict {
  nav: {
    ariaMain: string;
    ariaOpen: string;
    ariaClose: string;
    footerBadge: string;
  };
  shell: {
    footer: string;
  };
  langGate: {
    eyebrow: string;
    titlePre: string;
    titleHi: string;
    body: string;
    pt: string;
    en: string;
    note: string;
  };
  conteudos: {
    lightboxClose: string;
    downloadsLabel: string;
    viewBadge: string;
    ptBadge: string;
    founderLabel: string;
    founderSub: string;
    modelLabel: string;
    modelSub: string;
    bpLabel: string;
    bpSub: string;
  };
}

export const ui: Record<Lang, UIDict> = {
  pt: {
    nav: {
      ariaMain: 'Navegação principal',
      ariaOpen: 'Abrir menu',
      ariaClose: 'Fechar menu',
      footerBadge: 'Deck confidencial · NDA',
    },
    shell: {
      footer: 'AutoNoma · Deck confidencial sob NDA · 2026',
    },
    langGate: {
      eyebrow: 'AutoNoma · 2026',
      titlePre: 'Selecione o ',
      titleHi: 'idioma',
      body: 'Escolha o idioma de apresentação do deck. · Choose the language for the deck.',
      pt: 'Português (Brasil)',
      en: 'English',
      note: 'Você poderá prosseguir para o acordo de confidencialidade em seguida. · You will proceed to the confidentiality agreement next.',
    },
    conteudos: {
      lightboxClose: 'ESC para fechar',
      downloadsLabel: 'Documentos para download',
      viewBadge: 'confira',
      ptBadge: 'PT',
      founderLabel: 'Nosso Porquê',
      founderSub: 'Documento fundador',
      modelLabel: 'Nosso Modelo',
      modelSub: 'Descritivo do modelo de negócio',
      bpLabel: 'Nosso BP',
      bpSub: 'Business plan · planilha Excel',
    },
  },
  en: {
    nav: {
      ariaMain: 'Main navigation',
      ariaOpen: 'Open menu',
      ariaClose: 'Close menu',
      footerBadge: 'Confidential deck · NDA',
    },
    shell: {
      footer: 'AutoNoma · Confidential deck under NDA · 2026',
    },
    langGate: {
      eyebrow: 'AutoNoma · 2026',
      titlePre: 'Choose your ',
      titleHi: 'language',
      body: 'Choose the language for the deck. · Escolha o idioma de apresentação do deck.',
      pt: 'Português (Brasil)',
      en: 'English',
      note: 'You will proceed to the confidentiality agreement next. · Você poderá prosseguir para o acordo de confidencialidade em seguida.',
    },
    conteudos: {
      lightboxClose: 'ESC to close',
      downloadsLabel: 'Documents for download',
      viewBadge: 'view',
      ptBadge: 'PT',
      founderLabel: 'Our Why',
      founderSub: 'Founding document',
      modelLabel: 'Our Model',
      modelSub: 'Business model overview',
      bpLabel: 'Our BP',
      bpSub: 'Business plan · Excel spreadsheet',
    },
  },
};
