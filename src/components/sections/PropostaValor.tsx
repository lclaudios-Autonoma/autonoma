import GlassCard from '../ui/GlassCard';
import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';
import SectionWrap from '../ui/SectionWrap';
import { pvHero, valueCards } from '../../data/values';

function parseBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith('**') ? (
      <span key={i} className="text-paper">
        {p.slice(2, -2)}
      </span>
    ) : (
      <span key={i}>{p}</span>
    ),
  );
}

export default function PropostaValor() {
  return (
    <SectionWrap id="proposta">
      <SectionHeader
        eyebrow="01 · Proposta de Valor"
        title={<>Por que a <span className="text-noma-300 green-glow-text">AutoNoma</span> existe</>}
        lead={pvHero.label}
      />

      <div className="mt-10 grid gap-10 md:grid-cols-[1.15fr_1fr]">
        <Reveal>
          <GlassCard variant="feature" glow className="h-full">
            <div className="eyebrow-line mb-5 text-[10px] text-noma-300">A crença fundadora</div>
            <div className="space-y-5 font-italic text-[21px] italic leading-relaxed text-fog/90 sm:text-[23px]">
              {pvHero.paragraphs.map((p, i) => (
                <p key={i}>{parseBold(p)}</p>
              ))}
            </div>
          </GlassCard>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex h-full flex-col justify-center gap-6 rounded-3xl border border-white/8 bg-black/25 p-8">
            <div className="flex items-center gap-4">
              <div className="font-display text-6xl text-noma-300 green-glow-text">42,8M</div>
              <div className="flex-1 text-sm leading-relaxed text-fog/70">
                mulheres ocupadas no Brasil (IBGE 2024) — a maior base inexplorada de SaaS B2C do
                hemisfério sul.
              </div>
            </div>
            <div className="divider-hairline" />
            <div className="text-[15px] leading-relaxed text-fog/80">
              Nenhuma solução vertical construída de verdade para ela. A janela está aberta — e ninguém
              está a ocupando com DNA feminino, memória persistente e agentes especializados.
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {valueCards.map((card, i) => (
          <Reveal key={card.title} delay={i * 0.06}>
            <GlassCard className="h-full" hover>
              <div className="eyebrow-line mb-3 text-[10px] text-noma-300/80">{card.label}</div>
              <h3 className="font-display text-3xl leading-[1] tracking-tight text-paper">
                {card.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-fog/75">{card.text}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </SectionWrap>
  );
}
