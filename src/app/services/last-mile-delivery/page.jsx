import ServiceDetailPage from '@/components/sections/ServiceDetailPage'

export const metadata = {
  title: 'Last-Mile Delivery in India | CTIDDP',
  description:
    'Reliable last-mile DDP delivery across India from port or airport to your warehouse with scheduled dispatch and delivery coordination.',
  alternates: {
    canonical: 'https://www.ctiddp.com/services/last-mile-delivery',
  },
}

const sections = [
  {
    title: 'What is Last-Mile Delivery in DDP Shipping?',
    paragraphs: [
      'Last-mile delivery is the final stage where cargo moves from port, airport, or warehouse to your destination.',
      'Under CTIDDP DDP, this stage is pre-planned with customs and executed with coordination and delivery confirmation.',
    ],
  },
  {
    title: 'CTIDDP Last-Mile Delivery Coverage',
    subtitle: 'PAN India Delivery Network',
    items: [
      'Hyderabad',
      'Bangalore',
      'Chennai',
      'Mumbai',
      'Delhi NCR',
      'Tier-2 and Tier-3 cities',
    ],
  },
  {
    title: 'What We Handle in the Final Delivery Stage',
    items: [
      'Post-clearance movement: cargo pickup from port/airport, transfer to delivery network, route planning',
      'Delivery coordination: slot scheduling, consignee communication, delivery confirmation documentation',
      'Cargo handling: safe loading/unloading, packaging integrity, shipment-specific handling',
    ],
  },
  {
    title: 'Delivery Options Based on Shipment Type',
    subtitle: 'Flexible Delivery Execution',
    items: [
      'Full container delivery (FCL)',
      'Consolidated cargo delivery (LCL)',
      'Air cargo final delivery',
      'Warehouse-to-warehouse transfer',
      'Bulk and palletized cargo delivery',
    ],
  },
  {
    title: 'How Last-Mile Delivery Fits into the DDP Flow',
    subtitle: 'End-to-End Shipment Flow',
    paragraphs: ['Supplier -> Pickup -> Freight -> Customs Clearance -> Last-Mile Delivery'],
    items: [
      'Smooth transition from clearance to delivery',
      'No delays between logistics stages',
      'Consistent coordination across all steps',
    ],
  },
  {
    title: 'Delivery Process - Step-by-Step',
    subtitle: 'Final Stage Execution',
    items: [
      'Shipment cleared at port or airport',
      'Cargo transferred to delivery network',
      'Route and schedule finalized',
      'Shipment dispatched to destination',
      'Delivery completed with confirmation',
    ],
  },
  {
    title: 'Why Businesses Choose CTIDDP for Last-Mile Delivery',
    subtitle: 'Operational Advantages',
    items: [
      'Single partner handling the entire shipment',
      'Coordinated delivery scheduling',
      'Coverage across India',
      'Alignment with DDP shipment timelines',
      'Structured handover process',
    ],
  },
  {
    title: 'Suitable Use Cases',
    subtitle: 'Where Last-Mile Delivery Adds Value',
    items: [
      'Bulk imports requiring direct warehouse delivery',
      'Multi-location deliveries across India',
      'High-value shipments needing controlled handling',
      'Businesses scaling import operations',
      'Regular importers managing multiple shipments',
    ],
  },
  {
    title: 'Integration with CTIDDP Services',
    subtitle: 'Connected Logistics Ecosystem',
    items: [
      'Global DDP shipping',
      'Customs clearance',
      'Warehousing and consolidation',
      'Supplier payments',
      'QC and inspection',
    ],
    paragraphs: ['This creates a continuous logistics flow with no operational gaps.'],
  },
]

export default function LastMileDeliveryPage() {
  return (
    <ServiceDetailPage
      breadcrumb="Last-Mile Delivery"
      pageLabel="Last-Mile Delivery"
      canonicalUrl="https://www.ctiddp.com/services/last-mile-delivery"
      title="Last-Mile Delivery in India | Final Leg DDP Shipping by CTIDDP"
      intro="Complete your import journey with reliable final delivery from port or airport to your warehouse anywhere in India."
      sections={sections}
      cta={{
        title: 'Deliver Your Shipments with Precision',
        text: 'Complete your import journey with reliable last-mile execution.',
        buttonLabel: 'Get DDP Quote',
      }}
    />
  )
}

