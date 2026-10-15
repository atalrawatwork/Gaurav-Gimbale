/**
 * Single source of truth: brand, contact, packages, locations.
 * Edit this file to change phone, Instagram, domain, prices or locations.
 */
export const SITE = {
  name: "Gaurav Gimbal",
  legalName: "Gaurav Gimbal Photography",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://gaurav-gimbal.vercel.app").replace(/\/$/, ""),
  city: "Jaipur",
  region: "Rajasthan",
  country: "IN",
  phone: "+91 63753 93310",
  phoneHref: "tel:+916375393310",
  whatsapp: "916375393310",
  // TODO: replace with Gaurav's real Instagram profile link
  instagram: "https://instagram.com/your-instagram-handle",
  extraPerHour: 300,
  slogan: "Create your unforgettable reels and photos with Gaurav Gimbal. Book your slot today.",
};

export const hasRealInstagram = !SITE.instagram.includes("your-instagram-handle");

/** Tailwind classes for each bento-gallery tile type. */
export const TILE_CLASS = { "t-big": "col-span-2 row-span-2", "t-tall": "row-span-2" };

export const SLOTS = {
  sunrise: {
    id: "sunrise",
    name: "Sunrise Slot",
    time: "Sunrise to 10:00 AM",
    base: 1000,
    after: "10:00 AM",
    extra: true,
    locations: ["Nahargarh Sunrise Shoot", "Amer Fort", "Jal Mahal", "Hawa Mahal"],
    note: "₹300/hour extra after 10 AM",
  },
  sunset: {
    id: "sunset",
    name: "Sunset Slot",
    time: "4:00 PM to 8:00 PM",
    base: 1000,
    after: "8:00 PM",
    extra: true,
    locations: ["Shri Govind Dev Ji", "Hawa Mahal", "Jantar Mantar", "City Palace", "Albert Hall", "Birla Mandir", "Patrika Gate"],
    note: "₹300/hour extra after 8 PM",
  },
  full: {
    id: "full",
    name: "Full Day Package",
    time: "Sunrise to 8:00 PM",
    base: 3000,
    after: null,
    extra: false,
    locations: [],
    note: "Flat rate, no extra-hour charge",
  },
};

export const inr = (n) => "₹" + Number(n).toLocaleString("en-IN");

export const FAQS = [
  {
    q: "How much is the Sunrise Slot with Gaurav Gimbal?",
    a: "The Sunrise Slot is ₹1,000 and runs from sunrise to 10:00 AM. After 10 AM, every extra hour is charged at ₹300.",
  },
  {
    q: "Which locations are covered in the Sunset Slot?",
    a: "The Sunset Slot (4:00 PM to 8:00 PM, ₹1,000) lets you choose from Shri Govind Dev Ji, Hawa Mahal, Jantar Mantar, City Palace, Albert Hall, Birla Mandir and Patrika Gate.",
  },
  {
    q: "Is there any extra charge in the Full Day Package?",
    a: "No. The Full Day Package runs from sunrise to 8:00 PM at a flat ₹3,000, with no extra-hour charge.",
  },
  {
    q: "How do I book a slot?",
    a: "Tap the 'Book on WhatsApp' button. A ready message with your chosen slot and extra hours opens in WhatsApp. Just press send.",
  },
  {
    q: "Do you shoot outside Jaipur?",
    a: "All packages are currently for locations in Jaipur. For any other place, message Gaurav directly on WhatsApp.",
  },
];

export const PHOTOS = [
  { src: "/images/umbrella.jpg", w: 1200, h: 800, alt: "Jaipur wedding couple under a glowing umbrella in the rain, shot by Gaurav Gimbal", cap: "Wedding · Jaipur", tile: "t-big", pos: "50% 40%" },
  { src: "/images/dance.jpg", w: 900, h: 1351, alt: "Bride and groom twirl in a candid wedding photo in Jaipur", cap: "Candid Wedding", tile: "t-tall", pos: "50% 35%" },
  { src: "/images/hands.jpg", w: 1200, h: 800, alt: "Couple holding mehndi hands with golden bokeh lights", cap: "Details", tile: "", pos: "50% 50%" },
  { src: "/images/vows.jpg", w: 1200, h: 800, alt: "Groom and bride sharing an emotional moment during a Rajasthani wedding", cap: "Wedding Moments", tile: "", pos: "50% 35%" },
  { src: "/images/behind-the-lens.jpg", w: 900, h: 1350, alt: "Gimbal videographer filming a pre-wedding shoot and a sunset silhouette with flowing red gown", cap: "Gimbal Reels & Pre-wedding", tile: "t-tall", pos: "50% 50%" },
  { src: "/images/groom.jpg", w: 1100, h: 1107, alt: "Groom in a cream sherwani and orange safa seated at a traditional wedding ritual", cap: "Traditional Wedding", tile: "t-big", pos: "50% 30%" },
  { src: "/images/portrait.jpg", w: 1200, h: 800, alt: "Smiling woman in a black saree against an orange and cream backdrop, portrait photography", cap: "Portrait", tile: "t-tall", pos: "52% 50%" },
];
