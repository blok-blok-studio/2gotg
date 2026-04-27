import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Mail, Phone, ArrowRight, Calendar } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Thanks, your request is in",
  description:
    "Your travel request has been sent to Heidie at 2 Girls on the Go. She will reply within 24 hours.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section
      className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 min-h-screen"
      style={{
        background:
          "linear-gradient(to bottom, #F0F9FF, white 20%, white 80%, #F0F9FF)",
      }}
    >
      <div className="mx-auto max-w-2xl px-5 sm:px-8 lg:px-6">
        <div className="bg-white rounded-2xl border border-border p-8 sm:p-12 shadow-xl shadow-primary/5 text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 mb-6">
            <CheckCircle2 className="h-9 w-9 text-emerald-600" />
          </div>

          <p className="text-xs font-semibold text-cta uppercase tracking-widest mb-3">
            Request Received
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Your form has been{" "}
            <span className="text-primary">submitted</span>
          </h1>
          <p className="text-base sm:text-lg text-muted leading-relaxed mb-8">
            Thanks for reaching out. Heidie has your details and will reply
            personally within 24 hours with next steps.
          </p>

          {/* What happens next */}
          <div className="text-left bg-primary/5 border border-primary/10 rounded-xl p-5 sm:p-6 mb-8">
            <p className="text-xs font-semibold text-cta uppercase tracking-widest mb-4">
              What happens next
            </p>
            <ul className="space-y-3 text-sm text-foreground">
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-white text-xs font-bold shrink-0">
                  1
                </span>
                <span>
                  Heidie reviews your request and your travel style.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-white text-xs font-bold shrink-0">
                  2
                </span>
                <span>
                  You receive a personal reply within 24 hours with options or
                  follow up questions.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-white text-xs font-bold shrink-0">
                  3
                </span>
                <span>
                  Once the plan feels right, Heidie books, confirms, and stays
                  with you all the way through your trip.
                </span>
              </li>
            </ul>
          </div>

          {/* Direct contact options */}
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-border text-sm font-medium text-foreground hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
            >
              <Mail className="h-4 w-4 text-primary" />
              {siteConfig.contact.email}
            </a>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-border text-sm font-medium text-foreground hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
            >
              <Phone className="h-4 w-4 text-primary" />
              {siteConfig.contact.phone}
            </a>
          </div>

          {/* Primary action */}
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-cta/25 cursor-pointer"
          >
            Browse More Tours
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Helper for the Bella Sicilia deadline */}
        <div className="mt-6 flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200">
          <Calendar className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
          <p className="text-xs text-amber-800 leading-snug">
            Reminder: the Bella Sicilia tour closes for new sign ups on
            May 15, 2026. If that is the trip you asked about, mention any
            preferred travel dates in your reply so Heidie can hold a spot.
          </p>
        </div>
      </div>
    </section>
  );
}
