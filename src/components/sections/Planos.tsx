import { Bolt, MessageCircle, Shield, Play, Check } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';
import SectionWrap from '../ui/SectionWrap';
import { plans } from '../../data/plans';
import { cn } from '../../lib/cn';

const iconMap = {
  chat: MessageCircle,
  shield: Shield,
  bolt: Bolt,
  play: Play,
};

export default function Planos() {
  return (
    <SectionWrap id="planos" tone="darker">
      <SectionHeader
        eyebrow="06 · Planos"
        title={
          <>
            4 planos · um <span className="text-noma-300 green-glow-text">caminho</span> natural
          </>
        }
        lead="Do Free ao Livre, cada plano resolve uma camada. O Autônoma é o plano âncora — onde a Noma começa a antecipar, não só reagir."
      />

      <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-2">
        {plans.map((plan, i) => {
          const Icon = iconMap[plan.icon];
          return (
            <Reveal key={plan.id} delay={i * 0.07}>
              <GlassCard
                variant="plan"
                highlighted={plan.highlighted}
                glow={plan.highlighted}
                className={cn(
                  'relative flex h-full flex-col overflow-hidden',
                  plan.highlighted && 'lg:scale-[1.04] border-noma-300/40 bg-noma-900/30',
                )}
              >
                {plan.highlighted && (
                  <div className="absolute right-5 top-5 rounded-full border border-noma-300/40 bg-noma-500/20 px-2.5 py-1 text-[9.5px] uppercase tracking-[0.2em] text-noma-100">
                    Recomendado
                  </div>
                )}

                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-noma-300/25 bg-noma-500/10 text-noma-300">
                  <Icon size={16} />
                </div>

                <div className="mt-5 eyebrow-line text-[10px] text-noma-300/70">{plan.kicker}</div>
                <h3 className="mt-1 font-display text-[34px] leading-none tracking-tight text-paper">
                  {plan.name}
                </h3>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-display text-5xl text-paper">{plan.price}</span>
                </div>
                <div className="text-[11.5px] text-fog/55">{plan.priceSub}</div>

                {plan.agentNote && (
                  <div className="mt-3 rounded-lg border border-noma-300/20 bg-noma-500/8 px-3 py-2">
                    <div className="text-[12px] font-medium text-noma-300">{plan.agentNote}</div>
                    {plan.agentNoteDetail && (
                      <div className="mt-1 text-[10.5px] leading-relaxed text-fog/55">
                        {plan.agentNoteDetail}
                      </div>
                    )}
                  </div>
                )}

                <p className="mt-5 font-italic text-[13.5px] italic text-fog/75">{plan.quote}</p>

                <ul className="mt-6 space-y-2.5 text-[13px] leading-relaxed text-fog/75">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check
                        size={14}
                        className="mt-[3px] shrink-0 text-noma-300"
                        strokeWidth={2.5}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>
    </SectionWrap>
  );
}
