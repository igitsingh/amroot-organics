import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";

import { constructMetadata } from "@/lib/seo/utils";
import { pageIntelligence, productIntelligence } from "@/lib/seo/intelligence";
import { generateContactPageSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = constructMetadata({
  title: "Contact AMROOT Organics",
  description: "Contact AMROOT Organics for bulk organic spices, wholesale pricing, and export inquiries.",
  keywords: pageIntelligence.contact?.secondaryKeywords || [],
  canonicalUrl: "https://amrootorganics.com/contact",
});

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <JsonLd schema={generateContactPageSchema()} />
      <ContactHero />
      <ContactForm />
    </main>
  );
}
