import { Metadata } from "next";
import { QualityHero } from "@/components/quality/QualityHero";
import { ProcessingStandards } from "@/components/quality/ProcessingStandards";
import { QualityCommitment } from "@/components/quality/QualityCommitment";

export const metadata: Metadata = {
  title: "Quality Processing | Amroot Organics",
  description: "Explore the rigorous physical quality control, optical sorting, and advanced processing standards at Amroot Organics.",
};

export default function QualityPage() {
  return (
    <main className="min-h-screen bg-brand-white">
      <QualityHero />
      <ProcessingStandards />
      <QualityCommitment />
    </main>
  );
}
