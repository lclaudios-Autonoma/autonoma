import { useEffect, useState } from 'react';
import { ZoomIn, X, Play } from 'lucide-react';
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
    titleHi: 'documentos, Guia Lógico e Business Plan',
    lead: 'Vídeos explicativos, mapa, infográfico, documento fundador, descritivo do negócio, guia da lógica do produto e download do Business Plan em Excel. Arquivos interativos para aprofundar o entendimento do projeto e produto.',
  },
  en: {
    eyebrow: '13 · Extra Contents',
    titlePre: 'Founding document, business model, logic guide and ',
    titleHi: 'Business Plan',
    lead: 'Founding document, business model overview, product logic guide and the Business Plan as an Excel download. Files to deepen your understanding of the project and product.',
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
  const { lang } = useLang();
  const t = T[lang];
  const tDl = ui[lang].conteudos;
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);

  // EN: contentItems.en é vazio — vídeos/imagens em PT ficam fora da versão inglesa.
  const videos = contentItems[lang].filter((c) => c.kind === 'video');
  const images = contentItems[lang].filter((c) => c.kind === 'image');

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

      {/* Imagens */}
      {images.length > 0 && (
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {images.map((item, i) => (
            <Reveal key={item.src} delay={i * 0.08}>
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
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
                href: lang === 'en' ? '/media/BPAUTONOMA_EN.xlsx' : '/media/BPAUTONOMA.xlsx',
                label: tDl.bpLabel,
                sub: tDl.bpSub,
                download: true,
                ptOnly: false,
                icon: (
                  <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></>
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
