"use client";
import { useEffect, useSyncExternalStore } from "react";
import { SITE, SLOTS, SHOOTS, inr } from "./site";

const DEFAULT = Object.freeze({ slot: "sunrise", hours: 0, name: "", date: "", place: "" });
let state = DEFAULT;
let loaded = false;
const listeners = new Set();
const KEY = "gg-booking";

const clampHours = (v) => {
  const n = parseInt(v, 10);
  return Number.isNaN(n) ? 0 : Math.max(0, Math.min(12, n));
};

export const isSlot = (v) => typeof v === "string" && Object.hasOwn(SLOTS, v);

const emit = () => listeners.forEach((l) => l());

function persist() {
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
}

function loadOnce() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;
  let next = { ...DEFAULT };
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) || "{}");
    if (isSlot(saved.slot)) next.slot = saved.slot;
    next.hours = clampHours(saved.hours);
    next.name = saved.name || "";
    next.date = saved.date || "";
    next.place = saved.place || "";
  } catch (e) {}
  const q = new URLSearchParams(window.location.search);
  if (isSlot(q.get("slot"))) next.slot = q.get("slot");
  if (q.has("hours")) next.hours = clampHours(q.get("hours"));
  state = next;
  emit();
}

export function setBooking(patch) {
  const next = { ...state, ...patch };
  if ("hours" in patch) next.hours = clampHours(patch.hours);
  state = next;
  persist();
  emit();
}

export function useBooking() {
  useEffect(loadOnce, []);
  return useSyncExternalStore(
    (cb) => { listeners.add(cb); return () => listeners.delete(cb); },
    () => state,
    () => DEFAULT
  );
}

export function calcBill(s) {
  const slot = SLOTS[s.slot];
  const hours = slot.extra ? s.hours : 0;
  const extra = hours * SITE.extraPerHour;
  return { slot, hours, extra, total: slot.base + extra };
}

export function buildMessage(s, withDetails = true) {
  const b = calcBill(s);
  const L = ["Hello Gaurav 👋", "I would like to book a shoot slot.", ""];
  L.push(`📸 Slot: ${b.slot.name} (${b.slot.time})`);
  if (b.slot.extra) {
    L.push(`⏱️ Extra hours: ${b.hours}${b.hours ? ` (after ${b.slot.after} @ ${inr(SITE.extraPerHour)}/hr)` : ""}`);
  } else {
    L.push("⏱️ Extra hours: Flat package, no extra charge");
  }
  L.push(`💰 Estimated total: ${inr(b.total)}`);
  if (withDetails) {
    if (s.date) L.push(`📅 Date: ${s.date}`);
    if (s.place) L.push(`📍 Preferred location: ${s.place}`);
    if (s.name) L.push(`👤 Name: ${s.name}`);
  }
  L.push("", "Please confirm availability. Thank you!");
  return L.join("\n");
}

export function buildServiceMessage(id) {
  const sh = SHOOTS.find((x) => x.id === id);
  if (!sh) return "Hello Gaurav 👋\nI would like to book a shoot.";
  return [
    "Hello Gaurav 👋",
    "I would like to book a shoot.",
    "",
    `📸 Package: ${sh.name} (${sh.tag})`,
    `💰 Price: ${inr(sh.price)} ${sh.unit}`,
    "",
    "Please confirm availability. Thank you!",
  ].join("\n");
}

export const waLink = (text) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
