
import React from 'react';
import { PROFILE_PIC_URL } from '../constants';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[5000] w-auto max-w-[90vw]">
      <div className="flex items-center gap-2 p-2 rounded-full bg-[#030305]/80 backdrop-blur-md border border-white/10 shadow-2xl">
        
        {/* Profile Pill */}
        <div className="flex items-center gap-3 pl-2 pr-4 py-1.5 rounded-full bg-white/5 border border-white/5 hover:border-white/10 transition-colors cursor-default">
          <img 
            src={PROFILE_PIC_URL} 
            alt="Profile" 
            className="w-8 h-8 rounded-full object-cover grayscale opacity-80"
          />
          <div className="flex flex-col leading-none">
            <span className="text-[10px] font-bold text-slate-200 tracking-wider">ARHAM ANSARI</span>
            <span className="text-[8px] font-mono text-blue-400">GEO_ARCHITECT</span>
          </div>
        </div>

        {/* Links Pill */}
        <div className="hidden md:flex items-center px-4 gap-6">
            <a href="#about" className="text-xs font-medium text-slate-400 hover:text-white transition-colors">Init</a>
            <a href="#projects" className="text-xs font-medium text-slate-400 hover:text-white transition-colors">Deployments</a>
            <a href="#experience" className="text-xs font-medium text-slate-400 hover:text-white transition-colors">Logs</a>
            <a href="#skills" className="text-xs font-medium text-slate-400 hover:text-white transition-colors">Arsenal</a>
        </div>

        {/* Action Pill */}
        <a 
          href="#contact" 
          className="ml-2 px-6 py-2.5 rounded-full bg-slate-100 text-slate-950 text-xs font-bold hover:bg-white transition-all active:scale-95"
        >
          Connect
        </a>

      </div>
    </nav>
  );
};

export default Navbar;
