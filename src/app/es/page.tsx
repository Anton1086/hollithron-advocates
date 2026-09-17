import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { HomeHero } from "@/components/HomeHero";
import { IconArrow } from "@/components/Icons";
import { ProofStrip } from "@/components/ProofStrip";
import { ServiceGrid } from "@/components/ServiceGrid";
import { servicesEs } from "@/lib/services";
import { fullAddress, routes, site } from "@/lib/site";

export const metadata = {
  title: "Inicio",
  description:
    "Firma de inmigración en el sureste de Denver. Defensa en tribunales, inmigración humanitaria y familiar, ciudadanía y apelaciones.",
  alternates: { canonical: "/es", languages: { en: "/", es: "/es" } },
};

export default function SpanishHomePage() {
  return (
    <>
      <HomeHero
        locale="es"
        eyebrow="Derecho de inmigración · Sureste de Denver"
        title={site.taglineEs}
        lede="Una firma pequeña y dedicada al derecho de inmigración. Ayudamos a quienes deben moverse por la complejidad del sistema migratorio de Estados Unidos."
        photoAlt="Henry Hollithron, fundador de Hollithron Advocates, junto a un perro guía y la bandera de Colorado"
        photoCaption="Henry Hollithron, fundador y abogado"
      />
      <ProofStrip
        items={[
          { kicker: "oficina", title: "1", body: fullAddress() },
          {
            kicker: "consulta",
            title: site.consultationFee,
            body: "Solo con cita. Cargo único. Sin límite de tiempo.",
          },
          { kicker: "idiomas", title: "4", body: "Inglés, español, francés y ruso." },
        ]}
      />
      <ServiceGrid
        headingKicker="Lo que hacemos"
        heading="Defensa para el estatus, la familia y la protección"
        intro="Proporcionamos un amplio rango de servicios para asistir a quienes no son ciudadanos y a sus familias a obtener o mantener estatus legal, y representamos en cortes de Colorado cuando la permanencia depende de ello."
        services={servicesEs}
        hrefBase={routes.es.services}
        moreLabel="Leer más"
        portraitAlt="Henry Hollithron, fundador de Hollithron Advocates, junto a un perro guía y la bandera de Colorado"
        portraitCaption="Henry Hollithron"
        portraitRole="Fundador y abogado. Tribunales de inmigración, estatus humanitario y familiar, ciudadanía y procedimientos relacionados en Colorado."
      />
      <section>
        <div className="shell py-20 lg:py-28">
          <p className="eyebrow">La firma</p>
          <h2 className="display mt-4 max-w-3xl text-4xl md:text-5xl">
            Estamos aquí para ayudar
          </h2>
          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-white/70">
            <p>
              Ayudamos a quienes necesitan comparecer en los tribunales de
              inmigración; que han huido del daño sufrido en sus países; que han
              sobrevivido maltrato aquí y ahora necesitan la protección del
              gobierno de los Estados Unidos; que quieren reunirse aquí con sus
              familias; o que quieren hacerse ciudadanos.
            </p>
            <p>
              También representamos, en ciertos casos, a personas acusadas de
              delitos en Colorado que podrían enfrentar consecuencias
              migratorias. A los menores de veintiún años en Colorado que han
              sido víctimas de abuso, negligencia o abandono, podemos
              asistirles con los procedimientos estatales necesarios.
            </p>
            <Link
              href={routes.es.about}
              className="inline-flex min-h-11 items-center text-accent hover:text-white"
            >
              Conozca a Henry Hollithron
              <IconArrow className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      <CtaBand locale="es" />
    </>
  );
}
