import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { CartProvider } from "@/components/cart-provider"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "KAZA – Timeless 925 Silver Jewellery | Rings, Chains & Pendants",
  description:
    "Discover KAZA's collection of pure 925 sterling silver jewellery. Shop minimalist rings, delicate chains, elegant pendants, and custom name jewellery. Handcrafted for the modern you.",
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
  openGraph: {
    title: "KAZA – Timeless 925 Silver Jewellery",
    description:
      "Pure 925 sterling silver jewellery crafted for the modern you. Discover minimal rings, chains, pendants, and custom designs.",
    type: "website",
    url: "https://kaza-jewellery.com",
    images: [
      {
        url: "/placeholder.svg?height=1200&width=1200",
        width: 1200,
        height: 1200,
        alt: "KAZA Silver Jewellery Collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KAZA – Timeless 925 Silver Jewellery",
    description: "Pure 925 sterling silver jewellery crafted for the modern you.",
    images: ["/placeholder.svg?height=1200&width=1200"],
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
    canonical: "https://kaza-jewellery.com",
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
          <CartProvider>
            {children}
            <Analytics />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
