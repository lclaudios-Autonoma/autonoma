import { ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface FloatProps {
  children: ReactNode;
  speed?: 'fast' | 'slow';
  className?: string;
  delay?: number;
}

export default function Float({ children, speed = 'fast', className, delay = 0 }: FloatProps) {
  return (
    <div
      className={cn(speed === 'fast' ? 'animate-float' : 'animate-float-slow', className)}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
