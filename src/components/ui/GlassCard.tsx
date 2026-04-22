import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';

export interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'feature' | 'metric' | 'risk' | 'plan' | 'dark' | 'noma';
  glow?: boolean;
  hover?: boolean;
  highlighted?: boolean;
  children?: ReactNode;
}

const variants: Record<NonNullable<GlassCardProps['variant']>, string> = {
  default: 'bg-glass backdrop-blur-xl border border-glass-border',
  feature:
    'bg-[rgba(18,21,26,0.72)] backdrop-blur-2xl border border-glass-borderStrong',
  metric: 'bg-[rgba(255,255,255,0.03)] border border-glass-border backdrop-blur-xl',
  risk: 'bg-[rgba(18,21,26,0.6)] border border-glass-border backdrop-blur-xl',
  plan: 'bg-glass backdrop-blur-xl border border-glass-border',
  dark: 'bg-ink/80 border border-glass-border backdrop-blur-xl',
  noma: 'bg-noma-900/55 border border-noma-500/30 backdrop-blur-xl',
};

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(function GlassCard(
  { variant = 'default', glow = false, hover = true, highlighted = false, className, children, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn(
        'relative rounded-2xl p-6 md:p-8 shadow-glass isolate',
        variants[variant],
        hover && 'card-hover',
        highlighted && 'shadow-glow ring-1 ring-noma-300/30',
        className,
      )}
      {...rest}
    >
      {glow && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-60"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(78,216,154,0.14), transparent 70%)',
          }}
        />
      )}
      <div className="relative">{children}</div>
    </div>
  );
});

export default GlassCard;
export { GlassCard };
