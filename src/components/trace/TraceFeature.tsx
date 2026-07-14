"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, CheckCircle2, Leaf, Factory, Truck, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const timelineData = [
  {
    title: "Cultivation & Harvesting",
    description: "Sourced from our partner farms in the Jaintia Hills, Meghalaya. Grown using traditional, regenerative farming practices without synthetic pesticides.",
    icon: Leaf,
    date: "12 Oct 2024",
    location: "Meghalaya, India",
    status: "completed"
  },
  {
    title: "Quality Check & Extraction",
    description: "Cold-press extraction and rigorous quality checks for active compound concentrations. Verified >7% Curcumin content.",
    icon: Factory,
    date: "18 Oct 2024",
    location: "Processing Facility",
    status: "completed"
  },
  {
    title: "Packaging",
    description: "Packaged in sustainable, eco-friendly materials to preserve freshness and potency while minimizing environmental footprint.",
    icon: CheckCircle2,
    date: "20 Oct 2024",
    location: "Packaging Center",
    status: "completed"
  },
  {
    title: "Dispatch",
    description: "Dispatched from our warehouse for final delivery to ensure maximum freshness.",
    icon: Truck,
    date: "22 Oct 2024",
    location: "Global Logistics Hub",
    status: "completed"
  }
];

export function TraceFeature() {
  const [batchId, setBatchId] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState("");

  const generateRandomBatch = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = 'BATCH-';
    for (let i = 0; i < 4; i++) result += chars.charAt(Math.floor(Math.random() * chars.length));
    result += '-KRL';
    setBatchId(result);
  };

  const handleTrace = (e: React.FormEvent) => {
    e.preventDefault();
    if (!batchId.trim()) {
      setError("Please enter a valid Batch ID.");
      return;
    }
    setError("");
    setIsSearching(true);
    setShowResult(false);

    // Mock API call
    setTimeout(() => {
      setIsSearching(false);
      setShowResult(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-brand-charcoal pt-24 pb-20 relative overflow-hidden flex flex-col items-center justify-center">
      {/* Background Effect */}
      <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-brand-green/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-pink/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto px-6 relative z-10 flex flex-col justify-center">
        {/* Card UI for Search */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-3xl p-8 md:p-12 max-w-2xl mx-auto mb-16 text-center w-full"
        >
          <h1 className="text-3xl md:text-5xl font-serif text-brand-white mb-4">
            Trace Your Product
          </h1>
          <p className="text-brand-white/80 text-base md:text-lg mb-8 font-light max-w-md mx-auto">
            Enter your product's Batch ID below to discover its journey from our farms to your hands. True transparency at every step.
          </p>

          <form onSubmit={handleTrace} className="relative max-w-lg mx-auto">
            <div className="relative flex items-center">
              <div className="absolute left-6 text-brand-white/50">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="e.g. BATCH-8X92-KRL"
                value={batchId}
                onChange={(e) => setBatchId(e.target.value.toUpperCase())}
                className="w-full bg-white/5 border border-white/10 text-brand-white px-14 py-5 rounded-full text-lg outline-none focus:ring-2 focus:ring-brand-pink/50 transition-all font-medium placeholder:text-brand-white/40 shadow-inner"
              />
              <button
                type="submit"
                disabled={isSearching}
                className="absolute right-2 top-2 bottom-2 bg-brand-green text-brand-white px-8 rounded-full font-medium hover:bg-brand-green/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center min-w-[120px]"
              >
                {isSearching ? (
                  <div className="w-5 h-5 border-2 border-brand-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  "Trace Now"
                )}
              </button>
            </div>
            {error && (
              <p className="text-brand-pink text-sm mt-3 font-medium">{error}</p>
            )}
            <div className="mt-6 text-sm text-brand-white/60">
              Don't have a Batch ID? <button type="button" onClick={generateRandomBatch} className="text-brand-green hover:text-brand-pink transition-colors underline underline-offset-4">Try an example</button>
            </div>
          </form>
        </motion.div>

        {/* Timeline Results */}
        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-[#1C1C1C] border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
            >
              <div className="mb-10 pb-8 border-b border-white/10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div>
                  <h3 className="text-brand-pink text-sm font-bold tracking-widest uppercase mb-2">Verified Authenticity</h3>
                  <p className="text-2xl text-brand-white font-serif">Batch: {batchId || "BATCH-8X92-KRL"}</p>
                </div>
                <div className="bg-brand-green/20 text-brand-green px-4 py-1.5 rounded-full text-sm font-medium border border-brand-green/30 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Fully Traceable
                </div>
              </div>

              <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                  {timelineData.map((item, index) => (
                    <motion.div 
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.15 }}
                      className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 flex flex-col h-full relative group"
                    >
                      {/* Step Number Badge */}
                      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-pink text-brand-charcoal font-bold flex items-center justify-center text-sm shadow-lg z-10">
                        {index + 1}
                      </div>

                      {/* Icon */}
                      <div className={cn(
                        "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300",
                        item.status === 'completed' ? "bg-brand-green text-brand-white" : "bg-[#2A2A2A] text-brand-white/40"
                      )}>
                        <item.icon className="w-7 h-7" strokeWidth={1.5} />
                      </div>

                      <h4 className="text-xl font-serif text-brand-white mb-4">
                        {item.title}
                      </h4>
                      
                      <div className="flex flex-wrap items-center gap-2 mb-4 text-xs font-medium text-brand-white/60">
                        <span className="flex items-center gap-1 bg-black/40 px-3 py-1.5 rounded-full">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                        <span className="bg-black/40 px-3 py-1.5 rounded-full">
                          {item.date}
                        </span>
                      </div>

                      <p className="text-brand-white/70 leading-relaxed text-sm flex-grow">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
