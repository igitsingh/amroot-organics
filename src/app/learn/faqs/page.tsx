import { Metadata } from "next";
import { FaqSection } from "@/components/learn/faqs/FaqSection";

export const metadata: Metadata = {
  title: "B2B FAQs | Amroot Organics",
  description: "Find answers to frequently asked questions regarding our MOQs, shipping, quality standards, and sourcing for our premium organic turmeric and ginger.",
};

export default function FaqsPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      <FaqSection />
    </main>
  );
}
