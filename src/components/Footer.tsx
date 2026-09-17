"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { chrome } from "@/lib/copy";
import { fullAddress, mapsUrl, nav, routes, site, type Locale } from "@/lib/site";
import { Logo } from "./Logo";

function localeFromPath(pathname: string): Locale {
  return pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";
}

export function Footer() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const t = chrome[locale];
  const items = nav[locale];

  return (
    <footer className="red-wash mt-auto text-white">
      <div className="shell grid gap-12 py-16 md:grid-cols-[0.9fr_0.8fr_1.1fr] lg:py-20">
        <div className="space-y-6">
          <Logo href={routes[locale].home} compact />
          <p className="max-w-sm text-[0.95rem] leading-7 text-white/60">
            {locale === "es" ? site.taglineEs : site.tagline}
          </p>
        </div>

        <div>
          <ul className="space-y-1">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-10 items-center text-[0.95rem] text-white/75 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3 text-[0.95rem] leading-7 text-white/80">
          <p>
            <a href={mapsUrl()} className="hover:text-white">
              {fullAddress()}
            </a>
          </p>
          <p>
            <a href={site.phoneMainHref} className="hover:text-white">
              {site.phoneMain}
            </a>
            <span className="text-white/40"> · </span>
            <a href={site.phoneSpanishHref} className="hover:text-white">
              Español {site.phoneSpanish}
            </a>
          </p>
          <p>
            <a href={`mailto:${site.email}`} className="hover:text-white">
              {site.email}
            </a>
          </p>
          <p className="text-white/55">{locale === "es" ? site.hoursEs : site.hours}</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="shell space-y-3 py-6 text-xs leading-5 text-white/45">
          <p>{t.disclaimer}</p>
          <p>{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
