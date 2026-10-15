import Link from "next/link";
import Generator from "@/components/Generator";
import JsonLd from "@/components/JsonLd";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Photoshoot Cost Calculator, Jaipur",
  description:
    "Choose Sunrise, Sunset or Full Day, add extra hours and see your total instantly. Then send a ready-made booking message to Gaurav Gimbal on WhatsApp.",
  path: "/calculator",
  keywords: ["photoshoot cost calculator", "Jaipur photographer price", "book photographer WhatsApp Jaipur"],
});

export default function CalculatorPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Cost Calculator", path: "/calculator" }])} />
      <section className="page-title">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Cost Calculator</span></nav>
          <h1>Live cost <em className="it">calculator</em></h1>
          <p className="lead">Select your slot, enter estimated extra hours and see your total instantly. One tap then sends your details to Gaurav on WhatsApp.</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 36 }}>
        <div className="wrap"><Generator variant="full" /></div>
      </section>
    </>
  );
}
