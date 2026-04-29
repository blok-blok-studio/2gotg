import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

const regions = [
  {
    continent: "Europe",
    country: "Italy",
    themedName: "Bella Sicilia",
    anchor: "italy",
  },
  {
    continent: "Europe",
    country: "North Macedonia",
    themedName: "Macedonian Heritage",
    anchor: "north-macedonia",
  },
  {
    continent: "Europe",
    country: "Custom Travel",
    themedName: "Berlin · London · Greece",
    anchor: "custom-travel",
  },
  {
    continent: "North America",
    country: "United States and Canada",
    themedName: "Savannah · Nashville · Napa · Gulf Shores · Calgary",
    anchor: "united-states-and-canada",
  },
];

export function ContinentNav() {
  return (
    <section
      className="py-12 lg:py-16"
      style={{
        background: "linear-gradient(to bottom, white, #F0F9FF)",
      }}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-semibold text-cta uppercase tracking-widest mb-2">
              Choose a Region
            </p>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              Browse by Continent &amp; Country
            </h2>
          </div>
          <Link
            href="#package-tours"
            className="text-sm font-medium text-primary hover:text-primary-dark transition-colors"
          >
            See all tours →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {regions.map((region) => (
            <Link
              key={region.anchor}
              href={`#${region.anchor}`}
              className="group flex items-center gap-4 p-4 rounded-xl border border-border bg-white hover:border-primary/40 hover:shadow-md hover:shadow-primary/5 transition-all duration-200"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-cta">
                  {region.continent}
                </p>
                <p className="font-semibold text-foreground truncate">
                  {region.country}
                </p>
                <p className="text-xs text-muted truncate">
                  {region.themedName}
                </p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
