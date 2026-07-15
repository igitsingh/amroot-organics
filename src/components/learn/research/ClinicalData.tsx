"use client";

import { motion } from "framer-motion";

const studies = [
  {
    title: "Anti-inflammatory Properties of Curcumin",
    journal: "Journal of Alternative and Complementary Medicine",
    year: "2019",
    summary: "Clinical trials have demonstrated that curcumin, the active compound in turmeric, is highly effective at managing oxidative and inflammatory conditions, metabolic syndrome, arthritis, and anxiety.",
    link: "#"
  },
  {
    title: "Bioavailability of Curcumin Supplements",
    journal: "European Journal of Medical Research",
    year: "2021",
    summary: "Studies show that pairing high-curcumin turmeric (like Lakadong) with piperine (black pepper extract) enhances bioavailability by 2000%, making it a crucial formulation strategy for nutraceutical brands.",
    link: "#"
  },
  {
    title: "Gingerol and Gastrointestinal Health",
    journal: "Food Chemistry",
    year: "2020",
    summary: "Premium ginger extracts containing high levels of 6-gingerol exhibit potent anti-nausea, anti-inflammatory, and antioxidant properties, validating their use in functional foods and supplements.",
    link: "#"
  }
];

export function ClinicalData() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-brand-charcoal mb-4">
            Clinical Literature
          </h2>
          <p className="text-lg text-brand-charcoal/70 max-w-2xl">
            A curated selection of peer-reviewed studies supporting the formulation of our botanical ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {studies.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-[2rem] border border-brand-charcoal/10 bg-[#FAF8F5] hover:bg-white transition-colors hover:shadow-lg hover:shadow-brand-charcoal/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-bold text-brand-green uppercase tracking-wider">{study.journal}</span>
                <span className="w-1 h-1 rounded-full bg-brand-charcoal/20" />
                <span className="text-sm text-brand-charcoal/50">{study.year}</span>
              </div>
              <h3 className="text-2xl font-serif text-brand-charcoal mb-4">{study.title}</h3>
              <p className="text-brand-charcoal/70 leading-relaxed mb-6">
                {study.summary}
              </p>
              <a href={study.link} className="inline-flex items-center text-sm font-semibold tracking-wide uppercase text-brand-charcoal hover:text-brand-green transition-colors">
                Read Full Paper
                <span className="ml-2">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
