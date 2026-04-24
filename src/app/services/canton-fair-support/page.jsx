import ServiceDetailPage from '@/components/sections/ServiceDetailPage'

export const metadata = {
  title: 'Canton Fair Support Services | CTIDDP',
  description:
    'On-ground Canton Fair support for supplier selection, negotiation, verification, and integrated DDP shipping planning.',
  alternates: {
    canonical: 'https://www.ctiddp.com/services/canton-fair-support',
  },
}

const sections = [
  {
    title: 'What is Canton Fair Support?',
    paragraphs: [
      'Canton Fair support helps importers navigate the exhibition, connect with relevant suppliers, validate quality and pricing, and plan logistics execution.',
      'With CTIDDP, your fair visit becomes a complete sourcing plus shipping strategy.',
    ],
    items: [
      'Efficient exhibition navigation',
      'Connection with relevant suppliers',
      'Quality and pricing validation',
      'Logistics planning from sourcing to delivery',
    ],
  },
  {
    title: 'On-Ground Support at Canton Fair',
    items: [
      'Guangzhou-based expert team: local presence, hall/category guidance, real-time meeting support',
      'Real-time translation and negotiation: Mandarin-English support, supplier discussion assistance, clarity on specifications and pricing',
    ],
  },
  {
    title: 'Supplier Evaluation and Verification',
    items: [
      'Smart supplier selection: background verification, factory-level insights, reliable vendor shortlisting',
      'Sample checks and validation: sample evaluation, quality expectation alignment, packaging/specification review',
    ],
  },
  {
    title: 'End-to-End Sourcing Support',
    subtitle: 'From Fair to Shipment Planning',
    items: [
      'Supplier coordination after meetings',
      'Quotation comparison and optimization',
      'Shipment planning under DDP model',
      'Multi-vendor consolidation planning',
    ],
  },
  {
    title: 'Post-Fair Execution Strategy',
    subtitle: 'Structured Follow-Up Support',
    items: [
      'Supplier communication management',
      'Order finalization guidance',
      'Documentation and compliance planning',
      'Integration with shipping and delivery',
    ],
  },
  {
    title: 'How It Fits into CTIDDP Ecosystem',
    subtitle: 'Complete Trade Flow',
    paragraphs: ['Canton Fair -> Supplier Selection -> QC -> Consolidation -> Shipping -> Customs -> Delivery'],
    items: [
      'Continuity from sourcing to delivery',
      'Single point of coordination',
      'Better planning and execution',
    ],
  },
  {
    title: 'Ideal for These Importers',
    subtitle: 'Who Should Use This Service',
    items: [
      'First-time importers visiting Canton Fair',
      'Businesses sourcing from multiple suppliers',
      'Importers planning bulk or regular shipments',
      'Companies expanding product categories',
      'Buyers seeking structured sourcing support',
    ],
  },
  {
    title: 'Key Advantages',
    subtitle: 'Why Choose CTIDDP at Canton Fair',
    items: [
      'On-ground team in Guangzhou',
      'Real-time negotiation support',
      'Supplier verification and validation',
      'Integrated shipping planning',
      'End-to-end DDP execution',
    ],
  },
]

export default function CantonFairSupportPage() {
  return (
    <ServiceDetailPage
      breadcrumb="Canton Fair Support"
      pageLabel="Canton Fair Support"
      canonicalUrl="https://www.ctiddp.com/services/canton-fair-support"
      title="Canton Fair Support Services | Source Smarter with On-Ground Experts"
      intro="Maximize sourcing outcomes with on-ground support for supplier selection, negotiation, verification, and shipping planning."
      sections={sections}
      cta={{
        title: 'Make Your Canton Fair Visit Result-Driven',
        text: 'Turn sourcing into a complete logistics solution.',
        buttonLabel: 'Get DDP Quote',
      }}
    />
  )
}

