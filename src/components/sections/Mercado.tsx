import GlassCard from '../ui/GlassCard';
import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';
import SectionWrap from '../ui/SectionWrap';
import { competitor, marketStats, positioningRows } from '../../data/mercado';
import { Lang, useLang } from '../../i18n/LanguageContext';
import { cn } from '../../lib/cn';

const T: Record<Lang, {
  eyebrow: string;
  titlePre: string;
  titleHi: string;
  titlePost: string;
  lead: string;
  cardLabel: string;
  tableLabel: string;
  zapiaCol: string;
  autonomaCol: string;
}> = {
  pt: {
    eyebrow: '04.5 · Mercado & Concorrência',
    titlePre: 'O capital já apostou na categoria — ',
    titleHi: 'nós apostamos na receita',
    titlePost: '',
    lead: 'Não existe concorrente direto vertical para a mulher brasileira. Existe, sim, prova de que o mercado e o capital de risco já validaram a categoria de assistentes de IA executivos na América Latina.',
    cardLabel: 'O benchmark da categoria',
    tableLabel: 'Posicionamento comparado',
    zapiaCol: 'Zapia',
    autonomaCol: 'AutoNoma',
  },
  en: {
    eyebrow: '04.5 · Market & Competition',
    titlePre: 'Capital already bet on the category — ',
    titleHi: 'we bet on revenue',
    titlePost: '',
    lead: 'There is no direct vertical competitor for the Brazilian woman. There is, however, proof that the market and venture capital have already validated the category of executive AI assistants in Latin America.',
    cardLabel: 'The category benchmark',
    tableLabel: 'Compared positioning',
    zapiaCol: 'Zapia',
    autonomaCol: 'AutoNoma',
  },
};

export default function Mercado() {
  const { lang } = useLang();
  const t = T[lang];
  const comp = competitor[lang];
  return (
    <SectionWrap id="mercado" tone="deep">
      <SectionHeader
        eyebrow={t.eyebrow}
        title={
          <>
            {t.titlePre}
            <span className="text-noma-300 green-glow-text">{t.titleHi}</span>
            {t.titlePost}
          </>
        }
        lead={t.lead}
      />

      {/* ── Stats rápidos ── */}
      <div className="grid gap-5 md:grid-cols-4">
        {marketStats[lang].map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06}>
            <GlassCard variant="metric" hover className="h-full text-center">
              <div className="font-display text-3xl text-noma-300 green-glow-text">{s.num}</div>
              <div className="mt-2 text-[11.5px] leading-relaxed text-fog/65">{s.label}</div>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      {/* ── Card do benchmark ── */}
      <Reveal className="mt-10">
        <GlassCard variant="feature" glow highlighted>
          <div className="eyebrow-line mb-4 text-[10px] text-noma-300">{t.cardLabel}</div>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-start">
            <div>
              <h3 className="font-display text-4xl text-paper">{comp.name}</h3>
              <p className="mt-2 text-[13px] text-fog/60">{comp.origin}</p>
              <p className="mt-1 text-[13px] text-fog/60">{comp.model}</p>
              <div className="mt-6 grid gap-3">
                {comp.stats.map((s) => (
                  <div key={s.label} className="flex items-baseline gap-3 rounded-lg border border-white/5 bg-black/20 px-4 py-3">
                    <span className="font-display text-xl text-noma-300 green-glow-text">{s.num}</span>
                    <span className="text-[12.5px] text-fog/70">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-noma-300/20 bg-noma-500/8 p-6">
              <p className="font-italic text-[16px] italic leading-relaxed text-fog/90">
                {comp.note}
              </p>
            </div>
          </div>
        </GlassCard>
      </Reveal>

      {/* ── Tabela de posicionamento ── */}
      <Reveal delay={0.1} className="mt-10">
        <GlassCard variant="feature">
          <div className="eyebrow-line mb-6 text-[10px] text-noma-300">{t.tableLabel}</div>
          <div className="overflow-hidden rounded-xl border border-white/8">
            <div className="grid grid-cols-[1.2fr_1.4fr_1.4fr] bg-white/5 px-5 py-4 text-[11px] uppercase tracking-[0.16em] text-fog/50">
              <div></div>
              <div>{t.zapiaCol}</div>
              <div className="text-noma-300 font-medium">{t.autonomaCol}</div>
            </div>
            {positioningRows[lang].map((row, i) => (
              <div
                key={row.label}
                className={cn(
                  'grid grid-cols-[1.2fr_1.4fr_1.4fr] items-center gap-6 border-t border-white/5 px-5 py-5',
                  i % 2 === 1 && 'bg-white/[0.02]',
                )}
              >
                <div className="text-[14px] font-medium text-paper">{row.label}</div>
                <div className="text-[13.5px] leading-snug text-fog/55">{row.zapia}</div>
                <div className={cn('text-[13.5px] leading-snug', row.edge ? 'text-noma-300 font-semibold' : 'text-fog/80')}>
                  {row.autonoma}
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </Reveal>
    </SectionWrap>
  );
}
