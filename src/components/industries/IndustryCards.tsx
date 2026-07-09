"use client";

import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, PackageSearch, Droplets } from "lucide-react";

const industries = [
  {
    id: "nutraceuticals",
    title: "Nutraceuticals & Supplements",
    description: "The modern consumer demands efficacy. We supply standardized, high-curcumin Lakadong turmeric and high-gingerol ginger, rigorously tested to meet European Pharmacopoeia and USP standards. Perfect for extraction, encapsulation, and functional formulations.",
    features: ["Standardized active compounds (Curcumin 7-12%)", "Heavy metal & microbiology compliant", "Consistent batch-to-batch quality"],
    icon: <ShieldCheck className="w-8 h-8 text-brand-green" />,
    color: "bg-[#F4EFE6]"
  },
  {
    id: "food-beverage",
    title: "Food & Beverage",
    description: "Flavor, color, and function are paramount. Our premium spices are processed to exact mesh sizes for seamless blending into teas, RTD beverages, spice mixes, and health-focused culinary products. We guarantee zero synthetic colors or fillers.",
    features: ["Vibrant natural color & robust flavor profile", "Custom mesh sizes available", "FSSAI & ISO 22000 certified processing"],
    icon: <TrendingUp className="w-8 h-8 text-brand-orange" />,
    color: "bg-white"
  },
  {
    id: "cosmetics",
    title: "Cosmetics & Personal Care",
    description: "Harness the natural anti-inflammatory and antioxidant properties of our ingredients. Our certified organic, pesticide-free roots are ideal for skincare formulations, face masks, natural colorants, and essential oil extractions.",
    features: ["100% Certified Organic available", "Pesticide & residue-free", "Clean extraction ready"],
    icon: <Droplets className="w-8 h-8 text-brand-green" />,
    color: "bg-[#FAF8F5]"
  },
  {
    id: "pet-nutrition",
    title: "Pet Health & Nutrition",
    description: "As pet owners seek cleaner, human-grade ingredients, our premium turmeric and ginger provide natural joint support and digestive benefits. Safe, traceable, and highly effective for premium pet food lines.",
    features: ["Human-grade quality", "Natural anti-inflammatory properties", "Bulk supply reliability"],
    icon: <PackageSearch className="w-8 h-8 text-brand-charcoal" />,
    color: "bg-brand-beige"
  }
];

export function IndustryCards() {
  return (
    <section className="py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <h2 className="text-sm font-bold text-brand-green uppercase tracking-widest mb-4">
            Sectors We Serve
          </h2>
          <h3 className="font-serif text-3xl sm:text-4xl text-brand-charcoal">
            Engineered for Application
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-[2.5rem] p-10 lg:p-14 border border-brand-charcoal/5 ${industry.color} hover:shadow-xl transition-shadow duration-500`}
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-brand-charcoal/5 flex items-center justify-center mb-8">
                {industry.icon}
              </div>
              
              <h4 className="font-serif text-2xl lg:text-3xl text-brand-charcoal mb-4">
                {industry.title}
              </h4>
              
              <p className="text-brand-charcoal/70 leading-relaxed mb-8">
                {industry.description}
              </p>
              
              <div className="space-y-3 border-t border-brand-charcoal/10 pt-6">
                <p className="text-xs font-bold text-brand-charcoal tracking-widest uppercase mb-4">Key Advantages</p>
                {industry.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2 shrink-0" />
                    <span className="text-sm text-brand-charcoal/80 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
