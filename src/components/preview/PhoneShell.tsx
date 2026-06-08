import type { ReactNode } from 'react';

// ── Design tokens (Rose Edition Dark) ────────────────────────
export const T = {
  bg:          '#0D0A0E',
  bg2:         '#110D14',
  phoneBg:     'rgba(13,10,14,0.88)',
  phoneBorder: 'rgba(196,116,138,0.28)',
  cardBg:      'rgba(255,255,255,0.04)',
  cardBorder:  'rgba(196,116,138,0.18)',
  borderHi:    'rgba(196,116,138,0.42)',
  surface:     'rgba(20,14,20,0.72)',
  rose100:     '#F2D6DF',
  rose300:     '#C4748A',
  rose400:     '#A5526A',
  rose500:     '#8B3A54',
  rose600:     '#6E2540',
  rose700:     '#5C1E32',
  gold:        '#C9A87C',
  text:        '#F5F0F2',
  text2:       '#C8B8BE',
  fog:         '#9E8A92',
  fogDim:      'rgba(158,138,146,0.45)',
  iconBg:      'rgba(196,116,138,0.10)',
  iconStroke:  '#C4748A',
  shimmer:     'rgba(232,196,208,0.40)',
  tabBg:       'rgba(13,10,14,0.80)',
  chipBg:      'rgba(196,116,138,0.08)',
  chipBorder:  'rgba(196,116,138,0.22)',
  msgNomaBg:   'rgba(255,255,255,0.04)',
  inputBg:     'rgba(255,255,255,0.05)',
  inputBorder: 'rgba(196,116,138,0.20)',
};

// Grid dot background for phone
export const gridBg = {
  backgroundImage: `
    linear-gradient(${T.cardBorder} 1px, transparent 1px),
    linear-gradient(90deg, ${T.cardBorder} 1px, transparent 1px),
    radial-gradient(circle, rgba(196,116,138,0.18) 1px, transparent 1px)
  `,
  backgroundSize: '26px 26px, 26px 26px, 26px 26px',
  backgroundPosition: '0 0, 0 0, 13px 13px',
} as React.CSSProperties;

interface PhoneShellProps {
  children: ReactNode;
  label: string;
  time?: string;
  className?: string;
  scale?: number;
}

