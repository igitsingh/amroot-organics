import { Metadata } from "next";
import { ResearchHero } from "@/components/learn/research/ResearchHero";
import { ClinicalData } from "@/components/learn/research/ClinicalData";

export const metadata: Metadata = {
  title: "Clinical Research | Amroot Organics",
  description: "Peer-reviewed studies and clinical data supporting the therapeutic potential of Lakadong turmeric and premium ginger.",
};

export default function ResearchPage() {
  return (
    <main className="min-h-screen">
      <ResearchHero />
      <ClinicalData />
    </main>
  );
}
