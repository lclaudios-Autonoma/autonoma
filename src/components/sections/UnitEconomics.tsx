import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import Reveal from '../ui/Reveal';
import Stat from '../ui/Stat';
import SectionHeader from '../ui/SectionHeader';
import SectionWrap from '../ui/SectionWrap';
import {
  breakdown,
  breakeven,
  funnelLevers,
  funnelSteps,
  kpis,
  ltvCalc,
  ltvSubMetrics,
} from '../../data/unit-economics';
import { cn } from '../../lib/cn';

const toneRow: Record<string, string> = {
  revenue: 'text-noma-300',
  cost: 'text-fog/80',
  margin: 'text-noma-300 green-glow-text',
  total: 'text-paper font-display text-lg',
};

const ltvTone: Record<string, string> = {
  noma: 'text-noma-300 green-glow-text',
  gold: 'text-gold',
  dark: 'text-paper',
  'noma-solid': 'text-noma-100',
};

const ltvSubTone: Record<string, string> = {
  noma: 'border-noma-300/25 bg-noma-500/8',
  gold: 'border-gold/25 bg-gold/8',
};

export default function UnitEconomics() {
  return (
    <SectionWrap id="unit" tone="darker">
      <SectionHeader
        eyebrow="08 · Unit Economics"
        title={
          <>
            LTV/CAC{' '}
            <span className="text-noma-300 green-glow-text">5,3×</span> (conservador) · payback em{' '}
            <span className="text-noma-300 green-glow-text">2,35 meses</span>
          </>
        }
        lead="Cenário Conservador: ticket R$39,90 · API Sonnet 4.6 R$5,83/mês · margem unitária R$34,07 · LTV R$425,89 · CAC R$80. Escala para LTV/CAC 9,0× (Base) e 10,4× (Otimista) conforme conversão e retenção evoluem."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {kpis.map((k, i) => (
          <Reveal key={k.label} delay={i * 0.07}>
            <GlassCard variant="metric" glow highlighted hover className="h-full">
              <Stat value={k.value} label={k.label} size="xl" tone="noma" />
              <div className="mt-5 h-[3px] w-full overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${k.barPct}%` }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                  className="h-full rounded-full bg-gradient-to-r from-noma-700 via-noma-300 to-noma-100"
                />
              </div>
              <p className="mt-4 text-[12px] leading-relaxed text-fog/60">{k.sub}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        <Reveal>
          <GlassCard variant="feature" glow className="h-full">
            <div className="eyebrow-line mb-5 text-[10px] text-noma-300">
              Breakdown · por assinante / mês · plano Essencial
            </div>
            <div className="overflow-hidden rounded-xl border border-white/5">
              {breakdown.map((row, i) => (
                <div
                  key={row.label}
                  className={cn(
                    'flex items-center justify-between gap-4 border-b border-white/5 px-4 py-3 last:border-none',
                    row.tone === 'total' && 'bg-noma-500/10',
                    row.tone === 'margin' && 'bg-noma-900/40',
                    i % 2 === 1 && row.tone !== 'margin' && row.tone !== 'total' && 'bg-white/[0.015]',
                  )}
                >
                  <div className="min-w-0">
                    <div className="text-[14px] text-paper">{row.label}</div>
                    {row.sub && <div className="text-[11px] text-fog/50">{row.sub}</div>}
                  </div>
                  <div className={cn('font-mono text-[15px] tabular-nums', toneRow[row.tone])}>
                    {row.value}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </Reveal>

        <Reveal delay={0.1}>
          <GlassCard variant="feature" className="h-full">
            <div className="eyebrow-line mb-5 text-[10px] text-noma-300">
              Funil de conversão · 1.000 → 80 pagantes
            </div>
            <div className="space-y-4">
              {funnelSteps.map((step, i) => (
                <div key={step.label}>
                  <div className="flex items-baseline justify-between text-[13px]">
                    <span className="text-paper">{step.label}</span>
                    <span className="text-fog/60">
                      <span className="font-mono tabular-nums text-noma-300">{step.count}</span>{' '}
                      · {step.pct}
                    </span>
                  </div>
                  <div className="mt-1.5 h-[5px] w-full overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${step.bar}%` }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 1, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full bg-gradient-to-r from-noma-700 via-noma-500 to-noma-300"
                    />
                  </div>
                </div>
              ))}
            </div>
            <ul className="mt-6 space-y-2 text-[12.5px] text-fog/65">
              {funnelLevers.map((l) => (
                <li key={l} className="flex gap-2">
                  <span className="mt-[6px] inline-block h-[4px] w-[4px] rounded-full bg-noma-300" />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </Reveal>
      </div>

      <Reveal className="mt-12">
        <GlassCard variant="feature" glow>
          <div className="mb-6 eyebrow-line text-[10px] text-noma-300">
            Cálculo de LTV · base conservador → otimista
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {ltvCalc.map((row) => (
              <div key={row.label} className="rounded-xl border border-white/5 bg-black/20 p-5">
                <div className={cn('font-display text-3xl leading-none', ltvTone[row.tone])}>
                  {row.val}
                </div>
                <div className="mt-3 text-[12px] leading-relaxed text-fog/65">{row.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-4">
            {ltvSubMetrics.map((m) => (
              <div
                key={m.label}
                className={cn(
                  'rounded-xl border px-4 py-3 text-sm',
                  ltvSubTone[m.tone] ?? 'border-white/8 bg-white/[0.02]',
                )}
              >
                <div className="eyebrow-line text-[9px] text-fog/55">{m.label}</div>
                <div className="mt-1 font-display text-xl text-paper">{m.value}</div>
                <div className="text-[11px] text-fog/55">{m.sub}</div>
              </div>
            ))}
          </div>
        </GlassCard>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {breakeven.map((b, i) => (
          <Reveal key={b.label} delay={i * 0.06}>
            <GlassCard hover className="h-full">
              <div className="eyebrow-line mb-3 text-[10px] text-noma-300/80">{b.label}</div>
              <div className="font-display text-3xl leading-tight text-paper">{b.value}</div>
              <p className="mt-3 text-[13px] leading-relaxed text-fog/65">{b.sub}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </SectionWrap>
  );
}
