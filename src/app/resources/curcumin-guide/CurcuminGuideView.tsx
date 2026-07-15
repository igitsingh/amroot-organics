"use client";

import { motion } from "framer-motion";
import { Brain, Heart, ShieldPlus, Activity, Zap, Droplet } from "lucide-react";
import Link from "next/link";

const BENEFITS = [
  {
    title: "Joint Health & Mobility",
    description: "Curcumin's powerful anti-inflammatory properties are widely recognized for supporting joint comfort and flexibility.",
    icon: Activity,
  },
  {
    title: "Cognitive Function",
    description: "Studies suggest curcumin can boost levels of the brain hormone BDNF, which increases the growth of new neurons and fights various degenerative processes in the brain.",
    icon: Brain,
  },
  {
    title: "Cardiovascular Support",
    description: "Curcumin improves the function of the endothelium (the lining of your blood vessels) and is a potent antioxidant and anti-inflammatory agent.",
    icon: Heart,
  },
  {
    title: "Immune System Boost",
    description: "By modulating the activation of T cells, B cells, macrophages, and neutrophils, curcumin helps support a healthy immune response.",
    icon: ShieldPlus,
  }
];

export function CurcuminGuideView() {
  return (
    <div className="min-h-screen bg-brand-beige pb-24 pt-32 lg:pt-40">
      {/* Hero Section */}
      <section className="px-6 lg:px-8 w-full mx-auto mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-brand-pink font-bold tracking-widest uppercase text-sm mb-4 block">
            The Golden Compound
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-brand-green mb-6 tracking-tight">
            The Curcumin Guide
          </h1>
          <p className="text-lg text-brand-charcoal/80 max-w-2xl mx-auto leading-relaxed">
            Understanding the active compound that makes Lakadong Turmeric world-renowned. Discover the science behind the spice.
          </p>
        </motion.div>
      </section>

      {/* What is Curcumin */}
      <section className="px-6 lg:px-8 max-w-5xl mx-auto mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-white p-10 lg:p-16 rounded-[2.5rem] shadow-sm border border-brand-green/10 flex flex-col md:flex-row gap-12 items-center"
        >
          <div className="md:w-1/2">
            <div className="w-16 h-16 rounded-2xl bg-brand-pink/20 flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-brand-pink" strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl font-bold text-brand-charcoal mb-4">What is Curcumin?</h2>
            <p className="text-brand-charcoal/70 leading-relaxed mb-4 text-lg">
              Curcumin is the main active ingredient in turmeric. It has powerful anti-inflammatory effects and is a very strong antioxidant.
            </p>
            <p className="text-brand-charcoal/70 leading-relaxed text-lg">
              However, the curcumin content of most turmeric is not that high. It's around 3%, by weight. This is where Lakadong turmeric completely changes the game.
            </p>
          </div>
          <div className="md:w-1/2 bg-brand-beige p-8 rounded-3xl w-full">
             <h3 className="text-xl font-bold text-brand-green mb-6">The Lakadong Difference</h3>
             
             <div className="mb-6">
               <div className="flex justify-between text-sm mb-2 font-medium">
                 <span className="text-brand-charcoal">Standard Turmeric</span>
                 <span className="text-brand-charcoal/60">2-3% Curcumin</span>
               </div>
               <div className="w-full bg-brand-white rounded-full h-3">
                 <div className="bg-brand-charcoal/20 h-3 rounded-full" style={{ width: '25%' }}></div>
               </div>
             </div>

             <div>
               <div className="flex justify-between text-sm mb-2 font-bold">
                 <span className="text-brand-green">Lakadong Turmeric</span>
                 <span className="text-brand-green">7-12% Curcumin</span>
               </div>
               <div className="w-full bg-brand-white rounded-full h-3">
                 <div className="bg-brand-green h-3 rounded-full relative overflow-hidden" style={{ width: '85%' }}>
                   <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                 </div>
               </div>
             </div>
             <p className="text-sm text-brand-charcoal/60 mt-6 italic">
               * Our Lakadong Turmeric boasts one of the highest natural curcumin contents in the world, meaning you need less to achieve the same potent benefits.
             </p>
          </div>
        </motion.div>
      </section>

      {/* Health Benefits Grid */}
      <section className="px-6 lg:px-8 w-full mx-auto mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-charcoal mb-4">Scientifically Backed Benefits</h2>
          <p className="text-lg text-brand-charcoal/70 max-w-2xl mx-auto">
            Decades of research have shown curcumin to have extraordinary benefits for both body and brain.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {BENEFITS.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-brand-white p-8 rounded-3xl shadow-sm border border-brand-green/10 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-beige flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-brand-green" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-brand-charcoal mb-3">
                  {benefit.title}
                </h3>
                <p className="text-brand-charcoal/70 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Bioavailability Tip */}
      <section className="px-6 lg:px-8 max-w-4xl mx-auto mb-32">
         <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-brand-pink/20 p-10 lg:p-12 rounded-[2.5rem] border border-brand-pink/30 flex flex-col md:flex-row gap-8 items-center"
         >
           <div className="w-20 h-20 rounded-full bg-brand-white flex items-center justify-center shrink-0">
             <Droplet className="w-10 h-10 text-brand-pink" strokeWidth={1.5} />
           </div>
           <div>
             <h3 className="text-2xl font-bold text-brand-charcoal mb-2">The Absorption Secret</h3>
             <p className="text-brand-charcoal/80 leading-relaxed">
               Curcumin is poorly absorbed into the bloodstream. To experience the full effects, <strong>always pair turmeric with black pepper</strong>. Black pepper contains piperine, a natural substance that enhances the absorption of curcumin by <strong>2,000%</strong>. Curcumin is also fat-soluble, so taking it with a healthy fat (like coconut oil or ghee) is highly recommended.
             </p>
           </div>
         </motion.div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-green rounded-[2.5rem] p-10 lg:p-16 text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-white mb-6 relative z-10">
            Experience High-Curcumin Lakadong
          </h2>
          <p className="text-brand-white/80 mb-10 max-w-xl mx-auto text-lg relative z-10">
            Elevate your products or your daily wellness routine with the world's most potent turmeric.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link
              href="/products"
              className="inline-flex items-center justify-center bg-brand-white text-brand-green px-8 py-4 rounded-full font-semibold hover:bg-brand-beige hover:shadow-lg transition-all duration-300"
            >
              Explore Products
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-brand-white text-brand-white px-8 py-4 rounded-full font-semibold hover:bg-brand-white/10 transition-all duration-300"
            >
              Request Samples
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
