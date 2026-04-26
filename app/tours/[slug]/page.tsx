import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TourDetail, type TourData } from "./tour-detail";

/* ------------------------------------------------------------------ */
/*  Tour Data                                                          */
/* ------------------------------------------------------------------ */

const tours: Record<string, TourData> = {
  "sicily-summer": {
    slug: "sicily-summer",
    name: "Sicily Summer",
    destination: "Ortigia, Catania & Mount Etna",
    duration: "8 Days / 7 Nights",
    price: "From $2,899",
    rating: 5.0,
    image: "/photos/italy/syracuse-cathedral-baroque-facade-ortigia.jpg",
    description:
      "A summer escape across eastern Sicily — the baroque jewel of Ortigia, the markets and stone-pine parks of Catania, the lava fields of Mount Etna, and quiet swims in Plemmirio's sea caves. Built from Heidie's own scouting trip, every meal, every market, every sunset is somewhere she has actually been.",
    highlights: [
      "Baroque Ortigia & Piazza del Duomo",
      "Mercato di Ortigia food tour & granita stop",
      "Plemmirio sea cave boat trip",
      "Mount Etna lava-field hike with guide",
      "Hand-painted Sicilian carretto experience in Catania",
      "Sunset aperitivo on the Porto Grande",
    ],
    included: [
      "7 nights in boutique 4-star Sicilian hotels",
      "Daily breakfast + 4 curated dinners",
      "Private airport transfers from Catania",
      "English-speaking local guides",
      "All listed entrance fees & activities",
      "24/7 on-trip concierge support from Heidie",
    ],
    startDates: ["June 6, 2026", "July 4, 2026", "September 12, 2026"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Catania",
        location: "Catania",
        morning: [
          { time: "11:00 AM", activity: "Arrive at Catania Fontanarossa Airport", icon: "sun" },
          { time: "12:30 PM", activity: "Private transfer to your boutique hotel in central Catania", icon: "hotel" },
        ],
        afternoon: [
          { time: "2:00 PM", activity: "Welcome lunch with sea bass crudo and Etna Bianco", icon: "utensils" },
          { time: "4:00 PM", activity: "Walking orientation: Piazza del Duomo and the elephant fountain", icon: "camera" },
        ],
        evening: [
          { time: "7:00 PM", activity: "Aperitivo on Via Etnea", icon: "coffee" },
          { time: "8:30 PM", activity: "Welcome dinner at a family-run trattoria", icon: "utensils" },
        ],
        hotel: "Asmundo di Gisira",
      },
      {
        day: 2,
        title: "Catania Markets & Villa Bellini",
        location: "Catania",
        morning: [
          { time: "8:00 AM", activity: "Breakfast at hotel", icon: "coffee" },
          { time: "9:30 AM", activity: "Guided tour of La Pescheria fish market with tastings", icon: "camera" },
        ],
        afternoon: [
          { time: "12:30 PM", activity: "Street food lunch — arancini, pasta alla Norma", icon: "utensils" },
          { time: "2:30 PM", activity: "Stroll Villa Bellini's stone pines and the Bellini monument", icon: "camera" },
        ],
        evening: [
          { time: "5:30 PM", activity: "Free time on Via Etnea for shopping", icon: "sun" },
          { time: "8:00 PM", activity: "Dinner overlooking Piazza Stesicoro", icon: "moon" },
        ],
        hotel: "Asmundo di Gisira",
      },
      {
        day: 3,
        title: "Mount Etna Lava Fields",
        location: "Mount Etna",
        morning: [
          { time: "7:30 AM", activity: "Early breakfast and depart for Mount Etna", icon: "coffee" },
          { time: "9:30 AM", activity: "Guided hike on the Crateri Silvestri lava fields", icon: "camera" },
        ],
        afternoon: [
          { time: "12:30 PM", activity: "Mountain lunch at Rifugio Sapienza", icon: "utensils" },
          { time: "2:30 PM", activity: "Etna winery vineyard walk and tasting", icon: "coffee" },
        ],
        evening: [
          { time: "6:00 PM", activity: "Return to Catania, free evening", icon: "sun" },
          { time: "8:00 PM", activity: "Dinner on your own — recommendations provided", icon: "moon" },
        ],
        hotel: "Asmundo di Gisira",
      },
      {
        day: 4,
        title: "Onward to Ortigia",
        location: "Ortigia, Syracuse",
        morning: [
          { time: "8:30 AM", activity: "Breakfast and check out of Catania hotel", icon: "coffee" },
          { time: "10:00 AM", activity: "Drive to Syracuse (approx. 1 hr) and check in to Ortigia hotel", icon: "hotel" },
        ],
        afternoon: [
          { time: "12:30 PM", activity: "Lunch at a seafood spot on the Lungomare", icon: "utensils" },
          { time: "2:30 PM", activity: "Guided walking tour: Piazza del Duomo, Fonte Aretusa, Castello Maniace", icon: "camera" },
        ],
        evening: [
          { time: "7:00 PM", activity: "Sunset aperitivo on the Porto Grande", icon: "moon" },
          { time: "9:00 PM", activity: "Dinner at a hidden trattoria", icon: "utensils" },
        ],
        hotel: "Algila Ortigia Charme Hotel",
      },
      {
        day: 5,
        title: "Mercato di Ortigia & Sicilian Cooking",
        location: "Ortigia",
        morning: [
          { time: "8:00 AM", activity: "Sicilian breakfast: granita and brioche col tuppo", icon: "coffee" },
          { time: "9:30 AM", activity: "Guided market tour with Chef Lucia at Mercato di Ortigia", icon: "camera" },
        ],
        afternoon: [
          { time: "11:30 AM", activity: "Hands-on cooking class — pasta alla Norma, caponata, cannoli", icon: "utensils" },
          { time: "1:30 PM", activity: "Enjoy your creations for lunch with paired wines", icon: "utensils" },
        ],
        evening: [
          { time: "6:00 PM", activity: "Free time to explore the alleys of Ortigia", icon: "sun" },
          { time: "8:00 PM", activity: "Live accordion music dinner in a vaulted courtyard", icon: "utensils" },
        ],
        hotel: "Algila Ortigia Charme Hotel",
      },
      {
        day: 6,
        title: "Plemmirio Sea Caves",
        location: "Plemmirio",
        morning: [
          { time: "8:30 AM", activity: "Breakfast at hotel", icon: "coffee" },
          { time: "10:00 AM", activity: "Boat departure to the Plemmirio Marine Reserve", icon: "sun" },
        ],
        afternoon: [
          { time: "11:30 AM", activity: "Snorkeling and swimming in the crystal sea caves", icon: "camera" },
          { time: "1:00 PM", activity: "Lunch on board — fresh tuna, focaccia, and citrus", icon: "utensils" },
        ],
        evening: [
          { time: "5:00 PM", activity: "Return to Ortigia, free time", icon: "sun" },
          { time: "8:30 PM", activity: "Dinner on your own", icon: "moon" },
        ],
        hotel: "Algila Ortigia Charme Hotel",
      },
      {
        day: 7,
        title: "Fontane Bianche & Farewell Night",
        location: "Fontane Bianche / Ortigia",
        morning: [
          { time: "9:00 AM", activity: "Slow morning at the hotel", icon: "coffee" },
          { time: "10:30 AM", activity: "Transfer to Fontane Bianche beach for swimming and sun", icon: "sun" },
        ],
        afternoon: [
          { time: "1:00 PM", activity: "Beachside lunch at a Sicilian lido", icon: "utensils" },
          { time: "3:30 PM", activity: "Free time for shopping in Ortigia", icon: "camera" },
        ],
        evening: [
          { time: "7:30 PM", activity: "Farewell dinner on a candlelit rooftop terrace", icon: "utensils" },
        ],
        hotel: "Algila Ortigia Charme Hotel",
      },
      {
        day: 8,
        title: "Departure",
        location: "Catania",
        morning: [
          { time: "8:00 AM", activity: "Final breakfast at hotel", icon: "coffee" },
          { time: "9:30 AM", activity: "Last-minute stroll along the Lungomare", icon: "camera" },
        ],
        afternoon: [
          { time: "11:00 AM", activity: "Private transfer to Catania Fontanarossa Airport", icon: "sun" },
          { time: "1:00 PM", activity: "Departure — arrivederci, Sicilia!", icon: "sun" },
        ],
        evening: [],
        hotel: "N/A — Departure day",
      },
    ],
  },

  "sicilian-discovery": {
    slug: "sicilian-discovery",
    name: "Sicilian Discovery",
    destination: "Palermo, Agrigento, Taormina",
    duration: "8 Days / 7 Nights",
    price: "From $2,899",
    rating: 4.9,
    image: "/photos/italy/piazza-del-duomo-ortigia-syracuse.jpg",
    description:
      "Sicily's grand tour. Greek temples, baroque cities, Etna wine country, and seven nights of unforgettable Sicilian food and wine.",
    highlights: [
      "Valley of the Temples guided tour",
      "Mt. Etna sunset wine tasting",
      "Hands-on Sicilian cooking class",
      "Boat tour of the Aeolian Islands",
    ],
    included: [
      "7 nights in boutique 4-star hotels",
      "Daily breakfast + 4 curated dinners",
      "Private airport transfers",
      "English-speaking local guides",
      "All entrance fees & activities listed",
      "24/7 on-trip concierge support",
    ],
    startDates: ["May 15, 2026", "June 12, 2026", "September 10, 2026", "October 8, 2026"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Palermo",
        location: "Palermo",
        morning: [
          { time: "10:00 AM", activity: "Arrive at Palermo Falcone Borsellino Airport", icon: "sun" },
          { time: "11:30 AM", activity: "Private transfer and check-in", icon: "hotel" },
        ],
        afternoon: [
          { time: "1:00 PM", activity: "Welcome lunch at a classic Palermo trattoria", icon: "utensils" },
          { time: "3:00 PM", activity: "Walking tour of historic Palermo — Quattro Canti and Pretoria Fountain", icon: "camera" },
        ],
        evening: [
          { time: "7:00 PM", activity: "Aperitivo overlooking the harbor", icon: "coffee" },
          { time: "8:30 PM", activity: "Welcome dinner with modern Sicilian tasting menu", icon: "utensils" },
        ],
        hotel: "Grand Hotel Piazza Borsa",
      },
      {
        day: 2,
        title: "Palermo Markets & Monreale",
        location: "Palermo",
        morning: [
          { time: "8:00 AM", activity: "Breakfast at hotel", icon: "coffee" },
          { time: "9:30 AM", activity: "Guided tour of Ballarò and Vucciria markets", icon: "camera" },
        ],
        afternoon: [
          { time: "12:30 PM", activity: "Street food lunch — arancini, panelle, sfincione", icon: "utensils" },
          { time: "2:30 PM", activity: "Day trip to Monreale Cathedral and its golden mosaics", icon: "camera" },
        ],
        evening: [
          { time: "6:00 PM", activity: "Free time on Via Maqueda", icon: "sun" },
          { time: "8:00 PM", activity: "Dinner on your own — recommendations provided", icon: "moon" },
        ],
        hotel: "Grand Hotel Piazza Borsa",
      },
      {
        day: 3,
        title: "Valley of the Temples",
        location: "Agrigento",
        morning: [
          { time: "7:30 AM", activity: "Early breakfast and check out", icon: "coffee" },
          { time: "8:30 AM", activity: "Scenic drive to Agrigento", icon: "sun" },
        ],
        afternoon: [
          { time: "11:00 AM", activity: "Guided tour of the Valley of the Temples", icon: "camera" },
          { time: "1:30 PM", activity: "Lunch with valley views", icon: "utensils" },
          { time: "3:30 PM", activity: "Visit the Kolymbetra Garden", icon: "camera" },
        ],
        evening: [
          { time: "6:00 PM", activity: "Hotel check-in and sunset from the terrace", icon: "moon" },
          { time: "8:00 PM", activity: "Farm-to-table Sicilian dinner", icon: "utensils" },
        ],
        hotel: "Hotel Villa Athena",
      },
      {
        day: 4,
        title: "Onward to Taormina",
        location: "Taormina",
        morning: [
          { time: "8:00 AM", activity: "Breakfast and depart for Taormina", icon: "coffee" },
          { time: "11:00 AM", activity: "Stop in Noto for a baroque walking tour", icon: "camera" },
        ],
        afternoon: [
          { time: "1:30 PM", activity: "Granita and brioche stop", icon: "coffee" },
          { time: "4:00 PM", activity: "Arrive in Taormina, hotel check-in", icon: "hotel" },
        ],
        evening: [
          { time: "7:00 PM", activity: "Sunset from Piazza IX Aprile", icon: "moon" },
          { time: "8:30 PM", activity: "Dinner at a Michelin-starred bay-view restaurant", icon: "utensils" },
        ],
        hotel: "Hotel Villa Belvedere",
      },
      {
        day: 5,
        title: "Mount Etna Wine Country",
        location: "Mount Etna",
        morning: [
          { time: "8:00 AM", activity: "Breakfast at hotel", icon: "coffee" },
          { time: "9:30 AM", activity: "Drive to the northern slopes of Mount Etna", icon: "sun" },
        ],
        afternoon: [
          { time: "11:30 AM", activity: "Vineyard walk with a volcanologist guide", icon: "camera" },
          { time: "1:00 PM", activity: "Etna wine pairing lunch", icon: "utensils" },
        ],
        evening: [
          { time: "5:30 PM", activity: "Return to Taormina", icon: "sun" },
          { time: "8:00 PM", activity: "Dinner on your own", icon: "moon" },
        ],
        hotel: "Hotel Villa Belvedere",
      },
      {
        day: 6,
        title: "Aeolian Islands Boat Day",
        location: "Aeolian Islands",
        morning: [
          { time: "7:30 AM", activity: "Early breakfast and transfer to Giardini Naxos", icon: "coffee" },
          { time: "8:30 AM", activity: "Boat departure for the Aeolian Islands", icon: "sun" },
        ],
        afternoon: [
          { time: "12:30 PM", activity: "Seafood lunch on Lipari", icon: "utensils" },
          { time: "2:30 PM", activity: "Snorkel stop in secluded coves", icon: "sun" },
        ],
        evening: [
          { time: "5:30 PM", activity: "Return to Taormina", icon: "sun" },
          { time: "8:30 PM", activity: "Free dinner in Taormina", icon: "moon" },
        ],
        hotel: "Hotel Villa Belvedere",
      },
      {
        day: 7,
        title: "Taormina at Leisure",
        location: "Taormina",
        morning: [
          { time: "9:00 AM", activity: "Slow breakfast", icon: "coffee" },
          { time: "10:30 AM", activity: "Visit the ancient Greek Theatre of Taormina", icon: "camera" },
        ],
        afternoon: [
          { time: "1:00 PM", activity: "Lunch at Isola Bella", icon: "utensils" },
          { time: "3:00 PM", activity: "Free afternoon", icon: "sun" },
        ],
        evening: [
          { time: "7:30 PM", activity: "Farewell dinner with regional tasting menu", icon: "utensils" },
        ],
        hotel: "Hotel Villa Belvedere",
      },
      {
        day: 8,
        title: "Departure",
        location: "Catania",
        morning: [
          { time: "8:00 AM", activity: "Breakfast at hotel", icon: "coffee" },
          { time: "9:30 AM", activity: "Optional stroll along Corso Umberto", icon: "camera" },
        ],
        afternoon: [
          { time: "11:00 AM", activity: "Private transfer to Catania Fontanarossa Airport", icon: "sun" },
          { time: "1:00 PM", activity: "Departure", icon: "sun" },
        ],
        evening: [],
        hotel: "N/A — Departure day",
      },
    ],
  },

  "macedonia-tour": {
    slug: "macedonia-tour",
    name: "Macedonia Tour",
    destination: "Skopje, Ohrid & Bitola",
    duration: "7 Days / 6 Nights",
    price: "From $1,799",
    rating: 5.0,
    image: "/photos/italy/tuscany-rooftop-cypress-ridge-sunset.jpg",
    description:
      "An off-the-beaten-path journey through North Macedonia. Lake Ohrid's UNESCO old town, the bazaar of Skopje, the wine country of Tikveš, and the wild mountains of Mavrovo — a small-group tour built for curious travelers.",
    highlights: [
      "Lake Ohrid UNESCO old town walk",
      "Skopje bazaar & Stone Bridge tour",
      "Mavrovo National Park day hike",
      "Traditional Macedonian wine tasting",
    ],
    included: [
      "6 nights in boutique hotels and guesthouses",
      "Daily breakfast + 3 traditional dinners",
      "Private transfers throughout",
      "English-speaking local guides",
      "All listed activities and tastings",
      "24/7 on-trip concierge support",
    ],
    startDates: ["May 4, 2026", "June 22, 2026", "September 7, 2026"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Skopje",
        location: "Skopje",
        morning: [{ time: "11:00 AM", activity: "Arrive at Skopje International Airport", icon: "sun" }],
        afternoon: [
          { time: "1:00 PM", activity: "Welcome lunch and hotel check-in", icon: "utensils" },
          { time: "3:00 PM", activity: "Stone Bridge and Macedonia Square walking tour", icon: "camera" },
        ],
        evening: [{ time: "7:00 PM", activity: "Dinner in the Old Bazaar", icon: "utensils" }],
        hotel: "Hotel Solun",
      },
      {
        day: 2,
        title: "Skopje to Ohrid",
        location: "Ohrid",
        morning: [{ time: "9:00 AM", activity: "Drive south to Lake Ohrid", icon: "sun" }],
        afternoon: [
          { time: "12:30 PM", activity: "Lakeside lunch on arrival", icon: "utensils" },
          { time: "2:30 PM", activity: "UNESCO old town walking tour", icon: "camera" },
        ],
        evening: [{ time: "8:00 PM", activity: "Sunset dinner with Ohrid trout", icon: "utensils" }],
        hotel: "Villa Forum Ohrid",
      },
      {
        day: 3,
        title: "Lake Ohrid by Boat",
        location: "Ohrid",
        morning: [
          { time: "9:00 AM", activity: "Boat to the Bay of Bones museum", icon: "camera" },
          { time: "11:00 AM", activity: "Visit Sveti Naum monastery", icon: "camera" },
        ],
        afternoon: [{ time: "1:30 PM", activity: "Lunch at the monastery garden", icon: "utensils" }],
        evening: [{ time: "7:30 PM", activity: "Free dinner in the old town", icon: "moon" }],
        hotel: "Villa Forum Ohrid",
      },
      {
        day: 4,
        title: "Mavrovo National Park",
        location: "Mavrovo",
        morning: [{ time: "8:30 AM", activity: "Drive to Mavrovo and morning hike", icon: "camera" }],
        afternoon: [{ time: "1:00 PM", activity: "Mountain lunch in a traditional village", icon: "utensils" }],
        evening: [{ time: "7:00 PM", activity: "Return to Ohrid for dinner on your own", icon: "moon" }],
        hotel: "Villa Forum Ohrid",
      },
      {
        day: 5,
        title: "Bitola and Heraclea",
        location: "Bitola",
        morning: [{ time: "9:00 AM", activity: "Drive to Bitola, visit Heraclea Roman ruins", icon: "camera" }],
        afternoon: [
          { time: "12:30 PM", activity: "Walking tour of Sirok Sokak", icon: "camera" },
          { time: "2:00 PM", activity: "Lunch at a local kafana", icon: "utensils" },
        ],
        evening: [{ time: "7:00 PM", activity: "Return to Skopje for the night", icon: "moon" }],
        hotel: "Hotel Solun",
      },
      {
        day: 6,
        title: "Tikveš Wine Country",
        location: "Tikveš",
        morning: [{ time: "9:00 AM", activity: "Drive to the Tikveš wine region", icon: "sun" }],
        afternoon: [
          { time: "11:00 AM", activity: "Winery visit and Vranec tasting", icon: "coffee" },
          { time: "1:30 PM", activity: "Wine pairing lunch", icon: "utensils" },
        ],
        evening: [
          { time: "6:30 PM", activity: "Return to Skopje", icon: "sun" },
          { time: "8:30 PM", activity: "Farewell dinner", icon: "utensils" },
        ],
        hotel: "Hotel Solun",
      },
      {
        day: 7,
        title: "Departure",
        location: "Skopje",
        morning: [
          { time: "8:00 AM", activity: "Breakfast and check out", icon: "coffee" },
          { time: "10:00 AM", activity: "Transfer to Skopje Airport", icon: "sun" },
        ],
        afternoon: [{ time: "12:00 PM", activity: "Departure", icon: "sun" }],
        evening: [],
        hotel: "N/A — Departure day",
      },
    ],
  },

  "berlin-adventure": {
    slug: "berlin-adventure",
    name: "Berlin Adventure",
    destination: "Berlin, Germany",
    duration: "6 Days / 5 Nights",
    price: "From $2,199",
    rating: 5.0,
    image: "/photos/italy/ortigia-rooftop-dining-festoon-lights.jpg",
    description:
      "Berlin like a local. Cold War history, world-class museums, the kinetic energy of Kreuzberg street food, and an insider's day at ITB Berlin — the world's largest travel trade show.",
    highlights: [
      "ITB Berlin travel-trade insider visit",
      "Cold War & Berlin Wall walking tour",
      "Museum Island private guide",
      "Kreuzberg street-food crawl",
    ],
    included: [
      "5 nights at a boutique Mitte hotel",
      "Daily breakfast + 2 curated dinners",
      "Private airport transfers",
      "All listed guided experiences",
      "Public transit pass",
      "24/7 on-trip concierge support",
    ],
    startDates: ["March 3, 2026 (ITB Berlin)", "May 18, 2026", "September 14, 2026"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Berlin",
        location: "Berlin",
        morning: [{ time: "11:00 AM", activity: "Arrive at Berlin Brandenburg Airport", icon: "sun" }],
        afternoon: [
          { time: "1:00 PM", activity: "Private transfer and Mitte hotel check-in", icon: "hotel" },
          { time: "3:00 PM", activity: "Orientation walk: Brandenburg Gate and Tiergarten", icon: "camera" },
        ],
        evening: [{ time: "7:30 PM", activity: "Welcome dinner in Mitte", icon: "utensils" }],
        hotel: "Hotel Amano Grand Central",
      },
      {
        day: 2,
        title: "Cold War Berlin",
        location: "Berlin",
        morning: [
          { time: "9:00 AM", activity: "Berlin Wall and Checkpoint Charlie walking tour", icon: "camera" },
          { time: "11:30 AM", activity: "East Side Gallery murals", icon: "camera" },
        ],
        afternoon: [
          { time: "1:00 PM", activity: "Lunch at Markthalle Neun", icon: "utensils" },
          { time: "3:00 PM", activity: "DDR Museum private visit", icon: "camera" },
        ],
        evening: [{ time: "8:00 PM", activity: "Dinner on your own in Friedrichshain", icon: "moon" }],
        hotel: "Hotel Amano Grand Central",
      },
      {
        day: 3,
        title: "Museum Island",
        location: "Berlin",
        morning: [{ time: "9:30 AM", activity: "Private Pergamonmuseum and Neues Museum tour", icon: "camera" }],
        afternoon: [
          { time: "1:00 PM", activity: "Lunch on the Spree", icon: "utensils" },
          { time: "3:00 PM", activity: "Free afternoon for shopping or coffee", icon: "coffee" },
        ],
        evening: [{ time: "7:30 PM", activity: "Dinner with Heidie at a Mitte favorite", icon: "utensils" }],
        hotel: "Hotel Amano Grand Central",
      },
      {
        day: 4,
        title: "ITB Berlin Insider Day",
        location: "Berlin",
        morning: [
          { time: "8:30 AM", activity: "Private transfer to Messe Berlin", icon: "sun" },
          { time: "9:30 AM", activity: "Trade-floor walkthrough with Heidie (ITB date trips only)", icon: "camera" },
        ],
        afternoon: [
          { time: "12:30 PM", activity: "Lunch at the trade-floor restaurant", icon: "utensils" },
          { time: "2:30 PM", activity: "Pavilion visits across continents", icon: "camera" },
        ],
        evening: [{ time: "8:00 PM", activity: "Berlin specialty dinner — schnitzel or modern German", icon: "utensils" }],
        hotel: "Hotel Amano Grand Central",
      },
      {
        day: 5,
        title: "Kreuzberg Street Food & Free Day",
        location: "Berlin",
        morning: [{ time: "10:00 AM", activity: "Kreuzberg street-food walking tour", icon: "utensils" }],
        afternoon: [
          { time: "1:00 PM", activity: "Free afternoon for shopping or museums", icon: "sun" },
          { time: "4:00 PM", activity: "Coffee at a Kreuzberg roastery", icon: "coffee" },
        ],
        evening: [{ time: "7:30 PM", activity: "Farewell dinner overlooking the Spree", icon: "utensils" }],
        hotel: "Hotel Amano Grand Central",
      },
      {
        day: 6,
        title: "Departure",
        location: "Berlin",
        morning: [
          { time: "8:00 AM", activity: "Breakfast and check out", icon: "coffee" },
          { time: "10:00 AM", activity: "Private transfer to Berlin Brandenburg Airport", icon: "sun" },
        ],
        afternoon: [{ time: "12:00 PM", activity: "Departure", icon: "sun" }],
        evening: [],
        hotel: "N/A — Departure day",
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  Next.js Page & Metadata                                            */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  return Object.keys(tours).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tour = tours[slug];
  if (!tour) return { title: "Tour Not Found" };

  return {
    title: `${tour.name} — ${tour.duration}`,
    description: tour.description,
    openGraph: {
      title: `${tour.name} | 2 Girls on the Go`,
      description: tour.description,
      images: [{ url: tour.image, width: 1200, height: 630 }],
    },
  };
}

export default async function TourPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = tours[slug];
  if (!tour) notFound();

  return <TourDetail tour={tour} />;
}
