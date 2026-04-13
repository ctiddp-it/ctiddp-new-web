import './globals.css'
import { Playfair_Display, Outfit } from 'next/font/google'
import CustomCursor from '@/components/ui/CustomCursor'
import ChatBot from '@/components/ui/ChatBot'
import MegaNav from '@/components/layout/MegaNav'
import Footer from '@/components/layout/Footer'
import ThemeProvider from '@/components/providers/ThemeProvider'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair', 
  display: 'swap',
})
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://ctiddp.com'),
  title: {
    default: 'CTIDDP — China to India DDP Shipping Specialists',
    template: '%s | CTIDDP',
  },
  description:
    'End-to-end China to India DDP shipping with pre-paid customs duties. Sea & air freight, QC, consolidation, Canton Fair support, and last-mile PAN-India delivery. Zero hidden charges.',
  keywords: [
    'China India DDP shipping',
    'DDP freight forwarder India',
    'China to India customs clearance',
    'BCD IGST import duties India',
    'Canton Fair DDP shipping',
    'China India import freight',
    'DDP logistics India',
    'LCL sea freight China India',
  ],
  authors: [{ name: 'CTIDDP', url: 'https://ctiddp.com' }],
  creator: 'CTIDDP',
  publisher: 'CTIDDP',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://ctiddp.com',
    siteName: 'CTIDDP',
    title: 'CTIDDP — China to India DDP Shipping Specialists',
    description:
      'End-to-end China to India DDP shipping. Sea & air freight, customs clearance, last-mile PAN-India. All duties pre-paid. Zero surprises.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'CTIDDP — China to India DDP Shipping' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CTIDDP — China to India DDP Shipping',
    description: 'End-to-end DDP freight. All duties pre-paid. Zero surprises.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://ctiddp.com',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    // google: 'your-google-verification-code',
    // bing: 'your-bing-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth" className={`${playfair.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'CTIDDP',
              url: 'https://ctiddp.com',
              logo: 'https://ctiddp.com/logo.png',
              description: 'China to India DDP Shipping Specialists',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                availableLanguage: ['English', 'Hindi', 'Telugu', 'Chinese'],
              },
              address: [
                { '@type': 'PostalAddress', addressLocality: 'Guangzhou', addressCountry: 'CN' },
                { '@type': 'PostalAddress', addressLocality: 'Visakhapatnam', addressCountry: 'IN' },
              ],
              sameAs: ['https://wa.me/your-number'],
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <CustomCursor />
          <MegaNav />
          {children}
          <ChatBot />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}