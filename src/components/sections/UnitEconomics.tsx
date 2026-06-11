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
import { Lang, useLang } from '../../i18n/LanguageContext';
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

const T: Record<Lang, {
  eyebrow: string;
  titlePre: string;
  titleHi1: string;
  titleMid: string;
  titleHi2: string;
  lead: string;
  breakdownLabel: string;
  funnelLabel: string;
  ltvLabel: string;
}> = {
  pt: {
    eyebrow: '08 · Unit Economics',
    titlePre: 'LTV/CAC ',
    titleHi1: '5,3×',
    titleMid: ' (conservador) · payback em ',
    titleHi2: '2,35 meses',
    lead: 'Cenário Conservador: ticket R$39,90 · API Sonnet 4.6 R$5,83/mês · margem unitária R$34,07 · LTV R$425,89 · CAC R$80. Escala para LTV/CAC 9,0× (Base) e 10,4× (Otimista) conforme conversão e retenção evoluem.',
    breakdownLabel: 'Breakdown · por assinante / mês · plano Essencial',
    funnelLabel: 'Funil de conversão · 1.000 → 80 pagantes',
    ltvLabel: 'Cálculo de LTV · base conservador → otimista',
  },
  en: {
    eyebrow: '08 · Unit Economics',
    titlePre: 'LTV/CAC ',
    titleHi1: '5.3×',
    titleMid: ' (conservative) · payback in ',
    titleHi2: '2.35 months',
    lead: 'Conservative scenario: ticket R$39.90 · Sonnet 4.6 API R$5.83/mo · unit margin R$34.07 · LTV R$425.89 · CAC R$80. Scales to LTV/CAC 9.0× (Base) and 10.4× (Optimistic) as conversion and retention evolve.',
    breakdownLabel: 'Breakdown · per subscriber / month · Essencial plan',
    funnelLabel: 'Conversion funnel · 1,000 → 80 paying',
    ltvLabel: 'LTV calculation · conservative base → optimistic',
  },
};

export default function UnitEconomics() {
  const { lang } = useLang();
  const t = T[lang];
  return (
    <SectionWrap id="unit" tone="darker">
      <SectionHeader
        eyebrow={t.eyebrow}
        title={
          <>
            {t.titlePre}
            <span className="text-noma-300 green-glow-text">{t.titleHi1}</span>{t.titleMid}
            <span className="text-noma-300 green-glow-text">{t.titleHi2}</span>
          </>
        }
        lead={t.lead}
      />

      <div className="grid gap-5 md:grid-cols-3">
        {kpis[lang].map((k, i) => (
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
              {t.breakdownLabel}
            </div>
            <div className="overflow-hidden rounded-xl border border-white/5">
              {breakdown[lang].map((row, i) => (
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
              {t.funnelLabel}
            </div>
            <div className="space-y-4">
              {funnelSteps[lang].map((step, i) => (
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
              {funnelLevers[lang].map((l) => (
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
            {t.ltvLabel}
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {ltvCalc[lang].map((row) => (
              <div key={row.label} className="rounded-xl border border-white/5 bg-black/20 p-5">
                <div className={cn('font-display text-3xl leading-none', ltvTone[row.tone])}>
                  {row.val}
                </div>
                <div className="mt-3 text-[12px] leading-relaxed text-fog/65">{row.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-4">
            {ltvSubMetrics[lang].map((m) => (
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
        {breakeven[lang].map((b, i) => (
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
