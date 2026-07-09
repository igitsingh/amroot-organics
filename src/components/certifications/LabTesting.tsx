"use client";

import { motion } from "framer-motion";
import { FlaskConical, FileCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export function LabTesting() {
  const testParameters = [
    { name: "Active Compounds", desc: "Curcuminoids (7-12%) & Essential Oils via HPLC testing." },
    { name: "Heavy Metals", desc: "Strict compliance for Lead, Arsenic, Cadmium, and Mercury limits." },
    { name: "Pesticide Residues (MRLs)", desc: "Screened against 400+ compounds to meet EU & US EPA standards." },
    { name: "Microbiology", desc: "Tested for Salmonella, E. coli, Yeast & Mold, and Total Plate Count." },
    { name: "Mycotoxins", desc: "Rigorous testing for Aflatoxins (B1, B2, G1, G2) and Ochratoxin A." },
    { name: "Adulterants", desc: "100% free from Sudan dyes, synthetic colors, and starch fillers." },
  ];

  return (
    <section className="py-24 bg-brand-charcoal text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-orange/10 to-transparent blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <FlaskConical className="w-4 h-4 text-brand-orange" />
              <span className="text-xs font-bold tracking-widest text-white/90 uppercase">Independent Verification</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-5xl mb-6 leading-tight">
              Rigorous 3rd-Party <br />
              <span className="text-brand-orange italic font-light">Laboratory Testing</span>
            </h2>
            
            <p className="text-white/70 leading-relaxed mb-8 text-lg">
              We understand that a single rejected shipment can disrupt your entire supply chain. That is why every batch of Amroot Organics turmeric and ginger undergoes exhaustive testing at internationally accredited laboratories (such as Eurofins and SGS) before export.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 flex items-start gap-4">
              <FileCheck className="w-8 h-8 text-brand-green shrink-0" />
              <div>
                <h4 className="font-bold text-lg mb-2">Certificate of Analysis (COA)</h4>
                <p className="text-sm text-white/60">
                  A comprehensive, batch-specific COA accompanies every commercial invoice, providing absolute transparency and peace of mind for your quality assurance team.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-full font-medium hover:bg-[#d96c20] transition-all"
            >
              Request a Sample COA <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="w-full lg:w-1/2">
            <h3 className="font-serif text-2xl mb-6 border-b border-white/10 pb-4">Standard Testing Parameters</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {testParameters.map((param, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors"
                >
                  <h4 className="font-bold text-brand-orange mb-2 text-sm">{param.name}</h4>
                  <p className="text-xs text-white/60 leading-relaxed">{param.desc}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-xs text-white/40 mt-6 text-center italic">
              *Testing parameters can be customized based on specific importer requirements and destination country regulations.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
