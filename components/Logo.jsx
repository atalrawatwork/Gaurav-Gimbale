import { SITE } from "@/lib/data";

/**
 * "Gimbal Photography" brand logo: a camera-aperture / gimbal ring mark + wordmark.
 * Pure SVG + text → crisp at any size, no image file needed.
 */
export function LogoMark({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <circle cx="32" cy="32" r="29" stroke="#d4a85c" strokeWidth="2" />
      <circle cx="32" cy="32" r="20" stroke="#e8aaa3" strokeWidth="1.5" strokeDasharray="3 4" />
      <circle cx="32" cy="32" r="9" fill="#d4a85c" />
      <circle cx="32" cy="32" r="3.5" fill="#0b0908" />
      <path d="M32 3v10M32 51v10M3 32h10M51 32h10" stroke="#d4a85c" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function Logo({ className = "" }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark />
      <span className="leading-none">
        <span className="block font-display text-xl font-semibold tracking-wide text-cream">
          GIMBAL <span className="text-gold-400">PHOTOGRAPHY</span>
        </span>
        <span className="mt-1 block text-[10px] uppercase tracking-widest2 text-cream/60">{SITE.city} · Gaurav Gimbale</span>
      </span>
    </span>
  );
}
