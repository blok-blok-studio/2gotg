import type { Metadata } from "next";
import { AboutHero } from "./about-hero";
import { AboutStory } from "./about-story";
import { AboutTeam } from "./about-team";
import { AboutValues } from "./about-values";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the passionate team behind 2GoTG Travel. 14 years of crafting extraordinary journeys for thousands of happy travelers worldwide.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
      <Testimonials />
      <CTA />
    </>
  );
}
