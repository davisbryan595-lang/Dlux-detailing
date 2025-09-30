import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "D-LUX Detailing | Albuquerque, NM",
  description:
    "Mobile luxury car detailing in Albuquerque, NM — exterior & interior cleaning, full detailing, ceramic coating, paint correction, and headlight restoration.",
  generator: "v0.app",
  openGraph: {
    title: "D-LUX Detailing | Albuquerque, NM",
    description: "Where luxury meets precision — cinematic mobile detailing to your door.",
    url: "https://dlux.example.com",
    siteName: "D-LUX Detailing",
    images: [{ url: "/img/hero-large.jpg", width: 1920, height: 1080 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "D-LUX Detailing",
    description: "Experience the luxury your car deserves — cinematic detailing, mobile to your door.",
    images: ["/img/hero-large.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`antialiased scroll-smooth ${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans bg-background text-foreground">
        {/* Skip to content link for accessibility */}
        <Suspense fallback={null}>
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-primary text-primary-foreground px-3 py-2 rounded-md"
          >
            Skip to content
          </a>
          {children}
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
