"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, Star, MapPin, Users } from "lucide-react";

const stats = [
  { value: "50+", label: "Countries", icon: MapPin },
  { value: "15K+", label: "Happy Travelers", icon: Users },
  { value: "4.9", label: "Rating", icon: Star },
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
                Award-Winning Travel Agency
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[2.5rem] lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight"
            >
              Discover the
              <br />
              <span className="bg-gradient-to-r from-primary via-primary-light to-cta bg-clip-text text-transparent">
                World&apos;s Best
              </span>
              <br />
              Destinations
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg md:text-xl text-muted max-w-md lg:max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              From exotic international escapes to hidden domestic gems,
              we craft personalized journeys that create lifelong memories.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col lg:flex-row lg:flex-wrap items-stretch lg:items-center justify-center lg:justify-start gap-3 lg:gap-4 max-w-sm mx-auto lg:mx-0 lg:max-w-none"
            >
              <Link
                href="/destinations"
                className="inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-cta/25 hover:-translate-y-0.5"
              >
                Explore Destinations
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                className="inline-flex items-center justify-center gap-2 bg-white/80 hover:bg-white border border-border px-6 py-4 rounded-xl text-base font-medium text-foreground transition-all duration-200 hover:shadow-lg"
              >
                <span className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Play className="h-3.5 w-3.5 text-primary ml-0.5" />
                </span>
                Watch Our Story
              </button>
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
                <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/10">
                  <div className="text-center p-6">
                    <MapPin className="h-10 w-10 text-primary mx-auto mb-2" />
                    <p className="font-[var(--font-heading)] text-lg font-semibold text-foreground">Santorini</p>
                    <p className="text-sm text-muted">Greece</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square bg-gradient-to-br from-cta/15 to-cta/5 flex items-center justify-center border border-cta/10">
                  <div className="text-center p-6">
                    <MapPin className="h-10 w-10 text-cta mx-auto mb-2" />
                    <p className="font-[var(--font-heading)] text-lg font-semibold text-foreground">Kyoto</p>
                    <p className="text-sm text-muted">Japan</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden aspect-square bg-gradient-to-br from-primary-light/15 to-primary-light/5 flex items-center justify-center border border-primary-light/10">
                  <div className="text-center p-6">
                    <MapPin className="h-10 w-10 text-primary-light mx-auto mb-2" />
                    <p className="font-[var(--font-heading)] text-lg font-semibold text-foreground">Machu Picchu</p>
                    <p className="text-sm text-muted">Peru</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-gradient-to-br from-primary-dark/20 to-primary-dark/5 flex items-center justify-center border border-primary-dark/10">
                  <div className="text-center p-6">
                    <MapPin className="h-10 w-10 text-primary-dark mx-auto mb-2" />
                    <p className="font-[var(--font-heading)] text-lg font-semibold text-foreground">Yellowstone</p>
                    <p className="text-sm text-muted">United States</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
