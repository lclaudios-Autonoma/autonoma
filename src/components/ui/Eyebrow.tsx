import { ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface Props {
  children: ReactNode;
  className?: string;
  tone?: 'noma' | 'fog' | 'gold' | 'terra';
  withDot?: boolean;
}

const tones = {
  noma: 'text-noma-300',
  fog: 'text-fog/70',
  gold: 'text-gold',
  terra: 'text-terra',
};

export default function Eyebrow({ children, className, tone = 'noma', withDot = true }: Props) {
  return (
    <div className={cn('eyebrow-line flex items-center gap-2', tones[tone], className)}>
      {withDot && (
        <span
          aria-hidden
          className="inline-block h-1.5 w-1.5 rounded-full bg-current opacity-80 animate-pulse-green"
        />
      )}
      <span>{children}</span>
    </div>
  );
}
