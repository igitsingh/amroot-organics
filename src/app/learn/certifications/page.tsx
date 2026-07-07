"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Leaf, FileText, CheckCircle2, Globe2 } from "lucide-react";
import Link from "next/link";

const CERTIFICATIONS = [
  {
    title: "USDA Organic",
    description: "Certified to meet strict United States Department of Agriculture standards for organic farming, ensuring no synthetic fertilizers or pesticides.",
    icon: Leaf,
  },
  {
    title: "India Organic / NPOP",
    description: "Compliant with the National Programme for Organic Production standards, guaranteeing authentic Indian organic cultivation.",
    icon: Award,
  },
  {
    title: "GMP Certified",
    description: "Manufactured in Good Manufacturing Practice (GMP) certified facilities to ensure consistent quality and safety.",
    icon: ShieldCheck,
  },
  {
    title: "ISO 9001:2015",
    description: "Adherence to international standards for Quality Management Systems across our entire supply chain.",
    icon: Globe2,
  },
  {
    title: "Non-GMO Verified",
    description: "100% free from genetically modified organisms, preserving the natural genetic integrity of Lakadong Turmeric.",
    icon: CheckCircle2,
  },
  {
    title: "Lab Tested (COA)",
    description: "Every batch comes with a detailed Certificate of Analysis for Curcumin content, heavy metals, and microbial load.",
    icon: FileText,
  }
];

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-brand-beige pb-24 pt-32 lg:pt-40">
      {/* Hero Section */}
      <section className="px-6 lg:px-8 w-full mx-auto mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-brand-pink font-bold tracking-widest uppercase text-sm mb-4 block">
            Quality Assurance
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-brand-green mb-6 tracking-tight">
            Global Standards & <br className="hidden lg:block"/> Certifications
          </h1>
          <p className="text-lg text-brand-charcoal/80 max-w-2xl mx-auto leading-relaxed">
            We hold ourselves to the highest international standards. Our commitment to quality, transparency, and organic integrity ensures you receive only the finest Lakadong Turmeric.
          </p>
        </motion.div>
      </section>

      {/* Grid Section */}
      <section className="px-6 lg:px-8 w-full mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CERTIFICATIONS.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-brand-white p-8 rounded-3xl shadow-sm border border-brand-green/10 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-beige flex items-center justify-center mb-6 group-hover:bg-brand-green transition-colors duration-300">
                  <Icon className="w-7 h-7 text-brand-green group-hover:text-brand-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-brand-charcoal mb-3">
                  {cert.title}
                </h3>
                <p className="text-brand-charcoal/70 leading-relaxed text-sm">
                  {cert.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-brand-green rounded-[2.5rem] p-10 lg:p-16 text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
          
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-white mb-6 relative z-10">
            Need Compliance Documents?
          </h2>
          <p className="text-brand-white/80 mb-10 max-w-xl mx-auto text-lg relative z-10">
            For B2B buyers and distributors, we provide complete transparency. Request our latest Certificates of Analysis, spec sheets, and organic certificates.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-white text-brand-green px-8 py-4 rounded-full font-semibold hover:bg-brand-beige hover:shadow-lg transition-all duration-300 relative z-10"
          >
            Request Documents
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
