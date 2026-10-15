"use client";
import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open ? "border-black/10 bg-paper/80 backdrop-blur-xl" : "border-transparent bg-transparent"
      }`}
    >
      <div className="wrap flex h-[72px] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 no-underline" aria-label="Gaurav Gimbal – home" onClick={() => setOpen(false)}>
          <LogoMark className="size-9" />
          <span className="leading-tight">
            <b className="block font-display text-[1.15rem] font-semibold tracking-tight">Gaurav Gimbal</b>
            <small className="block text-[10px] uppercase tracking-[0.28em] text-mute">Photo · Reels · Jaipur</small>
          </span>
        </Link>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full border border-black/15 text-cream md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen(!open)}
        >
          <span aria-hidden="true" className="relative block h-3 w-5">
            <span className={`absolute left-0 h-[1.5px] w-5 bg-current transition-all ${open ? "top-1/2 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 h-[1.5px] w-5 bg-current transition-all ${open ? "top-1/2 -rotate-45" : "bottom-0"}`} />
          </span>
        </button>

        <nav
          id="menu"
          aria-label="Main"
          className={`${
            open ? "flex" : "hidden"
          } absolute inset-x-0 top-[72px] flex-col gap-1 border-b border-black/10 bg-paper/95 px-5 pb-6 pt-3 backdrop-blur-xl md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:backdrop-blur-none`}
        >
          {LINKS.map((l) => {
            const active = path === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`rounded-lg py-3 text-[15px] font-medium no-underline transition-colors md:relative md:py-1.5 ${
                  active ? "text-gold-300" : "text-cream/70 hover:text-cream"
                }`}
              >
                {l.label}
                {active && <span aria-hidden="true" className="absolute inset-x-0 -bottom-0.5 hidden h-px bg-gold-400 md:block" />}
              </Link>
            );
          })}
          <WaLink className="btn btn-wa mt-3 md:mt-0 md:px-5 md:py-3">
            <WhatsAppIcon /> Book Slot
          </WaLink>
        </nav>
      </div>
    </header>
  );
}
