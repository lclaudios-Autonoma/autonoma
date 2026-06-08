import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0D0A0E',
        ink: '#110D14',
        surface: '#160F19',
        line: 'rgba(196,116,138,0.12)',
        muted: '#9E8A92',
        fog: '#C8BEC2',
        paper: '#F5F0F2',
        // ── Rose Mauve · AutoNoma Night Edition ──────
        noma: {
          50:  '#FBF0F3',
          100: '#F2D6DF',
          200: '#DFA8BC',
          300: '#C4748A',   // primary accent
          400: '#A5526A',
          500: '#8B3A54',
          600: '#6E2540',
          700: '#5C1E32',
          900: '#2A0F1A',
        },
        glass: {
          DEFAULT: 'rgba(20,14,20,0.55)',
          strong: 'rgba(28,18,28,0.72)',
          subtle: 'rgba(255,255,255,0.03)',
          border: 'rgba(196,116,138,0.14)',
          borderStrong: 'rgba(196,116,138,0.28)',
        },
        gold: '#C9A87C',
        terra: '#D4855A',
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Italiana', 'serif'],
        serif: ['Italiana', 'serif'],
        italic: ['"Crimson Pro"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Jost', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
        eyebrow: '0.22em',
      },
      boxShadow: {
        glass:
          '0 1px 0 rgba(232,196,208,0.06) inset, 0 30px 80px -24px rgba(0,0,0,0.65)',
        glow: '0 0 40px rgba(196,116,138,0.18)',
        glowStrong: '0 0 80px rgba(196,116,138,0.30)',
        card: '0 20px 60px -20px rgba(0,0,0,0.7)',
      },
      backgroundImage: {
        'glow-hero':
          'radial-gradient(ellipse 60% 55% at 70% 30%, rgba(196,116,138,0.18), transparent 60%), radial-gradient(ellipse 40% 40% at 15% 80%, rgba(201,168,124,0.10), transparent 70%)',
        'glow-soft':
          'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(196,116,138,0.12), transparent 70%)',
        'grain':
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(-6px) rotate(-0.3deg)' },
          '50%': { transform: 'translateY(6px) rotate(0.3deg)' },
        },
        floatSlow: {
          '0%,100%': { transform: 'translateY(-10px) rotate(0.5deg)' },
          '50%': { transform: 'translateY(10px) rotate(-0.5deg)' },
        },
        pulseGreen: {
          '0%,100%': { opacity: '0.6', boxShadow: '0 0 0 0 rgba(196,116,138,0.4)' },
          '50%': { opacity: '1', boxShadow: '0 0 0 8px rgba(196,116,138,0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bgPan: {
          '0%,100%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(-2%, 1%)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'floatSlow 11s ease-in-out infinite',
        'pulse-green': 'pulseGreen 2.4s ease-in-out infinite',
        shimmer: 'shimmer 2.4s linear infinite',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both',
        'bg-pan': 'bgPan 22s ease-in-out infinite',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      maxWidth: {
        content: '1240px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
