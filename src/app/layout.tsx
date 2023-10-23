// non-relatives
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

// relatives
import ":/styles/globals.css";
import { cn } from ":/lib/utils";
import ThemeProvider from "../components/providers/ThemeProvider";
import { DesktopNav } from ":/components/navigation/desktopNav/DesktopNav";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
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
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={cn(
          "flex items-center justify-center h-full bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="fixed top-0 z-50">
            <DesktopNav />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
