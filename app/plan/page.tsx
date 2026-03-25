import type { Metadata } from "next";
import { PlanContent } from "./plan-content";

export const metadata: Metadata = {
  title: "Plan Your Trip",
  description:
    "Get your free travel planning guide and book a consultation with our expert advisors. Answer a few quick questions to help us personalize your experience.",
};

export default function PlanPage() {
  return <PlanContent />;
}
