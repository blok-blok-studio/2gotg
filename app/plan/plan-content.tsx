"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Globe,
  Check,
  ArrowRight,
  ArrowLeft,
  Download,
  Calendar,
  Mail,
  Users,
  Clock,
  DollarSign,
  Heart,
  Briefcase,
  MapPin,
} from "lucide-react";

/* ---------- Types ---------- */

type BudgetRange = "$1K-$2.5K" | "$2.5K-$5K" | "$5K-$10K" | "$10K+";
type Authority = "yes" | "partner" | "group";
type TripType =
  | "romantic"
  | "family"
  | "solo"
  | "group"
  | "corporate";
type Timeline =
  | "1mo"
  | "1-3mo"
  | "3-6mo"
  | "6mo+"
  | "browsing";

/* ---------- Constants ---------- */

const TOTAL_STEPS = 4;

const budgetOptions: { label: string; value: BudgetRange; icon: string }[] = [
  { label: "$1K, $2.5K", value: "$1K-$2.5K", icon: "$" },
  { label: "$2.5K, $5K", value: "$2.5K-$5K", icon: "$$" },
  { label: "$5K, $10K", value: "$5K-$10K", icon: "$$$" },
  { label: "$10K+", value: "$10K+", icon: "$$$$" },
];

const authorityOptions: { label: string; value: Authority; description: string }[] = [
  { label: "Yes, I am", value: "yes", description: "I make the final call" },
  { label: "Planning with partner", value: "partner", description: "Deciding together" },
  { label: "Group decision", value: "group", description: "Multiple stakeholders" },
];

const tripTypes: { label: string; value: TripType; icon: React.ReactNode }[] = [
  { label: "Romantic Getaway", value: "romantic", icon: <Heart className="h-5 w-5" /> },
  { label: "Family Vacation", value: "family", icon: <Users className="h-5 w-5" /> },
  { label: "Solo Adventure", value: "solo", icon: <MapPin className="h-5 w-5" /> },
  { label: "Group Tour", value: "group", icon: <Globe className="h-5 w-5" /> },
  { label: "Corporate Retreat", value: "corporate", icon: <Briefcase className="h-5 w-5" /> },
];

const timelineOptions: { label: string; value: Timeline; description: string }[] = [
  { label: "Within 1 month", value: "1mo", description: "Ready to go soon" },
  { label: "1, 3 months", value: "1-3mo", description: "Planning ahead" },
  { label: "3, 6 months", value: "3-6mo", description: "Taking my time" },
  { label: "6+ months", value: "6mo+", description: "Long-term planning" },
  { label: "Just browsing", value: "browsing", description: "Exploring options" },
];

const stepLabels = ["Budget", "Authority", "Need", "Timeline"];

/* ---------- Animation Variants ---------- */

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/* ---------- Component ---------- */

