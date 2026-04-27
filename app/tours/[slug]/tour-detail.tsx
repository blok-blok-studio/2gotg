"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, ArrowRight, XCircle, CheckCircle2 } from "lucide-react";
import { ShareLinks } from "@/components/shared/share-links";

export interface TourData {
  slug: string;
  name: string;
  destination: string;
  duration: string;
  price: string;
  rating: number;
  image: string;
  description: string;
  highlights: string[];
  included: string[];
  notIncluded?: string[];
  flyer?: string;
  flyerAlt?: string;
}

export function TourDetail({ tour }: { tour: TourData }) {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] max-h-[600px]">
        <Image
          src={tour.image}
          alt={`${tour.name}, ${tour.destination}`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-5xl w-full px-5 sm:px-8 lg:px-6 pb-12">
            <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              <MapPin className="h-3 w-3" />
              {tour.destination}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
              {tour.name}
            </h1>
            <span className="flex items-center gap-1.5 text-white/90 text-sm font-medium">
              <Clock className="h-4 w-4" />
              {tour.duration}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section
        className="py-16 lg:py-24"
        style={{
          background:
            "linear-gradient(to bottom, #F0F9FF, white 15%, white 85%, #F0F9FF)",
        }}
      >
        <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-6 space-y-8">
          {/* Tour Flyer */}
          {tour.flyer && (
            <div className="bg-white rounded-2xl border border-border p-4 sm:p-6 shadow-lg shadow-primary/5">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Tour Flyer
              </h2>
              <a
                href={tour.flyer}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative w-full overflow-hidden rounded-xl border border-border hover:border-primary/30 transition-colors cursor-zoom-in"
                aria-label={`View ${tour.name} flyer full size`}
              >
                <Image
                  src={tour.flyer}
                  alt={
                    tour.flyerAlt ??
                    `${tour.name} tour flyer, ${tour.destination}`
                  }
                  width={1200}
                  height={1600}
                  className="w-full h-auto object-contain"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </a>
            </div>
          )}

          {/* Package Includes */}
          <div className="bg-white rounded-2xl border border-border p-6 sm:p-8 shadow-lg shadow-primary/5">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Package Includes
            </h2>
            <ul className="space-y-3">
              {tour.included.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base text-foreground"
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Not Included */}
          {tour.notIncluded && tour.notIncluded.length > 0 && (
            <div className="bg-white rounded-2xl border border-border p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                Not Included
              </h2>
              <ul className="space-y-3">
                {tour.notIncluded.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base text-muted"
                  >
                    <XCircle className="h-5 w-5 text-muted mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Book CTA */}
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-cta text-white font-semibold text-base hover:bg-cta-hover transition-colors duration-200 cursor-pointer"
          >
            Book This Tour
            <ArrowRight className="h-4 w-4" />
          </Link>

          {/* Share */}
          <div className="bg-white rounded-2xl border border-border p-6">
            <h3 className="text-base font-semibold mb-3">Share</h3>
            <ShareLinks
              url={`https://2girlsonthego.com/tours/${tour.slug}`}
              title={`${tour.name}, 2 Girls on the Go`}
            />
          </div>
        </div>
      </section>
    </>
  );
}
