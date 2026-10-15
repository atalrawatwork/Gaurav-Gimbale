"use client";
import WaLink from "./WaLink";
import { WhatsAppIcon } from "./Icons";

export default function WhatsAppFab() {
  return (
    <WaLink
      className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-wa text-cream shadow-[0_14px_40px_-10px_rgb(37_211_102/0.6)] transition hover:scale-105 [&_svg]:size-7"
      aria-label="Book on WhatsApp"
    >
      <WhatsAppIcon />
    </WaLink>
  );
}
