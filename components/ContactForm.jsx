"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { PACKAGES, SITE } from "@/lib/data";

const empty = { name: "", phone: "", email: "", service: "", message: "", website: "" };

/**
 * Contact form → POST /api/contact (emails Gaurav via SMTP).
 * If email isn't configured yet (503), it opens WhatsApp with the message
 * pre-filled so no enquiry is ever lost.
 */
export default function ContactForm() {
  const [data, setData] = useState(empty);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState("");

  const set = (k) => (e) => setData((d) => ({ ...d, [k]: e.target.value }));

  const openWhatsApp = () => {
    const text = `Hello Gaurav, I'm ${data.name}.\nService: ${data.service || "General"}\nPhone: ${data.phone}\n\n${data.message}`;
    window.open(`https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  };

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("success");
        setData(empty);
      } else if (json.fallback) {
        openWhatsApp(); // email not configured → continue on WhatsApp
        setStatus("success");
      } else {
        throw new Error(json.error || "Something went wrong.");
      }
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-3xl border border-sage-500/40 bg-ink-800 p-10 text-center">
        <CheckCircle2 className="mx-auto text-sage-400" size={44} />
        <h3 className="mt-4 font-display text-3xl text-cream">Thank you!</h3>
        <p className="mt-2 text-cream/70">Your message has been received. Gaurav will get back to you shortly.</p>
        <button onClick={() => setStatus("idle")} className="btn-ghost mt-6">Send another message</button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-3xl border border-ink-600 bg-ink-800 p-6 sm:p-8" noValidate={false}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block text-cream/70">Your name *</span>
          <input className="input" required value={data.name} onChange={set("name")} autoComplete="name" placeholder="Full name" />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-cream/70">Mobile number *</span>
          <input className="input" required type="tel" value={data.phone} onChange={set("phone")} autoComplete="tel" placeholder="+91 ..." />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block text-cream/70">Email (optional)</span>
          <input className="input" type="email" value={data.email} onChange={set("email")} autoComplete="email" placeholder="you@example.com" />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-cream/70">Service</span>
          <select className="input" value={data.service} onChange={set("service")}>
            <option value="">Select a package</option>
            {PACKAGES.map((p) => (
              <option key={p.name} value={p.name}>{p.name} – {p.price}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="block text-sm">
        <span className="mb-1.5 block text-cream/70">Tell me about your shoot *</span>
        <textarea className="input min-h-32 resize-y" required rows={5} value={data.message} onChange={set("message")} placeholder="Date, location, and what you have in mind..." />
      </label>

      {/* Honeypot – hidden from people, bots fill it */}
      <input type="text" name="website" value={data.website} onChange={set("website")} tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      {status === "error" && (
        <p role="alert" className="flex items-center gap-2 text-sm text-blush-400">
          <AlertCircle size={16} /> {error}
        </p>
      )}

      <button type="submit" disabled={status === "sending"} className="btn-gold w-full disabled:opacity-60">
        {status === "sending" ? <><Loader2 size={16} className="animate-spin" /> Sending…</> : <><Send size={16} /> Send message</>}
      </button>
    </form>
  );
}
