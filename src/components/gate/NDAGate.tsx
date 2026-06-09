import { FormEvent, useCallback, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

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
                    Acordo de <span style={{ color: '#C4748A' }}>Confidencialidade</span>
                  </h2>
                  <p className="mx-auto mb-8 max-w-[340px] text-[13px] leading-relaxed text-fog/75">
                    Este material é restrito a investidores autorizados.
                    Para continuar, você precisa aceitar os termos de confidencialidade da AutoNoma.
                    Deseja ler o contrato completo antes de assinar?
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
                      Sim, quero ler o contrato
                    </button>
                    <button
                      onClick={() => chooseMode('skip')}
                      className="rounded-xl border px-5 py-3 text-[13px] font-medium transition-all duration-200 hover:text-paper"
                      style={{ background: 'transparent', borderColor: 'rgba(196,116,138,0.18)', color: '#9E8A92' }}
                      onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(196,116,138,0.34)')}
                      onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(196,116,138,0.18)')}
                    >
                      Aceitar sem ler — assinar diretamente
                    </button>
                  </div>

                  <p className="mt-6 text-[10.5px] leading-relaxed" style={{ color: 'rgba(158,138,146,0.45)' }}>
                    Ao aceitar, seus dados de acesso são registrados como prova eletrônica.
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
                  AutoNoma · NDA · 2026
                </p>
                <h1 className="font-display text-[38px] font-semibold italic leading-none tracking-tight text-paper">
                  Acordo de <span style={{ color: '#C4748A' }}>Confidencialidade</span>
                </h1>
              </div>

              {/* Aviso */}
              <div
                className="mb-6 flex gap-3 rounded-xl border-l-[3px] p-4 text-[12.5px] leading-relaxed"
                style={{ background: 'rgba(201,168,124,0.06)', borderColor: '#C9A87C', borderTopWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, borderTopColor: 'rgba(201,168,124,0.22)', borderRightColor: 'rgba(201,168,124,0.22)', borderBottomColor: 'rgba(201,168,124,0.22)' }}
              >
                <span className="text-base">⚠️</span>
                <span style={{ color: 'rgba(201,168,124,0.80)' }}>
                  Documento juridicamente vinculante. IP, dispositivo e localização são registrados automaticamente como prova eletrônica.
                </span>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                {/* ── PASSO 1 — Identificação ── */}
                <GlassCard>
                  <CardHeader icon="user" title="Identificação" sub="Dados vinculados ao aceite como prova eletrônica" />
                  <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2">
                    <Field label="Nome completo" required>
                      <input
                        type="text"
                        value={name}
                        placeholder="Seu nome completo"
                        autoComplete="name"
                        onChange={e => setName(e.target.value)}
                        onBlur={() => setTouched(true)}
                        className={fieldCls(touched && !nameValid)}
                      />
                    </Field>
                    <Field label="E-mail" required>
                      <input
                        type="email"
                        value={email}
                        placeholder="voce@fundo.com"
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
                    title={mode === 'full' ? 'Termos do Acordo — Leitura Completa' : 'Termos do Acordo — Resumo'}
                    sub={mode === 'full' ? 'Role até o final para liberar o aceite' : 'Modo de aceite direto'}
                  />
                  <div className="p-6">
                    {mode === 'full' ? (
                      <>
                        {/* barra de progresso */}
                        <div className="mb-1 flex items-center justify-between">
                          <span className="text-[11px]" style={{ color: '#9E8A92' }}>Progresso de leitura</span>
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
                          <NDAText />
                        </div>
                        <p className="mt-3 text-center text-[11px]" style={{ color: ndaUnlocked ? '#C4748A' : '#9E8A92' }}>
                          {ndaUnlocked ? '✓ Leitura concluída — preencha o aceite abaixo' : '↑ Role até o fim para liberar o aceite'}
                        </p>
                      </>
                    ) : (
                      /* modo resumo */
                      <>
                        <div className="rounded-xl border p-5" style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(196,116,138,0.14)' }}>
                          <p className="mb-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em]" style={{ color: '#C4748A' }}>
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                            Resumo dos termos — AutoNoma NDA v1.0
                          </p>
                          <ul className="flex flex-col gap-2">
                            {[
                              'As informações do deck são estritamente confidenciais — não compartilhe com terceiros.',
                              'Uso exclusivo para avaliação de investimento na AutoNoma.',
                              'Vigência das obrigações: 5 anos após o término da relação.',
                              'Violação sujeita a multa de R$ 500.000,00 por evento.',
                              'Seus dados de acesso (IP, dispositivo) são registrados como prova eletrônica.',
                              'Foro: Comarca de São Paulo — SP. Lei brasileira.',
                            ].map((item, i) => (
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
                            Prefiro ler o contrato completo
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
                    <CardHeader icon="check" title="Confirmar Aceite" sub="Marque cada declaração para assinar" />
                    <div className="flex flex-col gap-3 p-6">
                      {([
                        [c1, setC1, 'Li e aceito os termos do Acordo de Confidencialidade da AutoNoma.'],
                        [c2, setC2, 'Estou de acordo com a multa imposta em caso de descumprimento de cláusulas da NDA.'],
                        [c3, setC3, 'Autorizo o registro dos meus dados de acesso como prova eletrônica, conforme a LGPD.'],
                        [c4, setC4, 'As informações fornecidas são verdadeiras e este aceite tem plena validade jurídica.'],
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
                        {submitting ? 'Abrindo deck…' : 'Confirmar Aceite e Acessar o Deck'}
                      </button>

                      <p className="text-center text-[11px]" style={{ color: 'rgba(158,138,146,0.40)' }}>
                        Ao clicar você assina eletronicamente. Sessão temporária — dados não trafegam para servidores externos.
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

// ─── Texto completo da NDA ────────────────────────────────────────────────────
function NDAText() {
  const h2 = 'font-display text-[18px] font-semibold italic text-paper mt-6 mb-2 pb-2 border-b first:mt-0';
  const h3 = 'text-[9.5px] font-bold uppercase tracking-[0.18em] mt-4 mb-1.5';
  const p  = 'text-[12.5px] leading-[1.75] mb-2 text-justify';
  const li = 'text-[12px] leading-[1.7] mb-1 pl-1';
  return (
    <div style={{ borderColor: 'rgba(196,116,138,0.14)', color: '#9E8A92' }}>
      <h2 className={h2} style={{ borderColor: 'rgba(196,116,138,0.14)' }}>Acordo de Confidencialidade e Não Divulgação</h2>
      <p className={p}>AutoNoma Tecnologia Ltda. · NDA v1.0 · Brasil · 2026</p>

      <h3 className={h3} style={{ color: '#C4748A' }}>1 · Objeto e Informações Confidenciais</h3>
      <p className={p}>São confidenciais todos os dados, documentos, código, algoritmos, modelos de IA, estratégias, projeções financeiras, dados de usuárias, identidade de marca e propriedade intelectual da AutoNoma Tecnologia Ltda.</p>

      <h3 className={h3} style={{ color: '#C4748A' }}>2 · Obrigações da Parte Receptora</h3>
      <ul className="mb-2 ml-4 list-disc">
        {[
          'Manter sigilo absoluto, usando as informações exclusivamente para a finalidade autorizada;',
          'Não reproduzir, divulgar ou compartilhar com terceiros sem autorização escrita prévia;',
          'Não usar para fins competitivos, desenvolvimento de produtos concorrentes ou benefício próprio;',
          'Notificar imediatamente qualquer vazamento ou acesso não autorizado;',
          'Destruir ou devolver todos os materiais ao término da relação, em até 5 dias úteis.',
        ].map((t, i) => <li key={i} className={li}>{t}</li>)}
      </ul>
      <p className={p}>As obrigações sobrevivem ao término da relação pelo prazo de 5 anos.</p>

      <h3 className={h3} style={{ color: '#C4748A' }}>3 · Exceções</h3>
      <p className={p}>Não se aplica a informações de domínio público anterior, recebidas legitimamente de terceiros, desenvolvidas de forma independente ou de divulgação obrigatória por lei (com notificação prévia à AutoNoma).</p>

      <h3 className={h3} style={{ color: '#C4748A' }}>4 · Propriedade Intelectual</h3>
      <p className={p}>Nenhum direito de PI é transferido. Qualquer desenvolvimento derivado das informações pertence à AutoNoma. Vedado registrar marcas, patentes ou ativos que derivem das informações confidenciais.</p>

      <h3 className={h3} style={{ color: '#C4748A' }}>5 · LGPD e Dados Pessoais</h3>
      <p className={p}>Dados de usuárias tratados exclusivamente para a finalidade autorizada. Incidentes notificados em até 24h. Dados deste aceite (nome, e-mail, IP, localização) armazenados exclusivamente como prova do aceite, conforme Art. 7º, II e VI da LGPD.</p>

      <h3 className={h3} style={{ color: '#C4748A' }}>6 · Penalidade por Violação</h3>
      <p className={p}>A violação dos termos implica multa de R$ 500.000,00 por evento, devida em 30 dias após notificação, com juros de 1% ao mês e correção pelo IPCA, sem prejuízo de indenização por danos superiores.</p>

      <h3 className={h3} style={{ color: '#C4748A' }}>7 · Aceite Eletrônico</h3>
      <p className={p}>O preenchimento deste formulário e clique de confirmação constituem aceite com validade jurídica (MP 2.200-2/2001 e Art. 107 CC). O protocolo gerado é prova eletrônica do aceite.</p>

      <h3 className={h3} style={{ color: '#C4748A' }}>8 · Disposições Gerais</h3>
      <p className={p}>Foro: Comarca de São Paulo — SP. Lei aplicável: Código Civil (L. 10.406/02), LPI (L. 9.279/96), LDA (L. 9.610/98) e LGPD (L. 13.709/18).</p>

      <p className="mt-5 border-t pt-3 text-[11px]" style={{ borderColor: 'rgba(196,116,138,0.14)', color: 'rgba(158,138,146,0.45)' }}>
        AutoNoma Tecnologia Ltda. · Brasil · 2026 · v1.0 · CONFIDENCIAL
      </p>
    </div>
  );
}
