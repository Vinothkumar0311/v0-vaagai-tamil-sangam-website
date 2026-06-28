import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Noto_Sans_Tamil } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist"
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono"
})

const notoSansTamil = Noto_Sans_Tamil({
  subsets: ["tamil"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-tamil",
  display: "swap"
})

export const metadata: Metadata = {
  metadataBase: new URL('https://vaagaitamilsangam.com'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'வாகை தமிழ்ச்சங்கம் | Vaagai Tamilsangam - Tamil Culture',
    template: '%s | வாகை தமிழ்ச்சங்கம்'
  },
  description: 'தமிழ் மொழி, இலக்கியம், பண்பாடு ஆகியவை சார்ந்த அறிவை இக்கால அறிவியல் சிந்தனை & திறன்களுடன் அனைத்து தரப்பினரிடமும் ஊக்குவித்தலும், வளர்த்தலும், மேம்படுத்துதலும்.',
  keywords: ['தமிழ்', 'தமிழ்ச்சங்கம்', 'வாகை', 'Tamil', 'Vaagai', 'Tamil Sangam', 'Tamil Culture', 'Tamil Literature'],
  authors: [{ name: 'Vaagai Tamilsangam' }],
  creator: 'Vaagai Tamilsangam',
  publisher: 'Vaagai Tamilsangam',
  openGraph: {
    type: 'website',
    locale: 'ta_IN',
    alternateLocale: 'en_IN',
    siteName: 'வாகை தமிழ்ச்சங்கம்',
    title: 'வாகை தமிழ்ச்சங்கம் | Vaagai Tamilsangam - Tamil Culture',
    description: 'தமிழ் மொழி, இலக்கியம், பண்பாடு வளர்ச்சிக்கான அமைப்பு'
  },
  icons: {
    icon: '/logo2.svg',
    apple: '/logo2.svg',
  },
}

export const viewport: Viewport = {
  themeColor: '#0F766E',
  width: 'device-width',
  initialScale: 1,
}

import { GitHubPagesRedirect } from '@/components/github-pages-redirect'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Only enable Vercel Analytics if we are actually on Vercel
  const isVercel = process.env.VERCEL === '1' || process.env.NEXT_PUBLIC_VERCEL_ENV !== undefined

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://vaagaitamilsangam.com/#organization",
    "name": "வாகை தமிழ்ச்சங்கம்",
    "alternateName": "Vaagai Tamilsangam",
    "url": "https://vaagaitamilsangam.com",
    "logo": "https://vaagaitamilsangam.com/logo2.svg",
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61556917486232&mibextid=JRoKGi",
      "https://www.instagram.com/vaagaitamilsangam?igsh=MWI3MjRvMnpmcDJ1Yw%3D%3D",
      "https://www.linkedin.com/in/%E0%AE%B5%E0%AE%BE%E0%AE%95%E0%AF%88-%E0%AE%A4%E0%AE%AE%E0%AE%BF%E0%AE%B4%E0%AF%8D%E0%AE%9C%E0%AF%8D%E0%AE%9A%E0%AE%99%E0%AF%8D%E0%AE%95%E0%AE%AE%E0%AF%8D/",
      "https://youtube.com/@vaagaitamilsangam?si=p7zQmgld9STrj3Qt"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-82482-72880",
      "contactType": "customer service",
      "email": "vaagaitamilsangam@gmail.com",
      "areaServed": "IN",
      "availableLanguage": ["ta", "en"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12 / 53 A 1, அத்தனூர் வடக்கு, அத்தனூர்",
      "addressLocality": "நாமக்கல்",
      "addressRegion": "தமிழ்நாடு",
      "postalCode": "636301",
      "addressCountry": "IN"
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://vaagaitamilsangam.com/#website",
    "url": "https://vaagaitamilsangam.com",
    "name": "வாகை தமிழ்ச்சங்கம் | Vaagai Tamilsangam",
    "description": "தமிழ் மொழி, இலக்கியம், பண்பாடு வளர்ச்சிக்கான அமைப்பு",
    "publisher": {
      "@id": "https://vaagaitamilsangam.com/#organization"
    }
  }

  return (
    <html lang="ta" className={`${geist.variable} ${geistMono.variable} ${notoSansTamil.variable} min-h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        <GitHubPagesRedirect />
        {children}
        {process.env.NODE_ENV === 'production' && isVercel && <Analytics />}
      </body>
    </html>
  )
}

