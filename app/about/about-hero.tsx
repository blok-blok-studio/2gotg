"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 gradient-mesh">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-sm font-semibold text-cta uppercase tracking-widest mb-3">
            Our Story
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Passionate About <span className="text-primary">Travel</span>
          </h1>
          <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
            For over a decade, we&apos;ve helped thousands of travelers discover
            the world&apos;s most remarkable destinations with personalized care and expertise.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
