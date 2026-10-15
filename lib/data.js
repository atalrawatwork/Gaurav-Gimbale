/**
 * Central site data. Edit THIS file to change brand, contact details,
 * photos and prices. Every component reads from here.
 */

export const SITE = {
  name: "Gaurav Gimbale",
  brand: "Gimbal Photography",
  city: "Jaipur",
  title: "Gimbal Photography Jaipur | Gaurav Gimbale – Wedding, Pre-Wedding & Travel Photographer",
  description:
    "Gaurav Gimbale of Gimbal Photography, Jaipur — professional wedding, pre-wedding, candid, cinematic and tourist photography. Book your shoot on WhatsApp today.",
  // Set NEXT_PUBLIC_SITE_URL in .env.local after deployment.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.gimbalphotography.in",
  phone: "+91 6375393310",
  phoneHref: "tel:+916375393310",
  whatsappNumber: "916375393310",
  whatsappHref:
    "https://wa.me/916375393310?text=" +
    encodeURIComponent("Hello Gaurav, I found you on your website and want to book a shoot."),
  // TODO: replace with the real profile links
  instagram: "https://instagram.com/your-instagram-handle", // [Add Instagram Link Placeholder]
  facebook: "https://facebook.com/your-facebook-page", // [Add Facebook Link Placeholder]
  address: "Goner Road, Machi ki Pipli, Jaipur, Rajasthan",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Goner Road, Machi ki Pipli, Jaipur"),
  timing: "Open daily · 9:30 AM – 8:30 PM",
  tagline: "Pre-Wedding · Wedding · Tourist Photography",
};

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Packages" },
  { href: "#contact", label: "Contact" },
];

export const CATEGORIES = ["All", "Weddings", "Portraits", "Landscapes"];

/**
 * Placeholder photos from picsum.photos (seeded so they stay stable).
 * To use your own: drop files in /public/images and set src: "/images/x.jpg".
 * Give real width/height so the grid doesn't jump while loading.
 */
const ph = (seed, w, h) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const PHOTOS = [
  { id:  1, title: "Golden Hour Vows", category: "Weddings", src: "/public/gaurav.jpg", w: 900, h: 1200 },
  { id: 2, title: "Lakeside Pre-Wedding", category: "Portraits", src: ph("pre-lake", 1200, 800), w: 1200, h: 800 },
  { id: 3, title: "Aravalli Sunrise", category: "Landscapes", src: ph("land-sunrise", 1200, 800), w: 1200, h: 800 },
  { id: 4, title: "Studio Portrait", category: "Portraits", src: ph("portrait-studio", 900, 1200), w: 900, h: 1200 },
  { id: 5, title: "Pink City Streets", category: "Landscapes", src: ph("travel-jaipur", 1200, 800), w: 1200, h: 800 },
  { id: 6, title: "The First Look", category: "Weddings", src: ph("wed-first", 900, 1200), w: 900, h: 1200 },
  { id: 7, title: "Palace Courtyard", category: "Portraits", src: ph("pre-palace", 900, 1200), w: 900, h: 1200 },
  { id: 8, title: "Desert Dunes", category: "Landscapes", src: ph("land-dunes", 1200, 800), w: 1200, h: 800 },
  { id: 9, title: "Candid Smile", category: "Portraits", src: ph("portrait-candid", 900, 1200), w: 900, h: 1200 },
  { id: 10, title: "Mehendi Moments", category: "Weddings", src: ph("wed-mehendi", 1200, 800), w: 1200, h: 800 },
  { id: 11, title: "Baraat Celebration", category: "Weddings", src: ph("wed-baraat", 900, 1200), w: 900, h: 1200 },
  { id: 12, title: "Amer Fort Light", category: "Landscapes", src: ph("land-amer", 1200, 800), w: 1200, h: 800 },
];

/**
 * Pricing cards. `unit` is shown under the price.
 * Prices are in INR (₹).
 */
export const PACKAGES = [
  {
    name: "Reels Shoot",
    icon: "reels",
    price: "₹2,000",
    unit: "per day",
    blurb: "Trendy short-form reels for you, your brand or your trip.",
    features: ["Full-day reel shooting", "Creative ideas & trending angles", "Quick-edit friendly clips", "Great for creators & cafés"],
  },
  {
    name: "Candid Shoot",
    icon: "candid",
    price: "₹8,000",
    unit: "per shoot",
    blurb: "Natural, unposed moments — laughter, emotion, real you.",
    features: ["Candid portraits & couples", "Edited high-res photos", "Online gallery to share", "Styling & pose guidance"],
  },
  {
    name: "Cinematography",
    icon: "cine",
    price: "₹10,000",
    unit: "per shoot",
    blurb: "Film-style video with colour grading and music.",
    features: ["Cinematic highlight film", "Colour graded footage", "Drone / gimbal shots", "Music & smooth transitions"],
  },
  {
    name: "Pre-Wedding",
    icon: "pre",
    price: "₹20,000",
    unit: "per shoot",
    blurb: "A story-driven shoot for the two of you before the big day.",
    features: ["Choice of Jaipur locations", "Outfit & location guidance", "Edited high-res photos", "Cinematic teaser reel"],
    highlight: false,
  },
  {
    name: "Wedding · Traditional",
    icon: "wedding",
    price: "₹40,000",
    unit: "2-day coverage",
    blurb: "Two full days of traditional wedding photography, start to finish.",
    features: ["Two-day complete coverage", "Rituals, family & candid moments", "Hundreds of edited photos", "Sneak-peek within 48 hours"],
    highlight: true,
  },
];

export const STATS = [
  { value: "500+", label: "Shoots done" },
  { value: "Jaipur", label: "Based in" },
  { value: "9:30–8:30", label: "Daily timing" },
];
