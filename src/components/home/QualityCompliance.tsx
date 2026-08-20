"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileCheck, FlaskConical, Globe2, Headphones } from "lucide-react";
import Link from "next/link";

const CARDS = [
  {
    title: "Laboratory Testing",
    icon: FlaskConical,
    items: ["Curcumin", "Gingerol", "Moisture", "Heavy Metals", "Microbiology"],
  },
  {
    title: "Batch Documentation",
    icon: FileCheck,
    items: ["COA", "Traceability Records", "Lot Tracking"],
  },
  {
    title: "Export Compliance",
    icon: Globe2,
    items: ["IEC", "APEDA", "FSSAI", "Spice Board"],
  },
  {
    title: "Buyer Support",
    icon: Headphones,
    items: ["Technical Specifications", "Product Sheets", "Export Documents"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function QualityCompliance() {
  return (
    <section className="py-24 lg:py-32 bg-brand-white relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-beige/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20 lg:mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-xs uppercase tracking-[0.2em] text-brand-charcoal/60 mb-6"
          >
            Quality & Compliance
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brand-charcoal mb-6 leading-tight"
          >
            Every Claim Backed <br className="hidden sm:block" />
            <span className="italic text-brand-charcoal/70">By Evidence.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-base lg:text-lg text-brand-charcoal/70 max-w-2xl font-light"
          >
            Every production batch is tested, documented and verified before export.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20"
        >
          {CARDS.map((card, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group flex flex-col bg-brand-white border border-brand-charcoal/10 rounded-2xl p-8 hover:bg-brand-beige/20 transition-all duration-500 ease-out"
            >
              <div className="mb-10">
                <card.icon className="w-6 h-6 text-brand-charcoal/40 group-hover:text-brand-charcoal transition-colors duration-500" strokeWidth={1.5} />
              </div>
              
              <h3 className="font-sans font-medium text-lg text-brand-charcoal mb-6">
                {card.title}
              </h3>
              
              <ul className="flex flex-col gap-3 mt-auto">
                {card.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-brand-charcoal/60">
                    <span className="w-1 h-1 bg-brand-charcoal/20 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <Link 
            href="/contact"
            className="group flex items-center gap-3 px-8 py-4 bg-brand-charcoal text-brand-white rounded-full font-sans text-sm tracking-wide hover:bg-brand-green transition-all duration-300 shadow-xl shadow-brand-charcoal/5"
          >
            Request Sample COA
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
