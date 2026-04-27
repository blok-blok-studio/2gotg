"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 gradient-mesh">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-6">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-sm font-semibold text-cta uppercase tracking-widest mb-3">
            Our Story
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Passionate About <span className="text-primary">Travel</span>
          </h1>
          <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
            With more than 40 years of personal travel experience, Heidie helps
            travelers discover remarkable destinations with personal care and
            real know-how.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
