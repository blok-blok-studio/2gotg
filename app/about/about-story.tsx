"use client";

import { motion } from "framer-motion";
import { Calendar, Plane, Globe, Users, Briefcase, Heart, MapPin, Zap } from "lucide-react";

const milestones = [
  { year: "1970", title: "First Trip Abroad", description: "First international trip with family.", icon: Plane },
  { year: "1980", title: "First Solo Summer in Europe", description: "Heidie's lifelong love of independent travel begins.", icon: Calendar },
  { year: "1990", title: "Home from Southeast Asia", description: "Returned from living abroad in Southeast Asia.", icon: Globe },
  { year: "2000", title: "Travel With the Kids", description: "Introduced her children to traveling at home and abroad.", icon: Users },
  { year: "2024", title: "2 Girls on the Go", description: "Turned a lifelong passion for travel into a business.", icon: Briefcase },
];

const funFacts = [
  { label: "Favorite Place", value: "The beautiful beaches of Italy", icon: Heart },
  { label: "Most Exotic Place", value: "India", icon: MapPin },
  { label: "Craziest Adventure", value: "White-water rafting in Nepal", icon: Zap },
];

export function AboutStory() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "linear-gradient(to bottom, #F0F9FF, white 15%, white 85%, #F0F9FF)" }}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Story */}
          <motion.div
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

            {/* Fun facts */}
            <div className="mt-8 grid grid-cols-1 gap-3">
              {funFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10"
                >
                  <fact.icon className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-cta uppercase tracking-wider">{fact.label}</p>
                    <p className="text-sm font-medium text-foreground">{fact.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            className="space-y-4"
          >
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
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
