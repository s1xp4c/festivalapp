// non-relatives

import { Rubik } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

// relatives
import ":/styles/globals.css";
import { cn } from ":/lib/utils";
import ThemeProvider from ":/components/providers/ThemeProvider";
import { DesktopNav } from ":/components/navigation/desktopNav/DesktopNav";
import FooterMenu from ":/components/footer/footerMenu/FooterMenu";
import manifest from ":/constants/manifest.json";
import MaxWidthWrapper from ":/components/ui/MaxWidthWrapper";

export const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://faellestival.lol"),
  alternates: {
    canonical: "/",
    languages: {
      "da-DK": "/da-DK",
      "de-DE": "/de-DE",
      "en-US": "/en-US",
    },
  },
  openGraph: manifest.openGraph,
  title: manifest.title,
  generator: manifest.generator,
  applicationName: manifest.applicationName,
  keywords: manifest.keywords,
  description: manifest.description,
  creator: manifest.creator,
  author: manifest.author,
  formatDetection: manifest.formatDetection,
  display: manifest.display,
  displayOverride: manifest.display_override,
  visualViewport: manifest.viewport,
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
