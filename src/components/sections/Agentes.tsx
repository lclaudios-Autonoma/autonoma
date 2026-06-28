import GlassCard from '../ui/GlassCard';
import Badge from '../ui/Badge';
import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';
import SectionWrap from '../ui/SectionWrap';
import { agentPhases, Agent } from '../../data/agents';
import { Lang, useLang } from '../../i18n/LanguageContext';
import { cn } from '../../lib/cn';

const phaseAccent: Record<string, string> = {
  mvp: 'text-noma-300',
  f2: 'text-gold',
  f3: 'text-fog',
};

function AgentCard({ agent }: { agent: Agent }) {
  const { pricing } = agent;
  return (
    <GlassCard hover className="group h-full">
      <div className="flex items-start gap-4">
        <div
          className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-noma-300/25 bg-noma-500/10 text-2xl transition-all duration-500 group-hover:shadow-[0_0_24px_rgba(196,116,138,0.35)]"
        >
          <span>{agent.icon}</span>
        </div>
        <div className="flex-1">
          <h4 className="font-display text-2xl leading-tight text-paper">{agent.name}</h4>
          <p className="mt-1 font-italic text-[13px] italic leading-snug text-fog/70">
            {agent.dor}
          </p>
        </div>
      </div>

      <p className="mt-4 text-[12.5px] uppercase tracking-[0.14em] text-fog/55">{agent.scope}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {pricing.diaria && <Badge tone="neutral">{pricing.diaria}</Badge>}
        {pricing.semanal && <Badge tone="neutral">{pricing.semanal}</Badge>}
        {pricing.mensal && <Badge tone="solid-noma">{pricing.mensal}</Badge>}
      </div>

      <div className="mt-5 space-y-2">
        <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/5">
          <div
            className="h-full rounded-full bg-gradient-to-r from-noma-700 via-noma-300 to-noma-100 transition-all"
            style={{ width: `${agent.barPct}%` }}
          />
        </div>
        <p className="text-[11.5px] leading-relaxed text-fog/60">{agent.potential}</p>
      </div>
    </GlassCard>
  );
}

const T: Record<Lang, { eyebrow: string; titlePre: string; titleHi: string; titlePost: string; lead: string }> = {
  pt: {
    eyebrow: '06 · Agentes AutoNoma',
    titlePre: '18 agentes em ',
    titleHi: '3 ondas',
    titlePost: ' — 6 por onda',
    lead: 'Onda 1: 6 agentes de maior apelo emocional no lançamento. Onda 2: +6 agentes no mês 7 ativados por dados reais. Onda 3: +6 agentes no mês 13 para Série A. Cobrados por uso — R$29,90/agente/mês.',
  },
  en: {
    eyebrow: '06 · AutoNoma Agents',
    titlePre: '18 agents in ',
    titleHi: '3 waves',
    titlePost: ' — 6 per wave',
    lead: 'Wave 1: 6 agents with highest emotional appeal at launch. Wave 2: +6 agents in month 7 activated by real data. Wave 3: +6 agents in month 13 for Series A. Charged per use — R$29.90/agent/month.',
  },
};

export default function Agentes() {
  const { lang } = useLang();
  const t = T[lang];
  return (
    <SectionWrap id="agentes">
      <SectionHeader
        eyebrow={t.eyebrow}
        title={
          <>
            {t.titlePre}<span className="text-noma-300 green-glow-text">{t.titleHi}</span>{t.titlePost}
          </>
        }
        lead={t.lead}
      />

      <div className="space-y-14">
        {agentPhases[lang].map((phase, pi) => (
          <div key={phase.name}>
            <Reveal>
              <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <div className="eyebrow-line text-[10px] text-noma-300/80">{phase.label}</div>
                  <h3
                    className={cn(
                      'mt-2 font-display text-3xl tracking-tight text-paper md:text-4xl',
                    )}
                  >
                    {phase.name}
                  </h3>
                  <p className="mt-2 max-w-xl text-[14px] text-fog/65">{phase.description}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-3">
                  <div className={cn('font-display text-2xl', phaseAccent[phase.accent])}>
                    {phase.arr}
                  </div>
                  <div className="text-[10.5px] uppercase tracking-[0.18em] text-fog/50">
                    {phase.arrLabel}
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {phase.agents.map((agent, i) => (
                <Reveal key={agent.name} delay={i * 0.05 + pi * 0.02}>
                  <AgentCard agent={agent} />
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>

    </SectionWrap>
  );
}
