"use client";
import { useLocale } from '@/lib/i18n';

interface GalleryItem {
  title: string;
  location: string;
  category: string;
  imageUrl: string;
}

export default function PortfolioGallery() {
  const { t } = useLocale();
  const items = t('gallery.items') as GalleryItem[];

  return (
    <section id="gallery" className="py-12 md:py-20 lg:py-28 bg-bg-light relative overflow-hidden border-b border-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Intro */}
        <div className="max-w-3xl mb-16">
          <span className="text-accent text-xs tracking-[0.25em] font-body uppercase block mb-4">
            {t('gallery.kicker')}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-primary font-bold leading-tight">
            {t('gallery.title')}
          </h2>
        </div>

        {/* Selected Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="group bg-bg-card border border-primary/5 shadow-md overflow-hidden flex flex-col justify-between">
              {/* Image Frame */}
              <div className="relative overflow-hidden aspect-[4/3] bg-bg-light">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  loading="lazy"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Text Info Row */}
              <div className="p-6">
                <span className="block text-accent font-body text-xs uppercase tracking-wider mb-2">
                  {item.category}
                </span>
                <h3 className="font-display text-2xl text-primary font-bold mb-1">
                  {item.title}
                </h3>
                <span className="block text-text-muted font-body text-xs italic">
                  {item.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
