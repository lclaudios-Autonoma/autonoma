import { ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface Props {
  children: ReactNode;
  blurred?: boolean;
  className?: string;
}

export default function Shell({ children, blurred, className }: Props) {
  return (
    <div
      id="top"
      className={cn(
        'relative min-h-screen text-paper',
        'pt-[58px] lg:pt-0 lg:pl-60',
        className,
      )}
    >
      <main
        className={cn(
          'relative transition-[filter,opacity] duration-500',
          blurred && 'pointer-events-none select-none blur-md opacity-40',
        )}
      >
        {children}
      </main>
      <footer className="border-t border-white/5 py-10 text-center text-[11px] uppercase tracking-[0.25em] text-fog/40">
        AutoNoma · Deck confidencial sob NDA · 2026
      </footer>
    </div>
  );
}
