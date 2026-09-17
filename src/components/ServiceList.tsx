"use client";

import { useEffect } from "react";
import type { Service } from "@/lib/services";

type ServiceListProps = {
  services: Service[];
  disclaimer: string;
};

export function ServiceList({ services, disclaimer }: ServiceListProps) {
  useEffect(() => {
    const openFromHash = () => {
      const id = window.location.hash.replace("#", "");
      if (!id) return;
      const el = document.getElementById(id);
      if (el instanceof HTMLDetailsElement) {
        el.open = true;
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      }
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  return (
    <div className="shell py-8 md:py-12">
      <p className="border-l-2 border-accent bg-white/[0.03] px-5 py-4 text-sm leading-6 text-white/60">
        {disclaimer}
      </p>
      <div className="mt-10">
        {services.map((service, index) => (
          <details
            key={service.id}
            id={service.id}
            className="group scroll-mt-28 border-b border-white/15"
          >
            <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-5 text-xl md:text-2xl">
              <span className="flex items-baseline gap-4">
                <span className="w-8 text-sm text-white/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {service.title}
              </span>
              <span
                aria-hidden="true"
                className="text-accent transition-transform duration-200 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <div className="prose-legal pb-8 pl-12 text-[1.05rem] leading-8 text-white/70">
              <p>{service.summary}</p>
              {service.body.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
