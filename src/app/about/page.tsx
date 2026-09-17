import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Why Hollithron Advocates exists, our mission, and the background of founder and attorney Henry Hollithron.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The firm"
        title="About us"
        lede="We exist because immigration cases decide whether families stay together — and, for some people, whether they live."
      />

      <section className="shell grid gap-12 py-14 md:grid-cols-[0.9fr_1.1fr] md:py-20">
        <div>
          <h2 className="display text-3xl text-primary md:text-4xl">Why we are here</h2>
        </div>
        <div className="prose-legal text-lg leading-8 text-foreground/90">
          <p>
            At Hollithron Advocates, we know that to be American is not to belong
            to any specific race, nationality, religion, or gender. Since the
            days when this country was a collection of British colonies, being
            American has meant, at its best, a dedication to building a country
            where all are free to make something of themselves and believe as
            they wish. The United States has a long tradition of accepting those
            whose home countries would not allow them to follow their
            consciences or oppressed them for belonging to minority groups. And
            in recent decades, when the government imposed much stricter limits
            on the entry of noncitizens, the law still prioritized family unity.
          </p>
          <p>
            But our immigration laws are some of the most complex in the U.S.
            legal system. Many people on both sides of the immigration debate do
            not actually have a clear idea of what they do and do not allow.
          </p>
          <p>
            Hollithron Advocates is here because we recognize what is at stake.
            For some, it is about living freely with their families. For others,
            it is a matter of life and death.
          </p>
          <p>
            High-quality representation means we do not take shortcuts. We do
            not look for quick fixes that seem attractive in the short term but
            create bigger problems later. We do not believe that, just because
            noncitizens are an “underserved population,” any representation is
            better than none. Anything less than an attorney’s best work can
            cause devastating consequences.
          </p>
          <p>
            We take the time to evaluate each case on its own. We will discuss
            your goals, and if there is a way to reach them under current law,
            we will commit to nothing but our best.
          </p>
        </div>
      </section>

      <section className="red-wash relative overflow-hidden text-white">
        <blockquote className="mx-auto max-w-4xl px-5 py-20 text-center lg:py-24">
          <p className="display text-3xl leading-[1.2] text-white md:text-4xl">
            To provide all our clients the high-quality, individualized legal
            representation they deserve through a small but dedicated team,
            while maintaining the highest legal, professional, and ethical
            standards — and to advocate for reforms that make the United States’
            immigration system a truly just one.
          </p>
          <footer className="eyebrow mt-8 text-gold">
            Mission
          </footer>
        </blockquote>
      </section>

      <section className="shell grid items-start gap-12 py-16 md:grid-cols-[0.85fr_1.15fr] md:py-20">
        <figure className="relative">
          <div className="relative overflow-hidden bg-muted">
            <Image
              src="/images/henry.jpg"
              alt="Henry Hollithron standing with a guide dog beside the Colorado flag"
              width={720}
              height={980}
              className="w-full object-cover object-[50%_12%]"
            />
          </div>
          <figcaption className="mt-3 text-sm text-muted-foreground">
            Henry Hollithron, founder and sole practicing attorney
          </figcaption>
        </figure>
        <div className="prose-legal text-lg leading-8">
          <h2 className="display text-3xl text-primary md:text-4xl">About Henry</h2>
          <p>
            Henry Hollithron is the sole practicing attorney at Hollithron
            Advocates. A first-generation American, he has personally experienced
            the benefits of the United States’ immigration laws. His parents
            immigrated from a country that was not as developed and secure as
            the United States, so he has some understanding of what those who do
            not live in a safe and prosperous country have lived through.
          </p>
          <p>
            Because Henry’s mother was an interpreter in the immigration courts
            for twenty years, he has seen legal representation at its best — and
            when it falls below that standard.
          </p>
          <p>
            Born and raised in Colorado, Henry graduated with a Bachelor of Arts
            in History and Russian studies (with departmental honors) from
            Vassar College. He then earned a Juris Doctor at the University of
            Denver’s Sturm College of Law after two and a half years of
            intensive study and practical experience.
          </p>
          <p>
            Upon graduating, he almost immediately founded Hollithron Advocates
            and has been serving noncitizens ever since.
          </p>
          <p>
            Henry speaks Spanish, French, and Russian, and has an abiding
            passion for foreign languages and cultures. He still enjoys learning
            about history, reading science fiction and fantasy, and listening to
            music — mostly choral or classic and progressive rock.
          </p>
        </div>
      </section>

      <CtaBand locale="en" />
    </>
  );
}
