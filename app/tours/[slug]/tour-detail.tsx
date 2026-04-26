"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Clock,
  DollarSign,
  ArrowRight,
  Calendar,
  Star,
  Sun,
  Moon,
  Coffee,
  Utensils,
  Hotel,
  Camera,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ShareLinks } from "@/components/shared/share-links";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface TimeBlock {
  time: string;
  activity: string;
  icon: "sun" | "coffee" | "utensils" | "camera" | "moon" | "hotel";
}

interface DayItinerary {
  day: number;
  title: string;
  location: string;
  morning: TimeBlock[];
  afternoon: TimeBlock[];
  evening: TimeBlock[];
  hotel: string;
}

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
  itinerary: DayItinerary[];
  startDates: string[];
}

const iconMap = {
  sun: Sun,
  coffee: Coffee,
  utensils: Utensils,
  camera: Camera,
  moon: Moon,
  hotel: Hotel,
};

/* ------------------------------------------------------------------ */
/*  Tour Detail Component                                              */
/* ------------------------------------------------------------------ */

export function TourDetail({ tour }: { tour: TourData }) {
  const [openDay, setOpenDay] = useState(0);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] max-h-[600px] gradient-mesh">
        <Image
          src={tour.image}
          alt={`${tour.name} — ${tour.destination}`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-7xl w-full px-5 sm:px-8 lg:px-6 pb-12">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  <MapPin className="h-3 w-3" />
                  {tour.destination}
                </span>
                <span className="inline-flex items-center gap-1 bg-cta/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  <Star className="h-3 w-3 fill-current" />
                  {tour.rating}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
                {tour.name}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-white/90 text-sm font-medium">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {tour.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <DollarSign className="h-4 w-4" />
                  From {tour.price} per person
                </span>
              </div>
            </motion.div>
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
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-6">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">
            {/* Main content — 2 cols */}
            <div className="lg:col-span-2 space-y-14">
              {/* Description */}
              <motion.div
              >
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  About This Tour
                </h2>
                <p className="text-muted leading-relaxed text-base lg:text-lg">
                  {tour.description}
                </p>
              </motion.div>

              {/* Visual Calendar */}
              <motion.div
              >
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-primary" />
                  Trip Calendar
                </h2>
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                  {tour.itinerary.map((day) => (
                    <button
                      key={day.day}
                      onClick={() => setOpenDay(day.day - 1)}
                      className={cn(
                        "flex flex-col items-center p-3 rounded-xl border transition-all duration-200 cursor-pointer",
                        openDay === day.day - 1
                          ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                          : "bg-white border-border hover:border-primary/30 hover:shadow-md"
                      )}
                    >
                      <span className="text-[10px] font-semibold uppercase tracking-wider opacity-70 mb-0.5">
                        Day
                      </span>
                      <span className="text-lg font-bold">{day.day}</span>
                      <span
                        className={cn(
                          "text-[10px] mt-1 text-center leading-tight",
                          openDay === day.day - 1
                            ? "text-white/80"
                            : "text-muted"
                        )}
                      >
                        {day.location}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Day-by-Day Itinerary */}
              <motion.div
              >
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                  Day-by-Day Itinerary
                </h2>
                <div className="space-y-3">
                  {tour.itinerary.map((day, idx) => (
                    <DayAccordion
                      key={day.day}
                      day={day}
                      isOpen={openDay === idx}
                      onToggle={() =>
                        setOpenDay(openDay === idx ? -1 : idx)
                      }
                    />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar — 1 col */}
            <div className="space-y-6">
              {/* Sticky booking card */}
              <div className="lg:sticky lg:top-28">
                <motion.div
                  className="bg-white rounded-2xl border border-border p-6 shadow-lg shadow-primary/5"
                >
                  <div className="text-center mb-6">
                    <p className="text-sm text-muted mb-1">Starting from</p>
                    <p className="text-3xl font-bold text-foreground">
                      {tour.price}
                    </p>
                    <p className="text-sm text-muted">per person</p>
                  </div>

                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-cta text-white font-semibold text-sm hover:bg-cta-hover transition-colors duration-200 mb-3 cursor-pointer"
                  >
                    Book This Tour
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <button
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-primary/5 text-primary font-semibold text-sm hover:bg-primary/10 transition-colors duration-200 cursor-pointer border border-primary/20"
                    aria-label="Add to Google Calendar (coming soon)"
                  >
                    <Calendar className="h-4 w-4" />
                    Add to Google Calendar
                  </button>
                  <p className="text-[10px] text-muted text-center mt-2">
                    Calendar integration coming soon
                  </p>

                  {/* Next departure dates */}
                  {tour.startDates.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-border">
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
                        Upcoming Departures
                      </p>
                      <div className="space-y-2">
                        {tour.startDates.map((date) => (
                          <div
                            key={date}
                            className="flex items-center gap-2 text-sm text-muted"
                          >
                            <Calendar className="h-3.5 w-3.5 text-primary" />
                            {date}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* What's included */}
                <motion.div
                  className="bg-white rounded-2xl border border-border p-6 mt-6"
                >
                  <h3 className="text-lg font-semibold mb-4">
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-2.5">
                    {tour.included.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Share */}
                <motion.div
                  className="bg-white rounded-2xl border border-border p-6 mt-6"
                >
                  <h3 className="text-lg font-semibold mb-4">
                    Share This Tour
                  </h3>
                  <ShareLinks
                    url={`https://2girlsonthego.com/tours/${tour.slug}`}
                    title={`${tour.name} — 2GoTG Travel`}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Day Accordion                                                      */
/* ------------------------------------------------------------------ */

function DayAccordion({
  day,
  isOpen,
  onToggle,
}: {
  day: DayItinerary;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border overflow-hidden transition-all duration-300",
        isOpen
          ? "border-primary/30 shadow-md shadow-primary/5 bg-white"
          : "border-border bg-white hover:border-primary/20"
      )}
    >
      {/* Header */}
      <button
        onClick={onToggle}
        className="flex items-center gap-4 w-full p-5 text-left cursor-pointer"
        aria-expanded={isOpen}
      >
        <div
          className={cn(
            "h-10 w-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 transition-colors duration-200",
            isOpen
              ? "bg-primary text-white"
              : "bg-primary/10 text-primary"
          )}
        >
          {day.day}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground text-sm sm:text-base truncate">
            {day.title}
          </h3>
          <p className="text-xs text-muted flex items-center gap-1 mt-0.5">
            <MapPin className="h-3 w-3" />
            {day.location}
          </p>
        </div>
        <ArrowRight
          className={cn(
            "h-4 w-4 text-muted transition-transform duration-300 shrink-0",
            isOpen ? "rotate-90" : ""
          )}
        />
      </button>

      {/* Expanded content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 space-y-4">
              {/* Morning */}
              <TimeSection
                label="Morning"
                icon={<Sun className="h-3.5 w-3.5 text-amber-500" />}
                blocks={day.morning}
              />
              {/* Afternoon */}
              <TimeSection
                label="Afternoon"
                icon={<Camera className="h-3.5 w-3.5 text-primary" />}
                blocks={day.afternoon}
              />
              {/* Evening */}
              <TimeSection
                label="Evening"
                icon={<Moon className="h-3.5 w-3.5 text-indigo-400" />}
                blocks={day.evening}
              />
              {/* Hotel */}
              <div className="flex items-center gap-2 pt-3 border-t border-border text-sm">
                <Hotel className="h-4 w-4 text-primary" />
                <span className="text-muted">Overnight at</span>
                <span className="font-semibold text-foreground">
                  {day.hotel}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Time Section                                                       */
/* ------------------------------------------------------------------ */

function TimeSection({
  label,
  icon,
  blocks,
}: {
  label: string;
  icon: React.ReactNode;
  blocks: TimeBlock[];
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <span className="text-xs font-semibold uppercase tracking-wider text-muted">
          {label}
        </span>
      </div>
      <div className="ml-5 space-y-1.5">
        {blocks.map((block) => {
          const Icon = iconMap[block.icon];
          return (
            <div
              key={`${block.time}-${block.activity}`}
              className="flex items-start gap-3 text-sm"
            >
              <span className="text-xs text-muted font-medium w-16 shrink-0 pt-0.5">
                {block.time}
              </span>
              <Icon className="h-3.5 w-3.5 text-primary/50 mt-0.5 shrink-0" />
              <span className="text-foreground">{block.activity}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
