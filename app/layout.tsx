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
  title: {
    default: 'வாகை தமிழ்ச்சங்கம் | Vaagai Tamilsangam',
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
    title: 'வாகை தமிழ்ச்சங்கம் | Vaagai Tamilsangam',
    description: 'தமிழ் மொழி, இலக்கியம், பண்பாடு வளர்ச்சிக்கான அமைப்பு'
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0F766E',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ta" className={`${geist.variable} ${geistMono.variable} ${notoSansTamil.variable} h-full`}>
      <body className="font-sans antialiased bg-background text-foreground h-full">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
