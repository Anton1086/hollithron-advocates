import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { ServiceList } from "@/components/ServiceList";
import { servicesEs } from "@/lib/services";

export const metadata = {
  title: "Lo que hacemos",
  description:
    "Defensa en tribunales de inmigración, inmigración humanitaria y familiar, DACA y TPS, naturalización, apelaciones, crimmigration y SIJS.",
};

export default function QueHacemosPage() {
  return (
    <>
      <PageHero
        eyebrow="Áreas de práctica"
        title="Lo que hacemos"
        lede="Proporcionamos un amplio rango de servicios para asistir a quienes no son ciudadanos de los Estados Unidos y a sus familias a obtener estatus migratorio legal o mantenerlo. También representamos a no ciudadanos en los juzgados estatales de Colorado en casos que afecten su permanencia legal."
      />
      <ServiceList
        services={servicesEs}
        disclaimer="El siguiente esquema tiene como único objetivo proveer información. No constituye asesoría legal ni implica relación alguna entre Hollithron Advocates, P.C. y quien lea esta página."
      />
      <CtaBand locale="es" />
    </>
  );
}
