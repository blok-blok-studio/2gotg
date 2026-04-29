"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, X, Maximize2, AlertCircle } from "lucide-react";
import { ShareLinks } from "@/components/shared/share-links";
import { useHoverCapable } from "@/lib/use-hover-capable";

type Tour = {
  slug: string;
  themedName: string;
  country: string;
  continent: string;
  destination: string;
  image: string;
  imageAlt?: string;
  highlights?: string[];
  inquireOnly?: boolean;
  price?: string;
  spotsAvailable?: number;
  joinDeadline?: string;
};

type TourGroup = {
  continent: string;
  country: string;
  tours: Tour[];
};

const tourGroups: TourGroup[] = [
  {
    continent: "Europe",
    country: "Italy",
    tours: [
      {
        slug: "sicily-summer",
        themedName: "Bella Sicilia",
        country: "Italy",
        continent: "Europe",
        destination: "Palermo, Cefalu, Marsala/Erice, Scopello",
        image:
          "/images/destinations/sicily-italy-escape-travel-package-2026-tour.jpg",
        imageAlt:
          "Coastal scenery in Sicily, Italy — Bella Sicilia summer travel package with 2 Girls on the Go",
        price: "Starting at $1,750",
        spotsAvailable: 5,
        joinDeadline: "Contact Heidie by May 15, 2026 to join this tour.",
        highlights: [
          "Palermo historical tour and street food experience",
          "Cefalu UNESCO cathedral, shopping, and beach day",
          "Marsala wineries and Castle Venus in Erice",
          "Scopello hiking and Zingaro Nature Reserve",
          "Valle dei Templi UNESCO ancient Greek architecture",
          "Salt Road shimmering pans and ancient windmills",
        ],
      },
    ],
  },
  {
    continent: "Europe",
    country: "North Macedonia",
    tours: [
      {
        slug: "macedonia-tour",
        themedName: "Macedonian Heritage",
        country: "North Macedonia",
        continent: "Europe",
        destination: "Matka, Vodno, Ohrid, Mavrovo & beyond",
        image:
          "/images/destinations/lake-ohrid-north-macedonia-crystal-water-aerial-tour.jpg",
        imageAlt:
          "Aerial view of crystal-clear Lake Ohrid waters in North Macedonia — Macedonian Heritage travel tour",
        price: "Starting at $550",
        highlights: [
          "Matka Canyon",
          "Vodno Mountain",
          "Duf Waterfalls",
          "Ohrid and Mavrovo Lakes",
          "Vevcani village",
          "Orthodox monasteries",
        ],
      },
    ],
  },
  {
    continent: "Europe",
    country: "Custom Travel",
    tours: [
      {
        slug: "berlin-adventure",
        themedName: "Berlin Wanderlust",
        country: "Germany",
        continent: "Europe",
        destination: "Berlin, Germany",
        image:
          "/images/destinations/berlin-brandenburg-gate-germany-travel-tour.jpg",
        imageAlt:
          "Brandenburg Gate landmark in Berlin, Germany — Berlin Wanderlust custom travel package",
        inquireOnly: true,
      },
      {
        slug: "london",
        themedName: "Royal London",
        country: "England",
        continent: "Europe",
        destination: "London, England",
        image:
          "/images/destinations/london-buckingham-palace-england-travel-tour.jpg",
        imageAlt:
          "Buckingham Palace in London, England — Royal London custom travel package",
        inquireOnly: true,
      },
      {
        slug: "greece",
        themedName: "Greek Odyssey",
        country: "Greece",
        continent: "Europe",
        destination: "Athens, Santorini & the islands",
        image:
          "https://images.unsplash.com/photo-1503152394-c571994fd383?w=1400&q=80",
        imageAlt:
          "Whitewashed buildings of Santorini overlooking the Aegean Sea, Greece — Greek Odyssey custom travel package",
        inquireOnly: true,
      },
    ],
  },
  {
    continent: "North America",
    country: "United States and Canada",
    tours: [
      {
        slug: "savannah",
        themedName: "Savannah Charm",
        country: "United States",
        continent: "North America",
        destination: "Savannah, Georgia",
        image:
          "/images/destinations/savannah-georgia-river-street-tour.jpg",
        imageAlt:
          "Aerial sunset view of historic Savannah, Georgia skyline with church steeple and Talmadge Bridge in the distance — Savannah Charm travel tour",
        inquireOnly: true,
      },
      {
        slug: "nashville",
        themedName: "Music City",
        country: "United States",
        continent: "North America",
        destination: "Nashville, Tennessee",
        image:
          "/images/destinations/nashville-tennessee-broadway-neon-tour.jpg",
        imageAlt:
          "Neon honky-tonk signs lighting up Broadway in Nashville, Tennessee at night — Music City travel tour",
        inquireOnly: true,
      },
      {
        slug: "napa-valley",
        themedName: "Napa Wine Country",
        country: "United States",
        continent: "North America",
        destination: "Napa Valley, California",
        image:
          "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=2000&q=90&auto=format&fit=crop",
        imageAlt:
          "Rolling vineyard rows in Napa Valley, California wine country — Napa Wine Country travel tour",
        inquireOnly: true,
      },
      {
        slug: "gulf-shores",
        themedName: "Gulf Coast Escape",
        country: "United States",
        continent: "North America",
        destination: "Gulf Shores, Alabama",
        image:
          "/images/destinations/gulf-shores-alabama-sunset-beach-tour.jpg",
        imageAlt:
          "Sunset over the white-sand beach in Gulf Shores, Alabama — Gulf Coast Escape travel tour",
        inquireOnly: true,
      },
      {
        slug: "calgary-stampede",
        themedName: "Calgary Stampede",
        country: "Canada",
        continent: "North America",
        destination: "Calgary, Alberta",
        image:
          "/images/destinations/calgary-alberta-downtown-skyline-tour.jpg",
        imageAlt:
          "Downtown Calgary, Alberta skyline at dusk with the Bow tower and Centre Street Bridge over the Bow River — Calgary Stampede travel tour",
        inquireOnly: true,
      },
    ],
  },
];

