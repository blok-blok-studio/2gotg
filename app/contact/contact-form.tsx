"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

const travelStyles = [
  "Luxury",
  "Adventure",
  "Cultural",
  "Beach & Relaxation",
  "Honeymoon",
  "Family",
  "Group Tour",
  "Corporate",
];

export function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="font-[var(--font-heading)] text-2xl font-bold text-foreground mb-2">
        Request a Custom Itinerary
      </h2>
      <p className="text-sm text-muted mb-8">
        Fill out the form below and one of our travel architects will get back
        to you within 24 hours with a personalized plan.
      </p>

      <form className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="Your first name"
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Your last name"
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
        </div>

        <div>
          <label htmlFor="destination" className="block text-sm font-medium text-foreground mb-2">
            Dream Destination
          </label>
          <input
            id="destination"
            type="text"
            placeholder="e.g., Bali, Italy, National Parks..."
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="travelers" className="block text-sm font-medium text-foreground mb-2">
              Number of Travelers
            </label>
            <select
              id="travelers"
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            >
              <option value="">Select...</option>
              <option value="1">Solo</option>
              <option value="2">Couple</option>
              <option value="3-4">Small Group (3-4)</option>
              <option value="5-8">Medium Group (5-8)</option>
              <option value="9+">Large Group (9+)</option>
            </select>
          </div>
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
              Budget Range
            </label>
            <select
              id="budget"
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            >
              <option value="">Select...</option>
              <option value="1000-2500">$1,000 - $2,500</option>
              <option value="2500-5000">$2,500 - $5,000</option>
              <option value="5000-10000">$5,000 - $10,000</option>
              <option value="10000+">$10,000+</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Travel Style
          </label>
          <div className="flex flex-wrap gap-2">
            {travelStyles.map((style) => (
              <label key={style} className="group">
                <input type="checkbox" className="sr-only peer" />
                <span className="inline-flex px-4 py-2 rounded-full text-sm border border-border text-muted peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary hover:border-primary/30 hover:text-foreground transition-all duration-200">
                  {style}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Tell Us More
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Special interests, must-see spots, dietary needs, accessibility requirements..."
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-cta/25"
        >
          <Send className="h-4 w-4" />
          Send Request
        </button>

        <p className="text-xs text-muted">
          We&apos;ll respond within 24 hours to discuss your dream trip and next steps.
        </p>
      </form>
    </motion.div>
  );
}
