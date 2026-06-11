import { motion } from 'framer-motion';
import { Smartphone } from 'lucide-react';
import Reveal from '../ui/Reveal';
import ScreenSplash from './ScreenSplash';
import ScreenHome from './ScreenHome';
import ScreenChat from './ScreenChat';
import ScreenAgents from './ScreenAgents';
import { Lang, useLang } from '../../i18n/LanguageContext';

const S: Record<Lang, { eyebrow: string; caption: string }> = {
  pt: {
    eyebrow: 'App Preview · Design System Rose Edition · Modo Noturno',
    caption: 'Interface real do app · React Native + Expo · design construído com o mesmo sistema de tokens desta apresentação',
  },
  en: {
    eyebrow: 'App Preview · Rose Edition Design System · Night Mode',
    caption: 'Real app interface · React Native + Expo · design built with the same token system as this presentation',
  },
};

/**
 * AppShowcase — faixa horizontal com os 4 ecrãs principais do app,
 * usada dentro da seção Marca & Produto.
 *
 * Os phones entram em cascata (stagger) via framer-motion.
 * No mobile scrollam horizontalmente.
 */
export default function AppShowcase() {
  const { lang } = useLang();
  const s = S[lang];
  const screens = [
    { component: <ScreenSplash />,  delay: 0 },
    { component: <ScreenHome />,   delay: 0.10 },
    { component: <ScreenChat />,   delay: 0.20 },
    { component: <ScreenAgents />, delay: 0.30 },
  ];

  return (
    <div className="mt-14">
      {/* eyebrow */}
      <Reveal>
        <div className="mb-6 flex items-center gap-3">
          <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-noma-300/80">
            <Smartphone size={12} />
            {s.eyebrow}
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-noma-300/20 to-transparent" />
          <span className="rounded-full border border-noma-300/25 bg-noma-500/10 px-3 py-1 text-[10px] font-medium text-noma-300/80">
            Powered by Claude
          </span>
        </div>
      </Reveal>

      {/* scroll container */}
      <div className="relative">
        {/* fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-8 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-8 bg-gradient-to-l from-bg to-transparent" />

        <div
          className="overflow-x-auto pb-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div
            className="flex gap-6 px-4"
            style={{ width: 'max-content' }}
          >
            {screens.map(({ component, delay }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
              >
                {component}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* bottom caption */}
      <Reveal>
        <p className="mt-2 text-center text-[11px] leading-relaxed text-fog/40">
          {s.caption}
        </p>
      </Reveal>
    </div>
  );
}
