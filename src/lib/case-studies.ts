export interface CaseStudy {
  slug: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  name: string;
  description: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "matess",
    logo: "matess.svg",
    logoWidth: 421,
    logoHeight: 106,
    name: "Matess",
    description: "5-ciferný online biznis skoro od nuly",
  },
  {
    slug: "jovitep",
    logo: "jovitep.svg",
    logoWidth: 197,
    logoHeight: 73,
    name: "Jovitep",
    description: "Vypínanie reklám, lebo toho bolo už moc veľa",
  },
  {
    slug: "offlandia",
    logo: "offlandia.webp",
    logoWidth: 246,
    logoHeight: 86,
    name: "Offlandia",
    description: "Otváranie novej prevádzky s 2-násobnou kapacitou",
  },
  {
    slug: "pokojne-plavanie",
    logo: "pokojne-plavanie.png",
    logoWidth: 244,
    logoHeight: 105,
    name: "Pokojné plávanie",
    description: "Naplnenie všetkých kurzov a otváranie nových!",
  },
  {
    slug: "sparklond",
    logo: "sparklond.svg",
    logoWidth: 193,
    logoHeight: 83,
    name: "Sparklond",
    description: "60+ nových absolventov po nečakaom jesennom výpadku",
  },
  {
    slug: "retro-burger-presov",
    logo: "retro.svg",
    logoWidth: 132,
    logoHeight: 132,
    name: "Retro burger Prešov",
    description: "Prevádzka vypredaná už o 17:00!",
  },
  {
    slug: "force8-michal-pataky",
    logo: "force8.svg",
    logoWidth: 111,
    logoHeight: 111,
    name: "Force8 - Michal Pataky",
    description: "50 high ticket leadov iba z jednej reklamy!",
  },
  {
    slug: "vycvikove-centrum-dobrovodsky",
    logo: "vycvikove-centrum.svg",
    logoWidth: 245,
    logoHeight: 123,
    name: "Výcvikové centrum Dobrovodský",
    description: "27x návratnosť na Google kampani",
  },
  {
    slug: "auto-pola",
    logo: "autopola.svg",
    logoWidth: 228,
    logoHeight: 69,
    name: "Auto Pola",
    description: "10€ za nového zákazníka.",
  },
  {
    slug: "apponio",
    logo: "apponio.svg",
    logoWidth: 137,
    logoHeight: 137,
    name: "Apponio",
    description:
      "110+ nových registrácií pre klienta, ktorý predtým reklamami len pálil peniaze",
  },
];

/** Only slugs with an actual /pripadove-studie/[slug] page built so far. */
export const LIVE_SLUGS = new Set([
  "matess",
  "jovitep",
  "offlandia",
  "pokojne-plavanie",
  "sparklond",
  "retro-burger-presov",
  "force8-michal-pataky",
  "vycvikove-centrum-dobrovodsky",
  "auto-pola",
  "apponio",
]);

export function caseStudyHref(slug: string): string {
  return LIVE_SLUGS.has(slug) ? `/pripadove-studie/${slug}` : "/pripadove-studie";
}
