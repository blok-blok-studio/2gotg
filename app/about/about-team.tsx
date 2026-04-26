"use client";

import { motion } from "framer-motion";
import { Globe, Award, Heart, MapPin } from "lucide-react";

const credentials = [
  { icon: Globe, label: "Certified Fora Advisor" },
  { icon: Award, label: "Travel for a Purpose: Volunteer Experiences" },
  { icon: Heart, label: "Passionate Traveler" },
  { icon: MapPin, label: "Solo & Group Travel" },
];

export function AboutTeam() {
  return (
    <section id="team" className="py-24 lg:py-32" style={{ background: "linear-gradient(to bottom, #F0F9FF, white 15%, white 85%, #F0F9FF)" }}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-cta uppercase tracking-widest mb-3"
          >
            Meet the Founder
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Your Travel <span className="text-primary">Architect</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-5 gap-10 lg:gap-16 items-center">
            {/* Photo */}
            <div className="md:col-span-2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-80 md:w-full md:h-auto md:aspect-[3/4] rounded-2xl bg-gradient-to-br from-primary/20 to-cta/10 border border-primary/10 flex items-center justify-center overflow-hidden">
                  {/* Placeholder — replace with next/image once photo is in public/images/team/ */}
                  <div className="text-center p-8">
                    <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary to-cta flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-3xl font-[var(--font-heading)]">HH</span>
                    </div>
                    <p className="text-sm text-muted">Photo: place heidie-haynes-2gotg-travel-founder.jpg in public/images/team/</p>
                  </div>
                </div>
                {/* Decorative badge */}
                <div className="absolute -bottom-4 -right-4 bg-cta text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg shadow-cta/25">
                  40+ Years in Travel
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-3">
              <h3 className="font-[var(--font-heading)] text-2xl lg:text-3xl font-bold text-foreground mb-1">
                Heidie Haynes
              </h3>
              <p className="text-primary font-medium mb-6">Founder &amp; Lead Travel Architect</p>

              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Heidie has been exploring the world since she was a little girl. Her first
                  international trip came in 1970, and that sense of wonder never left her.
                  By 1980 she was taking her first solo trip through Europe, and by 1990
                  she had spent years living abroad in Southeast Asia.
                </p>
                <p>
                  When she became a mother, travel became something she shared. Starting in
                  2000, she brought her children along and showed them firsthand what it
                  looks like to move through the world with curiosity and openness.
                </p>
                <p>
                  In 2024, she turned more than 40 years of firsthand experience into
                  2 Girls on the Go. Every destination she books is somewhere she has
                  actually been. Every recommendation comes from a trip she has lived.
                </p>
              </div>

              {/* Credentials */}
              <div className="mt-8 grid grid-cols-2 gap-3">
                {credentials.map((cred) => (
                  <div
                    key={cred.label}
                    className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/10"
                  >
                    <cred.icon className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm font-medium text-foreground">{cred.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
