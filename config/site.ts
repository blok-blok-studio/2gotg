export const siteConfig = {
  name: "2 Girls on the Go",
  tagline: "Travel is a Mindset",
  description:
    "Boutique travel agency owned by Heidie Haynes. Custom international and domestic itineraries with 40+ years of personal travel experience behind every trip.",
  url: "https://2girlsonthego.com",
  contact: {
    email: "hello@2girlsonthego.com",
    phone: "+1 (555) 234-5678",
    address: "United States — serving travelers worldwide",
  },
  social: {
    instagram: "https://instagram.com/2girlsonthego",
    facebook: "https://facebook.com/2girlsonthego",
    youtube: "https://youtube.com/@2girlsonthego",
  },
  nav: [
    { label: "Tours", href: "/#package-tours" },
    { label: "Experiences", href: "/experiences" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
