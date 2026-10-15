import Generator from "@/components/Generator";
import JsonLd from "@/components/JsonLd";
import PageTitle from "@/components/PageTitle";
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
      <PageTitle
        crumb="Cost Calculator"
        title={<>Live cost <span className="gold-text italic">calculator</span></>}
        lead="Select your slot, enter estimated extra hours and see your total instantly. One tap then sends your details to Gaurav on WhatsApp."
      />
      <section className="section pt-4">
        <div className="wrap"><Generator variant="full" /></div>
      </section>
    </>
  );
}
