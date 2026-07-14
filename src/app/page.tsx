import { Hero } from "@/components/home/Hero";
import { TrustCards } from "@/components/home/TrustCards";
import { RareProductsScroll } from "@/components/home/RareProductsScroll";
import { ComingSoon } from "@/components/home/ComingSoon";
import { ComparisonTable } from "@/components/home/ComparisonTable";
import { Traceability } from "@/components/home/Traceability";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {


  return (
    <>
      <Hero />
      <Traceability />
      <TrustCards />
      
      <RareProductsScroll />

      <ComparisonTable />
    </>
  );
}
