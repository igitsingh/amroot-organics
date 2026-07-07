"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Sparkles,
  Layers,
  Plane,
  Microscope,
  Search,
  Tag,
  PackageOpen,
  Truck,
  FileText,
  Headset,
  Handshake,
} from "lucide-react";

const TRUST_CARDS = [
  {
    title: "Single-Origin Sourcing",
    description: "Direct from verified farms, ensuring uncompromised purity and ethical practices.",
    icon: MapPin,
  },
  {
    title: "High Curcumin Potential",
    description: "Scientifically tested for optimal active compound concentrations.",
    icon: Sparkles,
  },
  {
    title: "Batch Consistency",
    description: "Rigorous processing standards guarantee uniform color, flavor, and potency.",
    icon: Layers,
  },
  {
    title: "Export Ready",
    description: "Compliant with international food safety and agricultural import standards.",
    icon: Plane,
  },
  {
    title: "Lab Tested",
    description: "Every batch is analyzed for heavy metals, microbiology, and moisture.",
    icon: Microscope,
  },
  {
    title: "Traceable Supply Chain",
    description: "Complete visibility from farm harvest to final packaging.",
    icon: Search,
  },
  {
    title: "Private Label",
    description: "Custom packaging solutions tailored to your brand identity.",
    icon: Tag,
  },
  {
    title: "Bulk Orders",
    description: "Scalable production capacity to meet global distribution needs.",
    icon: PackageOpen,
  },
  {
    title: "Reliable Logistics",
    description: "Partnerships with premium freight forwarders for timely delivery.",
    icon: Truck,
  },
  {
    title: "Global Documentation",
    description: "Comprehensive COAs and import documentation provided standard.",
    icon: FileText,
  },
  {
    title: "Responsive Support",
    description: "Dedicated account managers for international procurement teams.",
    icon: Headset,
  },
  {
    title: "Long-Term Partnership",
    description: "Built on transparency, reliability, and mutual growth.",
    icon: Handshake,
  },
];

export function TrustCards() {
  return (
    <section className="py-24 bg-brand-white relative">
      <div className="w-full mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-charcoal mb-6"
          >
            Built for Global <br/>
            <span className="text-brand-green italic">Procurement</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-brand-charcoal/70 text-lg font-light leading-relaxed"
          >
            Our infrastructure is designed to give you absolute confidence. From farm to facility to freight, 
            every step is optimized for quality and reliability.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {TRUST_CARDS.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group bg-white p-8 rounded-2xl border border-brand-beige/50 hover:border-brand-pink/30 hover:shadow-[0_8px_30px_rgba(45,49,66,0.04)] transition-all duration-500 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-beige/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-green/5 transition-all duration-500">
                <card.icon className="w-6 h-6 text-brand-charcoal group-hover:text-brand-green transition-colors duration-500" strokeWidth={1.5} />
              </div>
              <h3 className="font-sans font-medium text-lg text-brand-charcoal mb-3 group-hover:text-brand-green transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-sm text-brand-charcoal/60 leading-relaxed font-light">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
