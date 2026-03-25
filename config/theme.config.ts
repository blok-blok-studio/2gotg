/**
 * Theme Configuration — 2GoTG Travel
 * Generated from UUPM Design System: Gradient Mesh / Aurora Evolved
 * Typography: Bodoni Moda + Jost (luxury, sophisticated, refined)
 * Palette: Sky blue + adventure orange
 */

export const theme = {
  fonts: {
    heading: "'Bodoni Moda', serif",
    body: "'Jost', sans-serif",
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Jost:wght@300;400;500;600;700&display=swap",
  },
  colors: {
    primary: "#0EA5E9",       // Sky blue — trust, wanderlust, open skies
    primaryLight: "#38BDF8",  // Lighter sky
    primaryDark: "#0369A1",   // Deep ocean
    cta: "#F97316",           // Adventure orange — urgency, warmth, action
    ctaHover: "#EA580C",      // Darker orange on hover
    background: "#F0F9FF",    // Whisper blue
    backgroundDark: "#0B1120",// Deep night
    surface: "#FFFFFF",       // Card surfaces
    surfaceDark: "#111827",   // Dark mode cards
    text: "#0C4A6E",          // Deep teal-blue text
    textMuted: "#64748B",     // Slate muted
    textDark: "#F0F9FF",      // Light text for dark mode
    textDarkMuted: "#94A3B8", // Muted for dark mode
    border: "#E2E8F0",        // Light border
    borderDark: "#1E293B",    // Dark mode border
  },
  effects: {
    style: "Gradient Mesh / Aurora Evolved",
    transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)",
    borderRadius: "0.75rem",
    shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
    shadowLg: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
  },
} as const;
