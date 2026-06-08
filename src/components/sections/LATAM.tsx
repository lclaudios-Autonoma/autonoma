import GlassCard from '../ui/GlassCard';
import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';
import SectionWrap from '../ui/SectionWrap';
import { countries, latamGate } from '../../data/latam';

export default function LATAM() {
  return (
    <SectionWrap id="latam" tone="deep">
      <SectionHeader
        eyebrow="12 · Expansão LATAM"
        title={
          <>
            600M de latinas · mesma dor ·{' '}
            <span className="text-noma-300 green-glow-text">abertura pós-Brasil</span>
          </>
        }
        lead="A internacionalização não é hipótese — é consequência. Mas só abre quando o Brasil provar modelo. Gate claro para proteger o caixa."
      />

      <Reveal>
        <GlassCard variant="feature" glow highlighted className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-80"
            style={{
              background:
                'radial-gradient(circle at 20% 30%, rgba(196,116,138,0.18), transparent 60%), radial-gradient(circle at 85% 70%, rgba(139,58,84,0.24), transparent 65%)',
            }}
          />
          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <div className="eyebrow-line text-[10px] text-noma-300">{latamGate.label}</div>
              <h3 className="mt-3 font-display text-[38px] leading-[1] tracking-tight text-paper md:text-5xl">
                {latamGate.headline}
              </h3>
              <p className="mt-4 font-italic text-lg italic text-fog/75">{latamGate.sub}</p>
            </div>
            <div className="rounded-2xl border border-noma-300/30 bg-black/30 p-6 text-center">
              <div className="font-display text-7xl leading-none text-noma-300 green-glow-text">
                {latamGate.tam}
              </div>
              <div className="mt-3 text-[12px] uppercase tracking-[0.16em] text-fog/55">
                {latamGate.tamLabel}
              </div>
            </div>
          </div>
        </GlassCard>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {countries.map((country, i) => (
          <Reveal key={country.country} delay={i * 0.06}>
            <GlassCard variant="feature" hover className="h-full">
              <div className="flex items-start justify-between">
                <div className="text-4xl">{country.flag}</div>
                <span className="rounded-full border border-noma-300/25 bg-noma-500/8 px-2.5 py-1 text-[9.5px] uppercase tracking-[0.18em] text-noma-300">
                  {country.priority}
                </span>
              </div>
              <h3 className="mt-4 font-display text-2xl text-paper">{country.country}</h3>
              <p className="mt-3 font-italic text-[13px] italic leading-relaxed text-fog/70">
                {country.why}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {country.stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-lg border border-white/5 bg-black/20 p-3 text-center"
                  >
                    <div className="font-display text-xl text-noma-300 green-glow-text">
                      {s.num}
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.12em] text-fog/50">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[11.5px] leading-relaxed text-fog/55">{country.note}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </SectionWrap>
  );
}
