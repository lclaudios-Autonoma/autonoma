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
  be:     'border-noma-300/40 bg-noma-500/10',
  seed:   'border-gold/30 bg-gold/5',
  seriea: 'border-noma-300/40 bg-noma-900/35',
  latam:  'border-noma-100/40 bg-noma-500/15 shadow-glow',
};

const scenarioAccent: Record<string, { eyebrow: string; metric: string; dot: string; card: string }> = {
  conservador: {
    eyebrow: 'text-noma-300/80',
    metric:  'text-paper',
    dot:     'bg-noma-300/60',
    card:    '',
  },
  base: {
    eyebrow: 'text-gold/90',
    metric:  'text-paper',
    dot:     'bg-gold/70',
    card:    'border-gold/20 bg-gold/5',
  },
  otimista: {
    eyebrow: 'text-noma-100',
    metric:  'text-noma-100',
    dot:     'bg-noma-300',
    card:    'border-noma-300/40 bg-noma-900/35',
  },
};

export default function ProjecaoFinanceira() {
  return (
    <SectionWrap id="projecao">
      <SectionHeader
        eyebrow="09 · Projeção Financeira"
        title={
          <>
            De <span className="text-noma-300 green-glow-text">R$0</span> a{' '}
            <span className="text-noma-300 green-glow-text">R$1,23M MRR</span> em 24 meses
          </>
        }
        lead="Cenário Conservador: MRR M24 R$1,23M · ARR R$14,8M · Valuation R$27,7M · Breakeven M6 · Retorno anjo 4,2×. Cenário Base: Valuation R$75M · 11,3×. Otimista: Valuation R$148,7M · 22,3×."
      />

      {/* ── Download do modelo financeiro atualizado ── */}
      <Reveal className="mb-8">
        <div className="flex items-center justify-between rounded-2xl border border-noma-300/20 bg-noma-900/30 px-6 py-4">
          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-noma-300/70">
              Modelo Financeiro · 3 Cenários · 24 meses · Atualizado
            </div>
            <div className="mt-0.5 text-[14px] text-paper">
              Dashboard completo com premissas, projeções e comparativo de cenários — somente leitura
            </div>
          </div>
          <a
            href="/DASHAUTONOMA_FINAL.xlsx"
            download="DASHAUTONOMA_FINAL.xlsx"
            className="flex items-center gap-2 rounded-xl border border-noma-300/35 bg-noma-500/15 px-5 py-2.5 text-[13px] font-medium text-noma-100 transition-all hover:bg-noma-500/25 hover:border-noma-300/60"
          >
            <Download size={15} />
            Baixar Excel
          </a>
        </div>
      </Reveal>

      {/* ── 3 Cenários ── */}
      <div className="grid gap-5 lg:grid-cols-3">
        {scenarios.map((s, i) => {
          const ac = scenarioAccent[s.tone];
          return (
            <Reveal key={s.label} delay={i * 0.1}>
              <GlassCard
                variant="feature"
                highlighted={s.tone === 'otimista'}
                glow={s.tone === 'otimista'}
                className={cn('h-full', ac.card)}
              >
                <div className={cn('eyebrow-line mb-4 text-[10px]', ac.eyebrow)}>
                  {s.label}
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  {s.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl border border-white/5 bg-black/20 p-3.5"
                    >
                      <div className={cn('font-display text-2xl leading-none', ac.metric)}>
                        {m.val}
                      </div>
                      <div className="mt-1.5 text-[10px] uppercase tracking-[0.14em] text-fog/50">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <ul className="mt-5 space-y-2 text-[12.5px] leading-relaxed text-fog/75">
                  {s.assumptions.map((a) => (
                    <li key={a} className="flex gap-2">
                      <span className={cn('mt-[6px] inline-block h-[4px] w-[4px] flex-shrink-0 rounded-full', ac.dot)} />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>

      {/* ── Gráfico MRR ── */}
      <Reveal className="mt-10">
        <GlassCard variant="feature" glow>
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="eyebrow-line text-[10px] text-noma-300">
                MRR · M3 → M24 · Conservador vs Otimista
              </div>
              <h3 className="mt-2 font-display text-2xl text-paper">
                Curva de crescimento exponencial com breakeven no M6
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

          <div className="-mx-1 overflow-x-auto px-1 pb-1">
            <div className="relative grid h-[320px] min-w-[480px] grid-cols-9 items-end gap-2 sm:gap-3">
              {mrrBars.map((bar, i) => {
                const baseH = (bar.base / maxBar) * 100;
                const optH  = (bar.optimistic / maxBar) * 100;
                return (
                  <div key={bar.label} className="flex h-full flex-col items-center justify-end gap-2">
                    <div className="relative flex h-full w-full items-end justify-center gap-1">
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${baseH}%` }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.9, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                        className="w-2 rounded-t-sm bg-gradient-to-b from-noma-300 to-noma-700 sm:w-3"
                      />
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${optH}%` }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.9, delay: 0.15 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                        className="w-2 rounded-t-sm bg-gradient-to-b from-noma-100 to-noma-300 shadow-[0_-2px_18px_rgba(196,116,138,0.35)] sm:w-3"
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

      {/* ── Marcos · Cenário Conservador ── */}
      <Reveal className="mt-12">
        <div className="eyebrow-line mb-4 text-[10px] text-noma-300">
          Marcos · cenário Conservador · fonte: DASHAUTONOMA_FINAL
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/8 bg-ink/60 backdrop-blur-xl">
          <div className="hidden grid-cols-[auto_1.6fr_0.7fr_0.7fr_0.9fr_1fr] gap-4 border-b border-white/5 px-6 py-3 text-[10.5px] uppercase tracking-[0.16em] text-fog/45 md:grid">
            <span>Mês</span>
            <span>Evento</span>
            <span>Free</span>
            <span>Pagantes</span>
            <span>MRR</span>
            <span>Resultado/mês</span>
          </div>
          {milestones.map((m, i) => (
            <motion.div
              key={m.month}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={cn(
                'grid gap-3 border-b border-white/5 px-6 py-4 text-[13.5px] md:grid-cols-[auto_1.6fr_0.7fr_0.7fr_0.9fr_1fr] md:gap-4',
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
                <span className="md:hidden text-[10px] uppercase tracking-[0.16em] text-fog/40">Free · </span>
                {m.free}
              </div>
              <div className="font-mono tabular-nums text-noma-300">
                <span className="md:hidden text-[10px] uppercase tracking-[0.16em] text-fog/40">Pag · </span>
                {m.paid}
              </div>
              <div className="font-mono tabular-nums text-paper">
                <span className="md:hidden text-[10px] uppercase tracking-[0.16em] text-fog/40">MRR · </span>
                {m.mrr}
              </div>
              <div
                className={cn(
                  'font-mono tabular-nums',
                  m.resultado.startsWith('+') ? 'text-noma-300' : 'text-terra/80',
                )}
              >
                {m.resultado}
              </div>
            </motion.div>
          ))}
        </div>
      </Reveal>

      {/* ── Sensibilidade ── */}
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
                      l.includes('conservador')
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

      {/* ── Comparativo de cenários ── */}
      <Reveal className="mt-10">
        <GlassCard variant="feature" glow>
          <div className="eyebrow-line mb-5 text-[10px] text-noma-300">
            Comparativo de cenários · fonte: DASHAUTONOMA_FINAL
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[540px] text-[13px]">
              <thead>
                <tr className="border-b border-white/6 text-[10px] uppercase tracking-[0.16em] text-fog/45">
                  <th className="pb-3 text-left font-normal">Cenário</th>
                  <th className="pb-3 text-right font-normal">Receita 24m</th>
                  <th className="pb-3 text-right font-normal">Valuation M24</th>
                  <th className="pb-3 text-right font-normal">LTV/CAC</th>
                  <th className="pb-3 text-right font-normal">Pagantes M24</th>
                  <th className="pb-3 text-right font-normal">Retorno anjo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { label: 'Conservador', receita: 'R$9,23M', val: 'R$27,7M', ltv: '5,3×', pag: '28.363', retorno: '4,2×', highlight: false },
                  { label: 'Base',        receita: 'R$15,0M', val: 'R$75,0M', ltv: '9,0×', pag: '37.090', retorno: '11,3×', highlight: false },
                  { label: 'Otimista',   receita: 'R$21,2M', val: 'R$148,7M', ltv: '10,4×', pag: '49.885', retorno: '22,3×', highlight: true },
                ].map((row) => (
                  <tr
                    key={row.label}
                    className={cn(
                      'transition-colors',
                      row.highlight
                        ? 'bg-noma-900/30 text-noma-100'
                        : 'text-fog/80 hover:bg-white/[0.02]',
                    )}
                  >
                    <td className="py-3 pr-4 font-display text-[14px] text-paper">{row.label}</td>
                    <td className="py-3 text-right font-mono tabular-nums">{row.receita}</td>
                    <td className={cn('py-3 text-right font-mono tabular-nums', row.highlight && 'text-noma-300')}>{row.val}</td>
                    <td className="py-3 text-right font-mono tabular-nums">{row.ltv}</td>
                    <td className="py-3 text-right font-mono tabular-nums">{row.pag}</td>
                    <td className={cn('py-3 text-right font-mono tabular-nums font-semibold', row.highlight && 'text-noma-100')}>{row.retorno}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[11.5px] text-fog/45">
            Aporte simulado R$1.000.000 · Equity 15% · Valuation pre-money implícito R$5,67M.
            Mesmo no downside com churn 15%/mês, LTV/CAC Essencial permanece ~4,8× — modelo não depende de retenção otimista.
          </p>
        </GlassCard>
      </Reveal>
    </SectionWrap>
  );
}
