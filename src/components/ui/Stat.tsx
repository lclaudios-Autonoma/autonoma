import { ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface Props {
  value: ReactNode;
  label: ReactNode;
  sub?: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  tone?: 'noma' | 'gold' | 'paper' | 'fog';
  className?: string;
}

const sizes = {
  sm: 'text-3xl md:text-4xl',
  md: 'text-4xl md:text-5xl',
  lg: 'text-5xl md:text-6xl',
  xl: 'text-6xl md:text-8xl',
};

const tones = {
  noma: 'text-noma-300 green-glow-text',
  gold: 'text-gold',
  paper: 'text-paper',
  fog: 'text-fog',
};

export default function Stat({
  value,
  label,
  sub,
  size = 'lg',
  tone = 'noma',
  className,
}: Props) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <div
        className={cn(
          'font-display font-normal leading-[0.95] tracking-tightest',
          sizes[size],
          tones[tone],
        )}
      >
        {value}
      </div>
      <div className="eyebrow-line text-fog/60">{label}</div>
      {sub && <div className="text-sm text-fog/60 leading-relaxed max-w-sm">{sub}</div>}
    </div>
  );
}
