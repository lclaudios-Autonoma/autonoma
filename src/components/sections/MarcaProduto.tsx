import GlassCard from '../ui/GlassCard';
import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';
import SectionWrap from '../ui/SectionWrap';
import { brandLayers, channels } from '../../data/brand';
import AppShowcase from '../preview/AppShowcase';

const layerAccent: Record<string, string> = {
  ecosystem: 'from-noma-900/50 to-ink',
  agent: 'from-noma-700/40 to-ink',
  modules: 'from-surface to-ink',
};

export default function MarcaProduto() {
  return (
    <SectionWrap id="marca" tone="darker">
      <SectionHeader
        eyebrow="02 · Marca & Produto"
        title={
          <>
            Uma marca, uma <span className="text-noma-300 green-glow-text">alma</span>, dez agentes
          </>
        }
        lead="Quem usa AutoNoma se torna AutoNoma. O ecossistema — o app — a companheira — os agentes especializados. Todos sob uma mesma identidade emocional."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {brandLayers.map((layer, i) => (
          <Reveal key={layer.name} delay={i * 0.08}>
            <GlassCard
              variant="feature"
              glow={i === 1}
              className={`relative h-full overflow-hidden bg-gradient-to-b ${layerAccent[layer.kind]}`}
              highlighted={i === 1}
            >
              <div className="eyebrow-line mb-4 text-[10px] text-noma-300/80">{layer.kicker}</div>
              <div className="font-display text-5xl tracking-tight text-paper md:text-6xl">
                {layer.name === 'AutoNoma' ? (
                  <>
                    <span className="text-paper">Auto</span>
                    <span className="text-noma-300 green-glow-text">Noma</span>
                  </>
                ) : layer.name === 'Noma' ? (
                  <span className="text-noma-300 green-glow-text">Noma</span>
                ) : (
                  <span className="text-paper">
                    Agentes <span className="text-noma-300">Noma</span>
                  </span>
                )}
              </div>
              <p className="mt-5 text-[15px] leading-relaxed text-fog/75">{layer.text}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      {/* ── App preview strip ── */}
      <AppShowcase />

      <Reveal delay={0.2}>
        <div className="mt-14 mb-8 flex items-center justify-between gap-6">
          <h3 className="font-display text-3xl tracking-tight text-paper md:text-4xl">
            3 canais simultâneos · <span className="text-noma-300">onipresente</span>
          </h3>
          <div className="hidden h-px flex-1 bg-white/5 md:block" />
        </div>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-3">
        {channels.map((channel, i) => (
          <Reveal key={channel.name} delay={i * 0.06}>
            <GlassCard className="h-full">
              <div className="eyebrow-line mb-3 text-[10px] text-noma-300/70">{channel.kicker}</div>
              <h4 className="font-display text-2xl text-paper">{channel.name}</h4>
              <p className="mt-3 text-[14px] leading-relaxed text-fog/70">{channel.text}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </SectionWrap>
  );
}
