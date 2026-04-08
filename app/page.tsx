import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { PackageTours } from "@/components/sections/package-tours";
import { Experiences } from "@/components/sections/experiences";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <PackageTours />
      <Experiences />
      <Testimonials />
      <CTA />
    </>
  );
}
