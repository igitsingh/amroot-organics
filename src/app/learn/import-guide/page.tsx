import { Metadata } from "next";
import { ImportGuideHero } from "@/components/learn/import-guide/ImportGuideHero";
import { ImportSteps } from "@/components/learn/import-guide/ImportSteps";

export const metadata: Metadata = {
  title: "Import Guide | Amroot Organics",
  description: "A comprehensive guide to importing Amroot Organics products globally. We handle logistics, phytosanitary certificates, and export compliance.",
};

export default function ImportGuidePage() {
  return (
    <main className="min-h-screen bg-brand-white">
      <ImportGuideHero />
      <ImportSteps />
    </main>
  );
}
