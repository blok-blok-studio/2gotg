"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Search, Clock, DollarSign, ArrowRight, Star } from "lucide-react";

const regions = ["All", "Europe", "United States"];

const allDestinations = [
  // Europe
  {
    name: "Sicily, Italy",
    region: "Europe",
    duration: "8 Days",
    price: "$2,899",
    rating: 4.9,
    tag: "Editor's Choice",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80",
    description: "Ancient ruins, volcanic landscapes, and the finest Mediterranean cuisine on Italy's largest island.",
  },
  {
    name: "Santorini, Greece",
    region: "Europe",
    duration: "7 Days",
    price: "$3,199",
    rating: 4.9,
    tag: "Romantic",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80",
    description: "Iconic white-washed villages, breathtaking sunsets, and crystal-clear Aegean waters.",
  },
  {
    name: "Barcelona, Spain",
    region: "Europe",
    duration: "6 Days",
    price: "$2,499",
    tag: "Cultural",
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80",
    description: "Gaudi's masterpieces, vibrant tapas scene, and Mediterranean beaches in one unforgettable city.",
  },
  {
    name: "Paris, France",
    region: "Europe",
    duration: "7 Days",
    price: "$3,499",
    tag: "Classic",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    description: "The City of Light — world-class art, iconic landmarks, and cuisine that defines fine dining.",
  },
  {
    name: "Amalfi Coast, Italy",
    region: "Europe",
    duration: "8 Days",
    price: "$3,299",
    rating: 4.8,
    tag: "Luxury",
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=800&q=80",
    description: "Cliffside villages, azure waters, and the finest Mediterranean cuisine along the Italian Riviera.",
  },
  {
    name: "London, England",
    region: "Europe",
    duration: "6 Days",
    price: "$2,799",
    tag: "Iconic",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    description: "Royal palaces, world-class theater, historic pubs, and centuries of culture at every corner.",
  },
  // United States
  {
    name: "Nashville, Tennessee",
    region: "United States",
    duration: "5 Days",
    price: "$1,499",
    rating: 4.8,
    tag: "Trending",
    image: "https://images.unsplash.com/photo-1505672678657-cc7037095e60?w=800&q=80",
    description: "Live music on Broadway, world-famous hot chicken, and Southern charm in Music City.",
  },
  {
    name: "New York City",
    region: "United States",
    duration: "6 Days",
    price: "$2,299",
    tag: "Iconic",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
    description: "The city that never sleeps — Broadway, Central Park, world-class dining, and endless energy.",
  },
  {
    name: "Miami, Florida",
    region: "United States",
    duration: "5 Days",
    price: "$1,799",
    tag: "Beach",
    image: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800&q=80",
    description: "Art Deco architecture, pristine beaches, vibrant nightlife, and Latin-infused culture.",
  },
  {
    name: "Savannah, Georgia",
    region: "United States",
    duration: "4 Days",
    price: "$1,199",
    tag: "Charming",
    image: "https://images.unsplash.com/photo-1546874177-9e664107314e?w=800&q=80",
    description: "Moss-draped squares, antebellum architecture, and the warmest Southern hospitality.",
  },
  {
    name: "Charleston, South Carolina",
    region: "United States",
    duration: "4 Days",
    price: "$1,399",
    rating: 4.9,
    tag: "Top Rated",
    image: "https://images.unsplash.com/photo-1569974507005-6dc61f97fb5c?w=800&q=80",
    description: "Cobblestone streets, pastel row houses, and award-winning Lowcountry cuisine.",
  },
  {
    name: "Hawaii",
    region: "United States",
    duration: "7 Days",
    price: "$2,799",
    tag: "Paradise",
    image: "https://images.unsplash.com/photo-1542259009477-d625272157b7?w=800&q=80",
    description: "Volcanic beaches, lush rainforests, and aloha spirit across the most beautiful islands on Earth.",
  },
];

export function DestinationsContent() {
  const [activeRegion, setActiveRegion] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    return allDestinations.filter((dest) => {
      const matchesRegion = activeRegion === "All" || dest.region === activeRegion;
      const matchesSearch =
        searchQuery === "" ||
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.tag.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesRegion && matchesSearch;
    });
  }, [activeRegion, searchQuery]);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 gradient-mesh">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-sm font-semibold text-cta uppercase tracking-widest mb-3">
              Explore the World
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Our <span className="text-primary">Destinations</span>
            </h1>
            <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
              Curated destinations across Europe and the United States. Each with hand-picked
              accommodations, local experiences, and expert-crafted itineraries.
            </p>

            {/* Search bar */}
            <div className="mt-8 max-w-lg mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search destinations..."
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-white text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>

            {/* Region pills */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setActiveRegion(region)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeRegion === region
                      ? "bg-primary text-white shadow-md shadow-primary/20"
                      : "bg-white border border-border text-foreground/70 hover:border-primary/30 hover:text-primary"
                  }`}
                >
                  {region}
                  {region !== "All" && (
                    <span className="ml-1.5 text-xs opacity-60">
                      ({allDestinations.filter((d) => d.region === region).length})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-6">
          {/* Results count */}
          <div className="mb-8 flex items-center justify-between">
            <p className="text-sm text-muted">
              Showing <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
              {filtered.length === 1 ? "destination" : "destinations"}
              {activeRegion !== "All" && (
                <span> in <span className="font-semibold text-foreground">{activeRegion}</span></span>
              )}
              {searchQuery && (
                <span> matching &ldquo;<span className="font-semibold text-foreground">{searchQuery}</span>&rdquo;</span>
              )}
            </p>
            {(activeRegion !== "All" || searchQuery) && (
              <button
                onClick={() => {
                  setActiveRegion("All");
                  setSearchQuery("");
                }}
                className="text-sm text-primary hover:text-primary-dark font-medium transition-colors"
              >
                Clear filters
              </button>
            )}
          </div>

          {/* No results */}
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Search className="h-12 w-12 text-muted/30 mx-auto mb-4" />
              <h3 className="font-[var(--font-heading)] text-xl font-semibold text-foreground mb-2">
                No destinations found
              </h3>
              <p className="text-muted mb-6">
                Try adjusting your search or filter to find what you&apos;re looking for.
              </p>
              <button
                onClick={() => {
                  setActiveRegion("All");
                  setSearchQuery("");
                }}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
              >
                View All Destinations
              </button>
            </motion.div>
          )}

          {/* Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((dest) => (
                <motion.div
                  key={dest.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ y: -6, rotate: 0.5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={`/contact?destination=${encodeURIComponent(dest.name)}`}
                    className="group block bg-white rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 "
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={dest.image}
                        alt={`${dest.name} travel destination — ${dest.description}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="inline-flex items-center bg-white/90 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full text-foreground">
                          {dest.tag}
                        </span>
                        {dest.rating && (
                          <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm text-xs font-semibold px-2.5 py-1 rounded-full text-foreground">
                            <Star className="h-3 w-3 fill-cta text-cta" />
                            {dest.rating}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-xs text-muted mb-1">{dest.region}</p>
                      <h3 className="font-[var(--font-heading)] text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        {dest.name}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed mb-4">
                        {dest.description}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-4 text-sm text-muted">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {dest.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign className="h-3.5 w-3.5" />
                            From {dest.price}
                          </span>
                        </div>
                        <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-all duration-200" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
