import type { Metadata } from "next";
import { Experiences } from "@/components/sections/experiences";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "From luxury getaways to adventure travel, cultural immersion to corporate retreats. Discover the perfect travel experience tailored to your style.",
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
