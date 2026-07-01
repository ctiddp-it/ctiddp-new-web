import './globals.css'
import { Montserrat, Inter } from 'next/font/google'
import { GoogleTagManager } from '@next/third-parties/google'
import ChatBot from '@/components/ui/ChatBot'
import MegaNav from '@/components/layout/MegaNav'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/ui/ScrollToTop'
import ViewContentTracker from '@/components/blog/ViewContentTracker'
import Script from 'next/script'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

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
        url: 'https://www.ctiddp.com/images/CTIDDP-LOGO Social Media.png',
        width: 1200,
        height: 630,
        alt: 'CTIDDP - China to India DDP Shipping',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CTIDDP - China to India DDP Shipping',
    description:
      'End-to-end DDP freight. All duties pre-paid. Zero surprises.',
    images: ['https://www.ctiddp.com/images/CTIDDP-LOGO Social Media.png'],
  },
  icons: {
    icon: '/images/CTIDDP-LOGO Social Media.png',
    shortcut: '/images/CTIDDP-LOGO Social Media.png',
    apple: '/images/CTIDDP-LOGO Social Media.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`} data-scroll-behavior="smooth">
      <head>

        {/* Google AdSense */}
        <meta
          name="google-adsense-account"
          content="ca-pub-9117327206280413"
        />

        {/* GTM */}
        <GoogleTagManager gtmId="GTM-MB6KMT4N" />

        {/* Meta Pixel Code */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
        >
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;
            n.push=n;
            n.loaded=!0;
            n.version='2.0';
            n.queue=[];
            t=b.createElement(e);
            t.async=!0;
            t.src=v;
            s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}
            (window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '1373330248175866');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
        >
                {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);
            t.async=1;
            t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];
            y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "wrf3e5yjsp");
        `}
        </Script>

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
                  logo: 'https://www.ctiddp.com/images/CTIDDP-LOGO Social Media.png',
                  description:
                    'Cross Border Trade International DDP Specialists',
                  contactPoint: [
                    {
                      '@type': 'ContactPoint',
                      contactType: 'customer service',
                      availableLanguage: [
                        'English',
                        'Hindi',
                        'Telugu',
                        'Chinese',
                      ],
                    },
                  ],
                  address: [
                    {
                      '@type': 'PostalAddress',
                      addressLocality: 'Visakhapatnam',
                      addressCountry: 'IN',
                    },
                  ],
                  sameAs: [
                    'https://wa.me/918790018787',
                    'https://wa.me/8618818749844',
                  ],
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
        {/* Meta Pixel NoScript */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1373330248175866&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* GTM NoScript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MB6KMT4N"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <MegaNav />
        <ViewContentTracker />
        {children}
        <ChatBot />
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}