import ServiceDetailPage from '@/components/sections/ServiceDetailPage'

export const metadata = {
  title: 'Customs Clearance Services | China to India Import Compliance',
  description:
    'End-to-end customs clearance under DDP for China to India imports including documentation, duty calculation, and clearance coordination.',
  alternates: {
    canonical: 'https://www.ctiddp.com/services/customs-clearance',
  },
}

const sections = [
  {
    title: 'What is Customs Clearance in DDP Shipping?',
    paragraphs: [
      'Customs clearance is the process of getting your goods legally approved for import into India.',
      'Under CTIDDP DDP, we handle import filing, duty assessment, customs coordination, clearance, and handover for final delivery.',
    ],
  },
  {
    title: 'CTIDDP Customs Clearance Scope',
    items: [
      'Documentation management: invoice and packing list validation, HS code support, import documentation preparation, Bill of Entry filing',
      'Duty and tax handling: BCD, IGST, SWS calculation, product-category duty planning, FTA guidance where relevant',
      'Clearance execution: port and airport coordination, examination handling, query resolution, release for onward delivery',
    ],
  },
  {
    title: 'End-to-End Clearance Flow',
    subtitle: 'Step-by-Step Process',
    items: [
      'Pre-arrival preparation: documents reviewed before cargo arrival',
      'Filing and assessment: Bill of Entry filed with correct classification',
      'Customs review: queries handled with supporting documents',
      'Duty settlement: applicable duties and taxes processed',
      'Cargo release: shipment cleared and moved to delivery network',
    ],
  },
  {
    title: 'Compliance Areas We Manage',
    subtitle: 'Structured Import Handling',
    items: [
      'HS code accuracy and classification',
      'Importer details and KYC alignment',
      'Product-specific compliance requirements',
      'Labeling and packaging checks where applicable',
      'Regulatory coordination with authorities',
    ],
  },
  {
    title: 'Suitable Import Scenarios',
    subtitle: 'Where This Service Adds Value',
    items: [
      'China to India DDP shipments',
      'Multi-category imports in one shipment',
      'Bulk shipments (FCL/LCL/Air)',
      'Regular importers scaling operations',
      'Canton Fair sourcing shipments',
    ],
  },
  {
    title: 'Integrated with CTIDDP Ecosystem',
    subtitle: 'One Partner, One Flow',
    items: [
      'Supplier payments',
      'QC and inspection',
      'Warehousing and consolidation',
      'Global DDP shipping',
      'Last-mile delivery',
    ],
    paragraphs: ['This provides complete visibility and coordination across every stage of import execution.'],
  },
  {
    title: 'Key Advantages of CTIDDP Customs Clearance',
    subtitle: 'Operational Strength',
    items: [
      'Dedicated customs handling for China-India trade',
      'Pre-planned documentation to reduce processing time',
      'Structured duty calculation and transparency',
      'Direct coordination with port and customs teams',
      'Integrated delivery after clearance',
    ],
  },
  {
    title: 'Shipment Types Covered',
    subtitle: 'Flexible Clearance Capabilities',
    items: [
      'Sea freight (FCL and LCL)',
      'Air freight shipments',
      'Consolidated cargo',
      'Multi-supplier shipments',
      'Commercial imports across categories',
    ],
  },
]

export default function CustomsClearancePage() {
  return (
    <ServiceDetailPage
      breadcrumb="Customs Clearance"
      pageLabel="Customs Clearance"
      canonicalUrl="https://www.ctiddp.com/services/customs-clearance"
      title="Customs Clearance Services | China to India Import Compliance (DDP)"
      intro="Ensure fast and compliant cargo entry into India with complete customs handling under one DDP workflow."
      sections={sections}
      cta={{
        title: 'Clear Your Shipments with Confidence',
        text: 'Streamline imports with structured and compliant customs clearance.',
        buttonLabel: 'Get DDP Quote',
      }}
    />
  )
}

