import GlassCard from '../ui/GlassCard';
import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';
import SectionWrap from '../ui/SectionWrap';
import { risks } from '../../data/risks';
import { cn } from '../../lib/cn';

const levelTone: Record<string, string> = {
  alto: 'bg-terra/15 text-terra border-terra/35',
  medio: 'bg-gold/12 text-gold border-gold/30',
  baixo: 'bg-noma-500/12 text-noma-300 border-noma-300/30',
};

const levelBar: Record<string, number> = { alto: 88, medio: 55, baixo: 25 };

export default function Riscos() {
  return (
    <SectionWrap id="riscos">
      <SectionHeader
        eyebrow="11 · Riscos & Mitigação"
        title={
          <>
            Mapeamos o que pode dar errado — e como{' '}
            <span className="text-noma-300 green-glow-text">não deixar</span>
          </>
        }
        lead="Seis riscos materiais com mitigação explícita e gates de decisão. O anjo não fica exposto ao lado escuro porque já está endereçado antes do cheque."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {risks.map((risk, i) => (
          <Reveal key={risk.name} delay={i * 0.05}>
            <GlassCard variant="risk" hover className="h-full">
              <div className="flex items-start gap-4">
                <div className="text-2xl">{risk.icon}</div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-xl leading-tight text-paper">{risk.name}</h3>
                    <span
                      className={cn(
                        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] uppercase tracking-[0.18em]',
                        levelTone[risk.level],
                      )}
                    >
                      Risco {risk.levelLabel}
                    </span>
                  </div>
                  <p className="mt-1 text-[12.5px] uppercase tracking-[0.12em] text-fog/50">
                    {risk.sub}
                  </p>
                  <div className="mt-4 h-[3px] w-full overflow-hidden rounded-full bg-white/5">
                    <div
                      className={cn(
                        'h-full rounded-full',
                        risk.level === 'alto' && 'bg-terra',
                        risk.level === 'medio' && 'bg-gold',
                        risk.level === 'baixo' && 'bg-noma-300',
                      )}
                      style={{ width: `${levelBar[risk.level]}%` }}
                    />
                  </div>
                  <p className="mt-4 text-[13.5px] leading-relaxed text-fog/75">
                    {risk.mitigation}
                  </p>
                </div>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </SectionWrap>
  );
}
