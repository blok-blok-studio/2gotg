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
    "Meet Heidie Haynes, founder of 2 Girls on the Go. More than 40 years of personal travel experience behind every itinerary she builds.",
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
