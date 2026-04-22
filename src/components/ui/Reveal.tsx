import { motion, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';
import { fadeUp, viewportOnce } from '../../lib/motion';

interface RevealProps extends MotionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'header' | 'li';
}

export default function Reveal({
  children,
  delay = 0,
  className,
  as = 'div',
  ...rest
}: RevealProps) {
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ delay }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}
