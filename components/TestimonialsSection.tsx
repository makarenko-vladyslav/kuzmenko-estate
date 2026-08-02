"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';

interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
}

export default function TestimonialsSection() {
  const { t } = useLocale();
  const items = t('testimonials.items') as TestimonialItem[];
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto play logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <section className="py-24 bg-bg-light relative overflow-hidden border-b border-primary/5">
      
      {/* Structural decoration */}
      <div className="absolute right-1/4 top-0 w-[1px] h-full bg-primary/5 pointer-events-none z-0" />

      {/* Decorative watermark */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 watermark text-[18rem] opacity-20 select-none pointer-events-none z-0">
        TRUST
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs tracking-[0.3em] text-accent uppercase font-bold block">
            {t('testimonials.kicker')}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-primary">
            {t('testimonials.title')}
          </h2>
          <p className="text-text-muted font-body text-sm sm:text-base tracking-wider">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Block Container */}
        <div className="relative w-full max-w-4xl mx-auto bg-bg-card border border-primary/5 p-8 sm:p-12 shadow-2xl relative">
          
          {/* Giant quote mark decorator */}
          <div className="absolute top-4 left-6 font-display text-[9rem] text-accent select-none leading-none opacity-20 pointer-events-none">
            “
          </div>

          <div className="min-h-[250px] flex items-center relative z-10">
            {items.map((item, idx) => (
              idx === activeIndex && (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <blockquote className="font-display text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-primary leading-relaxed italic">
                    "{item.quote}"
                  </blockquote>
                  
                  <div className="border-t border-primary/10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <cite className="not-italic font-display font-bold text-lg text-primary block">
                        {item.name}
                      </cite>
                      <span className="text-xs text-text-muted font-body block mt-0.5">
                        {item.role}
                      </span>
                    </div>

                    {/* Attribution rating verification metadata */}
                    <div className="space-y-1 text-right">
                      <span className="text-[0.6rem] tracking-[0.25em] text-accent font-bold uppercase font-display block">
                        VERIFIED CLIENT PROJECT
                      </span>
                      <p className="text-[0.65rem] text-text-muted font-body">
                        Рейтинг 4.9/5 • Джерело Google Reviews
                      </p>
                    </div>

                  </div>
                </motion.div>
              )
            ))}
          </div>

          {/* Swipe Dot Indicators */}
          <div className="flex justify-center gap-3 pt-8 relative z-10">
            {items.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`h-2 transition-all duration-500 rounded-full ${
                  activeIndex === idx ? 'bg-accent w-10' : 'bg-primary/20 w-2'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
