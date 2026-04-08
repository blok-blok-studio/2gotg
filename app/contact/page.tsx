import type { Metadata } from "next";
import { ContactHero } from "./contact-hero";
import { ContactForm } from "./contact-form";
import { ContactInfo } from "./contact-info";
import { FAQ } from "@/components/sections/faq";

export const metadata: Metadata = {
  title: "Contact Heidie",
  description:
    "Contact Heidie at 2 Girls on the Go. Request a personalized itinerary, ask a question, or start planning your next trip today.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="py-16 lg:py-24" style={{ background: "linear-gradient(to bottom, #F0F9FF, white 15%, white)" }}>
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-6">
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
