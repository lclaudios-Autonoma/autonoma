import { useCallback, useEffect, useRef, useState } from 'react';
import { ZoomIn, ZoomOut, Maximize2, X, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';
import SectionWrap from '../ui/SectionWrap';
import { contentItems, ContentItem } from '../../data/media';

/* ── helpers ── */
const clampScale = (s: number) => Math.min(Math.max(s, 0.2), 14);

/* ── Zoom+Pan Lightbox ── */
interface LightboxProps { src: string; title: string; onClose: () => void }

function ZoomPanLightbox({ src, title, onClose }: LightboxProps) {
  const [scale, setScale]       = useState(1);
  const [offset, setOffset]     = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // Mutable refs — avoid stale closures inside native listeners
  const scaleRef  = useRef(1);
  const offsetRef = useRef({ x: 0, y: 0 });
  const dragRef   = useRef<{ mx: number; my: number; ox: number; oy: number } | null>(null);
  const pinchRef  = useRef<{ dist: number; scale: number; offset: { x: number; y: number }; mid: { x: number; y: number } } | null>(null);

  const applyTransform = useCallback((s: number, o: { x: number; y: number }) => {
    scaleRef.current  = s;
    offsetRef.current = o;
    setScale(s);
    setOffset(o);
  }, []);

  const zoomToward = useCallback((factor: number, cx: number, cy: number) => {
    const prev = scaleRef.current;
    const next = clampScale(prev * factor);
    const r    = next / prev;
    applyTransform(next, {
      x: offsetRef.current.x * r + cx * (1 - r),
      y: offsetRef.current.y * r + cy * (1 - r),
    });
  }, [applyTransform]);

  /* ── ESC to close ── */
  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [onClose]);

  /* ── Lock body scroll ── */
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  /* ── Native wheel (passive:false to allow preventDefault) ── */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handler = (e: WheelEvent) => {
      e.preventDefault();
      const rect   = el.getBoundingClientRect();
      const factor = e.deltaY < 0 ? 1.12 : 1 / 1.12;
      zoomToward(factor, e.clientX - rect.left - rect.width / 2, e.clientY - rect.top - rect.height / 2);
    };
    el.addEventListener('wheel', handler, { passive: false });
    return () => el.removeEventListener('wheel', handler);
  }, [zoomToward]);

  /* ── Native touchmove (passive:false for pinch) ── */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handler = (e: TouchEvent) => {
      e.preventDefault();
      if (e.touches.length === 2 && pinchRef.current) {
        const dx   = e.touches[1].clientX - e.touches[0].clientX;
        const dy   = e.touches[1].clientY - e.touches[0].clientY;
        const dist = Math.hypot(dx, dy);
        const factor = dist / pinchRef.current.dist;
        const rect   = el.getBoundingClientRect();
        const cx     = pinchRef.current.mid.x - rect.left - rect.width / 2;
        const cy     = pinchRef.current.mid.y - rect.top  - rect.height / 2;
        const base   = pinchRef.current.scale;
        const next   = clampScale(base * factor);
        const r      = next / base;
        applyTransform(next, {
          x: pinchRef.current.offset.x * r + cx * (1 - r),
          y: pinchRef.current.offset.y * r + cy * (1 - r),
        });
      } else if (e.touches.length === 1 && dragRef.current) {
        applyTransform(scaleRef.current, {
          x: dragRef.current.ox + (e.touches[0].clientX - dragRef.current.mx),
          y: dragRef.current.oy + (e.touches[0].clientY - dragRef.current.my),
        });
      }
    };
    el.addEventListener('touchmove', handler, { passive: false });
    return () => el.removeEventListener('touchmove', handler);
  }, [applyTransform]);

  /* ── Mouse handlers ── */
  const onMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    e.preventDefault();
    dragRef.current = { mx: e.clientX, my: e.clientY, ox: offsetRef.current.x, oy: offsetRef.current.y };
    setDragging(true);
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragRef.current) return;
    applyTransform(scaleRef.current, {
      x: dragRef.current.ox + (e.clientX - dragRef.current.mx),
      y: dragRef.current.oy + (e.clientY - dragRef.current.my),
    });
  };
  const onMouseUp = () => { dragRef.current = null; setDragging(false); };

  /* ── Touch handlers ── */
  const onTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dx = e.touches[1].clientX - e.touches[0].clientX;
      const dy = e.touches[1].clientY - e.touches[0].clientY;
      pinchRef.current = {
        dist:   Math.hypot(dx, dy),
        scale:  scaleRef.current,
        offset: { ...offsetRef.current },
        mid:    { x: (e.touches[0].clientX + e.touches[1].clientX) / 2, y: (e.touches[0].clientY + e.touches[1].clientY) / 2 },
      };
      dragRef.current = null;
    } else if (e.touches.length === 1) {
      dragRef.current  = { mx: e.touches[0].clientX, my: e.touches[0].clientY, ox: offsetRef.current.x, oy: offsetRef.current.y };
      pinchRef.current = null;
    }
  };
  const onTouchEnd = () => { dragRef.current = null; pinchRef.current = null; };

  /* ── Double-click to zoom ── */
  const onDblClick = (e: React.MouseEvent) => {
    const rect = containerRef.current!.getBoundingClientRect();
    const cx   = e.clientX - rect.left - rect.width  / 2;
    const cy   = e.clientY - rect.top  - rect.height / 2;
    if (scaleRef.current > 2) { applyTransform(1, { x: 0, y: 0 }); }
    else { zoomToward(2.5, cx, cy); }
  };

  /* ── Button actions ── */
  const zoomIn  = () => applyTransform(clampScale(scaleRef.current * 1.6), offsetRef.current);
  const zoomOut = () => {
    const s = clampScale(scaleRef.current / 1.6);
    applyTransform(s, s <= 1 ? { x: 0, y: 0 } : offsetRef.current);
  };
  const reset   = () => applyTransform(1, { x: 0, y: 0 });

  const cursorStyle = dragging ? 'grabbing' : scale > 1 ? 'grab' : 'zoom-in';

  return (
    <motion.div
      key="zplb"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      className="fixed inset-0 z-50 flex flex-col bg-[#06070a]/97"
    >
      {/* ── Top bar ── */}
      <div className="flex shrink-0 items-center justify-between border-b border-white/8 bg-black/50 px-4 py-2.5 backdrop-blur-xl">
        <span className="hidden text-[11px] text-white/35 sm:block">
          {title} · scroll/pinch = zoom · arrastar = mover · duplo-clique = zoom rápido
        </span>
        <span className="text-[11px] font-medium text-white/50 sm:hidden">{title}</span>

        <div className="ml-auto flex items-center gap-0.5">
          <button onClick={zoomOut} aria-label="Diminuir zoom"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-white/55 transition-colors hover:bg-white/10 hover:text-white">
            <ZoomOut size={15} />
          </button>
          <span className="w-12 text-center font-mono text-[11px] text-white/35 tabular-nums">
            {Math.round(scale * 100)}%
          </span>
          <button onClick={zoomIn} aria-label="Aumentar zoom"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-white/55 transition-colors hover:bg-white/10 hover:text-white">
            <ZoomIn size={15} />
          </button>
          <button onClick={reset} aria-label="Resetar zoom"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-white/55 transition-colors hover:bg-white/10 hover:text-white">
            <Maximize2 size={13} />
          </button>
          <div className="mx-2 h-4 w-px bg-white/12" />
          <button onClick={onClose} aria-label="Fechar"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-white/55 transition-colors hover:bg-red-500/20 hover:text-red-400">
            <X size={17} />
          </button>
        </div>
      </div>

      {/* ── Pan/zoom canvas ── */}
      <div
        ref={containerRef}
        className="relative flex-1 overflow-hidden"
        style={{ cursor: cursorStyle, touchAction: 'none' }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onDoubleClick={onDblClick}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(calc(-50% + ${offset.x}px), calc(-50% + ${offset.y}px)) scale(${scale})`,
            transformOrigin: 'center center',
            willChange: 'transform',
            userSelect: 'none',
            transition: dragging ? 'none' : 'transform 0.06s ease-out',
          }}
        >
          <img
            src={src}
            alt={title}
            draggable={false}
            style={{
              display: 'block',
              maxHeight: '84vh',
              maxWidth: '90vw',
              borderRadius: 10,
              boxShadow: '0 24px 80px rgba(0,0,0,0.75)',
            }}
          />
        </div>
      </div>

      {/* ── Bottom hint ── */}
      <div className="shrink-0 py-1.5 text-center text-[9.5px] text-white/20">
        ESC para fechar
      </div>
    </motion.div>
  );
}

/* ── Card de Vídeo ── */
function VideoCard({ item }: { item: ContentItem }) {
  return (
    <GlassCard variant="feature" className="flex h-full flex-col overflow-hidden p-0">
      <div className="relative aspect-video w-full overflow-hidden border-b border-white/8 bg-black">
        <video controls preload="metadata" playsInline className="h-full w-full object-cover">
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
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/45">
          <div className="flex h-14 w-14 flex-col items-center justify-center gap-1 rounded-full border border-white/20 bg-black/60 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
            <ZoomIn size={22} className="text-noma-300" />
            <span className="text-[8px] uppercase tracking-[0.16em] text-white/50">zoom</span>
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
        <p className="mt-2 text-[11px] text-noma-300/60">Clique para abrir · zoom ilimitado</p>
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

      {/* Zoom+Pan Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <ZoomPanLightbox
            src={lightbox.src}
            title={lightbox.title}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </SectionWrap>
  );
}
