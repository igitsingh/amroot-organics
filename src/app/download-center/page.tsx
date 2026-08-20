import { Metadata } from "next";
import { DownloadCenterView } from "@/components/downloads/DownloadCenterView";
import { constructMetadata } from "@/lib/seo/utils";

export const metadata = constructMetadata({
  title: "Download Center | B2B Procurement",
  description: "Access detailed technical specifications, certifications, and compliance documentation for Amroot's premium single-origin exports.",
  canonicalUrl: "https://amrootorganics.com/download-center",
});

export default function DownloadCenterPage() {
  return (
    <main>
      <DownloadCenterView />
    </main>
  );
}
