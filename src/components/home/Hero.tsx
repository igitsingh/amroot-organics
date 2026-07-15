"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full min-h-[100vh] lg:min-h-0 bg-[#FAF8F5] flex flex-col justify-center overflow-hidden">
      {/* Image Background - Defines Section Height on Desktop */}
      <div className="absolute lg:relative inset-0 lg:inset-auto w-full h-full lg:h-auto z-0">
        <img 
          src="/mockups/FULL PRODUCTS HERO IMAGE.png" 
          alt="Amroot Organics Hero Background"
          className="w-full h-full lg:h-auto object-cover"
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 w-full h-full mx-auto px-6 lg:px-8 flex flex-col justify-end items-center pb-32 lg:pb-52">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 w-full mt-auto"
        >
          <Link
            href="/request-samples"
            className="w-full sm:w-auto justify-center group flex items-center gap-2 bg-brand-green text-brand-white px-8 py-4 rounded-full text-base font-medium hover:bg-[#023A33] transition-all duration-300 shadow-lg"
          >
            Request Samples
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            href="/products"
            className="w-full sm:w-auto justify-center group flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold text-brand-green bg-[#EAB308] hover:bg-[#D9A05B] transition-all duration-300 shadow-lg"
          >
            Explore Products
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
