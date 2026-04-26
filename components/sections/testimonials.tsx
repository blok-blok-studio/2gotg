"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah & James Mitchell",
    trip: "Bali Honeymoon, 2024",
    rating: 5,
    text: "2GoTG turned our honeymoon into an absolute fairy tale. From the private villa in Ubud to the sunset dinner on the beach in Seminyak, every detail was perfect. They even arranged a surprise traditional dance performance. We will never book travel any other way.",
    avatar: "SM",
  },
  {
    name: "David Chen",
    trip: "Japan Cultural Tour, 2024",
    rating: 5,
    text: "As a solo traveler, I was nervous about navigating Japan alone. My 2GoTG advisor set me up with local guides who showed me hidden shrines, secret ramen spots, and even got me into a private tea ceremony. Worth every penny.",
    avatar: "DC",
  },
  {
    name: "The Rodriguez Family",
    trip: "Grand Canyon Adventure, 2024",
    rating: 5,
    text: "Traveling with three kids ages 6 through 12 can be chaos. 2GoTG planned an itinerary that kept everyone engaged, from mule rides on the rim to stargazing programs. They even handled the dietary restrictions without us having to ask twice.",
    avatar: "RF",
  },
  {
    name: "Doug Lowery",
    trip: "India, 2024",
    rating: 5,
    text: "It was a great experience working with your travel agency from beginning to end. You found excellent rates for our trip and secured aisle seats for all of us, which made a big difference on the long flights. You were always available to answer any questions we had, making the entire process seamless and stress free. I would highly recommend your services.",
    avatar: "DL",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "linear-gradient(to bottom, #F0F9FF, white 15%, white 85%, #F0F9FF)" }}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-cta uppercase tracking-widest mb-3"
          >
            Traveler Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Traveler Stories <span className="text-primary">&amp; Reviews</span>
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-8 rounded-2xl border border-border bg-background hover:border-primary/20 transition-all duration-300"
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

        {/* Social proof bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 text-center"
        >
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-foreground">4.9/5</p>
            <p className="text-xs text-muted mt-1">Google Reviews</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-foreground">15,000+</p>
            <p className="text-xs text-muted mt-1">Happy Travelers</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-foreground">98%</p>
            <p className="text-xs text-muted mt-1">Rebooking Rate</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-foreground">40+ Years</p>
            <p className="text-xs text-muted mt-1">of Travel Experience</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
