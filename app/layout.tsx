import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { CartProvider } from "@/components/cart-provider"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Numaans Silver Shop",
  description:
    "Discover Numaans Silver Shop's collection of pure 925 sterling silver jewellery. Shop minimalist rings, delicate chains, elegant pendants, and custom name jewellery. Handcrafted for the modern you.",
  keywords: [
    "925 silver jewellery",
    "sterling silver rings",
    "silver chains",
    "silver pendants",
    "custom name jewellery",
    "minimalist jewellery",
    "handcrafted silver",
  ],
  generator: "v0.app",
  icons: {
    icon: "/site-logo.png",
    shortcut: "/site-logo.png",
    apple: "/site-logo.png",
  },
  openGraph: {
    title: "Numaans Silver Shop – Timeless 925 Silver Jewellery",
    description:
      "Pure 925 sterling silver jewellery crafted for the modern you. Discover minimal rings, chains, pendants, and custom designs.",
    type: "website",
    url: "https://numaanssilvershop.com",
    images: [
      {
        url: "/site-logo.png",
        width: 1200,
        height: 1200,
        alt: "Numaans Silver Shop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Numaans Silver Shop – Timeless 925 Silver Jewellery",
    description: "Pure 925 sterling silver jewellery crafted for the modern you.",
    images: ["/site-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://numaanssilvershop.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Global providers */}
          {/* CartProvider manages cart state and persistence */}
          <CartProvider children={undefined}>
            {children}
            <Analytics />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