export function PlanContent() {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [funnelComplete, setFunnelComplete] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [downloaded, setDownloaded] = useState(false); // tracks if PDF was clicked

  // Form state
  const [budget, setBudget] = useState<BudgetRange | null>(null);
  const [authority, setAuthority] = useState<Authority | null>(null);
  const [tripNeeds, setTripNeeds] = useState<TripType[]>([]);
  const [timeline, setTimeline] = useState<Timeline | null>(null);
  const [email, setEmail] = useState("");

  const canAdvance =
    (currentStep === 1 && budget !== null) ||
    (currentStep === 2 && authority !== null) ||
    (currentStep === 3 && tripNeeds.length > 0) ||
    (currentStep === 4 && timeline !== null);

  function goNext() {
    if (!canAdvance) return;
    if (currentStep < TOTAL_STEPS) {
      setDirection(1);
      setCurrentStep((s) => s + 1);
    } else {
      setFunnelComplete(true);
    }
  }

  function goBack() {
    if (currentStep > 1) {
      setDirection(-1);
      setCurrentStep((s) => s - 1);
    }
  }

  function toggleTripType(type: TripType) {
    setTripNeeds((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  }

  function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setEmailSubmitted(true);
    }
  }

  function handleDownload() {
    setDownloaded(true);
  }

  return (
    <>
      {/* --- Hero --- */}
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 gradient-mesh">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-6">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-sm font-semibold text-cta uppercase tracking-widest mb-3">
              Free Travel Planning Guide
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Plan Your <span className="text-primary">Dream Trip</span>
            </h1>
            <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
              Answer a few quick questions and we&apos;ll send you a personalized
              travel planning guide, completely free. No commitments, just
              inspiration tailored to you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- BANT Funnel / Post-funnel --- */}
      <section
        className="py-16 lg:py-24"
        style={{
          background: "linear-gradient(to bottom, #F0F9FF, white)",
        }}
      >
        <div className="mx-auto max-w-2xl px-5 sm:px-8 lg:px-6">
          {!funnelComplete ? (
            <>
              {/* Progress indicator */}
              <div className="mb-10">
                <div className="flex items-center justify-between mb-3">
                  {stepLabels.map((label, i) => {
                    const stepNum = i + 1;
                    const isActive = stepNum === currentStep;
                    const isComplete = stepNum < currentStep;
                    return (
                      <div
                        key={label}
                        className="flex flex-col items-center flex-1"
                      >
                        <div
                          className={cn(
                            "w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300",
                            isComplete
                              ? "bg-primary text-white"
                              : isActive
                                ? "bg-cta text-white shadow-lg shadow-cta/25"
                                : "bg-border/60 text-muted"
                          )}
                        >
                          {isComplete ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            stepNum
                          )}
                        </div>
                        <span
                          className={cn(
                            "mt-2 text-xs font-medium transition-colors duration-300 hidden sm:block",
                            isActive
                              ? "text-foreground"
                              : isComplete
                                ? "text-primary"
                                : "text-muted"
                          )}
                        >
                          {label}
                        </span>
                      </div>
                    );
                  })}
                </div>
                {/* Progress bar */}
                <div className="h-1 bg-border/40 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    initial={false}
                    animate={{
                      width: `${((currentStep - 1) / (TOTAL_STEPS - 1)) * 100}%`,
                    }}
                  />
                </div>
              </div>

              {/* Step content */}
              <div className="relative min-h-[360px]">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentStep}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  >
                    {currentStep === 1 && (
                      <StepBudget
                        selected={budget}
                        onSelect={setBudget}
                      />
                    )}
                    {currentStep === 2 && (
                      <StepAuthority
                        selected={authority}
                        onSelect={setAuthority}
                      />
                    )}
                    {currentStep === 3 && (
                      <StepNeed
                        selected={tripNeeds}
                        onToggle={toggleTripType}
                      />
                    )}
                    {currentStep === 4 && (
                      <StepTimeline
                        selected={timeline}
                        onSelect={setTimeline}
                      />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center justify-between mt-8">
                <button
                  type="button"
                  onClick={goBack}
                  className={cn(
                    "inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                    currentStep === 1
                      ? "opacity-0 pointer-events-none"
                      : "text-muted hover:text-foreground hover:bg-border/30"
                  )}
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  disabled={!canAdvance}
                  className={cn(
                    "inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold transition-all duration-200",
                    canAdvance
                      ? "bg-cta hover:bg-cta-hover text-white shadow-lg shadow-cta/25 hover:shadow-xl hover:shadow-cta/30"
                      : "bg-border/50 text-muted cursor-not-allowed"
                  )}
                >
                  {currentStep === TOTAL_STEPS ? "Get My Guide" : "Continue"}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </>
          ) : !emailSubmitted ? (
            /* --- Email Capture --- */
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h2 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-bold mb-3">
                Get Your Free Travel Guide
              </h2>
              <p className="text-muted max-w-md mx-auto mb-8">
                We&apos;ve tailored a travel planning guide based on your
                preferences. Enter your email and we&apos;ll send it right over.
              </p>
              <form
                onSubmit={handleEmailSubmit}
                className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="flex-1 px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-cta/25 whitespace-nowrap"
                >
                  <Mail className="h-4 w-4" />
                  Send Guide
                </button>
              </form>
              <p className="text-xs text-muted mt-4">
                No spam, ever. Unsubscribe anytime.
              </p>
            </motion.div>
          ) : (
            /* --- Download + Schedule Section (combined) --- */
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              {/* Download */}
              <div className="text-center mb-12">
                <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mx-auto mb-6">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-bold mb-3">
                  Your Guide Is Ready
                </h2>
                <p className="text-muted max-w-md mx-auto mb-8">
                  We&apos;ve also sent a copy to <strong className="text-foreground">{email}</strong>.
                  Download your personalized travel planning guide below.
                </p>
                <button
                  type="button"
                  onClick={handleDownload}
                  className="inline-flex items-center justify-center gap-3 bg-cta hover:bg-cta-hover text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-cta/25"
                >
                  <Download className="h-5 w-5" />
                  Download Travel Guide (PDF)
                </button>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-4 my-10">
                <div className="flex-1 h-px bg-border/40" />
                <span className="text-sm text-muted font-medium">Ready to take the next step?</span>
                <div className="flex-1 h-px bg-border/40" />
              </div>

              {/* Schedule a Call */}
              <div className="text-center mb-8">
                <div className="w-14 h-14 rounded-2xl bg-cta/10 flex items-center justify-center mx-auto mb-5">
                  <Calendar className="h-7 w-7 text-cta" />
                </div>
                <h3 className="font-[var(--font-heading)] text-xl sm:text-2xl font-bold mb-2">
                  Book a Free Consultation
                </h3>
                <p className="text-sm text-muted max-w-md mx-auto">
                  Schedule a 30-minute call with Heidie to build a custom itinerary
                  based on your answers.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-surface overflow-hidden shadow-lg">
                <iframe
                  title="Google Calendar Booking Widget"
                  className="w-full"
                  style={{ height: 450, border: "none" }}
                  sandbox="allow-scripts allow-popups allow-forms allow-same-origin"
                  referrerPolicy="strict-origin-when-cross-origin"
                  loading="lazy"
                  srcDoc={`
                    <div style="
                      display:flex;
                      align-items:center;
                      justify-content:center;
                      height:100%;
                      font-family:'Jost',sans-serif;
                      color:#64748B;
                      background:#FAFBFC;
                      text-align:center;
                      padding:2rem;
                    ">
                      <div>
                        <svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='none' stroke='#3FA9DD' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' style='margin:0 auto 1rem;display:block;'><rect x='3' y='4' width='18' height='18' rx='2' ry='2'/><line x1='16' y1='2' x2='16' y2='6'/><line x1='8' y1='2' x2='8' y2='6'/><line x1='3' y1='10' x2='21' y2='10'/></svg>
                        <p style="font-size:1.125rem;font-weight:600;color:#0C4A6E;margin-bottom:0.5rem;">Google Calendar Booking Widget</p>
                        <p style="font-size:0.875rem;">Replace this iframe src with your Google Calendar appointment scheduling URL.</p>
                      </div>
                    </div>
                  `}
                />
              </div>
            </motion.div>
          )}
        </div>
      </section>

    </>
  );
}

