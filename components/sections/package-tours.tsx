"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, DollarSign, MapPin, Star } from "lucide-react";
import { ShareLinks } from "@/components/shared/share-links";
import { useHoverCapable } from "@/lib/use-hover-capable";

const tours = [
  {
    slug: "sicily-summer",
    name: "Sicily — September 21 to 27, 2026",
    destination: "Palermo, Cefalu, Marsala/Erice, Scopello & more",
    duration: "7 Days / 6 Nights",
    price: "From $1,750",
    rating: 5.0,
    image: "/images/destinations/sicily-italy-escape-travel-package-2026-tour.jpg",
    badge: "Reserve by May 11, 2026 — $250 deposit, 5 spots left",
    highlights: [
      "Palermo historical tour and street food experience",
      "Cefalu UNESCO cathedral, shopping, and beach day",
      "Marsala wineries and Castle Venus in Erice",
      "Scopello hiking and Zingaro Nature Reserve",
      "Valle dei Templi UNESCO ancient Greek architecture",
      "Salt Road shimmering pans and ancient windmills",
    ],
  },
  {
    slug: "macedonia-tour",
    name: "Macedonia Cultural Escape",
    destination: "Matka, Vodno, Ohrid, Mavrovo & beyond",
    duration: "6 / 7 Nights or 4 / 3 Nights",
    price: "From $550",
    rating: 5.0,
    image: "/images/destinations/lake-ohrid-north-macedonia-crystal-water-aerial-tour.jpg",
    badge: "This month's highlight",
    highlights: [
      "Matka Canyon",
      "Vodno Mountain",
      "Duf Waterfalls",
      "Ohrid and Mavrovo Lakes",
      "Vevcani village",
      "Orthodox monasteries",
    ],
  },
];

export function PackageTours() {
  const canHover = useHoverCapable();
  return (
    <section
      id="package-tours"
      className="py-24 lg:py-32 relative"
      style={{
        background:
          "linear-gradient(to bottom, #F0F9FF, white 15%, white 85%, #F0F9FF)",
      }}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-20">
          <p className="text-sm font-semibold text-cta uppercase tracking-widest mb-3">
            Travel With Us
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Ready-to-Book{" "}
            <span className="text-primary">Tour Packages</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            Expertly planned itineraries with hand-picked hotels, local guides,
            and unforgettable experiences included.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {tours.map((tour) => (
            <motion.div
              key={tour.slug}
              {...(canHover ? { whileHover: { y: -6, rotate: 0.5, transition: { duration: 0.2 } } } : {})}
              className="group relative bg-white rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              {/* Share button */}
              <div className="absolute top-4 right-4 z-10">
                <ShareLinks
                  url={`https://2girlsonthego.com/tours/${tour.slug}`}
                  title={`${tour.name} — 2 Girls on the Go`}
                  variant="compact"
                />
              </div>

              {/* Badge */}
              {tour.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center bg-cta/95 text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg shadow-cta/30">
                    {tour.badge}
                  </span>
                </div>
              )}

              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={tour.image}
                  alt={`${tour.name} tour package — ${tour.destination}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-xs font-semibold px-3 py-1.5 rounded-full text-foreground">
                    <MapPin className="h-3 w-3 text-primary" />
                    {tour.destination}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-[var(--font-heading)] text-xl lg:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {tour.name}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-cta font-medium shrink-0 ml-3">
                    <Star className="h-3.5 w-3.5 fill-current" />
                    {tour.rating}
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted mb-4">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {tour.duration}
                  </span>
                  <span className="flex items-center gap-1.5 font-semibold text-foreground">
                    <DollarSign className="h-3.5 w-3.5" />
                    {tour.price}
                    <span className="font-normal text-muted">/person</span>
                  </span>
                </div>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {tour.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={`/tours/${tour.slug}`}
                  className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-cta text-white font-semibold text-sm hover:bg-cta-hover transition-colors duration-200 group/btn cursor-pointer"
                >
                  View Details
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
