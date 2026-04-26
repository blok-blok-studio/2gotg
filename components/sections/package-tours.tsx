"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, MapPin, Calendar, Mail } from "lucide-react";
import { ShareLinks } from "@/components/shared/share-links";
import { useHoverCapable } from "@/lib/use-hover-capable";

type FeaturedTour = {
  category: string;
  badge: string;
  badgeUrgent: boolean;
  comingSoon?: boolean;
  slug: string;
  name: string;
  date: string;
  deadline: string | null;
  deposit: string | null;
  duration: string;
  price: string;
  priceNote: string;
  pricingNote?: string;
  image: string;
  imageAlt: string;
  galleryImage?: string;
  galleryImageAlt?: string;
  highlights: string[];
  includes: string[];
  excludes: string;
};

const featuredTours: FeaturedTour[] = [
  {
    category: "Travel With Us",
    badge: "Only 5 Spots Left",
    badgeUrgent: true,
    slug: "sicily-2026",
    name: "Sicily, Italy",
    date: "September 21 through 27, 2026",
    deadline: "May 11, 2026",
    deposit: "$250",
    duration: "7 Days / 6 Nights",
    price: "From $1,750",
    priceNote: "per person",
    pricingNote: "Minimum 3 travelers. Small group pricing available.",
    image: "/images/destinations/sicily-italy-escape-travel-package-2026-tour.jpg",
    imageAlt: "Sicilian coastline with limestone cliffs and turquoise water for the 2 Girls on the Go Sicily escape tour September 2026",
    highlights: [
      "Palermo historical tour and street food experience",
      "Cefalù UNESCO cathedral site, shopping, and beach day",
      "Scopello hiking trails and Zingaro Nature Reserve",
      "Valle dei Templi, a UNESCO World Heritage site for ancient Greek architecture",
      "Marsala and Erice with wine tastings and Castle Venus",
      "Isola Bella, one of Sicily's most beautiful island nature reserves",
    ],
    includes: [
      "Airport and day trip transportation",
      "Bilingual speaking guide",
      "Private villa with beach, pool, and gardens",
      "Unique curated experiences",
      "Boat tours and winery visits available",
    ],
    excludes: "Airfare not included",
  },
  {
    category: "Explore the World",
    badge: "This Month's Highlight",
    badgeUrgent: false,
    slug: "macedonia-cultural-escape",
    name: "Macedonia Cultural Escape",
    date: "Flexible dates available",
    deadline: null,
    deposit: null,
    duration: "6 Days / 7 Nights or 4 Days / 3 Nights",
    price: "Starting at $550",
    priceNote: "plus booking fee",
    image: "/images/destinations/mavrovo-lake-submerged-church-north-macedonia-travel-tour.jpg",
    imageAlt: "Submerged church at Mavrovo Lake in North Macedonia surrounded by autumn foliage, featured on the 2 Girls on the Go Macedonia cultural escape tour",
    galleryImage: "/images/destinations/lake-ohrid-north-macedonia-crystal-water-aerial-tour.jpg",
    galleryImageAlt: "Aerial view of Lake Ohrid in North Macedonia showing stunning turquoise and deep blue crystal clear water with white pebble beach and forested hills",
    highlights: [
      "Matka Canyon",
      "Vodno Mountain",
      "Duf Waterfalls",
      "Ohrid and Mavrovo Lakes",
      "Vevcani village",
      "Orthodox monasteries",
    ],
    includes: [
      "Airport pick-ups",
      "Multi-lingual guide in English, Spanish, and Italian",
      "Private transportation in a comfortable van",
      "All meals including breakfasts, lunches, dinners, and coffee breaks",
      "All accommodations",
      "All tickets for museums, boat rides, monasteries, and more",
    ],
    excludes: "Flights, travel insurance, and alcoholic drinks not included",
  },
  {
    category: "Explore the World",
    badge: "Coming Soon",
    badgeUrgent: false,
    comingSoon: true,
    slug: "berlin-germany",
    name: "Berlin, Germany",
    date: "Dates to be announced",
    deadline: null,
    deposit: null,
    duration: "5 to 7 Days",
    price: "Inquire for pricing",
    priceNote: "",
    image: "/images/destinations/berlin-brandenburg-gate-germany-travel-tour.jpg",
    imageAlt: "Brandenburg Gate in Berlin Germany at golden hour, featured destination on the 2 Girls on the Go Europe travel tour",
    highlights: [
      "Brandenburg Gate and the Berlin Wall Memorial",
      "Museum Island and world class art collections",
      "Checkpoint Charlie and Cold War history",
      "Vibrant street food, markets, and nightlife",
      "Optional day trip to Potsdam and Sanssouci Palace",
    ],
    includes: [
      "Curated local experiences and guided tours",
      "Hotel accommodations in central Berlin",
      "Transportation within the city",
    ],
    excludes: "Flights and travel insurance not included",
  },
  {
    category: "Explore the World",
    badge: "Coming Soon",
    badgeUrgent: false,
    comingSoon: true,
    slug: "london-england",
    name: "London, England",
    date: "Dates to be announced",
    deadline: null,
    deposit: null,
    duration: "5 to 7 Days",
    price: "Inquire for pricing",
    priceNote: "",
    image: "/images/destinations/london-buckingham-palace-england-travel-tour.jpg",
    imageAlt: "Buckingham Palace at sunset with colorful flower gardens in the foreground, featured destination on the 2 Girls on the Go London travel tour",
    highlights: [
      "Buckingham Palace and the Changing of the Guard",
      "Tower of London and Tower Bridge",
      "British Museum and West End theatre",
      "Notting Hill, Camden Market, and Borough Market",
      "Optional day trip to Windsor Castle or Stonehenge",
    ],
    includes: [
      "Curated local experiences and guided tours",
      "Hotel accommodations in central London",
      "Transportation within the city",
    ],
    excludes: "Flights and travel insurance not included",
  },
];

