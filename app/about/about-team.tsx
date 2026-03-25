"use client";

import { motion } from "framer-motion";
import { Globe, Award, Heart, MapPin } from "lucide-react";

const credentials = [
  { icon: Globe, label: "IATA Accredited Agent" },
  { icon: Award, label: "ITB Berlin Speaker 2026" },
  { icon: Heart, label: "Passionate Traveler" },
  { icon: MapPin, label: "30+ Countries Visited" },
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
                  14+ Years in Travel
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-3">
              <h3 className="font-[var(--font-heading)] text-2xl lg:text-3xl font-bold text-foreground mb-1">
                Heidie Haynes
              </h3>
              <p className="text-primary font-medium mb-6">Founder & Lead Travel Architect</p>

              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  With over a decade of experience in the travel industry, Heidie founded 2GoTG Travel
                  with a mission to create deeply personal, transformative travel experiences. She
                  believes that travel should never be one-size-fits-all — every trip should reflect
                  the unique interests, pace, and dreams of the traveler.
                </p>
                <p>
                  From the cobblestone streets of Sicily to the neon-lit Broadway of Nashville,
                  Heidie has personally explored the destinations she recommends. Her first-hand
                  knowledge, industry connections, and genuine passion for travel mean every
                  itinerary comes with insider access you won&apos;t find anywhere else.
                </p>
                <p>
                  As an IATA-accredited agent and featured speaker at ITB Berlin 2026, Heidie
                  brings both professional expertise and an adventurer&apos;s heart to every client relationship.
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
