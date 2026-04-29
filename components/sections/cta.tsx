"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CalendarClock } from "lucide-react";
import { siteConfig } from "@/config/site";

export function CTA() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1120] via-primary-dark to-[#0B1120]" />
      {/* Light-to-dark fade from previous section */}
      <div
        className="absolute inset-x-0 top-0 h-24 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, #F0F9FF 0%, rgba(11, 17, 32, 0) 100%)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cta/8 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8 lg:px-6 text-center">
        <motion.p
          className="text-sm font-semibold text-cta uppercase tracking-widest mb-4"
        >
          Start Your Adventure
        </motion.p>
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
        >
          Ready to Explore
          <br />
          <span className="bg-gradient-to-r from-primary-light to-cta bg-clip-text text-transparent">
            Something Extraordinary?
          </span>
        </motion.h2>
        <motion.p
          className="mt-6 text-base sm:text-lg text-white/60 max-w-2xl mx-auto"
        >
          Tell us your dream destination and travel style. Our expert advisors
          will craft a personalized itinerary you&apos;ll love, no commitment required.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-cta/30 hover:-translate-y-0.5"
          >
            Start Planning Your Trip
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={siteConfig.discoveryCall}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white px-8 py-4 rounded-xl text-base font-medium border border-white/10 transition-all duration-200"
          >
            <CalendarClock className="h-4 w-4" />
            Book a Discovery Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
