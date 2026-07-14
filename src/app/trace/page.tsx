import { TraceFeature } from "@/components/trace/TraceFeature";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trace Your Product | Amroot Organics",
  description: "Enter your product's batch ID to discover its journey from our farms to your hands. True transparency at every step.",
};

export default function TracePage() {
  return (
    <main>
      <TraceFeature />
    </main>
  );
}
