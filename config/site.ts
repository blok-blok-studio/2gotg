export const siteConfig = {
  name: "2GoTG Travel",
  tagline: "Your Gateway to the World",
  description:
    "Premium international and domestic travel experiences. Curated itineraries, expert guides, and unforgettable adventures across every continent.",
  url: "https://2gotg.com",
  contact: {
    email: "hello@2gotg.com",
    phone: "+1 (555) 234-5678",
    address: "123 Travel Plaza, Suite 400, New York, NY 10001",
  },
  social: {
    instagram: "https://instagram.com/2gotg",
    facebook: "https://facebook.com/2gotg",
    twitter: "https://x.com/2gotg",
    youtube: "https://youtube.com/@2gotg",
  },
  nav: [
    { label: "Destinations", href: "/destinations" },
    { label: "Tours", href: "/#package-tours" },
    { label: "Experiences", href: "/experiences" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
