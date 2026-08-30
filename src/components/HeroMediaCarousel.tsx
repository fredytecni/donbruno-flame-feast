import * as React from "react";
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from "lucide-react";

import v1 from "@/assets/media/video-01.mp4.asset.json";
import v1p from "@/assets/media/video-01-poster.jpg.asset.json";
import v2 from "@/assets/media/video-02.mp4.asset.json";
import v2p from "@/assets/media/video-02-poster.jpg.asset.json";
import v3 from "@/assets/media/video-03.mp4.asset.json";
import v3p from "@/assets/media/video-03-poster.jpg.asset.json";
import v4 from "@/assets/media/video-04.mp4.asset.json";
import v4p from "@/assets/media/video-04-poster.jpg.asset.json";
import v5 from "@/assets/media/video-05.mp4.asset.json";
import v5p from "@/assets/media/video-05-poster.jpg.asset.json";
import v6 from "@/assets/media/video-06.mp4.asset.json";
import v6p from "@/assets/media/video-06-poster.jpg.asset.json";
import v7 from "@/assets/media/video-07.mp4.asset.json";
import v7p from "@/assets/media/video-07-poster.jpg.asset.json";
import v8 from "@/assets/media/video-08.mp4.asset.json";
import v8p from "@/assets/media/video-08-poster.jpg.asset.json";
import f1 from "@/assets/media/foto-01.jpg.asset.json";
import f2 from "@/assets/media/foto-02.jpg.asset.json";
import f3 from "@/assets/media/foto-03.jpg.asset.json";
import f4 from "@/assets/media/foto-04.jpg.asset.json";
import f5 from "@/assets/media/foto-05.jpg.asset.json";

type Slide =
  | { type: "video"; src: string; poster: string; alt: string }
  | { type: "image"; src: string; alt: string };

const slides: Slide[] = [
  { type: "video", src: v1.url, poster: v1p.url, alt: "Asado artesanal de Don Bruno en la parrilla" },
  { type: "image", src: f2.url, alt: "Plato de costillas de cerdo con papas y guacamole" },
  { type: "video", src: v7.url, poster: v7p.url, alt: "Preparación de carnes ahumadas Don Bruno" },
  { type: "image", src: f3.url, alt: "Especialidad de la casa recién servida" },
  { type: "video", src: v3.url, poster: v3p.url, alt: "Chorizos y carnes en la parrilla Don Bruno" },
  { type: "image", src: f4.url, alt: "Hamburguesa artesanal Don Bruno" },
  { type: "video", src: v6.url, poster: v6p.url, alt: "Alas rellenas Don Bruno" },
  { type: "image", src: f5.url, alt: "Mixto de carnes Don Bruno" },
  { type: "video", src: v4.url, poster: v4p.url, alt: "Parrilla encendida en Don Bruno" },
  { type: "video", src: v8.url, poster: v8p.url, alt: "Domicilios de Comidas Rápidas Don Bruno" },
  { type: "video", src: v5.url, poster: v5p.url, alt: "Carnes ahumadas artesanales" },
  { type: "video", src: v2.url, poster: v2p.url, alt: "Asado gourmet Don Bruno" },
  { type: "image", src: f1.url, alt: "Comidas Rápidas Don Bruno" },
];

const IMAGE_MS = 4500;

export function HeroMediaCarousel() {
  const [index, setIndex] = React.useState(0);
  const [playing, setPlaying] = React.useState(true);
  const [muted, setMuted] = React.useState(true);
  const videoRef = React.useRef<HTMLVideoElement | null>(null);

  const go = React.useCallback((dir: number) => {
    setIndex((i) => (i + dir + slides.length) % slides.length);
  }, []);

  const current = slides[index]!;

  // auto-advance for images
  React.useEffect(() => {
    if (!playing || current.type !== "image") return;
    const t = window.setTimeout(() => go(1), IMAGE_MS);
    return () => window.clearTimeout(t);
  }, [index, playing, current.type, go]);

  // control video playback
  React.useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = muted;
    if (playing) {
      void el.play().catch(() => {
        // autoplay with sound can be blocked: fall back to muted
        el.muted = true;
        setMuted(true);
        void el.play().catch(() => {});
      });
    } else {
      el.pause();
    }
  }, [index, playing, muted]);

  return (
    <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-charcoal shadow-card ring-1 ring-border sm:aspect-[3/4]">
        {current.type === "video" ? (
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
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onCanPlay={(e) => { if (playing) void e.currentTarget.play().catch(() => {}); }}
            onEnded={() => go(1)}
          />
        ) : (
          <img
            key={current.src}
            src={current.src}
            alt={current.alt}
            className="h-full w-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
          />
        )}

        {current.type === "image" && (
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-charcoal/20" />
        )}

        <span className="absolute left-4 top-4 z-20 inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-charcoal/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary backdrop-blur">
          {current.type === "video" ? "En vivo desde la parrilla" : "Nuestros platos"}
        </span>

        <div className="absolute right-4 top-4 z-20 flex items-center gap-2">
          {current.type === "video" && (
            <button
              type="button"
              onClick={() => setMuted((m) => !m)}
              aria-label={muted ? "Activar sonido" : "Silenciar"}
              className="inline-flex h-9 items-center gap-1.5 rounded-full border border-primary/50 bg-charcoal/80 px-3 text-[11px] font-semibold uppercase tracking-wide text-primary backdrop-blur transition hover:bg-primary hover:text-charcoal"
            >
              {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              {muted ? "Sonido" : "Audio"}
            </button>
          )}
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Pausar galería" : "Reproducir galería"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-charcoal/70 text-foreground backdrop-blur transition hover:border-primary hover:text-primary"
          >
            {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
        </div>

        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Anterior"
          className="absolute left-2 top-1/2 z-20 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border/60 bg-charcoal/60 text-foreground backdrop-blur transition hover:border-primary hover:text-primary"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Siguiente"
          className="absolute right-2 top-1/2 z-20 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border/60 bg-charcoal/60 text-foreground backdrop-blur transition hover:border-primary hover:text-primary"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div
          className={
            "absolute left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5 " +
            (current.type === "video" ? "bottom-16" : "bottom-4")
          }
        >
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ir al medio ${i + 1}`}
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
