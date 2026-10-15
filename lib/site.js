/**
 * Single source of truth: brand, contact, packages, locations.
 * Edit this file to change phone, Instagram, domain, prices or locations.
 */
export const SITE = {
  name: "Gaurav Gimbal",
  legalName: "Gaurav Gimbal Photography",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://gaurav-gimbal.vercel.app/").replace(/\/$/, ""),
  city: "Jaipur",
  region: "Rajasthan",
  country: "IN",
  phone: "+91 63753 93310",
  phoneHref: "tel:+916375393310",
  whatsapp: "916375393310",
  // TODO: replace with Gaurav's real Instagram profile link
  instagram: "https://instagram.com/your-instagram-handle",
  extraPerHour: 300,
  slogan: "गौरव gimbal के साथ बनवाए अपनी अविस्मरणीय reels और photos.. आज ही बुक करे अपना slot...",
};

export const hasRealInstagram = !SITE.instagram.includes("your-instagram-handle");

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
    q: "Gaurav Gimbal ka Sunrise Slot kitne ka hai?",
    a: "Sunrise Slot ₹1,000 ka hai aur sunrise se 10:00 AM tak chalta hai. 10 AM ke baad har extra ghante ke ₹300 lagte hain.",
  },
  {
    q: "Sunset Slot me kaun si locations cover hoti hain?",
    a: "Sunset Slot (4:00 PM se 8:00 PM, ₹1,000) me Shri Govind Dev Ji, Hawa Mahal, Jantar Mantar, City Palace, Albert Hall, Birla Mandir aur Patrika Gate me se aap apni pasand ki locations chun sakte hain.",
  },
  {
    q: "Full Day Package me kya extra charge lagta hai?",
    a: "Full Day Package sunrise se 8:00 PM tak ₹3,000 flat hai. Isme extra ghante ka koi charge nahi hai.",
  },
  {
    q: "Slot kaise book karein?",
    a: "Website par 'Book on WhatsApp' button dabayein. Aapka chuna hua slot aur extra hours ke saath ek ready message WhatsApp me khul jayega, bas send kar dijiye.",
  },
  {
    q: "Kya Jaipur ke bahar bhi shoot hota hai?",
    a: "Abhi sabhi packages Jaipur ki locations ke liye hain. Kisi aur jagah ke liye WhatsApp par seedha puchhiye.",
  },
];

export const PHOTOS = [
  { src: "/images/umbrella.jpg", w: 1200, h: 800, alt: "Jaipur wedding couple under a glowing umbrella in the rain, shot by Gaurav Gimbal", cap: "Wedding · Jaipur" },
  { src: "/images/dance.jpg", w: 900, h: 1351, alt: "Bride and groom twirl in a candid wedding photo in Jaipur", cap: "Candid Wedding" },
  { src: "/images/hands.jpg", w: 1200, h: 800, alt: "Couple holding mehndi hands with golden bokeh lights", cap: "Details" },
  { src: "/images/behind-the-lens.jpg", w: 900, h: 1350, alt: "Gimbal videographer filming a pre-wedding shoot and a sunset silhouette with flowing red gown", cap: "Gimbal Reels & Pre-wedding" },
  { src: "/images/vows.jpg", w: 1200, h: 800, alt: "Groom and bride sharing an emotional moment during a Rajasthani wedding", cap: "Wedding Moments" },
  { src: "/images/portrait.jpg", w: 1200, h: 800, alt: "Smiling woman in a black saree against an orange and cream backdrop, portrait photography", cap: "Portrait" },
  { src: "/images/groom.jpg", w: 1100, h: 1107, alt: "Groom in a cream sherwani and orange safa seated at a traditional wedding ritual", cap: "Traditional Wedding" },
];
