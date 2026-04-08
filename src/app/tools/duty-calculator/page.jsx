import DutyCalcClient from './DutyCalcClient'

export const metadata = {
  title: 'India Import Duty Calculator — BCD IGST SWS',
  description:
    'Calculate India import duties instantly. Estimate Basic Customs Duty (BCD), Social Welfare Surcharge (SWS), and IGST on your China imports. Free duty calculator tool.',
  alternates: { canonical: 'https://ctiddp.com/tools/duty-calculator' },
  openGraph: {
    title: 'India Import Duty Calculator — BCD + IGST + SWS',
    description: 'Free tool to estimate BCD, SWS, and IGST on China imports to India. With HS rate reference table.',
    url: 'https://ctiddp.com/tools/duty-calculator',
  },
  keywords: [
    'India import duty calculator',
    'BCD calculator India',
    'IGST import tax India',
    'China India customs duty',
    'SWS surcharge India import',
  ],
}

export default function DutyCalculatorPage() {
  return (
    <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@graph": [{"@context": "https://schema.org", "@type": "WebApplication", "name": "India Import Duty Calculator", "applicationCategory": "FinanceApplication", "description": "Calculate BCD, SWS and IGST on China imports to India", "url": "https://ctiddp.com/tools/duty-calculator", "offers": {"@type": "Offer", "price": "0", "priceCurrency": "USD"}}, {"@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://ctiddp.com"}, {"@type": "ListItem", "position": 2, "name": "Tools", "item": "https://ctiddp.com/tools"}, {"@type": "ListItem", "position": 3, "name": "Duty Calculator", "item": "https://ctiddp.com/tools/duty-calculator"}]}]}) }} />
      <DutyCalcClient />
    </>
  )
}
