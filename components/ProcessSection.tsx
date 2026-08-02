
"use client";
import { useLocale } from '@/lib/i18n';

interface StepItem {
  num: string;
  title: string;
  desc: string;
}

export default function ProcessSection() {
  const { t } = useLocale();
  const steps = t('process.steps') as StepItem[];

  return (
    <section id="process" className="py-24 bg-primary text-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs tracking-[0.3em] text-accent uppercase font-semibold">
            {t('process.kicker')}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight leading-[1.1]">
            {t('process.title')}
          </h2>
          <p className="text-white/60 font-body text-sm sm:text-base tracking-wider">
            {t('process.subtitle')}
          </p>
        </div>

        {/* Timeline Rows Layout - strictly flush edges, no zigzags with voids */}
        <div className="space-y-0 divide-y divide-white/10 border-t border-b border-white/10">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-8 items-start hover:bg-white/5 transition-colors duration-200 px-4"
            >
              {/* Number Column */}
              <div className="lg:col-span-2">
                <span className="font-display text-2xl font-bold text-accent tracking-widest">
                  {step.num}
                </span>
              </div>

              {/* Title Column */}
              <div className="lg:col-span-4">
                <h3 className="font-display text-xl font-bold tracking-tight text-white">
                  {step.title}
                </h3>
              </div>

              {/* Description Column */}
              <div className="lg:col-span-6">
                <p className="text-xs leading-relaxed text-white/70 font-body">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
  