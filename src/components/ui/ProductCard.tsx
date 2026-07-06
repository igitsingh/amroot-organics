"use client";

import { motion } from "framer-motion";
import { Download, Beaker, Box, Tag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export interface ProductCardProps {
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
      className="group flex flex-col bg-white border border-brand-beige/50 rounded-3xl overflow-hidden hover:shadow-[0_20px_60px_rgba(45,49,66,0.06)] transition-all duration-700"
    >
      {/* Image Area - minimal and large */}
      <div className="relative aspect-[4/3] w-full bg-brand-beige/10 overflow-hidden flex items-center justify-center">
        {imageUrl ? (
          <Image 
            src={imageUrl} 
            alt={name} 
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
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-brand-beige/50 text-xs font-medium text-brand-charcoal">
          {category}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="font-serif text-2xl text-brand-charcoal mb-6 group-hover:text-brand-green transition-colors duration-300">
          {name}
        </h3>

        {/* Tech Specs */}
        <div className="space-y-4 mb-8 flex-grow">
          {/* Specifications */}
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-brand-charcoal/50 uppercase tracking-wider mb-2">
              <Beaker className="w-3.5 h-3.5" />
              Specifications
            </div>
            <ul className="text-sm text-brand-charcoal/80 space-y-1">
              {specifications.curcumin && (
                <li className="flex justify-between">
                  <span className="text-brand-charcoal/60">Curcumin</span>
                  <span className="font-medium">{specifications.curcumin}</span>
                </li>
              )}
              {specifications.moisture && (
                <li className="flex justify-between">
                  <span className="text-brand-charcoal/60">Moisture</span>
                  <span className="font-medium">{specifications.moisture}</span>
                </li>
              )}
              {specifications.form && (
                <li className="flex justify-between">
                  <span className="text-brand-charcoal/60">Form</span>
                  <span className="font-medium">{specifications.form}</span>
                </li>
              )}
            </ul>
          </div>

          <div className="h-px w-full bg-brand-beige/50" />

          {/* Applications */}
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-brand-charcoal/50 uppercase tracking-wider mb-2">
              <Tag className="w-3.5 h-3.5" />
              Applications
            </div>
            <div className="flex flex-wrap gap-2">
              {applications.map((app) => (
                <span key={app} className="text-xs bg-brand-beige/30 text-brand-charcoal/80 px-2 py-1 rounded-md">
                  {app}
                </span>
              ))}
            </div>
          </div>

          <div className="h-px w-full bg-brand-beige/50" />

          {/* Packaging */}
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-brand-charcoal/50 uppercase tracking-wider mb-1">
              <Box className="w-3.5 h-3.5" />
              Packaging
            </div>
            <p className="text-sm text-brand-charcoal/80">{packaging}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-brand-beige/50">
          <Link
            href={`/products/${name.toLowerCase().replace(/ /g, "-")}`}
            className="flex-grow flex items-center justify-center gap-2 bg-brand-white border border-brand-beige text-brand-charcoal px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-brand-charcoal hover:text-white transition-all duration-300"
          >
            View Details
          </Link>
          <button
            className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl border border-brand-beige text-brand-charcoal hover:text-brand-green hover:border-brand-green/30 transition-all duration-300"
            title="Download Specifications (COA)"
          >
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
