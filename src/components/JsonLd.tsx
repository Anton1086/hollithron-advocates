import { fullAddress, site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phoneMain,
    image: `${site.url}/images/henry.jpg`,
    logo: `${site.url}/images/logo.png`,
    description: site.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: site.address.city,
      addressRegion: "CO",
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    areaServed: ["Denver", "Colorado", "United States"],
    openingHours: "Mo-Fr 08:00-18:00",
    priceRange: site.consultationFee,
    founder: {
      "@type": "Person",
      name: "Henry Hollithron",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...data, addressText: fullAddress() }) }}
    />
  );
}
