"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Compass,
  Heart,
  Mountain,
  Landmark,
  Users,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const experiences = [
  {
    icon: Heart,
    title: "Luxury Getaways",
    description: "Five-star resorts, private villas, and first-class experiences for those who appreciate the finer things.",
    color: "from-rose-500/15 to-pink-500/5",
    iconColor: "text-rose-500",
  },
  {
    icon: Mountain,
    title: "Adventure Travel",
    description: "Trek mountain ranges, dive coral reefs, and explore uncharted territories with expert guides.",
    color: "from-emerald-500/15 to-green-500/5",
    iconColor: "text-emerald-600",
  },
  {
    icon: Landmark,
    title: "Cultural Immersion",
    description: "Live like a local — cooking classes, artisan workshops, and authentic experiences off the tourist trail.",
    color: "from-amber-500/15 to-orange-500/5",
    iconColor: "text-amber-600",
  },
  {
    icon: Compass,
    title: "Honeymoon Packages",
    description: "Romantic escapes designed for newlyweds — from overwater bungalows to Tuscan countryside retreats.",
    color: "from-primary/15 to-primary-light/5",
    iconColor: "text-primary",
  },
  {
    icon: Users,
    title: "Group Tours",
    description: "Small-group adventures led by knowledgeable guides. Make friends, share stories, split the cost.",
    color: "from-violet-500/15 to-purple-500/5",
    iconColor: "text-violet-600",
  },
  {
    icon: Briefcase,
    title: "Corporate Retreats",
    description: "Team-building escapes that blend productivity with relaxation. Strategy sessions by the beach, anyone?",
    color: "from-slate-500/15 to-gray-500/5",
    iconColor: "text-slate-600",
  },
];

export function Experiences() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "linear-gradient(to bottom, #F0F9FF, white 20%, white 80%, #F0F9FF)" }}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-cta uppercase tracking-widest mb-3"
          >
            Travel Your Way
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Experiences for <span className="text-primary">Every Traveler</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-muted"
          >
            Whether you&apos;re chasing thrills or seeking serenity, we have the perfect
            travel experience waiting for you.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href="/experiences"
                className="group block p-8 rounded-2xl border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
              >
                <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center mb-5`}>
                  <exp.icon className={`h-7 w-7 ${exp.iconColor}`} />
                </div>
                <h3 className="font-[var(--font-heading)] text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {exp.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {exp.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-2 group-hover:translate-x-0">
                  Learn More <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
