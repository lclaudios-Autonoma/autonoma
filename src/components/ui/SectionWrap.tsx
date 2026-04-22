import { ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface Props {
  id: string;
  children: ReactNode;
  className?: string;
  tone?: 'default' | 'darker' | 'deep';
}

const tones = {
  default: '',
  darker: 'bg-ink/60',
  deep: 'bg-black/40',
};

export default function SectionWrap({ id, children, className, tone = 'default' }: Props) {
  return (
    <section
      id={id}
      className={cn(
        'relative px-6 sm:px-10 md:px-16 py-24 md:py-32 scroll-mt-24',
        tones[tone],
        className,
      )}
    >
      <div className="relative mx-auto max-w-content">{children}</div>
    </section>
  );
}
