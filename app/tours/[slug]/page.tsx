import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TourDetail, type TourData } from "./tour-detail";

const tours: Record<string, TourData> = {
  "sicily-summer": {
    slug: "sicily-summer",
    name: "Bella Sicilia",
    destination: "Europe · Italy — Palermo, Cefalu, Marsala/Erice, Scopello",
    duration: "7 Days / 6 Nights",
    price: "From $1,750",
    rating: 5.0,
    image:
      "/images/destinations/sicily-italy-escape-travel-package-2026-tour.jpg",
    description:
      "A week in Sicily based out of a private villa with pool, gardens, and outdoor kitchen — beach access, bilingual hostess, and curated experiences across Palermo, Cefalu, Marsala/Erice, and Scopello.",
    highlights: [
      "Palermo historical tour and street food experience",
      "Cefalu UNESCO cathedral, shopping, and beach day",
      "Marsala wineries and Castle Venus in Erice",
      "Scopello hiking and Zingaro Nature Reserve",
      "Valle dei Templi UNESCO ancient Greek architecture",
      "Salt Road shimmering pans and ancient windmills",
    ],
    included: [
      "Flights",
      "Airport and daily transportation",
      "Bilingual guide/hostess, curated experiences",
      "Private villa (up to 6 guests) — pool, gardens, outdoor kitchen, access to beach",
      "Optional tours available — e.g. boat tour / wine tour",
    ],
    notIncluded: [
      "Travel insurance",
      "Meals",
    ],
  },

  "macedonia-tour": {
    slug: "macedonia-tour",
    name: "Macedonian Heritage",
    destination: "Europe · North Macedonia — Matka, Vodno, Ohrid, Mavrovo",
    duration: "6 Days / 7 Nights or 4 Days / 3 Nights",
    price: "From $550",
    rating: 5.0,
    image:
      "/images/destinations/lake-ohrid-north-macedonia-crystal-water-aerial-tour.jpg",
    description:
      "An immersive small-group cultural experience across North Macedonia — Matka Canyon, Vodno Mountain, Lake Ohrid, Mavrovo, and the Orthodox monasteries — with all meals, accommodations, and tickets included.",
    highlights: [
      "Matka Canyon",
      "Vodno Mountain",
      "Duf Waterfalls",
      "Ohrid and Mavrovo Lakes",
      "Vevcani village",
      "Orthodox monasteries",
    ],
    included: [
      "Flights",
      "Airport pick-ups",
      "Multi-lingual guide (English, Spanish, Italian)",
      "Private transportation in comfortable van",
      "All meals (breakfasts, lunches, dinners, & coffee breaks)",
      "All accommodations",
      "All tickets (museums, boat rides, monasteries & more)",
    ],
    notIncluded: [
      "Travel insurance",
      "Alcoholic drinks",
    ],
  },
};

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

  return {
    title: `${tour.name} — ${tour.duration}`,
    description: tour.description,
    openGraph: {
      title: `${tour.name} | 2 Girls on the Go`,
      description: tour.description,
      images: [{ url: tour.image, width: 1200, height: 630 }],
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

  return <TourDetail tour={tour} />;
}
