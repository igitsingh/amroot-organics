import { Metadata } from "next";
import { ProductsCatalog } from "@/components/products/ProductsCatalog";

export const metadata: Metadata = {
  title: "B2B Export Products | Amroot Organics",
  description: "Explore our premium, single-origin organic turmeric and ginger. Full B2B specifications, lab reports, and export information for global distributors.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-24 bg-[#FAF8F5]">
      <ProductsCatalog />
    </main>
  );
}
