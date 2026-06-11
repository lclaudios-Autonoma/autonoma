import { AnimatePresence, motion } from 'framer-motion';
import { Lang, useLang } from '../../i18n/LanguageContext';
import { ui } from '../../i18n/ui';

// Mesmo tratamento visual do modal de escolha do NDAGate.
function NomaSvgLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 200 200">
      <defs>
        <linearGradient id="lg-ng" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F2D6DF" />
          <stop offset="100%" stopColor="#8B3A54" />
        </linearGradient>
      </defs>
      <text
        x="100" y="148"
        textAnchor="middle"
        fontFamily="Cormorant Garamond, serif"
        fontSize="148" fontWeight="600" fontStyle="italic"
        fill="url(#lg-ng)"
      >N</text>
    </svg>
  );
}

function FlagDot({ label }: { label: string }) {
  return (
    <span
      className="flex h-6 w-9 shrink-0 items-center justify-center rounded-[5px] border font-mono text-[10px] font-bold tracking-widest"
      style={{ borderColor: 'rgba(196,116,138,0.30)', background: 'rgba(196,116,138,0.10)', color: '#E8C4D0' }}
    >
      {label}
    </span>
  );
}

export default function LanguageGate() {
  const { lang, chosen, setLang } = useLang();
  const t = ui[lang].langGate;

  function choose(l: Lang) {
    setLang(l);
  }

  return (
    <AnimatePresence>
      {!chosen && (
        <motion.div
          key="lang-gate"
          className="fixed inset-0 z-[110] flex items-center justify-center overflow-y-auto p-6"
          style={{
            background: 'rgba(13,10,14,0.94)',
            backdropFilter: 'blur(28px)',
            WebkitBackdropFilter: 'blur(28px)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* ambient glows */}
          <div
            aria-hidden
            className="pointer-events-none fixed inset-0"
            style={{
              background:
                'radial-gradient(ellipse 60% 50% at 15% 20%, rgba(139,58,84,0.32), transparent 55%), radial-gradient(ellipse 50% 45% at 85% 75%, rgba(196,116,138,0.14), transparent 55%)',
            }}
          />

          <motion.div
            className="relative w-full max-w-[460px] rounded-3xl border p-10 text-center"
            style={{
              background: 'rgba(17,13,20,0.96)',
              borderColor: 'rgba(196,116,138,0.28)',
              boxShadow: '0 48px 96px rgba(0,0,0,0.80), 0 0 60px rgba(196,116,138,0.14)',
            }}
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* shimmer top */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-3xl"
              style={{ background: 'linear-gradient(90deg, transparent 10%, rgba(232,196,208,0.38) 50%, transparent 90%)' }}
            />

            <div
              className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border"
              style={{ background: 'rgba(196,116,138,0.08)', borderColor: 'rgba(196,116,138,0.28)', boxShadow: '0 0 28px rgba(196,116,138,0.16)' }}
            >
              <NomaSvgLogo />
            </div>

            <p className="mb-2 text-[9.5px] font-semibold uppercase tracking-[0.24em]" style={{ color: '#C4748A' }}>
              {t.eyebrow}
            </p>
            <h2 className="mb-2 font-display text-[28px] font-semibold italic leading-tight tracking-tight text-paper">
              {t.titlePre}<span style={{ color: '#C4748A' }}>{t.titleHi}</span>
            </h2>
            <p className="mx-auto mb-8 max-w-[360px] text-[13px] leading-relaxed text-fog/75">
              {t.body}
            </p>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => choose('pt')}
                className="flex items-center justify-center gap-3 rounded-xl border px-5 py-3.5 text-[13px] font-semibold text-white transition-all duration-200 hover:-translate-y-px"
                style={{
                  background: 'linear-gradient(135deg, #5C1E32, #8B3A54)',
                  borderColor: 'rgba(196,116,138,0.30)',
                  boxShadow: '0 0 28px rgba(139,58,84,0.24)',
                }}
              >
                <FlagDot label="PT" />
                {t.pt}
              </button>
              <button
                onClick={() => choose('en')}
                className="flex items-center justify-center gap-3 rounded-xl border px-5 py-3.5 text-[13px] font-semibold transition-all duration-200 hover:-translate-y-px hover:text-paper"
                style={{ background: 'transparent', borderColor: 'rgba(196,116,138,0.22)', color: '#C9B2BB' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(196,116,138,0.40)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(196,116,138,0.22)')}
              >
                <FlagDot label="EN" />
                {t.en}
              </button>
            </div>

            <p className="mt-6 text-[10.5px] leading-relaxed" style={{ color: 'rgba(158,138,146,0.45)' }}>
              {t.note}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
