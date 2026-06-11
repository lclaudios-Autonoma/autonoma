import PhoneShell, { T, NomaBubble } from './PhoneShell';
import { Lang, useLang } from '../../i18n/LanguageContext';

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

const S: Record<Lang, {
  s1Label: string;
  s1Step: string;
  s1MsgPre: string;
  s1MsgPost: string;
  s1Question: string;
  s1FieldLabel: string;
  s1Continue: string;
  s5Label: string;
  s5Step: string;
  s5Q1: string;
  s5Interests: { label: string; selected?: boolean }[];
  s5Q2Pre: string;
  s5Q2Note: string;
  s5Incomes: { label: string; selected?: boolean }[];
  s5Next: string;
  s8Label: string;
  s8Step: string;
  s8Q: string;
  s8Answer: string;
  s8ReplyHi: string;
  s8ReplyRest: string;
  s8Viral: string;
  s8Cta: string;
}> = {
  pt: {
    s1Label: 'Passo 1 · Nome social',
    s1Step: '1 de 8',
    s1MsgPre: 'Olá! Eu sou a ',
    s1MsgPost: ' — sua companheira da AutoNoma.',
    s1Question: 'Como posso te chamar?',
    s1FieldLabel: 'Nome ou apelido',
    s1Continue: 'Continuar →',
    s5Label: 'Passo 5 · Interesses',
    s5Step: '5 de 8 · Interesses',
    s5Q1: 'O que faz seus olhos brilharem?',
    s5Interests: [
      { label: 'Beleza & autocuidado', selected: true },
      { label: 'Exercício' },
      { label: 'Viagens', selected: true },
      { label: 'Leitura' },
      { label: 'Gastronomia', selected: true },
      { label: 'Arte' },
      { label: 'Meditação' },
    ],
    s5Q2Pre: 'Faixa de renda? ',
    s5Q2Note: '(para recomendar serviços certos)',
    s5Incomes: [
      { label: 'Até R$3k' },
      { label: 'R$3k–8k', selected: true },
      { label: 'R$8k–15k' },
      { label: 'R$15k+' },
    ],
    s5Next: 'Próximo →',
    s8Label: 'Conclusão · Ela me entendeu',
    s8Step: '8 de 8 · Quase lá',
    s8Q: 'Mari, você é incrível! De forma livre — o que você mais precisa na sua vida agora?',
    s8Answer: 'Quero ter mais tempo pra mim. Fico sobrecarregada com tudo...',
    s8ReplyHi: 'É exatamente pra isso que eu existo.',
    s8ReplyRest: 'Pode deixar comigo, Mari.',
    s8Viral: 'Convide uma amiga — ela vai adorar a Noma',
    s8Cta: 'Conhecer minha Noma →',
  },
  en: {
    s1Label: 'Step 1 · Preferred name',
    s1Step: '1 of 8',
    s1MsgPre: 'Hi! I’m ',
    s1MsgPost: ' — your AutoNoma companion.',
    s1Question: 'What should I call you?',
    s1FieldLabel: 'Name or nickname',
    s1Continue: 'Continue →',
    s5Label: 'Step 5 · Interests',
    s5Step: '5 of 8 · Interests',
    s5Q1: 'What makes your eyes light up?',
    s5Interests: [
      { label: 'Beauty & self-care', selected: true },
      { label: 'Exercise' },
      { label: 'Travel', selected: true },
      { label: 'Reading' },
      { label: 'Food', selected: true },
      { label: 'Art' },
      { label: 'Meditation' },
    ],
    s5Q2Pre: 'Income range? ',
    s5Q2Note: '(to recommend the right services)',
    s5Incomes: [
      { label: 'Up to R$3k' },
      { label: 'R$3k–8k', selected: true },
      { label: 'R$8k–15k' },
      { label: 'R$15k+' },
    ],
    s5Next: 'Next →',
    s8Label: 'Finish · She got me',
    s8Step: '8 of 8 · Almost there',
    s8Q: 'Mari, you’re amazing! In your own words — what do you need most in your life right now?',
    s8Answer: 'I want more time for myself. I get overwhelmed with everything...',
    s8ReplyHi: 'That’s exactly what I exist for.',
    s8ReplyRest: 'Leave it to me, Mari.',
    s8Viral: 'Invite a friend — she’ll love Noma',
    s8Cta: 'Meet my Noma →',
  },
};

