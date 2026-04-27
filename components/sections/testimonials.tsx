"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Nancy M.",
    trip: "Colorado",
    rating: 5,
    text: "I've used 2 Girls on the Go for a couple of adventures! Heidie has been very responsive to my initial ideas and is creative in planning memorable experiences. Whether it was a destination trip or a day tour sightseeing, Heidie provided and guided us with a very well planned out and enjoyable trip. I highly recommend using 2 Girls on the Go for your next trip!",
    avatar: "NM",
  },
  {
    name: "Sandra B.",
    trip: "Riviera Maya",
    rating: 5,
    text: "I am writing to share our positive experience with our travel agent during our recent winter getaway. She was incredibly helpful throughout the itinerary and planning process, demonstrating a clear understanding of our preferences and finding us the perfect location while staying within our budget. She also provided valuable guidance on traveling to a foreign country and was readily available by phone to answer questions about our accommodations upon our arrival. Following our return, she even followed up to ensure everything went according to our wishes.",
    avatar: "SB",
  },
  {
    name: "Michelle L.",
    trip: "Houston",
    rating: 5,
    text: "Heidie was an absolute pleasure to work with! She made the experience of hotel scouring pleasant and easy! So much easier going through her than trying to book on my own! Will definitely be using her for all future bookings!",
    avatar: "ML",
  },
  {
    name: "Uncle Doug",
    trip: "India",
    rating: 5,
    text: "I was on the road and needed a reputable hotel immediately. The booking was quick and easy. I appreciated the very timely response. Thank you.",
    avatar: "UD",
  },
];

export function Testimonials() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-24 lg:py-32" style={{ background: "linear-gradient(to bottom, #F0F9FF, white 15%, white 85%, #F0F9FF)" }}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-cta uppercase tracking-widest mb-3">
            Traveler Stories
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Traveler Stories <span className="text-primary">&amp; Reviews</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : {
                      y: -10,
                      scale: 1.025,
                      rotate: i % 2 === 0 ? 0.6 : -0.6,
                      transition: { type: "spring", stiffness: 320, damping: 14 },
                    }
              }
              className="relative p-8 rounded-2xl border border-border bg-background hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-[border-color,box-shadow] duration-300 cursor-default"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/10" />
              <div className="flex items-center gap-4 mb-5">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-semibold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted">{t.trip}</p>
                </div>
              </div>
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-cta text-cta" />
                ))}
              </div>
              <p className="text-sm text-muted leading-relaxed">{t.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Industry stats */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 text-center">
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-foreground">70%</p>
            <p className="text-xs text-muted mt-1.5">of solo travelers are women</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-foreground">$78B+</p>
            <p className="text-xs text-muted mt-1.5">global medical tourism industry</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-foreground">60%+</p>
            <p className="text-xs text-muted mt-1.5">of travelers plan to use a travel advisor</p>
          </div>
        </div>
      </div>
    </section>
  );
}
