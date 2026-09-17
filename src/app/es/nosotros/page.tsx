import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: "Nosotros",
  description:
    "El propósito de Hollithron Advocates, nuestra misión y la trayectoria del abogado Henry Hollithron.",
};

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="La firma"
        title="Propósito de la firma"
        lede="Existimos porque los casos de inmigración deciden si las familias permanecen unidas y, para algunas personas, si viven."
      />

      <section className="shell grid gap-12 py-14 md:grid-cols-[0.9fr_1.1fr] md:py-20">
        <div>
          <h2 className="display text-3xl text-primary md:text-4xl">Por qué estamos aquí</h2>
        </div>
        <div className="prose-legal text-lg leading-8 text-foreground/90">
          <p>
            En Hollithron Advocates sabemos que ser estadounidense no consiste
            en pertenecer a una raza, nacionalidad, religión o género
            específicos. Desde los días en que este país era un conjunto de
            colonias británicas, ser estadounidense ha significado, en su mejor
            expresión, el compromiso de construir un país donde todas las
            personas puedan labrarse un futuro y creer como deseen.
          </p>
          <p>
            Pero las leyes de inmigración son de las más complejas del sistema
            jurídico de Estados Unidos. Muchas personas, en ambos lados del
            debate, no tienen una idea clara de lo que permiten y de lo que no.
          </p>
          <p>
            Hollithron Advocates existe porque reconocemos lo que está en juego.
            Para algunos, se trata de vivir en libertad con su familia. Para
            otros, es un asunto de vida o muerte.
          </p>
          <p>
            Una representación de alta calidad significa que no tomamos atajos.
            No buscamos soluciones rápidas que parecen atractivas a corto plazo
            pero generan problemas mayores después. No creemos que, solo porque
            las personas no ciudadanas sean una “población desatendida”,
            cualquier representación sea mejor que ninguna. Un trabajo por
            debajo del mejor esfuerzo de un abogado puede tener consecuencias
            devastadoras.
          </p>
          <p>
            Tomamos el tiempo necesario para evaluar cada caso. Hablaremos de
            sus metas y, si hay una vía bajo la ley vigente, nos comprometeremos
            a dar lo mejor.
          </p>
        </div>
      </section>

      <section className="red-wash relative overflow-hidden text-white">
        <blockquote className="mx-auto max-w-4xl px-5 py-20 text-center lg:py-24">
          <p className="display text-3xl leading-[1.2] text-white md:text-4xl">
            Brindar a cada cliente la representación jurídica individualizada y
            de alta calidad que merece, a través de un equipo pequeño y
            dedicado, manteniendo los más altos estándares legales,
            profesionales y éticos, y abogar por reformas que hagan del sistema
            de inmigración de Estados Unidos un sistema verdaderamente justo.
          </p>
          <footer className="eyebrow mt-8 text-gold">
            Misión
          </footer>
        </blockquote>
      </section>

      <section className="shell grid items-start gap-12 py-16 md:grid-cols-[0.85fr_1.15fr] md:py-20">
        <figure className="relative">
          <div className="relative overflow-hidden bg-muted">
            <Image
              src="/images/henry.jpg"
              alt="Henry Hollithron junto a un perro guía y la bandera de Colorado"
              width={720}
              height={980}
              className="w-full object-cover object-[50%_12%]"
            />
          </div>
          <figcaption className="mt-3 text-sm text-muted-foreground">
            Henry Hollithron, fundador y único abogado en ejercicio
          </figcaption>
        </figure>
        <div className="prose-legal text-lg leading-8">
          <h2 className="display text-3xl text-primary md:text-4xl">Acerca de Henry</h2>
          <p>
            Henry Hollithron es el único abogado en ejercicio de Hollithron
            Advocates. Estadounidense de primera generación, ha experimentado en
            carne propia los beneficios de las leyes de inmigración de Estados
            Unidos. Sus padres emigraron de un país menos desarrollado y seguro,
            de modo que comprende, en parte, lo que viven quienes no habitan un
            país próspero y seguro como este.
          </p>
          <p>
            Además, porque su madre fue intérprete en los tribunales de
            inmigración durante veinte años, ha visto la representación legal en
            su mejor forma… y cuando no alcanza ese estándar.
          </p>
          <p>
            Nacido y criado en Colorado, Henry se graduó con un Bachelor of Arts
            en Historia y Estudios Rusos (con honores departamentales) en Vassar
            College. Luego obtuvo el Juris Doctor en la Sturm College of Law de
            la University of Denver, tras dos años y medio de estudio intensivo
            y experiencia práctica.
          </p>
          <p>
            Al graduarse, fundó casi de inmediato Hollithron Advocates y desde
            entonces sirve a personas no ciudadanas.
          </p>
          <p>
            Henry habla español, francés y ruso, y tiene una pasión constante
            por los idiomas y las culturas. Sigue disfrutando la historia, la
            ciencia ficción y la fantasía, y la música —sobre todo coral o rock
            clásico y progresivo.
          </p>
        </div>
      </section>

      <CtaBand locale="es" />
    </>
  );
}
