import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/hero";

const Features = dynamic(() =>
  import("@/components/sections/features").then((m) => ({ default: m.Features })),
);
const DestinationsPreview = dynamic(() =>
  import("@/components/sections/destinations-preview").then((m) => ({ default: m.DestinationsPreview })),
);
const PackageTours = dynamic(() =>
  import("@/components/sections/package-tours").then((m) => ({ default: m.PackageTours })),
);
const Experiences = dynamic(() =>
  import("@/components/sections/experiences").then((m) => ({ default: m.Experiences })),
);
const Testimonials = dynamic(() =>
  import("@/components/sections/testimonials").then((m) => ({ default: m.Testimonials })),
);
const CTA = dynamic(() =>
  import("@/components/sections/cta").then((m) => ({ default: m.CTA })),
);

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
