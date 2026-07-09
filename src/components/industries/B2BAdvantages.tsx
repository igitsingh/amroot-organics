"use client";

import { motion } from "framer-motion";
import { Settings, RefreshCw, FileText, Globe } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function B2BAdvantages() {
  const advantages = [
    {
      title: "Batch-to-Batch Consistency",
      description: "Our standardized processing ensures that your formulation receives the exact same color, flavor, and active compound profile in every shipment.",
      icon: <RefreshCw className="w-6 h-6 text-brand-orange" />
    },
    {
      title: "Custom Processing",
      description: "Need a specific mesh size for a beverage powder? Or a specific cut for extraction? We tailor our milling and processing to your exact manufacturing requirements.",
      icon: <Settings className="w-6 h-6 text-brand-green" />
    },
    {
      title: "Full Traceability & COAs",
      description: "Every shipment comes with a comprehensive Certificate of Analysis (COA) from accredited labs, detailing microbiological and heavy metal compliance.",
      icon: <FileText className="w-6 h-6 text-brand-orange" />
    },
    {
      title: "Global Export Logistics",
      description: "From FOB to CIF, our export team handles the complexities of international shipping, customs documentation, and phytosanitary certificates.",
      icon: <Globe className="w-6 h-6 text-brand-green" />
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          <div className="w-full lg:w-1/3">
            <h2 className="text-sm font-bold text-brand-green uppercase tracking-widest mb-4">
              Manufacturing Partner
            </h2>
            <h3 className="font-serif text-3xl sm:text-4xl text-brand-charcoal mb-6 leading-tight">
              Why Brands Trust Amroot
            </h3>
            <p className="text-brand-charcoal/70 leading-relaxed mb-10 text-lg">
              We go beyond merely supplying ingredients. We act as an extension of your supply chain, ensuring that the raw materials you receive eliminate production headaches and elevate your final product.
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-charcoal text-white px-8 py-4 rounded-full font-medium hover:bg-black transition-all"
            >
              Contact Export Team <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {advantages.map((adv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#FAF8F5] p-8 rounded-3xl border border-brand-charcoal/5"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm border border-brand-charcoal/5">
                  {adv.icon}
                </div>
                <h4 className="text-xl font-serif text-brand-charcoal mb-3">{adv.title}</h4>
                <p className="text-sm text-brand-charcoal/70 leading-relaxed">
                  {adv.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
