import { createFileRoute } from "@tanstack/react-router";
import {
  Flame,
  Phone,
  MapPin,
  Instagram,
  MessageCircle,
  ShoppingBag,
  ChefHat,
  Truck,
  Sparkles,
  QrCode,
  ArrowRight,
  Star,
} from "lucide-react";

import { HeroMediaCarousel } from "@/components/HeroMediaCarousel";
import { YouTubeShowcase } from "@/components/YouTubeShowcase";
import logo from "@/assets/food/logo.jpg";
import qrPago from "@/assets/food/qr-pago.jpg";
import imgHamburguesaEspecial from "@/assets/food/hamburguesa-especial.jpg";
import imgHamburguesaTocineta from "@/assets/food/hamburguesa-tocineta.jpg";
import imgChorizos from "@/assets/food/chorizos.jpg";
import imgCostillaPapa from "@/assets/food/costilla-papa.jpg";
import imgMixto from "@/assets/food/mixto.jpg";
import imgAlaRellena from "@/assets/food/ala-rellena.jpg";
import imgAlaRellena2 from "@/assets/food/ala-rellena-2.jpg";
import imgCostillasPoster from "@/assets/food/costillas-poster.jpg";
import imgPavo from "@/assets/food/pavo-navidad.jpg";
import imgPernil from "@/assets/food/pernil-navidad.jpg";
import imgMuchacho from "@/assets/food/muchacho-navidad.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        property: "og:image",
        content:
          "https://id-preview--3e2ff9fa-7f88-4065-a055-ef374b4d4504.lovable.app/social-preview.jpg",
      },
    ],
  }),
  component: Landing,
});

