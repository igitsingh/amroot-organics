"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/bright-orange-turmeric-powder-close-up-2025-12-17-11-33-22-utc.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay to ensure text readability on the left, clear video on the right */}
        {/* On mobile, we make the gradient much stronger since text overlays the whole video */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-pink/90 sm:from-brand-pink/60 via-brand-pink/60 sm:via-brand-pink/20 to-brand-pink/30 sm:to-transparent" />
        
        {/* Decorative elements over the video */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-brand-beige/40 to-transparent pointer-events-none hidden sm:block" />
        <div className="absolute -left-32 -top-32 w-96 h-96 bg-brand-pink/20 sm:bg-brand-pink/10 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="w-full mx-auto px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl leading-[1.1] text-brand-charcoal tracking-tight mb-8">
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
              className="w-full sm:w-auto justify-center group flex items-center gap-2 bg-brand-charcoal text-white px-8 py-4 rounded-full text-base font-medium hover:bg-brand-charcoal/90 transition-all duration-300"
            >
              Request Samples
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/products"
              className="w-full sm:w-auto justify-center group flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium text-brand-charcoal border border-brand-charcoal/30 sm:border-brand-charcoal/10 hover:border-brand-charcoal/30 bg-white/50 sm:bg-transparent hover:bg-brand-white transition-all duration-300"
            >
              Explore Products
            </Link>
          </motion.div>
        </div>

        {/* Visual / Location Area */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-full flex flex-col justify-end items-end min-h-[300px] lg:min-h-[500px]"
        >
          {/* Location Tag */}
          <div className="bg-white/90 backdrop-blur-sm px-5 py-4 rounded-2xl shadow-xl flex items-start gap-3 border border-white/20 max-w-sm mb-4 lg:mb-12">
            <MapPin className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-bold text-brand-charcoal uppercase tracking-widest">
                LAKADONG TURMERIC
              </span>
              <span className="text-[9px] font-medium text-brand-charcoal/70 uppercase leading-relaxed">
                LAKADONG, West Jaintia Hills (formerly Jaintia Hills), Laskein, Meghalaya, India - 793150
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
