import {
  Globe,
  Shield,
  Sparkles,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global Network",
    description:
      "Access to destinations worldwide through trusted local partners, exclusive accommodations, and insider knowledge that turns ordinary trips into extraordinary journeys.",
  },
  {
    icon: Sparkles,
    title: "Tailor Made Itineraries",
    description:
      "Every trip is designed around you. We craft experiences that match your pace, interests, and dreams. No cookie cutter packages here.",
  },
  {
    icon: Shield,
    title: "Travel Protection",
    description:
      "Comprehensive travel insurance available, 24/7 emergency assistance, and flexible cancellation policies so you can book with complete peace of mind.",
  },
  {
    icon: Clock,
    title: "Last Minute Deals",
    description:
      "Spontaneous travelers, we've got you. Assistance with last minute deals that make impulse adventures affordable.",
  },
];

export function Features() {
  return (
    <section className="py-24 lg:py-32 relative" style={{ background: "linear-gradient(to bottom, white, #F0F9FF)" }}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <p className="text-sm font-semibold text-cta uppercase tracking-widest mb-3">
            Why Travel With Us
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Your Journey,{" "}
            <span className="text-primary">Perfected</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            We go beyond booking flights and hotels. We architect experiences
            that stay with you long after you return home.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-2xl border border-border bg-white hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-5 group-hover:from-primary/20 group-hover:to-primary/10 transition-colors duration-300">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-[var(--font-heading)] text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
