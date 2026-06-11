import PhoneShell, { T, GlassCard, TabBar, ActivePill, LivePill, AgIcon } from './PhoneShell';
import { Lang, useLang } from '../../i18n/LanguageContext';

interface AgentRow {
  name: string;
  desc: string;
  sub: string;
  active: boolean;
  icon: React.ReactNode;
}

const AGENTS: Record<Lang, AgentRow[]> = {
  pt: [
    { name: 'Noma Style', desc: 'Beleza, estilo e autocuidado', sub: 'Salões · Esteticistas · Moda', active: true, icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/> },
    { name: 'Noma Be', desc: 'Saúde, bem-estar e corpo', sub: 'Médicos · Nutrição · Psicologia', active: true, icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2"/> },
    { name: 'Noma 4you', desc: 'Cotidiano, agenda e decisões', sub: 'Agenda · Compras · Pesquisa', active: true, icon: <><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></> },
    { name: 'Noma Go', desc: 'Viagens e experiências', sub: 'Em breve', active: false, icon: <><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></> },
    { name: 'Noma Fin', desc: 'Finanças e planejamento', sub: 'Em breve', active: false, icon: <><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></> },
  ],
  en: [
    { name: 'Noma Style', desc: 'Beauty, style and self-care', sub: 'Salons · Estheticians · Fashion', active: true, icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/> },
    { name: 'Noma Be', desc: 'Health, well-being and body', sub: 'Doctors · Nutrition · Psychology', active: true, icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2"/> },
    { name: 'Noma 4you', desc: 'Everyday life, schedule and decisions', sub: 'Schedule · Shopping · Research', active: true, icon: <><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></> },
    { name: 'Noma Go', desc: 'Travel and experiences', sub: 'Coming soon', active: false, icon: <><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></> },
    { name: 'Noma Fin', desc: 'Finances and planning', sub: 'Coming soon', active: false, icon: <><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></> },
  ],
};

const S: Record<Lang, {
  label: string;
  title: string;
  sub: string;
  search: string;
  nomaRole: string;
  nomaDesc: string;
  specialized: string;
  soonBadge: string;
}> = {
  pt: {
    label: 'Agentes · Hierarquia',
    title: 'Agentes',
    sub: 'Derivados da Noma · 3 ativos',
    search: 'Buscar agente...',
    nomaRole: 'Agente Principal · AutoNoma',
    nomaDesc: 'Sua companheira pessoal. Coordena todos os agentes.',
    specialized: 'Especializados',
    soonBadge: 'breve',
  },
  en: {
    label: 'Agents · Hierarchy',
    title: 'Agents',
    sub: 'Derived from Noma · 3 active',
    search: 'Search agent...',
    nomaRole: 'Main Agent · AutoNoma',
    nomaDesc: 'Your personal companion. Coordinates all agents.',
    specialized: 'Specialized',
    soonBadge: 'soon',
  },
};

export default function ScreenAgents() {
  const { lang } = useLang();
  const s = S[lang];
  const agents = AGENTS[lang];
  return (
    <PhoneShell label={s.label} time="09:41">
      <div style={{ position: 'relative', zIndex: 1, padding: '0 13px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ padding: '8px 0 4px' }}>
          <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 17, fontWeight: 600, color: T.text }}>{s.title}</div>
          <div style={{ fontSize: 9.5, color: T.fogDim, marginTop: 1 }}>{s.sub}</div>
        </div>

        {/* search */}
        <div style={{ background: T.inputBg, backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: `1px solid ${T.inputBorder}`, borderRadius: 12, padding: '9px 13px', fontSize: 11.5, color: T.fogDim, display: 'flex', alignItems: 'center', gap: 8 }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={T.fogDim} strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          {s.search}
        </div>

        {/* Noma principal */}
        <GlassCard style={{ padding: 12, borderColor: T.borderHi }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 6 }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: T.iconBg, border: `1.5px solid ${T.borderHi}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={T.rose300} strokeWidth="1.8" strokeLinecap="round">
                <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12.5, fontWeight: 600, color: T.text }}>Noma</div>
              <div style={{ fontSize: 9.5, color: T.rose300, fontWeight: 500 }}>{s.nomaRole}</div>
            </div>
            <LivePill />
          </div>
          <div style={{ fontSize: 10.5, color: T.fog, lineHeight: 1.5 }}>{s.nomaDesc}</div>
        </GlassCard>

        <div style={{ fontSize: 8.5, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: T.fogDim, padding: '0 2px' }}>{s.specialized}</div>

        {/* specialized agents */}
        {agents.map((ag) => (
          <GlassCard key={ag.name} style={{ padding: 10, opacity: ag.active ? 1 : 0.42 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: ag.active ? 4 : 0 }}>
              <AgIcon icon={ag.icon} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: T.text }}>{ag.name}</div>
                <div style={{ fontSize: 9.5, color: T.fogDim, marginTop: 1 }}>{ag.desc}</div>
              </div>
              {ag.active ? <ActivePill /> : <ActivePill label={s.soonBadge} gold />}
            </div>
            {ag.active && <div style={{ fontSize: 10.5, color: T.fogDim, marginLeft: 39 }}>{ag.sub}</div>}
          </GlassCard>
        ))}
      </div>

      <div style={{ height: 60 }} />
      <TabBar active="agents" />
    </PhoneShell>
  );
}
