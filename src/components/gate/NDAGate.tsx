import { FormEvent, useCallback, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLang } from '../../i18n/LanguageContext';
import { nda, NDADict } from '../../i18n/nda';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ─── Props ───────────────────────────────────────────────────────────────────
// `accepted` e `onAccept` vêm do App.tsx — única fonte de verdade.
// NDAGate nunca chama useNDASession diretamente (causa do bug de reload).
interface Props {
  accepted: boolean;
  onAccept: (payload?: { name: string; email: string }) => void;
}

// ─── Tipos internos ──────────────────────────────────────────────────────────
type Mode = null | 'full' | 'skip';

// ─── Helpers ─────────────────────────────────────────────────────────────────
function NomaSvgLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 200 200">
      <defs>
        <linearGradient id="ng" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F2D6DF" />
          <stop offset="100%" stopColor="#8B3A54" />
        </linearGradient>
      </defs>
      <text
        x="100" y="148"
        textAnchor="middle"
        fontFamily="Cormorant Garamond, serif"
        fontSize="148" fontWeight="600" fontStyle="italic"
        fill="url(#ng)"
      >N</text>
    </svg>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────
export default function NDAGate({ accepted, onAccept }: Props) {
  const { lang } = useLang();
  const t = nda[lang];

  // identificação
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [touched, setTouched] = useState(false);

  // fluxo
  const [mode, setMode]           = useState<Mode>(null);       // escolha ainda não feita
  const [readPct, setReadPct]     = useState(0);
  const [ndaUnlocked, setNdaUnlocked] = useState(false);

  // aceite
  const [c1, setC1] = useState(false);
  const [c2, setC2] = useState(false);
  const [c3, setC3] = useState(false);
  const [c4, setC4] = useState(false);
  const allChecked = c1 && c2 && c3 && c4;

  // submissão
  const [submitting, setSubmitting] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  // ── Validação ──────────────────────────────────────────────────────────────
  const nameValid  = name.trim().length >= 2;
  const emailValid = EMAIL_RE.test(email.trim());
  const formValid  = nameValid && emailValid;

  // ── Scroll progress ────────────────────────────────────────────────────────
  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const pct = Math.round((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100);
    setReadPct(Math.min(pct, 100));
    if (pct >= 90 && !ndaUnlocked) setNdaUnlocked(true);
  }, [ndaUnlocked]);

  // ── Escolha de modo ────────────────────────────────────────────────────────
  function chooseMode(chosen: 'full' | 'skip') {
    setMode(chosen);
    if (chosen === 'skip') setNdaUnlocked(true); // skip → libera imediatamente
  }

  // ── Submissão ──────────────────────────────────────────────────────────────
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setTouched(true);
    if (!formValid || !allChecked || !ndaUnlocked) return;
    setSubmitting(true);
    // Pequeno delay para a animação do botão antes de fechar o gate.
    // onAccept vem do App.tsx → atualiza sessionStorage + estado React lá —
    // sem instâncias paralelas de useState, sem necessidade de reload.
    setTimeout(() => {
      onAccept({ name: name.trim(), email: email.trim() });
    }, 380);
  }

  // ── Render ─────────────────────────────────────────────────────────────────
  const canSubmit = formValid && allChecked && ndaUnlocked && !submitting;

  return (
    <AnimatePresence>
      {!accepted && (
        <motion.div
          key="nda-gate"
          className="fixed inset-0 z-[100] overflow-y-auto"
          style={{
            background: 'rgba(13,10,14,0.92)',
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

          {/* ── MODAL de escolha (aparece até o usuário escolher) ── */}
          <AnimatePresence>
            {mode === null && (
              <motion.div
                key="choice-modal"
                className="fixed inset-0 z-10 flex items-center justify-center p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.28 }}
              >
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

                  <h2
                    className="mb-2 font-display text-[28px] font-semibold italic leading-tight tracking-tight text-paper"
                  >
                    {t.choice.titlePre}<span style={{ color: '#C4748A' }}>{t.choice.titleHi}</span>
                  </h2>
                  <p className="mx-auto mb-8 max-w-[340px] text-[13px] leading-relaxed text-fog/75">
                    {t.choice.body}
                  </p>

                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => chooseMode('full')}
                      className="flex items-center justify-center gap-2 rounded-xl border px-5 py-3.5 text-[13px] font-semibold text-white transition-all duration-200 hover:-translate-y-px"
                      style={{
                        background: 'linear-gradient(135deg, #5C1E32, #8B3A54)',
                        borderColor: 'rgba(196,116,138,0.30)',
                        boxShadow: '0 0 28px rgba(139,58,84,0.24)',
                      }}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                      </svg>
                      {t.choice.readBtn}
                    </button>
                    <button
                      onClick={() => chooseMode('skip')}
                      className="rounded-xl border px-5 py-3 text-[13px] font-medium transition-all duration-200 hover:text-paper"
                      style={{ background: 'transparent', borderColor: 'rgba(196,116,138,0.18)', color: '#9E8A92' }}
                      onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(196,116,138,0.34)')}
                      onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(196,116,138,0.18)')}
                    >
                      {t.choice.skipBtn}
                    </button>
                  </div>

                  <p className="mt-6 text-[10.5px] leading-relaxed" style={{ color: 'rgba(158,138,146,0.45)' }}>
                    {t.choice.finePrint}
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── FORMULÁRIO PRINCIPAL (aparece após escolha) ── */}
          {mode !== null && (
            <motion.div
              key="form-area"
              className="mx-auto max-w-[680px] px-5 pb-28 pt-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Header */}
              <div className="mb-8 text-center">
                <p className="mb-2 text-[9.5px] font-semibold uppercase tracking-[0.24em]" style={{ color: '#C4748A' }}>
                  {t.header.eyebrow}
                </p>
                <h1 className="font-display text-[38px] font-semibold italic leading-none tracking-tight text-paper">
                  {t.header.titlePre}<span style={{ color: '#C4748A' }}>{t.header.titleHi}</span>
                </h1>
              </div>

              {/* Aviso */}
              <div
                className="mb-6 flex gap-3 rounded-xl border-l-[3px] p-4 text-[12.5px] leading-relaxed"
                style={{ background: 'rgba(201,168,124,0.06)', borderColor: '#C9A87C', borderTopWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, borderTopColor: 'rgba(201,168,124,0.22)', borderRightColor: 'rgba(201,168,124,0.22)', borderBottomColor: 'rgba(201,168,124,0.22)' }}
              >
                <span className="text-base">⚠️</span>
                <span style={{ color: 'rgba(201,168,124,0.80)' }}>
                  {t.warning}
                </span>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                {/* ── PASSO 1 — Identificação ── */}
                <GlassCard>
                  <CardHeader icon="user" title={t.id.title} sub={t.id.sub} />
                  <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2">
                    <Field label={t.id.nameLabel} required>
                      <input
                        type="text"
                        value={name}
                        placeholder={t.id.namePlaceholder}
                        autoComplete="name"
                        onChange={e => setName(e.target.value)}
                        onBlur={() => setTouched(true)}
                        className={fieldCls(touched && !nameValid)}
                      />
                    </Field>
                    <Field label={t.id.emailLabel} required>
                      <input
                        type="email"
                        value={email}
                        placeholder={t.id.emailPlaceholder}
                        autoComplete="email"
                        onChange={e => setEmail(e.target.value)}
                        onBlur={() => setTouched(true)}
                        className={fieldCls(touched && !emailValid)}
                      />
                    </Field>
                  </div>
                </GlassCard>

                {/* ── PASSO 2 — Termos ── */}
                <GlassCard>
                  <CardHeader
                    icon="doc"
                    title={mode === 'full' ? t.terms.titleFull : t.terms.titleSkip}
                    sub={mode === 'full' ? t.terms.subFull : t.terms.subSkip}
                  />
                  <div className="p-6">
                    {mode === 'full' ? (
                      <>
                        {/* barra de progresso */}
                        <div className="mb-1 flex items-center justify-between">
                          <span className="text-[11px]" style={{ color: '#9E8A92' }}>{t.terms.progressLabel}</span>
                          <span className="font-mono text-[11px]" style={{ color: '#C4748A' }}>{readPct}%</span>
                        </div>
                        <div className="mb-4 h-0.5 overflow-hidden rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
                          <div
                            className="h-full rounded-full transition-all duration-200"
                            style={{ width: `${readPct}%`, background: 'linear-gradient(90deg, #6E2540, #C4748A)' }}
                          />
                        </div>
                        {/* scroll area */}
                        <div
                          ref={scrollRef}
                          onScroll={handleScroll}
                          className="rounded-xl border p-6"
                          style={{
                            height: 340,
                            overflowY: 'auto',
                            background: 'rgba(255,255,255,0.02)',
                            borderColor: 'rgba(196,116,138,0.14)',
                          }}
                        >
                          <NDAText contract={t.contract} />
                        </div>
                        <p className="mt-3 text-center text-[11px]" style={{ color: ndaUnlocked ? '#C4748A' : '#9E8A92' }}>
                          {ndaUnlocked ? t.terms.unlockedMsg : t.terms.lockedMsg}
                        </p>
                      </>
                    ) : (
                      /* modo resumo */
                      <>
                        <div className="rounded-xl border p-5" style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(196,116,138,0.14)' }}>
                          <p className="mb-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em]" style={{ color: '#C4748A' }}>
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                            {t.terms.summaryLabel}
                          </p>
                          <ul className="flex flex-col gap-2">
                            {t.terms.summaryBullets.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-[12.5px] leading-relaxed" style={{ color: '#9E8A92' }}>
                                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ background: '#C4748A' }} />
                                {item}
                              </li>
                            ))}
                          </ul>
                          <button
                            type="button"
                            onClick={() => { setMode('full'); setNdaUnlocked(false); }}
                            className="mt-4 flex items-center gap-2 text-[11.5px] transition-opacity hover:opacity-100"
                            style={{ color: '#C4748A', opacity: 0.7, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
                          >
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                            {t.terms.readFullLink}
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </GlassCard>

                {/* ── PASSO 3 — Aceite ── */}
                <div
                  style={{
                    opacity: ndaUnlocked ? 1 : 0.35,
                    pointerEvents: ndaUnlocked ? 'auto' : 'none',
                    transition: 'opacity 0.4s',
                  }}
                >
                  <GlassCard>
                    <CardHeader icon="check" title={t.accept.title} sub={t.accept.sub} />
                    <div className="flex flex-col gap-3 p-6">
                      {([
                        [c1, setC1, t.accept.checkboxes[0]],
                        [c2, setC2, t.accept.checkboxes[1]],
                        [c3, setC3, t.accept.checkboxes[2]],
                        [c4, setC4, t.accept.checkboxes[3]],
                      ] as [boolean, (v: boolean) => void, string][]).map(([val, setter, text], i) => (
                        <label
                          key={i}
                          className="flex cursor-pointer items-start gap-3 rounded-xl border p-3.5 text-[13px] leading-relaxed transition-all duration-200"
                          style={{
                            background: val ? 'rgba(196,116,138,0.06)' : 'rgba(255,255,255,0.02)',
                            borderColor: val ? 'rgba(196,116,138,0.30)' : 'rgba(196,116,138,0.14)',
                            color: '#9E8A92',
                          }}
                        >
                          <input
                            type="checkbox"
                            checked={val}
                            onChange={e => setter(e.target.checked)}
                            className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer"
                            style={{ accentColor: '#A5526A' }}
                          />
                          {text}
                        </label>
                      ))}

                      <button
                        type="submit"
                        disabled={!canSubmit}
                        className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border py-4 text-[14px] font-semibold text-white transition-all duration-300"
                        style={canSubmit ? {
                          background: 'linear-gradient(135deg, #5C1E32, #8B3A54)',
                          borderColor: 'rgba(196,116,138,0.30)',
                          boxShadow: '0 0 36px rgba(139,58,84,0.28)',
                          cursor: 'pointer',
                        } : {
                          background: 'rgba(255,255,255,0.04)',
                          borderColor: 'rgba(196,116,138,0.10)',
                          color: 'rgba(158,138,146,0.45)',
                          cursor: 'not-allowed',
                        }}
                        onMouseEnter={e => { if (canSubmit) e.currentTarget.style.boxShadow = '0 0 48px rgba(139,58,84,0.42)'; }}
                        onMouseLeave={e => { if (canSubmit) e.currentTarget.style.boxShadow = '0 0 36px rgba(139,58,84,0.28)'; }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <rect x="3" y="11" width="18" height="11" rx="2"/>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                        </svg>
                        {submitting ? t.accept.submitBusy : t.accept.submitIdle}
                      </button>

                      <p className="text-center text-[11px]" style={{ color: 'rgba(158,138,146,0.40)' }}>
                        {t.accept.finePrint}
                      </p>
                    </div>
                  </GlassCard>
                </div>

              </form>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Sub-componentes internos ─────────────────────────────────────────────────

function fieldCls(error: boolean) {
  return [
    'w-full rounded-xl border bg-white/[0.04] px-4 py-3 text-[14px] text-paper outline-none transition-all duration-200 placeholder:text-fog/30',
    error
      ? 'border-red-500/50 focus:border-red-400/70'
      : 'border-white/10 focus:border-noma-300/50 focus:shadow-[0_0_0_3px_rgba(196,116,138,0.08)]',
  ].join(' ');
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-fog/50">
        {label}{required && <span className="ml-0.5" style={{ color: '#C45060' }}>*</span>}
      </span>
      {children}
    </div>
  );
}

function GlassCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border"
      style={{
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(22px) saturate(140%)',
        WebkitBackdropFilter: 'blur(22px) saturate(140%)',
        borderColor: 'rgba(196,116,138,0.14)',
        boxShadow: '0 20px 60px -20px rgba(0,0,0,0.60)',
      }}
    >
      {/* shimmer */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent 5%, rgba(232,196,208,0.36) 50%, transparent 95%)' }}
      />
      {children}
    </div>
  );
}

function CardHeader({ icon, title, sub }: { icon: 'user' | 'doc' | 'check'; title: string; sub: string }) {
  const icons = {
    user: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>,
    doc:  <><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></>,
    check:<><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></>,
  };
  return (
    <div className="flex items-center gap-3 border-b px-6 py-4" style={{ borderColor: 'rgba(196,116,138,0.14)' }}>
      <div
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border"
        style={{ background: 'rgba(196,116,138,0.08)', borderColor: 'rgba(196,116,138,0.18)' }}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C4748A" strokeWidth="1.8" strokeLinecap="round">
          {icons[icon]}
        </svg>
      </div>
      <div>
        <div className="text-[13.5px] font-semibold text-paper">{title}</div>
        <div className="text-[11.5px]" style={{ color: '#9E8A92' }}>{sub}</div>
      </div>
    </div>
  );
}

// ─── Texto completo da NDA (data-driven, PT/EN via i18n/nda.ts) ──────────────
function NDAText({ contract }: { contract: NDADict['contract'] }) {
  const h2 = 'font-display text-[18px] font-semibold italic text-paper mt-6 mb-2 pb-2 border-b first:mt-0';
  const h3 = 'text-[9.5px] font-bold uppercase tracking-[0.18em] mt-4 mb-1.5';
  const p  = 'text-[12.5px] leading-[1.75] mb-2 text-justify';
  const li = 'text-[12px] leading-[1.7] mb-1 pl-1';
  return (
    <div style={{ borderColor: 'rgba(196,116,138,0.14)', color: '#9E8A92' }}>
      <h2 className={h2} style={{ borderColor: 'rgba(196,116,138,0.14)' }}>{contract.title}</h2>
      <p className={p}>{contract.subtitle}</p>

      {contract.note && (
        <p className={p} style={{ color: 'rgba(201,168,124,0.80)' }}>{contract.note}</p>
      )}

      {contract.clauses.map((clause) => (
        <div key={clause.heading}>
          <h3 className={h3} style={{ color: '#C4748A' }}>{clause.heading}</h3>
          {clause.paragraphs.map((text, i) => <p key={i} className={p}>{text}</p>)}
          {clause.bullets && (
            <ul className="mb-2 ml-4 list-disc">
              {clause.bullets.map((text, i) => <li key={i} className={li}>{text}</li>)}
            </ul>
          )}
          {clause.post && <p className={p}>{clause.post}</p>}
        </div>
      ))}

      <p className="mt-5 border-t pt-3 text-[11px]" style={{ borderColor: 'rgba(196,116,138,0.14)', color: 'rgba(158,138,146,0.45)' }}>
        {contract.footer}
      </p>
    </div>
  );
}
