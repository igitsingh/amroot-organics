"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  MapPin,
  Sparkles,
  Layers,
  Plane,
  Microscope,
  Search,
  Tag,
  PackageOpen,
  Truck,
  FileText,
  Headset,
  Handshake,
} from "lucide-react";

const TRUST_CARDS = [
  {
    title: "Single-Origin Sourcing",
    description: "Direct from verified farms, ensuring uncompromised purity and ethical practices.",
    icon: MapPin,
  },
  {
    title: "High Curcumin Potential",
    description: "Scientifically tested for optimal active compound concentrations.",
    icon: Sparkles,
  },
  {
    title: "Batch Consistency",
    description: "Rigorous processing standards guarantee uniform color, flavor, and potency.",
    icon: Layers,
  },
  {
    title: "Export Ready",
    description: "Compliant with international food safety and agricultural import standards.",
    icon: Plane,
  },
  {
    title: "Lab Tested",
    description: "Every batch is analyzed for heavy metals, microbiology, and moisture.",
    icon: Microscope,
  },
  {
    title: "Traceable Supply Chain",
    description: "Complete visibility from farm harvest to final packaging.",
    icon: Search,
  },
  {
    title: "Private Label",
    description: "Custom packaging solutions tailored to your brand identity.",
    icon: Tag,
  },
  {
    title: "Bulk Orders",
    description: "Scalable production capacity to meet global distribution needs.",
    icon: PackageOpen,
  },
  {
    title: "Reliable Logistics",
    description: "Partnerships with premium freight forwarders for timely delivery.",
    icon: Truck,
  },
  {
    title: "Global Documentation",
    description: "Comprehensive COAs and import documentation provided standard.",
    icon: FileText,
  },
  {
    title: "Responsive Support",
    description: "Dedicated account managers for international procurement teams.",
    icon: Headset,
  },
  {
    title: "Long-Term Partnership",
    description: "Built on transparency, reliability, and mutual growth.",
    icon: Handshake,
  },
];

export function TrustCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -800]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-800, 0]);

  const row1 = TRUST_CARDS.slice(0, 6);
  const row2 = TRUST_CARDS.slice(6, 12);

  return (
    <section ref={containerRef} className="py-16 lg:py-24 bg-[#F4D03F] overflow-hidden relative flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
      
      {/* Text Content - Left Side */}
      <div className="w-full lg:w-[40%] xl:w-[35%] shrink-0 px-6 lg:pl-12 xl:pl-24 z-10 relative">
        <div className="max-w-xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-[family-name:var(--font-outfit)] font-semibold tracking-tight text-4xl sm:text-5xl lg:text-6xl text-brand-charcoal mb-6 leading-[1.1]"
          >
            Built for Global <br/>
            <span className="text-brand-green italic">Procurement</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-brand-charcoal/70 text-lg font-light leading-relaxed"
          >
            Our infrastructure is designed to give you absolute confidence. From farm to facility to freight, 
            every step is optimized for quality and reliability.
          </motion.p>
        </div>
      </div>

      {/* Cards Content - Right Side */}
      <div className="w-full lg:w-[60%] xl:w-[65%] flex flex-col gap-5 relative z-0 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        {/* Row 1 */}
        <motion.div style={{ x: x1 }} className="flex gap-6 w-max px-6 lg:px-0">
          {row1.map((card, idx) => (
            <Card key={idx} card={card} index={idx} />
          ))}
          {row1.map((card, idx) => (
            <Card key={`dup1-${idx}`} card={card} index={idx} />
          ))}
        </motion.div>
        
        {/* Row 2 */}
        <motion.div style={{ x: x2 }} className="flex gap-6 w-max px-6 lg:px-0 ml-[-20vw] lg:ml-[-10vw]">
          {row2.map((card, idx) => (
            <Card key={idx} card={card} index={idx + 6} />
          ))}
          {row2.map((card, idx) => (
            <Card key={`dup2-${idx}`} card={card} index={idx + 6} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Card({ card, index }: { card: typeof TRUST_CARDS[0], index: number }) {
  const variants = [
    {
      bg: "bg-brand-green",
      text: "text-brand-white",
      desc: "text-brand-white/80",
      icon: "text-brand-white/60",
      hoverIcon: "group-hover:text-brand-pink",
      hoverText: "group-hover:text-brand-white",
      hoverBorder: "group-hover:border-brand-pink/30",
      hoverShadow: "group-hover:shadow-[0_0_30px_rgba(240,138,93,0.15)]"
    },
    {
      bg: "bg-brand-pink",
      text: "text-brand-charcoal",
      desc: "text-brand-charcoal/80",
      icon: "text-brand-charcoal/50",
      hoverIcon: "group-hover:text-brand-green",
      hoverText: "group-hover:text-brand-charcoal",
      hoverBorder: "group-hover:border-brand-green/30",
      hoverShadow: "group-hover:shadow-[0_0_30px_rgba(3,79,70,0.15)]"
    },
    {
      bg: "bg-brand-beige",
      text: "text-brand-charcoal",
      desc: "text-brand-charcoal/70",
      icon: "text-brand-green/50",
      hoverIcon: "group-hover:text-brand-pink",
      hoverText: "group-hover:text-brand-green",
      hoverBorder: "group-hover:border-brand-pink/30",
      hoverShadow: "group-hover:shadow-[0_0_30px_rgba(240,138,93,0.15)]"
    }
  ];

  const theme = variants[index % 3];

  return (
    <motion.div 
      whileHover={{ y: -8, scale: 1.02 }}
      className={`group relative px-5 py-5 rounded-3xl min-w-[260px] md:min-w-[320px] flex flex-col shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] cursor-pointer ${theme.bg}`}
    >
      <div className={`absolute inset-0 rounded-3xl border border-transparent transition-all duration-500 ${theme.hoverBorder} ${theme.hoverShadow}`} />
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Icon Wrapper */}
        <div className={`mb-4 ${theme.icon} ${theme.hoverIcon} group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 origin-left`}>
          <card.icon className="w-10 h-10" strokeWidth={1.5} />
        </div>
        
        {/* Text Content */}
        <h3 className={`font-serif text-xl md:text-2xl mb-2 ${theme.text} ${theme.hoverText} transition-colors duration-500`}>
          {card.title}
        </h3>
        <p className={`text-sm md:text-base leading-relaxed font-light mt-auto ${theme.desc}`}>
          {card.description}
        </p>
      </div>
    </motion.div>
  );
}
