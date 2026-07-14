import { Hero } from "@/components/home/Hero";
import { TrustCards } from "@/components/home/TrustCards";
import { ProductCard } from "@/components/ui/ProductCard";
import { ComingSoon } from "@/components/home/ComingSoon";
import { ComparisonTable } from "@/components/home/ComparisonTable";
import { Traceability } from "@/components/home/Traceability";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {


  return (
    <>
      <Hero />
      <Traceability />
      <TrustCards />
      
      {/* Featured Products Section */}
      <section className="pt-12 pb-24 bg-brand-white relative">
        
        {/* Full-width solid rectangle behind the copy */}
        <div className="w-full bg-[#F4D03F] py-12 lg:py-16 mb-12 lg:mb-16">
          <div className="w-full mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brand-charcoal mb-8 leading-tight tracking-wide">
                  <span className="block mb-1">RARE HARVEST.</span>
                  <span className="block mb-1">RARE NATURE.</span>
                  <span className="block mb-1">RARE ORIGIN.</span>
                  <span className="block text-brand-green italic lowercase font-light tracking-normal mt-3">rare turmeric.</span>
                </h2>
                <div className="w-12 h-px bg-brand-green/40 mb-6"></div>
                <p className="text-brand-charcoal/80 text-lg sm:text-xl font-light leading-relaxed max-w-xl">
                  An exclusive collection of just two pristine ingredients—Turmeric and Ginger—spanning four meticulously crafted SKUs. Reserved for discerning global importers and distributors who demand the absolute finest.
                </p>
              </div>
              <Link
                href="/products"
                className="group flex items-center gap-2 text-brand-charcoal font-medium hover:text-brand-green transition-colors"
              >
                PLACE YOUR RARE ORDER
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProductCard 
              id="organic-turmeric"
              name="Organic Turmeric"
              category="Certified Organic"
              imagePlaceholder="Deep Orange Turmeric Root"
              imageUrl="/mockups/amroot_OrganicTurmeric_TEMP01.jpeg"
              accentColorClass="from-amber-500/30"
              specifications={{ curcumin: "Min 5.0%", moisture: "Max 10%", form: "Whole / Powder" }}
              applications={["Organic Foods", "Premium Supplements", "Teas"]}
              packaging="25kg Paper Bags / Bulk Totes"
            />
            <ProductCard 
              id="lakadong-turmeric"
              name="Premium Lakadong Turmeric"
              category="High Curcumin Variety"
              imagePlaceholder="Vibrant Yellow Fine Powder"
              imageUrl="/mockups/amroot_Premium Lakadong Turmeric_TEMP01.jpeg"
              accentColorClass="from-yellow-500/30"
              specifications={{ curcumin: "> 10.0%", moisture: "Max 10%", form: "Mesh 60-80" }}
              applications={["Pharmaceuticals", "Extraction", "High-End Culinary"]}
              packaging="25kg / 50kg Bags with inner liner"
            />
            <ProductCard 
              id="organic-ginger"
              name="Organic Ginger"
              category="Certified Organic"
              imagePlaceholder="Pale Yellow Ginger Root"
              imageUrl="/mockups/amroot_OrganicGinger_TEMP01.png"
              accentColorClass="from-orange-300/30"
              specifications={{ form: "Whole / Sliced / Powder", moisture: "Max 12%" }}
              applications={["Organic Beverages", "Baking", "Nutraceuticals"]}
              packaging="20kg Cartons / 25kg Bags"
            />
            <ProductCard 
              id="premium-ginger"
              name="Premium Ginger"
              category="Conventional High-Grade"
              imagePlaceholder="Rich Aromatic Ginger Powder"
              imageUrl="/mockups/amroot_PremiumGinger_TEMP01.png"
              accentColorClass="from-amber-200/40"
              specifications={{ form: "Mesh 60-80", moisture: "Max 12%" }}
              applications={["Food Service", "Spice Blends", "Sauces"]}
              packaging="25kg Bags with inner liner"
            />
          </div>
        </div>
      </section>

      <ComparisonTable />
    </>
  );
}
