import Link from "next/link";
import { Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center gradient-mesh px-6">
      <div className="text-center max-w-md">
        <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <Compass className="h-10 w-10 text-primary" />
        </div>
        <h1 className="font-[var(--font-heading)] text-6xl font-bold text-foreground mb-4">
          404
        </h1>
        <h2 className="font-[var(--font-heading)] text-2xl font-semibold text-foreground mb-3">
          Lost in Transit
        </h2>
        <p className="text-muted mb-8">
          Looks like this destination doesn&apos;t exist on our map.
          Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-cta hover:bg-cta-hover text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-cta/25"
          >
            Back to Home
          </Link>
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 bg-white border border-border px-6 py-3 rounded-xl font-medium text-foreground hover:bg-primary/5 transition-all duration-200"
          >
            Browse Destinations
          </Link>
        </div>
      </div>
    </div>
  );
}
