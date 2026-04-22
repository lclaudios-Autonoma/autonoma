import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navItems, navOrder } from '../../data/sections';
import { useActiveSection } from '../../hooks/useActiveSection';
import { cn } from '../../lib/cn';

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(navOrder);

  useEffect(() => {
    if (!open) return;
    const orig = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = orig;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-40 flex items-center justify-between border-b border-white/5 bg-ink/70 px-5 py-3 backdrop-blur-2xl lg:hidden">
        <a href="#top" className="font-display text-xl tracking-tight">
          <span className="text-paper">Auto</span>
          <span className="text-noma-300 green-glow-text">Noma</span>
        </a>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-lg border border-white/10 bg-white/5 p-2 text-paper transition-colors hover:border-noma-300/30 hover:text-noma-300"
          aria-label="Abrir menu"
        >
          <Menu size={18} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            className="fixed inset-0 z-[70] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
              onClick={() => setOpen(false)}
              aria-hidden
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 h-full w-[84vw] max-w-sm overflow-y-auto border-l border-white/10 bg-ink/95 px-6 py-7 backdrop-blur-2xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-display text-2xl tracking-tight">
                  <span className="text-paper">Auto</span>
                  <span className="text-noma-300 green-glow-text">Noma</span>
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-lg border border-white/10 bg-white/5 p-2 text-paper transition-colors hover:border-noma-300/30"
                  aria-label="Fechar menu"
                >
                  <X size={18} />
                </button>
              </div>

              <ul className="space-y-0.5">
                {navItems.map((item) => {
                  const isActive = active === item.id;
                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={() => setOpen(false)}
                        className={cn(
                          'flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors',
                          isActive
                            ? 'bg-noma-500/10 text-paper'
                            : 'text-fog/70 hover:bg-white/[0.04] hover:text-paper',
                        )}
                      >
                        <span
                          className={cn(
                            'font-mono text-[10px] tracking-widest',
                            isActive ? 'text-noma-300' : 'text-fog/40',
                          )}
                        >
                          {item.number}
                        </span>
                        <span>{item.title}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-8 border-t border-white/5 pt-4 text-[10.5px] uppercase tracking-[0.22em] text-fog/40">
                Deck confidencial · NDA
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
