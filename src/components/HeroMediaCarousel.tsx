import heroImagen from "@/assets/hero/hero-imagen.jpg";

export function HeroMediaCarousel() {
  return (
    <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg">
      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-3xl bg-charcoal shadow-card ring-1 ring-border">
        <img
          src={heroImagen}
          alt="Costillas de cerdo BBQ Don Bruno con papas y guacamole"
          loading="eager"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
