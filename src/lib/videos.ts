export type DonBrunoVideo = { id: string; tab: string; title: string; description: string };

export const VIDEOS: DonBrunoVideo[] = [
  {
    id: "VtVpFmyXFtw",
    tab: "🔥 Fritanga Fest",
    title: "Invitación Fritanga Fest - Plaza de las Cruces",
    description: "Don Bruno te invita a disfrutar del mejor sabor artesanal en la Plaza de Las Cruces.",
  },
  {
    id: "yAD_iAiljEA",
    tab: "📍 Cómo Llegar al Local",
    title: "Entrada Principal Plaza de Las Cruces y Picadas",
    description:
      "Recorrido desde la entrada de la plaza hasta nuestro punto de picadas, chorizos artesanales, pescuezo relleno y longaniza.",
  },
  {
    id: "u8VMaXKcsW4",
    tab: "🍖 Picadas y Comunidad",
    title: "Emprendimiento de Picadas en Las Cruces",
    description: "Agradecimiento a nuestros clientes y muestra de nuestros productos en la Plaza de Las Cruces.",
  },
  {
    id: "dpAZR65vIbE",
    tab: "✨ Sabor en Vivo",
    title: "Tradición y Ahumado Artesanal",
    description: "Así vivimos la pasión por el ahumado y la comida artesanal todos los días.",
  },
];

export const embedUrl = (id: string) => `https://www.youtube.com/embed/${id}?rel=0`;
export const YT_ALLOW =
  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