// Step 1 — Nome social
export function ScreenOnboarding1() {
  const { lang } = useLang();
  const s = S[lang];
  return (
    <PhoneShell label={s.s1Label} time="09:41">
      <div style={{ padding: '4px 15px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <ProgressBar pct={12} step={s.s1Step} />
        <NomaBubble agentTag="Noma · AutoNoma">
          {s.s1MsgPre}<strong style={{ color: T.text }}>Noma</strong>{s.s1MsgPost}<br /><br />
          {s.s1Question}
        </NomaBubble>
        {/* input focused */}
        <div style={{ background: T.iconBg, backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: `1px solid ${T.borderHi}`, borderRadius: 12, padding: '9px 13px', display: 'flex', flexDirection: 'column', gap: 3, boxShadow: `inset 0 1px 0 ${T.shimmer}, 0 0 0 3px rgba(196,116,138,0.08)` }}>
          <div style={{ fontSize: 8.5, color: T.rose300, letterSpacing: '0.1px', textTransform: 'uppercase', fontWeight: 600 }}>{s.s1FieldLabel}</div>
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
          {s.s1Continue}
        </div>
      </div>
    </PhoneShell>
  );
}

// Step 5 — Interesses
export function ScreenOnboarding5() {
  const { lang } = useLang();
  const s = S[lang];
  return (
    <PhoneShell label={s.s5Label} time="09:42">
      <div style={{ padding: '4px 15px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <ProgressBar pct={62} step={s.s5Step} />
        <NomaBubble agentTag="Noma">
          {s.s5Q1}
        </NomaBubble>
        <div>
          {s.s5Interests.map((c) => (
            <Chip key={c.label} label={c.label} selected={c.selected} />
          ))}
        </div>
        <NomaBubble agentTag="Noma">
          {s.s5Q2Pre}<span style={{ color: T.fog }}>{s.s5Q2Note}</span>
        </NomaBubble>
        <div>
          {s.s5Incomes.map((c) => (
            <Chip key={c.label} label={c.label} selected={c.selected} />
          ))}
        </div>
        <div style={{ background: `linear-gradient(135deg, ${T.rose700}, ${T.rose500})`, borderRadius: 12, padding: '12px', textAlign: 'center', fontSize: 12.5, fontWeight: 600, color: '#fff' }}>
          {s.s5Next}
        </div>
      </div>
    </PhoneShell>
  );
}

// Step 8 — Conclusão
export function ScreenOnboarding8() {
  const { lang } = useLang();
  const s = S[lang];
  return (
    <PhoneShell label={s.s8Label} time="09:44">
      <div style={{ padding: '4px 15px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <ProgressBar pct={100} step={s.s8Step} />
        <NomaBubble agentTag="Noma">
          {s.s8Q}
        </NomaBubble>
        {/* free text */}
        <div style={{ background: T.inputBg, border: `1px solid ${T.borderHi}`, borderRadius: 12, padding: '10px 13px', minHeight: 70 }}>
          <div style={{ fontSize: 11.5, color: T.text, lineHeight: 1.6 }}>
            {s.s8Answer}<span style={{ borderRight: `2px solid ${T.rose300}` }}> </span>
          </div>
        </div>
        {/* Noma response — the "ela me entendeu" moment */}
        <NomaBubble agentTag="Noma">
          <span style={{ color: T.text, fontWeight: 500 }}>{s.s8ReplyHi}</span><br />
          {s.s8ReplyRest}
        </NomaBubble>
        {/* viral hook chip */}
        <div style={{ background: 'rgba(201,168,124,0.07)', border: `1px solid rgba(201,168,124,0.22)`, borderRadius: 12, padding: '9px 13px', display: 'flex', alignItems: 'center', gap: 8 }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.8" strokeLinecap="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          <div style={{ fontSize: 10, color: T.gold, lineHeight: 1.5 }}>{s.s8Viral}</div>
        </div>
        <div style={{ background: `linear-gradient(135deg, ${T.rose700}, ${T.rose500})`, borderRadius: 12, padding: '12px', textAlign: 'center', fontSize: 12.5, fontWeight: 600, color: '#fff' }}>
          {s.s8Cta}
        </div>
      </div>
    </PhoneShell>
  );
}
