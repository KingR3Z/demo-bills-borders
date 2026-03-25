/* ============================================
   CLIENT CONFIGURATION
   ============================================ */

export const client = {
  name: "Bills borders",
  shortName: "Bills borders",
  legalName: "Bills borders",
  tagline: "LANDSCAPING | GARDENS | PATIOS | DRIVEWAYS",
  logoInitials: "B B",
  founderName: "",
  founderRole: "Director",
  yearFounded: "",
  phone: "07906 484340",
  email: "",
  whatsapp: {
    display: "07906 484340",
    link: "https://wa.me/447906484340",
  },
  address: [
    "Horsham",
  ],
  region: "Horsham and surrounding areas",
  basedIn: "Horsham",
  hours: [
    { day: "Monday — Friday", time: "8:00 AM — 5:00 PM" },
    { day: "Saturday", time: "9:00 AM — 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  socials: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
  ],
  awards: [
    { title: "Google Reviews — 5.0 Stars", year: "2026", category: "REVIEWS" },
    { title: "0 Five-Star Reviews", year: "2026", category: "SERVICE" },
  ],
  partners: [
    { name: "Marshalls", logo: null },
    { name: "Bradstone", logo: null },
    { name: "Tobermore", logo: null },
    { name: "Tarmac", logo: null },
  ],
  metaTitle: "Bills borders — Landscaper in Horsham",
  metaDescription:
    "Professional landscaper in Horsham. 5.0 stars on Google Reviews with 0 reviews. Quality workmanship guaranteed.",
};


// Derived helpers
export const phoneLink = `tel:${client.phone.replace(/\s/g, "")}`;
export const emailLink = `mailto:${client.email}`;
