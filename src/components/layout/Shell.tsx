import { ReactNode } from 'react';
import { useLang } from '../../i18n/LanguageContext';
import { ui } from '../../i18n/ui';
import { cn } from '../../lib/cn';

interface Props {
  children: ReactNode;
  blurred?: boolean;
  className?: string;
}

export default function Shell({ children, blurred, className }: Props) {
  const { lang } = useLang();
  return (
    <div
      id="top"
      className={cn(
        'relative min-h-screen overflow-x-hidden text-paper',
        'pt-[58px] lg:pt-0 lg:pl-60',
        className,
      )}
    >
      <main
        className={cn(
          // Transição só de opacidade — evita artefatos do blur durante o exit do gate
          'relative transition-opacity duration-700 ease-out',
          blurred && 'pointer-events-none select-none opacity-0',
        )}
      >
        {children}
      </main>
      <footer className="border-t border-white/5 py-10 text-center text-[11px] uppercase tracking-[0.25em] text-fog/40">
        {ui[lang].shell.footer}
      </footer>
    </div>
  );
}
