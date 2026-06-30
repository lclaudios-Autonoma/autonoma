import { useEffect, useRef, useState } from 'react';
import { ZoomIn, X, Play, Mic, Pause, Volume2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';
import SectionWrap from '../ui/SectionWrap';
import { contentItems, ContentItem } from '../../data/media';
import { Lang, useLang } from '../../i18n/LanguageContext';
import { ui } from '../../i18n/ui';

const T: Record<Lang, {
  eyebrow: string;
  titlePre: string;
  titleHi: string;
  lead: string;
}> = {
  pt: {
    eyebrow: '13 · Conteúdos Extras',
    titlePre: 'Vídeos explicativos, mapa, infográfico, ',
    titleHi: 'documentos, Guia Lógico e Podcast Explicativo',
    lead: 'Vídeos explicativos, mapa, infográfico, documento fundador, descritivo do negócio, guia da lógica do produto e podcast explicativo sobre o modelo AutoNoma. Arquivos interativos para aprofundar o entendimento do projeto e produto.',
  },
  en: {
    eyebrow: '13 · Extra Contents',
    titlePre: 'Founding document, business model, logic guide and ',
    titleHi: 'Explanatory Podcast',
    lead: 'Founding document, business model overview, product logic guide and an explanatory podcast on the AutoNoma model. Files to deepen your understanding of the project and product.',
  },
};

/* ── Lightbox ── */
function Lightbox({ src, title, onClose }: { src: string; title: string; onClose: () => void }) {
  const { lang } = useLang();
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <motion.div
      key="lightbox"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-h-[92vh] max-w-[92vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={title}
          className="max-h-[88vh] max-w-[90vw] rounded-2xl border border-white/10 object-contain shadow-2xl"
        />
        <button
          onClick={onClose}
          className="absolute -right-4 -top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/80 text-white/70 backdrop-blur-md transition-colors hover:bg-white/15 hover:text-white"
        >
          <X size={18} />
        </button>
        <div className="mt-3 text-center text-[12px] text-white/40">{title} · {ui[lang].conteudos.lightboxClose}</div>
      </motion.div>
    </motion.div>
  );
}

/* ── Card de Vídeo ── */
function VideoCard({ item }: { item: ContentItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const handlePlay = () => {
    setStarted(true);
    videoRef.current?.play();
  };

  return (
    <GlassCard variant="feature" className="flex h-full flex-col overflow-hidden p-0">
      <div className="relative aspect-video w-full overflow-hidden border-b border-white/8 bg-black">
        <video
          ref={videoRef}
          controls={started}
          preload="metadata"
          playsInline
          className="h-full w-full object-cover"
          onPlay={() => setStarted(true)}
        >
          <source src={item.src} type="video/mp4" />
        </video>

        {/* Blur overlay — vidro fosco antes de dar play */}
        {!started && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-4 cursor-pointer"
            style={{
              backdropFilter: 'blur(16px) saturate(140%)',
              WebkitBackdropFilter: 'blur(16px) saturate(140%)',
              background: 'rgba(18,21,26,0.45)',
            }}
            onClick={handlePlay}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-noma-300/50 bg-noma-500/25 shadow-[0_0_32px_rgba(196,116,138,0.35)] backdrop-blur-md transition-transform hover:scale-105">
              <Play size={24} className="text-noma-200 ml-1" fill="currentColor" />
            </div>
            <span className="text-[11px] uppercase tracking-[0.18em] text-noma-200/70">assistir vídeo</span>
          </div>
        )}

        <span className="pointer-events-none absolute left-3 top-3 rounded-full border border-noma-300/30 bg-noma-500/20 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-noma-100 backdrop-blur-md">
          {item.number}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2">
          <Play size={13} className="text-noma-300" />
          <span className="font-display text-xl text-paper">{item.title}</span>
        </div>
        <p className="mt-3 text-[13px] leading-relaxed text-fog/65">{item.description}</p>
      </div>
    </GlassCard>
  );
}

/* ── Card de Podcast ── */
function PodcastCard({ item }: { item: ContentItem }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) { audio.pause(); } else { audio.play(); }
    setPlaying(!playing);
  };

  const onTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    setProgress((audio.currentTime / audio.duration) * 100);
  };

  const onLoadedMetadata = () => {
    if (audioRef.current) setDuration(audioRef.current.duration);
  };

  const onEnded = () => setPlaying(false);

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    audio.currentTime = ratio * audio.duration;
  };

  const fmt = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <GlassCard variant="feature" className="flex h-full flex-col overflow-hidden p-0">
      {/* Header com microfone fixo */}
      <div className="relative flex flex-col items-center justify-center gap-4 border-b border-white/8 bg-gradient-to-b from-noma-900/60 to-black/40 py-10">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-noma-300/30 bg-noma-500/15 shadow-glow backdrop-blur-md">
          <Mic size={32} className="text-noma-300" />
        </div>
        <span className="pointer-events-none absolute left-3 top-3 rounded-full border border-noma-300/30 bg-noma-500/20 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-noma-100 backdrop-blur-md">
          {item.number}
        </span>
        {/* Ondas decorativas */}
        <div className="flex items-end gap-[3px] h-8">
          {Array.from({ length: 18 }).map((_, i) => (
            <div
              key={i}
              className="w-[3px] rounded-full bg-noma-300/40"
              style={{
                height: `${playing ? Math.random() * 24 + 8 : (Math.sin(i * 0.7) * 10 + 14)}px`,
                transition: 'height 0.15s ease',
                animationDelay: `${i * 0.05}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Player */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 mb-4">
          <Mic size={13} className="text-noma-300" />
          <span className="font-display text-xl text-paper">{item.title}</span>
        </div>
        <p className="mb-5 text-[13px] leading-relaxed text-fog/65">{item.description}</p>

        <audio
          ref={audioRef}
          src={item.src}
          onTimeUpdate={onTimeUpdate}
          onLoadedMetadata={onLoadedMetadata}
          onEnded={onEnded}
          preload="metadata"
        />

        {/* Barra de progresso */}
        <div
          className="mb-3 h-1.5 w-full cursor-pointer rounded-full bg-white/10"
          onClick={seek}
        >
          <div
            className="h-full rounded-full bg-noma-300 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mb-4 flex justify-between text-[10px] text-fog/40">
          <span>{audioRef.current ? fmt(audioRef.current.currentTime) : '0:00'}</span>
          <span>{duration ? fmt(duration) : '--:--'}</span>
        </div>

        {/* Controles */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-noma-300/30 bg-noma-500/15 text-noma-300 transition-all hover:border-noma-300/60 hover:bg-noma-500/30"
          >
            {playing ? <Pause size={16} /> : <Play size={16} />}
          </button>
          <Volume2 size={14} className="text-fog/40" />
          <span className="text-[11px] text-fog/40">AutoNoma Podcast</span>
        </div>
      </div>
    </GlassCard>
  );
}

/* ── Card de Imagem ── */
function ImageCard({ item, onOpen }: { item: ContentItem; onOpen: (src: string, title: string) => void }) {
  return (
    <GlassCard
      variant="feature"
      hover
      className="group flex h-full cursor-pointer flex-col overflow-hidden p-0"
      onClick={() => onOpen(item.src, item.title)}
    >
      <div className="relative overflow-hidden border-b border-white/8 bg-black/40">
        <img
          src={item.src}
          alt={item.title}
          loading="lazy"
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/40">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/60 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
            <ZoomIn size={22} className="text-noma-300" />
          </div>
        </div>
        <span className="pointer-events-none absolute left-3 top-3 rounded-full border border-gold/30 bg-gold/15 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-gold backdrop-blur-md">
          {item.number}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2">
          <ZoomIn size={13} className="text-noma-300" />
          <span className="font-display text-xl text-paper">{item.title}</span>
        </div>
        <p className="mt-3 text-[13px] leading-relaxed text-fog/65">{item.description}</p>
      </div>
    </GlassCard>
  );
}

/* ── Seção principal ── */
export default function ConteudosFechamento() {
  const { lang } = useLang();
  const t = T[lang];
  const tDl = ui[lang].conteudos;
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);

  const videos = contentItems[lang].filter((c) => c.kind === 'video');
  const images = contentItems[lang].filter((c) => c.kind === 'image');
  const podcasts = contentItems[lang].filter((c) => c.kind === 'podcast');

  return (
    <SectionWrap id="conteudos" tone="deep">
      <SectionHeader
        eyebrow={t.eyebrow}
        title={
          <>
            {t.titlePre}
            <span className="text-noma-300 green-glow-text">{t.titleHi}</span>
          </>
        }
        lead={t.lead}
      />

      {/* Vídeos */}
      {videos.length > 0 && (
        <div className="grid gap-5 lg:grid-cols-2">
          {videos.map((item, i) => (
            <Reveal key={item.src} delay={i * 0.08}>
              <VideoCard item={item} />
            </Reveal>
          ))}
        </div>
      )}

      {/* Imagens + Podcast */}
      {(images.length > 0 || podcasts.length > 0) && (
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {podcasts.map((item, i) => (
            <Reveal key={item.src} delay={i * 0.08}>
              <PodcastCard item={item} />
            </Reveal>
          ))}
          {images.map((item, i) => (
            <Reveal key={item.src} delay={(podcasts.length + i) * 0.08}>
              <ImageCard item={item} onOpen={(src, title) => setLightbox({ src, title })} />
            </Reveal>
          ))}
        </div>
      )}

      {/* Downloads */}
      <Reveal delay={0.1}>
        <div className="mt-8">
          <p className="mb-4 text-[9.5px] font-semibold uppercase tracking-[0.22em] text-noma-300">
            {tDl.downloadsLabel}
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {([
              {
                // Versão EN do documento fundador já disponível em /public
                href: lang === 'en' ? '/documento-fundador-en.html' : '/documento-fundador.html',
                label: tDl.founderLabel,
                sub: tDl.founderSub,
                download: false,
                ptOnly: false,
                icon: (
                  <path d="M12 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                ),
              },
              {
                href: lang === 'en' ? '/modelo-negocio-en.html' : '/modelo-negocio.html',
                label: tDl.modelLabel,
                sub: tDl.modelSub,
                download: false,
                ptOnly: false,
                icon: (
                  <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></>
                ),
              },
              {
                href: lang === 'en' ? '/media/logic_guide.html' : '/media/guia_logica.html',
                label: tDl.logicLabel,
                sub: tDl.logicSub,
                download: false,
                ptOnly: false,
                icon: (
                  <><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></>
                ),
              },
              {
                href: '/autonoma-playbook.pdf',
                label: tDl.playbookLabel,
                sub: tDl.playbookSub,
                download: false,
                ptOnly: false,
                icon: (
                  <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 8h10M7 12h6"/></>
                ),
              },
            ] as { href: string; label: string; sub: string; download: boolean; ptOnly: boolean; icon: React.ReactNode }[]).map(({ href, label, sub, download, ptOnly, icon }) => (
              <a
                key={href}
                href={href}
                target={download ? undefined : '_blank'}
                rel={download ? undefined : 'noopener noreferrer'}
                {...(download ? { download: true } : {})}
                className="group flex items-center gap-4 rounded-2xl border border-noma-300/14 bg-white/[0.04] px-5 py-4 backdrop-blur-md transition-all duration-200 hover:border-noma-300/35 hover:bg-noma-500/[0.07]"
                style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-noma-300/20 bg-noma-500/10 transition-colors group-hover:border-noma-300/40 group-hover:bg-noma-500/20">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C4748A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    {icon}
                  </svg>
                </div>
                <div className="flex-1 overflow-hidden">
                  <div className="truncate text-[13.5px] font-semibold text-paper">{label}</div>
                  <div className="truncate text-[11px] text-fog/55">{sub}</div>
                </div>
                <svg
                  width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="#C4748A" strokeWidth="1.8" strokeLinecap="round"
                  className="shrink-0 opacity-40 transition-opacity group-hover:opacity-90"
                >
                  {download ? (
                    <>
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7 10 12 15 17 10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </>
                  ) : (
                    <>
                      <line x1="7" y1="17" x2="17" y2="7"/>
                      <polyline points="7 7 17 7 17 17"/>
                    </>
                  )}
                </svg>
                {ptOnly && lang === 'en' && (
                  <span className="ml-1 shrink-0 rounded-full border border-gold/30 bg-gold/10 px-2 py-0.5 text-[9.5px] font-semibold uppercase tracking-[0.1em] text-gold">
                    {tDl.ptBadge}
                  </span>
                )}
                <span className="ml-1 shrink-0 rounded-full border border-noma-300/25 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-noma-300 transition-colors group-hover:border-noma-300/50">
                  {tDl.viewBadge}
                </span>
              </a>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            src={lightbox.src}
            title={lightbox.title}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </SectionWrap>
  );
}
