"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, CheckCircle2, Leaf, Factory, Truck, MapPin, 
  ChevronRight, Calendar, User, ShieldCheck, Download, 
  Map, Globe, Award, Sparkles 
} from "lucide-react";
import { cn } from "@/lib/utils";

// Define structured types for tracing data
interface BatchStep {
  title: string;
  description: string;
  icon: any;
  date: string;
  location: string;
  coords: { x: number; y: number };
  status: "completed" | "active" | "pending";
}

interface LabMetrics {
  activeCompound: string;
  activeValue: string;
  moisture: string;
  heavyMetals: string;
  pesticides: string;
}

interface GrowerInfo {
  name: string;
  village: string;
  practice: string;
  farmSize: string;
}

interface BatchData {
  id: string;
  productName: string;
  type: "turmeric" | "ginger";
  harvestDate: string;
  packagingDate: string;
  certifications: string[];
  grower: GrowerInfo;
  lab: LabMetrics;
  steps: BatchStep[];
}

const PREDEFINED_BATCHES: Record<string, BatchData> = {
  "BATCH-LKD-709": {
    id: "BATCH-LKD-709",
    productName: "Premium Lakadong Turmeric Powder",
    type: "turmeric",
    harvestDate: "12 Nov 2025",
    packagingDate: "28 Nov 2025",
    certifications: ["NPOP Organic", "USDA Organic", "ISO 22000:2018", "GMP Compliant"],
    grower: {
      name: "Bah Shong Lyngdoh",
      village: "Laskein, West Jaintia Hills, Meghalaya",
      practice: "Regenerative organic farming, zero synthetic inputs, heirloom seed propagation",
      farmSize: "2.4 Acres"
    },
    lab: {
      activeCompound: "Curcumin Content (HPLC)",
      activeValue: "7.84% (High Potency)",
      moisture: "8.2%",
      heavyMetals: "Not Detected (<0.01 ppm)",
      pesticides: "Zero Pesticides Detected (Eurofins verified)"
    },
    steps: [
      {
        title: "Ethical Cultivation & Harvest",
        description: "Sourced from Bah Shong's forest-loam plot in Laskein. Hand-harvested, washed twice in clean spring water, and sliced.",
        icon: Leaf,
        date: "12 Nov 2025",
        location: "Laskein, West Jaintia Hills",
        coords: { x: 480, y: 150 },
        status: "completed"
      },
      {
        title: "Curing & Solar Drying",
        description: "Sliced rhizomes solar-dried under controlled polytunnels to maintain core curcumin levels and prevent microbial development.",
        icon: Award,
        date: "17 Nov 2025",
        location: "Community Drying Yard, Laskein",
        coords: { x: 450, y: 165 },
        status: "completed"
      },
      {
        title: "Cold-Milling & Lab Validation",
        description: "Low-temperature milled to prevent heat degradation of volatile oils. Batch checked via HPLC for active compounds.",
        icon: Factory,
        date: "25 Nov 2025",
        location: "Processing Unit, Guwahati",
        coords: { x: 410, y: 180 },
        status: "completed"
      },
      {
        title: "Eco-Packaging & Loading",
        description: "Vacuum sealed in multi-wall biodegradable kraft bags with oxygen barrier liners. Port cleared for export shipping.",
        icon: Truck,
        date: "02 Dec 2025",
        location: "Port of Kolkata / Nhava Sheva",
        coords: { x: 320, y: 250 },
        status: "completed"
      }
    ]
  },
  "BATCH-JNT-182": {
    id: "BATCH-JNT-182",
    productName: "Premium Jaintia Hills Ginger Powder",
    type: "ginger",
    harvestDate: "05 Nov 2025",
    packagingDate: "20 Nov 2025",
    certifications: ["NPOP Organic", "USDA Organic", "Non-GMO Verified", "GMP Compliant"],
    grower: {
      name: "Kong Larisa Rymbai",
      village: "Muthlong, West Jaintia Hills, Meghalaya",
      practice: "Bio-dynamic organic farming, intercropping with local legumes, native composting",
      farmSize: "1.8 Acres"
    },
    lab: {
      activeCompound: "Gingerol Content (HPLC)",
      activeValue: "1.92% (Robust & Pungent)",
      moisture: "9.1%",
      heavyMetals: "Not Detected (<0.01 ppm)",
      pesticides: "Zero Pesticides Detected (Eurofins verified)"
    },
    steps: [
      {
        title: "Hand-Harvesting & Sorting",
        description: "Rhizomes carefully hand-dug to avoid skin damage, washed thoroughly, sorted for high-density grade ginger.",
        icon: Leaf,
        date: "05 Nov 2025",
        location: "Muthlong Hills, Meghalaya",
        coords: { x: 480, y: 150 },
        status: "completed"
      },
      {
        title: "Controlled Dehydration",
        description: "Dehydrated at slow temperatures (<55°C) to lock in the key volatile gingerol components and warm aroma.",
        icon: Award,
        date: "10 Nov 2025",
        location: "Muthlong Processing Hub",
        coords: { x: 450, y: 165 },
        status: "completed"
      },
      {
        title: "Milling & HPLC Test Run",
        description: "Ground using custom air-classified micro mills. Quality verified by third-party laboratory assays.",
        icon: Factory,
        date: "18 Nov 2025",
        location: "Processing Unit, Guwahati",
        coords: { x: 410, y: 180 },
        status: "completed"
      },
      {
        title: "Sealing & Global Transit Dispatch",
        description: "Hermetically sealed into heavy duty B2B packs, dispatched and loaded under humidity-controlled containers.",
        icon: Truck,
        date: "25 Nov 2025",
        location: "Port of Nhava Sheva, India",
        coords: { x: 320, y: 250 },
        status: "completed"
      }
    ]
  }
};

