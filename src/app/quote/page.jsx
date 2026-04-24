import GetQuoteClient from './GetQuoteClient'

export const metadata = {
  title: 'Get DDP Shipping Quote | Global Logistics Experts',
  description:
    'Request a fast DDP shipping quote for China imports and global shipping with full cost transparency.',
  keywords: [
    'get shipping quote China to India',
    'DDP shipping cost China India',
    'import cost China to India',
    'freight quote India',
    'shipping price China India',
    'door to door shipping cost India',
    'international freight quote',
    'cargo shipping quote India',
    'customs clearance cost India',
    'China import cost breakdown',
    'logistics pricing India',
    'bulk shipping quotation',
    'import duty estimate India',
    'shipping rate calculator India',
    'China to India shipping charges',
  ],
  openGraph: {
    title: 'Get DDP Shipping Quote | Global Logistics Experts',
    description:
      'Request a fast DDP shipping quote for China imports and global shipping with full cost transparency.',
    url: 'https://www.ctiddp.com/quote/',
    siteName: 'CTIDDP',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.ctiddp.com/quote',
  },
};

export default function GetQuotePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                '@id': 'https://www.ctiddp.com/quote/#webpage',
                url: 'https://www.ctiddp.com/quote/',
                name: 'Get DDP Shipping Quote | Global Logistics Experts',
                description:
                  'Request a fast DDP shipping quote for China imports and global shipping with full cost transparency.',
                isPartOf: {
                  '@id': 'https://www.ctiddp.com/#website',
                },
              },
              {
                '@type': 'Service',
                '@id': 'https://www.ctiddp.com/quote/#service',
                name: 'DDP Shipping Quote',
                provider: {
                  '@type': 'Organization',
                  name: 'CTIDDP',
                  url: 'https://www.ctiddp.com/',
                },
                serviceType: 'Freight Forwarding',
                areaServed: {
                  '@type': 'Country',
                  name: 'India',
                },
                url: 'https://www.ctiddp.com/quote/',
              },
              {
                '@type': 'BreadcrumbList',
                '@id': 'https://www.ctiddp.com/quote/#breadcrumb',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://www.ctiddp.com/',
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Get a Quote',
                    item: 'https://www.ctiddp.com/quote/',
                  },
                ],
              },
            ],
          }),
        }}
      />
      <GetQuoteClient />
    </>
  )
}
