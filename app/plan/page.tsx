import type { Metadata } from "next";
import { PlanContent } from "./plan-content";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Plan Your Trip",
  description:
    "Get your free travel planning guide and book a consultation with our expert advisors. Answer a few quick questions to help us personalize your experience.",
  alternates: { canonical: `${siteConfig.url}/plan` },
  openGraph: {
    title: "Plan Your Trip | 2 Girls on the Go",
    description:
      "Get your free travel planning guide and book a consultation with our expert advisors. Answer a few quick questions to help us personalize your experience.",
    url: `${siteConfig.url}/plan`,
    type: "website",
  },
};

export default function PlanPage() {
  return <PlanContent />;
}
