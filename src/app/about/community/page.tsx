import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollLayout } from "@/components/community/SmoothScrollLayout";
import { CommunityHero } from "@/components/community/CommunityHero";
import { WhyThisExists } from "@/components/community/WhyThisExists";
import { WhoBelongsHere } from "@/components/community/WhoBelongsHere";
import { TheValues } from "@/components/community/TheValues";
import { GlobalMap } from "@/components/community/GlobalMap";
import { CommunityWall } from "@/components/community/CommunityWall";
import { InsideTheCircle } from "@/components/community/InsideTheCircle";
import { Timeline } from "@/components/community/Timeline";
import { FoundingMembers } from "@/components/community/FoundingMembers";
import { JoinTheCircle } from "@/components/community/JoinTheCircle";

import { constructMetadata } from "@/lib/seo/utils";
import { pageIntelligence, productIntelligence } from "@/lib/seo/intelligence";

export const metadata = constructMetadata({
  title: "Fair Trade Spice Farming",
  description: "Our commitment to ethical farming and empowering spice farmers in Meghalaya, India.",
  keywords: pageIntelligence.community?.secondaryKeywords || [],
  canonicalUrl: "https://amrootorganics.com/community",
});

export default function CommunityPage() {
  return (
    <SmoothScrollLayout>
      <div className="flex flex-col bg-brand-charcoal overflow-hidden">
        <CommunityHero />
        <WhyThisExists />
        <WhoBelongsHere />
        <TheValues />
        <GlobalMap />
        <CommunityWall />
        <InsideTheCircle />
        <Timeline />
        <FoundingMembers />
        <JoinTheCircle />
      </div>
    </SmoothScrollLayout>
  );
}
