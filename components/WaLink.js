"use client";
import { useBooking, buildMessage, buildServiceMessage, waLink } from "@/lib/booking";

/**
 * WhatsApp link that carries the visitor's current slot + extra hours.
 * Pass `slot` to force a specific slot, or `service` (id from SHOOTS) for a one-day shoot package.
 */
export default function WaLink({ slot, service, className = "btn btn-wa", children, ...rest }) {
  const booking = useBooking();
  const msg = service ? buildServiceMessage(service) : slot ? buildMessage({ slot, hours: 0 }, false) : buildMessage(booking);
  return (
    <a href={waLink(msg)} target="_blank" rel="noopener noreferrer" className={className} {...rest}>
      {children}
    </a>
  );
}
