"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Sourcing",
    description: "Hand-selected rhizomes directly from our partner farmers in the Jaintia Hills, ensuring absolute terroir integrity.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Cleaning",
    description: "High-pressure multi-stage washing removes all soil and impurities without compromising the skin's volatile oils.",
    image: "https://images.unsplash.com/photo-1628102491629-778571d893a3?q=80&w=2000&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "Drying",
    description: "Solar-tunnel and low-temperature mechanical drying to lock in the vibrant color and active curcumin/gingerol.",
    image: "https://images.unsplash.com/photo-1599905953531-15b5eb005436?q=80&w=2000&auto=format&fit=crop",
  },
  {
    number: "04",
    title: "Grinding",
    description: "Cryogenic and cool-grinding techniques prevent oil loss during pulverization, maintaining the raw potency.",
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=2000&auto=format&fit=crop",
  },
  {
    number: "05",
    title: "Laboratory Testing",
    description: "Every single batch is strictly tested for active compounds, heavy metals, and microbiological safety.",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2000&auto=format&fit=crop",
  },
  {
    number: "06",
    title: "Packaging",
    description: "Hermetically sealed in multi-wall kraft paper or vacuum pouches, engineered for zero moisture ingress.",
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=2000&auto=format&fit=crop",
  },
  {
    number: "07",
    title: "Documentation",
    description: "Digitized COAs, phytosanitary certificates, and exact origin traceability records generated per shipment.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2000&auto=format&fit=crop",
  },
  {
    number: "08",
    title: "Export Dispatch",
    description: "Seamless global logistics coordination, shipping directly from our facility to your warehouse or port.",
    image: "https://images.unsplash.com/photo-1493925410384-84f842e616fb?q=80&w=2000&auto=format&fit=crop",
  },
];

export function ProcessTimeline() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Transform scroll progress (0 to 1) to horizontal movement
  // -75% ensures the last item comes into view without scrolling past it completely
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-brand-charcoal text-brand-white">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        {/* Header (Fixed) */}
        <div className="absolute top-16 lg:top-24 left-6 lg:left-12 z-10 max-w-xl">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-xs uppercase tracking-[0.2em] text-brand-white/50 mb-4 block"
          >
            Our Process
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight"
          >
            From Origin <br className="hidden sm:block" />
            <span className="italic text-brand-beige/70">To Export.</span>
          </motion.h2>
        </div>

        {/* Horizontal Scroll Content */}
        <motion.div style={{ x }} className="flex items-center mt-32 lg:mt-24 px-6 lg:px-12 w-[350vw] md:w-[250vw] lg:w-[200vw]">
          {PROCESS_STEPS.map((step, index) => (
            <div key={index} className="flex-shrink-0 w-[85vw] sm:w-[60vw] lg:w-[35vw] flex flex-col pr-8 lg:pr-16 relative">
              
              {/* Timeline Line & Node */}
              <div className="absolute top-[20px] left-0 w-full h-[1px] bg-brand-white/20 z-0" />
              <div className="absolute top-[16px] left-0 w-[9px] h-[9px] bg-brand-white rounded-full z-10" />

              <div className="pt-12">
                {/* Text Content */}
                <div className="flex items-baseline gap-4 mb-8">
                  <span className="font-serif text-2xl lg:text-4xl text-brand-white/40 italic">
                    {step.number}
                  </span>
                  <h3 className="font-sans text-xl lg:text-2xl tracking-wide uppercase">
                    {step.title}
                  </h3>
                </div>
                
                <p className="font-sans text-brand-white/70 text-sm lg:text-base leading-relaxed max-w-sm mb-12 h-16">
                  {step.description}
                </p>

                {/* Cinematic Image */}
                <div className="w-full aspect-[4/3] lg:aspect-[3/4] relative overflow-hidden group">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105 filter grayscale hover:grayscale-0"
                  />
                  {/* Luxury overlay */}
                  <div className="absolute inset-0 bg-brand-charcoal/20 group-hover:bg-transparent transition-colors duration-1000" />
                </div>
              </div>

            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
