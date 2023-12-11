// non-relatives

import { Rubik } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

// relatives
import ":/styles/globals.css";
import { cn } from ":/lib/utils";
import ThemeProvider from ":/components/providers/ThemeProvider";
import { DesktopNav } from ":/components/navigation/desktopNav/DesktopNav";
import FooterMenu from ":/components/footer/footerMenu/FooterMenu";
import MaxWidthWrapper from ":/components/ui/MaxWidthWrapper";

export const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Fællestival",
  url: "/",
  start_url: "/",
  short_name: "Fællestival",
  generator: "Next.js",
  applicationName: "FællesAppen",
  display_override: ["fullscreen", "minimal-ui"],
  display: "standalone",
  viewportExport: "width=device-width, initial-scale=1.0",
  background_color: "#FFFFFF",
  theme_color: "#FFFFFF",
  alternates: {
    canonical: "/",
    languages: {
      "da-DK": "/da-DK",
      "de-DE": "/de-DE",
      "en-US": "/en-US",
    },
  },
  icons: [
    {
      src: "|/favicons/icon1.png",
      sizes: "16x16",
      type: "image/png",
    },
    {
      src: "|/favicons/icon2.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      src: "|/favicons/icon3.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "|/favicons/icon4.png",
      sizes: "256x256",
      type: "image/png",
    },
    {
      src: "|/favicons/icon5.png",
      sizes: "270x270",
      type: "image/png",
    },
    {
      src: "|/favicons/apple-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
    {
      src: "|/favicons/icon6.svg",
      sizes: "512x512",
      type: "image/svg",
    },
  ],
  keywords: [
    "Festival, Frivillig, Kærlighed, Hyggefest, Fælleskab, Fællestival, Fest, Friluftsliv, Musik, Events, Fyn, Sydfyn, Stenstrup, Svendborg, Forening, Foreningsliv, Almennyttig, Vækstlaget, Odense, Ringe, Rudme, Kværndrup, festivaler, Festivalforening, musikevent, billig ferie, ferie, uge 29",
  ],
  author: {
    name: "Morten Bo Sixhøj",
    url: "https://block-folio.netlify.app/",
  },
  creator: "Morten Six",
  description:
    "Fællestival appen er en Open Source Festival App udviklet til Fællaz (Fællestival medlemmer) for at gøre det nemmere og sjovere at være på festival og arbejde i foreningsteams og grupper sammen. \n\nEn App fuld af vigtig info, hvor brugerne interaktivt kan influere både på indholdet af Appen, men oxo foreningen og festivalen.",
  related_applications: {
    platform: "None",
    url: "https://play.google.com/store/apps/",
  },
  openGraph: {
    title: "Fællestival",
    description:
      "Fællestival appen er en Open Source Festival App udviklet til Fællaz",
    url: "https://faellestival.lol/",
    siteName: "Fællestival",
    images: ["|/hero/1.jpg"],
    size: "1024x675",
    alt: "Fællestival Scenen med gæster under avikling",
    contentType: "image",
    type: "website",
  },
  twitter: {
    title: "Fællestival",
    description:
      "Fællestival appen er en Open Source Festival App udviklet til Fællaz",
    url: "https://faellestival.lol/",
    siteName: "Fællestival",
    images: ["|/hero/1.jpg"],
    size: "1024x675",
    alt: "Fællestival Scenen med gæster under avikling",
    contentType: "image",
    type: "website",
  },
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.fallestival.lol"
  ),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da">
      <body
        className={cn(
          "w-full min-h-screen flex flex-col bg-background font-sans antialiased",
          rubik.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <DesktopNav />
          <MaxWidthWrapper className="mt-24 mb-auto min-w-full">
            {children}
            <Analytics />
          </MaxWidthWrapper>
          <div className="fixed bottom-0 w-full bg-background z-10">
            <FooterMenu />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
