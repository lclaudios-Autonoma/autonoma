import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { mindMapBranches } from '../../data/hero';
import { Lang, useLang } from '../../i18n/LanguageContext';

const HUB_LABEL: Record<Lang, string> = {
  pt: 'Companheira · IA',
  en: 'Companion · AI',
};

const HUB_RADIUS = 28;
const CHIP_RADIUS = 48;
const CHIP_SPREAD_DEG = 30;

const deg2rad = (d: number) => (d * Math.PI) / 180;

function polar(angle: number, radius: number) {
  return {
    x: radius * Math.cos(deg2rad(angle)),
    y: -radius * Math.sin(deg2rad(angle)),
  };
}

function chipAngle(baseAngle: number, idx: number) {
  return baseAngle + (idx === 0 ? -CHIP_SPREAD_DEG / 2 : CHIP_SPREAD_DEG / 2);
}

type ChipState = {
  branchKey: string;
  idx: number;
  label: string;
  angle: number;
  vx: number;
  vy: number;
};

export default function ChaosToOrder() {
  const { lang } = useLang();
  const branches = mindMapBranches[lang];
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState({ w: 560, h: 560 });
  const [ordered, setOrdered] = useState(false);

  const initialChips = useMemo<ChipState[]>(() => {
    return branches.flatMap((b) =>
      b.chips.map((label, idx) => {
        const angle = chipAngle(b.angle, idx);
        const p = polar(angle, CHIP_RADIUS);
        return { branchKey: b.key, idx, label, angle, vx: p.x, vy: p.y };
      }),
    );
  }, [branches]);

  const [chips, setChips] = useState<ChipState[]>(initialChips);

  // Reposiciona/retraduz os chips se o idioma mudar antes do reveal.
  useEffect(() => {
    setChips(initialChips);
  }, [initialChips]);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const measure = () => {
      const rect = el.getBoundingClientRect();
      setSize({ w: rect.width, h: rect.height });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (reduce) {
      setOrdered(true);
      return;
    }
    const t = setTimeout(() => setOrdered(true), 2600);
    const onScroll = () => {
      if (window.scrollY > 60) setOrdered(true);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener('scroll', onScroll);
    };
  }, [reduce]);

  useEffect(() => {
    if (!ordered || reduce) return;
    const interval = setInterval(() => {
      setChips((prev) => {
        const pick = Math.floor(Math.random() * prev.length);
        const target = prev[pick];
        const branch = branches.find((b) => b.key === target.branchKey);
        if (!branch) return prev;
        const active = new Set(
          prev.filter((c) => c.branchKey === branch.key).map((c) => c.label),
        );
        const candidates = [...branch.chips, ...branch.pool].filter((x) => !active.has(x));
        if (!candidates.length) return prev;
        const nextLabel = candidates[Math.floor(Math.random() * candidates.length)];
        return prev.map((c, i) => (i === pick ? { ...c, label: nextLabel } : c));
      });
    }, 3600);
    return () => clearInterval(interval);
  }, [ordered, reduce, branches]);

  const scale = size.w / 100;

  return (
    <div
      ref={containerRef}
      className="relative mx-auto aspect-square w-full max-w-[540px] overflow-visible"
      aria-hidden
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="-50 -50 100 100"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <radialGradient id="lineHubGrad" cx="0" cy="0" r="34" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="rgba(196,116,138,0.85)" />
            <stop offset="55%" stopColor="rgba(196,116,138,0.45)" />
            <stop offset="100%" stopColor="rgba(196,116,138,0.1)" />
          </radialGradient>
          <radialGradient
            id="lineChipGrad"
            cx="0"
            cy="0"
            r="54"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="40%" stopColor="rgba(196,116,138,0.0)" />
            <stop offset="62%" stopColor="rgba(196,116,138,0.4)" />
            <stop offset="100%" stopColor="rgba(196,116,138,0.08)" />
          </radialGradient>
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.9" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {branches.map((b, i) => {
          const hp = polar(b.angle, HUB_RADIUS);
          return (
            <motion.line
              key={`hub-line-${b.key}`}
              x1={0}
              y1={0}
              x2={hp.x}
              y2={hp.y}
              stroke="url(#lineHubGrad)"
              strokeWidth={0.35}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.95 }}
              transition={{ duration: 0.9, delay: 0.2 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              filter="url(#softGlow)"
            />
          );
        })}

        {branches.flatMap((b, bi) =>
          b.chips.map((_, idx) => {
            const hp = polar(b.angle, HUB_RADIUS);
            const cp = polar(chipAngle(b.angle, idx), CHIP_RADIUS);
            return (
              <motion.line
                key={`chip-line-${b.key}-${idx}`}
                x1={hp.x}
                y1={hp.y}
                x2={cp.x}
                y2={cp.y}
                stroke="url(#lineChipGrad)"
                strokeWidth={0.22}
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.85 }}
                transition={{
                  duration: 0.7,
                  delay: 0.55 + bi * 0.05 + idx * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            );
          }),
        )}

        {!reduce &&
          branches.map((b, i) => {
            const hp = polar(b.angle, HUB_RADIUS);
            return (
              <motion.circle
                key={`pulse-${b.key}`}
                r={0.55}
                fill="#C4748A"
                initial={{ cx: 0, cy: 0, opacity: 0 }}
                animate={{
                  cx: [0, hp.x],
                  cy: [0, hp.y],
                  opacity: [0, 0.95, 0],
                }}
                transition={{
                  duration: 2.2,
                  delay: 1.2 + i * 0.35,
                  ease: 'easeOut',
                  repeat: Infinity,
                  repeatDelay: 3.4,
                }}
                style={{ filter: 'drop-shadow(0 0 1.6px rgba(196,116,138,0.9))' }}
              />
            );
          })}
      </svg>

      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2"
        style={{ x: '-50%', y: '-50%' }}
        initial={{ scale: 0.82, opacity: 0 }}
        animate={{ scale: ordered ? 1 : 0.9, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative">
          <div
            className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: 260,
              height: 260,
              background:
                'radial-gradient(circle, rgba(196,116,138,0.42) 0%, rgba(139,58,84,0.18) 38%, rgba(13,10,14,0) 72%)',
              filter: 'blur(6px)',
            }}
          />

          {!reduce && (
            <motion.div
              className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                width: 178,
                height: 178,
                background:
                  'conic-gradient(from 0deg, rgba(196,116,138,0.6), rgba(196,116,138,0) 30%, rgba(196,116,138,0.4) 55%, rgba(196,116,138,0) 82%, rgba(196,116,138,0.55))',
                WebkitMask: 'radial-gradient(circle, transparent 55%, #000 56%, #000 100%)',
                mask: 'radial-gradient(circle, transparent 55%, #000 56%, #000 100%)',
                filter: 'blur(0.6px)',
                opacity: 0.55,
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
            />
          )}

          <div
            className="relative flex h-[132px] w-[132px] items-center justify-center rounded-full border border-noma-300/35 backdrop-blur-2xl"
            style={{
              background:
                'linear-gradient(150deg, rgba(196,116,138,0.22) 0%, rgba(18,21,26,0.72) 48%, rgba(13,10,14,0.85) 100%)',
              boxShadow:
                '0 0 0 1px rgba(196,116,138,0.18) inset, 0 1px 0 rgba(255,255,255,0.08) inset, 0 0 80px rgba(196,116,138,0.35), 0 30px 60px -20px rgba(0,0,0,0.8)',
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-[3px] rounded-full"
              style={{
                background:
                  'radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.22), rgba(255,255,255,0) 50%)',
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-full"
              style={{
                background:
                  'radial-gradient(circle at 70% 90%, rgba(196,116,138,0.35), rgba(0,0,0,0) 55%)',
              }}
            />
            <div className="relative flex flex-col items-center text-center">
              <div className="font-display leading-none tracking-tight">
                <span className="text-[28px] text-paper">Auto</span>
                <span className="text-[28px] text-noma-300 green-glow-text">Noma</span>
              </div>
              <div className="mt-1.5 eyebrow-line text-[8.5px] text-noma-300/90">
                {HUB_LABEL[lang]}
              </div>
              {!reduce && (
                <motion.span
                  className="mt-2 inline-block h-[3px] w-6 rounded-full bg-noma-300/80"
                  animate={{ opacity: [0.35, 1, 0.35], scaleX: [0.6, 1, 0.6] }}
                  transition={{ duration: 2.4, ease: 'easeInOut', repeat: Infinity }}
                />
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {branches.map((b, i) => {
        const hp = polar(b.angle, HUB_RADIUS);
        return (
          <motion.div
            key={`hub-${b.key}`}
            className="pointer-events-none absolute left-1/2 top-1/2"
            style={{
              x: hp.x * scale,
              y: hp.y * scale,
            }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{
              opacity: 1,
              scale: reduce ? 1 : [1, 1.04, 1],
            }}
            transition={{
              opacity: { duration: 0.5, delay: 0.45 + i * 0.06 },
              scale: reduce
                ? { duration: 0.6, delay: 0.45 + i * 0.06 }
                : {
                    duration: 4.4,
                    delay: 1.2 + i * 0.3,
                    ease: 'easeInOut',
                    repeat: Infinity,
                  },
            }}
          >
            <div
              className="-translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border border-noma-300/32 px-3.5 py-1.5 backdrop-blur-xl"
              style={{
                background:
                  'linear-gradient(135deg, rgba(196,116,138,0.16) 0%, rgba(18,21,26,0.8) 65%, rgba(13,10,14,0.85) 100%)',
                boxShadow:
                  '0 1px 0 rgba(255,255,255,0.08) inset, 0 0 0 1px rgba(196,116,138,0.08) inset, 0 12px 30px -12px rgba(0,0,0,0.7), 0 0 22px rgba(196,116,138,0.18)',
              }}
            >
              <div className="flex items-center gap-2">
                <span className="text-[13px] leading-none">{b.icon}</span>
                <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-noma-100/95">
                  {b.label}
                </span>
              </div>
            </div>
          </motion.div>
        );
      })}

      {chips.map((chip, i) => {
        const cp = polar(chip.angle, CHIP_RADIUS);
        return (
          <motion.div
            key={`chip-${chip.branchKey}-${chip.idx}`}
            className="pointer-events-none absolute left-1/2 top-1/2"
            initial={{ opacity: 0, scale: 0.7, x: cp.x * scale, y: cp.y * scale }}
            animate={{
              opacity: 1,
              scale: 1,
              x: reduce
                ? cp.x * scale
                : [cp.x * scale, (cp.x + 0.6) * scale, (cp.x - 0.4) * scale, cp.x * scale],
              y: reduce
                ? cp.y * scale
                : [cp.y * scale, (cp.y - 0.5) * scale, (cp.y + 0.6) * scale, cp.y * scale],
            }}
            transition={{
              opacity: { duration: 0.5, delay: 0.9 + i * 0.04 },
              scale: { duration: 0.6, delay: 0.9 + i * 0.04, ease: [0.22, 1, 0.36, 1] },
              x: reduce
                ? { duration: 0 }
                : { duration: 7 + (i % 4), ease: 'easeInOut', repeat: Infinity },
              y: reduce
                ? { duration: 0 }
                : { duration: 8 + (i % 3), ease: 'easeInOut', repeat: Infinity },
            }}
          >
            <div
              className="-translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-white/12 px-3 py-1.5 backdrop-blur-xl"
              style={{
                background:
                  'linear-gradient(140deg, rgba(255,255,255,0.06) 0%, rgba(18,21,26,0.75) 55%, rgba(13,10,14,0.85) 100%)',
                boxShadow: ordered
                  ? '0 1px 0 rgba(255,255,255,0.06) inset, 0 0 0 1px rgba(196,116,138,0.12) inset, 0 10px 28px -12px rgba(0,0,0,0.75), 0 0 20px rgba(196,116,138,0.18)'
                  : '0 1px 0 rgba(255,255,255,0.05) inset, 0 10px 26px -14px rgba(0,0,0,0.65)',
              }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={chip.label}
                  initial={{ opacity: 0, filter: 'blur(3px)', y: 4 }}
                  animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                  exit={{ opacity: 0, filter: 'blur(3px)', y: -4 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block font-italic text-[11px] italic text-fog/90"
                >
                  {chip.label}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
