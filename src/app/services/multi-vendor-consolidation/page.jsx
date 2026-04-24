import ServiceDetailPage from '@/components/sections/ServiceDetailPage'

export const metadata = {
  title: 'Multi-Vendor Consolidation in China | CTIDDP',
  description:
    'Combine shipments from multiple China suppliers into one cost-efficient DDP cargo with pickup, consolidation, and dispatch management.',
  alternates: {
    canonical: 'https://www.ctiddp.com/services/multi-vendor-consolidation',
  },
}

const sections = [
  {
    title: 'What is Multi-Vendor Consolidation?',
    paragraphs: [
      'Multi-vendor consolidation lets you source from multiple suppliers in China and combine cargo into one shipment under a single logistics plan.',
      'This reduces shipping cost and improves operational efficiency while maintaining better control.',
    ],
  },
  {
    title: 'How CTIDDP Handles Consolidation',
    items: [
      'Supplier pickup and coordination: collection from multiple locations, supplier scheduling, acceptance from any China address',
      'Warehouse consolidation: receiving, sorting, grouping, and secure storage before dispatch',
      'Documentation and preparation: packing list and invoice prep, HS code verification, duty alignment',
      'Shipment dispatch: consolidated air/sea cargo integrated with DDP shipping and final delivery flow',
    ],
  },
  {
    title: 'Key Features of Our Consolidation Service',
    subtitle: 'Designed for Efficient Imports',
    items: [
      'Accept shipments from multiple suppliers',
      'Centralized consolidation warehouse in China',
      'Structured documentation handling',
      'Arrival photo verification for each shipment',
      'Ready for DDP shipping execution',
    ],
  },
  {
    title: 'Consolidation Workflow',
    subtitle: 'Step-by-Step Process',
    items: [
      'Suppliers dispatch goods to consolidation warehouse',
      'Cargo is received, verified, and documented',
      'Shipments are combined into one load',
      'Packing list and invoice are finalized',
      'Cargo is dispatched under DDP shipping',
    ],
  },
  {
    title: 'Types of Consolidation Supported',
    subtitle: 'Flexible Shipment Options',
    items: [
      'LCL consolidation',
      'Multi-category product consolidation',
      'Small batch plus bulk shipment combinations',
      'Air and sea mixed logistics planning',
    ],
  },
  {
    title: 'Benefits for Importers',
    subtitle: 'Business Advantages',
    items: [
      'Lower shipping cost per unit',
      'Single shipment instead of multiple dispatches',
      'Simplified documentation process',
      'Better control over supplier shipments',
      'Improved logistics efficiency',
    ],
  },
  {
    title: 'Ideal Use Cases',
    subtitle: 'When to Use This Service',
    items: [
      'Sourcing from multiple suppliers in China',
      'Small shipments that need combining',
      'Importers optimizing logistics costs',
      'Businesses scaling product sourcing',
      'Canton Fair sourcing consolidation',
    ],
  },
  {
    title: 'Integrated with CTIDDP Ecosystem',
    subtitle: 'One Partner for Complete Flow',
    items: [
      'Supplier payments',
      'QC and pre-shipment inspection',
      'Global DDP shipping',
      'Customs clearance',
      'Last-mile delivery',
    ],
    paragraphs: ['This creates a fully connected logistics system from supplier to delivery.'],
  },
]

export default function MultiVendorConsolidationPage() {
  return (
    <ServiceDetailPage
      breadcrumb="Multi-Vendor Consolidation"
      pageLabel="Multi-Vendor Consolidation"
      canonicalUrl="https://www.ctiddp.com/services/multi-vendor-consolidation"
      title="Multi-Vendor Consolidation in China | Reduce Costs with Smart DDP Shipping"
      intro="Optimize imports by combining shipments from multiple suppliers into one efficient cargo flow for India delivery."
      sections={sections}
      cta={{
        title: 'Consolidate Smart. Ship Efficiently.',
        text: 'Reduce cost and streamline imports with expert consolidation.',
        buttonLabel: 'Get DDP Quote',
      }}
    />
  )
}

