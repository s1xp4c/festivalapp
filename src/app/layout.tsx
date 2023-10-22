// non-relatives
import type { Metadata } from 'next'
import { Inter as FontSans } from "next/font/google"

// relatives
import ':/styles/globals.css'
import { cn } from ':/lib/utils'
 
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'Fællestival App',
  description: 'Fællestival er en frivilligforening som engagerer medlemmer i events gennem hele året, med henblik på afholdelse af den årlige medlemsfestival i uge 29.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
