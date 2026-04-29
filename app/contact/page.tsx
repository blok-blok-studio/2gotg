import type { Metadata } from "next";
import { CalendarClock, ArrowRight } from "lucide-react";
import { ContactHero } from "./contact-hero";
import { ContactForm } from "./contact-form";
import { ContactInfo } from "./contact-info";
import { FAQ } from "@/components/sections/faq";
import { siteConfig } from "@/config/site";
import { faqs } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Contact Heidie",
  description:
    "Contact Heidie at 2 Girls on the Go. Request a personalized itinerary, ask a question, or start planning your next trip today.",
  alternates: { canonical: `${siteConfig.url}/contact` },
  openGraph: {
    title: "Contact Heidie | 2 Girls on the Go",
    description:
      "Contact Heidie at 2 Girls on the Go. Request a personalized itinerary, ask a question, or start planning your next trip today.",
    url: `${siteConfig.url}/contact`,
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ContactHero />
      <section className="py-16 lg:py-24" style={{ background: "linear-gradient(to bottom, #F0F9FF, white)" }}>
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-6">
          {/* Discovery call banner */}
          <a
            href={siteConfig.discoveryCall}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-cta/5 border border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-200"
          >
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
                <CalendarClock className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-semibold text-cta uppercase tracking-widest mb-1">
                  Prefer to talk it through?
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1">
                  Book a 30 minute discovery call with Heidie
                </h3>
                <p className="text-sm text-muted">
                  Pick a time that works for you. No commitment, just a real conversation about your trip.
                </p>
              </div>
            </div>
            <span className="inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 shrink-0 self-start sm:self-center group-hover:shadow-lg group-hover:shadow-cta/25">
              Schedule Now
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </a>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
      <FAQ />
    </>
  );
}
