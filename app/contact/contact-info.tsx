"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Globe, Shield } from "lucide-react";
import { siteConfig } from "@/config/site";

const info = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: [siteConfig.contact.address],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: [siteConfig.contact.phone, "Mon-Fri 9am-7pm EST"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: [siteConfig.contact.email, "We respond within 24 hours"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Monday - Friday: 9:00 AM - 7:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"],
  },
];

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-6"
    >
      <div className="p-8 rounded-2xl bg-gradient-to-br from-primary-dark to-[#0B1120] text-white">
        <h3 className="font-[var(--font-heading)] text-xl font-semibold mb-6">
          Contact Information
        </h3>
        <div className="space-y-6">
          {info.map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                <item.icon className="h-5 w-5 text-primary-light" />
              </div>
              <div>
                <p className="font-medium text-white text-sm">{item.title}</p>
                {item.lines.map((line) => (
                  <p key={line} className="text-sm text-white/60">{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust signals */}
      <div className="p-6 rounded-2xl border border-border bg-background">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-foreground">Why Trust 2GoTG?</h3>
        </div>
        <ul className="space-y-3 text-sm text-muted">
          <li className="flex items-start gap-2">
            <Globe className="h-4 w-4 text-primary shrink-0 mt-0.5" />
            IATA Accredited Travel Agency
          </li>
          <li className="flex items-start gap-2">
            <Shield className="h-4 w-4 text-primary shrink-0 mt-0.5" />
            ASTA Verified Member
          </li>
          <li className="flex items-start gap-2">
            <Shield className="h-4 w-4 text-primary shrink-0 mt-0.5" />
            Comprehensive Travel Insurance Partner
          </li>
          <li className="flex items-start gap-2">
            <Shield className="h-4 w-4 text-primary shrink-0 mt-0.5" />
            100% Secure Payment Processing
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
