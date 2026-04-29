import type { Metadata } from "next";
import { AboutHero } from "./about-hero";
import { AboutStory } from "./about-story";
import { AboutTeam } from "./about-team";
import { AboutValues } from "./about-values";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Heidie Haynes, founder of 2 Girls on the Go. More than 40 years of personal travel experience behind every itinerary she builds.",
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    title: "About Us | 2 Girls on the Go",
    description:
      "Meet Heidie Haynes, founder of 2 Girls on the Go. More than 40 years of personal travel experience behind every itinerary she builds.",
    url: `${siteConfig.url}/about`,
    type: "website",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Heidie Haynes",
  jobTitle: "Founder & Travel Advisor",
  worksFor: {
    "@type": "TravelAgency",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  url: `${siteConfig.url}/about`,
  description:
    "Heidie Haynes is the founder of 2 Girls on the Go, a U.S.-based boutique travel agency. With more than 40 years of personal travel experience across 6 continents, she designs custom itineraries for solo travelers, couples, and small groups.",
  sameAs: [
    siteConfig.social.instagram,
    siteConfig.social.facebook,
    siteConfig.social.linktree,
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
      <Testimonials />
      <CTA />
    </>
  );
}
