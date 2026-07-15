"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { generateImageAlt, generateImageTitle } from "@/lib/seo/image";

export function GlobalStandards() {
  const certifications = [
    {
      name: "USDA Organic",
      image: "/CERTIFICATIONS/usda-symbol.svg",
      region: "Global / USA",
      desc: "Certifies our products are grown and processed according to strict US federal guidelines, free from synthetic fertilizers and pesticides."
    },
    {
      name: "Eurofins Testing",
      image: "/CERTIFICATIONS/logo-eurofins_infant-formula-certification_watermark-260x260px.png",
      region: "Global",
      desc: "World-leading 3rd-party laboratory testing for heavy metals, pesticides (MRLs), and microbiology to guarantee uncompromising purity."
    },
    {
      name: "Spices Board of India",
      image: "/CERTIFICATIONS/Spices_Board_of_India_Logo.png",
      region: "India / Export",
      desc: "Mandatory export registration and quality testing ensuring Indian spices meet global quality parameters before shipment."
    },
    {
      name: "APEDA",
      image: "/CERTIFICATIONS/apeda-certification-service-application-for-rcmc.png",
      region: "India / Export",
      desc: "Agricultural and Processed Food Products Export Development Authority certification ensuring export quality standards and traceability."
    },
    {
      name: "FSSAI",
      image: "/CERTIFICATIONS/fssai.png",
      region: "India / Global",
      desc: "Food Safety and Standards Authority of India compliance, validating that our processing facilities meet rigorous food safety guidelines."
    },
    {
      name: "US EPA Standards",
      image: "/CERTIFICATIONS/1024px-Seal_of_the_United_States_Environmental_Protection_Agency.svg_.webp",
      region: "USA",
      desc: "Our pesticide residue testing strictly adheres to Environmental Protection Agency limits for imported agricultural products."
    },
    {
      name: "ASTA",
      image: "/CERTIFICATIONS/american_spice_trade_association_logo.jpeg",
      region: "USA",
      desc: "Adherence to American Spice Trade Association cleanliness specifications, the benchmark for spice imports into the United States."
    },
    {
      name: "UK Food Standards Agency",
      image: "/CERTIFICATIONS/UK_Food_Standards_Agency.svg",
      region: "UK",
      desc: "Compliance with UK FSA regulations to ensure all ingredients are safe, accurately labeled, and fit for human consumption."
    },
    {
      name: "DEFRA",
      image: "/CERTIFICATIONS/Department_for_Environment,_Food_and_Rural_Affairs_logo.svg",
      region: "UK",
      desc: "Meeting the strict environmental and agricultural standards set by the UK's Department for Environment, Food & Rural Affairs."
    },
    {
      name: "SFDA",
      image: "/CERTIFICATIONS/SFDA.jpeg",
      region: "Saudi Arabia",
      desc: "Saudi Food and Drug Authority compliance, allowing seamless import and distribution within the Kingdom of Saudi Arabia."
    },
    {
      name: "SASO",
      image: "/CERTIFICATIONS/SASO.jpeg",
      region: "Saudi Arabia",
      desc: "Conformity to Saudi Standards, Metrology and Quality Organization regulations for product safety and quality."
    },
    {
      name: "ESMA / MoIAT",
      image: "/CERTIFICATIONS/Esma belgesi logo.avif",
      region: "UAE",
      desc: "Emirates Authority for Standardization and Metrology compliance for food products entering the UAE market."
    },
    {
      name: "ECAS",
      image: "/CERTIFICATIONS/ecas-pic.png",
      region: "UAE",
      desc: "Emirates Conformity Assessment Scheme certification, proving our products meet approved UAE national standards."
    },
    {
      name: "EIAC",
      image: "/CERTIFICATIONS/REFERENCE EIAC CERTIFICATE.jpg",
      region: "UAE",
      desc: "Emirates International Accreditation Centre recognition for testing and calibration laboratories ensuring reliable analysis."
    },
    {
      name: "SABER",
      image: "/CERTIFICATIONS/UAE SABER.png",
      region: "Saudi Arabia",
      desc: "Registered on the SABER electronic platform, facilitating rapid clearance of our products at Saudi customs."
    },
    {
      name: "Geographical Indication (GI)",
      image: "/CERTIFICATIONS/GI-LOCATION_INTELLECTUAL PROPERTY_TEMP.jpeg",
      region: "Global",
      desc: "Authenticity guarantee for region-specific agricultural products (e.g., Lakadong Turmeric), protecting intellectual property and origin."
    },
    {
      name: "SACL Organic",
      image: "/CERTIFICATIONS/sacl_organic.png",
      region: "India / Global",
      desc: "Certified organic compliance, validating our commitment to sustainable, chemical-free farming practices."
    },
    {
      name: "DGFT",
      image: "/CERTIFICATIONS/DGFT LOGO.jpeg",
      region: "India / Export",
      desc: "Directorate General of Foreign Trade authorization, ensuring all international trade operations are legal and compliant."
    }
  ];

  return (
    <section className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-sm font-bold text-brand-green uppercase tracking-widest mb-4">
            Global Compliance Network
          </h2>
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-charcoal mb-6">
            Recognized by the World's Strictest Authorities
          </h3>
          <p className="text-brand-charcoal/70 text-lg">
            We hold certifications and registrations that open doors to premium markets worldwide, assuring you of uncompromised quality, legality, and seamless customs clearance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-brand-charcoal/5 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group"
            >
              <div className="h-24 w-full flex items-center justify-start mb-6 relative">
                {/* We use next/image with object-contain to nicely fit diverse logo aspect ratios */}
                <Image 
                  src={cert.image} 
                  alt={generateImageAlt("certification", undefined, cert.name)}
                  title={generateImageTitle("certification", undefined, cert.name)}
                  fill
                  className="object-contain object-left group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              
              <div className="mt-auto">
                <div className="inline-block px-3 py-1 rounded-full bg-[#FAF8F5] text-[10px] font-bold tracking-wider text-brand-charcoal/60 uppercase mb-3">
                  {cert.region}
                </div>
                <h4 className="font-serif text-xl text-brand-charcoal mb-3">{cert.name}</h4>
                <p className="text-sm text-brand-charcoal/70 leading-relaxed">
                  {cert.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
