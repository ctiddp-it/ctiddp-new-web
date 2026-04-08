import ContactClient from './ContactClient'

export const metadata = {
  title: 'Contact CTIDDP — China & India DDP Team',
  description:
    'Contact the CTIDDP team in Visakhapatnam or Guangzhou. WhatsApp response under 2 hours. Email, phone, and call booking available. Emergency escalation 24/7 for active shipments.',
  openGraph: {
    title: 'Contact CTIDDP — Two Countries, Fast Responses',
    description: 'WhatsApp, email, or book a call. India team in Vizag, China team in Guangzhou. Under 2-hour response.',
    url: 'https://ctiddp.com/contact',
  },
  alternates: { canonical: 'https://ctiddp.com/contact' },
}

export default function ContactPage() {
  return <ContactClient />
}