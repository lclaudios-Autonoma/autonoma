import PhoneShell, { T, NomaSvgLogo } from './PhoneShell';
import { Lang, useLang } from '../../i18n/LanguageContext';

const S: Record<Lang, {
  label: string;
  tagline: string;
  pillars1: string;
  pillars2: string;
  ctaPrimary: string;
  ctaSecondary: string;
}> = {
  pt: {
    label: 'Splash · Entrada',
    tagline: 'companheira pessoal',
    pillars1: 'Beleza · Saúde · Agenda',
    pillars2: 'Cotidiano · Bem-estar',
    ctaPrimary: 'Começar agora',
    ctaSecondary: 'Já tenho acesso',
  },
  en: {
    label: 'Splash · Entry',
    tagline: 'personal companion',
    pillars1: 'Beauty · Health · Schedule',
    pillars2: 'Everyday life · Well-being',
    ctaPrimary: 'Start now',
    ctaSecondary: 'I already have access',
  },
};

export default function ScreenSplash() {
  const { lang } = useLang();
  const s = S[lang];
  return (
    <PhoneShell label={s.label} time="09:41">
      {/* splash bg gradients */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        background: `
          radial-gradient(ellipse at 30% 20%, rgba(139,58,84,0.55), transparent 52%),
          radial-gradient(ellipse at 72% 82%, rgba(196,116,138,0.20), transparent 48%),
          radial-gradient(ellipse at 80% 15%, rgba(201,168,124,0.10), transparent 45%)
        `,
      }} />

      {/* center content */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 380, position: 'relative', zIndex: 1, padding: '0 20px' }}>
        <NomaSvgLogo size={68} />
        <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 28, fontWeight: 600, color: T.text, letterSpacing: '-0.5px', marginTop: 14 }}>AutoNoma</div>
        <div style={{ fontSize: 9.5, fontWeight: 400, letterSpacing: '0.18em', textTransform: 'uppercase', color: T.fogDim, marginTop: 4 }}>{s.tagline}</div>
        <div style={{ width: 32, height: 1, background: `linear-gradient(90deg, transparent, ${T.rose300}, transparent)`, margin: '14px 0' }} />
        <div style={{ fontSize: 10, color: T.fogDim, textAlign: 'center', lineHeight: 1.8 }}>
          {s.pillars1}<br />{s.pillars2}
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: '0 18px 32px', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 9 }}>
        <div style={{ background: `linear-gradient(135deg, ${T.rose700}, ${T.rose500})`, border: `1px solid rgba(196,116,138,0.35)`, borderRadius: 13, padding: 13, textAlign: 'center', fontSize: 13, fontWeight: 600, color: '#fff' }}>
          {s.ctaPrimary}
        </div>
        <div style={{ border: `1px solid rgba(196,116,138,0.24)`, borderRadius: 13, padding: 11, textAlign: 'center', fontSize: 12, color: T.fog }}>
          {s.ctaSecondary}
        </div>
        <div style={{ textAlign: 'center', fontSize: 8.5, color: T.fogDim, letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 2 }}>
          Powered by Claude
        </div>
      </div>
    </PhoneShell>
  );
}
