import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/**
 * POST /api/contact
 * Sends the enquiry to your inbox via SMTP (nodemailer).
 * Configure SMTP_* and CONTACT_TO_EMAIL in .env.local (see .env.example).
 */
export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, phone, email, service, message, website } = body || {};

  // Honeypot: bots fill this hidden field, humans don't.
  if (website) return NextResponse.json({ ok: true });

  if (!name?.trim() || !phone?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Please fill in name, phone and message." }, { status: 400 });
  }
  if (email && !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }
  if (message.length > 3000) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_TO_EMAIL) {
    // Not configured yet – the form falls back to WhatsApp on the client.
    return NextResponse.json({ error: "Email service not configured.", fallback: true }, { status: 503 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"Website Enquiry" <${SMTP_USER}>`,
      to: CONTACT_TO_EMAIL,
      replyTo: email || undefined,
      subject: `New enquiry from ${name} – ${service || "General"}`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email || "-"}\nService: ${service || "-"}\n\n${message}`,
      html: `<h2>New website enquiry</h2>
        <p><b>Name:</b> ${esc(name)}<br/><b>Phone:</b> ${esc(phone)}<br/><b>Email:</b> ${esc(email || "-")}<br/><b>Service:</b> ${esc(service || "-")}</p>
        <p>${esc(message).replace(/\n/g, "<br/>")}</p>`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact mail error:", err);
    return NextResponse.json({ error: "Could not send message. Please try WhatsApp." }, { status: 500 });
  }
}
