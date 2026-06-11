import { groupLabels, groupOrder, navItems, navOrder } from '../../data/sections';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useLang } from '../../i18n/LanguageContext';
import { ui } from '../../i18n/ui';
import { cn } from '../../lib/cn';

export default function Sidebar() {
  const { lang } = useLang();
  const active = useActiveSection(navOrder);
  const items = navItems[lang];

  return (
    <aside
      className="fixed left-0 top-0 z-40 hidden h-screen w-60 shrink-0 border-r border-white/5 bg-ink/60 px-6 py-10 backdrop-blur-2xl lg:flex lg:flex-col"
      aria-label={ui[lang].nav.ariaMain}
    >
      <a
        href="#top"
        className="group mb-10 inline-flex items-center gap-2 font-display text-2xl tracking-tight text-paper"
      >
        <span className="text-paper">Auto</span>
        <span className="text-noma-300 green-glow-text">Noma</span>
      </a>

      <nav className="flex-1 overflow-y-auto pr-1">
        {groupOrder.map((group) => {
          const groupItems = items.filter((n) => n.group === group);
          return (
            <div key={group} className="mb-8 last:mb-0">
              <div className="eyebrow-line mb-3 text-[9.5px] text-fog/40">{groupLabels[lang][group]}</div>
              <ul className="space-y-0.5">
                {groupItems.map((item) => {
                  const isActive = active === item.id;
                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className={cn(
                          'group relative flex items-center gap-3 rounded-md px-3 py-2 text-[13px] transition-all duration-300',
                          isActive
                            ? 'bg-noma-500/10 text-paper'
                            : 'text-fog/60 hover:bg-white/[0.03] hover:text-paper',
                        )}
                      >
                        <span
                          className={cn(
                            'absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-noma-300 transition-all duration-300',
                            isActive ? 'h-6 w-[2px] shadow-[0_0_10px_rgba(196,116,138,0.75)]' : 'h-0 w-0',
                          )}
                          aria-hidden
                        />
                        <span
                          className={cn(
                            'font-mono text-[10px] tabular-nums tracking-widest transition-colors',
                            isActive ? 'text-noma-300' : 'text-fog/35 group-hover:text-fog/60',
                          )}
                        >
                          {item.number}
                        </span>
                        <span className="truncate">{item.title}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </nav>

      <div className="mt-6 border-t border-white/5 pt-4 text-[10.5px] uppercase tracking-[0.22em] text-fog/40">
        {ui[lang].nav.footerBadge}
      </div>
    </aside>
  );
}
