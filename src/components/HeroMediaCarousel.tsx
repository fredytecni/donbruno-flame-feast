import * as React from "react";
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";

import h1 from "@/assets/hero/hero-1.mp4.asset.json";
import h1p from "@/assets/hero/hero-1-poster.jpg.asset.json";
import h2 from "@/assets/hero/hero-2.mp4.asset.json";
import h2p from "@/assets/hero/hero-2-poster.jpg.asset.json";

type Slide = { src: string; poster: string; alt: string };

const slides: Slide[] = [
  { src: h1.url, poster: h1p.url, alt: "Carnes y asados artesanales Don Bruno" },
  { src: h2.url, poster: h2p.url, alt: "Especialidades Don Bruno a la parrilla" },
];

export function HeroMediaCarousel() {
  const [index, setIndex] = React.useState(0);
  const [muted, setMuted] = React.useState(true);
  const videoRef = React.useRef<HTMLVideoElement | null>(null);

  const go = React.useCallback((dir: number) => {
    setIndex((i) => (i + dir + slides.length) % slides.length);
  }, []);

  const current = slides[index]!;

  React.useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = muted;
    void el.play().catch(() => {
      el.muted = true;
      setMuted(true);
      void el.play().catch(() => {});
    });
  }, [index, muted]);

  return (
    <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-charcoal shadow-card ring-1 ring-border sm:aspect-[3/4]">
        <video
          key={current.src}
          ref={videoRef}
          src={current.src}
          poster={current.poster}
          className="relative z-10 h-full w-full object-cover"
          muted={muted}
          playsInline
          autoPlay
          controls
          controlsList="nodownload"
          preload="metadata"
          onVolumeChange={(e) => setMuted(e.currentTarget.muted)}
          onCanPlay={(e) => void e.currentTarget.play().catch(() => {})}
          onEnded={() => go(1)}
        />

        <span className="pointer-events-none absolute left-4 top-4 z-20 inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-charcoal/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary backdrop-blur">
          En vivo desde la parrilla
        </span>

        <button
          type="button"
          onClick={() => setMuted((m) => !m)}
          aria-label={muted ? "Activar sonido" : "Silenciar"}
          className="absolute right-4 top-4 z-20 inline-flex h-9 items-center gap-1.5 rounded-full border border-primary/50 bg-charcoal/80 px-3 text-[11px] font-semibold uppercase tracking-wide text-primary backdrop-blur transition hover:bg-primary hover:text-charcoal"
        >
          {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          {muted ? "Sonido" : "Audio"}
        </button>

        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Video anterior"
          className="absolute left-2 top-1/2 z-20 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border/60 bg-charcoal/60 text-foreground backdrop-blur transition hover:border-primary hover:text-primary"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Siguiente video"
          className="absolute right-2 top-1/2 z-20 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border/60 bg-charcoal/60 text-foreground backdrop-blur transition hover:border-primary hover:text-primary"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="absolute bottom-16 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ir al video ${i + 1}`}
              className={
                "h-1.5 rounded-full transition-all " +
                (i === index ? "w-6 bg-gradient-fire" : "w-1.5 bg-foreground/40 hover:bg-foreground/70")
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
