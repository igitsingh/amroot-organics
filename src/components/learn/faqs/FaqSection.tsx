"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    category: "Ordering & Logistics",
    questions: [
      {
        q: "What is your Minimum Order Quantity (MOQ)?",
        a: "Our standard B2B MOQ for export is 1 Metric Ton (MT). However, we do accept smaller trial orders (e.g. 100kg-500kg) for testing and formulation purposes before committing to an FCL (Full Container Load)."
      },
      {
        q: "Do you offer private labeling or custom packaging?",
        a: "Yes. While our standard packing is 25kg multi-wall Kraft bags with PE liners, we offer custom packaging and private labeling services for established B2B partners. Contact our export team for details."
      },
      {
        q: "Which incoterms do you support?",
        a: "We commonly work with FOB (Free On Board) and CIF (Cost, Insurance, and Freight). Our port of loading is primarily Nhava Sheva (Mumbai) or Kolkata, India."
      }
    ]
  },
  {
    category: "Quality & Testing",
    questions: [
      {
        q: "Do you provide batch-wise Certificates of Analysis (COA)?",
        a: "Absolutely. Every single batch we export is accompanied by a comprehensive COA from independent, internationally accredited laboratories such as Eurofins or SGS."
      },
      {
        q: "How do you ensure your products are free of Aflatoxin and Heavy Metals?",
        a: "Our processing facilities adhere strictly to ISO 22000:2018 and GMP standards. Our ginger and turmeric undergo rigorous testing at multiple stages to ensure Aflatoxins, Pesticide Residues, and Heavy Metals are well below the strict limits set by the EU and US FDA."
      }
    ]
  },
  {
    category: "Product Specifics",
    questions: [
      {
        q: "What makes Lakadong Turmeric different?",
        a: "Lakadong turmeric is an heirloom variety grown exclusively in the Jaintia Hills of Meghalaya. It is renowned globally for having one of the highest curcumin concentrations (7% to 9%), making it highly sought after for nutraceutical and pharmaceutical applications."
      },
      {
        q: "What is the shelf life of your processed spices?",
        a: "When stored correctly in cool, dry conditions away from direct sunlight, our processed turmeric and ginger powders have a shelf life of 24 months from the date of manufacturing."
      }
    ]
  }
];

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<string | null>("0-0"); // Default open the first one

  const toggle = (id: string) => {
    setOpenIdx(openIdx === id ? null : id);
  };

  return (
    <section className="py-24 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-charcoal mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-brand-charcoal/70">
            Everything you need to know about partnering with Amroot Organics for your global supply chain.
          </p>
        </div>

        <div className="space-y-12">
          {faqData.map((category, catIdx) => (
            <div key={catIdx}>
              <h2 className="text-sm font-bold text-brand-green uppercase tracking-widest mb-6 border-b border-brand-charcoal/10 pb-2">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, qIdx) => {
                  const id = `${catIdx}-${qIdx}`;
                  const isOpen = openIdx === id;

                  return (
                    <motion.div 
                      key={id}
                      initial={false}
                      animate={{ backgroundColor: isOpen ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)" }}
                      className={`border border-brand-charcoal/10 rounded-2xl overflow-hidden transition-colors ${isOpen ? 'shadow-sm' : 'hover:border-brand-charcoal/30 hover:bg-white/50'}`}
                    >
                      <button
                        onClick={() => toggle(id)}
                        className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                      >
                        <span className="font-serif text-lg text-brand-charcoal pr-8">{faq.q}</span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-brand-charcoal/5"
                        >
                          <ChevronDown className="w-5 h-5 text-brand-charcoal" />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="px-6 pb-6 pt-0 text-brand-charcoal/70 leading-relaxed text-sm md:text-base">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