const closerToHome = [
  { name: "Napa Valley", region: "West Coast" },
  { name: "Savannah", region: "East Coast" },
  { name: "Gulf Shores", region: "Emerald Coast" },
  { name: "Washington, D.C.", region: "Historical and Educational" },
];

const localEvents = [
  { name: "Fredericksburg Crawfish Festival", when: "May" },
  { name: "Local Winery Tour", when: "June" },
  { name: "Texas State Fair", when: "Sept / Oct" },
  { name: "Canton Trade Days", when: "Any Month" },
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
          <motion.p
            className="text-sm font-semibold text-cta uppercase tracking-widest mb-3"
          >
            Travel With Us
          </motion.p>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Find Your{" "}
            <span className="text-primary">Next Adventure</span>
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-muted"
          >
            Expertly planned trips with local guides, curated experiences, and
            personal service from start to finish.
          </motion.p>
        </div>

        {/* Featured tours */}
        <div className="space-y-10 mb-16">
          {featuredTours.map((tour, i) => (
            <motion.div
              key={tour.slug}
              className="group bg-white rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="grid md:grid-cols-5">
                {/* Image */}
                <div className={`md:col-span-2 relative overflow-hidden flex flex-col ${tour.galleryImage ? "" : "aspect-[4/3] md:aspect-auto"}`}>
                  {tour.galleryImage ? (
                    <>
                      <div className="relative flex-1 min-h-0" style={{ flexBasis: "60%" }}>
                        <Image
                          src={tour.image}
                          alt={tour.imageAlt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 40vw"
                          quality={85}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      </div>
                      <div className="relative" style={{ flexBasis: "40%", minHeight: "140px" }}>
                        <Image
                          src={tour.galleryImage}
                          alt={tour.galleryImageAlt ?? ""}
                          fill
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 40vw"
                          quality={85}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center text-xs font-bold px-3 py-1.5 rounded-full bg-cta text-white">
                          {tour.badge}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-xs font-semibold px-3 py-1.5 rounded-full text-foreground">
                          <MapPin className="h-3 w-3 text-primary" />
                          {tour.name}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <Image
                        src={tour.image}
                        alt={tour.imageAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 40vw"
                        quality={85}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        <span
                          className={`inline-flex items-center text-xs font-bold px-3 py-1.5 rounded-full ${
                            tour.badgeUrgent
                              ? "bg-red-500 text-white"
                              : tour.comingSoon
                              ? "bg-white/90 text-foreground"
                              : "bg-cta text-white"
                          }`}
                        >
                          {tour.badge}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-xs font-semibold px-3 py-1.5 rounded-full text-foreground">
                          <MapPin className="h-3 w-3 text-primary" />
                          {tour.name}
                        </span>
                      </div>
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="md:col-span-3 p-6 lg:p-8 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-xs font-semibold text-cta uppercase tracking-widest mb-1">
                        {tour.category}
                      </p>
                      <h3 className="font-[var(--font-heading)] text-xl lg:text-2xl font-bold text-foreground">
                        {tour.name}
                      </h3>
                      <p className="text-sm text-muted mt-1">{tour.date}</p>
                    </div>
                    {!tour.comingSoon && (
                      <div className="shrink-0 ml-3">
                        <ShareLinks
                          url={`https://2girlsonthego.com/tours/${tour.slug}`}
                          title={`${tour.name} — 2GoTG Travel`}
                          variant="compact"
                        />
                      </div>
                    )}
                  </div>

                  {/* Price + Duration */}
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div>
                      <span className="text-2xl font-bold text-foreground">{tour.price}</span>
                      {tour.priceNote && (
                        <span className="text-sm text-muted ml-1">{tour.priceNote}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-muted">
                      <Clock className="h-3.5 w-3.5" />
                      {tour.duration}
                    </div>
                  </div>

                  {/* Pricing note */}
                  {tour.pricingNote && (
                    <p className="text-xs text-muted italic mb-4">{tour.pricingNote}</p>
                  )}

                  {/* Deadline callout */}
                  {tour.deadline && (
                    <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-4 text-sm text-amber-800">
                      <Calendar className="h-4 w-4 shrink-0" />
                      <span>
                        <strong>{tour.deposit} deposit</strong> to reserve. Deadline is {tour.deadline}.
                      </span>
                    </div>
                  )}

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-5 flex-1">
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

                  {/* Includes */}
                  {!tour.comingSoon && (
                    <div className="mb-5">
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Includes</p>
                      <ul className="space-y-1">
                        {tour.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs text-muted">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary/50 mt-1 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs text-muted/70 mt-2 italic">{tour.excludes}</p>
                    </div>
                  )}

                  {/* CTA */}
                  {tour.comingSoon ? (
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl border-2 border-cta text-cta font-semibold text-sm hover:bg-cta hover:text-white transition-colors duration-200 group/btn cursor-pointer"
                    >
                      <Mail className="h-4 w-4" />
                      Get in Touch About London
                    </Link>
                  ) : (
                    <Link
                      href={`/tours/${tour.slug}`}
                      className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-cta text-white font-semibold text-sm hover:bg-cta-hover transition-colors duration-200 group/btn cursor-pointer"
                    >
                      View Details
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closer to Home */}
        <motion.div
          className="mb-12"
        >
          <div className="mb-6">
            <p className="text-sm font-semibold text-cta uppercase tracking-widest mb-1">Closer to Home</p>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">Domestic Getaways</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {closerToHome.map((dest, i) => (
              <motion.div
                key={dest.name}
                className="p-5 rounded-2xl border border-border bg-white hover:border-primary/30 hover:shadow-md transition-all duration-300 cursor-pointer group"
              >
                <MapPin className="h-4 w-4 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <p className="font-semibold text-sm text-foreground">{dest.name}</p>
                <p className="text-xs text-muted mt-1">{dest.region}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Just Around the Corner */}
        <motion.div
        >
          <div className="mb-6">
            <p className="text-sm font-semibold text-cta uppercase tracking-widest mb-1">Just Around the Corner</p>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">Local Events &amp; Day Trips</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {localEvents.map((event, i) => (
              <motion.div
                key={event.name}
                className="p-5 rounded-2xl border border-border bg-white hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
              >
                <Calendar className="h-4 w-4 text-cta mb-3 group-hover:scale-110 transition-transform" />
                <p className="font-semibold text-sm text-foreground">{event.name}</p>
                <p className="text-xs text-muted mt-1">{event.when}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
