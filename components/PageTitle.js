import Link from "next/link";

/** Shared page header (breadcrumb + h1 + intro) for inner pages. */
export default function PageTitle({ crumb, title, lead }) {
  return (
    <section className="grain relative -mt-[72px] overflow-hidden pt-[72px]">
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-10 size-[420px] rounded-full bg-gold-500/15 blur-[120px]" />
      <div className="wrap relative py-14 md:py-20">
        <nav className="mb-6 flex gap-2 text-[13px] text-mute" aria-label="Breadcrumb">
          <Link href="/" className="no-underline hover:text-gold-300">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{crumb}</span>
        </nav>
        <h1 className="text-[clamp(2.3rem,5.4vw,4rem)]">{title}</h1>
        <p className="lead mt-5">{lead}</p>
      </div>
    </section>
  );
}
