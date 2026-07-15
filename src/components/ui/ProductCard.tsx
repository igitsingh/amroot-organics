"use client";

import { motion } from "framer-motion";
import { Download, Beaker, Box, Tag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { generateImageAlt, generateImageTitle } from "@/lib/seo/image";
import { productIntelligence } from "@/lib/seo/intelligence";

export interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  imagePlaceholder: string; // Used for the abstract color placeholder
  imageUrl?: string; // Optional real image URL
  accentColorClass?: string; // Optional class for the gradient background
  specifications: {
    curcumin?: string;
    moisture?: string;
    form?: string;
  };
  applications: string[];
  packaging: string;
}

export function ProductCard({
  id,
  name,
  category,
  imagePlaceholder,
  imageUrl,
  accentColorClass = "from-brand-beige/40",
  specifications,
  applications,
  packaging,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group flex flex-col bg-gradient-to-b from-white to-[#FAFAF8] border border-brand-beige/50 rounded-[2rem] overflow-hidden hover:shadow-[0_20px_60px_rgba(45,49,66,0.08)] hover:-translate-y-1 transition-all duration-500"
    >
      {/* Image Area - minimal and large */}
      <div className="relative aspect-[4/3] w-full bg-brand-beige/10 overflow-hidden flex items-center justify-center">
        {imageUrl ? (
          <Image 
            src={imageUrl} 
            alt={generateImageAlt("product", id as keyof typeof productIntelligence)} 
            title={generateImageTitle("product", id as keyof typeof productIntelligence)}
            fill 
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-700" 
          />
        ) : (
          <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-tr ${accentColorClass} to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500`}>
            <div className="text-brand-charcoal/40 font-serif italic text-sm tracking-widest text-center px-4">
              [ {imagePlaceholder} ]
            </div>
          </div>
        )}
        
        {/* Category Tag */}
        <div className="absolute top-5 left-5 bg-brand-charcoal text-[#F4D03F] px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-md">
          {category}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-8 flex flex-col flex-grow relative">
        <h3 className="font-[family-name:var(--font-outfit)] text-3xl font-semibold tracking-tight text-brand-charcoal mb-6 group-hover:text-brand-green transition-colors duration-300">
          {name}
        </h3>

        {/* Tech Specs - Grid Style */}
        <div className="grid grid-cols-2 gap-3 mb-6 flex-grow">
          {specifications.curcumin && (
            <div className="bg-white/60 p-3 rounded-2xl shadow-sm border border-brand-beige/40 flex flex-col justify-center">
              <span className="text-[10px] uppercase tracking-widest text-brand-charcoal/50 mb-1 font-semibold">Curcumin</span>
              <span className="font-medium text-brand-charcoal text-sm">{specifications.curcumin}</span>
            </div>
          )}
          {specifications.moisture && (
            <div className="bg-white/60 p-3 rounded-2xl shadow-sm border border-brand-beige/40 flex flex-col justify-center">
              <span className="text-[10px] uppercase tracking-widest text-brand-charcoal/50 mb-1 font-semibold">Moisture</span>
              <span className="font-medium text-brand-charcoal text-sm">{specifications.moisture}</span>
            </div>
          )}
          {specifications.form && (
            <div className="bg-white/60 p-3 rounded-2xl shadow-sm border border-brand-beige/40 col-span-2 flex flex-col justify-center">
              <span className="text-[10px] uppercase tracking-widest text-brand-charcoal/50 mb-1 font-semibold">Form</span>
              <span className="font-medium text-brand-charcoal text-sm">{specifications.form}</span>
            </div>
          )}
        </div>

        {/* Applications */}
        <div className="mb-6">
          <div className="text-[10px] uppercase tracking-widest text-brand-charcoal/50 mb-3 font-semibold">Ideal For</div>
          <div className="flex flex-wrap gap-2">
            {applications.map((app) => (
              <span key={app} className="text-[11px] font-medium bg-brand-green/10 text-brand-green px-3 py-1.5 rounded-full">
                {app}
              </span>
            ))}
          </div>
        </div>

        {/* Packaging */}
        <div className="mb-8 mt-auto">
          <div className="text-[10px] uppercase tracking-widest text-brand-charcoal/50 mb-2 font-semibold">Packaging</div>
          <p className="text-sm font-medium text-brand-charcoal/80 flex items-center gap-2 bg-white/40 p-3 rounded-xl border border-brand-beige/20">
             <Box className="w-4 h-4 text-brand-green" /> {packaging}
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-auto">
          <Link
            href={`/products/${id}`}
            className="flex-grow flex items-center justify-center gap-2 bg-brand-charcoal text-white px-4 py-3 rounded-xl text-sm font-medium hover:bg-brand-green transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-brand-green/20"
          >
            View Specifications
          </Link>
          <button
            className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-white border border-brand-beige/60 text-brand-charcoal hover:text-brand-green hover:border-brand-green/30 hover:shadow-md transition-all duration-300"
            title="Download COA"
          >
            <Download className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