export default function PhoneShell({ children, label, time = '09:41', scale = 1 }: PhoneShellProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
      <div
        style={{
          width: 260 * scale,
          minHeight: 530 * scale,
          borderRadius: 36 * scale,
          border: `1px solid ${T.phoneBorder}`,
          background: T.phoneBg,
          backdropFilter: 'blur(22px) saturate(180%)',
          WebkitBackdropFilter: 'blur(22px) saturate(180%)',
          boxShadow: `0 48px 96px rgba(0,0,0,0.85), 0 0 80px rgba(139,58,84,0.18), inset 0 1px 0 ${T.shimmer}`,
          position: 'relative',
          overflow: 'hidden',
          flexShrink: 0,
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
        }}
      >
        {/* grid bg */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, opacity: 0.5, ...gridBg }} />

        {/* ambient glows */}
        <div style={{ position: 'absolute', top: -70, left: -70, width: 260, height: 260, borderRadius: '50%', background: `radial-gradient(circle, rgba(139,58,84,0.50), transparent 68%)`, pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ position: 'absolute', top: -40, right: -40, width: 180, height: 180, borderRadius: '50%', background: `radial-gradient(circle, rgba(201,168,124,0.18), transparent 65%)`, pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: 30, right: -40, width: 200, height: 200, borderRadius: '50%', background: `radial-gradient(circle, rgba(196,116,138,0.16), transparent 65%)`, pointerEvents: 'none', zIndex: 0 }} />

        {/* shimmer top edge */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent 5%, ${T.shimmer} 40%, rgba(232,196,208,0.42) 50%, ${T.shimmer} 60%, transparent 95%)`, zIndex: 3 }} />

        {/* status bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 18px 6px', position: 'relative', zIndex: 10 }}>
          <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, color: T.fog }}>{time}</span>
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: T.rose300 }} />
        </div>

        {/* content */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </div>
      </div>
      <span style={{ fontSize: 9, color: T.fogDim, letterSpacing: '0.14em', textTransform: 'uppercase', textAlign: 'center' }}>
        {label}
      </span>
    </div>
  );
}

// ── Reusable sub-components ───────────────────────────────────

export function NomaBubble({ children, agentTag }: { children: ReactNode; agentTag?: string }) {
  return (
    <div style={{
      maxWidth: '84%', padding: '9px 12px',
      background: T.msgNomaBg,
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      border: `1px solid ${T.cardBorder}`,
      borderRadius: 15, borderBottomLeftRadius: 3,
      fontSize: 11.5, color: T.fog, lineHeight: 1.55,
      alignSelf: 'flex-start',
      boxShadow: `0 4px 16px rgba(0,0,0,0.12), inset 0 1px 0 rgba(232,196,208,0.20)`,
    }}>
      {agentTag && (
        <div style={{ fontSize: 8.5, fontWeight: 600, color: T.rose300, letterSpacing: '0.4px', textTransform: 'uppercase', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 4 }}>
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M2 12h2M20 12h2"/></svg>
          {agentTag}
        </div>
      )}
      {children}
    </div>
  );
}

export function UserBubble({ children }: { children: ReactNode }) {
  return (
    <div style={{
      maxWidth: '80%', padding: '9px 12px',
      background: 'linear-gradient(135deg, rgba(139,58,84,0.36), rgba(92,30,50,0.26))',
      border: `1px solid ${T.borderHi}`,
      borderRadius: 15, borderBottomRightRadius: 3,
      fontSize: 11.5, color: T.text, alignSelf: 'flex-end',
    }}>
      {children}
    </div>
  );
}

export function GlassCard({ children, style }: { children: ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{
      background: T.cardBg,
      backdropFilter: 'blur(22px) saturate(180%)',
      WebkitBackdropFilter: 'blur(22px) saturate(180%)',
      border: `1px solid ${T.cardBorder}`,
      borderRadius: 13,
      position: 'relative', overflow: 'hidden',
      boxShadow: `0 8px 32px rgba(0,0,0,0.18), inset 0 1px 0 rgba(232,196,208,0.20)`,
      ...style,
    }}>
      {children}
    </div>
  );
}

export function TabBar({ active }: { active: 'home' | 'chat' | 'agents' | 'profile' }) {
  const tabs = [
    { id: 'home', label: 'Home', icon: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></> },
    { id: 'chat', label: 'Chat', icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/> },
    { id: 'agents', label: 'Agentes', icon: <><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></> },
    { id: 'profile', label: 'Perfil', icon: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></> },
  ] as const;

  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0, height: 54,
      background: T.tabBg,
      backdropFilter: 'blur(20px) saturate(200%)',
      WebkitBackdropFilter: 'blur(20px) saturate(200%)',
      borderTop: `1px solid ${T.cardBorder}`,
      boxShadow: `0 -1px 0 rgba(196,116,138,0.06)`,
      display: 'flex', alignItems: 'center', justifyContent: 'space-around',
      zIndex: 10,
    }}>
      {tabs.map(tab => {
        const isActive = tab.id === active;
        return (
          <div key={tab.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, flex: 1, opacity: isActive ? 1 : 0.30 }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={isActive ? T.rose300 : T.fog} strokeWidth="1.8" strokeLinecap="round">
              {tab.icon}
            </svg>
            <span style={{ fontSize: 8, fontWeight: 500, color: isActive ? T.rose300 : T.fog }}>{tab.label}</span>
          </div>
        );
      })}
    </div>
  );
}

export function NomaSvgLogo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200">
      <defs>
        <radialGradient id="nl-g" cx="32%" cy="28%" r="55%">
          <stop offset="0%" stopColor="rgba(139,58,84,0.62)" />
          <stop offset="100%" stopColor="rgba(13,10,14,0)" />
        </radialGradient>
        <linearGradient id="nl-n" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#F2D6DF" />
          <stop offset="40%" stopColor="#C4748A" />
          <stop offset="100%" stopColor="#8B3A54" />
        </linearGradient>
        <clipPath id="nl-cl"><rect width="200" height="200" rx="46" /></clipPath>
      </defs>
      <rect width="200" height="200" rx="46" fill="#1A0E15" />
      <rect width="200" height="200" rx="46" fill="url(#nl-g)" clipPath="url(#nl-cl)" />
      <text x="100" y="140" textAnchor="middle" fontFamily="Cormorant Garamond,serif" fontSize="128" fontWeight="600" fontStyle="italic" fill="url(#nl-n)">N</text>
      <rect width="200" height="200" rx="46" fill="none" stroke="rgba(196,116,138,0.22)" strokeWidth="1.5" />
    </svg>
  );
}

export function ActivePill({ label = 'ativo', gold = false }: { label?: string; gold?: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 3, background: gold ? 'rgba(201,168,124,0.07)' : T.chipBg, border: `1px solid ${gold ? 'rgba(201,168,124,0.18)' : T.chipBorder}`, borderRadius: 10, padding: '2px 7px', flexShrink: 0 }}>
      <div style={{ width: 4, height: 4, borderRadius: '50%', background: gold ? T.gold : T.rose300 }} />
      <span style={{ fontSize: 8, fontWeight: 600, color: gold ? T.gold : T.rose300, letterSpacing: '0.3px', textTransform: 'uppercase' }}>{label}</span>
    </div>
  );
}

export function LivePill() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4, background: T.iconBg, border: `1px solid ${T.chipBorder}`, borderRadius: 10, padding: '2px 8px' }}>
      <div style={{ width: 5, height: 5, borderRadius: '50%', background: T.rose300, animation: 'pulse 1.6s infinite' }} />
      <span style={{ fontSize: 8, fontWeight: 600, color: T.rose300, letterSpacing: '0.3px', textTransform: 'uppercase' }}>live</span>
    </div>
  );
}

export function AgIcon({ icon }: { icon: ReactNode }) {
  return (
    <div style={{ width: 30, height: 30, borderRadius: 9, background: T.iconBg, border: `1px solid ${T.cardBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={T.iconStroke} strokeWidth="1.8" strokeLinecap="round">
        {icon}
      </svg>
    </div>
  );
}
