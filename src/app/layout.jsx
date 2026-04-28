import './globals.css'
import { GoogleTagManager } from '@next/third-parties/google'
import CustomCursor from '@/components/ui/CustomCursor'
import ChatBot from '@/components/ui/ChatBot'
import MegaNav from '@/components/layout/MegaNav'
import Footer from '@/components/layout/Footer'
import ThemeProvider from '@/components/providers/ThemeProvider'
import ScrollToTop from '@/components/ui/ScrollToTop'

export const metadata = {
  metadataBase: new URL('https://www.ctiddp.com/'),
  title: {
    default: 'CTIDDP - China to India DDP Shipping Specialists',
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
  authors: [{ name: 'CTIDDP', url: 'https://www.ctiddp.com/' }],
  creator: 'CTIDDP',
  publisher: 'CTIDDP',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.ctiddp.com/',
    siteName: 'CTIDDP',
    title: 'CTIDDP - China to India DDP Shipping Specialists',
    description:
      'End-to-end China to India DDP shipping. Sea & air freight, customs clearance, last-mile PAN-India. All duties pre-paid. Zero surprises.',
    images: [
      {
        url: 'https://www.ctiddp.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CTIDDP - China to India DDP Shipping',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CTIDDP - China to India DDP Shipping',
    description: 'End-to-end DDP freight. All duties pre-paid. Zero surprises.',
    images: ['https://www.ctiddp.com/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>

        {/* GTM injects both the <head> script and <body> noscript automatically */}
        <GoogleTagManager gtmId="GTM-MB6KMT4N" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://www.ctiddp.com/#organization',
                  name: 'CTIDDP',
                  url: 'https://www.ctiddp.com/',
                  description: 'Cross Border Trade International DDP Specialists',
                  contactPoint: [
                    {
                      '@type': 'ContactPoint',
                      contactType: 'customer service',
                      availableLanguage: ['English', 'Hindi', 'Telugu', 'Chinese'],
                    },
                  ],
                  address: [
                    {
                      '@type': 'PostalAddress',
                      addressLocality: 'Guangzhou',
                      addressCountry: 'CN',
                    },
                    {
                      '@type': 'PostalAddress',
                      addressLocality: 'Visakhapatnam',
                      addressCountry: 'IN',
                    },
                  ],
                  sameAs: ['https://wa.me/918790013772', 'https://wa.me/8618818749844'],
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://www.ctiddp.com/#website',
                  url: 'https://www.ctiddp.com/',
                  name: 'CTIDDP',
                  publisher: {
                    '@id': 'https://www.ctiddp.com/#organization',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MB6KMT4N"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <ThemeProvider>
          <CustomCursor />
          <MegaNav />
          {children}
          <ChatBot />
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}