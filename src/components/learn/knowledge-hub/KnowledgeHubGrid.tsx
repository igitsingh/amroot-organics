"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, Sprout, ShieldCheck, Microscope, Layers } from "lucide-react";

const articles = [
  {
    title: "Curcumin Guide",
    description: "Deep dive into the science, benefits, and applications of high-curcumin Lakadong turmeric.",
    href: "/learn/curcumin-guide",
    icon: <Microscope className="w-6 h-6" />,
    color: "bg-brand-orange text-white"
  },
  {
    title: "Single-Origin Explained",
    description: "Why the specific terroir of Meghalaya is critical to our product's unmatched potency.",
    href: "/learn/single-origin",
    icon: <Sprout className="w-6 h-6" />,
    color: "bg-brand-green text-white"
  },
  {
    title: "Certifications & Compliance",
    description: "Understanding our global organic, safety, and ethical certifications for export.",
    href: "/learn/certifications",
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "bg-brand-charcoal text-white"
  },
  {
    title: "Clinical Research",
    description: "Scientific literature and data supporting the efficacy of our botanical ingredients.",
    href: "/learn/research",
    icon: <BookOpen className="w-6 h-6" />,
    color: "bg-brand-beige text-brand-charcoal"
  },
  {
    title: "Industry Applications",
    description: "How top brands are utilizing our extracts in nutraceuticals, food, and cosmetics.",
    href: "/learn/applications",
    icon: <Layers className="w-6 h-6" />,
    color: "bg-[#F4D03F] text-brand-charcoal"
  }
];

export function KnowledgeHubGrid() {
  return (
    <section className="py-24 bg-brand-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16 mt-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-charcoal mb-6">
            Knowledge Hub
          </h1>
          <p className="text-lg text-brand-charcoal/70 max-w-2xl mx-auto">
            Explore our curated resources designed to help B2B partners, formulators, and buyers understand the science, sourcing, and superiority of Amroot Organics ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <Link key={idx} href={article.href}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group block h-full p-8 rounded-[2rem] bg-white border border-brand-charcoal/10 hover:shadow-xl hover:shadow-brand-charcoal/5 transition-all hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Background accent on hover */}
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity">
                  {article.icon}
                </div>

                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${article.color}`}>
                  {article.icon}
                </div>
                
                <h3 className="text-2xl font-serif font-medium text-brand-charcoal mb-3 group-hover:text-brand-green transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-brand-charcoal/70 leading-relaxed text-sm">
                  {article.description}
                </p>

                <div className="mt-8 flex items-center text-sm font-semibold tracking-wide uppercase text-brand-charcoal group-hover:text-brand-green transition-colors">
                  Read Article
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
