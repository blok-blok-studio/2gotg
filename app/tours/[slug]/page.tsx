import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TourDetail } from "./tour-detail";
import { tours } from "@/lib/tours";
import { siteConfig } from "@/config/site";

export function generateStaticParams() {
  return Object.keys(tours).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tour = tours[slug];
  if (!tour) return { title: "Tour Not Found" };

  const canonical = `${siteConfig.url}/tours/${slug}`;

  return {
    title: `${tour.name}, ${tour.duration}`,
    description: tour.description,
    alternates: { canonical },
    openGraph: {
      title: `${tour.name} | 2 Girls on the Go`,
      description: tour.description,
      url: canonical,
      images: [{ url: tour.image, width: 1200, height: 630, alt: tour.name }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${tour.name} | 2 Girls on the Go`,
      description: tour.description,
      images: [tour.image],
    },
  };
}

export default async function TourPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = tours[slug];
  if (!tour) notFound();

  const tripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.name,
    description: tour.description,
    image: `${siteConfig.url}${tour.image}`,
    url: `${siteConfig.url}/tours/${tour.slug}`,
    touristType: "Leisure",
    itinerary: {
      "@type": "ItemList",
      itemListElement: tour.highlights.map((h, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: h,
      })),
    },
    offers: {
      "@type": "Offer",
      price: tour.price.replace(/[^0-9.]/g, ""),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/contact`,
    },
    provider: {
      "@type": "TravelAgency",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }}
      />
      <TourDetail tour={tour} />
    </>
  );
}
