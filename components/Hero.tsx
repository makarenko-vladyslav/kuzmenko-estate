"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import { useRef } from 'react';

export default function Hero() {
  const { t } = useLocale();
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollY } = useScroll();
  const videoY = useTransform(scrollY, [0, 1000], [0, 250]);
  const opacityY = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section ref={heroRef} className="relative w-full h-screen overflow-hidden bg-primary flex flex-col justify-between pt-32 pb-12">
      
      {/* Background Loop Video */}
      <motion.div 
        style={{ y: videoY }} 
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/videos/28698339/pexels-photo-28698339.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
          className="object-cover w-full h-full scale-105 opacity-95"
        >
          <source src="https://videos.pexels.com/video-files/28698339/12454450_1280_720_50fps.mp4" type="video/mp4" />
        </video>
        {/* Dark rich bronze-tinted overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/60 to-primary/95 mix-blend-multiply" />
      </motion.div>

      {/* Decorative Watermark behind main content */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h2 className="font-display text-[22vw] text-accent/5 font-bold tracking-[0.1em] uppercase leading-none whitespace-nowrap select-none">
          ESTATE
        </h2>
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-6 w-full z-10 my-auto flex flex-col lg:grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column Text Block */}
        <motion.div style={{ opacity: opacityY }} className="lg:col-span-8 space-y-6">
          
          {/* Subtle elegant kicker with REAL meta */}
          <div className="inline-block border-l-2 border-accent pl-3">
            <p className="text-xs tracking-[0.3em] text-accent uppercase font-semibold">
              {t('hero.kicker')}
            </p>
          </div>

          {/* Elegant Display Large Heading with Cormorant font */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] text-balance">
            {t('hero.title').split(' ').map((word: string, i: number) => {
              if (i === 4 || i === 5) {
                return <span key={i} className="italic text-accent font-medium font-display block sm:inline">{word} </span>;
              }
              return <span key={i}>{word} </span>;
            })}
          </h1>

          {/* Informative Subtitle */}
          <p className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed tracking-wider max-w-2xl font-body">
            {t('hero.subtitle')}
          </p>

          {/* Interactive Actions CTA Pair */}
          <div className="flex flex-wrap items-center gap-6 pt-4">
            <a
              href="#calculator"
              className="bg-accent hover:bg-accent/90 text-white text-xs tracking-widest font-display py-4 px-10 transition-colors duration-300 text-center font-bold"
            >
              {t('hero.cta')}
            </a>
            
            <a
              href="#philosophy"
              className="group text-white text-xs tracking-widest font-display py-4 transition-all duration-300 flex items-center gap-2 hover:text-accent font-semibold"
            >
              <span>{t('hero.badge')}</span>
              <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">—&gt;</span>
            </a>
          </div>

        </motion.div>

        {/* Right Column: Mini-copy columns + Architectural Static Widget */}
        <div className="hidden lg:flex lg:col-span-4 flex-col justify-between h-full space-y-12 pl-8 border-l border-white/5">
          
          {/* Flanking Mini-copy Columns */}
          <div className="grid grid-cols-2 gap-6 text-[0.7rem] text-white/50 tracking-wider font-body leading-relaxed">
            <div className="space-y-2">
              <span className="text-[0.6rem] text-accent font-bold tracking-widest block">ЛОКАЛЬНЕ ОХОПЛЕННЯ</span>
              <p>Дніпро, Обухівка, Підгородне, Піщанка. Власний капітальний парк спецтехніки.</p>
            </div>
            <div className="space-y-2">
              <span className="text-[0.6rem] text-accent font-bold tracking-widest block">ФІКСОВАНИЙ КОШТОРИС</span>
              <p>Будь-які відхилення у витратах понад договір покриваються за наш рахунок.</p>
            </div>
          </div>

          {/* Minimal Coordinate Tracker & Structural Line-Art */}
          <div className="border border-white/10 p-6 space-y-4 bg-primary/40 backdrop-blur-sm">
            <div className="flex justify-between items-center text-[0.6rem] text-accent tracking-[0.2em] font-bold">
              <span>DNIPRO METROPOLIS</span>
              <span>COORD</span>
            </div>
            <div className="font-display text-lg font-bold text-white tracking-widest">
              48.4647° N, 35.0462° E
            </div>
            {/* Minimal Line Art Grid */}
            <div className="w-full h-12 relative overflow-hidden border-t border-dashed border-white/20 pt-2 flex items-center justify-between">
              <div className="text-[0.55rem] font-mono text-white/40">Z-PLANE SURVEY STATUS</div>
              <div className="flex gap-1">
                <span className="w-1 h-3 bg-accent/40" />
                <span className="w-1 h-5 bg-accent" />
                <span className="w-1 h-2 bg-accent/20" />
                <span className="w-1 h-4 bg-accent/60" />
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom section: Meta Strip + Base Ticker + Scroll Cue */}
      <div className="w-full z-10 space-y-6">
        
        {/* 3-Item Meta Strip */}
        <div className="max-w-7xl mx-auto px-6 border-t border-b border-white/5 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left text-xs tracking-widest text-white/60 font-body">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-ping" />
              <span>ПН — СБ: 09:00 — 19:00</span>
            </div>
            <div className="text-center">ДНІПРО, ВУЛ. АРХІТЕКТУРНА, 15</div>
            <div className="text-center md:text-right">РЕЙТИНГ 4.9/5 • GOOGLE MAPS</div>
          </div>
        </div>

        {/* Normal Flow Scroll Cue */}
        <div className="flex flex-col items-center gap-2 pointer-events-none pb-4">
          <span className="text-[0.55rem] tracking-[0.4em] text-white/35 uppercase">{t('hero.scroll')}</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-accent to-transparent" />
        </div>

      </div>

    </section>
  );
}