const WHATSAPP_1 = "573102890506";
const WHATSAPP_2 = "573185230634";
const CATALOG_URL = "https://comidas-rapidas-don-bruno.callbell.shop/";
const waLink = (num: string, msg = "Hola Don Bruno, quiero hacer un pedido 🔥") =>
  `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;

type Item = { name: string; price: string; desc?: string; img?: string };
type Category = { title: string; tag: string; items: Item[] };

const categories: Category[] = [
  {
    tag: "Clásicos",
    title: "Hamburguesas & Perros",
    items: [
      { name: "Hamburguesa Sencilla", price: "10.000", desc: "Carne artesanal, queso y vegetales frescos.", img: imgHamburguesaTocineta },
      { name: "Hamburguesa Especial", price: "12.000", desc: "Carne artesanal, queso, vegetales, tocineta y jamón ahumado.", img: imgHamburguesaEspecial },
      { name: "Perro Americano Sencillo", price: "10.000", desc: "El clásico americano bien servido.", img: imgAlaRellena2 },
      { name: "Perro Americano con Tocineta", price: "12.000", desc: "Con tocineta crocante y salsas de la casa.", img: imgAlaRellena },
      { name: "Choriperro Artesanal", price: "12.000", desc: "Nuestro chorizo artesanal en pan tostado.", img: imgChorizos },
    ],
  },
  {
    tag: "Firma de la casa",
    title: "Especialidades & Mixtos",
    items: [
      { name: "Costilla de Cerdo + Papa + Guacamole", price: "20.000", desc: "Costilla ahumada lentamente. Nuestro plato bandera.", img: imgCostillaPapa },
      { name: "Mixto Costilla + Ala Rellena + Papa + Guacamole", price: "22.000", desc: "Doble proteína para los más hambrientos.", img: imgMixto },
      { name: "Mixto Costilla + Chorizo Don Bruno + Papa + Guacamole", price: "22.000", desc: "Costilla y chorizo artesanal en un mismo plato.", img: imgCostillasPoster },
    ],
  },
  {
    tag: "Artesanales",
    title: "Chorizos & Alas",
    items: [
      { name: "Chorizo Artesanal Don Bruno + Papa Francesa + Guacamole", price: "10.000", desc: "Receta familiar, sabor inconfundible.", img: imgChorizos },
      { name: "Chorizo Artesanal Don Bruno + Papa Salada + Guacamole", price: "7.000", desc: "El favorito para picar en cualquier momento.", img: imgChorizos },
      { name: "Alas Rellenas + Papa Francesa + Guacamole", price: "10.000", desc: "Alas deshuesadas rellenas de sabor.", img: imgAlaRellena },
    ],
  },
];

const navidad = [
  { name: "Lomo Ahumado", img: imgMuchacho },
  { name: "Pavo Relleno Artesanal", img: imgPavo },
  { name: "Pernil de Cerdo", img: imgPernil },
  { name: "Muchacho Relleno", img: imgMuchacho },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <YouTubeShowcase />
      <Nosotros />
      <Menu />
      <Navidad />
      <Pagos />
      <Footer />
    </div>
  );
}

/* ---------------- NAVBAR ---------------- */
function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-charcoal/80 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:flex sm:justify-between sm:px-6">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-xl bg-gradient-fire ring-1 ring-primary/40">
            <img src={logo} alt="Don Bruno" className="h-full w-full object-cover" />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-xl leading-none tracking-wide">
              DON BRUNO
            </span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Comidas Rápidas
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#nosotros" className="transition hover:text-primary">Nosotros</a>
          <a href="#videos" className="transition hover:text-primary">Videos</a>
          <a href="#menu" className="transition hover:text-primary">Menú</a>
          <a href="#navidad" className="transition hover:text-primary">Navidad</a>
          <a href="#pagos" className="transition hover:text-primary">Pagos</a>
          <a href="#contacto" className="transition hover:text-primary">Contacto</a>
        </nav>
        <a
          href={waLink(WHATSAPP_1)}
          target="_blank"
          rel="noreferrer"
          className="hidden shrink-0 items-center gap-2 rounded-full bg-gradient-fire px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition hover:brightness-110 sm:inline-flex"
        >
          <MessageCircle className="h-4 w-4" />
          Pedir ya
        </a>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* backdrop */}
      <div className="absolute inset-0 -z-10">
        <img
          src={imgCostillaPapa}
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-background/85 to-background" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:pt-24">
        <div className="flex flex-col justify-center">
          <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
            <Flame className="h-3.5 w-3.5" />
            15 años ahumando en Bogotá
          </span>

          <h1 className="font-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
            Comidas Rápidas
            <span className="mt-2 block text-gradient-fire">Don Bruno</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Sabor artesanal y <span className="text-foreground">15 años de tradición familiar</span> en
            carnes ahumadas y comidas rápidas en Bogotá...
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={CATALOG_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-fire px-6 py-3.5 font-semibold text-primary-foreground shadow-glow transition hover:brightness-110"
            >
              <ShoppingBag className="h-5 w-5" />
              Ver Catálogo Virtual
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href={waLink(WHATSAPP_1)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 bg-surface/60 px-6 py-3.5 font-semibold text-foreground backdrop-blur transition hover:border-primary hover:bg-surface"
            >
              <MessageCircle className="h-5 w-5 text-primary" />
              Hacer Pedido
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border/60 pt-6 text-sm">
            <Stat icon={<Flame className="h-4 w-4" />} label="Carnes ahumadas" value="Artesanales" />
            <Stat icon={<Truck className="h-4 w-4" />} label="Domicilios" value="Bogotá" />
            <Stat icon={<Star className="h-4 w-4" />} label="Tradición" value="15 años" />
          </div>
        </div>

        {/* Hero media carousel (videos + fotos) */}
        <div className="flex items-center justify-center">
          <HeroMediaCarousel />
        </div>

      </div>
    </section>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div>
      <div className="flex items-center gap-1.5 text-primary">{icon}</div>
      <p className="mt-1 font-display text-lg leading-none">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

/* ---------------- NOSOTROS ---------------- */
function Nosotros() {
  return (
    <section id="nosotros" className="relative py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-card ring-1 ring-border">
            <img src={logo} alt="Don Bruno productos cárnicos artesanales" className="w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-gradient-fire px-5 py-4 text-primary-foreground shadow-glow sm:block">
            <p className="font-display text-3xl leading-none">15</p>
            <p className="text-xs font-semibold uppercase tracking-widest">Años de sabor</p>
          </div>
        </div>

        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
            <ChefHat className="h-3.5 w-3.5 text-primary" />
            Sobre Nosotros
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl">
            Una familia, <span className="text-gradient-fire">un sabor</span>,<br />
            una tradición.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Somos una empresa familiar con <span className="text-foreground">15 años</span> dando a
            conocer productos cárnicos ahumados de excelente calidad y comidas rápidas premium en
            Bogotá.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Ofrecemos servicios especiales de <span className="text-foreground">catering</span> para
            tus reuniones familiares, empresariales, eventos y cenas de fin de año.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <Feature icon={<Flame />} title="Ahumado artesanal" desc="Recetas propias, cocción lenta." />
            <Feature icon={<Sparkles />} title="Calidad premium" desc="Ingredientes frescos y seleccionados." />
            <Feature icon={<Truck />} title="Domicilios en Bogotá" desc="Recibe tu pedido caliente." />
            <Feature icon={<ChefHat />} title="Catering para eventos" desc="Empresariales, familiares, fin de año." />
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex gap-3 rounded-xl border border-border bg-surface/60 p-4">
      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-fire text-primary-foreground [&>svg]:h-4 [&>svg]:w-4">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="font-semibold leading-tight">{title}</p>
        <p className="mt-0.5 text-sm text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}

/* ---------------- MENU ---------------- */
function Menu() {
  return (
    <section id="menu" className="relative border-y border-border/60 bg-surface/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
              <Flame className="h-3.5 w-3.5 text-primary" />
              Nuestro Menú
            </span>
            <h2 className="mt-4 font-display text-4xl leading-none sm:text-5xl">
              Sabor <span className="text-gradient-fire">artesanal</span> en cada bocado
            </h2>
          </div>
          <a
            href={CATALOG_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background/60 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"
          >
            Ver catálogo completo
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 space-y-16">
          {categories.map((cat) => (
            <div key={cat.title}>
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-primary">{cat.tag}</p>
                  <h3 className="mt-1 font-display text-2xl sm:text-3xl">{cat.title}</h3>
                </div>
                <div className="hidden h-px flex-1 bg-gradient-to-r from-border to-transparent sm:block" />
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {cat.items.map((item) => (
                  <MenuCard key={item.name} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuCard({ item }: { item: Item }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition hover:-translate-y-1 hover:border-primary/60">
      <div className="relative aspect-[4/3] overflow-hidden">
        {item.img && (
          <img
            src={item.img}
            alt={item.name}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
        <div className="absolute right-3 top-3 rounded-full bg-gradient-fire px-3 py-1 text-sm font-bold text-primary-foreground shadow-glow">
          ${item.price}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h4 className="font-display text-lg leading-tight">{item.name}</h4>
        {item.desc && (
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
        )}
        <a
          href={waLink(WHATSAPP_1, `Hola Don Bruno, quiero pedir: ${item.name}`)}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition hover:gap-2.5"
        >
          Pedir por WhatsApp
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

/* ---------------- NAVIDAD ---------------- */
function Navidad() {
  return (
    <section id="navidad" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 opacity-40">
        <img src={imgPavo} alt="" aria-hidden className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-secondary">
              <Sparkles className="h-3.5 w-3.5" />
              Temporada Navideña
            </span>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl">
              Cárnicos <span className="text-gradient-fire">especiales</span> para celebrar en familia
            </h2>
            <div className="mt-6 inline-flex items-baseline gap-3 rounded-2xl border border-primary/30 bg-charcoal/60 px-5 py-4 backdrop-blur">
              <span className="font-display text-4xl text-gradient-fire">$50.000</span>
              <span className="text-sm text-muted-foreground">/ libra</span>
            </div>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Piezas ahumadas artesanalmente, perfectas para tu cena de fin de año o eventos
              corporativos.
            </p>
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-primary/30 bg-primary/10 p-4 text-sm">
              <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-foreground">
                <span className="font-semibold text-primary">¡Salsa acompañante de regalo!</span>{" "}
                Precios especiales si deseas llevar la pieza entera (se calcula según su peso en
                libras).
              </p>
            </div>
            <a
              href={waLink(WHATSAPP_1, "Hola Don Bruno, quiero cotizar productos navideños 🎄")}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-fire px-6 py-3 font-semibold text-primary-foreground shadow-glow transition hover:brightness-110"
            >
              <MessageCircle className="h-5 w-5" />
              Cotizar por WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {navidad.map((n) => (
              <div
                key={n.name}
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface shadow-card"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={n.img}
                    alt={n.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-transparent p-4">
                  <p className="font-display text-lg leading-tight">{n.name}</p>
                  <p className="text-xs text-primary">$50.000 / libra</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PAGOS ---------------- */
function Pagos() {
  return (
    <section id="pagos" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-charcoal/70 p-6 shadow-card sm:p-10">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-fire opacity-20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-secondary opacity-20 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                <Truck className="h-3.5 w-3.5" />
                Solo Domicilios
              </span>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl">
                Ordena ya y paga <span className="text-gradient-fire">fácil</span>
              </h2>
              <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
                Disfruta de la comodidad de tu hogar. Recibimos pagos por billeteras digitales de
                forma rápida y segura.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <PayBadge label="Nequi" gradient="from-[oklch(0.55_0.25_340)] to-[oklch(0.45_0.28_320)]" />
                <PayBadge label="DaviPlata" gradient="from-[oklch(0.6_0.22_25)] to-[oklch(0.5_0.24_20)]" />
                <PayBadge label="Bre-B" gradient="from-primary to-secondary" />
                <PayBadge label="Efectivo" gradient="from-[oklch(0.35_0.02_60)] to-[oklch(0.25_0.02_60)]" />
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={waLink(WHATSAPP_1)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-fire px-6 py-3 font-semibold text-primary-foreground shadow-glow transition hover:brightness-110"
                >
                  <Phone className="h-4 w-4" />
                  310 289 0506
                </a>
                <a
                  href={waLink(WHATSAPP_2)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 bg-surface px-6 py-3 font-semibold text-foreground transition hover:border-primary"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  318 523 0634
                </a>
              </div>
            </div>

            {/* QR */}
            <div className="relative mx-auto w-full max-w-sm">
              <div className="rounded-3xl border border-primary/40 bg-gradient-to-br from-background to-surface p-5 shadow-glow">
                <div className="mb-3 flex items-center gap-2 text-primary">
                  <QrCode className="h-5 w-5" />
                  <p className="text-sm font-semibold uppercase tracking-widest">Paga con QR</p>
                </div>
                <div className="overflow-hidden rounded-2xl bg-background ring-1 ring-border">
                  <img src={qrPago} alt="Código QR de pago Don Bruno" className="w-full" />
                </div>
                <p className="mt-4 text-center text-sm text-muted-foreground">
                  Escanea este código QR desde tu celular para transferir de manera{" "}
                  <span className="text-foreground">rápida y segura</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PayBadge({ label, gradient }: { label: string; gradient: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-xl bg-gradient-to-br ${gradient} px-4 py-2 text-sm font-bold text-white shadow-card ring-1 ring-white/10`}
    >
      {label}
    </span>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer id="contacto" className="border-t border-border/60 bg-charcoal">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-xl bg-gradient-fire">
              <img src={logo} alt="Don Bruno" className="h-full w-full object-cover" />
            </span>
            <div>
              <p className="font-display text-2xl">DON BRUNO</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Comidas Rápidas
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm text-muted-foreground">
            15 años de tradición familiar en carnes ahumadas y comidas rápidas artesanales en
            Bogotá, Colombia.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full border border-border bg-surface px-3 py-1 text-muted-foreground">
              #productoscarnicos
            </span>
            <span className="rounded-full border border-border bg-surface px-3 py-1 text-muted-foreground">
              #donbruno
            </span>
          </div>
        </div>

        <div>
          <p className="font-display text-lg">Contacto</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={waLink(WHATSAPP_1)} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground transition hover:text-primary">
                <Phone className="h-4 w-4 text-primary" /> 310 289 0506
              </a>
            </li>
            <li>
              <a href={waLink(WHATSAPP_2)} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground transition hover:text-primary">
                <Phone className="h-4 w-4 text-primary" /> 318 523 0634
              </a>
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" /> Bogotá, Colombia
            </li>
            <li>
              <a
                href="https://instagram.com/rapibruno"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-muted-foreground transition hover:text-primary"
              >
                <Instagram className="h-4 w-4 text-primary" /> @rapibruno
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-display text-lg">Pedidos</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={CATALOG_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground transition hover:text-primary">
                <ShoppingBag className="h-4 w-4 text-primary" /> Catálogo Virtual
              </a>
            </li>
            <li>
              <a href={waLink(WHATSAPP_1)} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground transition hover:text-primary">
                <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <Truck className="h-4 w-4 text-primary" /> Solo Domicilios
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} Comidas Rápidas Don Bruno. Todos los derechos reservados.</p>
          <p>Hecho con <span className="text-secondary">🔥</span> en Bogotá</p>
        </div>
      </div>
    </footer>
  );
}
