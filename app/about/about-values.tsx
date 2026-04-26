"use client";

import { motion } from "framer-motion";
import { Heart, Shield, Sparkles, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion Driven",
    description: "We recommend places we have been, restaurants we have eaten at, and experiences we have actually lived. Travel is not just what we do. It is who we are.",
  },
  {
    icon: Sparkles,
    title: "Bespoke First",
    description: "We design from scratch to match your unique preferences, pace, and budget. Every itinerary is built around you, not a template.",
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    description: "Clear pricing, honest recommendations, and full travel protection. We earn trust through action, not promises.",
  },
  {
    icon: Users,
    title: "Community Impact",
    description: "Our goal is to work with local businesses and ensure our travels leave a positive impact on the community we visit.",
  },
];

export function AboutValues() {
  return (
    <section className="py-24 lg:py-32 gradient-mesh">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-cta uppercase tracking-widest mb-3"
          >
            What Drives Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Our <span className="text-primary">Values</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-border hover:border-primary/20 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <v.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-[var(--font-heading)] text-xl font-semibold text-foreground mb-3">
                {v.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