// Generates dynamic, structured data for custom/random Batch IDs
const generateDynamicBatchData = (batchId: string): BatchData => {
  const isGinger = batchId.includes("GIN") || batchId.includes("JNT");
  const productName = isGinger 
    ? "Organic Zingiber Hills Ginger (Special Grade)" 
    : "Organic Single-Origin Turmeric Powder";
  const type = isGinger ? "ginger" : "turmeric";
  
  return {
    id: batchId,
    productName,
    type,
    harvestDate: "18 Jan 2026",
    packagingDate: "04 Feb 2026",
    certifications: ["Organic Certified", "ISO 22000:2018", "Heavy Metal Cleared"],
    grower: {
      name: isGinger ? "Kong Dawan Phawa" : "Bah Skhem Dhar",
      village: isGinger ? "Shangpung, Meghalaya" : "Thadlaskein, Meghalaya",
      practice: "Zero chemical organic cultivation, forest mulch soil preparation, traditional hand-weeding",
      farmSize: "2.1 Acres"
    },
    lab: {
      activeCompound: isGinger ? "Gingerol Content" : "Curcumin Content",
      activeValue: isGinger ? "1.82%" : "7.15%",
      moisture: "8.5%",
      heavyMetals: "Compliant (<0.02 ppm)",
      pesticides: "Passed (100% Pesticide Free)"
    },
    steps: [
      {
        title: "Agricultural Cultivation",
        description: "Harvested from local cooperative fields in Jaintia Hills. Tested for soil purity before harvest.",
        icon: Leaf,
        date: "18 Jan 2026",
        location: "Jaintia Hills, Meghalaya",
        coords: { x: 480, y: 150 },
        status: "completed"
      },
      {
        title: "Clean Washing & Processing",
        description: "Rhizomes peeled lightly and dried uniformly using indirect biomass solar dryers.",
        icon: Award,
        date: "24 Jan 2026",
        location: "Cooperative Dehydration Plant",
        coords: { x: 450, y: 165 },
        status: "completed"
      },
      {
        title: "Milling & Batch Testing",
        description: "Fine powder milling to 80 Mesh size. Certified free of aflatoxins and heavy metals.",
        icon: Factory,
        date: "02 Feb 2026",
        location: "Kolkata Quality Control Hub",
        coords: { x: 410, y: 180 },
        status: "completed"
      },
      {
        title: "Packaging & Dispatch",
        description: "Packed in heat-sealed multiwall bags, palletized and ready for ocean freight loading.",
        icon: Truck,
        date: "08 Feb 2026",
        location: "Kolkata Port Terminal",
        coords: { x: 320, y: 250 },
        status: "completed"
      }
    ]
  };
};

