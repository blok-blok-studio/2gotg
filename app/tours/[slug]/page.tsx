import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TourDetail, type TourData } from "./tour-detail";

/* ------------------------------------------------------------------ */
/*  Tour Data                                                          */
/* ------------------------------------------------------------------ */

const tours: Record<string, TourData> = {
  "sicilian-discovery": {
    slug: "sicilian-discovery",
    name: "Sicilian Discovery",
    destination: "Sicily, Italy",
    duration: "8 Days / 7 Nights",
    price: "$2,899",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1400&q=80",
    description:
      "Immerse yourself in Sicily's ancient past, volcanic drama, and unmatched cuisine. From the Greek ruins of Agrigento to the slopes of Mt. Etna, from vibrant Palermo markets to the baroque jewels of the Val di Noto, this eight-day journey reveals an island of contrasts. Every meal, every wine, every sunset is curated to turn your trip into a story you will tell for years.",
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
    startDates: [
      "May 15, 2026",
      "June 12, 2026",
      "September 10, 2026",
      "October 8, 2026",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Palermo",
        location: "Palermo",
        morning: [
          {
            time: "10:00 AM",
            activity: "Arrive at Palermo Falcone Borsellino Airport",
            icon: "sun",
          },
          {
            time: "11:30 AM",
            activity: "Private transfer to hotel, check-in & refresh",
            icon: "hotel",
          },
        ],
        afternoon: [
          {
            time: "1:00 PM",
            activity: "Welcome lunch at Trattoria ai Cascinari",
            icon: "utensils",
          },
          {
            time: "3:00 PM",
            activity: "Guided walking tour of historic Palermo — Quattro Canti, Pretoria Fountain, Palatine Chapel",
            icon: "camera",
          },
        ],
        evening: [
          {
            time: "6:30 PM",
            activity: "Aperitivo at Enoteca Butticè overlooking the harbor",
            icon: "coffee",
          },
          {
            time: "8:00 PM",
            activity: "Welcome dinner at Ristorante Gagini — modern Sicilian tasting menu",
            icon: "utensils",
          },
        ],
        hotel: "Grand Hotel Piazza Borsa",
      },
      {
        day: 2,
        title: "Palermo Markets & Monreale",
        location: "Palermo",
        morning: [
          {
            time: "8:00 AM",
            activity: "Breakfast at hotel",
            icon: "coffee",
          },
          {
            time: "9:30 AM",
            activity: "Guided tour of Ballarò & Vucciria street markets with tastings",
            icon: "camera",
          },
        ],
        afternoon: [
          {
            time: "12:30 PM",
            activity: "Street food lunch — arancini, panelle, sfincione at Mercato di Ballarò",
            icon: "utensils",
          },
          {
            time: "2:30 PM",
            activity: "Day trip to Monreale Cathedral — golden Byzantine mosaics",
            icon: "camera",
          },
        ],
        evening: [
          {
            time: "5:30 PM",
            activity: "Free time for shopping along Via Maqueda",
            icon: "sun",
          },
          {
            time: "8:00 PM",
            activity: "Dinner on your own — recommendations provided",
            icon: "moon",
          },
        ],
        hotel: "Grand Hotel Piazza Borsa",
      },
      {
        day: 3,
        title: "Valley of the Temples",
        location: "Agrigento",
        morning: [
          {
            time: "7:30 AM",
            activity: "Early breakfast & check out of Palermo hotel",
            icon: "coffee",
          },
          {
            time: "8:30 AM",
            activity: "Scenic drive to Agrigento (approx. 2.5 hrs)",
            icon: "sun",
          },
        ],
        afternoon: [
          {
            time: "11:00 AM",
            activity: "Guided tour of the Valley of the Temples — Temple of Concordia, Temple of Juno",
            icon: "camera",
          },
          {
            time: "1:30 PM",
            activity: "Lunch at Ristorante Terracotta with valley views",
            icon: "utensils",
          },
          {
            time: "3:30 PM",
            activity: "Visit Kolymbetra Garden — ancient irrigation marvel",
            icon: "camera",
          },
        ],
        evening: [
          {
            time: "6:00 PM",
            activity: "Check in to hotel, sunset from the terrace",
            icon: "moon",
          },
          {
            time: "8:00 PM",
            activity: "Dinner at Osteria Expanificio — farm-to-table Sicilian",
            icon: "utensils",
          },
        ],
        hotel: "Hotel Villa Athena",
      },
      {
        day: 4,
        title: "Baroque Splendor of Noto & Siracusa",
        location: "Siracusa",
        morning: [
          {
            time: "8:00 AM",
            activity: "Breakfast & depart for Noto",
            icon: "coffee",
          },
          {
            time: "10:30 AM",
            activity: "Walking tour of Noto — UNESCO baroque masterpiece, Cattedrale di Noto",
            icon: "camera",
          },
        ],
        afternoon: [
          {
            time: "12:30 PM",
            activity: "Granita & brioche at Caffè Sicilia",
            icon: "coffee",
          },
          {
            time: "2:00 PM",
            activity: "Drive to Siracusa, check in & explore Ortigia island",
            icon: "camera",
          },
        ],
        evening: [
          {
            time: "6:00 PM",
            activity: "Passeggiata along the Lungomare di Ortigia",
            icon: "sun",
          },
          {
            time: "8:00 PM",
            activity: "Seafood dinner at Ristorante Don Camillo",
            icon: "utensils",
          },
        ],
        hotel: "Algila Ortigia Charme Hotel",
      },
      {
        day: 5,
        title: "Sicilian Cooking Class & Wine",
        location: "Siracusa",
        morning: [
          {
            time: "8:30 AM",
            activity: "Breakfast at hotel",
            icon: "coffee",
          },
          {
            time: "10:00 AM",
            activity: "Visit the Ortigia market & select ingredients with Chef Lucia",
            icon: "camera",
          },
        ],
        afternoon: [
          {
            time: "11:30 AM",
            activity: "Hands-on cooking class — pasta alla norma, caponata, cannoli",
            icon: "utensils",
          },
          {
            time: "1:30 PM",
            activity: "Enjoy your creations for lunch with local wine pairing",
            icon: "utensils",
          },
          {
            time: "3:30 PM",
            activity: "Free afternoon to explore Greek Theatre & Ear of Dionysius",
            icon: "camera",
          },
        ],
        evening: [
          {
            time: "7:00 PM",
            activity: "Wine tasting at Cantina Ferreri — Nero d'Avola, Grillo, Cerasuolo",
            icon: "coffee",
          },
          {
            time: "9:00 PM",
            activity: "Light dinner on your own in Ortigia",
            icon: "moon",
          },
        ],
        hotel: "Algila Ortigia Charme Hotel",
      },
      {
        day: 6,
        title: "Mt. Etna Adventure",
        location: "Taormina",
        morning: [
          {
            time: "7:00 AM",
            activity: "Early breakfast & depart for Mt. Etna",
            icon: "coffee",
          },
          {
            time: "9:30 AM",
            activity: "Guided hike on Mt. Etna's lava fields with volcanologist",
            icon: "camera",
          },
        ],
        afternoon: [
          {
            time: "12:30 PM",
            activity: "Lunch at Rifugio Sapienza — mountain cuisine with panoramic views",
            icon: "utensils",
          },
          {
            time: "2:30 PM",
            activity: "Visit Etna winery on the northern slopes — vineyard walk & tasting",
            icon: "coffee",
          },
        ],
        evening: [
          {
            time: "5:30 PM",
            activity: "Continue to Taormina, check in & sunset views from Piazza IX Aprile",
            icon: "moon",
          },
          {
            time: "8:30 PM",
            activity: "Dinner at La Capinera — Michelin-starred seafood overlooking the bay",
            icon: "utensils",
          },
        ],
        hotel: "Hotel Villa Belvedere",
      },
      {
        day: 7,
        title: "Taormina & Aeolian Islands",
        location: "Taormina",
        morning: [
          {
            time: "7:30 AM",
            activity: "Early breakfast at hotel",
            icon: "coffee",
          },
          {
            time: "8:30 AM",
            activity: "Boat tour departure from Giardini Naxos to the Aeolian Islands",
            icon: "sun",
          },
          {
            time: "10:30 AM",
            activity: "Explore Lipari — pastel harbor town, pumice beaches, Aeolian museum",
            icon: "camera",
          },
        ],
        afternoon: [
          {
            time: "12:30 PM",
            activity: "Seafood lunch at Ristorante Filippino on Lipari",
            icon: "utensils",
          },
          {
            time: "2:30 PM",
            activity: "Swimming stop at secluded coves, snorkeling in crystal waters",
            icon: "sun",
          },
          {
            time: "4:30 PM",
            activity: "Return boat to Taormina, free time at Isola Bella beach",
            icon: "camera",
          },
        ],
        evening: [
          {
            time: "7:00 PM",
            activity: "Visit the ancient Greek Theatre of Taormina",
            icon: "camera",
          },
          {
            time: "8:30 PM",
            activity: "Farewell dinner at Osteria RossoDiVino — regional tasting menu with Etna wines",
            icon: "utensils",
          },
        ],
        hotel: "Hotel Villa Belvedere",
      },
      {
        day: 8,
        title: "Departure",
        location: "Catania",
        morning: [
          {
            time: "8:00 AM",
            activity: "Final breakfast at hotel",
            icon: "coffee",
          },
          {
            time: "9:30 AM",
            activity: "Optional stroll through Taormina's Corso Umberto for last-minute shopping",
            icon: "camera",
          },
        ],
        afternoon: [
          {
            time: "11:00 AM",
            activity: "Private transfer to Catania Fontanarossa Airport",
            icon: "sun",
          },
          {
            time: "1:00 PM",
            activity: "Departure — arrivederci, Sicilia!",
            icon: "sun",
          },
        ],
        evening: [],
        hotel: "N/A — Departure day",
      },
    ],
  },

  "paris-romance": {
    slug: "paris-romance",
    name: "Paris Romance",
    destination: "Paris, France",
    duration: "7 Days / 6 Nights",
    price: "$3,499",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1400&q=80",
    description:
      "Fall in love with Paris all over again. From private museum tours to sunset Seine cruises, this seven-day journey captures the romance, art, and gastronomy of the City of Light.",
    highlights: [
      "Private Louvre after-hours tour",
      "Seine River dinner cruise",
      "Champagne day trip to Reims",
      "Montmartre art walk with local guide",
    ],
    included: [
      "6 nights at boutique Left Bank hotel",
      "Daily breakfast + 3 curated dinners",
      "Private airport transfers",
      "Skip-the-line museum passes",
      "All guided experiences listed",
      "24/7 on-trip concierge support",
    ],
    startDates: ["April 20, 2026", "June 5, 2026", "September 15, 2026"],
    itinerary: [
      { day: 1, title: "Arrival in Paris", location: "Paris", morning: [{ time: "11:00 AM", activity: "Arrive at Charles de Gaulle Airport", icon: "sun" }], afternoon: [{ time: "2:00 PM", activity: "Check in & explore Saint-Germain-des-Prés", icon: "camera" }], evening: [{ time: "8:00 PM", activity: "Welcome dinner at a classic Left Bank brasserie", icon: "utensils" }], hotel: "Hotel Verneuil" },
      { day: 2, title: "Louvre & Tuileries", location: "Paris", morning: [{ time: "9:00 AM", activity: "Private guided Louvre tour", icon: "camera" }], afternoon: [{ time: "1:00 PM", activity: "Lunch & Tuileries Garden stroll", icon: "utensils" }], evening: [{ time: "7:00 PM", activity: "Seine riverside walk", icon: "moon" }], hotel: "Hotel Verneuil" },
      { day: 3, title: "Montmartre & Sacré-Coeur", location: "Paris", morning: [{ time: "10:00 AM", activity: "Montmartre art walk with local guide", icon: "camera" }], afternoon: [{ time: "1:00 PM", activity: "Lunch in Place du Tertre", icon: "utensils" }], evening: [{ time: "8:00 PM", activity: "Dinner in Le Marais", icon: "utensils" }], hotel: "Hotel Verneuil" },
      { day: 4, title: "Versailles Day Trip", location: "Versailles", morning: [{ time: "9:00 AM", activity: "Train to Versailles, palace tour", icon: "camera" }], afternoon: [{ time: "1:00 PM", activity: "Garden exploration & lunch", icon: "sun" }], evening: [{ time: "7:00 PM", activity: "Free evening in Paris", icon: "moon" }], hotel: "Hotel Verneuil" },
      { day: 5, title: "Champagne Day Trip", location: "Reims", morning: [{ time: "8:00 AM", activity: "Depart for Reims champagne region", icon: "sun" }], afternoon: [{ time: "12:00 PM", activity: "Champagne house tours & tastings", icon: "coffee" }], evening: [{ time: "7:00 PM", activity: "Return to Paris, dinner on your own", icon: "moon" }], hotel: "Hotel Verneuil" },
      { day: 6, title: "Seine Cruise & Eiffel Tower", location: "Paris", morning: [{ time: "10:00 AM", activity: "Free morning for shopping or museum visits", icon: "sun" }], afternoon: [{ time: "2:00 PM", activity: "Eiffel Tower visit", icon: "camera" }], evening: [{ time: "7:30 PM", activity: "Farewell Seine River dinner cruise", icon: "utensils" }], hotel: "Hotel Verneuil" },
      { day: 7, title: "Departure", location: "Paris", morning: [{ time: "9:00 AM", activity: "Breakfast & check out", icon: "coffee" }], afternoon: [{ time: "12:00 PM", activity: "Transfer to airport", icon: "sun" }], evening: [], hotel: "N/A — Departure day" },
    ],
  },

  "nashville-music-and-soul": {
    slug: "nashville-music-and-soul",
    name: "Nashville Music & Soul",
    destination: "Nashville, Tennessee",
    duration: "5 Days / 4 Nights",
    price: "$1,499",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1505672678657-cc7037095e60?w=1400&q=80",
    description:
      "Experience the beating heart of American music in Nashville. From honky-tonk legends to hot chicken trails, this five-day package captures the rhythm, warmth, and soul of Music City.",
    highlights: [
      "VIP Broadway honky-tonk crawl",
      "Grand Ole Opry backstage pass",
      "Hot chicken tasting trail",
      "Private songwriting session",
    ],
    included: [
      "4 nights at boutique Gulch hotel",
      "Daily breakfast + 2 curated dinners",
      "Airport transfers",
      "All guided experiences listed",
      "24/7 on-trip concierge support",
    ],
    startDates: ["May 1, 2026", "July 10, 2026", "October 3, 2026"],
    itinerary: [
      { day: 1, title: "Welcome to Music City", location: "Nashville", morning: [{ time: "11:00 AM", activity: "Arrive at Nashville International Airport", icon: "sun" }], afternoon: [{ time: "1:00 PM", activity: "Check in & explore the Gulch neighborhood", icon: "camera" }], evening: [{ time: "7:00 PM", activity: "Welcome dinner & Broadway honky-tonk crawl", icon: "utensils" }], hotel: "The 404 Hotel" },
      { day: 2, title: "Country Music Heritage", location: "Nashville", morning: [{ time: "9:00 AM", activity: "Country Music Hall of Fame", icon: "camera" }], afternoon: [{ time: "1:00 PM", activity: "RCA Studio B tour & lunch", icon: "camera" }], evening: [{ time: "7:30 PM", activity: "Grand Ole Opry show with backstage pass", icon: "moon" }], hotel: "The 404 Hotel" },
      { day: 3, title: "Hot Chicken & Songwriting", location: "Nashville", morning: [{ time: "10:00 AM", activity: "Hot chicken tasting trail", icon: "utensils" }], afternoon: [{ time: "2:00 PM", activity: "Private songwriting session with Nashville songwriter", icon: "camera" }], evening: [{ time: "8:00 PM", activity: "Live music at the Bluebird Cafe", icon: "moon" }], hotel: "The 404 Hotel" },
      { day: 4, title: "East Nashville & Farewell", location: "Nashville", morning: [{ time: "10:00 AM", activity: "East Nashville mural tour & coffee shops", icon: "coffee" }], afternoon: [{ time: "1:00 PM", activity: "Free afternoon for shopping or Centennial Park", icon: "sun" }], evening: [{ time: "7:00 PM", activity: "Farewell dinner at a Nashville steakhouse", icon: "utensils" }], hotel: "The 404 Hotel" },
      { day: 5, title: "Departure", location: "Nashville", morning: [{ time: "9:00 AM", activity: "Breakfast & check out", icon: "coffee" }], afternoon: [{ time: "11:00 AM", activity: "Transfer to airport", icon: "sun" }], evening: [], hotel: "N/A — Departure day" },
    ],
  },

  "southern-charm-trail": {
    slug: "southern-charm-trail",
    name: "Southern Charm Trail",
    destination: "Charleston, South Carolina",
    duration: "5 Days / 4 Nights",
    price: "$1,399",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1569974507005-6dc61f97fb5c?w=1400&q=80",
    description:
      "Wander cobblestone streets lined with pastel row houses, feast on Lowcountry cuisine, and sail into golden sunsets. Charleston's old-world elegance and warm Southern hospitality make every moment feel like a postcard.",
    highlights: [
      "Historic district carriage tour",
      "Lowcountry oyster roast experience",
      "Plantation gardens walking tour",
      "Sunset sailing on Charleston Harbor",
    ],
    included: [
      "4 nights at boutique historic-district inn",
      "Daily breakfast + 2 curated dinners",
      "Airport transfers",
      "All guided experiences listed",
      "24/7 on-trip concierge support",
    ],
    startDates: ["April 10, 2026", "May 22, 2026", "October 15, 2026"],
    itinerary: [
      { day: 1, title: "Welcome to Charleston", location: "Charleston", morning: [{ time: "11:00 AM", activity: "Arrive at Charleston International Airport", icon: "sun" }], afternoon: [{ time: "1:00 PM", activity: "Check in & explore King Street", icon: "camera" }], evening: [{ time: "7:00 PM", activity: "Welcome dinner — Lowcountry shrimp & grits", icon: "utensils" }], hotel: "The Spectator Hotel" },
      { day: 2, title: "Historic District & Carriage Tour", location: "Charleston", morning: [{ time: "9:00 AM", activity: "Horse-drawn carriage tour of the historic district", icon: "camera" }], afternoon: [{ time: "12:30 PM", activity: "Lunch & Rainbow Row walking tour", icon: "camera" }], evening: [{ time: "6:30 PM", activity: "Rooftop cocktails & dinner on your own", icon: "moon" }], hotel: "The Spectator Hotel" },
      { day: 3, title: "Plantations & Gardens", location: "Charleston", morning: [{ time: "9:00 AM", activity: "Middleton Place plantation & gardens tour", icon: "camera" }], afternoon: [{ time: "1:00 PM", activity: "Lunch & Angel Oak Tree visit", icon: "sun" }], evening: [{ time: "5:00 PM", activity: "Oyster roast on the waterfront", icon: "utensils" }], hotel: "The Spectator Hotel" },
      { day: 4, title: "Harbor Sailing & Farewell", location: "Charleston", morning: [{ time: "10:00 AM", activity: "Charleston City Market & shopping", icon: "camera" }], afternoon: [{ time: "2:00 PM", activity: "Free afternoon", icon: "sun" }], evening: [{ time: "5:30 PM", activity: "Sunset sailing on Charleston Harbor", icon: "moon" }, { time: "8:00 PM", activity: "Farewell dinner at a Lowcountry fine dining restaurant", icon: "utensils" }], hotel: "The Spectator Hotel" },
      { day: 5, title: "Departure", location: "Charleston", morning: [{ time: "9:00 AM", activity: "Breakfast & check out", icon: "coffee" }], afternoon: [{ time: "11:00 AM", activity: "Transfer to airport", icon: "sun" }], evening: [], hotel: "N/A — Departure day" },
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
      title: `${tour.name} | 2GoTG Travel`,
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
