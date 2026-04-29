import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name}, ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: { canonical: siteConfig.url },
  applicationName: siteConfig.name,
  authors: [{ name: "Heidie Haynes", url: siteConfig.url }],
  creator: "Heidie Haynes",
  publisher: siteConfig.name,
  category: "Travel",
  keywords: [
    "boutique travel agency",
    "custom travel itineraries",
    "personalized travel planner",
    "Heidie Haynes",
    "2 Girls on the Go",
    "Sicily tours",
    "Italy travel",
    "North Macedonia tours",
    "Berlin travel",
    "London travel",
    "Greece travel",
    "Savannah Georgia tours",
    "Nashville Tennessee tours",
    "Napa Valley wine tours",
    "Gulf Shores Alabama travel",
    "Calgary Alberta tours",
    "luxury travel",
    "adventure travel",
    "cultural immersion travel",
    "small group travel",
    "solo travel planning",
    "couples travel",
    "international vacation planner",
    "domestic vacation planner",
    "travel consultant",
    "travel agent United States",
  ],
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: `${siteConfig.name}, ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/brand/2-girls-on-the-go-travel-logo-v2.png",
        width: 1008,
        height: 1008,
        alt: `${siteConfig.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name}, ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/brand/2-girls-on-the-go-travel-logo-v2.png"],
    creator: "@2girlsonthego",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#3FA9DD" },
    { media: "(prefers-color-scheme: dark)", color: "#0B1120" },
  ],
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const travelAgencySchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": `${siteConfig.url}#agency`,
  name: siteConfig.name,
  alternateName: ["2 Girls on the Go Travel", "2GOTG"],
  description: siteConfig.description,
  url: siteConfig.url,
  logo: `${siteConfig.url}/brand/2-girls-on-the-go-travel-logo-v2.png`,
  image: `${siteConfig.url}/brand/2-girls-on-the-go-travel-logo-v2.png`,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  priceRange: "$$-$$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.contact.locality,
    addressRegion: siteConfig.contact.region,
    addressCountry: siteConfig.contact.country,
  },
  areaServed: ["US", "Worldwide"],
  founder: {
    "@type": "Person",
    name: "Heidie Haynes",
  },
  sameAs: [
    siteConfig.social.instagram,
    siteConfig.social.facebook,
    siteConfig.social.linktree,
  ],
  slogan: siteConfig.tagline,
  knowsAbout: [
    "Custom travel itineraries",
    "International travel planning",
    "Sicily tours",
    "North Macedonia tours",
    "Solo travel for women",
    "Group travel",
    "Luxury travel",
    "Adventure travel",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.description,
  publisher: { "@id": `${siteConfig.url}#agency` },
  inLanguage: "en-US",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Jost:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(travelAgencySchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
