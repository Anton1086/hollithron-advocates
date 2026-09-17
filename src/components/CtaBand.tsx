import Link from "next/link";
import { chrome } from "@/lib/copy";
import { routes, site, type Locale } from "@/lib/site";

type CtaBandProps = {
  locale: Locale;
};

export function CtaBand({ locale }: CtaBandProps) {
  const t = chrome[locale];

  return (
    <section className="red-wash">
      <div className="shell flex flex-col items-start justify-between gap-8 py-20 md:flex-row md:items-end lg:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">
            {locale === "es" ? "Siguiente paso" : "Next step"}
          </p>
          <h2 className="display mt-4 text-4xl md:text-5xl">
            {locale === "es"
              ? "Si usted o alguien que conoce necesita ayuda, hablemos."
              : "If you or someone you know needs help, let’s talk."}
          </h2>
          <p className="mt-5 max-w-xl text-white/60">{t.consultNote}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href={routes[locale].contact} className="btn btn-primary">
            {t.callCta}
          </Link>
          <a href={site.phoneMainHref} className="btn btn-secondary">
            {site.phoneMain}
          </a>
        </div>
      </div>
    </section>
  );
}
