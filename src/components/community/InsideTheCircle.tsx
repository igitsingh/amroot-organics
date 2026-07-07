"use client";

import { motion } from "framer-motion";

export function InsideTheCircle() {
  return (
    <section className="py-32 bg-brand-beige/30">
      <div className="w-full mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-brand-charcoal mb-4">The Privileges</h2>
          <p className="text-brand-charcoal/60 text-lg">Exclusive access reserved for members.</p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[250px]">
          
          {/* Card 1 - Large */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-2 lg:col-span-2 row-span-2 bg-brand-white rounded-3xl p-10 flex flex-col justify-end relative overflow-hidden group shadow-sm border border-brand-charcoal/5"
          >
            <div className="absolute inset-0 bg-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="font-serif text-3xl text-brand-charcoal mb-3 relative z-10">Exclusive Market Reports</h3>
            <p className="text-brand-charcoal/60 relative z-10">Deep dives into crop yields, global pricing trends, and weather impact on harvests.</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-1 lg:col-span-2 bg-brand-charcoal text-brand-white rounded-3xl p-10 flex flex-col justify-end shadow-sm"
          >
            <h3 className="font-serif text-2xl mb-2">Early Product Launches</h3>
            <p className="text-white/60 text-sm">Priority allocation on new extracts.</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-1 lg:col-span-1 bg-brand-white rounded-3xl p-8 flex flex-col justify-end shadow-sm border border-brand-charcoal/5"
          >
            <h3 className="font-serif text-xl text-brand-charcoal mb-2">Lab Reports</h3>
            <p className="text-brand-charcoal/60 text-sm">Direct access to batch testing.</p>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-1 lg:col-span-1 bg-brand-green text-brand-white rounded-3xl p-8 flex flex-col justify-end shadow-sm"
          >
            <h3 className="font-serif text-xl mb-2">Private Webinars</h3>
            <p className="text-white/60 text-sm">Q&A with master farmers.</p>
          </motion.div>

          {/* Card 5 - Wide bottom */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-3 lg:col-span-4 bg-brand-white rounded-3xl p-10 flex flex-col md:flex-row items-start md:items-end justify-between shadow-sm border border-brand-charcoal/5 group"
          >
            <div>
              <h3 className="font-serif text-3xl text-brand-charcoal mb-3">Importer Directory</h3>
              <p className="text-brand-charcoal/60">Connect directly with vetted buyers and sellers within the Circle.</p>
            </div>
            <button className="mt-6 md:mt-0 px-6 py-3 bg-brand-charcoal text-brand-white rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Explore Network
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
