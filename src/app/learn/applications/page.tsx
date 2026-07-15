import { Metadata } from "next";
import { ApplicationsHero } from "@/components/learn/applications/ApplicationsHero";
import { IndustryUseCases } from "@/components/learn/applications/IndustryUseCases";

export const metadata: Metadata = {
  title: "Industry Applications | Amroot Organics",
  description: "Discover how our high-curcumin turmeric and premium ginger extracts are utilized across nutraceuticals, food & beverage, and cosmetics.",
};

export default function ApplicationsPage() {
  return (
    <main className="min-h-screen bg-brand-white">
      <ApplicationsHero />
      <IndustryUseCases />
    </main>
  );
}
