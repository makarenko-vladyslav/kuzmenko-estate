"use client";
import { useLocale } from '@/lib/i18n';

interface Step {
  num: string;
  title: string;
  desc: string;
}

export default function Process() {
  const { t } = useLocale();
  const steps = t('process.steps') as Step[];

  return (
    <section id="process" className="py-12 md:py-20 lg:py-28 bg-bg-card relative overflow-hidden border-b border-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title block */}
        <div className="max-w-3xl mb-16">
          <span className="text-accent text-xs tracking-[0.25em] font-body uppercase block mb-4">
            {t('process.kicker')}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-primary font-bold leading-tight">
            {t('process.title')}
          </h2>
        </div>

        {/* Timed Step Blocks with minimal layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="border-t-2 border-primary/10 pt-6 flex flex-col justify-between h-full relative group hover:border-accent transition-colors duration-300">
              <div>
                <span className="block font-display text-5xl font-bold text-accent mb-4 transition-transform duration-500 group-hover:translate-x-2">
                  {step.num}
                </span>
                <h3 className="font-display text-xl sm:text-2xl text-primary font-bold mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-text-muted text-sm sm:text-base leading-relaxed">
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
