"use client";
import { useLocale } from '@/lib/i18n';

export default function Hero() {
  const { t } = useLocale();

  const formattedTitle = t('hero.title') as string;
  const parts = formattedTitle.split('*');

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* Background Media Stack (Layer 1) */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          poster={t('hero.posterUrl')}
          className="w-full h-full object-cover scale-[1.02]"
        >
          <source src={t('hero.videoUrl')} type="video/mp4" />
        </video>
        {/* Warm obsidian black tinted overlay scrim */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/60 to-primary/95 mix-blend-multiply" />

        {/* Technical blueprint CAD vector overlay */}
        <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-screen" aria-hidden="true">
          <svg className="w-full h-full text-white" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cad-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-15" />
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.25" className="opacity-10" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cad-grid)" />
            {/* Axis marks and architectural text markers */}
            <line x1="10%" y1="0" x2="10%" y2="100%" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 6" className="opacity-20 text-accent" />
            <line x1="90%" y1="0" x2="90%" y2="100%" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 6" className="opacity-20 text-accent" />
            <line x1="0" y1="35%" x2="100%" y2="35%" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 6" className="opacity-25 text-accent" />
            
            <circle cx="10%" cy="35%" r="4" fill="none" stroke="currentColor" className="opacity-40 text-accent" />
            <circle cx="90%" cy="35%" r="4" fill="none" stroke="currentColor" className="opacity-40 text-accent" />
            
            <text x="11%" y="34%" fill="currentColor" className="text-[9px] font-mono opacity-50 tracking-wider">A-1 / AXIS_09</text>
            <text x="81%" y="34%" fill="currentColor" className="text-[9px] font-mono opacity-50 tracking-wider">A-2 / ELEV_12.8m</text>
            <text x="11%" y="95%" fill="currentColor" className="text-[9px] font-mono opacity-30 tracking-widest hidden md:block">SCALE 1:250 / CAD SYSTEM AUTOMATION</text>
            <text x="91%" y="15%" fill="currentColor" className="text-[9px] font-mono opacity-30 tracking-widest hidden md:block" transform="rotate(90 91% 15%)">K-ESTATE REINFORCED SCHEME</text>
          </svg>
        </div>
      </div>

      {/* Giant Decorative Watermark Word Layer (Layer 2) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-1 overflow-hidden" aria-hidden="true">
        <span className="text-[18vw] font-display font-bold text-white/[0.02] tracking-[0.1em] uppercase leading-none whitespace-nowrap">
          ESTATE
        </span>
      </div>

      {/* Floating Rotating Text-only Seal/Badge (Layer 3) */}
      <div className="absolute top-28 right-8 z-20 hidden md:block select-none pointer-events-none" aria-hidden="true">
        <div className="relative w-28 h-28 flex items-center justify-center">
          <svg className="w-full h-full animate-seal-rotate" viewBox="0 0 100 100">
            <defs>
              <path id="seal-path" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
            </defs>
            <text fill="hsl(24 75% 50%)" className="font-body text-[6.5px] tracking-[0.16em] uppercase font-bold">
              <textPath href="#seal-path">
                * KUZMENKO ESTATE · АРХІТЕКТУРА ТА БУДІВНИЦТВО *
              </textPath>
            </text>
          </svg>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white mt-16 flex flex-col items-center w-full">
        
        {/* Editorial Subtitle Kicker (Layer 4) - Replaces pill container */}
        <div className="flex items-center justify-center gap-3 mb-6 select-none">
          <span className="h-[1px] w-8 bg-accent/50" />
          <span className="text-xs font-body tracking-[0.3em] text-accent uppercase font-bold">
            {t('hero.kicker')}
          </span>
          <span className="h-[1px] w-8 bg-accent/50" />
        </div>

        {/* Superbly Scaled Poster Heading (Layer 5) */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-[5rem] lg:text-[5.5rem] leading-[1.05] tracking-tight font-medium max-w-5xl text-balance">
          {parts.map((part, index) => 
            index % 2 === 1 ? (
              <em key={index} className="font-display italic text-accent font-normal block sm:inline"> {part} </em>
            ) : (
              part
            )
          )}
        </h1>

        {/* 1-2 Line Subheading (Layer 6) */}
        <p className="mt-6 text-base sm:text-lg font-body max-w-2xl text-white/70 leading-relaxed text-balance">
          {t('hero.description')}
        </p>

        {/* CTA Actions (Layer 7) */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a 
            href="#calculator" 
            className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white font-body text-xs uppercase tracking-widest font-semibold px-8 py-4 transition-all duration-200 shadow-lg text-glow"
          >
            Отримати розрахунок
          </a>
          <a 
            href="#gallery" 
            className="w-full sm:w-auto border border-white/20 hover:border-white/60 text-white font-body text-xs uppercase tracking-widest font-semibold px-8 py-4 transition-colors duration-200"
          >
            Дивитись проєкти
          </a>
        </div>

        {/* Two Small Flanking Mini-Copy Columns (Layer 8) */}
        <div className="hidden lg:grid grid-cols-2 gap-12 max-w-4xl w-full border-t border-white/10 mt-12 pt-6 text-left text-xs font-body text-white/50 leading-relaxed">
          <div>
            <span className="block text-accent uppercase tracking-wider font-bold mb-1">МАТЕРІАЛЬЯ ВІДПОВІДАЛЬНІСТЬ</span>
            <p>{t('hero.flankingLeft')}</p>
          </div>
          <div>
            <span className="block text-accent uppercase tracking-wider font-bold mb-1">ДИГІТАЛІЗАЦІЯ БУДІВНИЦТВА</span>
            <p>{t('hero.flankingRight')}</p>
          </div>
        </div>

        {/* 3-Item Meta Strip with Hairline Separators (Layer 9) */}
        <div className="max-w-4xl w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12 mt-12 py-3 border-y border-white/5 text-xs font-body text-white/60 tracking-wider">
          <span className="tabular-nums">{t('hero.metaHours')}</span>
          <span className="hidden sm:inline text-white/20">|</span>
          <span>{t('hero.metaAddress')}</span>
          <span className="hidden sm:inline text-white/20">|</span>
          <span className="tabular-nums">{t('hero.metaRating')}</span>
        </div>

        {/* Scroll Cue Indicator (Layer 10) */}
        <div className="mt-12 flex flex-col items-center gap-2">
          <span className="text-[9px] tracking-[0.3em] font-body text-white/40 uppercase">SCROLL</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent animate-[scroll-drift_2s_infinite_ease-in-out]"></div>
        </div>
      </div>
    </section>
  );
}
