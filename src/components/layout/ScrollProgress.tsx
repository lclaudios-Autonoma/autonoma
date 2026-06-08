import { useScrollProgress } from '../../hooks/useScrollProgress';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      aria-hidden
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] bg-white/5"
    >
      <div
        className="h-full origin-left"
        style={{
          width: `${progress * 100}%`,
          background:
            'linear-gradient(90deg, #5C1E32 0%, #C4748A 55%, #F2D6DF 100%)',
          boxShadow: '0 0 18px rgba(196,116,138,0.50)',
          transition: 'width 120ms linear',
        }}
      />
    </div>
  );
}
