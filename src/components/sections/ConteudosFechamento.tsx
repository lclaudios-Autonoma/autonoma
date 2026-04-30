import { useEffect, useState } from 'react';
import { ZoomIn, X, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';
import SectionWrap from '../ui/SectionWrap';
import { contentItems, ContentItem } from '../../data/media';

/* ── Lightbox ── */
function Lightbox({ src, title, onClose }: { src: string; title: string; onClose: () => void }) {
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
        <div className="mt-3 text-center text-[12px] text-white/40">{title} · ESC para fechar</div>
      </motion.div>
    </motion.div>
  );
}

/* ── Card de Vídeo ── */
function VideoCard({ item }: { item: ContentItem }) {
  return (
    <GlassCard variant="feature" className="flex h-full flex-col overflow-hidden p-0">
      <div className="relative aspect-video w-full overflow-hidden border-b border-white/8 bg-black">
        <video
          controls
          preload="metadata"
          playsInline
          className="h-full w-full object-cover"
        >
          <source src={item.src} type="video/mp4" />
        </video>
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
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);

  const videos = contentItems.filter((c) => c.kind === 'video');
  const images = contentItems.filter((c) => c.kind === 'image');

  return (
    <SectionWrap id="conteudos" tone="deep">
      <SectionHeader
        eyebrow="13 · Conteúdos Extras"
        title={
          <>
            Vídeos, mapas e{' '}
            <span className="text-noma-300 green-glow-text">visuais do produto</span>
          </>
        }
        lead="Dois vídeos aula e dois visuais interativos para aprofundar o entendimento do produto, modelo financeiro e posicionamento da AutoNoma."
      />

      {/* Vídeos */}
      <div className="grid gap-5 lg:grid-cols-2">
        {videos.map((item, i) => (
          <Reveal key={item.src} delay={i * 0.08}>
            <VideoCard item={item} />
          </Reveal>
        ))}
      </div>

      {/* Imagens */}
      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        {images.map((item, i) => (
          <Reveal key={item.src} delay={i * 0.08}>
            <ImageCard item={item} onOpen={(src, title) => setLightbox({ src, title })} />
          </Reveal>
        ))}
      </div>

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
