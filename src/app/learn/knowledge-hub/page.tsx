import { Metadata } from "next";
import { KnowledgeHubGrid } from "@/components/learn/knowledge-hub/KnowledgeHubGrid";

export const metadata: Metadata = {
  title: "Knowledge Hub | Amroot Organics",
  description: "Explore our curated resources designed to help B2B partners understand the science, sourcing, and superiority of our organic ingredients.",
};

export default function KnowledgeHubPage() {
  return (
    <main className="min-h-screen">
      <KnowledgeHubGrid />
    </main>
  );
}
