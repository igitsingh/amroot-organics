"use client";

import { motion, Variants } from "framer-motion";
import { Sparkles, ScanLine, Combine, Settings2, PackageCheck, Microscope } from "lucide-react";

const STANDARDS = [
  {
    icon: <Sparkles className="w-5 h-5 text-brand-charcoal" />,
    title: "Cleaning",
    description: "Multi-stage high-pressure washing removes soil and surface impurities while preserving the rhizome's delicate volatile oils."
  },
  {
    icon: <ScanLine className="w-5 h-5 text-brand-charcoal" />,
    title: "Sorting",
    description: "Advanced optical color sorting and rigorous manual inspection eliminate off-spec roots and any foreign matter."
  },
  {
    icon: <Combine className="w-5 h-5 text-brand-charcoal" />,
    title: "Grinding",
    description: "Temperature-controlled cryogenic and cool-grinding techniques prevent the degradation of heat-sensitive active compounds."
  },
  {
    icon: <Settings2 className="w-5 h-5 text-brand-charcoal" />,
    title: "Metal Detection",
    description: "Post-processing screening through rare-earth magnets and inline metal detectors ensures absolute product safety."
  },
  {
    icon: <PackageCheck className="w-5 h-5 text-brand-charcoal" />,
    title: "Packaging",
    description: "Hermetic sealing in multi-wall kraft paper sacks with food-grade liners prevents moisture ingress during global transit."
  },
  {
    icon: <Microscope className="w-5 h-5 text-brand-charcoal" />,
    title: "Testing",
    description: "Comprehensive third-party laboratory analysis confirms curcumin/gingerol levels, heavy metal compliance, and microbiological safety."
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export function ProcessingStandards() {
  return (
    <section className="py-24 lg:py-32 bg-brand-beige/20 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center mb-20 lg:mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-xs uppercase tracking-[0.2em] text-brand-charcoal/60 mb-6 block"
          >
            Processing Standards
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-charcoal mb-6 leading-tight max-w-3xl"
          >
            Engineered for <span className="italic">Absolute Purity.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-brand-charcoal/70 text-sm sm:text-base max-w-2xl leading-relaxed"
          >
            Processed through carefully selected partner facilities operating under defined quality protocols.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {STANDARDS.map((standard, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group flex flex-col bg-brand-white border border-brand-charcoal/5 p-8 lg:p-10 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-charcoal/5 hover:border-brand-charcoal/20"
            >
              <div className="mb-8 w-12 h-12 flex items-center justify-center rounded-full bg-brand-beige/50 group-hover:bg-brand-charcoal group-hover:text-brand-white transition-colors duration-500">
                <div className="transition-colors duration-500 group-hover:text-brand-white [&>svg]:text-inherit">
                  {standard.icon}
                </div>
              </div>
              
              <h3 className="font-serif text-2xl text-brand-charcoal mb-4">
                {standard.title}
              </h3>
              
              <p className="font-sans text-sm text-brand-charcoal/60 leading-relaxed">
                {standard.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
