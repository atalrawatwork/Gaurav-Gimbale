"use client";
import { useBooking, buildMessage, waLink } from "@/lib/booking";

/**
 * WhatsApp link that carries the visitor's current slot + extra hours.
 * Pass `slot` to force a specific package (used on pricing cards).
 */
export default function WaLink({ slot, className = "btn btn-wa", children, ...rest }) {
  const booking = useBooking();
  const msg = slot ? buildMessage({ slot, hours: 0 }, false) : buildMessage(booking);
  return (
    <a href={waLink(msg)} target="_blank" rel="noopener noreferrer" className={className} {...rest}>
      {children}
    </a>
  );
}
