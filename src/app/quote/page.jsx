import GetQuoteClient from './GetQuoteClient'

export const metadata = {
  title: 'Get a DDP Quote — China to India Shipping',
  description:
    'Request a full DDP quote for China to India shipping. Includes BCD + IGST + SWS pre-calculation, freight, insurance, and last-mile delivery. Response within 2 hours.',
  alternates: { canonical: 'https://ctiddp.com/quote' },
  openGraph: {
    title: 'Get a DDP Shipping Quote — CTIDDP',
    description: 'Full DDP quote with duty pre-calculation. All charges included. 2-hour response.',
    url: 'https://ctiddp.com/quote',
  },
}

export default function GetQuotePage() {
  return (
    <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@graph": [{"@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://ctiddp.com"}, {"@type": "ListItem", "position": 2, "name": "Get a Quote", "item": "https://ctiddp.com/quote"}]}]}) }} />
      <GetQuoteClient />
    </>
  )
}
