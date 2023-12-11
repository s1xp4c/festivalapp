// non-relatives
import { Rubik } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Viewport } from "next";

// relatives
import ":/styles/globals.css";
import { cn } from ":/lib/utils";
import ThemeProvider from ":/components/providers/ThemeProvider";
import { DesktopNav } from ":/components/navigation/desktopNav/DesktopNav";
import FooterMenu from ":/components/footer/footerMenu/FooterMenu";
import MaxWidthWrapper from ":/components/ui/MaxWidthWrapper";
import MobileNav from ":/components/navigation/mobileNav/MobileNav";

export const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  colorScheme: "dark",
};

// export const metadata: Metadata = {
//   title: {
//     template: "%s | Fællestival",
//     default: "Fællestival",
//   },
//   generator: "Next.js",
//   applicationName: "FællesAppen",
//   referrer: "origin-when-cross-origin",
//   robots: {
//     index: false,
//     follow: true,
//     nocache: true,
//     googleBot: {
//       index: true,
//       follow: false,
//       noimageindex: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   icons: {
//     icon: [
//       { url: "/favicon/icon1.png" },
//       new URL("/favicon/icon1.png", "https://fallestival.lol"),
//     ],
//     shortcut: ["/favicon/icon1.png"],
//     apple: [
//       { url: "/favicon/icon2.png" },
//       { url: "/favicon/apple-icon.png", sizes: "180x180", type: "image/png" },
//     ],
//     other: [
//       {
//         rel: "192x192",
//         url: "/favicon/icon3.png",
//       },
//       {
//         rel: "256x256",
//         url: "/favicon/icon4.png",
//       },
//     ],
//   },
//   alternates: {
//     canonical: "/",
//     languages: {
//       "da-DK": "/da-DK",
//       "de-DE": "/de-DE",
//       "en-US": "/en-US",
//     },
//   },
//   keywords: [
//     "Festival, Frivillig, Kærlighed, Hyggefest, Fælleskab, Fællestival, Fest, Friluftsliv, Musik, Events, Fyn, Sydfyn, Stenstrup, Svendborg, Forening, Foreningsliv, Almennyttig, Vækstlaget, Odense, Ringe, Rudme, Kværndrup, festivaler, Festivalforening, musikevent, billig ferie, ferie, uge 29",
//   ],
//   creator: "Morten Six",
//   description:
//     "Fællestival appen er en Open Source Festival App udviklet til Fællaz (Fællestival medlemmer) for at gøre det nemmere og sjovere at være på festival og arbejde i foreningsteams og grupper sammen. \n\nEn App fuld af vigtig info, hvor brugerne interaktivt kan influere både på indholdet af Appen, men oxo foreningen og festivalen.",
//   openGraph: {
//     title: "Fællestival",
//     description:
//       "Fællestival appen er en Open Source Festival App udviklet til Fællaz",
//     url: "https://faellestival.lol/",
//     siteName: "Fællestival",
//     images: ["|/hero/1.jpg"],
//     type: "website",
//   },
//   twitter: {
//     title: "Fællestival",
//     description:
//       "Fællestival appen er en Open Source Festival App udviklet til Fællaz",
//     images: ["|/hero/1.jpg"],
//   },
//   formatDetection: {
//     email: true,
//     address: false,
//     telephone: true,
//   },
//   metadataBase: new URL(
//     process.env.NEXT_PUBLIC_SITE_URL || "https://www.fallestival.lol"
//   ),
// };

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
          {/* Desktop Navigation */}
          <div className="hidden sm:block">
            <DesktopNav />
          </div>

          {/* Mobile Navigation */}
          <div className="block sm:hidden">
            <MobileNav />
          </div>
          <MaxWidthWrapper className="mt-1 mb-auto min-w-full">
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
