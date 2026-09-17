import { CtaBand } from "@/components/CtaBand";
import { IconClock, IconPin } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { fullAddress, mapsEmbedUrl, mapsUrl, site } from "@/lib/site";

export const metadata = {
  title: "Oficina",
  description:
    "Horario, políticas de visita, ubicación y formas de pago de Hollithron Advocates en Denver.",
};

const payments = ["Visa", "Mastercard", "American Express", "Discover", "Débito", "Efectivo"];

export default function OficinaPage() {
  return (
    <>
      <PageHero
        eyebrow="Visitar la firma"
        title="Localización y políticas"
        lede="La mayoría de las consultas se realizan por videoconferencia o teléfono. Las visitas en persona son con cita."
      />

      <section className="shell grid gap-10 py-14 md:grid-cols-2 md:py-20">
        <div className="space-y-8">
          <article>
            <h2 className="display flex items-center gap-2 text-3xl text-primary">
              <IconClock />
              Horario
            </h2>
            <p className="mt-3 text-lg">{site.hoursEs}</p>
          </article>
          <article>
            <h2 className="display text-3xl text-primary">Citas y visitas</h2>
            <div className="prose-legal mt-3 leading-8 text-foreground/90">
              <p>
                Por lo general podemos comunicarnos de forma eficaz por
                videoconferencia o teléfono. Las citas en persona se conceden
                cuando es necesario. Si ninguna opción remota le funciona,
                haremos lo posible por acomodarle.
              </p>
              <p>
                Por favor no traiga a la oficina a nadie que no tenga
                información pertinente a su caso (por ejemplo, niños pequeños
                que no se necesiten en la cita).
              </p>
              <p>
                La puerta de la oficina está cerrada con llave. No intente
                forzarla. Toque o llámenos cuando llegue.
              </p>
              <p>
                Si viene a entregar documentos, puede deslizarlos bajo la
                puerta y llamarnos o enviarnos un mensaje. Si necesita un
                recibo, podemos devolvérselo de la misma forma.
              </p>
            </div>
          </article>
          <article>
            <h2 className="display text-3xl text-primary">Formas de pago</h2>
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
            Ubicación
          </h2>
          <p className="mt-3 text-lg">{fullAddress()}</p>
          <a
            href={mapsUrl()}
            className="mt-3 inline-flex min-h-11 items-center text-accent hover:text-white"
          >
            Cómo llegar
          </a>
          <div className="mt-5 overflow-hidden border border-white/15 bg-muted">
            <iframe
              title={`Mapa de ${site.name}`}
              src={mapsEmbedUrl()}
              className="h-80 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <CtaBand locale="es" />
    </>
  );
}
