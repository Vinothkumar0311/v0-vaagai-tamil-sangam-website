import type { Metadata, Viewport } from "next"
import { Noto_Sans_Tamil } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

const notoSansTamil = Noto_Sans_Tamil({ subsets: ["tamil"] })

export const metadata: Metadata = {
  title: "வாகை தமிழ்ச்சங்கம் - Vaagai Tamilsangam",
  description:
    "வாகை தமிழ்ச்சங்கம் - Tamil cultural and linguistic organization dedicated to preserving and promoting Tamil language, literature, and cultural heritage.",
  keywords:
    "Tamil, Tamilsangam, Tamil language, Tamil culture, Tamil literature",
  authors: [{ name: "Vaagai Tamilsangam" }],
  openGraph: {
    title: "வாகை தமிழ்ச்சங்கம் - Vaagai Tamilsangam",
    description: "Tamil cultural and linguistic organization",
    type: "website",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#1B5E20",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ta" className="bg-background scroll-smooth">
      <body
        className={`${notoSansTamil.className} min-h-screen flex flex-col bg-background text-text-primary antialiased`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
