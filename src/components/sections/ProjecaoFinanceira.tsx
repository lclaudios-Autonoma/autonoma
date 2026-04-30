import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';
import SectionWrap from '../ui/SectionWrap';
import { mrrBars, milestones, scenarios, sensitivity } from '../../data/projections';
import { cn } from '../../lib/cn';

const maxBar = Math.max(...mrrBars.flatMap((b) => [b.base, b.optimistic])) || 1;

const milestoneTone: Record<string, string> = {
  be: 'border-noma-300/40 bg-noma-500/10',
  seed: 'border-gold/30 bg-gold/6',
  seriea: 'border-noma-300/40 bg-noma-900/35',
  latam: 'border-noma-100/40 bg-noma-500/15 shadow-glow',
};

export default function ProjecaoFinanceira() {
  return (
    <SectionWrap id="projecao">
      <SectionHeader
        eyebrow="09 · Projeção Financeira"
        title={
          <>
            De <span className="text-noma-300 green-glow-text">R$0</span> a{' '}
            <span className="text-noma-300 green-glow-text">R$26,2M ARR</span> em 24 meses
          </>
        }
        lead="Cenário base (8% conversão · 5% churn · CAC R$60) · ARR M24 R$26,2M · Valuation R$86,4M · Breakeven mês 6. Cenário otimista atinge R$31,2M ARR."
      />

      {/* ── Download do modelo financeiro ── */}
      <Reveal className="mb-8">
        <div className="flex items-center justify-between rounded-2xl border border-noma-300/20 bg-noma-900/30 px-6 py-4">
          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-noma-300/70">
              Modelo Financeiro · Cenário Base · 24 meses
            </div>
            <div className="mt-0.5 text-[14px] text-paper">
              Dashboard completo com premissas, projeções e 3 cenários — somente leitura
            </div>
          </div>
          <a
            href="/AUTONOMA_Dashboard_Investidor.xlsx"
            download="AUTONOMA_Dashboard_Investidor.xlsx"
            className="flex items-center gap-2 rounded-xl border border-noma-300/35 bg-noma-500/15 px-5 py-2.5 text-[13px] font-medium text-noma-100 transition-all hover:bg-noma-500/25 hover:border-noma-300/60"
          >
            <Download size={15} />
            Baixar Excel
          </a>
        </div>
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-2">
        {scenarios.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1}>
            <GlassCard
              variant="feature"
              highlighted={s.tone === 'otimista'}
              glow={s.tone === 'otimista'}
              className={cn(
                'h-full',
                s.tone === 'otimista' && 'border-noma-300/40 bg-noma-900/35',
              )}
            >
              <div
                className={cn(
                  'eyebrow-line mb-4 text-[10px]',
                  s.tone === 'otimista' ? 'text-noma-100' : 'text-noma-300/80',
                )}
              >
                {s.label}
              </div>

              <div className="grid grid-cols-2 gap-3">
                {s.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-white/5 bg-black/20 p-4"
                  >
                    <div
                      className={cn(
                        'font-display text-3xl leading-none',
                        s.tone === 'otimista' ? 'text-noma-100' : 'text-paper',
                      )}
                    >
                      {m.val}
                    </div>
                    <div className="mt-2 text-[11px] uppercase tracking-[0.14em] text-fog/55">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              <ul className="mt-6 space-y-2 text-[13px] leading-relaxed text-fog/75">
                {s.assumptions.map((a) => (
                  <li key={a} className="flex gap-2">
                    <span className="mt-[6px] inline-block h-[4px] w-[4px] rounded-full bg-noma-300" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <GlassCard variant="feature" glow>
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="eyebrow-line text-[10px] text-noma-300">
                MRR · M3 → M24 · conservador vs otimista
              </div>
              <h3 className="mt-2 font-display text-2xl text-paper">
                Curva de crescimento exponencial com breakeven precoce
              </h3>
            </div>
            <div className="flex gap-4 text-[12px] text-fog/70">
              <span className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-sm bg-gradient-to-b from-noma-500 to-noma-700" />
                Conservador
              </span>
              <span className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-sm bg-gradient-to-b from-noma-100 to-noma-300" />
                Otimista
              </span>
            </div>
          </div>

          {/* Scroll lateral em telas estreitas para preservar as 9 colunas */}
          <div className="-mx-1 overflow-x-auto px-1 pb-1">
            <div className="relative grid h-[320px] min-w-[480px] grid-cols-9 items-end gap-2 sm:gap-3">
              {mrrBars.map((bar, i) => {
                const baseH = (bar.base / maxBar) * 100;
                const optH = (bar.optimistic / maxBar) * 100;
                return (
                  <div key={bar.label} className="flex h-full flex-col items-center justify-end gap-2">
                    <div className="relative flex h-full w-full items-end justify-center gap-1">
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${baseH}%` }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                          duration: 0.9,
                          delay: 0.1 + i * 0.07,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="w-2 rounded-t-sm bg-gradient-to-b from-noma-300 to-noma-700 sm:w-3"
                      />
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${optH}%` }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                          duration: 0.9,
                          delay: 0.15 + i * 0.07,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="w-2 rounded-t-sm bg-gradient-to-b from-noma-100 to-noma-300 shadow-[0_-2px_18px_rgba(78,216,154,0.35)] sm:w-3"
                      />
                      {bar.marker && (
                        <div className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 rounded-full border border-gold/30 bg-gold/10 px-2 py-0.5 text-[9.5px] uppercase tracking-[0.14em] text-gold">
                          {bar.marker}
                        </div>
                      )}
                    </div>
                    <div className="font-mono text-[10px] text-fog/50">{bar.label}</div>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 grid min-w-[480px] grid-cols-9 gap-1 text-[9.5px] tabular-nums text-fog/45">
              {mrrBars.map((bar) => (
                <div key={bar.label} className="truncate text-center">
                  {bar.baseLabel}
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </Reveal>

      <Reveal className="mt-12">
        <div className="eyebrow-line mb-4 text-[10px] text-noma-300">Marcos · cenário base</div>
        <div className="overflow-hidden rounded-2xl border border-white/8 bg-ink/60 backdrop-blur-xl">
          <div className="hidden grid-cols-[auto_1.5fr_0.7fr_0.7fr_0.9fr_0.9fr] gap-4 border-b border-white/5 px-6 py-3 text-[10.5px] uppercase tracking-[0.16em] text-fog/45 md:grid">
            <span>Mês</span>
            <span>Evento</span>
            <span>Free</span>
            <span>Pagantes</span>
            <span>MRR</span>
            <span>ARR</span>
          </div>
          {milestones.map((m, i) => (
            <motion.div
              key={m.month}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className={cn(
                'grid gap-3 border-b border-white/5 px-6 py-4 text-[13.5px] md:grid-cols-[auto_1.5fr_0.7fr_0.7fr_0.9fr_0.9fr] md:gap-4',
                m.tone && milestoneTone[m.tone],
                !m.tone && 'hover:bg-white/[0.02]',
              )}
            >
              <div className="font-display text-lg text-paper">{m.month}</div>
              <div>
                <div className="font-display text-[15px] text-paper">{m.event}</div>
                <div className="text-[11.5px] text-fog/55">{m.sub}</div>
              </div>
              <div className="font-mono tabular-nums text-fog/75">
                <span className="md:hidden text-[10px] uppercase tracking-[0.16em] text-fog/40">
                  Free ·{' '}
                </span>
                {m.free}
              </div>
              <div className="font-mono tabular-nums text-noma-300">
                <span className="md:hidden text-[10px] uppercase tracking-[0.16em] text-fog/40">
                  Pag ·{' '}
                </span>
                {m.paid}
              </div>
              <div className="font-mono tabular-nums text-paper">
                <span className="md:hidden text-[10px] uppercase tracking-[0.16em] text-fog/40">
                  MRR ·{' '}
                </span>
                {m.mrr}
              </div>
              <div className="font-mono tabular-nums text-fog/75">{m.arr}</div>
            </motion.div>
          ))}
        </div>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {sensitivity.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1}>
            <GlassCard variant="feature" className="h-full">
              <div
                className={cn(
                  'eyebrow-line mb-4 text-[10px]',
                  s.tone === 'noma' ? 'text-noma-300' : 'text-gold',
                )}
              >
                {s.label}
              </div>
              <ul className="space-y-2 font-mono text-[13px] text-fog/80">
                {s.lines.map((l, j) => (
                  <li
                    key={j}
                    className={cn(
                      'rounded border-l-2 px-3 py-1.5',
                      l.includes('base')
                        ? 'border-noma-300 bg-noma-500/8 text-paper'
                        : 'border-white/10 bg-white/[0.02]',
                    )}
                  >
                    {l}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </SectionWrap>
  );
}
