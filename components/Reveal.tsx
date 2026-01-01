import React, { type CSSProperties } from 'react';
import useInView from '../hooks/useInView';

type Props = {
  className?: string;
  children: React.ReactNode;
  delayMs?: number;
};

const Reveal: React.FC<Props> = ({ className = '', children, delayMs = 0 }) => {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.12, once: true });

  const style =
    delayMs > 0
      ? ({ ['--reveal-delay' as unknown as keyof CSSProperties]: `${delayMs}ms` } as CSSProperties)
      : undefined;

  return (
    <div ref={ref} className={`reveal ${inView ? 'reveal--in' : ''} ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Reveal;
