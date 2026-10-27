import { useState } from "react";
import { VIDEOS, embedUrl, YT_ALLOW } from "@/lib/videos";

export function HeroMediaCarousel() {
  const [active, setActive] = useState(0);
  const video = VIDEOS[active];

  return (
    <div
      id="videos"
      className="w-full scroll-mt-24 overflow-hidden rounded-2xl border border-primary/30 bg-surface shadow-glow"
    >
      <div className="flex items-center justify-between gap-2 border-b border-border/60 px-4 py-3">
        <span className="font-display text-sm uppercase tracking-widest text-primary">
          Reproductor Oficial Don Bruno
        </span>
      </div>
      <div className="relative aspect-video w-full bg-charcoal">
        <iframe
          key={video.id}
          src={embedUrl(video.id)}
          title={video.title}
          allow={YT_ALLOW}
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="font-display text-lg leading-tight sm:text-xl">{video.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{video.description}</p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {VIDEOS.map((v, i) => (
            <button
              key={v.id}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              className={`rounded-xl border px-3 py-2 text-left text-xs font-semibold transition sm:text-sm ${
                i === active
                  ? "border-primary bg-gradient-fire text-primary-foreground"
                  : "border-border bg-surface-elevated text-foreground hover:border-primary/60"
              }`}
            >
              {v.tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
