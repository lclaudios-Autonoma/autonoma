import { ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface Props {
  children: ReactNode;
  primary?: boolean;
  className?: string;
}

export default function Chip({ children, primary = false, className }: Props) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-4 py-2 text-[13px] font-medium tracking-tight backdrop-blur-xl transition-colors',
        primary
          ? 'bg-noma-500/20 text-noma-100 border border-noma-300/30 shadow-[0_0_25px_rgba(78,216,154,0.15)]'
          : 'bg-white/5 text-fog border border-white/10 hover:border-noma-300/25 hover:text-paper',
        className,
      )}
    >
      {children}
    </span>
  );
}
