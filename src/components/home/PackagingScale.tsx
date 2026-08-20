"use client";

import { motion, Variants } from "framer-motion";
import { Package, Box, ShoppingBag, Layers } from "lucide-react";

const PACKAGING_FORMATS = [
  {
    category: "Retail Packs",
    icon: ShoppingBag,
    sizes: ["100g", "250g", "500g", "1kg"],
    description: "Premium retail-ready stand-up pouches.",
  },
  {
    category: "Foodservice Packs",
    icon: Package,
    sizes: ["2kg", "5kg"],
    description: "Hermetically sealed catering tins and bags.",
  },
  {
    category: "Bulk Export",
    icon: Layers,
    sizes: ["10kg", "20kg", "25kg"],
    description: "Multi-wall kraft paper sacks with food-grade PE liners.",
  },
  {
    category: "Private Label",
    icon: Box,
    sizes: ["Custom"],
    description: "Bespoke packaging engineered for your brand.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function PackagingScale() {
  return (
    <section className="py-24 lg:py-32 bg-brand-beige/30 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 gap-8">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-sans text-xs uppercase tracking-[0.2em] text-brand-charcoal/60 mb-4 block"
            >
              Export Capabilities
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-charcoal leading-tight"
            >
              Packaging For <br className="hidden sm:block" />
              <span className="italic">Every Scale.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-brand-charcoal/70 max-w-md md:text-right"
          >
            From high-end retail pouches to industrial-grade bulk kraft sacks, our packaging is engineered to preserve volatile oils and guarantee safe global transit.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {PACKAGING_FORMATS.map((format, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group relative flex flex-col h-full bg-brand-white border border-brand-charcoal/10 p-8 lg:p-10 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-charcoal/5 hover:-translate-y-2"
            >
              <div className="mb-12 text-brand-charcoal/40 group-hover:text-brand-charcoal transition-colors duration-500">
                <format.icon className="w-8 h-8" strokeWidth={1} />
              </div>
              
              <div className="mt-auto">
                <h3 className="font-serif text-2xl text-brand-charcoal mb-4">
                  {format.category}
                </h3>
                
                <p className="font-sans text-sm text-brand-charcoal/60 leading-relaxed mb-8 h-10">
                  {format.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {format.sizes.map((size, i) => (
                    <span 
                      key={i}
                      className="inline-flex items-center justify-center px-4 py-2 border border-brand-charcoal/10 rounded-full font-sans text-xs tracking-widest uppercase text-brand-charcoal bg-brand-beige/50 group-hover:bg-brand-white group-hover:border-brand-charcoal/30 transition-colors"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
