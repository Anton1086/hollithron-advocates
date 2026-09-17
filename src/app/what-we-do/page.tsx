import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { ServiceList } from "@/components/ServiceList";
import { servicesEn } from "@/lib/services";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Immigration court defense, humanitarian and family-based immigration, DACA and TPS, naturalization, federal appeals, Colorado crimmigration, and SIJS.",
};

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        eyebrow="Practice areas"
        title="What we do"
        lede="We provide a full range of services to help noncitizens and their families get or keep legal immigration status. We also represent noncitizens in Colorado state courts on cases that affect their ability to remain legally in the United States."
      />
      <ServiceList
        services={servicesEn}
        disclaimer="This overview is for informational purposes only. It is not legal advice and does not create an attorney-client relationship between Hollithron Advocates, P.C. and anyone reading this page."
      />
      <CtaBand locale="en" />
    </>
  );
}
