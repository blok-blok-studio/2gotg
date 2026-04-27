"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Send, Check, AlertCircle, Loader2 } from "lucide-react";

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

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);

  function toggleStyle(style: string) {
    setSelectedStyles((prev) =>
      prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style],
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    setErrorMsg(null);

    const formData = new FormData(form);
    const payload = {
      firstName: String(formData.get("firstName") || ""),
      lastName: String(formData.get("lastName") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      destination: String(formData.get("destination") || ""),
      travelers: String(formData.get("travelers") || ""),
      budget: String(formData.get("budget") || ""),
      message: String(formData.get("message") || ""),
      travelStyle: selectedStyles,
    };

    let res: Response;
    try {
      res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      setStatus("error");
      setErrorMsg("Could not reach the server. Check your connection and try again.");
      return;
    }

    let data: { ok?: boolean; error?: string } = {};
    try {
      data = await res.json();
    } catch {
      // Non-JSON response — fall through and rely on res.ok
    }

    if (!res.ok) {
      setStatus("error");
      setErrorMsg(data.error || "Something went wrong. Please try again.");
      return;
    }

    setStatus("success");
    try {
      form.reset();
    } catch {
      // Form may already be unmounted — ignore
    }
    setSelectedStyles([]);
    router.push("/contact/thank-you");
  }

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
        Fill out the form below and Heidie will personally get back to you
        within 24 hours with a tailored plan.
      </p>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
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
              name="lastName"
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
              name="email"
              type="email"
              required
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
              name="phone"
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
            name="destination"
            type="text"
            placeholder="e.g., Sicily, Macedonia, Berlin, somewhere new..."
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
              name="travelers"
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            >
              <option value="">Select...</option>
              <option value="Solo">Solo</option>
              <option value="Couple">Couple</option>
              <option value="Small Group (3-4)">Small Group (3-4)</option>
              <option value="Medium Group (5-8)">Medium Group (5-8)</option>
              <option value="Large Group (9+)">Large Group (9+)</option>
            </select>
          </div>
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
              Budget Range
            </label>
            <select
              id="budget"
              name="budget"
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            >
              <option value="">Select...</option>
              <option value="$1,000 - $2,500">$1,000 - $2,500</option>
              <option value="$2,500 - $5,000">$2,500 - $5,000</option>
              <option value="$5,000 - $10,000">$5,000 - $10,000</option>
              <option value="$10,000+">$10,000+</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Travel Style
          </label>
          <div className="flex flex-wrap gap-2">
            {travelStyles.map((style) => {
              const checked = selectedStyles.includes(style);
              return (
                <button
                  key={style}
                  type="button"
                  onClick={() => toggleStyle(style)}
                  aria-pressed={checked}
                  className={`inline-flex px-4 py-2 rounded-full text-sm border transition-all duration-200 cursor-pointer ${
                    checked
                      ? "bg-primary text-white border-primary"
                      : "border-border text-muted hover:border-primary/30 hover:text-foreground"
                  }`}
                >
                  {style}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Tell Us More
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Special interests, must-see spots, dietary needs, accessibility requirements..."
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting" || status === "success"}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-cta/25 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : status === "success" ? (
            <>
              <Check className="h-4 w-4" />
              Sent!
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send Request
            </>
          )}
        </button>

        {status === "success" && (
          <div className="flex items-start gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
            <Check className="h-4 w-4 mt-0.5 shrink-0" />
            <span>
              Thanks! Your request is on its way. Heidie will reply within 24 hours.
            </span>
          </div>
        )}

        {status === "error" && (
          <div className="flex items-start gap-2 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900">
            <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
            <span>{errorMsg ?? "Something went wrong. Please try again."}</span>
          </div>
        )}

        <p className="text-xs text-muted">
          We&apos;ll respond within 24 hours to discuss your dream trip and next steps.
        </p>
      </form>
    </motion.div>
  );
}
