import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { IconClock, IconPin } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { fullAddress, mapsEmbedUrl, mapsUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Office Location and Policies",
  description:
    "Hours, visit policies, directions, and payment methods for Hollithron Advocates in Southeast Denver.",
};

const payments = ["Visa", "Mastercard", "American Express", "Discover", "Debit", "Cash"];

export default function OfficePage() {
  return (
    <>
      <PageHero
        eyebrow="Visiting the firm"
        title="Office location and policies"
        lede="Most consultations happen by videoconference or telephone. In-person visits are by appointment."
      />

      <section className="shell grid gap-10 py-14 md:grid-cols-2 md:py-20">
        <div className="space-y-8">
          <article>
            <h2 className="display flex items-center gap-2 text-3xl text-primary">
              <IconClock />
              Hours
            </h2>
            <p className="mt-3 text-lg">{site.hours}</p>
          </article>
          <article>
            <h2 className="display text-3xl text-primary">Appointments and visits</h2>
            <div className="prose-legal mt-3 leading-8 text-foreground/90">
              <p>
                We can usually communicate effectively by videoconference or
                telephone. In-person appointments are granted when needed. If
                neither remote option works for you, we will do our best to
                accommodate you.
              </p>
              <p>
                Please do not bring anyone to the office who does not have
                information relevant to your case (for example, small children
                who are not needed for the appointment).
              </p>
              <p>
                The office door is locked. Do not try to force it open. Knock or
                call us when you arrive.
              </p>
              <p>
                If you are delivering paperwork, you may slide it under the
                office door and call or text us. If a receipt is needed, we can
                return it the same way.
              </p>
            </div>
          </article>
          <article>
            <h2 className="display text-3xl text-primary">Payment methods</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {payments.map((method) => (
                <li
                  key={method}
                  className="border border-white/20 px-4 py-2 text-sm"
                >
                  {method}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div>
          <h2 className="display flex items-center gap-2 text-3xl text-primary">
            <IconPin />
            Location
          </h2>
          <p className="mt-3 text-lg">{fullAddress()}</p>
          <a
            href={mapsUrl()}
            className="mt-3 inline-flex min-h-11 items-center text-accent hover:text-white"
          >
            Get directions
          </a>
          <div className="mt-5 overflow-hidden border border-white/15 bg-muted">
            <iframe
              title={`Map of ${site.name}`}
              src={mapsEmbedUrl()}
              className="h-80 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <CtaBand locale="en" />
    </>
  );
}
