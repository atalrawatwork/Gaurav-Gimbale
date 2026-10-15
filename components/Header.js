"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoMark, WhatsAppIcon } from "./Icons";
import WaLink from "./WaLink";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Packages & Pricing" },
  { href: "/calculator", label: "Cost Calculator" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="wrap nav">
        <Link href="/" className="brand" aria-label="Gaurav Gimbal – home" onClick={() => setOpen(false)}>
          <LogoMark />
          <span>
            <b>Gaurav Gimbal</b>
            <small>Photo · Reels · Jaipur</small>
          </span>
        </Link>
        <button className="burger" aria-label="Menu" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
        <nav id="menu" className={`menu${open ? " open" : ""}`} aria-label="Main">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} aria-current={path === l.href ? "page" : undefined} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <WaLink className="btn btn-wa">
            <WhatsAppIcon /> Book Slot
          </WaLink>
        </nav>
      </div>
    </header>
  );
}
