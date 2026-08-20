"use client";

import { motion } from "framer-motion";

const COMPARISON_DATA = [
  {
    feature: "Origin Transparency",
    amroot: "Directly sourced from specific partner farms in Meghalaya.",
    traditional: "Unknown. Often mixed from multiple regions.",
  },
  {
    feature: "Batch Consistency",
    amroot: "Standardized active compounds (curcumin/gingerol) per batch.",
    traditional: "Highly variable depending on the middleman.",
  },
  {
    feature: "Documentation",
    amroot: "Complete digital COAs and lab reports available instantly.",
    traditional: "Often delayed, incomplete, or hard to verify.",
  },
  {
    feature: "Private Label Support",
    amroot: "End-to-end bespoke packaging and formulation.",
    traditional: "Requires minimums too high for specialty brands.",
  },
  {
    feature: "Communication",
    amroot: "Direct line to our procurement and export directors.",
    traditional: "Passed through brokers and third-party agents.",
  },
  {
    feature: "Quality Testing",
    amroot: "Third-party tested for heavy metals and microbiology.",
    traditional: "In-house testing with potential conflicts of interest.",
  },
  {
    feature: "Traceability",
    amroot: "Trackable back to the specific farmer and harvest date.",
    traditional: "Lost in aggregation centers.",
  },
  {
    feature: "Packaging Flexibility",
    amroot: "From 100g retail to 25kg bulk, adapted to your needs.",
    traditional: "Rigid industrial sizes only.",
  },
];

export function WhyBuyersSwitch() {
  return (
    <section className="py-24 lg:py-32 bg-brand-white border-t border-brand-charcoal/10">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-charcoal text-center mb-6"
          >
            Why Buyers Switch
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-brand-charcoal/60 text-center max-w-2xl mx-auto uppercase tracking-widest text-xs"
          >
            The new standard for global spice procurement
          </motion.p>
        </div>

        <div className="w-full">
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 pb-6 mb-6 border-b border-brand-charcoal">
            <div className="hidden md:block md:col-span-4" />
            <div className="col-span-1 md:col-span-4">
              <span className="font-sans text-xs uppercase tracking-widest text-brand-charcoal/50">
                Traditional Suppliers
              </span>
            </div>
            <div className="col-span-1 md:col-span-4 mt-2 md:mt-0">
              <span className="font-serif text-lg lg:text-xl text-brand-charcoal italic">
                Amroot
              </span>
            </div>
          </div>

          {/* Data Rows */}
          <div className="flex flex-col">
            {COMPARISON_DATA.map((row, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="grid grid-cols-1 md:grid-cols-12 py-8 border-b border-brand-charcoal/10 last:border-0 hover:bg-brand-beige/20 transition-colors duration-300"
              >
                <div className="col-span-1 md:col-span-4 mb-4 md:mb-0 md:pr-8 flex items-center">
                  <span className="font-sans font-medium text-brand-charcoal">
                    {row.feature}
                  </span>
                </div>
                
                <div className="col-span-1 md:col-span-4 mb-4 md:mb-0 md:pr-8 flex items-center">
                  <span className="font-sans text-sm text-brand-charcoal/60 leading-relaxed">
                    {row.traditional}
                  </span>
                </div>
                
                <div className="col-span-1 md:col-span-4 flex items-center relative">
                  <span className="font-sans text-sm font-medium text-brand-charcoal leading-relaxed">
                    {row.amroot}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
