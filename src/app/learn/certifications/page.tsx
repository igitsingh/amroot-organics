import { Metadata } from "next";
import { CertificationsHero } from "@/components/certifications/CertificationsHero";
import { GlobalStandards } from "@/components/certifications/GlobalStandards";
import { LabTesting } from "@/components/certifications/LabTesting";

export const metadata: Metadata = {
  title: "Certifications & Compliance | Amroot Organics",
  description: "Global food safety standards, organic certifications, and rigorous lab testing ensuring Amroot Organics products are ready for export to the US, EU, and UAE.",
};

export default function CertificationsPage() {
  return (
    <main className="min-h-screen">
      <CertificationsHero />
      <GlobalStandards />
      <LabTesting />
    </main>
  );
}
