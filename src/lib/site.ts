export const site = {
  name: "Hollithron Advocates, P.C.",
  shortName: "Hollithron Advocates",
  tagline: "Keeping Families Together and Saving Vulnerable Lives",
  taglineEs: "Mantener Familias Unidas y Salvar Vidas Vulnerables",
  url: "https://hollithronadvocates.com",
  email: "matters@hollithronadvocates.com",
  phoneMain: "(303) 954-9989",
  phoneMainHref: "tel:+13039549989",
  phoneSpanish: "(720) 499-1097",
  phoneSpanishHref: "tel:+17204991097",
  fax: "(720) 242-7696",
  hours: "Monday–Friday, 8:00 AM–6:00 PM Mountain Time",
  hoursEs: "Lunes a viernes, 8:00 a. m. a 6:00 p. m., hora de las Montañas",
  hoursShort: "Mon–Fri 8:00 AM–6:00 PM MT",
  hoursShortEs: "Lun–Vie 8:00 a. m.–6:00 p. m. MT",
  consultationFee: "$200",
  address: {
    line1: "4155 E Jewell Ave., Suite 1004",
    city: "Denver",
    state: "Colorado",
    zip: "80222",
    country: "United States",
  },
  mapQuery: "4155 E Jewell Ave Suite 1004 Denver CO 80222",
  languages: ["English", "Spanish", "French", "Russian"],
} as const;

export function fullAddress() {
  const { line1, city, state, zip } = site.address;
  return `${line1}, ${city}, ${state} ${zip}`;
}

export function mapsUrl() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}`;
}

export function mapsEmbedUrl() {
  return `https://maps.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&z=16&output=embed`;
}

export type Locale = "en" | "es";

export const routes = {
  en: {
    home: "/",
    services: "/what-we-do",
    about: "/about",
    contact: "/contact",
    office: "/office",
  },
  es: {
    home: "/es",
    services: "/es/que-hacemos",
    about: "/es/nosotros",
    contact: "/es/contacto",
    office: "/es/oficina",
  },
} as const;

export function counterpartPath(pathname: string): string {
  const pairs: Array<[string, string]> = [
    [routes.en.services, routes.es.services],
    [routes.en.about, routes.es.about],
    [routes.en.contact, routes.es.contact],
    [routes.en.office, routes.es.office],
    [routes.en.home, routes.es.home],
  ];

  for (const [en, es] of pairs) {
    if (pathname === en || pathname === `${en}/`) return es;
    if (pathname === es || pathname === `${es}/`) return en;
  }

  return pathname.startsWith("/es") ? "/" : "/es";
}

export const nav = {
  en: [
    { href: routes.en.home, label: "Home" },
    { href: routes.en.services, label: "What We Do" },
    { href: routes.en.about, label: "About Us" },
    { href: routes.en.contact, label: "Contact" },
    { href: routes.en.office, label: "Office" },
  ],
  es: [
    { href: routes.es.home, label: "Inicio" },
    { href: routes.es.services, label: "Lo que hacemos" },
    { href: routes.es.about, label: "Nosotros" },
    { href: routes.es.contact, label: "Contacto" },
    { href: routes.es.office, label: "Oficina" },
  ],
} as const;
