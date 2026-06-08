import PhoneShell, { T, NomaBubble } from './PhoneShell';

function ProgressBar({ pct, step }: { pct: number; step: string }) {
  return (
    <>
      <div style={{ height: 2, background: T.inputBg, margin: '0 0 2px', borderRadius: 2, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${pct}%`, background: `linear-gradient(90deg, ${T.rose600}, ${T.rose300})`, borderRadius: 2 }} />
      </div>
      <div style={{ fontSize: 8.5, color: T.fogDim, textAlign: 'right', paddingBottom: 2 }}>{step}</div>
    </>
  );
}

function Chip({ label, selected }: { label: string; selected?: boolean }) {
  return (
    <div style={{ border: `1px solid ${selected ? T.borderHi : T.chipBorder}`, borderRadius: 20, padding: '5px 13px', fontSize: 10.5, color: selected ? T.rose300 : T.text2, background: selected ? T.iconBg : T.surface, display: 'inline-block', margin: '3px' }}>
      {label}
    </div>
  );
}

// Step 1 — Nome social
export function ScreenOnboarding1() {
  return (
    <PhoneShell label="Passo 1 · Nome social" time="09:41">
      <div style={{ padding: '4px 15px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <ProgressBar pct={12} step="1 de 8" />
        <NomaBubble agentTag="Noma · AutoNoma">
          Olá! Eu sou a <strong style={{ color: T.text }}>Noma</strong> — sua companheira da AutoNoma.<br /><br />
          Como posso te chamar?
        </NomaBubble>
        {/* input focused */}
        <div style={{ background: T.iconBg, backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: `1px solid ${T.borderHi}`, borderRadius: 12, padding: '9px 13px', display: 'flex', flexDirection: 'column', gap: 3, boxShadow: `inset 0 1px 0 ${T.shimmer}, 0 0 0 3px rgba(196,116,138,0.08)` }}>
          <div style={{ fontSize: 8.5, color: T.rose300, letterSpacing: '0.1px', textTransform: 'uppercase', fontWeight: 600 }}>Nome ou apelido</div>
          <div style={{ fontSize: 14, color: T.text, fontWeight: 500 }}>
            Mari<span style={{ borderRight: `2px solid ${T.rose300}`, paddingRight: 1 }}> </span>
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap' as const }}>
          <Chip label="Marina" />
          <Chip label="Mari ✓" selected />
          <Chip label="Mah" />
        </div>
        <div style={{ background: `linear-gradient(135deg, ${T.rose700}, ${T.rose500})`, border: `1px solid rgba(196,116,138,0.35)`, borderRadius: 12, padding: '12px', textAlign: 'center', fontSize: 12.5, fontWeight: 600, color: '#fff' }}>
          Continuar →
        </div>
      </div>
    </PhoneShell>
  );
}

// Step 5 — Interesses
export function ScreenOnboarding5() {
  return (
    <PhoneShell label="Passo 5 · Interesses" time="09:42">
      <div style={{ padding: '4px 15px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <ProgressBar pct={62} step="5 de 8 · Interesses" />
        <NomaBubble agentTag="Noma">
          O que faz seus olhos brilharem?
        </NomaBubble>
        <div>
          <Chip label="Beleza & autocuidado" selected />
          <Chip label="Exercício" />
          <Chip label="Viagens" selected />
          <Chip label="Leitura" />
          <Chip label="Gastronomia" selected />
          <Chip label="Arte" />
          <Chip label="Meditação" />
        </div>
        <NomaBubble agentTag="Noma">
          Faixa de renda? <span style={{ color: T.fog }}>(para recomendar serviços certos)</span>
        </NomaBubble>
        <div>
          <Chip label="Até R$3k" />
          <Chip label="R$3k–8k" selected />
          <Chip label="R$8k–15k" />
          <Chip label="R$15k+" />
        </div>
        <div style={{ background: `linear-gradient(135deg, ${T.rose700}, ${T.rose500})`, borderRadius: 12, padding: '12px', textAlign: 'center', fontSize: 12.5, fontWeight: 600, color: '#fff' }}>
          Próximo →
        </div>
      </div>
    </PhoneShell>
  );
}

// Step 8 — Conclusão
export function ScreenOnboarding8() {
  return (
    <PhoneShell label="Conclusão · Ela me entendeu" time="09:44">
      <div style={{ padding: '4px 15px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <ProgressBar pct={100} step="8 de 8 · Quase lá" />
        <NomaBubble agentTag="Noma">
          Mari, você é incrível! De forma livre — o que você mais precisa na sua vida agora?
        </NomaBubble>
        {/* free text */}
        <div style={{ background: T.inputBg, border: `1px solid ${T.borderHi}`, borderRadius: 12, padding: '10px 13px', minHeight: 70 }}>
          <div style={{ fontSize: 11.5, color: T.text, lineHeight: 1.6 }}>
            Quero ter mais tempo pra mim. Fico sobrecarregada com tudo...<span style={{ borderRight: `2px solid ${T.rose300}` }}> </span>
          </div>
        </div>
        {/* Noma response — the "ela me entendeu" moment */}
        <NomaBubble agentTag="Noma">
          <span style={{ color: T.text, fontWeight: 500 }}>É exatamente pra isso que eu existo.</span><br />
          Pode deixar comigo, Mari.
        </NomaBubble>
        {/* viral hook chip */}
        <div style={{ background: 'rgba(201,168,124,0.07)', border: `1px solid rgba(201,168,124,0.22)`, borderRadius: 12, padding: '9px 13px', display: 'flex', alignItems: 'center', gap: 8 }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.8" strokeLinecap="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          <div style={{ fontSize: 10, color: T.gold, lineHeight: 1.5 }}>Convide uma amiga — ela vai adorar a Noma</div>
        </div>
        <div style={{ background: `linear-gradient(135deg, ${T.rose700}, ${T.rose500})`, borderRadius: 12, padding: '12px', textAlign: 'center', fontSize: 12.5, fontWeight: 600, color: '#fff' }}>
          Conhecer minha Noma →
        </div>
      </div>
    </PhoneShell>
  );
}
