import { ImageResponse } from "next/og";

export const alt = "Gimbal Photography Jaipur – Gaurav Gimbale";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Auto-generated social share card (WhatsApp / Facebook / Instagram previews).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg,#0b0908,#26211d)",
          color: "#f6efe6",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 12, color: "#d4a85c" }}>JAIPUR</div>
        <div style={{ fontSize: 96, marginTop: 16, fontFamily: "serif" }}>Gimbal Photography</div>
        <div style={{ fontSize: 34, marginTop: 20, color: "#e8aaa3" }}>Gaurav Gimbale · Pre-Wedding · Wedding · Tourist</div>
      </div>
    ),
    size
  );
}
