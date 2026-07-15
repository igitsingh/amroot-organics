"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Building2, Globe2, ShieldCheck, FileCheck } from "lucide-react";
import Image from "next/image";

export default function ExportQuantityPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] pt-24 lg:pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 xl:px-24">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-[family-name:var(--font-outfit)] text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-brand-charcoal mb-6 lowercase leading-[0.9]">
              export <br />
              <span className="italic text-brand-green">quantity.</span>
            </h1>
            <p className="text-lg lg:text-xl text-brand-charcoal/70 leading-relaxed max-w-2xl">
              Partner with Amroot Organics for global bulk supply. We ensure uncompromising quality, full traceability, and consistent grading for orders ranging from 1 metric ton up to 50 metric tons of Meghalaya's finest spices.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
          
          {/* Inquiry Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-7 bg-white rounded-[2rem] p-8 lg:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-brand-charcoal/5"
          >
            <h2 className="text-2xl font-bold text-brand-charcoal mb-8">Request Bulk Pricing</h2>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-brand-charcoal/80">Full Name</label>
                  <input type="text" className="w-full bg-[#FAF8F5] border border-brand-charcoal/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-green transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-brand-charcoal/80">Company Name</label>
                  <input type="text" className="w-full bg-[#FAF8F5] border border-brand-charcoal/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-green transition-colors" placeholder="Global Spices LLC" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-brand-charcoal/80">Email Address</label>
                  <input type="email" className="w-full bg-[#FAF8F5] border border-brand-charcoal/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-green transition-colors" placeholder="john@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-brand-charcoal/80">Phone / WhatsApp</label>
                  <input type="tel" className="w-full bg-[#FAF8F5] border border-brand-charcoal/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-green transition-colors" placeholder="+1 234 567 8900" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-brand-charcoal/80">Destination Country</label>
                  <input type="text" className="w-full bg-[#FAF8F5] border border-brand-charcoal/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-green transition-colors" placeholder="United States" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-brand-charcoal/80">Product of Interest</label>
                  <select className="w-full bg-[#FAF8F5] border border-brand-charcoal/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-green transition-colors text-brand-charcoal appearance-none">
                    <option>Lakadong Turmeric (High Curcumin)</option>
                    <option>Organic Turmeric</option>
                    <option>Premium Jaintia Ginger</option>
                    <option>Organic Ginger</option>
                    <option>Mixed Container</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-brand-charcoal/80">Estimated Monthly Volume</label>
                <select className="w-full bg-[#FAF8F5] border border-brand-charcoal/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-green transition-colors text-brand-charcoal appearance-none">
                  <option>Less than 1 Metric Ton</option>
                  <option>1 - 5 Metric Tons</option>
                  <option>5 - 20 Metric Tons</option>
                  <option>20 - 50 Metric Tons (FCL)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-brand-charcoal/80">Additional Requirements / Specifications</label>
                <textarea 
                  rows={4}
                  className="w-full bg-[#FAF8F5] border border-brand-charcoal/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-green transition-colors resize-none" 
                  placeholder="Tell us about required mesh sizes, specific packaging (e.g. 25kg paper bags), or lab test requirements..."
                />
              </div>

              <button className="w-full bg-brand-green text-white font-medium py-4 rounded-xl hover:bg-[#023A33] transition-colors flex items-center justify-center gap-2 group">
                Submit Inquiry
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Right Sidebar */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="lg:col-span-5 space-y-8 lg:space-y-12"
          >
            {/* Global Reach */}
            <div className="bg-brand-charcoal text-brand-white rounded-[2rem] p-8 lg:p-10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
              <Globe2 className="w-10 h-10 text-brand-pink mb-6" />
              <h3 className="text-2xl font-bold mb-4">Exporting Worldwide</h3>
              <p className="text-brand-white/80 leading-relaxed mb-6">
                We handle end-to-end logistics, customs clearance, and phytosanitary certifications for hassle-free global shipping.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-pink" />
                  USA & Canada
                </li>
                <li className="flex items-center gap-3 text-sm font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-pink" />
                  European Union & UK
                </li>
                <li className="flex items-center gap-3 text-sm font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-pink" />
                  Middle East (UAE, Saudi Arabia)
                </li>
                <li className="flex items-center gap-3 text-sm font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-pink" />
                  Japan & South Korea
                </li>
              </ul>
            </div>

            {/* Quality Guarantees */}
            <div className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-brand-charcoal/50 px-2">Amroot Guarantees</h3>
              
              <div className="flex gap-4 items-start p-4 rounded-2xl hover:bg-white transition-colors cursor-default">
                <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-charcoal mb-1">Zero Adulteration</h4>
                  <p className="text-sm text-brand-charcoal/70">Stringent testing guarantees 100% pure spices, free from dyes or synthetic additives.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 rounded-2xl hover:bg-white transition-colors cursor-default">
                <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0">
                  <FileCheck className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-charcoal mb-1">COA with Every Shipment</h4>
                  <p className="text-sm text-brand-charcoal/70">A comprehensive Certificate of Analysis from accredited labs accompanies every order.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 rounded-2xl hover:bg-white transition-colors cursor-default">
                <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-charcoal mb-1">Dedicated Processing</h4>
                  <p className="text-sm text-brand-charcoal/70">Processed in our dedicated facilities to ensure no cross-contamination occurs.</p>
                </div>
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </main>
  );
}
