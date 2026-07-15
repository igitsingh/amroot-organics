"use client";

import { motion } from "framer-motion";
import { Search, Sun, Settings, BugOff } from "lucide-react";

const processes = [
  {
    icon: <Sun className="w-6 h-6 text-brand-orange" />,
    title: "Scientific Sun-Drying",
    description: "Our rhizomes are cleaned and sun-dried on raised, hygienic platforms to maintain optimal moisture levels without sacrificing essential oils."
  },
  {
    icon: <Search className="w-6 h-6 text-brand-green" />,
    title: "Optical & Manual Sorting",
    description: "Every batch passes through advanced optical color sorters and manual inspection to remove impurities, foreign matter, and off-spec roots."
  },
  {
    icon: <Settings className="w-6 h-6 text-brand-charcoal" />,
    title: "Metal Detection",
    description: "Post-processing, all products are screened through multi-stage metal detectors and rare-earth magnets to ensure zero contamination."
  },
  {
    icon: <BugOff className="w-6 h-6 text-brand-pink" />,
    title: "Aflatoxin & Microbial Control",
    description: "Strict environmental controls and hygiene protocols eliminate the risk of mold, aflatoxins, and harmful microbial growth during storage."
  }
];

export function ProcessingStandards() {
  return (
    <section className="py-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-bold text-brand-green uppercase tracking-widest mb-4">
            Physical Processing
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif text-brand-charcoal mb-6">
            Engineered for Purity
          </h3>
          <p className="text-lg text-brand-charcoal/70">
            From the moment the harvest reaches our facility, we deploy state-of-the-art technology to ensure that only the purest ingredients make it to your supply chain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-[2rem] p-8 border border-brand-charcoal/10 hover:shadow-xl hover:shadow-brand-charcoal/5 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-beige flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {process.icon}
              </div>
              <h4 className="text-xl font-serif font-medium text-brand-charcoal mb-3">
                {process.title}
              </h4>
              <p className="text-brand-charcoal/70 leading-relaxed text-sm">
                {process.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
