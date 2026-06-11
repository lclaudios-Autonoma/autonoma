import PhoneShell, { T, GlassCard, TabBar, ActivePill, LivePill, AgIcon } from './PhoneShell';
import { Lang, useLang } from '../../i18n/LanguageContext';

const S: Record<Lang, {
  label: string;
  greeting: string;
  date: string;
  qaAgents: string;
  qaHealth: string;
  nomaOnline: string;
  nomaText: string;
  nomaCta: string;
  quickLabel: string;
  agentsLabel: string;
  seeAll: string;
  agStyle: string;
  agBe: string;
  ag4you: string;
}> = {
  pt: {
    label: 'Home · Dashboard',
    greeting: 'Bom dia, Mari',
    date: 'sexta, 5 de junho',
    qaAgents: 'Agentes',
    qaHealth: 'Saúde',
    nomaOnline: 'Noma está online',
    nomaText: 'Pronta para resolver qualquer coisa. Do salão ao médico, da agenda ao que está pesando.',
    nomaCta: 'Falar com a Noma',
    quickLabel: 'Resolver agora',
    agentsLabel: 'Agentes ativos',
    seeAll: 'Ver todos →',
    agStyle: 'Beleza, estilo e autocuidado',
    agBe: 'Saúde, bem-estar e corpo',
    ag4you: 'Cotidiano, agenda e decisões',
  },
  en: {
    label: 'Home · Dashboard',
    greeting: 'Good morning, Mari',
    date: 'Friday, June 5',
    qaAgents: 'Agents',
    qaHealth: 'Health',
    nomaOnline: 'Noma is online',
    nomaText: 'Ready to solve anything. From the salon to the doctor, from the schedule to whatever is weighing on you.',
    nomaCta: 'Talk to Noma',
    quickLabel: 'Solve now',
    agentsLabel: 'Active agents',
    seeAll: 'See all →',
    agStyle: 'Beauty, style and self-care',
    agBe: 'Health, well-being and body',
    ag4you: 'Everyday life, schedule and decisions',
  },
};

export default function ScreenHome() {
  const { lang } = useLang();
  const s = S[lang];
  const qaItems = [
    { icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>, label: 'Chat' },
    { icon: <><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></>, label: s.qaAgents },
    { icon: <><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></>, label: 'Style' },
    { icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>, label: s.qaHealth },
  ];

  return (
    <PhoneShell label={s.label} time="09:41">
      <div style={{ padding: '0 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {/* header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 17, fontWeight: 600, color: T.text }}>{s.greeting}</div>
            <div style={{ fontSize: 10, color: T.fogDim, marginTop: 2 }}>{s.date}</div>
          </div>
          <div style={{ width: 38, height: 38, borderRadius: '50%', border: `1.5px solid ${T.borderHi}`, background: T.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Cormorant Garamond", serif', fontSize: 15, fontWeight: 600, color: T.rose300 }}>
            MS
          </div>
        </div>

        {/* Noma CTA */}
        <div style={{ borderRadius: 13, border: `1px solid ${T.borderHi}`, background: 'rgba(196,116,138,0.06)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', position: 'relative', overflow: 'hidden', padding: '12px 12px 12px 18px', boxShadow: `0 8px 28px rgba(0,0,0,0.14), inset 0 1px 0 ${T.shimmer}` }}>
          {/* accent left bar */}
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: `linear-gradient(to bottom, ${T.rose300}, ${T.rose500})` }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 7 }}>
            <div style={{ width: 20, height: 20, borderRadius: 6, background: T.iconBg, border: `1px solid ${T.cardBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={T.rose300} strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M2 12h2M20 12h2"/></svg>
            </div>
            <span style={{ fontSize: 8.5, fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', color: T.rose300, flex: 1 }}>{s.nomaOnline}</span>
            <LivePill />
          </div>
          <div style={{ fontSize: 11, color: T.fog, lineHeight: 1.5, marginBottom: 8 }}>{s.nomaText}</div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, border: `1px solid ${T.chipBorder}`, borderRadius: 18, padding: '5px 11px', background: T.chipBg, fontSize: 10.5, fontWeight: 500, color: T.rose300 }}>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            {s.nomaCta}
          </div>
        </div>

        {/* Quick actions */}
        <div style={{ fontSize: 8.5, fontWeight: 600, letterSpacing: '1.1px', textTransform: 'uppercase', color: T.fogDim }}>{s.quickLabel}</div>
        <div style={{ display: 'flex', gap: 7 }}>
          {qaItems.map((q) => (
            <div key={q.label} style={{ flex: 1, height: 64, borderRadius: 12, border: `1px solid ${T.cardBorder}`, background: T.cardBg, backdropFilter: 'blur(22px)', WebkitBackdropFilter: 'blur(22px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 5, boxShadow: `0 4px 16px rgba(0,0,0,0.10), inset 0 1px 0 rgba(232,196,208,0.18)` }}>
              <div style={{ width: 27, height: 27, borderRadius: 13, background: T.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={T.rose300} strokeWidth="1.8" strokeLinecap="round">{q.icon}</svg>
              </div>
              <span style={{ fontSize: 8.5, fontWeight: 500, color: T.fog }}>{q.label}</span>
            </div>
          ))}
        </div>

        {/* Agents card */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 8.5, fontWeight: 600, letterSpacing: '1.1px', textTransform: 'uppercase', color: T.fogDim }}>{s.agentsLabel}</div>
          <span style={{ fontSize: 9.5, color: T.rose300 }}>{s.seeAll}</span>
        </div>
        <GlassCard>
          {[
            { name: 'Noma Style', desc: s.agStyle, icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/> },
            { name: 'Noma Be', desc: s.agBe, icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2"/> },
            { name: 'Noma 4you', desc: s.ag4you, icon: <><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></> },
          ].map((ag, i) => (
            <div key={ag.name} style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '9px 12px', borderBottom: i < 2 ? `1px solid ${T.cardBorder}` : 'none' }}>
              <AgIcon icon={ag.icon} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: T.text }}>{ag.name}</div>
                <div style={{ fontSize: 9.5, color: T.fogDim, marginTop: 1 }}>{ag.desc}</div>
              </div>
              <ActivePill />
            </div>
          ))}
        </GlassCard>
      </div>

      {/* spacer for tab bar */}
      <div style={{ height: 60 }} />
      <TabBar active="home" />
    </PhoneShell>
  );
}
