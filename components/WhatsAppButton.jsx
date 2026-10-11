import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/data";

/** Floating WhatsApp button, always visible bottom-right. */
export default function WhatsAppButton() {
  return (
    <a
      href={SITE.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Gaurav on WhatsApp"
      className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition hover:scale-110"
    >
      <MessageCircle size={28} />
    </a>
  );
}
