"use client";
import WaLink from "./WaLink";
import { WhatsAppIcon } from "./Icons";

export default function WhatsAppFab() {
  return (
    <WaLink className="fab" aria-label="Book on WhatsApp">
      <WhatsAppIcon />
    </WaLink>
  );
}
