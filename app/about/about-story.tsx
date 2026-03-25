"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Award, TrendingUp } from "lucide-react";

const milestones = [
  { year: "2010", title: "Founded", description: "Started with a passion for travel and a commitment to personal service.", icon: Calendar },
  { year: "2014", title: "IATA Accredited", description: "Earned international accreditation, expanding our global network.", icon: Award },
  { year: "2018", title: "50+ Countries", description: "Reached partnerships in over 50 countries across six continents.", icon: MapPin },
  { year: "2024", title: "15,000+ Travelers", description: "Crossed 15,000 happy travelers with a 98% rebooking rate.", icon: TrendingUp },
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
              Since 2010
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Building Dreams,<br />
              <span className="text-primary">One Trip at a Time</span>
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                2GoTG Travel was born from a simple belief: travel should be
                transformative, not transactional. Our founders — seasoned travelers
                themselves — were frustrated by generic package tours that treated
                every traveler the same.
              </p>
              <p>
                So they built something different. A travel agency where every
                itinerary is crafted by hand, every recommendation comes from
                first-hand experience, and every traveler is treated like family.
              </p>
              <p>
                Today, we serve travelers across the globe with a team of 30+
                dedicated travel architects, local partnerships in 50+ countries,
                and an unwavering commitment to creating journeys that matter.
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
