import ServiceDetailPage from '@/components/sections/ServiceDetailPage'

export const metadata = {
  title: 'Global DDP Shipping from China to India | CTIDDP',
  description:
    'Move goods from China to India under a single fixed DDP contract. CTIDDP manages pickup, freight, customs, duties, and final delivery.',
  alternates: {
    canonical: 'https://www.ctiddp.com/services/global-ddp-shipping',
  },
}

const sections = [
  {
    title: 'What is Global DDP Shipping?',
    paragraphs: [
      'Delivered Duty Paid (DDP) is a complete logistics model where one partner handles pickup, freight, customs, duties, and final delivery.',
      'With CTIDDP, DDP is structured for India-bound imports with operational control in China and execution in India.',
    ],
    items: [
      'Factory pickup in China',
      'Export documentation and handling',
      'International freight (air or sea)',
      'Import customs clearance in India',
      'Duties and taxes pre-calculated',
      'Final delivery to your location',
    ],
  },
  {
    title: 'CTIDDP Global DDP Shipping, Scope and Deliverables',
    subtitle: 'End-to-End Coverage',
    items: [
      'Supplier coordination and cargo readiness',
      'Cross-border supplier payments (if required)',
      'Cargo consolidation (multi-vendor support)',
      'Export clearance in China',
      'Air freight or sea freight (FCL/LCL)',
      'Import customs clearance in India',
      'Duty and GST management',
      'Last-mile PAN India delivery',
    ],
    table: {
      headers: ['Component', 'What CTIDDP Handles', 'Outcome for You'],
      rows: [
        ['Supplier Coordination', 'Pickup scheduling, documentation alignment', 'Faster dispatch readiness'],
        ['Freight Management', 'Route planning, carrier booking (air/sea)', 'Cost-optimized transit'],
        ['Customs Clearance', 'Documentation, compliance, duty calculation', 'Smooth port clearance'],
        ['Duty and Tax Handling', 'BCD, IGST, SWS pre-managed', 'Predictable landed cost'],
        ['Cargo Consolidation', 'Multi-vendor aggregation in China', 'Reduced shipping cost'],
        ['Last-Mile Delivery', 'Port to warehouse (PAN India)', 'Complete door delivery'],
      ],
    },
  },
  {
    title: 'Shipping Modes We Offer',
    items: [
      'Sea freight (FCL/LCL): ideal for bulk and heavy cargo, cost-efficient for large volumes, consolidation available',
      'Air freight: faster transit for urgent, high-value, or time-sensitive cargo',
      'Hybrid solutions: air + sea mix for speed and cost balance',
    ],
  },
  {
    title: 'Industries We Serve',
    items: [
      'Industrial machinery and equipment',
      'Electronics and components',
      'Consumer goods and retail imports',
      'Automotive parts',
      'Furniture and interior products',
      'Packaging and raw materials',
    ],
  },
  {
    title: 'Process Flow - From China to Your Warehouse',
    subtitle: 'Step-by-Step Execution',
    items: [
      'Supplier finalization and shipment readiness',
      'Pickup from factory in China',
      'Warehouse consolidation (if required)',
      'Export clearance and freight dispatch',
      'Transit by air or sea',
      'Import customs clearance in India',
      'Duty and tax processing',
      'Last-mile delivery to your warehouse',
    ],
  },
  {
    title: 'Why Businesses Choose CTIDDP for Global DDP Shipping',
    subtitle: 'Operational Advantages',
    items: [
      'Single point of contact for entire shipment',
      'Integrated China + India logistics execution',
      'Transparent DDP cost structure',
      'Multi-vendor shipment capability',
      'Real-time coordination across supply chain',
      'Dedicated support for business importers',
    ],
  },
  {
    title: 'Cost Structure - How Pricing Works',
    subtitle: 'Key Pricing Components',
    items: [
      'Freight charges (air or sea)',
      'Duty and GST (as per product category)',
      'Handling and clearance charges',
      'Last-mile delivery',
      'Single consolidated DDP quote, instead of fragmented cost planning',
    ],
  },
  {
    title: 'Compliance and Documentation Support',
    subtitle: 'Included Documentation Handling',
    items: [
      'Commercial invoice',
      'Packing list',
      'Bill of lading or airway bill',
      'Import documentation for Indian customs',
      'Duty classification and tax alignment',
    ],
  },
  {
    title: 'When Should You Choose DDP Shipping?',
    subtitle: 'Ideal Use Cases',
    items: [
      'First-time importers',
      'Businesses scaling imports',
      'Multi-supplier sourcing (including Canton Fair)',
      'Bulk procurement from China',
      'Businesses needing predictable cost and delivery',
    ],
  },
]

export default function GlobalDdpShippingPage() {
  return (
    <ServiceDetailPage
      breadcrumb="Global DDP Shipping"
      pageLabel="Global DDP Shipping"
      canonicalUrl="https://www.ctiddp.com/services/global-ddp-shipping"
      title="Global DDP Shipping from China to India | CTIDDP"
      intro="Move your goods from factory floor in China to your warehouse in India under a single, fixed DDP contract with one accountable partner."
      sections={sections}
      cta={{
        title: 'Get Your Global DDP Quote Today',
        text: 'Plan your next shipment with full visibility and control.',
        buttonLabel: 'Get DDP Quote',
      }}
    />
  )
}
