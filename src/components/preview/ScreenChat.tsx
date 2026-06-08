import PhoneShell, { T, NomaBubble, UserBubble, TabBar, LivePill } from './PhoneShell';

export default function ScreenChat() {
  return (
    <PhoneShell label="Chat · Noma + Agente" time="14:22">
      {/* chat header */}
      <div style={{
        background: T.tabBg,
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        borderBottom: `1px solid ${T.cardBorder}`,
        padding: '8px 13px',
        display: 'flex', alignItems: 'center', gap: 9,
        position: 'relative', zIndex: 5,
        boxShadow: `0 1px 0 rgba(196,116,138,0.06)`,
      }}>
        <div style={{ width: 32, height: 32, borderRadius: '50%', background: T.iconBg, border: `1.5px solid ${T.borderHi}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={T.rose300} strokeWidth="1.8" strokeLinecap="round">
            <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
          </svg>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 12.5, fontWeight: 600, color: T.text }}>Noma</div>
          <div style={{ fontSize: 9, color: T.rose300, display: 'flex', alignItems: 'center', gap: 4, marginTop: 1 }}>
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: T.rose300 }} />
            online · AutoNoma
          </div>
        </div>
        <LivePill />
      </div>

      {/* messages */}
      <div style={{ padding: '10px 12px 6px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <NomaBubble agentTag="Noma · AutoNoma">
          Oi Mari! O que a gente resolve hoje?
        </NomaBubble>

        <UserBubble>Preciso de salão amanhã à tarde, Vila Madalena</UserBubble>

        <NomaBubble agentTag="Noma Style ✦">
          <span>Pode deixar! 3 opções:</span>
          <br /><br />
          <strong style={{ color: T.text }}>Studio Donna</strong> · 4.9★ · R$90<br />
          14h · <strong style={{ color: T.rose300 }}>15h30</strong> · 17h
          <div style={{ marginTop: 7, display: 'inline-flex', alignItems: 'center', gap: 5, border: `1px solid ${T.chipBorder}`, borderRadius: 13, padding: '5px 10px', background: T.chipBg, fontSize: 10, color: T.rose300 }}>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Ver no mapa
          </div>
        </NomaBubble>

        <UserBubble>Quero às 15h30 no Studio Donna!</UserBubble>

        <NomaBubble agentTag="Noma Style ✦">
          <span style={{ color: T.text, fontWeight: 500 }}>Agendado!</span> Lembro às 13h30.<br />
          Rua Aspicuelta, 234 · 0,8km.
        </NomaBubble>

        {/* typing indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '7px 11px', background: T.cardBg, border: `1px solid ${T.cardBorder}`, borderRadius: 15, borderBottomLeftRadius: 3, alignSelf: 'flex-start' }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{ width: 5, height: 5, borderRadius: '50%', background: T.rose300, opacity: 0.8 }} />
          ))}
        </div>
      </div>

      {/* suggestion chips */}
      <div style={{ padding: '0 12px 4px', display: 'flex', gap: 5, overflow: 'hidden' }}>
        {['Salão', 'Consulta', 'Agenda', 'Sobrecarregada'].map(c => (
          <div key={c} style={{ border: `1px solid ${T.chipBorder}`, borderRadius: 18, padding: '4px 10px', fontSize: 9, color: T.rose300, background: T.chipBg, whiteSpace: 'nowrap' }}>{c}</div>
        ))}
      </div>

      {/* chat input */}
      <div style={{ margin: '0 12px 6px', border: `1px solid ${T.cardBorder}`, borderRadius: 22, background: T.inputBg, backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', padding: '8px 13px', fontSize: 11, color: T.fogDim, display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: `inset 0 1px 0 rgba(232,196,208,0.14)` }}>
        <span>Me conta...</span>
        <div style={{ width: 27, height: 27, borderRadius: '50%', background: 'linear-gradient(135deg, rgba(196,116,138,0.45), rgba(139,58,84,0.60))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
        </div>
      </div>

      <div style={{ height: 58 }} />
      <TabBar active="chat" />
    </PhoneShell>
  );
}
