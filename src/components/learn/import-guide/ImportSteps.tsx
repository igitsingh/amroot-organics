"use client";

import { motion } from "framer-motion";
import { FileText, Ship, Stamp, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: <FileText className="w-6 h-6 text-brand-green" />,
    title: "1. Purchase & Documentation",
    description: "Once the Proforma Invoice (PI) is signed and the advance payment is received, we initiate processing. We prepare all commercial invoices, packing lists, and Certificates of Origin."
  },
  {
    icon: <Stamp className="w-6 h-6 text-[#3498DB]" />,
    title: "2. Lab Testing & Phytosanitary",
    description: "Every shipment is accompanied by a batch-specific Certificate of Analysis (COA) from an independent lab, and a Phytosanitary Certificate issued by the Plant Quarantine Authority of India."
  },
  {
    icon: <Ship className="w-6 h-6 text-brand-orange" />,
    title: "3. Freight & Logistics",
    description: "For FOB orders, we deliver to the designated port (Nhava Sheva/Kolkata). For CIF orders, we manage ocean or air freight directly to your destination port, complete with marine insurance."
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-brand-charcoal" />,
    title: "4. Customs Clearance",
    description: "We provide the Bill of Lading (B/L) and all required FDA/EU compliance documents promptly, ensuring your customs broker can clear the shipment without delays."
  }
];

export function ImportSteps() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-bold text-brand-green uppercase tracking-widest mb-4">
            The Process
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif text-brand-charcoal mb-6">
            From Our Farms to Your Facility
          </h3>
          <p className="text-lg text-brand-charcoal/70">
            We handle the complexities of export compliance so you can focus on your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#FAF8F5] rounded-[2rem] p-8 border border-brand-charcoal/10 hover:shadow-xl hover:shadow-brand-charcoal/5 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h4 className="text-xl font-serif font-medium text-brand-charcoal mb-3">
                {step.title}
              </h4>
              <p className="text-brand-charcoal/70 leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