export function PackageTours() {
  const canHover = useHoverCapable();
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(
    null
  );

  return (
    <section
      id="package-tours"
      className="py-24 lg:py-32 relative"
      style={{
        background: "linear-gradient(to bottom, #F0F9FF, white)",
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
            Hand-picked destinations, curated experiences, and trusted local
            partners, grouped by region.
          </p>
        </div>

        {/* Featured single-tour regions side-by-side */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {tourGroups
            .filter((g) => g.tours.length === 1)
            .map((group) => {
              const tour = group.tours[0];
              const anchor = group.country.toLowerCase().replace(/\s+/g, "-");
              return (
                <div key={`${group.continent}-${group.country}`} id={anchor}>
                  {/* Group header */}
                  <div className="mb-5">
                    <p className="text-[11px] font-semibold text-cta uppercase tracking-widest mb-1">
                      {group.continent}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                      {group.country}
                    </h3>
                  </div>

                  <motion.div
                    {...(canHover
                      ? {
                          whileHover: {
                            y: -6,
                            rotate: 0.5,
                            transition: { duration: 0.2 },
                          },
                        }
                      : {})}
                    className="group relative bg-white rounded-2xl border border-border overflow-hidden transform-gpu hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                  >
                    {/* Share button */}
                    <div className="absolute top-4 right-4 z-10">
                      <ShareLinks
                        url={`https://2girlsonthego.com/tours/${tour.slug}`}
                        title={`${tour.themedName}, 2 Girls on the Go`}
                        variant="compact"
                      />
                    </div>

                    {/* Image */}
                    <button
                      type="button"
                      onClick={() =>
                        setLightbox({
                          src: tour.image,
                          alt: tour.imageAlt ?? `${tour.themedName} tour package, ${tour.destination}`,
                        })
                      }
                      className="relative aspect-[16/9] overflow-hidden rounded-t-2xl block w-full cursor-zoom-in"
                      aria-label={`View ${tour.themedName} flyer full size`}
                    >
                      <Image
                        src={tour.image}
                        alt={tour.imageAlt ?? `${tour.themedName} tour package, ${tour.destination}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      <span className="absolute bottom-4 right-4 inline-flex items-center justify-center h-8 w-8 bg-white/90 backdrop-blur-sm rounded-full text-foreground shadow-md">
                        <Maximize2 className="h-3.5 w-3.5" />
                      </span>
                      <div className="absolute bottom-4 left-4">
                        <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-xs font-semibold px-3 py-1.5 rounded-full text-foreground">
                          <MapPin className="h-3 w-3 text-primary" />
                          {tour.destination}
                        </span>
                      </div>
                    </button>

                    {/* Content */}
                    <div className="p-5 lg:p-6">
                      <h4 className="font-[var(--font-heading)] text-lg lg:text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
                        {tour.themedName}
                      </h4>

                      {(tour.price || tour.spotsAvailable) && (
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                          {tour.price && (
                            <span className="inline-flex items-center bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
                              {tour.price}
                            </span>
                          )}
                          {tour.spotsAvailable !== undefined && (
                            <span className="inline-flex items-center bg-cta/10 text-cta text-xs font-semibold px-3 py-1.5 rounded-full">
                              {tour.spotsAvailable} spots available
                            </span>
                          )}
                        </div>
                      )}

                      {tour.joinDeadline && (
                        <div className="flex items-start gap-2 mb-4 p-3 rounded-lg bg-amber-50 border border-amber-200">
                          <AlertCircle className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                          <p className="text-xs text-amber-800 leading-snug">
                            {tour.joinDeadline}
                          </p>
                        </div>
                      )}

                      {tour.highlights && tour.highlights.length > 0 ? (
                        <>
                          <ul className="space-y-1.5 mb-5">
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
                          <Link
                            href={`/tours/${tour.slug}`}
                            className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-cta text-white font-semibold text-sm hover:bg-cta-hover transition-colors duration-200 group/btn cursor-pointer"
                          >
                            View Package
                            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                          </Link>
                        </>
                      ) : (
                        <Link
                          href="/contact"
                          className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-cta text-white font-semibold text-sm hover:bg-cta-hover transition-colors duration-200 group/btn cursor-pointer"
                        >
                          Inquire Now
                          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                        </Link>
                      )}
                    </div>
                  </motion.div>
                </div>
              );
            })}
        </div>

        {/* Multi-tour regional sections (full-width) */}
        <div className="space-y-16 lg:space-y-20">
          {tourGroups
            .filter((g) => g.tours.length > 1)
            .map((group) => (
            <div
              key={`${group.continent}-${group.country}`}
              id={group.country.toLowerCase().replace(/\s+/g, "-")}
            >
              {/* Group header */}
              <div className="mb-8 lg:mb-10">
                <p className="text-xs font-semibold text-cta uppercase tracking-widest mb-2">
                  {group.continent}
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                  {group.country}
                </h3>
              </div>

              {/* Tour grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {group.tours.map((tour) => (
                  <motion.div
                    key={tour.slug}
                    {...(canHover
                      ? {
                          whileHover: {
                            y: -6,
                            rotate: 0.5,
                            transition: { duration: 0.2 },
                          },
                        }
                      : {})}
                    className="group relative bg-white rounded-2xl border border-border overflow-hidden transform-gpu hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                  >
                    {/* Share button */}
                    <div className="absolute top-4 right-4 z-10">
                      <ShareLinks
                        url={`https://2girlsonthego.com/tours/${tour.slug}`}
                        title={`${tour.themedName}, 2 Girls on the Go`}
                        variant="compact"
                      />
                    </div>

                    {/* Image (clickable for lightbox) */}
                    <button
                      type="button"
                      onClick={() =>
                        setLightbox({
                          src: tour.image,
                          alt: tour.imageAlt ?? `${tour.themedName} tour package, ${tour.destination}`,
                        })
                      }
                      className="relative aspect-[16/9] overflow-hidden rounded-t-2xl block w-full cursor-zoom-in"
                      aria-label={`View ${tour.themedName} flyer full size`}
                    >
                      <Image
                        src={tour.image}
                        alt={tour.imageAlt ?? `${tour.themedName} tour package, ${tour.destination}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      <span className="absolute bottom-4 right-4 inline-flex items-center justify-center h-8 w-8 bg-white/90 backdrop-blur-sm rounded-full text-foreground shadow-md">
                        <Maximize2 className="h-3.5 w-3.5" />
                      </span>
                      <div className="absolute bottom-4 left-4">
                        <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-xs font-semibold px-3 py-1.5 rounded-full text-foreground">
                          <MapPin className="h-3 w-3 text-primary" />
                          {tour.destination}
                        </span>
                      </div>
                    </button>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-cta mb-1">
                        {tour.continent} · {tour.country}
                      </p>
                      <h4 className="font-[var(--font-heading)] text-xl lg:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors mb-4">
                        {tour.themedName}
                      </h4>

                      {tour.highlights && tour.highlights.length > 0 ? (
                        <>
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
                          <Link
                            href={`/tours/${tour.slug}`}
                            className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-cta text-white font-semibold text-sm hover:bg-cta-hover transition-colors duration-200 group/btn cursor-pointer"
                          >
                            View Package
                            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                          </Link>
                        </>
                      ) : (
                        <Link
                          href="/contact"
                          className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-cta text-white font-semibold text-sm hover:bg-cta-hover transition-colors duration-200 group/btn cursor-pointer"
                        >
                          Inquire Now
                          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                        </Link>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Tour flyer full view"
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close full view"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-6xl max-h-[90vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
