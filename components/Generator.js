"use client";
import { useEffect, useRef, useState } from "react";
import { SITE, SLOTS, inr } from "@/lib/site";
import { useBooking, setBooking, calcBill, buildMessage, waLink, isSlot } from "@/lib/booking";
import { WhatsAppIcon } from "./Icons";

/**
 * Live cost calculator + WhatsApp message generator.
 * variant="full"    → slot cards, details, bill + message preview (calculator page)
 * variant="compact" → slot dropdown + hours (contact page)
 */
export default function Generator({ variant = "full" }) {
  const s = useBooking();
  const b = calcBill(s);
  const msg = buildMessage(s);
  const [copied, setCopied] = useState("");
  const timer = useRef(null);

  // Client-side navigation from a pricing card (/calculator?slot=sunset) must apply the slot too.
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const patch = {};
    if (isSlot(q.get("slot"))) patch.slot = q.get("slot");
    if (q.has("hours")) patch.hours = q.get("hours");
    if (Object.keys(patch).length) setBooking(patch);
    return () => clearTimeout(timer.current);
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(msg);
      setCopied("Copied ✓");
    } catch {
      setCopied("Select the text and copy");
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(""), 2200);
  };

  const stepBtn =
    "grid size-12 place-items-center rounded-xl border border-black/15 bg-sand text-xl text-cream transition hover:border-gold-400 disabled:cursor-not-allowed disabled:opacity-40";

  const hours = (
    <div className="field">
      <label htmlFor={`hours-${variant}`}>Estimated extra hours</label>
      <div className="flex items-center gap-2">
        <button type="button" className={stepBtn} aria-label="Decrease hours" disabled={!b.slot.extra || s.hours <= 0} onClick={() => setBooking({ hours: s.hours - 1 })}>−</button>
        <input
          id={`hours-${variant}`}
          className="txt w-24! text-center"
          type="number"
          inputMode="numeric"
          min="0"
          max="12"
          value={b.slot.extra ? s.hours : 0}
          disabled={!b.slot.extra}
          onChange={(e) => setBooking({ hours: e.target.value })}
        />
        <button type="button" className={stepBtn} aria-label="Increase hours" disabled={!b.slot.extra || s.hours >= 12} onClick={() => setBooking({ hours: s.hours + 1 })}>+</button>
      </div>
      <p className="hint">
        {b.slot.extra
          ? `${inr(SITE.extraPerHour)} per extra hour after ${b.slot.after}. Leave at 0 if you finish on time.`
          : `Full Day is a flat ${inr(SLOTS.full.base)}. No extra-hour charge applies.`}
      </p>
    </div>
  );

  if (variant === "compact") {
    return (
      <div className="panel" id="quick-book">
        <h2 className="text-[1.8rem]">Quick booking message</h2>
        <p className="lead mb-7 mt-2">Choose your slot and we&rsquo;ll prepare the WhatsApp message for you.</p>
        <div className="field">
          <label htmlFor="slot-compact">Slot</label>
          <select id="slot-compact" className="txt" value={s.slot} onChange={(e) => setBooking({ slot: e.target.value })}>
            {Object.values(SLOTS).map((o) => (
              <option key={o.id} value={o.id}>{o.name} · {inr(o.base)}</option>
            ))}
          </select>
        </div>
        {hours}
        <div className="field">
          <span className="lab">Estimated total</span>
          <b className="font-display text-[2.6rem] font-semibold text-gold-300">{inr(b.total)}</b>
        </div>
        <a className="btn btn-wa" href={waLink(msg)} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> Send on WhatsApp</a>
      </div>
    );
  }

  return (
    <div className="grid items-start gap-6 lg:grid-cols-[1.25fr_1fr]">
      <div className="panel">
        <h2 className="text-[1.8rem]">Build your booking</h2>
        <p className="lead mb-8 mt-2">Pick a slot, add extra hours if you need them, and watch your total update.</p>

        <fieldset className="field border-0 p-0">
          <legend className="lab mb-2 block text-[11.5px] font-semibold uppercase tracking-[0.18em] text-mute">Choose a slot</legend>
          <div className="grid gap-3">
            {Object.values(SLOTS).map((o) => (
              <label
                key={o.id}
                className="flex cursor-pointer items-center gap-4 rounded-2xl border border-black/10 bg-sand p-4 transition hover:border-black/30 has-[:checked]:border-gold-400 has-[:checked]:bg-gold-400/10 has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-gold-400/25"
              >
                <input className="peer sr-only" type="radio" name={`slot-${variant}`} value={o.id} checked={s.slot === o.id} onChange={() => setBooking({ slot: o.id })} />
                <span aria-hidden="true" className="grid size-5 flex-none place-items-center rounded-full border-2 border-black/30 after:size-2 after:rounded-full after:bg-white after:opacity-0 peer-checked:border-gold-400 peer-checked:bg-gold-400 peer-checked:after:opacity-100" />
                <span className="grow">
                  <b className="block text-[15px] font-semibold text-cream">{o.name}</b>
                  <small className="text-[13px] font-normal text-mute">{o.time}</small>
                </span>
                <span className="font-display text-xl font-semibold text-gold-300">{inr(o.base)}</span>
              </label>
            ))}
          </div>
        </fieldset>

        {hours}

        <div className="grid gap-x-5 sm:grid-cols-2">
          <div className="field">
            <label htmlFor="g-name">Your name (optional)</label>
            <input id="g-name" className="txt" type="text" autoComplete="name" placeholder="e.g. Riya" value={s.name} onChange={(e) => setBooking({ name: e.target.value })} />
          </div>
          <div className="field">
            <label htmlFor="g-date">Preferred date (optional)</label>
            <input id="g-date" className="txt" type="date" value={s.date} onChange={(e) => setBooking({ date: e.target.value })} />
          </div>
        </div>
        <div className="field mb-0!">
          <label htmlFor="g-place">Preferred location (optional)</label>
          <input id="g-place" className="txt" type="text" placeholder="e.g. Hawa Mahal, Amer Fort" value={s.place} onChange={(e) => setBooking({ place: e.target.value })} />
        </div>
      </div>

      <aside className="panel lg:sticky lg:top-24" aria-live="polite">
        <h2 className="text-[1.6rem]">Your estimate</h2>
        <div className="my-6 grid gap-3 text-[15px] text-mute">
          <div className="flex justify-between gap-4"><span>{b.slot.name}</span><span className="text-cream">{inr(b.slot.base)}</span></div>
          <div className="flex justify-between gap-4">
            <span>{b.slot.extra ? `Extra hours (${b.hours} × ${inr(SITE.extraPerHour)})` : "Extra hours"}</span>
            <span className="text-cream">{b.slot.extra ? inr(b.extra) : "Not applicable"}</span>
          </div>
        </div>
        <div className="mb-6 flex items-end justify-between gap-4 border-t border-black/10 pt-5">
          <span className="text-mute">Total</span>
          <b className="font-display text-[2.8rem] font-semibold leading-none text-gold-300">{inr(b.total)}</b>
        </div>
        <a className="btn btn-wa btn-block" href={waLink(msg)} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> Book on WhatsApp</a>
        <label htmlFor="g-preview" className="mb-2 mt-6 block text-[11.5px] font-semibold uppercase tracking-[0.18em] text-mute">Your WhatsApp message (ready to send)</label>
        <textarea id="g-preview" className="txt h-44 resize-none text-sm" readOnly value={msg} />
        <button type="button" className="btn btn-ghost btn-block mt-3" onClick={copy}>{copied || "Copy message"}</button>
        <p className="mt-4 text-[13px] text-mute">Final price is confirmed by Gaurav on WhatsApp.</p>
      </aside>
    </div>
  );
}
