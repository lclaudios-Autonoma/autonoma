import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';
import SectionWrap from '../ui/SectionWrap';
import { mrrBars, milestones, scenarios, sensitivity } from '../../data/projections';
import { Lang, useLang } from '../../i18n/LanguageContext';
import { cn } from '../../lib/cn';

// Valores numéricos idênticos nos dois idiomas — máximo calculado sobre PT.
const maxBar = Math.max(...mrrBars.pt.flatMap((b) => [b.base, b.optimistic])) || 1;

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

const T: Record<Lang, {
  eyebrow: string;
  titlePre: string;
  titleHi1: string;
  titleMid: string;
  titleHi2: string;
  titlePost: string;
  lead: string;
  dlKicker: string;
  dlText: string;
  dlBtn: string;
  mrrLabel: string;
  mrrTitle: string;
  legendConservative: string;
  legendOptimistic: string;
  milestonesLabel: string;
  thMonth: string;
  thEvent: string;
  thFree: string;
  thPaid: string;
  thMrr: string;
  thResult: string;
  mobFree: string;
  mobPaid: string;
  mobMrr: string;
  comparisonLabel: string;
  thScenario: string;
  thRevenue: string;
  thValuation: string;
  thLtvCac: string;
  thPaidM24: string;
  thAngelReturn: string;
  rowConservative: string;
  rowBase: string;
  rowOptimistic: string;
  comparisonFootnote: string;
  sensitivityHighlight: string;
}> = {
  pt: {
    eyebrow: '09 · Projeção Financeira',
    titlePre: 'De ',
    titleHi1: 'R$0',
    titleMid: ' a ',
    titleHi2: 'R$1,23M MRR',
    titlePost: ' em 24 meses',
    lead: 'Cenário Conservador: MRR M24 R$1,23M · ARR R$14,8M · Valuation R$27,7M · Breakeven M6 · Retorno anjo 4,2×. Cenário Base: Valuation R$75M · 11,3×. Otimista: Valuation R$148,7M · 22,3×.',
    dlKicker: 'Modelo Financeiro · 3 Cenários · 24 meses · Atualizado',
    dlText: 'Dashboard completo com premissas, projeções e comparativo de cenários — somente leitura',
    dlBtn: 'Baixar Excel',
    mrrLabel: 'MRR · M3 → M24 · Conservador vs Otimista',
    mrrTitle: 'Curva de crescimento exponencial com breakeven no M6',
    legendConservative: 'Conservador',
    legendOptimistic: 'Otimista',
    milestonesLabel: 'Marcos · cenário Conservador · fonte: DASHAUTONOMA_FINAL',
    thMonth: 'Mês',
    thEvent: 'Evento',
    thFree: 'Free',
    thPaid: 'Pagantes',
    thMrr: 'MRR',
    thResult: 'Resultado/mês',
    mobFree: 'Free · ',
    mobPaid: 'Pag · ',
    mobMrr: 'MRR · ',
    comparisonLabel: 'Comparativo de cenários · fonte: DASHAUTONOMA_FINAL',
    thScenario: 'Cenário',
    thRevenue: 'Receita 24m',
    thValuation: 'Valuation M24',
    thLtvCac: 'LTV/CAC',
    thPaidM24: 'Pagantes M24',
    thAngelReturn: 'Retorno anjo',
    rowConservative: 'Conservador',
    rowBase: 'Base',
    rowOptimistic: 'Otimista',
    comparisonFootnote:
      'Aporte simulado R$1.000.000 · Equity 15% · Valuation pre-money implícito R$5,67M. Mesmo no downside com churn 15%/mês, LTV/CAC Essencial permanece ~4,8× — modelo não depende de retenção otimista.',
    sensitivityHighlight: 'conservador',
  },
  en: {
    eyebrow: '09 · Financial Projections',
    titlePre: 'From ',
    titleHi1: 'R$0',
    titleMid: ' to ',
    titleHi2: 'R$1.23M MRR',
    titlePost: ' in 24 months',
    lead: 'Conservative scenario: MRR M24 R$1.23M · ARR R$14.8M · Valuation R$27.7M · Breakeven M6 · Angel return 4.2×. Base scenario: Valuation R$75M · 11.3×. Optimistic: Valuation R$148.7M · 22.3×.',
    dlKicker: 'Financial Model · 3 Scenarios · 24 months · Updated',
    dlText: 'Complete dashboard with assumptions, projections and scenario comparison — read-only',
    dlBtn: 'Download Excel',
    mrrLabel: 'MRR · M3 → M24 · Conservative vs Optimistic',
    mrrTitle: 'Exponential growth curve with breakeven at M6',
    legendConservative: 'Conservative',
    legendOptimistic: 'Optimistic',
    milestonesLabel: 'Milestones · Conservative scenario · source: DASHAUTONOMA_FINAL',
    thMonth: 'Month',
    thEvent: 'Event',
    thFree: 'Free',
    thPaid: 'Paying',
    thMrr: 'MRR',
    thResult: 'Result/mo',
    mobFree: 'Free · ',
    mobPaid: 'Paid · ',
    mobMrr: 'MRR · ',
    comparisonLabel: 'Scenario comparison · source: DASHAUTONOMA_FINAL',
    thScenario: 'Scenario',
    thRevenue: 'Revenue 24m',
    thValuation: 'Valuation M24',
    thLtvCac: 'LTV/CAC',
    thPaidM24: 'Paying M24',
    thAngelReturn: 'Angel return',
    rowConservative: 'Conservative',
    rowBase: 'Base',
    rowOptimistic: 'Optimistic',
    comparisonFootnote:
      'Simulated investment R$1,000,000 · Equity 15% · Implied pre-money valuation R$5.67M. Even in the downside with 15%/mo churn, Essencial LTV/CAC remains ~4.8× — the model does not depend on optimistic retention.',
    sensitivityHighlight: 'conservative',
  },
};

