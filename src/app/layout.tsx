// non-relatives
import { Rubik } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Metadata, Viewport } from "next";

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

export const metadata: Metadata = {
  title: {
    template: "%s | Fællestival",
    default: "Fællestival",
  },
  generator: "Next.js",
  applicationName: "Fællestival",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      "da-DK": "/da-DK",
      "de-DE": "/de-DE",
      "en-US": "/en-US",
    },
  },
  keywords: [
    "Fynsk Festival, Fællestival, Frivillig, Kærlighedsfest, Hyggefest, Fælleskab, Fest, Friluftsliv, Musik, Events, Fyn, Sydfyn, Frivillig Forening, Foreningsliv, Almennyttig forening, Vækstlagsmusik, Festival på fyn, Festivalforening, musikevent fyn, fyn ferie, Juli uge 29",
  ],
  creator: "Morten Six",
  description:
    "Fællestival er en fynsk frivillig festivalforening beliggende lidt udenfor Stenstrup, Svendborg på Sydfyn. Den årlige festival ligger altid i uge 29, og billetter og medlemskab kan købes i App'en hvor medlemmer yderligere kan benytte sig af Appens features for en lækrere festivaloplevelse.",
  openGraph: {
    title: "Fællestival",
    description:
      "Fællestival appen er en Open Source Festival App udviklet til Fællaz",
    url: "https://faellestival.lol/",
    siteName: "Fællestival",
    images: ["|/hero/1.jpg"],
    type: "website",
  },
  twitter: {
    title: "Fællestival",
    description:
      "Fællestival appen er en Open Source Festival App udviklet til Fællaz",
    images: ["|/hero/1.jpg"],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.faellestival.lol"
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
