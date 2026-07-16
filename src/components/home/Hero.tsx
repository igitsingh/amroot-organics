"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { generateImageAlt, generateImageTitle } from "@/lib/seo/image";

export function Hero() {
  return (
    <section className="relative w-full min-h-[100vh] lg:min-h-0 bg-[#FAF8F5] flex flex-col justify-center overflow-hidden">
      {/* Image Background - Defines Section Height on Desktop */}
      <div className="absolute lg:relative inset-0 lg:inset-auto w-full h-full lg:h-auto z-0 lg:-mt-[4%] lg:-mb-[1%]">
        <img
          src="/mockups/FULL PRODUCTS HERO IMAGE_FULL.png"
          alt={generateImageAlt("hero")}
          title={generateImageTitle("hero")}
          className="w-full h-full lg:h-auto object-cover"
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 w-full h-full pointer-events-none flex flex-col justify-end pb-12 sm:pb-0 sm:block">

        {/* --- MOBILE BUTTONS (Stacked at bottom) --- */}
        <div className="flex sm:hidden flex-col gap-4 items-center justify-center pointer-events-auto px-6 w-full mt-auto mb-16">
          <Link
            href="/export/quantity"
            className="w-full flex justify-center items-center gap-2 bg-brand-green text-brand-white px-6 py-4 rounded-full text-[15px] font-medium shadow-xl hover:bg-[#023A33] transition-all"
          >
            Export Quantity
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/products"
            className="w-full flex justify-center items-center gap-2 bg-[#EAB308] text-brand-green px-6 py-4 rounded-full text-[15px] font-bold shadow-xl hover:bg-[#D9A05B] transition-all"
          >
            Explore Products
          </Link>
        </div>

        {/* --- DESKTOP BUTTONS (Absolute positioned to match image text) --- */}
        {/* Left Button (Under RARE NATURE) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="hidden sm:flex absolute top-[35%] sm:top-[32%] lg:top-[29%] left-[14%] lg:left-[20%] xl:left-[23%] pointer-events-auto justify-start"
        >
          <Link
            href="/export/quantity"
            className="group flex items-center gap-2 bg-brand-green text-brand-white px-6 lg:px-8 py-3 lg:py-4 rounded-full text-sm lg:text-base font-medium hover:bg-[#023A33] transition-all duration-300 shadow-lg"
          >
            Export Quantity
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Right Button (Under RARE ORIGIN) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="hidden sm:flex absolute top-[32%] sm:top-[28%] lg:top-[25%] right-[16%] lg:right-[21%] xl:right-[24%] pointer-events-auto justify-end"
        >
          <Link
            href="/products"
            className="group flex items-center gap-2 px-6 lg:px-8 py-3 lg:py-4 rounded-full text-sm lg:text-base font-bold text-brand-green bg-[#EAB308] hover:bg-[#D9A05B] transition-all duration-300 shadow-lg"
          >
            Explore Products
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
