import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { DestinationsPreview } from "@/components/sections/destinations-preview";
import { PackageTours } from "@/components/sections/package-tours";
import { Experiences } from "@/components/sections/experiences";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <DestinationsPreview />
      <PackageTours />
      <Experiences />
      <Testimonials />
      <CTA />
    </>
  );
}
