import Link from "next/link";
import { HeroSphere } from "@/components/HeroSphere";
import { chrome } from "@/lib/copy";
import { routes, type Locale } from "@/lib/site";

type HomeHeroProps = {
  locale: Locale;
  eyebrow: string;
  title: string;
  lede: string;
  photoAlt: string;
  photoCaption: string;
};

export function HomeHero({ locale, title, lede }: HomeHeroProps) {
  const t = chrome[locale];

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#1c1d22] text-white">
      <HeroSphere />
      <div className="relative shell grid min-h-[100svh] items-center py-28">
        <div className="hero-copy relative z-10 max-w-2xl">
          <h1 className="display text-[2.35rem] sm:text-5xl lg:text-[4rem]">
            {title}
          </h1>
          <div className="mt-10 flex max-w-md gap-6">
            <span className="mt-3 hidden h-px w-16 shrink-0 bg-white/35 sm:block" />
            <p className="text-[1.02rem] leading-8 text-white/70">{lede}</p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href={routes[locale].contact} className="btn btn-primary">
              {t.callCta}
            </Link>
            <Link href={routes[locale].services} className="btn btn-secondary">
              {t.explore}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
