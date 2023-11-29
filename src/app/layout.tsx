// non-relatives
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
// import {
//   RegisterLink,
//   LoginLink,
// } from "@kinde-oss/kinde-auth-nextjs/components";
// relatives
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
          "w-full min-h-screen bg-background font-sans antialiased z-0",
          rubik.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <DesktopNav />
          <Countdown />
          <div className=" mt-[4.5rem] mb-auto min-w-full">
            {children}
            <Analytics />
          </div>
          <FooterMenu />
        </ThemeProvider>
      </body>
    </html>
  );
}
