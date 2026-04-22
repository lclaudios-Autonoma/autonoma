import { ReactNode } from 'react';
import Eyebrow from './Eyebrow';
import Reveal from './Reveal';
import { cn } from '../../lib/cn';

interface Props {
  number?: string;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeader({
  number,
  eyebrow,
  title,
  lead,
  align = 'left',
  className,
}: Props) {
  return (
    <Reveal className={cn('mb-10 md:mb-14', align === 'center' && 'text-center', className)}>
      <Eyebrow className={cn(align === 'center' && 'justify-center')}>
        {number ? `${number} · ${eyebrow}` : eyebrow}
      </Eyebrow>
      <h2 className="section-headline mt-5 text-balance text-paper">
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            'italic-lead mt-5 text-pretty text-fog/70',
            'max-w-[62ch] text-lg md:text-xl leading-relaxed',
            align === 'center' && 'mx-auto',
          )}
        >
          {lead}
        </p>
      )}
    </Reveal>
  );
}
