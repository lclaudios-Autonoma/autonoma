import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import SectionHeader from '../ui/SectionHeader';
import SectionWrap from '../ui/SectionWrap';
import { phases } from '../../data/schedule';
import { Lang, useLang } from '../../i18n/LanguageContext';
import { cn } from '../../lib/cn';

const T: Record<Lang, {
  eyebrow: string;
  titlePre: string;
  titleHi: string;
  lead: string;
  phaseLabel: string;
}> = {
  pt: {
    eyebrow: '10 · Cronograma',
    titlePre: 'Do dia 1 ao ',
    titleHi: 'gate LATAM',
    lead: 'Execução por fases com gates claros: produto vivo em 30 dias, breakeven no mês 6, Série A no mês 18, LATAM aberto no mês 24.',
    phaseLabel: 'Fase',
  },
  en: {
    eyebrow: '10 · Timeline',
    titlePre: 'From day 1 to the ',
    titleHi: 'LATAM gate',
    lead: 'Phased execution with clear gates: product live in 30 days, breakeven in month 6, Series A in month 18, LATAM open in month 24.',
    phaseLabel: 'Phase',
  },
};

export default function Cronograma() {
  const { lang } = useLang();
  const t = T[lang];
  return (
    <SectionWrap id="cronograma" tone="darker">
      <SectionHeader
        eyebrow={t.eyebrow}
        title={
          <>
            {t.titlePre}<span className="text-noma-300 green-glow-text">{t.titleHi}</span>
          </>
        }
        lead={t.lead}
      />

      <div className="relative">
        <div
          aria-hidden
          className="absolute left-6 top-0 bottom-0 w-px md:left-1/2 md:-translate-x-1/2"
          style={{
            background:
              'linear-gradient(180deg, rgba(196,116,138,0) 0%, rgba(196,116,138,0.40) 8%, rgba(196,116,138,0.40) 92%, rgba(196,116,138,0) 100%)',
          }}
        />

        <ul className="relative space-y-10 md:space-y-14">
          {phases[lang].map((phase, i) => {
            const isRight = i % 2 === 1;
            return (
              <motion.li
                key={phase.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  'relative pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-10',
                  isRight && 'md:[&>*:first-child]:col-start-2',
                )}
              >
                <div
                  className={cn(
                    'absolute left-4 top-4 flex h-5 w-5 items-center justify-center rounded-full border border-noma-300/40 bg-ink shadow-[0_0_0_4px_rgba(13,10,14,0.9),0_0_20px_rgba(196,116,138,0.55)] md:left-1/2 md:-translate-x-1/2',
                  )}
                >
                  <span className="h-2 w-2 rounded-full bg-noma-300" />
                </div>

                <div className={cn('md:col-span-1', isRight && 'md:col-start-2')}>
                  <GlassCard hover>
                    <div className="flex items-baseline justify-between gap-3">
                      <div>
                        <div className="eyebrow-line text-[10px] text-noma-300/80">
                          {t.phaseLabel} {String(phase.index).padStart(2, '0')} · {phase.period}
                        </div>
                        <h3 className="mt-2 font-display text-3xl text-paper">{phase.name}</h3>
                      </div>
                      <div className="text-right">
                        <div className="font-display text-2xl text-noma-300 green-glow-text">
                          {phase.kpi}
                        </div>
                        <div className="text-[10px] uppercase tracking-[0.14em] text-fog/50">
                          {phase.kpiLabel}
                        </div>
                      </div>
                    </div>

                    <ul className="mt-5 grid gap-1.5 text-[13px] text-fog/75 sm:grid-cols-2">
                      {phase.tags.map((t) => (
                        <li key={t} className="flex items-start gap-2">
                          <span className="mt-[6px] h-[4px] w-[4px] shrink-0 rounded-full bg-noma-300" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </SectionWrap>
  );
}
