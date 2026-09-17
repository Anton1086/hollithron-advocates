import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { HomeHero } from "@/components/HomeHero";
import { IconArrow } from "@/components/Icons";
import { ProofStrip } from "@/components/ProofStrip";
import { ServiceGrid } from "@/components/ServiceGrid";
import { servicesEn } from "@/lib/services";
import { fullAddress, routes, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <HomeHero
        locale="en"
        eyebrow="Immigration law · Southeast Denver"
        title={site.tagline}
        lede="A small, dedicated practice for Immigration Court, humanitarian and family-based status, citizenship, appeals, and related Colorado proceedings."
        photoAlt="Henry Hollithron, founder of Hollithron Advocates, standing with a guide dog beside the Colorado flag"
        photoCaption="Henry Hollithron, founder and attorney"
      />
      <ProofStrip
        items={[
          { kicker: "office", title: "1", body: fullAddress() },
          { kicker: "consult", title: site.consultationFee, body: "By appointment. One-time fee. No time limit." },
          { kicker: "languages", title: "4", body: "English, Spanish, French, and Russian." },
        ]}
      />
      <ServiceGrid
        headingKicker="What we do"
        heading="Advocacy for status, family, and protection"
        intro="We help noncitizens and their families get or keep lawful status — and represent them in Colorado courts when remaining in the United States depends on it."
        services={servicesEn}
        hrefBase={routes.en.services}
        moreLabel="Read more"
        portraitAlt="Henry Hollithron, founder of Hollithron Advocates, standing with a guide dog beside the Colorado flag"
        portraitCaption="Henry Hollithron"
        portraitRole="Founder and attorney. Immigration Court, humanitarian and family-based status, citizenship, and related Colorado proceedings."
      />
      <section>
        <div className="shell grid gap-12 py-20 md:grid-cols-[0.8fr_1.2fr] lg:py-28">
          <div>
            <p className="eyebrow">The firm</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">
              High-quality representation.
              <span className="block text-white/55"> No shortcuts.</span>
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-white/70">
            <p>
              We are here for people who must appear in Immigration Court; who
              fled harm or survived abuse and now need protection; who want to
              reunite with family; or who seek to become citizens. We handle
              immigration appeals, including litigation in the federal courts of
              appeals and district courts.
            </p>
            <p>
              On a case-by-case basis, we also represent people accused of
              crimes in Colorado who could face immigration consequences. For
              children under 21 in Colorado who have been abused, neglected, or
              abandoned, we can help with the state-court proceedings that start
              the path to remain here legally.
            </p>
            <Link href={routes.en.about} className="inline-flex min-h-11 items-center text-accent hover:text-white">
              Meet Henry Hollithron
              <IconArrow className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      <CtaBand locale="en" />
    </>
  );
}
