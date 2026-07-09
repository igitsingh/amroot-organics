import { Metadata } from "next";
import { IndustriesHero } from "@/components/industries/IndustriesHero";
import { IndustryCards } from "@/components/industries/IndustryCards";
import { B2BAdvantages } from "@/components/industries/B2BAdvantages";

export const metadata: Metadata = {
  title: "Industries We Serve | Amroot Organics",
  description: "Supplying premium, standardized organic turmeric and ginger to the Nutraceutical, Food & Beverage, and Cosmetics industries globally.",
};

export default function IndustriesPage() {
  return (
    <main className="min-h-screen">
      <IndustriesHero />
      <IndustryCards />
      <B2BAdvantages />
    </main>
  );
}
