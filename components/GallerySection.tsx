
"use client";
import { useLocale } from '@/lib/i18n';

export default function GallerySection() {
  const { t } = useLocale();

  // Premium structural architecture seeds
  const galleryImages = [
    "https://images.pexels.com/photos/28698339/pexels-photo-28698339.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
    "https://images.pexels.com/photos/14377337/abstract-architect-architectural-architecture-14377337.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
    "https://images.pexels.com/photos/7480741/pexels-photo-7480741.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
    "https://images.pexels.com/photos/28698339/pexels-photo-28698339.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
    "https://images.pexels.com/photos/14377337/abstract-architect-architectural-architecture-14377337.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
    "https://images.pexels.com/photos/7480741/pexels-photo-7480741.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600"
  ];

  return (
    <section id="portfolio" className="py-24 bg-bg-light relative overflow-hidden">
      
      {/* Decorative vertical line */}
      <div className="absolute top-0 left-1/2 w-[1px] h-full bg-primary/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs tracking-[0.3em] text-accent uppercase font-semibold">
            {t('gallery.kicker')}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-primary">
            {t('gallery.title')}
          </h2>
          <p className="text-text-muted font-body text-sm sm:text-base tracking-wider">
            {t('gallery.subtitle')}
          </p>
        </div>

        {/* 6 item Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="relative aspect-[4/3] bg-primary overflow-hidden shadow-lg group"
            >
              <img
                src={img}
                alt={`Kuzmenko Estate Portfolio ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Rich color overlay */}
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors duration-300" />
              
              {/* Simple subtle architectural layout overlay */}
              <div className="absolute inset-4 border border-white/10 pointer-events-none transition-all duration-300 group-hover:inset-3 group-hover:border-accent/40" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
  