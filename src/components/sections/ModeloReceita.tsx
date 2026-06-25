import GlassCard from '../ui/GlassCard';
import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';
import SectionWrap from '../ui/SectionWrap';
import { receitaTiers } from '../../data/revenue';
import { Lang, useLang } from '../../i18n/LanguageContext';
import { cn } from '../../lib/cn';

const accentMap: Record<string, string> = {
  neutral: 'border-white/10',
  core: 'border-noma-500/30 bg-noma-900/25',
  mid: 'border-noma-300/25',
  high: 'border-noma-300/50 bg-noma-500/10 shadow-glow',
  max: 'border-gold/30',
};

const T: Record<Lang, { eyebrow: string; titlePre: string; titleHi: string; lead: string }> = {
  pt: {
    eyebrow: '04 · Modelo de Receita',
    titlePre: 'Jornada em ',
    titleHi: '5 fases',
    lead: 'MVP → Lista espera → Trial 30D → Essencial → Premium. Cada fase valida dor, cresce viral K e converte via trial obrigatório. Sem queimar acquisition até viral estar ativo.',
  },
  en: {
    eyebrow: '04 · Revenue Model',
    titlePre: 'Journey in ',
    titleHi: '5 phases',
    lead: 'MVP → Waitlist → Trial 30D → Essencial → Premium. Each phase validates pain, grows viral K and converts through mandatory trial. No paid acquisition until viral is active.',
  },
};

export default function ModeloReceita() {
  const { lang } = useLang();
  const t = T[lang];
  return (
    <SectionWrap id="receita" tone="darker">
      <SectionHeader
        eyebrow={t.eyebrow}
        title={
          <>
            {t.titlePre}<span className="text-noma-300 green-glow-text">{t.titleHi}</span>
          </>
        }
        lead={t.lead}
      />

      <div className="grid gap-5 lg:grid-cols-5 md:grid-cols-2">
        {receitaTiers[lang].map((tier, i) => (
          <Reveal key={tier.name} delay={i * 0.06} className={cn(i === 3 && 'lg:scale-[1.03]')}>
            <GlassCard
              variant="plan"
              className={cn('h-full relative overflow-hidden', accentMap[tier.accent])}
              hover
              glow={tier.accent === 'high'}
              highlighted={tier.accent === 'high'}
            >
              <div className="eyebrow-line mb-3 text-[10px] text-noma-300/75">{tier.tier}</div>
              <h3 className="font-display text-2xl leading-tight text-paper">{tier.name}</h3>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-4xl text-paper">{tier.price}</span>
                <span className="text-xs text-fog/60">{tier.priceSub}</span>
              </div>

              <ul className="mt-6 space-y-2.5 text-[13px] leading-relaxed text-fog/75">
                {tier.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-[6px] inline-block h-[4px] w-[4px] shrink-0 rounded-full bg-noma-300/70" />
                    <span>{b}</span>
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
