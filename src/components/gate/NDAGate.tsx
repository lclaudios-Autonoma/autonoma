import { FormEvent, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Lock, Shield, CheckCircle2 } from 'lucide-react';
import { useNDASession } from '../../hooks/useNDASession';
import { cn } from '../../lib/cn';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function NDAGate() {
  const { accepted, accept } = useNDASession();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [touched, setTouched] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const nameValid = name.trim().length >= 2;
  const emailValid = EMAIL_RE.test(email.trim());
  const valid = useMemo(() => nameValid && emailValid && agreed, [nameValid, emailValid, agreed]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!valid) return;
    setSubmitting(true);
    setTimeout(() => {
      accept({ name: name.trim(), email: email.trim() });
    }, 380);
  };

  return (
    <AnimatePresence>
      {!accepted && (
        <motion.div
          key="nda-gate"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          aria-modal
          role="dialog"
          aria-labelledby="nda-title"
        >
          <div
            aria-hidden
            className="absolute inset-0 bg-black/85 backdrop-blur-2xl"
            style={{
              backgroundImage:
                'radial-gradient(ellipse at 20% 20%, rgba(30,143,94,0.18), transparent 55%), radial-gradient(ellipse at 80% 85%, rgba(78,216,154,0.12), transparent 60%)',
            }}
          />

          <motion.div
            className="relative w-full max-w-xl"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          >
            <div className="glass-strong rounded-3xl border border-white/10 p-8 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.8),0_0_60px_-20px_rgba(78,216,154,0.3)] sm:p-10">
              <div className="mb-6 flex items-center gap-3 text-noma-300">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-noma-300/30 bg-noma-500/10">
                  <Lock size={16} />
                </span>
                <span className="eyebrow-line text-xs text-noma-300">
                  Confidencial · Deck para investidores
                </span>
              </div>

              <h2
                id="nda-title"
                className="font-display text-[38px] leading-[0.98] tracking-tight text-paper sm:text-[46px]"
              >
                Acordo de <span className="text-noma-300 green-glow-text">confidencialidade</span>
              </h2>

              <p className="mt-4 max-w-lg font-italic text-[15px] italic leading-relaxed text-fog/80">
                Este material contém projeções, estratégia e tese de investimento da AutoNoma.
                Ao prosseguir, você concorda em tratar tudo como estritamente confidencial e não
                compartilhar com terceiros sem autorização por escrito.
              </p>

              <form onSubmit={onSubmit} className="mt-8 grid gap-4">
                <label className="grid gap-1.5">
                  <span className="eyebrow-line text-[10px] text-fog/50">Nome completo</span>
                  <input
                    type="text"
                    value={name}
                    autoComplete="name"
                    onChange={(e) => setName(e.target.value)}
                    onBlur={() => setTouched(true)}
                    className={cn(
                      'rounded-lg border bg-white/[0.03] px-4 py-3 text-paper outline-none transition-colors placeholder:text-fog/30',
                      touched && !nameValid
                        ? 'border-terra/60 focus:border-terra'
                        : 'border-white/10 focus:border-noma-300/50',
                    )}
                    placeholder="Seu nome"
                  />
                </label>

                <label className="grid gap-1.5">
                  <span className="eyebrow-line text-[10px] text-fog/50">Email profissional</span>
                  <input
                    type="email"
                    value={email}
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => setTouched(true)}
                    className={cn(
                      'rounded-lg border bg-white/[0.03] px-4 py-3 text-paper outline-none transition-colors placeholder:text-fog/30',
                      touched && !emailValid
                        ? 'border-terra/60 focus:border-terra'
                        : 'border-white/10 focus:border-noma-300/50',
                    )}
                    placeholder="voce@fundo.com"
                  />
                </label>

                <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-white/10 bg-white/[0.02] p-3 text-sm text-fog/80 transition-colors hover:border-noma-300/25">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-[3px] h-4 w-4 accent-noma-300"
                  />
                  <span>
                    Aceito tratar todo o conteúdo deste deck como{' '}
                    <span className="text-paper">informação confidencial</span> e não divulgar,
                    reproduzir ou compartilhar sem autorização escrita da AutoNoma.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={!valid || submitting}
                  className={cn(
                    'group relative mt-2 inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3.5 text-sm font-medium tracking-tight transition-all duration-500',
                    valid && !submitting
                      ? 'bg-noma-500 text-paper shadow-[0_0_40px_rgba(78,216,154,0.28)] hover:-translate-y-[1px] hover:bg-noma-300 hover:text-ink'
                      : 'cursor-not-allowed bg-white/5 text-fog/40',
                  )}
                >
                  <Shield size={15} className="shrink-0" />
                  <span>{submitting ? 'Abrindo deck…' : 'Aceito e quero acessar o deck'}</span>
                </button>

                <div className="mt-2 flex items-center gap-2 text-[11px] text-fog/40">
                  <CheckCircle2 size={12} />
                  <span>Sessão temporária · Dados não trafegam para servidores externos</span>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
