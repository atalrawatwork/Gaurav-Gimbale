import Link from "next/link";

export const metadata = { title: "Page not found", robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap grid min-h-[50vh] place-content-center justify-items-center gap-5 text-center">
        <span className="eyebrow">Error 404</span>
        <h1 className="text-[clamp(2.4rem,6vw,4.5rem)]">This frame <span className="gold-text italic">is empty</span></h1>
        <p className="lead">The page you are looking for does not exist or has moved.</p>
        <Link href="/" className="btn">Back to home</Link>
      </div>
    </section>
  );
}