/* ========== Step Sub-Components ========== */

function StepBudget({
  selected,
  onSelect,
}: {
  selected: BudgetRange | null;
  onSelect: (v: BudgetRange) => void;
}) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-2">
        <DollarSign className="h-6 w-6 text-primary" />
        <h2 className="font-[var(--font-heading)] text-xl sm:text-2xl font-bold">
          What&apos;s your budget range?
        </h2>
      </div>
      <p className="text-sm text-muted mb-6">
        This helps us recommend destinations and experiences that fit your
        comfort level.
      </p>
      <div className="grid grid-cols-2 gap-3">
        {budgetOptions.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onSelect(opt.value)}
            className={cn(
              "relative flex flex-col items-center gap-1.5 p-5 rounded-xl border-2 transition-all duration-200 hover:shadow-md",
              selected === opt.value
                ? "border-primary bg-primary/5 shadow-md shadow-primary/10"
                : "border-border/60 hover:border-primary/30"
            )}
          >
            {selected === opt.value && (
              <div className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                <Check className="h-3 w-3 text-white" />
              </div>
            )}
            <span className="text-lg font-bold text-foreground">
              {opt.icon}
            </span>
            <span className="text-sm font-medium text-foreground">
              {opt.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function StepAuthority({
  selected,
  onSelect,
}: {
  selected: Authority | null;
  onSelect: (v: Authority) => void;
}) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-2">
        <Users className="h-6 w-6 text-primary" />
        <h2 className="font-[var(--font-heading)] text-xl sm:text-2xl font-bold">
          Are you the decision maker?
        </h2>
      </div>
      <p className="text-sm text-muted mb-6">
        Understanding the decision process helps us tailor our recommendations
        and follow-up.
      </p>
      <div className="flex flex-col gap-3">
        {authorityOptions.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onSelect(opt.value)}
            className={cn(
              "relative flex items-center gap-4 p-5 rounded-xl border-2 text-left transition-all duration-200 hover:shadow-md",
              selected === opt.value
                ? "border-primary bg-primary/5 shadow-md shadow-primary/10"
                : "border-border/60 hover:border-primary/30"
            )}
          >
            <div
              className={cn(
                "w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors duration-200",
                selected === opt.value
                  ? "border-primary bg-primary"
                  : "border-muted"
              )}
            >
              {selected === opt.value && (
                <Check className="h-3 w-3 text-white" />
              )}
            </div>
            <div>
              <span className="block text-sm font-semibold text-foreground">
                {opt.label}
              </span>
              <span className="block text-xs text-muted mt-0.5">
                {opt.description}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function StepNeed({
  selected,
  onToggle,
}: {
  selected: TripType[];
  onToggle: (v: TripType) => void;
}) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-2">
        <Globe className="h-6 w-6 text-primary" />
        <h2 className="font-[var(--font-heading)] text-xl sm:text-2xl font-bold">
          What type of trip?
        </h2>
      </div>
      <p className="text-sm text-muted mb-6">
        Select all that apply. We&apos;ll use this to match you with the right
        destinations.
      </p>
      <div className="flex flex-col gap-3">
        {tripTypes.map((opt) => {
          const isSelected = selected.includes(opt.value);
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onToggle(opt.value)}
              className={cn(
                "relative flex items-center gap-4 p-5 rounded-xl border-2 text-left transition-all duration-200 hover:shadow-md",
                isSelected
                  ? "border-primary bg-primary/5 shadow-md shadow-primary/10"
                  : "border-border/60 hover:border-primary/30"
              )}
            >
              <div
                className={cn(
                  "w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-colors duration-200",
                  isSelected
                    ? "border-primary bg-primary"
                    : "border-muted"
                )}
              >
                {isSelected && <Check className="h-3 w-3 text-white" />}
              </div>
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "transition-colors duration-200",
                    isSelected ? "text-primary" : "text-muted"
                  )}
                >
                  {opt.icon}
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {opt.label}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function StepTimeline({
  selected,
  onSelect,
}: {
  selected: Timeline | null;
  onSelect: (v: Timeline) => void;
}) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-2">
        <Clock className="h-6 w-6 text-primary" />
        <h2 className="font-[var(--font-heading)] text-xl sm:text-2xl font-bold">
          When are you looking to travel?
        </h2>
      </div>
      <p className="text-sm text-muted mb-6">
        No pressure, even if you&apos;re just browsing, we&apos;ll send
        inspiration that matches your pace.
      </p>
      <div className="flex flex-col gap-3">
        {timelineOptions.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onSelect(opt.value)}
            className={cn(
              "relative flex items-center gap-4 p-5 rounded-xl border-2 text-left transition-all duration-200 hover:shadow-md",
              selected === opt.value
                ? "border-primary bg-primary/5 shadow-md shadow-primary/10"
                : "border-border/60 hover:border-primary/30"
            )}
          >
            <div
              className={cn(
                "w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors duration-200",
                selected === opt.value
                  ? "border-primary bg-primary"
                  : "border-muted"
              )}
            >
              {selected === opt.value && (
                <Check className="h-3 w-3 text-white" />
              )}
            </div>
            <div>
              <span className="block text-sm font-semibold text-foreground">
                {opt.label}
              </span>
              <span className="block text-xs text-muted mt-0.5">
                {opt.description}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
