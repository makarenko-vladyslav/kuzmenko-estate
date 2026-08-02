
"use client";
import { useLocale } from '@/lib/i18n';

interface StatItem {
  value: string;
  label: string;
}

export default function StatsStrip() {
  const { t } = useLocale();
  const stats = t('stats') as StatItem[];

  return (
    <section className="relative z-20 bg-primary border-t border-b border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="font-display text-4xl sm:text-5xl font-bold text-accent mb-2 tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs tracking-wider text-white/60 font-body max-w-[200px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  