export default function manifest() {
  return {
    name: "Gaurav Gimbal – Photography & Reels, Jaipur",
    short_name: "Gaurav Gimbal",
    description: "Book reels and photo shoot slots in Jaipur.",
    start_url: "/",
    display: "standalone",
    background_color: "#fcfbf9",
    theme_color: "#17171a",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
