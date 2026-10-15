import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";
import { businessSchema, websiteSchema } from "@/lib/seo";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins", display: "swap" });

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Gaurav Gimbal | Gimbal Photographer & Reels Shoot in Jaipur",
    template: "%s | Gaurav Gimbal",
  },
  description:
    "Reels and photo shoots in Jaipur with Gaurav Gimbal. Sunrise and sunset slots from ₹1,000 at Hawa Mahal, Amer Fort, Nahargarh and Jal Mahal. Book on WhatsApp.",
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  category: "photography",
  keywords: [
    "gimbal photographer Jaipur",
    "reels shoot Jaipur",
    "Jaipur photoshoot",
    "sunrise shoot Nahargarh",
    "Hawa Mahal photoshoot",
    "Amer Fort photoshoot",
    "pre wedding shoot Jaipur",
    "tourist photographer Jaipur",
    "Gaurav Gimbal",
  ],
  formatDetection: { telephone: true, email: false, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } : undefined,
  openGraph: { type: "website", locale: "en_IN", siteName: SITE.name },
};

export const viewport = {
  themeColor: "#111113",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={poppins.variable}>
      <body>
        <JsonLd data={[businessSchema(), websiteSchema()]} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
