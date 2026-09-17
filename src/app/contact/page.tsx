import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { IconMail, IconPhone } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { chrome } from "@/lib/copy";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Schedule a consultation with Hollithron Advocates in Denver. Call, text, or email. Consultations are by appointment.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact us"
        lede="If you wish to schedule a consultation or have general questions about our services, contact us by phone, text, or email. Consultations are by appointment only."
      />

      <section className="shell grid gap-12 py-14 md:grid-cols-[0.9fr_1.1fr] md:py-20">
        <div className="space-y-8">
          <p className="border-l-2 border-accent bg-white/[0.03] px-5 py-4 leading-7 text-white/60">
            {chrome.en.consultNote}
          </p>
          <article>
            <h2 className="display flex items-center gap-2 text-3xl text-primary">
              <IconPhone />
              Call us
            </h2>
            <p className="mt-3 leading-7 text-foreground/90">
              We answer the phone Monday through Friday, 8:00 AM to 6:00 PM
              Mountain Time. For general inquiries, call{" "}
              <a className="text-white hover:text-accent" href={site.phoneMainHref}>
                {site.phoneMain}
              </a>
              . For service in Spanish, call{" "}
              <a className="text-white hover:text-accent" href={site.phoneSpanishHref}>
                {site.phoneSpanish}
              </a>
              .
            </p>
          </article>
          <article>
            <h2 className="display text-3xl text-primary">Text us</h2>
            <p className="mt-3 leading-7 text-foreground/90">
              The main number also accepts text messages. Standard data and
              messaging rates may apply. Please allow two business days for a
              response to non-emergency communications.
            </p>
          </article>
          <article>
            <h2 className="display flex items-center gap-2 text-3xl text-primary">
              <IconMail />
              Email us
            </h2>
            <p className="mt-3 leading-7 text-foreground/90">
              Write to{" "}
              <a className="text-white hover:text-accent" href={`mailto:${site.email}`}>
                {site.email}
              </a>{" "}
              or use the form. Please allow up to two business days for a
              response.
            </p>
          </article>
        </div>
        <div className="border border-white/15 bg-white/[0.03] p-6 md:p-8">
          <h2 className="display text-3xl text-primary">Send a message</h2>
          <div className="mt-6">
            <ContactForm locale="en" />
          </div>
        </div>
      </section>
    </>
  );
}
