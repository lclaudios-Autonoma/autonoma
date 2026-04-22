import GlassCard from '../ui/GlassCard';
import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';
import SectionWrap from '../ui/SectionWrap';
import { questions, viralLoopSteps, onboardingChurnText } from '../../data/onboarding';

export default function Onboarding() {
  return (
    <SectionWrap id="onboarding">
      <SectionHeader
        eyebrow="07 · Onboarding & Viral"
        title={
          <>
            Onboarding é <span className="text-noma-300 green-glow-text">conversa</span> — não formulário
          </>
        }
        lead="8 perguntas em chat. No fim, a Noma apresenta 'como ela te vê' — o efeito 'ela me entendeu' é o que converte o convite viral. K estimado 0,6–0,8."
      />

      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <GlassCard variant="feature" glow className="h-full">
            <div className="eyebrow-line mb-5 text-[10px] text-noma-300">Fluxo · 8 perguntas</div>
            <ol className="grid gap-3">
              {questions.map((q) => (
                <li
                  key={q.index}
                  className="group flex items-start gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors hover:border-noma-300/20 hover:bg-noma-500/5"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-noma-300/25 bg-noma-500/10 font-mono text-[11px] text-noma-300">
                    {String(q.index).padStart(2, '0')}
                  </div>
                  <div className="flex-1">
                    <div className="eyebrow-line text-[10px] text-fog/50">{q.topic}</div>
                    <div className="mt-1 font-italic text-[15px] italic leading-relaxed text-fog/85">
                      {q.prompt}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </GlassCard>
        </Reveal>

        <div className="flex flex-col gap-6">
          <Reveal delay={0.1}>
            <GlassCard variant="noma" className="h-full">
              <div className="eyebrow-line mb-4 text-[10px] text-noma-100">Viral loop · K 0,6–0,8</div>
              <ol className="space-y-3">
                {viralLoopSteps.map((step, i) => (
                  <li key={i} className="flex gap-3 text-[14px] leading-relaxed text-fog/85">
                    <span className="mt-[2px] font-display text-noma-300">{i + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.2}>
            <GlassCard variant="feature">
              <div className="eyebrow-line mb-3 text-[10px] text-noma-300/80">
                Por que funciona · Churn 5× menor
              </div>
              <p className="font-italic text-[15.5px] italic leading-relaxed text-fog/85">
                {onboardingChurnText}
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </SectionWrap>
  );
}
