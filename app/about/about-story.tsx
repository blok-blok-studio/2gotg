"use client";

import { motion } from "framer-motion";
import { Plane, Globe, Home, Heart, Sparkles, MapPin, Zap } from "lucide-react";

const milestones = [
  {
    year: "1970",
    title: "First Trip Abroad",
    description: "Her first international trip with family sparked a lifelong love for discovering the world.",
    icon: Plane,
  },
  {
    year: "1980",
    title: "First Solo Trip to Europe",
    description: "A solo summer adventure through Europe set the tone for decades of independent travel.",
    icon: Globe,
  },
  {
    year: "1990",
    title: "Living Abroad",
    description: "Returned from years spent living in Southeast Asia, deepening her appreciation for culture and community.",
    icon: Home,
  },
  {
    year: "2000",
    title: "Sharing the Journey",
    description: "Started introducing her children to travel, both at home and abroad.",
    icon: Heart,
  },
  {
    year: "2024",
    title: "2 Girls on the Go",
    description: "Turned 40 plus years of firsthand travel experience into a business built on genuine care and personal service.",
    icon: Sparkles,
  },
];

const funFacts = [
  { icon: MapPin, label: "Favorite Place", value: "The beautiful beaches of Italy" },
  { icon: Globe, label: "Most Exotic", value: "India" },
  { icon: Zap, label: "Craziest Adventure", value: "White water rafting in Nepal" },
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
              Her Story
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6">
              A Life Built Around<br />
              <span className="text-primary">Travel</span>
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Heidie has been exploring the world since she was a little girl. Her first
                international trip was in 1970, and that sense of wonder never left her.
                She spent summers in Europe, years living abroad in Southeast Asia, and
                more destinations than she can count.
              </p>
              <p>
                By 2000 she was bringing her children along, showing them firsthand what
                it looks like to move through the world with curiosity and openness.
                Travel was never a luxury in her home. It was just what life looked like.
              </p>
              <p>
                In 2024 she turned all of that experience into 2 Girls on the Go. Every
                place she recommends is somewhere she has been. Every trip she plans comes
                from over 40 years of seeing the world for herself.
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
