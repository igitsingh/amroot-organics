import React from "react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-brand-white min-h-screen pt-12 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <Link href="/" className="text-brand-green font-medium hover:underline mb-6 inline-block">
            &larr; Back to Home
          </Link>
          <h1 className="font-serif text-4xl sm:text-5xl text-brand-charcoal mb-4">Privacy Policy</h1>
          <p className="text-brand-charcoal/60">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose prose-lg prose-headings:font-serif prose-headings:text-brand-charcoal prose-p:text-brand-charcoal/80 prose-a:text-brand-green max-w-none">
          <p>
            Amroot Organics ("we," "us," or "our") respects your privacy and is committed to protecting your personal data. 
            This Privacy Policy will inform you as to how we look after your personal data when you visit our website 
            and tell you about your privacy rights and how the law protects you.
          </p>

          <h2>1. General Information & Data Controller</h2>
          <p>
            Amroot Organics is the data controller and is responsible for your personal data. Our global headquarters 
            is located in Mumbai, India. We process data in compliance with applicable international data protection 
            regulations, ensuring a high standard of privacy for all our B2B partners, clients, and website visitors.
          </p>

          <h2>2. The Data We Collect About You</h2>
          <p>
            We may collect, use, store, and transfer different kinds of personal data about you, which we have grouped together as follows:
          </p>
          <ul>
            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier, title, and company name.</li>
            <li><strong>Contact Data:</strong> includes billing address, delivery address, email address, and telephone numbers.</li>
            <li><strong>Financial Data:</strong> includes bank account and payment card details (processed securely via third-party gateways).</li>
            <li><strong>Transaction Data:</strong> includes details about payments to and from you and other details of products or services you have purchased from us.</li>
            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, and operating system.</li>
          </ul>

          <h2>3. Global Privacy Compliance (Region-Specific Rights)</h2>
          
          <h3>3.1 United Kingdom (UK) & European Union (Germany) - GDPR Compliance</h3>
          <p>
            If you are a resident of the European Economic Area (EEA) or the UK, you have specific rights under the General Data Protection Regulation (GDPR) and the UK GDPR:
          </p>
          <ul>
            <li><strong>Legal Basis:</strong> We process your data based on consent, performance of a contract (B2B transactions), and legitimate interests (e.g., fraud prevention, business analytics).</li>
            <li><strong>Your Rights:</strong> You have the right to request access, correction, erasure, restriction, transfer, or to object to processing of your personal data.</li>
            <li><strong>Cross-Border Transfers:</strong> When we transfer your personal data out of the EEA/UK, we ensure a similar degree of protection is afforded to it by utilizing Standard Contractual Clauses (SCCs) or relying on adequacy decisions.</li>
          </ul>

          <h3>3.2 United States of America (USA) - CCPA, CPRA & State Laws</h3>
          <p>
            For residents of California and other applicable US states, we comply with the California Consumer Privacy Act (CCPA) as amended by the CPRA:
          </p>
          <ul>
            <li><strong>Do Not Sell or Share:</strong> We do not sell your personal information. We may share it with essential service providers solely to fulfill your B2B orders. You may exercise your right to opt-out by contacting us.</li>
            <li><strong>Right to Know & Delete:</strong> You may request disclosure of the specific pieces of personal information we have collected about you and request its deletion.</li>
            <li><strong>COPPA:</strong> Our website and services are strictly B2B and not directed to children under 13. We do not knowingly collect data from children.</li>
          </ul>

          <h3>3.3 India - Digital Personal Data Protection (DPDP) Act 2023</h3>
          <p>
            As an entity headquartered in India, we strictly adhere to the DPDP Act 2023:
          </p>
          <ul>
            <li><strong>Notice and Consent:</strong> Data is collected only after providing a clear notice and obtaining your affirmative consent, where applicable.</li>
            <li><strong>Rights of Data Principals:</strong> You possess the right to access information, the right to correction and erasure, and the right to grievance redressal.</li>
            <li><strong>Data Fiduciary Obligations:</strong> We implement reasonable security safeguards and report data breaches to the Data Protection Board of India as required by law.</li>
          </ul>

          <h3>3.4 United Arab Emirates (UAE) - PDPL Compliance</h3>
          <p>
            In compliance with the UAE Federal Decree-Law No. 45 of 2021 regarding the Protection of Personal Data (PDPL):
          </p>
          <ul>
            <li><strong>Lawful Processing:</strong> Processing is conducted transparently, securely, and based on lawful grounds such as contract execution or explicit consent.</li>
            <li><strong>Data Localization & Transfers:</strong> Data transferred outside the UAE is subject to adequate protection mechanisms as approved by the UAE Data Office.</li>
            <li><strong>Breach Notification:</strong> We are committed to notifying the UAE Data Office and affected data subjects of any breaches that compromise privacy without undue delay.</li>
          </ul>

          <h2>4. Data Retention</h2>
          <p>
            We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting, or reporting requirements.
          </p>

          <h2>5. Cookies and Tracking</h2>
          <p>
            We use cookies and similar tracking technologies to track the activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
          </p>

          <h2>6. Contact Us / Grievance Officer</h2>
          <p>
            If you have any questions about this Privacy Policy, or if you wish to exercise your legal rights, please contact our Data Protection Officer / Grievance Officer at:
          </p>
          <ul className="list-none pl-0 mt-4 border-l-2 border-brand-green pl-6 py-2">
            <li><strong>Email:</strong> legal@ourbrand.com</li>
            <li><strong>Address:</strong> Global Headquarters, Mumbai, India</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
