"use client";
import { useEffect, useState } from "react";
import { SITE, SLOTS, inr } from "@/lib/site";
import { useBooking, setBooking, calcBill, buildMessage, waLink } from "@/lib/booking";
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

  // Client-side navigation from a pricing card (/calculator?slot=sunset) must apply the slot too.
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const patch = {};
    if (q.get("slot") in SLOTS) patch.slot = q.get("slot");
    if (q.has("hours")) patch.hours = q.get("hours");
    if (Object.keys(patch).length) setBooking(patch);
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(msg);
      setCopied("Copied ✓");
    } catch (e) {
      setCopied("Select the text and copy");
    }
    setTimeout(() => setCopied(""), 2200);
  };

  const hours = (
    <div className="field">
      <label htmlFor={`hours-${variant}`}>Estimated extra hours</label>
      <div className="stepper">
        <button type="button" aria-label="Decrease hours" disabled={!b.slot.extra || s.hours <= 0} onClick={() => setBooking({ hours: s.hours - 1 })}>−</button>
        <input id={`hours-${variant}`} type="number" inputMode="numeric" min="0" max="12" value={b.slot.extra ? s.hours : 0} disabled={!b.slot.extra} onChange={(e) => setBooking({ hours: e.target.value })} />
        <button type="button" aria-label="Increase hours" disabled={!b.slot.extra || s.hours >= 12} onClick={() => setBooking({ hours: s.hours + 1 })}>+</button>
      </div>
      <p className="hint">
        {b.slot.extra
          ? `${inr(SITE.extraPerHour)} per extra hour after ${b.slot.after}. Leave at 0 if you finish on time.`
          : "Full Day is a flat ₹3,000. No extra-hour charge applies."}
      </p>
    </div>
  );

  if (variant === "compact") {
    return (
      <div className="panel" id="quick-book">
        <h2>Quick booking message</h2>
        <p className="lead">Choose your slot and we&rsquo;ll prepare the WhatsApp message for you.</p>
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
          <b style={{ fontFamily: "var(--serif)", fontSize: "2.4rem", fontWeight: 500 }}>{inr(b.total)}</b>
        </div>
        <div className="row" style={{ marginTop: 22 }}>
          <a className="btn btn-wa" href={waLink(msg)} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> Send on WhatsApp</a>
        </div>
      </div>
    );
  }

  return (
    <div className="calc">
      <div className="panel">
        <h2>Build your booking</h2>
        <p className="lead">Pick a slot, add extra hours if you need them, and watch your total update.</p>

        <div className="field" role="radiogroup" aria-labelledby="slot-label">
          <span className="lab" id="slot-label">Choose a slot</span>
          <div className="slots">
            {Object.values(SLOTS).map((o) => (
              <label className="slot" key={o.id}>
                <input type="radio" name="slot" value={o.id} checked={s.slot === o.id} onChange={() => setBooking({ slot: o.id })} />
                <span className="dot" />
                <span><b>{o.name}</b><small>{o.time}</small></span>
                <span className="p">{inr(o.base)}</span>
              </label>
            ))}
          </div>
        </div>

        {hours}

        <div className="two">
          <div className="field">
            <label htmlFor="g-name">Your name (optional)</label>
            <input id="g-name" className="txt" type="text" placeholder="e.g. Riya" value={s.name} onChange={(e) => setBooking({ name: e.target.value })} />
          </div>
          <div className="field">
            <label htmlFor="g-date">Preferred date (optional)</label>
            <input id="g-date" className="txt" type="date" value={s.date} onChange={(e) => setBooking({ date: e.target.value })} />
          </div>
        </div>
        <div className="field">
          <label htmlFor="g-place">Preferred location (optional)</label>
          <input id="g-place" className="txt" type="text" placeholder="e.g. Hawa Mahal, Amer Fort" value={s.place} onChange={(e) => setBooking({ place: e.target.value })} />
        </div>
      </div>

      <aside className="bill" aria-live="polite">
        <h2>Your estimate</h2>
        <div className="lines">
          <div><span>{b.slot.name}</span><span>{inr(b.slot.base)}</span></div>
          <div>
            <span>{b.slot.extra ? `Extra hours (${b.hours} × ${inr(SITE.extraPerHour)})` : "Extra hours"}</span>
            <span>{b.slot.extra ? inr(b.extra) : "Not applicable"}</span>
          </div>
        </div>
        <div className="total"><span>Total</span><b>{inr(b.total)}</b></div>
        <a className="btn btn-wa btn-block" href={waLink(msg)} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> Book on WhatsApp</a>
        <label htmlFor="g-preview"><small>Your WhatsApp message (ready to send)</small></label>
        <textarea id="g-preview" className="preview" readOnly value={msg} />
        <button type="button" className={`btn btn-ghost btn-block${copied ? " copied" : ""}`} onClick={copy}>{copied || "Copy message"}</button>
        <small>Final price is confirmed by Gaurav on WhatsApp.</small>
      </aside>
    </div>
  );
}
