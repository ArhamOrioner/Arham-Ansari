import React from 'react';

type Props = {
  className?: string;
  children: React.ReactNode;
};

const SpotlightCard: React.FC<Props> = ({ className = '', children }) => {
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--mouse-x', `${x}px`);
    el.style.setProperty('--mouse-y', `${y}px`);
  };

  const handlePointerLeave = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    el.style.setProperty('--mouse-x', `50%`);
    el.style.setProperty('--mouse-y', `50%`);
  };

  return (
    <div
      className={`spotlight-card ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
