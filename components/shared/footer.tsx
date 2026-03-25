import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Shield,
  CreditCard,
} from "lucide-react";
import { siteConfig } from "@/config/site";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

const footerLinks = {
  destinations: [
    { label: "Sicily, Italy", href: "/destinations" },
    { label: "Santorini, Greece", href: "/destinations" },
    { label: "Paris, France", href: "/destinations" },
    { label: "Nashville, TN", href: "/destinations" },
    { label: "Charleston, SC", href: "/destinations" },
    { label: "New York City", href: "/destinations" },
  ],
  experiences: [
    { label: "Luxury Getaways", href: "/experiences#luxury" },
    { label: "Adventure Travel", href: "/experiences#adventure" },
    { label: "Cultural Immersion", href: "/experiences#cultural" },
    { label: "Honeymoon Packages", href: "/experiences#honeymoon" },
    { label: "Group Tours", href: "/experiences#group" },
    { label: "Corporate Retreats", href: "/experiences#corporate" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Testimonials", href: "/about#testimonials" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
    { label: "Contact", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: InstagramIcon, href: siteConfig.social.instagram, label: "Instagram" },
  { icon: FacebookIcon, href: siteConfig.social.facebook, label: "Facebook" },
  { icon: TwitterIcon, href: siteConfig.social.twitter, label: "Twitter" },
  { icon: YoutubeIcon, href: siteConfig.social.youtube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-[#0B1120] text-white/80">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-cta flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                <span className="text-white font-[var(--font-heading)] font-bold text-lg">
                  2G
                </span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-[var(--font-heading)] font-bold text-xl text-white tracking-tight">
                  2GoTG
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-medium">
                  Travel
                </span>
              </div>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Crafting extraordinary travel experiences since 2010. From pristine
              beaches to mountain peaks, we turn your dream destinations into
              reality with expert planning and personal care.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-2 text-white/60">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                {siteConfig.contact.address}
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                {siteConfig.contact.phone}
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                {siteConfig.contact.email}
              </div>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-[var(--font-heading)] font-semibold text-white mb-4">
              Destinations
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.destinations.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-cta transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <h3 className="font-[var(--font-heading)] font-semibold text-white mb-4">
              Experiences
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.experiences.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-cta transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-[var(--font-heading)] font-semibold text-white mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-cta transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-white/40">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span>ASTA Verified</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span>IATA Accredited</span>
          </div>
          <div className="flex items-center gap-2">
            <CreditCard className="h-4 w-4" />
            <span>Secure Payments</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span>Travel Insurance Partner</span>
          </div>
        </div>

        {/* Social + copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-white/40 hover:text-cta transition-colors duration-200"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <Link href="/privacy" className="hover:text-white/60 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white/60 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
