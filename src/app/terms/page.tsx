import React from "react";
import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <div className="bg-brand-white min-h-screen pt-12 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <Link href="/" className="text-brand-green font-medium hover:underline mb-6 inline-block">
            &larr; Back to Home
          </Link>
          <h1 className="font-serif text-4xl sm:text-5xl text-brand-charcoal mb-4">Terms of Service</h1>
          <p className="text-brand-charcoal/60">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose prose-lg prose-headings:font-serif prose-headings:text-brand-charcoal prose-p:text-brand-charcoal/80 prose-a:text-brand-green max-w-none">
          <p>
            Welcome to Amroot Organics. These Terms of Service ("Terms") govern your access to and use of 
            the Amroot Organics website, products, and services (collectively, the "Services"). By accessing or 
            using the Services, you agree to be bound by these Terms.
          </p>

          <h2>1. B2B Commercial Transactions</h2>
          <p>
            Amroot Organics operates primarily as a Business-to-Business (B2B) supplier of premium single-origin ingredients.
          </p>
          <ul>
            <li><strong>Orders & Specifications:</strong> All orders are subject to availability and formal acceptance by Amroot Organics. Product specifications, certifications, and technical documents (CoAs, MSDS) provided are accurate to the best of our knowledge at the time of dispatch.</li>
            <li><strong>Incoterms:</strong> International shipping and risk of loss are governed by standard Incoterms 2020 (e.g., FOB, CIF, EXW) as explicitly agreed upon in the commercial invoice.</li>
            <li><strong>Quality Assurance:</strong> Upon delivery, it is the buyer's responsibility to inspect the goods. Any claims regarding quality or quantity must be made within 14 days of receipt.</li>
          </ul>

          <h2>2. Medical & Health Disclaimer (Global)</h2>
          <p>
            The products supplied by Amroot Organics, including our Turmeric and Ginger extracts, are intended for use as ingredients in food, beverage, nutraceutical, and cosmetic manufacturing. 
          </p>
          <p>
            <strong>USA (FDA):</strong> These products and any statements made regarding them have not been evaluated by the Food and Drug Administration (FDA). They are not intended to diagnose, treat, cure, or prevent any disease.
          </p>
          <p>
            <strong>UK/EU (EFSA):</strong> Health claims regarding our botanical ingredients must not be made by buyers in consumer-facing marketing without proper authorization by the European Food Safety Authority (EFSA) or the UK Food Standards Agency (FSA).
          </p>
          
          <h2>3. International Compliance & Trade Laws</h2>
          <p>
            Buyers are responsible for ensuring that the importation and use of Amroot Organics products comply with all local laws and regulations in their respective jurisdictions.
          </p>
          <ul>
            <li><strong>UAE:</strong> Compliance with the UAE Ministry of Climate Change and Environment (MOCCAE) and local municipal food safety standards for import.</li>
            <li><strong>Germany/EU:</strong> Compliance with EU organic regulations, pesticide residue limits (MRLs), and REACH (if applicable).</li>
            <li><strong>USA:</strong> Compliance with the Food Safety Modernization Act (FSMA) and Foreign Supplier Verification Programs (FSVP).</li>
            <li><strong>UK:</strong> Adherence to DEFRA and FSA import regulations post-Brexit.</li>
            <li><strong>India:</strong> FSSAI and Spices Board of India export mandates.</li>
          </ul>

          <h2>4. Intellectual Property</h2>
          <p>
            All content, trademarks, logos, imagery (including product mockups), and technical literature on this website are the intellectual property of Amroot Organics. You may not reproduce, distribute, or use these materials without our express written consent.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, Amroot Organics shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, arising from your use of the Services or our products.
          </p>

          <h2>6. Governing Law & Dispute Resolution</h2>
          <p>
            Given our global operations, the following governing law provisions apply:
          </p>
          <ul>
            <li><strong>Primary Jurisdiction:</strong> Unless otherwise agreed in a separate B2B contract, these Terms and any disputes arising out of them shall be governed by and construed in accordance with the laws of <strong>India</strong>, and subject to the exclusive jurisdiction of the courts of Mumbai.</li>
            <li><strong>International Arbitration:</strong> For substantial international disputes, parties may mutually agree to binding arbitration under the rules of the International Chamber of Commerce (ICC).</li>
            <li><strong>Consumer Protection Exemptions:</strong> As a B2B platform, consumer protection laws applicable in the UK, Germany, or the USA do not generally apply to our commercial supply agreements, unless statutorily mandated.</li>
          </ul>

          <h2>7. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this site. You are advised to review these Terms periodically for any changes.
          </p>

          <h2>8. Contact Information</h2>
          <p>
            For any legal or commercial inquiries regarding these Terms, please contact us at:
          </p>
          <ul className="list-none pl-0 mt-4 border-l-2 border-brand-charcoal/20 pl-6 py-2">
            <li><strong>Email:</strong> legal@amrootorganics.com</li>
            <li><strong>Address:</strong> Global Headquarters, Mumbai, India</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
