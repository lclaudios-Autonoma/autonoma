import { useEffect, useRef, useState } from 'react';

// Detecta mobile uma única vez no mount (evita re-render)
const isMobile = typeof window !== 'undefined'
  ? window.matchMedia('(max-width: 767px)').matches
  : false;

export default function BackgroundFX() {
  const [y, setY] = useState(0);
  const rafRef = useRef(0);

  useEffect(() => {
    // Em mobile, o parallax causa jitter no iOS — manter y=0
    if (isMobile) return;

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => setY(window.scrollY));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-bg" />

      {/* Rose glow top-left */}
      <div
        className="absolute -top-1/4 -left-1/4 h-[80vh] w-[80vh] rounded-full opacity-[0.40] blur-[120px]"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(139,58,84,0.40), rgba(13,10,14,0) 65%)',
          transform: `translate3d(0, ${y * -0.08}px, 0)`,
        }}
      />
      {/* Rose-300 glow right */}
      <div
        className="absolute top-[35%] right-[-15%] h-[70vh] w-[70vh] rounded-full opacity-[0.30] blur-[140px]"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(196,116,138,0.28), rgba(13,10,14,0) 60%)',
          transform: `translate3d(0, ${y * 0.04}px, 0)`,
        }}
      />
      {/* Gold warm glow bottom */}
      <div
        className="absolute bottom-[-10%] left-[30%] h-[55vh] w-[55vh] rounded-full opacity-[0.25] blur-[160px]"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(201,168,124,0.30), rgba(13,10,14,0) 60%)',
          transform: `translate3d(0, ${y * -0.05}px, 0)`,
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.9  0 0 0 0 0.9  0 0 0 0 0.9  0 0 0 0.7 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          backgroundSize: '240px 240px',
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.55) 100%)',
        }}
      />

      <div
        className="absolute inset-x-0 top-0 h-[40vh] opacity-60"
        style={{
          background:
            'linear-gradient(180deg, rgba(139,58,84,0.08) 0%, rgba(13,10,14,0) 100%)',
        }}
      />
    </div>
  );
}
