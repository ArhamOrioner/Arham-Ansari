
import React, { useEffect, useState, useRef } from 'react';
import Navbar from './components/Navbar';
import SectionHeading from './components/SectionHeading';
import Reveal from './components/Reveal';
import SpotlightCard from './components/SpotlightCard';
import { PROJECTS, EXPERIENCE, SKILL_CATEGORIES, GITHUB_URL, LINKEDIN_URL, EMAIL, PROFILE_PIC_URL } from './constants';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Satellite, 
  Droplets, 
  Globe, 
  Navigation, 
  Send, 
  ClipboardCheck, 
  Zap,
  Server,
  Radio,
  Wifi,
  Cpu,
  Database,
  Layers,
  Radar
} from 'lucide-react';

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [copyStatus, setCopyStatus] = useState(false);
  const [ticker, setTicker] = useState("SYSTEM_NORMAL");
  const rafId = useRef<number | null>(null);
  
  // Spotlight effect logic
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = e.clientX;
    const y = e.clientY;

    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
    }

    rafId.current = requestAnimationFrame(() => {
      document.documentElement.style.setProperty('--cursor-x', `${x}px`);
      document.documentElement.style.setProperty('--cursor-y', `${y}px`);
    });
  };

  useEffect(() => {
    setIsVisible(true);
    const msgs = ["ORBIT_STABLE", "LINK_ACTIVE", "DATA_INGEST: 100%"];
    let i = 0;
    const interval = setInterval(() => {
        setTicker(msgs[i % msgs.length]);
        i++;
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2000);
  };

  return (
    <div className="min-h-screen selection:bg-blue-500/30 selection:text-blue-200" onMouseMove={handleMouseMove}>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 lg:px-12 pb-32">
        
        {/* Hero Section */}
        <section id="about" className="min-h-[95vh] flex items-center pt-24 relative">
          
          {/* Background Decor */}
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="w-full grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-center relative z-10">
            
            <div className={`space-y-10 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              
              {/* Mission Ticker */}
              <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-500 text-[10px] font-bold uppercase tracking-[0.2em] mono">{ticker}</span>
                <div className="h-3 w-px bg-slate-800"></div>
                <span className="text-slate-500 text-[10px] font-mono">LAT: 28.61° N</span>
              </div>
              
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold text-slate-100 leading-[0.95] tracking-tight">
                  Translating <br/>
                  <span className="text-slate-500">Satellite Bytes</span> <br/>
                  into <span className="text-flow">Actionable Insights.</span>
                </h1>
                <p className="text-lg text-slate-400 max-w-xl leading-relaxed font-light pl-1">
                  I architect <strong className="text-slate-200">GeoAI pipelines</strong> that ingest planetary-scale telemetry to predict flood risks, heat waves, and climate impact with millisecond precision.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#projects" className="group px-8 py-4 rounded-xl bg-slate-100 text-slate-950 font-bold transition-all hover:scale-[1.02] active:scale-95 flex items-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  View Deployments 
                  <Navigation className="w-4 h-4 group-hover:translate-x-1 transition-transform text-blue-600" />
                </a>
                <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="px-8 py-4 rounded-xl border border-slate-800 text-slate-400 font-medium hover:border-slate-600 hover:text-white transition-all flex items-center gap-3 bg-slate-900/30 backdrop-blur-sm">
                  <Github className="w-5 h-5" /> GitHub
                </a>
              </div>
            </div>

            {/* ORBITAL AVATAR SYSTEM */}
            <div className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              
              <div className="relative w-[340px] h-[340px] md:w-[420px] md:h-[420px] perspective-container">
                <div className="orbit-system">
                    
                    {/* Primary Orbit Ring (Blue) */}
                    <div className="absolute inset-0 rounded-full border border-blue-500/30 border-dashed orbit-ring-x">
                        
                        {/* Satellite 1 */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 satellite-counter-rot-x">
                            <div className="relative group/sat cursor-pointer">
                                <Satellite className="w-8 h-8 text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-slate-900/90 border border-blue-500/30 text-[9px] font-mono text-blue-300 whitespace-nowrap opacity-0 group-hover/sat:opacity-100 transition-opacity">
                                    SAT_01 // SCANNING
                                </div>
                            </div>
                        </div>

                        {/* Satellite 2 (Counter-position) */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 satellite-counter-rot-x">
                            <div className="relative group/sat cursor-pointer">
                                <div className="p-1.5 bg-slate-900 border border-blue-500/50 rounded-full">
                                    <Wifi className="w-4 h-4 text-blue-300" />
                                </div>
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-900/90 border border-blue-500/30 text-[9px] font-mono text-blue-300 whitespace-nowrap opacity-0 group-hover/sat:opacity-100 transition-opacity">
                                    RELAY_NODE_04
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Secondary Orbit Ring (Violet) */}
                    <div className="absolute inset-8 rounded-full border border-violet-500/20 orbit-ring-y">
                        {/* Satellite 3 (Polar Orbiter) */}
                        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 satellite-counter-rot-y">
                            <div className="relative group/sat cursor-pointer">
                                <Radar className="w-6 h-6 text-violet-400 drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
                                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 bg-slate-900/90 border border-violet-500/30 text-[9px] font-mono text-violet-300 whitespace-nowrap opacity-0 group-hover/sat:opacity-100 transition-opacity">
                                    POLAR_SENTINEL
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Central Profile Container */}
                    <div className="absolute inset-[60px] rounded-full bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 shadow-2xl overflow-hidden flex items-center justify-center central-station group">
                        
                        {/* Radar Sweep Effect */}
                        <div className="absolute inset-0 rounded-full radar-sweep opacity-30"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(transparent_30%,#030305_100%)] z-20"></div>
                        
                        {/* Image */}
                        <img 
                        src={PROFILE_PIC_URL} 
                        alt="Arham Ansari" 
                        className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 scale-110"
                        />
                        
                        {/* HUD Overlay */}
                        <div className="absolute inset-0 z-30 pointer-events-none border-[1px] border-white/5 rounded-full"></div>
                        <div className="absolute top-8 right-8 w-2 h-2 bg-red-500 rounded-full animate-ping z-30"></div>
                    </div>

                    {/* Holographic Grid Floor */}
                    <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)] [transform:rotateX(75deg)] -z-10 pointer-events-none">
                        <div className="w-full h-full" style={{ 
                            backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)', 
                            backgroundSize: '40px 40px' 
                        }}></div>
                    </div>

                </div>
                
                {/* Floating Status Tags */}
                <div className="absolute -right-8 top-16 bg-slate-900/80 backdrop-blur border border-slate-800 p-3 rounded-lg shadow-xl animate-bounce delay-700 hidden md:block z-40">
                    <div className="flex items-center gap-2 mb-1">
                        <Wifi className="w-3 h-3 text-emerald-400" />
                        <span className="text-[9px] font-bold text-slate-500">UPLINK</span>
                    </div>
                    <div className="text-xs text-slate-200 font-mono">STABLE</div>
                </div>

              </div>
            </div>
            
          </div>
        </section>

        {/* Deployments Section */}
        <section id="projects" className="py-32">
          <Reveal>
            <SectionHeading title="Satellite Deployments" subtitle="Operational Systems" />
          </Reveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, idx) => (
              <Reveal key={idx} delayMs={idx * 90}>
                <SpotlightCard className="rounded-2xl p-8 flex flex-col h-full group bg-slate-900/20">
                  <div className="mb-8 flex justify-between items-start">
                    <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800 text-blue-400 group-hover:text-white group-hover:bg-blue-600 transition-all shadow-[0_0_10px_rgba(59,130,246,0)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                      {idx === 0 ? <Droplets className="w-6 h-6" /> : idx === 1 ? <Zap className="w-6 h-6" /> : <Globe className="w-6 h-6" />}
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 border border-slate-800 px-2 py-1 rounded bg-slate-900/50">{project.period}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                    {project.description}
                  </p>

                  {project.metrics && (
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {project.metrics.map(m => (
                        <div key={m} className="bg-slate-900/40 border border-slate-800/50 rounded px-2 py-1.5 text-[10px] font-mono text-emerald-400/90 text-center">
                          {m}
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800/50 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-semibold text-slate-500 bg-slate-900/50 px-2 py-1 rounded hover:text-slate-300 transition-colors">#{tag}</span>
                    ))}
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Mission Log */}
        <section id="experience" className="py-32">
          <Reveal>
            <SectionHeading title="Mission Log" subtitle="Data Pipeline History" />
          </Reveal>
          
          <div className="relative space-y-16 pl-4 md:pl-0">
            {/* Central Bus Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-800/50 hidden md:block"></div>

            {EXPERIENCE.map((exp, idx) => (
              <Reveal key={idx} delayMs={idx * 110}>
              <div className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-start ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Node */}
                <div className="absolute left-[-4px] md:left-1/2 md:-ml-[6px] top-6 w-3 h-3 rounded-full bg-slate-950 border border-blue-500 z-10 shadow-[0_0_10px_rgba(59,130,246,0.4)] hidden md:block"></div>

                {/* Content Card */}
                <SpotlightCard className="w-full md:w-1/2 rounded-2xl p-8 group border-l-2 md:border-l border-l-blue-500/30 md:border-slate-800 hover:border-l-blue-500 transition-all bg-slate-900/10">
                  <div className="flex flex-col gap-1 mb-6">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-mono text-blue-400 tracking-wider bg-blue-500/5 px-2 py-1 rounded">{exp.period}</span>
                        <Radio className="w-4 h-4 text-slate-700 group-hover:text-blue-500 transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                    <span className="text-sm font-medium text-slate-500">{exp.company}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex gap-3 text-sm text-slate-400 leading-relaxed group/item">
                        <span className="text-slate-700 mt-1.5 text-[10px] group-hover/item:text-blue-500 transition-colors">➜</span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
                
                <div className="w-full md:w-1/2 hidden md:block"></div>
              </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* The Arsenal: Holographic Chips */}
        <section id="skills" className="py-32">
          <Reveal>
            <SectionHeading title="The Arsenal" subtitle="Technical Cartridges" />
          </Reveal>
          
          <div className="grid gap-12">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <Reveal key={idx} delayMs={idx * 90}>
              <div>
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                         {idx === 0 ? <Cpu className="w-5 h-5 text-blue-400" /> : 
                         idx === 1 ? <Layers className="w-5 h-5 text-emerald-400" /> :
                         idx === 2 ? <Satellite className="w-5 h-5 text-violet-400" /> :
                         <Database className="w-5 h-5 text-orange-400" />}
                    </div>
                    <h4 className="text-lg font-bold text-slate-200">{cat.category}</h4>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {cat.skills.map(skill => (
                    <div key={skill} className="group relative bg-slate-900/40 border border-slate-800 rounded-lg p-4 hover:border-blue-500/50 hover:bg-slate-900/80 transition-all cursor-default overflow-hidden">
                        {/* Chip Pattern Background */}
                        <div className="absolute inset-0 chip-pattern opacity-0 group-hover:opacity-10 transition-opacity"></div>
                        <div className="absolute top-0 right-0 p-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-400 group-hover:shadow-[0_0_8px_#3b82f6] transition-all"></div>
                        </div>
                        
                        <div className="relative z-10 flex flex-col gap-2">
                            <span className="text-[9px] text-slate-600 font-mono uppercase tracking-wider group-hover:text-blue-500/80 transition-colors">MOD_{skill.substring(0,3).toUpperCase()}</span>
                            <span className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">{skill}</span>
                        </div>
                        
                        {/* Decorative Lines */}
                        <div className="absolute bottom-2 right-2 flex gap-1">
                            <div className="w-1 h-3 bg-slate-800 group-hover:bg-blue-500/20"></div>
                            <div className="w-1 h-2 bg-slate-800 group-hover:bg-blue-500/20"></div>
                        </div>
                    </div>
                  ))}
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 mt-12">
          <Reveal>
            <SpotlightCard className="rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden bg-slate-900/20 border border-slate-800">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-lg bg-blue-500/5 blur-[100px] pointer-events-none"></div>
              
              <div className="relative z-10 space-y-8">
                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                  Ready to Decode the <br/>
                  <span className="text-blue-400">Planetary Signal?</span>
                </h2>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                  Open for collaboration on high-impact GeoAI, climate risk modeling, and satellite data engineering projects.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 pt-6">
                  <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full bg-slate-900 border border-slate-800 text-white font-medium hover:border-blue-500 transition-all flex items-center gap-2 group">
                    <Linkedin className="w-5 h-5 group-hover:text-blue-400" /> LinkedIn
                  </a>
                  <button onClick={() => window.location.href = `mailto:${EMAIL}`} className="px-8 py-4 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20">
                    <Send className="w-5 h-5" /> Send Transmission
                  </button>
                  <button onClick={copyEmail} className="px-8 py-4 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-emerald-500 transition-all flex items-center gap-2">
                    {copyStatus ? <ClipboardCheck className="w-5 h-5 text-emerald-500" /> : <Mail className="w-5 h-5" />} 
                    {copyStatus ? 'Copied' : 'Copy Email'}
                  </button>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        </section>

        <footer className="pt-24 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-600 text-xs font-mono border-t border-slate-800/50 mt-12">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500/20 border border-emerald-500/50"></span>
            <span>SYSTEM_ONLINE // V3.0</span>
          </div>
          <p>© 2025 Arham Ansari. Engineered for Earth.</p>
        </footer>

      </main>
    </div>
  );
};

export default App;
