"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, MapPin, Calendar } from "lucide-react";

const stats = [
  { value: "40+", label: "Years Traveling", icon: Calendar },
  { value: "Solo & Group", label: "Trip Styles", icon: MapPin },
  { value: "5.0", label: "Client Rating", icon: Star },
];

const heroPhotos = [
  {
    src: "/photos/italy/syracuse-cathedral-baroque-facade-ortigia.jpg",
    alt: "Baroque facade of the Syracuse Cathedral in Ortigia, Sicily",
    caption: "Ortigia",
    region: "Sicily",
    aspect: "3/4",
  },
  {
    src: "/photos/italy/trevi-fountain-rome-italy.jpg",
    alt: "Trevi Fountain in Rome at golden hour",
    caption: "Rome",
    region: "Italy",
    aspect: "1/1",
  },
  {
    src: "/photos/italy/mount-etna-twin-peaks-from-catania.jpg",
    alt: "Mount Etna's twin peaks seen from Catania, Sicily",
    caption: "Mount Etna",
    region: "Sicily",
    aspect: "1/1",
  },
  {
    src: "/photos/italy/tuscan-hilltop-terrace-valley-view.jpg",
    alt: "Hilltop terrace overlooking the Tuscan valley",
    caption: "Tuscany",
    region: "Italy",
    aspect: "3/4",
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-mesh noise-overlay">
      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-[15%] w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-[10%] w-96 h-96 bg-cta/8 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-6 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm text-primary font-medium mb-6">
                <span className="h-1.5 w-1.5 bg-primary rounded-full animate-pulse" />
                Owned &amp; Operated by Heidie Haynes
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[2.5rem] lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight"
            >
              Travel is a
              <br />
              <span className="bg-gradient-to-r from-primary via-primary-light to-cta bg-clip-text text-transparent">
                Mindset
              </span>
              <br />
              Not a Package
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg md:text-xl text-muted max-w-md lg:max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Custom international and domestic itineraries built on more than 40 years
              of personal travel experience. From a weekend close to home to a faraway
              exotic land, we make travel accessible — no matter the budget.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col lg:flex-row lg:flex-wrap items-stretch lg:items-center justify-center lg:justify-start gap-3 lg:gap-4 max-w-sm mx-auto lg:mx-0 lg:max-w-none"
            >
              <Link
                href="/#package-tours"
                className="inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-cta/25 hover:-translate-y-0.5"
              >
                Browse Tours
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/80 hover:bg-white border border-border px-6 py-4 rounded-xl text-base font-medium text-foreground transition-all duration-200 hover:shadow-lg"
              >
                Plan a Custom Trip
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-12 grid grid-cols-3 gap-4 sm:flex sm:items-center sm:justify-center lg:justify-start sm:gap-8 lg:gap-10"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-2 sm:gap-3">
                  <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <stat.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-[11px] sm:text-xs text-muted">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Image mosaic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                {[heroPhotos[0], heroPhotos[1]].map((photo) => (
                  <div
                    key={photo.src}
                    className={`relative rounded-2xl overflow-hidden group ${
                      photo.aspect === "3/4" ? "aspect-[3/4]" : "aspect-square"
                    }`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 0vw, 25vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-[var(--font-heading)] text-lg font-semibold">{photo.caption}</p>
                      <p className="text-sm text-white/80">{photo.region}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-4 pt-8">
                {[heroPhotos[2], heroPhotos[3]].map((photo) => (
                  <div
                    key={photo.src}
                    className={`relative rounded-2xl overflow-hidden group ${
                      photo.aspect === "3/4" ? "aspect-[3/4]" : "aspect-square"
                    }`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 0vw, 25vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-[var(--font-heading)] text-lg font-semibold">{photo.caption}</p>
                      <p className="text-sm text-white/80">{photo.region}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
