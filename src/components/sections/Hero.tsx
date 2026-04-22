import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import ChaosToOrder from '../scenes/ChaosToOrder';
import Chip from '../ui/Chip';
import { chaosChips, heroBadge, heroPills, heroSub } from '../../data/hero';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-6 sm:px-10 md:px-16 pt-24 pb-20 lg:pt-16"
    >
      <div className="relative mx-auto grid w-full max-w-content items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-noma-300/25 bg-noma-500/10 px-3.5 py-1.5 text-[11px] tracking-[0.16em] text-noma-300 backdrop-blur-md"
          >
            <Sparkles size={12} />
            <span className="uppercase">{heroBadge}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="hero-headline mt-8"
          >
            <span className="text-paper">Auto</span>
            <span className="text-noma-300 green-glow-text">Noma</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl font-italic text-xl italic leading-relaxed text-fog/85 sm:text-2xl"
          >
            A companheira IA da mulher brasileira.{' '}
            <span className="text-paper">Resolve o invisível</span> — casa, filhos, trabalho, saúde —
            antes que a lista mental tome a manhã.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-4 eyebrow-line text-xs text-noma-300/80"
          >
            {heroSub}
          </motion.p>

          <div className="mt-10 flex flex-wrap gap-2.5">
            {heroPills.map((pill, i) => (
              <motion.div
                key={pill.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.07 }}
              >
                <Chip primary={pill.primary}>{pill.label}</Chip>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="#proposta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="group mt-14 inline-flex items-center gap-3 text-sm text-fog/70 transition-colors hover:text-noma-300"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all group-hover:border-noma-300/60 group-hover:bg-noma-500/10">
              <ArrowDown size={14} className="group-hover:text-noma-300" />
            </span>
            <span className="eyebrow-line text-[10.5px]">Role para começar</span>
          </motion.a>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <div
              className="h-[130%] w-[130%] rounded-full opacity-70 blur-[120px]"
              style={{
                background:
                  'radial-gradient(circle, rgba(30,143,94,0.25) 0%, rgba(8,9,11,0) 65%)',
              }}
            />
          </div>
          <ChaosToOrder />
          <p className="mx-auto mt-6 max-w-[460px] text-center font-italic text-sm italic text-fog/55">
            O caos da carga mental — tarefas, dúvidas, decisões — se organiza quando a{' '}
            <span className="text-noma-300">Noma</span> entra em cena.
          </p>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse at 15% 30%, rgba(78,216,154,0.14), rgba(8,9,11,0) 55%), radial-gradient(ellipse at 85% 70%, rgba(30,143,94,0.20), rgba(8,9,11,0) 60%)',
        }}
      />
      <div aria-hidden className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* hidden chips list for SEO/a11y (static) */}
      <ul className="sr-only">
        {chaosChips.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </section>
  );
}