const DESTINATIONS = [
  { id: "eu", name: "Rotterdam Port, Europe", coords: { x: 100, y: 120 }, miles: "6,800 nm", duration: "18 Days" },
  { id: "us", name: "New York Port, USA", coords: { x: 30, y: 150 }, miles: "8,400 nm", duration: "24 Days" },
  { id: "me", name: "Jebel Ali, Middle East", coords: { x: 190, y: 200 }, miles: "1,600 nm", duration: "5 Days" },
  { id: "jp", name: "Tokyo Bay, Japan", coords: { x: 550, y: 170 }, miles: "4,200 nm", duration: "12 Days" }
];

export function TraceFeature() {
  const [batchId, setBatchId] = useState("");
  const [activeBatch, setActiveBatch] = useState<BatchData | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState("");
  const [selectedDest, setSelectedDest] = useState(DESTINATIONS[0]);
  const [activeStep, setActiveStep] = useState(0);

  // Set default initial batch for interactive demonstration
  useEffect(() => {
    setActiveBatch(PREDEFINED_BATCHES["BATCH-LKD-709"]);
    setBatchId("BATCH-LKD-709");
  }, []);

  const handleTrace = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!batchId.trim()) {
      setError("Please enter a Batch ID.");
      return;
    }

    setError("");
    setIsSearching(true);

    setTimeout(() => {
      const sanitizedId = batchId.trim().toUpperCase();
      if (PREDEFINED_BATCHES[sanitizedId]) {
        setActiveBatch(PREDEFINED_BATCHES[sanitizedId]);
      } else {
        // Dynamic batch generation so it never fails
        setActiveBatch(generateDynamicBatchData(sanitizedId));
      }
      setIsSearching(false);
      setActiveStep(0);
    }, 1000);
  };

  const selectPredefined = (id: string) => {
    setBatchId(id);
    setError("");
    setIsSearching(true);
    setTimeout(() => {
      setActiveBatch(PREDEFINED_BATCHES[id]);
      setIsSearching(false);
      setActiveStep(0);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-brand-charcoal text-white pt-28 pb-24 relative overflow-hidden">
      {/* Dynamic Background Accents */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-green/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-pink/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 text-brand-green text-sm font-medium tracking-wide">
            <Sparkles className="w-4 h-4" /> Global Batch Integrity System
          </div>
          <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
            Farm-to-Table <span className="text-brand-green italic">Traceability</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl font-light">
            Amroot Organics guarantees transparent sourcing. Input a batch code to unlock exact chemical profiles, farmer bios, and delivery transit routes.
          </p>
        </div>

        {/* Trace Verification Form Panel */}
        <div className="max-w-xl mx-auto mb-20">
          <form onSubmit={handleTrace} className="relative flex items-center bg-white/5 border border-white/10 rounded-full p-2 shadow-2xl backdrop-blur-md focus-within:ring-2 focus-within:ring-brand-green/40 transition-all">
            <div className="flex-grow flex items-center pl-5 gap-3">
              <Search className="w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Enter Batch ID (e.g. BATCH-LKD-709)"
                value={batchId}
                onChange={(e) => setBatchId(e.target.value)}
                className="w-full bg-transparent border-none outline-none text-white placeholder:text-white/30 font-medium py-3"
              />
            </div>
            <button
              type="submit"
              disabled={isSearching}
              className="bg-brand-green text-brand-charcoal px-8 py-3.5 rounded-full font-bold hover:bg-brand-green/90 transition-all shadow-md active:scale-95 disabled:opacity-50"
            >
              {isSearching ? "Verifying..." : "Verify Batch"}
            </button>
          </form>
          {error && <p className="text-brand-pink text-sm mt-3 text-center">{error}</p>}

          {/* Quick Select Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <span className="text-white/40 text-sm py-1.5 flex items-center">Verify Sample:</span>
            <button 
              onClick={() => selectPredefined("BATCH-LKD-709")}
              className={cn(
                "px-4 py-1.5 rounded-full text-xs font-semibold border transition-all",
                batchId === "BATCH-LKD-709" 
                  ? "bg-brand-green text-brand-charcoal border-brand-green" 
                  : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10"
              )}
            >
              Lakadong Turmeric (Batch LKD-709)
            </button>
            <button 
              onClick={() => selectPredefined("BATCH-JNT-182")}
              className={cn(
                "px-4 py-1.5 rounded-full text-xs font-semibold border transition-all",
                batchId === "BATCH-JNT-182" 
                  ? "bg-brand-green text-brand-charcoal border-brand-green" 
                  : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10"
              )}
            >
              Jaintia Ginger (Batch JNT-182)
            </button>
          </div>
        </div>

        {/* Dashboard Panels */}
        <AnimatePresence mode="wait">
          {activeBatch && (
            <motion.div
              key={activeBatch.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
              {/* Left Column: Product Summary & Map Sourcing */}
              <div className="lg:col-span-8 space-y-8">
                
                {/* Product Meta Card */}
                <div className="bg-[#181818]/60 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md shadow-xl flex flex-col md:flex-row justify-between gap-6">
                  <div>
                    <span className="text-brand-green text-xs font-bold uppercase tracking-widest bg-brand-green/10 px-3 py-1 rounded-full border border-brand-green/20">
                      Authenticity Verified
                    </span>
                    <h2 className="text-2xl md:text-3xl font-serif mt-3 text-white">
                      {activeBatch.productName}
                    </h2>
                    <p className="text-white/40 text-sm mt-1">Batch Code: <span className="font-mono text-white font-bold">{activeBatch.id}</span></p>
                  </div>
                  <div className="flex flex-col gap-2 justify-end items-start md:items-end">
                    <span className="text-white/40 text-xs uppercase">Harvest Date</span>
                    <span className="font-semibold text-sm flex items-center gap-1.5 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-xl">
                      <Calendar className="w-4 h-4 text-brand-green" /> {activeBatch.harvestDate}
                    </span>
                  </div>
                </div>

                {/* Supply Chain Interactive SVG Map */}
                <div className="bg-[#181818]/60 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md shadow-xl overflow-hidden relative">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2.5">
                      <Globe className="w-5 h-5 text-brand-green" />
                      <h3 className="text-lg font-semibold font-serif">Global Transit Path</h3>
                    </div>
                    
                    {/* Destination Selector */}
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-white/40 hidden sm:inline">Destination:</span>
                      <select 
                        value={selectedDest.id}
                        onChange={(e) => {
                          const dest = DESTINATIONS.find(d => d.id === e.target.value);
                          if (dest) setSelectedDest(dest);
                        }}
                        className="bg-brand-charcoal border border-white/10 text-white rounded-full px-3 py-1 text-xs outline-none focus:ring-1 focus:ring-brand-green"
                      >
                        {DESTINATIONS.map(d => (
                          <option key={d.id} value={d.id}>{d.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Interactive Map Visual */}
                  <div className="w-full aspect-[2/1] bg-black/30 border border-white/5 rounded-2xl relative flex items-center justify-center p-4">
                    {/* Styled Map Background Vector */}
                    <svg viewBox="0 0 600 300" className="w-full h-full opacity-80 select-none">
                      {/* Grid Lines */}
                      <path d="M 0 50 L 600 50 M 0 100 L 600 100 M 0 150 L 600 150 M 0 200 L 600 200 M 0 250 L 600 250" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                      <path d="M 100 0 L 100 300 M 200 0 L 200 300 M 300 0 L 300 300 M 400 0 L 400 300 M 500 0 L 500 300" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

                      {/* Land mass stylized contours */}
                      <path d="M 40 100 Q 80 80 120 110 T 180 90 T 260 140 T 320 200 T 360 260 L 330 290" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" strokeDasharray="3 3" />
                      
                      {/* Transit Connection Curves */}
                      <g>
                        {/* Jaintia Hills to Kolkata */}
                        <path d="M 480 150 Q 420 190 320 250" fill="none" stroke="#25a244" strokeWidth="2" strokeDasharray="5 5" className="animate-[dash_10s_linear_infinite]" />
                        
                        {/* Kolkata to Selected Destination */}
                        <path 
                          d={`M 320 250 Q ${ (320 + selectedDest.coords.x) / 2 } ${ (250 + selectedDest.coords.y) / 2 - 50 } ${selectedDest.coords.x} ${selectedDest.coords.y}`} 
                          fill="none" 
                          stroke="#ef476f" 
                          strokeWidth="2.5" 
                          strokeDasharray="6 4" 
                        />
                      </g>

                      {/* Meghalaya Source Node */}
                      <g className="cursor-pointer" onClick={() => setActiveStep(0)}>
                        <circle cx="480" cy="150" r="10" fill="rgba(37, 162, 68, 0.2)" />
                        <circle cx="480" cy="150" r="5" fill="#25a244" />
                        <text x="495" y="154" fill="#ffffff" fontSize="9" fontWeight="bold">Jaintia Hills (Farm)</text>
                      </g>

                      {/* processing Node */}
                      <g className="cursor-pointer" onClick={() => setActiveStep(2)}>
                        <circle cx="410" cy="180" r="8" fill="rgba(255, 255, 255, 0.2)" />
                        <circle cx="410" cy="180" r="4" fill="#ffffff" />
                        <text x="420" y="184" fill="#aaaaaa" fontSize="8">Guwahati Lab</text>
                      </g>

                      {/* Export Loading Port */}
                      <g className="cursor-pointer" onClick={() => setActiveStep(3)}>
                        <circle cx="320" cy="250" r="10" fill="rgba(37, 162, 68, 0.2)" />
                        <circle cx="320" cy="250" r="5" fill="#25a244" />
                        <text x="260" y="270" fill="#ffffff" fontSize="9" fontWeight="bold">Nhava Sheva Port</text>
                      </g>

                      {/* Destination Port */}
                      <g>
                        <circle cx={selectedDest.coords.x} cy={selectedDest.coords.y} r="10" fill="rgba(239, 71, 111, 0.2)" />
                        <circle cx={selectedDest.coords.x} cy={selectedDest.coords.y} r="5" fill="#ef476f" />
                        <text x={selectedDest.coords.x - 10} y={selectedDest.coords.y - 12} fill="#ef476f" fontSize="9" fontWeight="bold">
                          {selectedDest.name.split(",")[0]}
                        </text>
                      </g>
                    </svg>

                    {/* Overlay route statistics */}
                    <div className="absolute bottom-4 left-4 bg-black/75 border border-white/10 rounded-xl px-4 py-2.5 backdrop-blur-md flex gap-4 text-xs">
                      <div>
                        <span className="text-white/40 block">Transit Distance</span>
                        <span className="font-semibold text-white">{selectedDest.miles}</span>
                      </div>
                      <div className="border-l border-white/10 pl-4">
                        <span className="text-white/40 block">Est. Duration</span>
                        <span className="font-semibold text-white">{selectedDest.duration}</span>
                      </div>
                      <div className="border-l border-white/10 pl-4">
                        <span className="text-white/40 block">CO2 Offset</span>
                        <span className="font-semibold text-brand-green">100% Certified Carbon Neutral</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Interactive Walkthrough */}
                <div className="bg-[#181818]/60 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md shadow-xl">
                  <h3 className="text-xl font-serif mb-6 flex items-center gap-2">
                    <Map className="w-5 h-5 text-brand-green" /> Traceability Journey Timeline
                  </h3>
                  <div className="space-y-6">
                    {activeBatch.steps.map((step, idx) => {
                      const StepIcon = step.icon;
                      return (
                        <div 
                          key={step.title}
                          onClick={() => setActiveStep(idx)}
                          className={cn(
                            "flex items-start gap-4 p-4 rounded-2xl border transition-all cursor-pointer",
                            activeStep === idx 
                              ? "bg-white/5 border-white/20 shadow-lg scale-[1.01]" 
                              : "border-transparent hover:bg-white/5"
                          )}
                        >
                          <div className={cn(
                            "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border",
                            activeStep === idx 
                              ? "bg-brand-green border-brand-green text-brand-charcoal" 
                              : "bg-white/5 border-white/10 text-white/50"
                          )}>
                            <StepIcon className="w-5 h-5" />
                          </div>
                          <div className="flex-grow">
                            <div className="flex justify-between items-start gap-2 flex-wrap">
                              <h4 className="font-medium text-white text-base">{step.title}</h4>
                              <span className="text-xs text-white/40 flex items-center gap-1">
                                <Calendar className="w-3.5 h-3.5" /> {step.date}
                              </span>
                            </div>
                            <p className="text-sm text-white/50 flex items-center gap-1 mt-1">
                              <MapPin className="w-3.5 h-3.5 text-brand-green" /> {step.location}
                            </p>
                            <AnimatePresence>
                              {activeStep === idx && (
                                <motion.p 
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="text-sm text-white/80 leading-relaxed mt-3 pt-3 border-t border-white/5"
                                >
                                  {step.description}
                                </motion.p>
                              )}
                            </AnimatePresence>
                          </div>
                          <ChevronRight className={cn(
                            "w-5 h-5 text-white/20 transition-transform self-center",
                            activeStep === idx && "rotate-90 text-brand-green"
                          )} />
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Right Column: Lab COA Spec-Sheet & Farmer Spotlight */}
              <div className="lg:col-span-4 space-y-8">
                
                {/* HPLC Certified Analytics Card */}
                <div className="bg-[#181818]/60 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-green/10 rounded-full blur-2xl pointer-events-none" />
                  <div className="flex items-center gap-2 mb-6">
                    <ShieldCheck className="w-5 h-5 text-brand-green" strokeWidth={2} />
                    <h3 className="text-lg font-serif">Laboratory Assay Spec-Sheet</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white/5 border border-white/5 rounded-2xl p-4">
                      <span className="text-white/40 text-xs block uppercase tracking-wider">{activeBatch.lab.activeCompound}</span>
                      <span className="text-xl font-bold text-brand-green mt-1 block">{activeBatch.lab.activeValue}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/5 border border-white/5 rounded-xl p-3">
                        <span className="text-white/40 text-[10px] uppercase block">Moisture Ratio</span>
                        <span className="text-sm font-semibold text-white block mt-1">{activeBatch.lab.moisture}</span>
                      </div>
                      <div className="bg-white/5 border border-white/5 rounded-xl p-3">
                        <span className="text-white/40 text-[10px] uppercase block">Heavy Metal Assay</span>
                        <span className="text-sm font-semibold text-brand-green block mt-1">PASSED</span>
                      </div>
                    </div>

                    <div className="space-y-2.5 pt-2">
                      <div className="flex justify-between items-center text-xs border-b border-white/5 pb-2">
                        <span className="text-white/50">Heavy Metals Status</span>
                        <span className="text-white/80 font-medium">{activeBatch.lab.heavyMetals}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs border-b border-white/5 pb-2">
                        <span className="text-white/50">Pesticide Residue</span>
                        <span className="text-white/80 font-medium">{activeBatch.lab.pesticides}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-white/50">Mycotoxins Checked</span>
                        <span className="text-brand-green font-medium">None Detected</span>
                      </div>
                    </div>

                    <button 
                      type="button" 
                      onClick={() => alert(`Downloading Certified COA report for batch ${activeBatch.id}...`)}
                      className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white py-3 rounded-2xl text-sm font-semibold transition-all mt-4 active:scale-[0.98]"
                    >
                      <Download className="w-4 h-4" /> Download Official COA PDF
                    </button>
                  </div>
                </div>

                {/* Farmer/Grower Spotlight */}
                <div className="bg-[#181818]/60 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md shadow-xl">
                  <div className="flex items-center gap-2 mb-6">
                    <User className="w-5 h-5 text-brand-green" />
                    <h3 className="text-lg font-serif">Grower Spotlight</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      {/* Placeholder Avatar */}
                      <div className="w-12 h-12 rounded-full bg-brand-green/20 border border-brand-green/30 flex items-center justify-center text-brand-green font-serif font-bold text-lg">
                        {activeBatch.grower.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{activeBatch.grower.name}</h4>
                        <p className="text-xs text-white/40">Registered Cooperative Farmer</p>
                      </div>
                    </div>

                    <div className="space-y-3 pt-3 border-t border-white/5 text-xs">
                      <div>
                        <span className="text-white/40 block mb-1">Origin Location</span>
                        <span className="text-white/90 font-medium flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-brand-green" /> {activeBatch.grower.village}
                        </span>
                      </div>
                      <div>
                        <span className="text-white/40 block mb-1">Agricultural Practices</span>
                        <span className="text-white/90 leading-relaxed font-light">{activeBatch.grower.practice}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/40">Cultivation Plot Size</span>
                        <span className="text-brand-green font-semibold">{activeBatch.grower.farmSize}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Compliance Badge list */}
                <div className="bg-[#181818]/60 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md shadow-xl">
                  <div className="flex items-center gap-2 mb-6">
                    <Award className="w-5 h-5 text-brand-green" />
                    <h3 className="text-lg font-serif">Compliance & Auditing</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeBatch.certifications.map((cert) => (
                      <span 
                        key={cert}
                        className="bg-black/35 text-white/80 border border-white/5 px-3 py-1.5 rounded-xl text-xs font-medium"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
