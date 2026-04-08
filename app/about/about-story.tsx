"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Award, TrendingUp } from "lucide-react";

const milestones = [
  { year: "1985", title: "First Solo Trip", description: "Heidie's lifelong love affair with international travel begins.", icon: Calendar },
  { year: "2014", title: "IATA Accredited", description: "Earned international accreditation to plan trips worldwide.", icon: Award },
  { year: "2024", title: "Sicily Summer", description: "Personal scouting trip across Rome, Tuscany, Ortigia, Catania and Mt. Etna.", icon: MapPin },
  { year: "2026", title: "ITB Berlin", description: "Featured speaker at the world's largest travel trade show.", icon: TrendingUp },
];

export function AboutStory() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "linear-gradient(to bottom, #F0F9FF, white 15%, white 85%, #F0F9FF)" }}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-cta uppercase tracking-widest mb-3">
              Travel is a Mindset
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Built on 40+ Years<br />
              <span className="text-primary">of Real Travel</span>
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                2 Girls on the Go was born from a simple belief: travel should be
                transformative, not transactional. Heidie has spent more than four
                decades exploring the world — solo, with family, and with groups —
                and now she puts that experience to work for her clients.
              </p>
              <p>
                Every itinerary is crafted by hand. Every recommendation comes from
                first-hand experience. Every traveler is treated like family. There are
                no cookie-cutter packages here — only journeys built around the people
                taking them.
              </p>
              <p>
                Whether it&apos;s a weekend escape close to home or a month abroad on
                another continent, Heidie believes travel should be accessible to
                everyone, no matter the budget.
              </p>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-background hover:border-primary/20 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <m.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-bold text-cta bg-cta/10 px-2 py-0.5 rounded-full">
                      {m.year}
                    </span>
                    <h3 className="font-semibold text-foreground">{m.title}</h3>
                  </div>
                  <p className="text-sm text-muted">{m.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
