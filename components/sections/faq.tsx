"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Are your tours suitable for families?",
    a: "Contact us for personalized recommendations based on your family's needs.",
  },
  {
    q: "Can I book flights through your agency?",
    a: "Yes, we can help you with flight options. If you prefer, you can also book flights independently.",
  },
  {
    q: "Do you plan trips for solo travelers?",
    a: "Absolutely. Solo travel — especially for women — is one of our specialties. We design itineraries that balance independence, safety, and meaningful local connection.",
  },
  {
    q: "How customized are your itineraries?",
    a: "Every trip is built by hand around your interests, pace, and budget. There are no cookie-cutter packages here — each itinerary is reviewed personally by Heidie before it lands in your inbox.",
  },
  {
    q: "What if my plans change after booking?",
    a: "Travel is unpredictable. We work with flexible suppliers wherever possible and walk you through every cancellation, change, or rebooking scenario before you commit.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-20 lg:py-28"
      style={{
        background: "linear-gradient(to bottom, white, #F0F9FF 100%)",
      }}
    >
      <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-6">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-cta uppercase tracking-widest mb-3"
          >
            Everything You Need to Know
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Frequently Asked <span className="text-primary">Questions</span>
          </motion.h2>
        </div>

        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl border border-border bg-white overflow-hidden hover:border-primary/20 transition-colors duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-[var(--font-heading)] text-base sm:text-lg font-semibold text-foreground">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-primary shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm text-muted leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
