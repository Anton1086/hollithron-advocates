import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/what-we-do",
    "/about",
    "/contact",
    "/office",
    "/es",
    "/es/que-hacemos",
    "/es/nosotros",
    "/es/contacto",
    "/es/oficina",
  ];

  return pages.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" || path === "/es" ? 1 : 0.7,
  }));
}
