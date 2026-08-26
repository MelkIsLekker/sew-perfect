// src/app/page.tsx
import { HeroSection } from "@/components/sections/HeroSection";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Lookbook } from "@/components/sections/Lookbook";
import { StudioInfo } from "@/components/sections/StudioInfo";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <Process />
      <Lookbook />
      <StudioInfo />
    </>
  );
}