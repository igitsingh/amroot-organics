"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Globe, Leaf, TrendingUp, ShieldCheck } from "lucide-react";

export default function MissionGoldenSpicePage() {
  return (
    <div className="min-h-screen bg-brand-beige pb-24 pt-32 lg:pt-40">
      {/* Hero Section */}
      <section className="px-6 lg:px-8 w-full mx-auto mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-brand-pink font-bold tracking-widest uppercase text-sm mb-4 flex items-center justify-center gap-2">
            <Globe className="w-4 h-4" />
            Industry Insights
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold font-serif text-brand-green mb-6 tracking-tight max-w-4xl mx-auto">
            Understanding "Mission Golden Spice"
          </h1>
          <p className="text-lg text-brand-charcoal/80 max-w-2xl mx-auto leading-relaxed">
            An independent overview of the ₹175 Crore Government of India initiative aimed at elevating Meghalaya's Lakadong turmeric into a global luxury brand.
          </p>
        </motion.div>
      </section>

      {/* What is Mission Golden Spice */}
      <section className="px-6 lg:px-8 max-w-5xl mx-auto mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-white p-10 lg:p-16 rounded-[2.5rem] shadow-sm border border-brand-green/10"
        >
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-24 h-24 rounded-[2rem] bg-brand-pink/20 flex items-center justify-center">
                <ShieldCheck className="w-12 h-12 text-brand-pink" strokeWidth={1.5} />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold font-serif text-brand-charcoal mb-4">What is the Initiative?</h2>
              <p className="text-brand-charcoal/70 leading-relaxed mb-4 text-lg">
                Launched on July 21, 2026, by the Union Minister for Development of North Eastern Region (MDoNER) and the Meghalaya Chief Minister, "Mission Golden Spice" is a comprehensive ₹175.45 crore government project. 
              </p>
              <p className="text-brand-charcoal/70 leading-relaxed text-lg">
                Operating under a Community-Public-Private Partnership (CPPP) model, the five-year initiative focuses on building the necessary infrastructure to process, brand, and export Lakadong Turmeric to discerning international markets, overcoming structural bottlenecks in the value chain.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Why It Matters */}
      <section className="px-6 lg:px-8 w-full mx-auto mb-24 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold font-serif text-brand-charcoal mb-4">Why It Matters to International Buyers</h2>
          <p className="text-lg text-brand-charcoal/70 max-w-2xl mx-auto">
            For global B2B buyers, this initiative serves as strong independent validation of Lakadong turmeric's unique value proposition.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-brand-white p-8 rounded-3xl shadow-sm border border-brand-green/10 hover:shadow-md transition-all duration-300"
          >
            <div className="text-brand-green font-bold text-4xl opacity-20 mb-4 font-serif">01</div>
            <h3 className="text-xl font-bold text-brand-charcoal mb-3">Scientific Validation of Quality</h3>
            <p className="text-brand-charcoal/70 leading-relaxed">
              The core driver behind this investment is the spice's extraordinary curcumin content. Lakadong consistently yields between 7% and 12%, making it highly sought after in nutraceuticals and premium culinary applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-brand-white p-8 rounded-3xl shadow-sm border border-brand-green/10 hover:shadow-md transition-all duration-300"
          >
            <div className="text-brand-green font-bold text-4xl opacity-20 mb-4 font-serif">02</div>
            <h3 className="text-xl font-bold text-brand-charcoal mb-3">Supply Chain Robustness</h3>
            <p className="text-brand-charcoal/70 leading-relaxed">
              The initiative addresses historically fragmented post-harvest processing. By investing in modern facilities, international buyers can expect greater consistency, scalability, and quality control.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-brand-white p-8 rounded-3xl shadow-sm border border-brand-green/10 hover:shadow-md transition-all duration-300"
          >
            <div className="text-brand-green font-bold text-4xl opacity-20 mb-4 font-serif">03</div>
            <h3 className="text-xl font-bold text-brand-charcoal mb-3">Sustainable Procurement</h3>
            <p className="text-brand-charcoal/70 leading-relaxed">
              The mission aims to create over 3,000 women-led jobs and double farmer incomes by 2030, reinforcing the region's commitment to equitable, sustainable agriculture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-green rounded-[2.5rem] p-10 lg:p-16 text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          
          <div className="w-16 h-16 rounded-full bg-brand-white/10 flex items-center justify-center mx-auto mb-6 relative z-10">
             <Leaf className="w-8 h-8 text-brand-white" strokeWidth={1.5} />
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold font-serif text-brand-white mb-6 relative z-10">
            The Lakadong Advantage at Amroot Organics
          </h2>
          <p className="text-brand-white/80 mb-10 max-w-xl mx-auto text-lg relative z-10">
            The growing global recognition highlighted by this major initiative underscores the importance of sourcing authentic, single-origin produce. We independently source this exceptional "Golden Spice" directly from the heart of the Jaintia Hills.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link
              href="/products"
              className="inline-flex items-center justify-center bg-brand-white text-brand-green px-8 py-4 rounded-full font-semibold hover:bg-brand-beige hover:shadow-lg transition-all duration-300 gap-2 group"
            >
              Explore Our Turmeric
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
