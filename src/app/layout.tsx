// non-relatives
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import ":/styles/globals.css";
import { cn } from ":/lib/utils";
import ThemeProvider from ":/components/providers/ThemeProvider";
import { DesktopNav } from ":/components/navigation/desktopNav/DesktopNav";
import FooterMenu from ":/components/footer/footerMenu/FooterMenu";
import Countdown from ":/components/countdown/Countdown/Countdown";

export const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fællestival App",
  description:
    "Fællestival er en frivilligforening som engagerer medlemmer i events gennem hele året, med henblik på afholdelse af den årlige medlemsfestival i uge 29.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={false}>
      <body
        className={cn(
          "w-full h-screen flex flex-col bg-background font-sans antialiased z-0",
          rubik.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <DesktopNav />
          <div className=" mt-20 mb-auto min-w-full">
            {/* <Countdown /> */}
            {children}
            <Analytics />
          </div>
          <div className="mt-auto sticky bottom-0.5 bg-bacground">
            <FooterMenu />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
