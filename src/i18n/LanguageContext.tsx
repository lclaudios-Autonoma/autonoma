import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';

export type Lang = 'pt' | 'en';

const KEY = 'deck_lang';

interface LanguageContextValue {
  /** Idioma ativo — 'pt' por padrão até o usuário escolher. */
  lang: Lang;
  /** true após o usuário escolher (ou se já havia escolha na sessão). */
  chosen: boolean;
  setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const META: Record<Lang, { title: string; description: string }> = {
  pt: {
    title: 'AutoNoma · Modelo de Negócio · Documento Confidencial',
    description: 'AutoNoma · Pitch de captação · Documento confidencial protegido por NDA.',
  },
  en: {
    title: 'AutoNoma · Business Model · Confidential Document',
    description: 'AutoNoma · Fundraising pitch · Confidential document protected by NDA.',
  },
};

function readStored(): Lang | null {
  if (typeof window === 'undefined') return null;
  try {
    const v = sessionStorage.getItem(KEY);
    return v === 'pt' || v === 'en' ? v : null;
  } catch {
    return null;
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const stored = readStored();
  const [lang, setLangState] = useState<Lang>(stored ?? 'pt');
  const [chosen, setChosen] = useState<boolean>(stored !== null);

  const setLang = useCallback((l: Lang) => {
    try {
      sessionStorage.setItem(KEY, l);
    } catch {
      /* ignore — fallback em memória */
    }
    setLangState(l);
    setChosen(true);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.title = META[lang].title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', META[lang].description);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, chosen, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang deve ser usado dentro de <LanguageProvider>');
  return ctx;
}
