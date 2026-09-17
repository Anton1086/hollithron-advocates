import Image from "next/image";
import Link from "next/link";
import { IconChevron } from "@/components/Icons";
import type { Service } from "@/lib/services";

type ServiceGridProps = {
  headingKicker: string;
  heading: string;
  intro: string;
  services: Service[];
  hrefBase: string;
  moreLabel: string;
  portraitAlt: string;
  portraitCaption: string;
  portraitRole: string;
};

export function ServiceGrid({
  services,
  hrefBase,
  portraitAlt,
  portraitCaption,
  portraitRole,
}: ServiceGridProps) {
  return (
    <section className="red-wash">
      <div className="shell grid items-start gap-10 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-12">
        <ul>
          {services.map((service, index) => (
            <li key={service.id}>
              <Link
                href={`${hrefBase}#${service.id}`}
                className="group flex min-h-16 items-center justify-between gap-4 border-b border-white/15 py-4 text-white transition-colors hover:border-accent"
              >
                <span className="flex min-w-0 items-baseline gap-4">
                  <span className="w-8 shrink-0 text-sm text-white/45">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[1.05rem] leading-7">{service.title}</span>
                </span>
                <IconChevron className="h-4 w-4 shrink-0 text-white/40 transition-colors group-hover:text-accent" />
              </Link>
            </li>
          ))}
        </ul>

        <figure className="lg:sticky lg:top-28">
          <Image
            src="/images/henry.jpg"
            alt={portraitAlt}
            width={720}
            height={980}
            className="aspect-[4/5] w-full object-cover object-[50%_28%]"
          />
          <figcaption className="mt-6">
            <p className="text-xl">{portraitCaption}</p>
            <p className="mt-2 max-w-sm text-sm leading-6 text-white/55">{portraitRole}</p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
