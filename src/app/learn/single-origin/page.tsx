import { Metadata } from "next";
import { SingleOriginHero } from "@/components/learn/single-origin/SingleOriginHero";
import { TerroirBenefits } from "@/components/learn/single-origin/TerroirBenefits";
import { FarmerCommunity } from "@/components/learn/single-origin/FarmerCommunity";

export const metadata: Metadata = {
  title: "Single Origin | Amroot Organics",
  description: "Discover why the unique terroir of Meghalaya produces the world's most potent Lakadong turmeric and premium ginger.",
};

export default function SingleOriginPage() {
  return (
    <main className="min-h-screen bg-brand-white">
      <SingleOriginHero />
      <TerroirBenefits />
      <FarmerCommunity />
    </main>
  );
}
