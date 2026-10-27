import { Play, Video } from "lucide-react";
import { VIDEOS, embedUrl, YT_ALLOW } from "@/lib/videos";

export function YouTubeShowcase() {
  return (
    <section id="galeria-videos" className="relative border-y border-border/60 bg-charcoal/30 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
              <Video className="h-3.5 w-3.5" />
              En video
            </span>
            <h2 className="mt-4 font-display text-3xl leading-[1.05] sm:text-4xl">
              Conoce más de <span className="text-gradient-fire">Don Bruno</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground sm:text-base">
            Reproduce nuestros videos oficiales y siente el ambiente de la casa.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {VIDEOS.map((video) => (
            <article
              key={video.id}
              className="overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition hover:border-primary/60"
            >
              <div className="relative aspect-video w-full bg-charcoal">
                <iframe
                  src={embedUrl(video.id)}
                  title={video.title}
                  loading="lazy"
                  allow={YT_ALLOW}
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
              <div className="flex items-start gap-3 p-4 sm:p-5">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-fire text-primary-foreground">
                  <Play className="h-4 w-4 fill-current" />
                </div>
                <div>
                  <h3 className="font-display text-lg leading-tight">{video.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{video.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
