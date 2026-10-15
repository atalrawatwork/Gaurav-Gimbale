"use client";

export default function Error({ reset }) {
  return (
    <section className="section">
      <div className="wrap grid min-h-[50vh] place-content-center justify-items-center gap-5 text-center">
        <h1 className="text-[clamp(2rem,5vw,3.5rem)]">Something went wrong</h1>
        <p className="lead">Please try again. If it keeps happening, message Gaurav on WhatsApp.</p>
        <button type="button" className="btn" onClick={() => reset()}>Try again</button>
      </div>
    </section>
  );
}
