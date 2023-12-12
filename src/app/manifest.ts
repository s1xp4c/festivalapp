import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Fællestival",
    start_url: "https://faellestival.lol/",
    short_name: "Fællestival",
    display_override: ["fullscreen", "minimal-ui"],
    display: "standalone",
    background_color: "#1e1b4b",
    theme_color: "#4c1d95",
    icons: [
      {
        src: "/icon1.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/icon2.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/icon3.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon4.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "/icon5.png",
        sizes: "270x270",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/icon6.svg",
        sizes: "512x512",
        type: "image/svg",
        purpose: "maskable",
      },
      {
        src: "/icon7.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    description:
      "Fællestival er en fynsk frivillig festivalforening beliggende lidt udenfor Stenstrup, Svendborg på Sydfyn. Den årlige festival ligger altid i uge 29, og billetter og medlemskab kan købes i App'en hvor medlemmer yderligere kan benytte sig af Appens features for en lækrere festivaloplevelse.",
  };
}
