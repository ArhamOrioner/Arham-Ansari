
import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
}

const SectionHeading: React.FC<Props> = ({ title, subtitle }) => (
  <div className="mb-16">
    <div className="flex flex-col gap-2">
      {subtitle && (
        <span className="text-blue-500 font-mono text-xs uppercase tracking-widest pl-1">
            // {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight">{title}</h2>
    </div>
    <div className="h-px w-full bg-gradient-to-r from-slate-800 via-slate-800 to-transparent mt-6"></div>
  </div>
);

export default SectionHeading;
