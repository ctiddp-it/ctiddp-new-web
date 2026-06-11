import EcosystemClient from './EcosystemClient'

export const metadata = {
  title: 'B2B Trade Ecosystem Platform | Global Sourcing & Logistics Network',
  description:
    'B2B sourcing platform connecting global suppliers with India, integrating sourcing, logistics, and cross-border trade solutions.',
  keywords: [
    'B2B sourcing platform India',
    'global trade platform B2B',
    'supplier network China India',
    'import export business platform',
  ],
  openGraph: {
    title: 'B2B Trade Ecosystem Platform | Global Sourcing & Logistics Network',
    description: 'B2B sourcing platform connecting global suppliers with India.',
    url: 'https://www.ctiddp.com/eco-system/',
  },
  alternates: { canonical: 'https://www.ctiddp.com/eco-system' },
}

export default function EcosystemPage() {
  return <EcosystemClient />
}