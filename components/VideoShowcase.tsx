"use client";
import { useLocale } from '@/lib/i18n';

export default function VideoShowcase() {
  const { t } = useLocale();

  return (
    <section className="py-12 md:py-20 lg:py-28 bg-bg-light relative overflow-hidden border-b border-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Texts info */}
          <div className="lg:col-span-5">
            <span className="text-accent text-xs tracking-[0.25em] font-body uppercase block mb-4">
              {t('videoShowcase.kicker')}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-primary font-bold leading-tight mb-6">
              {t('videoShowcase.title')}
            </h2>
            <p className="font-body text-text-muted text-base sm:text-lg leading-relaxed">
              {t('videoShowcase.description')}
            </p>
          </div>

          {/* Beautiful styled video frame with loop */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden bg-primary shadow-xl border border-primary/5 aspect-video">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                poster={t('videoShowcase.posterUrl')}
                className="w-full h-full object-cover"
              >
                <source src={t('videoShowcase.videoUrl')} type="video/mp4" />
              </video>
              
              {/* Decorative Camera Feed Overlay Graphic */}
              <div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none">
                <div className="flex justify-between items-center text-white text-xs font-mono bg-black/40 px-3 py-1 backdrop-blur-sm self-start">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                    LIVE STREAM
                  </span>
                </div>
                <div className="text-white/70 text-[10px] font-mono bg-black/30 p-2 backdrop-blur-sm self-start">
                  CAM_02 / DNIPRO_VILLA_ESTATE_09
                </div>
              </div>
            </div>
            <span className="block font-body text-xs text-text-muted mt-2 text-right">
              {t('videoShowcase.label')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