export default function ProjecaoFinanceira() {
  const { lang } = useLang();
  const t = T[lang];
  return (
    <SectionWrap id="projecao">
      <SectionHeader
        eyebrow={t.eyebrow}
        title={
          <>
            {t.titlePre}<span className="text-noma-300 green-glow-text">{t.titleHi1}</span>{t.titleMid}
            <span className="text-noma-300 green-glow-text">{t.titleHi2}</span>{t.titlePost}
          </>
        }
        lead={t.lead}
      />

      {/* ── Download do modelo financeiro atualizado ── */}
      <Reveal className="mb-8">
        <div className="flex items-center justify-between rounded-2xl border border-noma-300/20 bg-noma-900/30 px-6 py-4">
          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-noma-300/70">
              {t.dlKicker}
            </div>
            <div className="mt-0.5 text-[14px] text-paper">
              {t.dlText}
            </div>
          </div>
          <a
            href="/DASHAUTONOMA_FINAL.xlsx"
            download="DASHAUTONOMA_FINAL.xlsx"
            className="flex items-center gap-2 rounded-xl border border-noma-300/35 bg-noma-500/15 px-5 py-2.5 text-[13px] font-medium text-noma-100 transition-all hover:bg-noma-500/25 hover:border-noma-300/60"
          >
            <Download size={15} />
            {t.dlBtn}
          </a>
        </div>
      </Reveal>

      {/* ── 3 Cenários ── */}
      <div className="grid gap-5 lg:grid-cols-3">
        {scenarios[lang].map((s, i) => {
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
                {t.mrrLabel}
              </div>
              <h3 className="mt-2 font-display text-2xl text-paper">
                {t.mrrTitle}
              </h3>
            </div>
            <div className="flex gap-4 text-[12px] text-fog/70">
              <span className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-sm bg-gradient-to-b from-noma-500 to-noma-700" />
                {t.legendConservative}
              </span>
              <span className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-sm bg-gradient-to-b from-noma-100 to-noma-300" />
                {t.legendOptimistic}
              </span>
            </div>
          </div>

          <div className="-mx-1 overflow-x-auto px-1 pb-1">
            <div className="relative grid h-[320px] min-w-[480px] grid-cols-9 items-end gap-2 sm:gap-3">
              {mrrBars[lang].map((bar, i) => {
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
              {mrrBars[lang].map((bar) => (
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
          {t.milestonesLabel}
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/8 bg-ink/60 backdrop-blur-xl">
          <div className="hidden grid-cols-[auto_1.6fr_0.7fr_0.7fr_0.9fr_1fr] gap-4 border-b border-white/5 px-6 py-3 text-[10.5px] uppercase tracking-[0.16em] text-fog/45 md:grid">
            <span>{t.thMonth}</span>
            <span>{t.thEvent}</span>
            <span>{t.thFree}</span>
            <span>{t.thPaid}</span>
            <span>{t.thMrr}</span>
            <span>{t.thResult}</span>
          </div>
          {milestones[lang].map((m, i) => (
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
                <span className="md:hidden text-[10px] uppercase tracking-[0.16em] text-fog/40">{t.mobFree}</span>
                {m.free}
              </div>
              <div className="font-mono tabular-nums text-noma-300">
                <span className="md:hidden text-[10px] uppercase tracking-[0.16em] text-fog/40">{t.mobPaid}</span>
                {m.paid}
              </div>
              <div className="font-mono tabular-nums text-paper">
                <span className="md:hidden text-[10px] uppercase tracking-[0.16em] text-fog/40">{t.mobMrr}</span>
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
        {sensitivity[lang].map((s, i) => (
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
                      l.includes(t.sensitivityHighlight)
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
            {t.comparisonLabel}
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[540px] text-[13px]">
              <thead>
                <tr className="border-b border-white/6 text-[10px] uppercase tracking-[0.16em] text-fog/45">
                  <th className="pb-3 text-left font-normal">{t.thScenario}</th>
                  <th className="pb-3 text-right font-normal">{t.thRevenue}</th>
                  <th className="pb-3 text-right font-normal">{t.thValuation}</th>
                  <th className="pb-3 text-right font-normal">{t.thLtvCac}</th>
                  <th className="pb-3 text-right font-normal">{t.thPaidM24}</th>
                  <th className="pb-3 text-right font-normal">{t.thAngelReturn}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {(lang === 'pt' ? [
                  { label: t.rowConservative, receita: 'R$9,23M', val: 'R$27,7M', ltv: '5,3×', pag: '28.363', retorno: '4,2×', highlight: false },
                  { label: t.rowBase,         receita: 'R$15,0M', val: 'R$75,0M', ltv: '9,0×', pag: '37.090', retorno: '11,3×', highlight: false },
                  { label: t.rowOptimistic,   receita: 'R$21,2M', val: 'R$148,7M', ltv: '10,4×', pag: '49.885', retorno: '22,3×', highlight: true },
                ] : [
                  { label: t.rowConservative, receita: 'R$9.23M', val: 'R$27.7M', ltv: '5.3×', pag: '28,363', retorno: '4.2×', highlight: false },
                  { label: t.rowBase,         receita: 'R$15.0M', val: 'R$75.0M', ltv: '9.0×', pag: '37,090', retorno: '11.3×', highlight: false },
                  { label: t.rowOptimistic,   receita: 'R$21.2M', val: 'R$148.7M', ltv: '10.4×', pag: '49,885', retorno: '22.3×', highlight: true },
                ]).map((row) => (
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
            {t.comparisonFootnote}
          </p>
        </GlassCard>
      </Reveal>
    </SectionWrap>
  );
}
