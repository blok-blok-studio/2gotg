import type { Metadata } from "next";
import { Experiences } from "@/components/sections/experiences";
import { CTA } from "@/components/sections/cta";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "From luxury getaways to adventure travel, cultural immersion to corporate retreats. Discover the perfect travel experience tailored to your style.",
  alternates: { canonical: `${siteConfig.url}/experiences` },
  openGraph: {
    title: "Experiences | 2 Girls on the Go",
    description:
      "From luxury getaways to adventure travel, cultural immersion to corporate retreats. Discover the perfect travel experience tailored to your style.",
    url: `${siteConfig.url}/experiences`,
    type: "website",
  },
};

export default function ExperiencesPage() {
  return (
    <>
      <div className="pt-28 lg:pt-36" />
      <Experiences />
      <CTA />
    </>
  );
}
