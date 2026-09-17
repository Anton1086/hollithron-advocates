"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { chrome } from "@/lib/copy";
import {
  counterpartPath,
  nav,
  routes,
  site,
  type Locale,
} from "@/lib/site";
import { IconClose, IconDots, IconMenu } from "./Icons";
import { Logo } from "./Logo";

function localeFromPath(pathname: string): Locale {
  return pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";
}

export function Header() {
  const pathname = usePathname();
  return <HeaderBar key={pathname} pathname={pathname} />;
}

function HeaderBar({ pathname }: { pathname: string }) {
  const locale = localeFromPath(pathname);
  const t = chrome[locale];
  const items = nav[locale];
  const home = routes[locale].home;
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    document.documentElement.lang = locale === "es" ? "es" : "en";
  }, [locale]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40">
      <a href="#main" className="skip-link pointer-events-auto">
        {t.skip}
      </a>
      <div className="pointer-events-auto relative flex h-16 items-center gap-4 px-4 sm:h-20 sm:px-6 lg:px-10">
        <Link
          href={routes[locale].services}
          className="mr-auto inline-flex min-h-11 items-center gap-2.5 text-[0.95rem] text-white/90 hover:text-white lg:mr-8"
        >
          <IconDots />
          <span className="hidden sm:inline">{items[1]?.label ?? (locale === "es" ? "Lo que hacemos" : "What We Do")}</span>
        </Link>

        <nav aria-label={locale === "es" ? "Principal" : "Primary"} className="hidden flex-1 justify-center lg:flex">
          <ul className="flex items-center gap-8 xl:gap-10">
            {items
              .filter((item) => item.href !== routes[locale].services)
              .map((item) => {
                const active =
                  item.href === home
                    ? pathname === item.href
                    : pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`inline-flex min-h-11 items-center whitespace-nowrap text-[0.95rem] transition-colors ${
                        active ? "text-white" : "text-white/80 hover:text-white"
                      }`}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </nav>

        <div className="flex items-center gap-1 pr-[5.5rem] sm:pr-[10.75rem]">
          <Link
            href={counterpartPath(pathname)}
            className="inline-flex min-h-11 min-w-11 items-center justify-center px-2 text-[0.95rem] text-white/80 hover:text-white"
            hrefLang={locale === "en" ? "es" : "en"}
            lang={locale === "en" ? "es" : "en"}
            aria-label={t.languageAria}
          >
            {locale === "en" ? "Es" : "En"}
          </Link>
          <a
            href={site.phoneMainHref}
            className="hidden min-h-11 items-center px-2 text-[0.95rem] text-white/80 hover:text-white md:inline-flex"
          >
            {site.phoneMain}
          </a>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center text-white lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? t.closeMenu : t.openMenu}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>

        <div className="pointer-events-auto fixed right-0 top-0 z-50">
          <Logo href={home} />
        </div>
      </div>
      <div className="pointer-events-none mx-4 h-px bg-white/25 sm:mx-6 lg:mr-[10.5rem] lg:ml-10" />

      {open ? (
        <div
          id={menuId}
          role="dialog"
          aria-modal="true"
          aria-label={t.menu}
          className="pointer-events-auto border-t border-white/10 bg-primary-deep lg:hidden"
        >
          <nav className="flex flex-col px-5 py-3">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="inline-flex min-h-12 items-center border-b border-white/10 text-base text-white"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.phoneMainHref}
              className="inline-flex min-h-12 items-center text-base text-white/80"
            >
              {site.phoneMain}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
