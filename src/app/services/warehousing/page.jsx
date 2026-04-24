import ServiceDetailPage from '@/components/sections/ServiceDetailPage'

export const metadata = {
  title: 'Warehousing and Consolidation in China | CTIDDP',
  description:
    'Reduce shipping costs with warehousing and consolidation in China. CTIDDP receives, verifies, repacks, and ships cargo to India under DDP.',
  alternates: {
    canonical: 'https://www.ctiddp.com/services/warehousing',
  },
}

const sections = [
  {
    title: 'What is Warehousing and Consolidation?',
    paragraphs: [
      'Warehousing and consolidation is the process of collecting shipments from multiple suppliers into a single controlled location and preparing cargo for efficient export.',
      'Instead of shipping each order separately, CTIDDP combines and optimizes shipments for better cost and smoother execution.',
    ],
    items: [
      'Receive goods at our China warehouse',
      'Verify quantity and condition',
      'Combine shipments into one load',
      'Optimize packaging for freight',
      'Dispatch as a single shipment to India',
    ],
  },
  {
    title: 'CTIDDP Warehouse Network in China',
    subtitle: 'Strategic Locations',
    items: [
      'Guangzhou',
      'Foshan',
      'Closer access to manufacturing hubs for faster coordination and efficient consolidation',
    ],
  },
  {
    title: 'What We Do Inside the Warehouse',
    items: [
      'Inbound handling: receiving from multiple suppliers, order-wise segregation, initial condition checks',
      'Verification and control: quantity vs PO, SKU matching, labeling checks, supplier discrepancy coordination',
      'Consolidation and packing: combine shipments, repack for space optimization, carton restructuring',
      'Pre-shipment preparation: marking and documentation alignment, readiness for export clearance and freight booking',
    ],
  },
  {
    title: 'Why Consolidation Matters for Importers',
    subtitle: 'Business Impact',
    items: [
      'Lower overall shipping cost through combined freight',
      'Better control over multiple suppliers',
      'Reduced handling complexity',
      'Structured shipment planning',
      'Faster transition to DDP delivery',
    ],
  },
  {
    title: 'Ideal Use Cases for Consolidation',
    subtitle: 'When This Service Adds Maximum Value',
    items: [
      'Sourcing from multiple suppliers in China',
      'Small to medium shipments (LCL optimization)',
      'Canton Fair purchases from different vendors',
      'Bulk buying across product categories',
      'Businesses scaling import operations',
    ],
  },
  {
    title: 'Integration with Global DDP Shipping',
    subtitle: 'One Continuous Flow',
    paragraphs: ['Supplier -> CTIDDP warehouse -> Consolidation -> Freight -> Customs -> Delivery.'],
    items: [
      'Coordinated shipments',
      'Cost-efficient logistics',
      'Seamless door delivery under one contract',
    ],
  },
  {
    title: 'Handling Types We Support',
    subtitle: 'Flexible Cargo Management',
    items: [
      'Multi-vendor consolidation',
      'LCL shipments',
      'FCL preparation',
      'Mixed product categories',
      'Palletized or carton-based shipments',
    ],
  },
  {
    title: 'Quality and Control at Warehouse Level',
    subtitle: 'Operational Checks',
    items: [
      'Visual inspection during receiving',
      'Packaging condition assessment',
      'Label and marking verification',
      'Shipment readiness confirmation',
    ],
  },
  {
    title: 'Why Choose CTIDDP Warehousing and Consolidation',
    subtitle: 'Key Advantages',
    items: [
      'Warehouse presence in major China manufacturing hubs',
      'Direct supplier coordination',
      'Integrated with QC, payments, and shipping',
      'Optimized cargo planning for cost efficiency',
      'Single partner for complete logistics execution',
    ],
  },
]

export default function WarehousingPage() {
  return (
    <ServiceDetailPage
      breadcrumb="Warehousing and Consolidation"
      pageLabel="Warehousing and Consolidation"
      canonicalUrl="https://www.ctiddp.com/services/warehousing"
      title="Warehousing and Consolidation in China | Smart Cargo Management for India Imports"
      intro="Reduce shipping costs and simplify multi-supplier sourcing with structured warehouse consolidation in China."
      sections={sections}
      cta={{
        title: 'Consolidate Your Shipments. Reduce Your Costs.',
        text: 'Bring all supplier shipments into one streamlined DDP flow.',
        buttonLabel: 'Get DDP Quote',
      }}
    />
  )
}

