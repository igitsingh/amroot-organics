import { Metadata } from "next";
import { ProductsCatalog } from "@/components/products/ProductsCatalog";
import { b2bProducts } from "@/lib/data/products";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = b2bProducts.find((p) => p.id === id);
  
  if (!product) {
    return {
      title: "Product Not Found | Amroot Organics",
    };
  }

  return {
    title: `${product.name} | Amroot Organics B2B`,
    description: product.description,
  };
}

export function generateStaticParams() {
  return b2bProducts.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = b2bProducts.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24 bg-[#FAF8F5]">
      {/* We reuse the ProductsCatalog but pass the specific product to be open initially */}
      <ProductsCatalog initialActiveProduct={product.id} />
    </main>
  );
}
