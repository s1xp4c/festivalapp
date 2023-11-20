// non-relatives
import type { Metadata } from "next";
import { Rubik } from "next/font/google";

// relatives
import ":/styles/globals.css";
import { cn } from ":/lib/utils";
import ThemeProvider from ":/components/providers/ThemeProvider";
import { DesktopNav } from ":/components/navigation/desktopNav/DesktopNav";
import FooterMenu from ":/components/footer/footerMenu/FooterMenu";

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
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={cn(
          "flex items-center justify-center w-full h-full bg-background font-sans antialiased z-0",
          rubik.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <DesktopNav />
          {children}
          <FooterMenu />
        </ThemeProvider>
      </body>
    </html>
  );
}
