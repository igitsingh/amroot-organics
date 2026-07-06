"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Abstract premium background instead of standard image for now */}
      <div className="absolute inset-0 bg-brand-white z-0">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-brand-beige/40 to-transparent pointer-events-none" />
        <div className="absolute -left-32 -top-32 w-96 h-96 bg-brand-pink/10 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.1] text-brand-charcoal tracking-tight mb-8">
              Single-Origin Ingredients. <br className="hidden sm:block" />
              <span className="text-brand-green italic font-light">Trusted Worldwide.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl text-brand-charcoal/70 leading-relaxed mb-10 max-w-lg font-light"
          >
            Premium turmeric and natural ingredients sourced from India for global brands,
            distributors and manufacturers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <Link
              href="/request-samples"
              className="group flex items-center gap-2 bg-brand-charcoal text-white px-8 py-4 rounded-full text-base font-medium hover:bg-brand-charcoal/90 transition-all duration-300"
            >
              Request Samples
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/products"
              className="group flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium text-brand-charcoal border border-brand-charcoal/10 hover:border-brand-charcoal/30 hover:bg-brand-white transition-all duration-300"
            >
              Explore Products
            </Link>
          </motion.div>
        </div>

        {/* Visual / Image Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/5] lg:aspect-square w-full max-w-lg mx-auto lg:ml-auto"
        >
          {/* This will hold a museum-quality product image later */}
          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-brand-charcoal/5" />
            <Image 
              src="/turmeric-roots-shutterstock_2136388251.jpg" 
              alt="Premium Raw Turmeric Root" 
              fill 
              className="object-cover"
              priority
            />
            {/* Subtle decorative elements for premium feel */}
            <div className="absolute top-6 left-6 w-2 h-2 rounded-full bg-brand-pink/40" />
            <div className="absolute bottom-6 right-6 flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-green/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-brand-green/20" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
