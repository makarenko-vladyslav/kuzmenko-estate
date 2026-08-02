
"use client";
import { useLocale } from '@/lib/i18n';

export default function LiveStreamSection() {
  const { t } = useLocale();

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs tracking-[0.3em] text-accent uppercase font-semibold">
              {t('liveStream.kicker')}
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight leading-[1.1]">
              {t('liveStream.title')}
            </h2>
            <p className="text-white/60 font-body text-sm sm:text-base tracking-wider">
              {t('liveStream.subtitle')}
            </p>
            
            <div className="pt-4 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
              <span className="text-xs tracking-widest text-accent uppercase font-bold">LIVE TELEMETRY STREAM</span>
            </div>
          </div>

          {/* Video Player Mockup Side */}
          <div className="lg:col-span-7 relative">
            <div className="aspect-video w-full bg-black overflow-hidden shadow-2xl relative border border-white/10">
              <video
                autoPlay
                muted
                loop
                playsInline
                poster="https://images.pexels.com/videos/14377337/abstract-architect-architectural-architecture-14377337.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
                className="w-full h-full object-cover opacity-80"
              >
                <source src="https://videos.pexels.com/video-files/14377337/14377337-hd_1920_1080_30fps.mp4" type="video/mp4" />
              </video>
              
              {/* CCTV UI overlay graphics */}
              <div className="absolute top-4 left-4 text-[0.65rem] font-mono text-white/80 bg-black/60 px-2 py-1 tracking-wider space-y-1">
                <p>CAM_03 [STEEL FRAME ATTACHMENT]</p>
                <p>REC 1080p @ 30fps</p>
              </div>

              <div className="absolute top-4 right-4 text-[0.65rem] font-mono text-white/80 bg-black/60 px-2 py-1 tracking-wider">
                15:23:41 DNIPRO
              </div>

              {/* Lens design element overlay */}
              <div className="absolute inset-0 border border-white/15 m-8 pointer-events-none flex items-center justify-center">
                <div className="w-4 h-[1px] bg-white/40" />
                <div className="h-4 w-[1px] bg-white/40" />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
  