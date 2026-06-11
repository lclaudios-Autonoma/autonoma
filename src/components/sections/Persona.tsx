import GlassCard from '../ui/GlassCard';
import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';
import SectionWrap from '../ui/SectionWrap';
import { demographics, pains } from '../../data/persona';
import { Lang, useLang } from '../../i18n/LanguageContext';

const T: Record<Lang, {
  eyebrow: string;
  titlePre: string;
  titleHi: string;
  lead: string;
  demoLabel: string;
  quote: string;
}> = {
  pt: {
    eyebrow: '03 · A Persona',
    titlePre: 'Ela carrega tudo — e ',
    titleHi: 'ninguém a vê',
    lead: 'Mulher brasileira 25–50 anos, trabalhando, com lista mental interminável. 42,8 milhões no Brasil. Base TAM validada pelo IBGE.',
    demoLabel: 'Demográfico',
    quote:
      '"Sou mãe, esposa, profissional, filha. Todo mundo precisa de mim. Ninguém pergunta se eu preciso de alguém."',
  },
  en: {
    eyebrow: '03 · The Persona',
    titlePre: 'She carries everything — and ',
    titleHi: 'no one sees her',
    lead: 'Brazilian woman, 25–50, working, with an endless mental list. 42.8 million in Brazil. TAM base validated by IBGE.',
    demoLabel: 'Demographics',
    quote:
      '"I’m a mother, wife, professional, daughter. Everyone needs me. No one asks if I need someone."',
  },
};

export default function Persona() {
  const { lang } = useLang();
  const t = T[lang];
  return (
    <SectionWrap id="persona">
      <SectionHeader
        eyebrow={t.eyebrow}
        title={<>{t.titlePre}<span className="text-noma-300 green-glow-text">{t.titleHi}</span></>}
        lead={t.lead}
      />

      <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <GlassCard variant="feature" className="h-full" glow>
            <div className="eyebrow-line mb-5 text-[10px] text-noma-300">{t.demoLabel}</div>
            <dl className="space-y-4">
              {demographics[lang].map((row) => (
                <div
                  key={row.label}
                  className="flex items-baseline justify-between gap-4 border-b border-white/5 pb-3 last:border-none"
                >
                  <dt className="text-sm text-fog/60">{row.label}</dt>
                  <dd
                    className={
                      row.highlight
                        ? 'font-display text-2xl text-noma-300 green-glow-text'
                        : 'font-display text-xl text-paper'
                    }
                  >
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 rounded-xl border border-noma-300/20 bg-noma-500/10 p-4 text-[13px] italic leading-relaxed text-fog/85">
              {t.quote}
            </div>
          </GlassCard>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid gap-4 sm:grid-cols-2">
            {pains[lang].map((pain, i) => (
              <Reveal key={pain.title} delay={i * 0.05}>
                <GlassCard hover className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-noma-300/25 bg-noma-500/8 font-mono text-[11px] tracking-widest text-noma-300">
                      {pain.index}
                    </div>
                    <div>
                      <h4 className="font-display text-xl leading-tight text-paper">{pain.title}</h4>
                      <p className="mt-2 text-[13.5px] leading-relaxed text-fog/70">{pain.text}</p>
                    </div>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </SectionWrap>
  );
}
