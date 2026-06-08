import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';
import SectionWrap from '../ui/SectionWrap';
import { questions, viralLoopSteps, onboardingChurnText } from '../../data/onboarding';
import { ScreenOnboarding1, ScreenOnboarding5, ScreenOnboarding8 } from '../preview/ScreenOnboarding';

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

      {/* ── Phones: 3 steps da jornada de onboarding ── */}
      <Reveal className="mb-10">
        <div className="relative">
          {/* fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-6 bg-gradient-to-r from-bg to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-6 bg-gradient-to-l from-bg to-transparent" />
          <div className="overflow-x-auto pb-6" style={{ scrollbarWidth: 'none' }}>
            <div className="flex gap-5 px-3" style={{ width: 'max-content' }}>
              {[
                { component: <ScreenOnboarding1 />, caption: '① Nome social', delay: 0 },
                { component: <ScreenOnboarding5 />, caption: '⑤ Interesses & perfil', delay: 0.12 },
                { component: <ScreenOnboarding8 />, caption: '⑧ Ela me entendeu → viral', delay: 0.24 },
              ].map(({ component, delay }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
                >
                  {component}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-1 text-center text-[10.5px] text-fog/35">
          8 perguntas em chat · memória contextual desde o primeiro toque · K viral 0,6–0,8 estimado
        </p>
      </Reveal>

      {/* ── Grid: fluxo + viral loop ── */}
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
