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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {TRUST_CARDS.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white px-8 py-10 sm:px-10 sm:py-12 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] cursor-pointer flex flex-col justify-between"
            >
              {/* Animated Hover Border & Shadow */}
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-brand-pink/30 group-hover:shadow-[0_0_30px_rgba(240,138,93,0.15)] transition-all duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon Wrapper */}
                <div className="mb-10 text-brand-green/50 group-hover:text-brand-pink group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 origin-left">
                  <card.icon className="w-10 h-10" strokeWidth={1.5} />
                </div>
                
                {/* Text Content */}
                <h3 className="font-serif text-2xl text-brand-charcoal mb-4 group-hover:text-brand-green transition-colors duration-500">
                  {card.title}
                </h3>
                <p className="text-base text-brand-charcoal/60 leading-relaxed font-light mt-auto">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
