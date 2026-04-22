import { ReactNode } from 'react';
import { cn } from '../../lib/cn';

type Tone = 'noma' | 'gold' | 'terra' | 'neutral' | 'solid-noma' | 'outline';

const tones: Record<Tone, string> = {
  noma: 'bg-noma-500/12 text-noma-300 border border-noma-500/25',
  gold: 'bg-gold/12 text-gold border border-gold/30',
  terra: 'bg-terra/15 text-terra border border-terra/30',
  neutral: 'bg-white/5 text-fog border border-white/10',
  'solid-noma': 'bg-noma-500 text-paper border border-noma-300/40 shadow-glow',
  outline: 'bg-transparent text-paper/80 border border-white/15',
};

interface Props {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  size?: 'sm' | 'md';
}

export default function Badge({ children, tone = 'noma', className, size = 'sm' }: Props) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full font-medium tracking-wide uppercase',
        size === 'sm' ? 'text-[10.5px] px-2.5 py-1' : 'text-xs px-3 py-1.5',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
