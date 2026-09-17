import { ContactForm } from "@/components/ContactForm";
import { IconMail, IconPhone } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { chrome } from "@/lib/copy";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contacto",
  description:
    "Programe una consulta con Hollithron Advocates en Denver. Llame, envíe un mensaje de texto o un correo.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Comuníquese"
        title="Comuníquese con nosotros"
        lede="Si desea programar una consulta o tiene preguntas generales sobre nuestros servicios, puede llamarnos, enviarnos un mensaje de texto o un correo. Las consultas son solo con cita."
      />

      <section className="shell grid gap-12 py-14 md:grid-cols-[0.9fr_1.1fr] md:py-20">
        <div className="space-y-8">
          <p className="border-l-2 border-accent bg-white/[0.03] px-5 py-4 leading-7 text-white/60">
            {chrome.es.consultNote}
          </p>
          <article>
            <h2 className="display flex items-center gap-2 text-3xl text-primary">
              <IconPhone />
              Llámenos
            </h2>
            <p className="mt-3 leading-7 text-foreground/90">
              Atendemos el teléfono de lunes a viernes, de 8:00 a. m. a 6:00 p. m.,
              hora de las Montañas. Para consultas generales, llame al{" "}
              <a className="text-white hover:text-accent" href={site.phoneMainHref}>
                {site.phoneMain}
              </a>
              . Si necesita servicio en español, llame al{" "}
              <a className="text-white hover:text-accent" href={site.phoneSpanishHref}>
                {site.phoneSpanish}
              </a>
              .
            </p>
          </article>
          <article>
            <h2 className="display text-3xl text-primary">Envíenos un mensaje de texto</h2>
            <p className="mt-3 leading-7 text-foreground/90">
              El número principal también recibe mensajes de texto. Pueden
              aplicarse tarifas estándar. Por favor permita dos días hábiles
              para responder comunicaciones que no sean de emergencia.
            </p>
          </article>
          <article>
            <h2 className="display flex items-center gap-2 text-3xl text-primary">
              <IconMail />
              Envíenos un correo
            </h2>
            <p className="mt-3 leading-7 text-foreground/90">
              Escriba a{" "}
              <a className="text-white hover:text-accent" href={`mailto:${site.email}`}>
                {site.email}
              </a>{" "}
              o use el formulario. Por favor permita hasta dos días hábiles para
              una respuesta.
            </p>
          </article>
        </div>
        <div className="border border-white/15 bg-white/[0.03] p-6 md:p-8">
          <h2 className="display text-3xl text-primary">Enviar un mensaje</h2>
          <div className="mt-6">
            <ContactForm locale="es" />
          </div>
        </div>
      </section>
    </>
  );
}
