import type { Metadata } from "next";
import { DestinationsContent } from "./destinations-content";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Explore our curated collection of European and American destinations. From Sicilian coastlines to Nashville's music scene, find your next adventure.",
};

export default function DestinationsPage() {
  return (
    <>
      <DestinationsContent />
      <CTA />
    </>
  );
}
