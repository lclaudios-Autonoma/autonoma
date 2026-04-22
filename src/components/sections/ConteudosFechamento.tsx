import { Play } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';
import SectionWrap from '../ui/SectionWrap';
import { fullWidthDebate, mediaItems, finalAsk } from '../../data/media';
import { cn } from '../../lib/cn';

const tagTone: Record<string, string> = {
  noma: 'bg-noma-500/15 text-noma-100 border-noma-300/30',
  purple: 'bg-[#6D5FDE]/18 text-[#C9C0FF] border-[#6D5FDE]/30',
  gold: 'bg-gold/12 text-gold border-gold/30',
  terra: 'bg-terra/12 text-terra border-terra/30',
};

export default function ConteudosFechamento() {
  return (
    <SectionWrap id="conteudos" tone="deep">
      <SectionHeader
        eyebrow="13 · Conteúdos · NDA"
        title={
          <>
            🎬 Vídeos, debates e o{' '}
            <span className="text-noma-300 green-glow-text">pedido</span>
          </>
        }
        lead="Três vídeos curtos, dois debates longos e o fechamento. Tudo sob NDA — para você sentir o produto antes da conversa."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {mediaItems.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06}>
            <GlassCard variant="feature" className="flex h-full flex-col overflow-hidden p-0" hover>
              <div className="relative aspect-video overflow-hidden border-b border-white/8 bg-black/60">
                {item.kind === 'video' ? (
                  <video
                    controls
                    preload="none"
                    className="h-full w-full object-cover"
                    playsInline
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'radial-gradient(circle at 30% 30%, rgba(78,216,154,0.25), rgba(8,9,11,0) 60%), radial-gradient(circle at 70% 70%, rgba(201,162,74,0.2), rgba(8,9,11,0) 60%)',
                      }}
                    />
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-noma-300/30 bg-black/60 text-3xl backdrop-blur-md">
                      {item.emoji || <Play size={22} className="text-noma-300" />}
                    </div>
                  </div>
                )}
                <span
                  className={cn(
                    'absolute left-3 top-3 rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] backdrop-blur-md',
                    tagTone[item.tagAccent],
                  )}
                >
                  {item.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl leading-tight text-paper">{item.title}</h3>
                <p className="mt-3 text-[13px] leading-relaxed text-fog/65">{item.description}</p>
                {item.kind === 'audio' && (
                  <audio controls preload="none" className="mt-4 w-full">
                    <source src={item.src} type="video/mp4" />
                  </audio>
                )}
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <GlassCard variant="feature" glow>
          <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:items-start">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-terra/30 bg-terra/10 text-4xl">
              {fullWidthDebate.emoji}
            </div>
            <div>
              <span
                className={cn(
                  'inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-[0.14em]',
                  tagTone[fullWidthDebate.tagAccent],
                )}
              >
                {fullWidthDebate.tag}
              </span>
              <h3 className="mt-3 font-display text-3xl leading-tight text-paper md:text-4xl">
                {fullWidthDebate.title}
              </h3>
              <p className="mt-3 max-w-3xl text-[14.5px] leading-relaxed text-fog/70">
                {fullWidthDebate.description}
              </p>
              <audio controls preload="none" className="mt-5 w-full">
                <source src={fullWidthDebate.src} type="audio/mpeg" />
              </audio>
            </div>
          </div>
        </GlassCard>
      </Reveal>

      <Reveal className="mt-16">
        <div className="relative overflow-hidden rounded-[28px] border border-noma-300/30 bg-black/60 p-10 backdrop-blur-2xl md:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 20% 20%, rgba(78,216,154,0.18), transparent 55%), radial-gradient(circle at 80% 80%, rgba(18,90,60,0.35), transparent 60%)',
            }}
          />
          <div className="relative mx-auto max-w-3xl text-center">
            <div className="eyebrow-line text-[10.5px] text-noma-300">O pedido</div>
            <h3 className="mt-5 font-display text-[44px] leading-[0.98] tracking-tight text-paper md:text-6xl">
              {finalAsk.headline}
              <br />
              <span className="text-noma-300 green-glow-text">{finalAsk.headline2}</span>
            </h3>

            <p className="mx-auto mt-8 max-w-2xl font-italic text-xl italic leading-relaxed text-fog/85 md:text-2xl">
              {finalAsk.quote}
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-2.5">
              {finalAsk.pills.map((p) => (
                <span
                  key={p.label}
                  className={cn(
                    'inline-flex items-center rounded-full border px-4 py-2 text-[12.5px] backdrop-blur-md',
                    p.kind === 'highlight'
                      ? 'border-noma-300/45 bg-noma-500/20 text-noma-100 shadow-[0_0_28px_rgba(78,216,154,0.25)]'
                      : 'border-white/15 bg-white/5 text-paper',
                  )}
                >
                  {p.label}
                </span>
              ))}
            </div>

            <div className="mt-10 flex items-center justify-center">
              <div className="inline-flex items-center gap-3 rounded-full border border-noma-300/40 bg-noma-500/15 px-6 py-3 text-[13.5px] text-paper shadow-[0_0_50px_rgba(78,216,154,0.28)]">
                <span className="h-2 w-2 animate-pulse-green rounded-full bg-noma-300" />
                <span className="font-mono uppercase tracking-[0.22em] text-noma-300">
                  Pronto para conversar
                </span>
              </div>
            </div>

            <p className="mt-10 text-[10.5px] uppercase tracking-[0.22em] text-fog/40">
              {finalAsk.footer}
            </p>
          </div>
        </div>
      </Reveal>
    </SectionWrap>
  );
}
