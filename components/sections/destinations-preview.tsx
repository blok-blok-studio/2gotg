"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, DollarSign } from "lucide-react";
import { useHoverCapable } from "@/lib/use-hover-capable";

const destinations = [
  {
    name: "Sicily, Italy",
    region: "Europe",
    duration: "8 Days",
    startingPrice: "$2,899",
    description: "Ancient ruins, volcanic landscapes, and the finest Mediterranean cuisine on Italy's largest island.",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80",
    tag: "Editor's Choice",
  },
  {
    name: "Nashville, Tennessee",
    region: "United States",
    duration: "5 Days",
    startingPrice: "$1,499",
    description: "Live music on Broadway, world-famous hot chicken, and Southern charm in Music City.",
    image: "https://images.unsplash.com/photo-1505672678657-cc7037095e60?w=800&q=80",
    tag: "Trending",
  },
  {
    name: "Santorini, Greece",
    region: "Europe",
    duration: "7 Days",
    startingPrice: "$3,199",
    description: "Iconic white-washed villages, breathtaking sunsets, and crystal-clear Aegean waters.",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80",
    tag: "Romantic",
  },
  {
    name: "Charleston, South Carolina",
    region: "United States",
    duration: "4 Days",
    startingPrice: "$1,399",
    description: "Cobblestone streets, pastel row houses, and award-winning Lowcountry cuisine.",
    image: "https://images.unsplash.com/photo-1569974507005-6dc61f97fb5c?w=800&q=80",
    tag: "Top Rated",
  },
  {
    name: "Paris, France",
    region: "Europe",
    duration: "7 Days",
    startingPrice: "$3,499",
    description: "The City of Light — world-class art, iconic landmarks, and cuisine that defines fine dining.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    tag: "Classic",
  },
  {
    name: "New York City",
    region: "United States",
    duration: "6 Days",
    startingPrice: "$2,299",
    description: "The city that never sleeps — Broadway, Central Park, world-class dining, and endless energy.",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
    tag: "Iconic",
  },
];

export function DestinationsPreview() {
  const canHover = useHoverCapable();
  return (
    <section className="py-24 lg:py-32 gradient-mesh relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm font-semibold text-cta uppercase tracking-widest mb-3"
            >
              Trending Destinations
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            >
              Where Will You <span className="text-primary">Go Next?</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200"
            >
              View All Destinations
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              {...(canHover ? { whileHover: { y: -6, rotate: 0.5 } } : {})}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href="/destinations"
                className="group block bg-white rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 "
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={`${dest.name} travel destination — ${dest.description}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center bg-white/90 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full text-foreground">
                      {dest.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-muted mb-2">
                    {dest.region}
                  </div>
                  <h3 className="font-[var(--font-heading)] text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {dest.name}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {dest.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1 text-muted">
                        <Clock className="h-3.5 w-3.5" />
                        {dest.duration}
                      </span>
                      <span className="flex items-center gap-1 text-muted">
                        <DollarSign className="h-3.5 w-3.5" />
                        From {dest.startingPrice}
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-2 group-hover:translate-x-0" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
