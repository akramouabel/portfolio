import React from "react";
import Hero from "@/components/sections/hero/Hero";
import WhatICanBuild from "@/components/sections/WhatICanBuild";
import HowIWork from "@/components/sections/HowIWork";
import AboutPreview from "@/components/sections/AboutPreview";
import FinalCTA from "@/components/sections/FinalCTA";
import ProjectsSection from "@/components/projects/ProjectsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsSection />
      <WhatICanBuild />
      <HowIWork />
      <AboutPreview />
      <FinalCTA />
    </>
  );
}
