"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, DollarSign, MapPin, Star } from "lucide-react";
import { ShareLinks } from "@/components/shared/share-links";

const tours = [
  {
    slug: "sicilian-discovery",
    name: "Sicilian Discovery",
    destination: "Sicily, Italy",
    duration: "8 Days / 7 Nights",
    price: "$2,899",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80",
    highlights: [
      "Valley of the Temples guided tour",
      "Mt. Etna sunset wine tasting",
      "Hands-on Sicilian cooking class",
      "Boat tour of the Aeolian Islands",
    ],
  },
  {
    slug: "paris-romance",
    name: "Paris Romance",
    destination: "Paris, France",
    duration: "7 Days / 6 Nights",
    price: "$3,499",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    highlights: [
      "Private Louvre after-hours tour",
      "Seine River dinner cruise",
      "Champagne day trip to Reims",
      "Montmartre art walk with local guide",
    ],
  },
  {
    slug: "nashville-music-and-soul",
    name: "Nashville Music & Soul",
    destination: "Nashville, Tennessee",
    duration: "5 Days / 4 Nights",
    price: "$1,499",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1505672678657-cc7037095e60?w=800&q=80",
    highlights: [
      "VIP Broadway honky-tonk crawl",
      "Grand Ole Opry backstage pass",
      "Hot chicken tasting trail",
      "Private songwriting session",
    ],
  },
  {
    slug: "southern-charm-trail",
    name: "Southern Charm Trail",
    destination: "Charleston, South Carolina",
    duration: "5 Days / 4 Nights",
    price: "$1,399",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1569974507005-6dc61f97fb5c?w=800&q=80",
    highlights: [
      "Historic district carriage tour",
      "Lowcountry oyster roast experience",
      "Plantation gardens walking tour",
      "Sunset sailing on Charleston Harbor",
    ],
  },
];

export function PackageTours() {
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
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-cta uppercase tracking-widest mb-3"
          >
            Curated Packages
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Ready-to-Book{" "}
            <span className="text-primary">Tour Packages</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-muted"
          >
            Expertly planned itineraries with hand-picked hotels, local guides,
            and unforgettable experiences included.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {tours.map((tour, i) => (
            <motion.div
              key={tour.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, rotate: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-white rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              {/* Share button */}
              <div className="absolute top-4 right-4 z-10">
                <ShareLinks
                  url={`https://2gotg.com/tours/${tour.slug}`}
                  title={`${tour.name} — 2GoTG Travel`}
                  variant="compact"
                />
              </div>

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
                  View Itinerary
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
