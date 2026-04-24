import ServiceDetailPage from '@/components/sections/ServiceDetailPage'

export const metadata = {
  title: 'QC and Pre-Shipment Inspection in China | CTIDDP',
  description:
    'On-ground quality control and pre-shipment inspection in China with photo/video reports, defect classification, and packaging checks.',
  alternates: {
    canonical: 'https://www.ctiddp.com/services/qc-inspection',
  },
}

const sections = [
  {
    title: 'What is QC and Pre-Shipment Inspection?',
    paragraphs: [
      'Pre-shipment inspection is a structured quality check conducted when production is complete or nearly complete and goods are ready for dispatch.',
      'CTIDDP executes PSI at factory and warehouse level and aligns the result with your DDP shipping plan.',
    ],
    items: [
      'Product quality against approved specifications',
      'Quantity and assortment checks',
      'Workmanship and finish',
      'Packaging and labeling',
      'Carton integrity and loading readiness',
    ],
  },
  {
    title: 'CTIDDP QC Coverage - What We Inspect',
    items: [
      'Product quality and workmanship: visual checks, functional checks, defect categorization',
      'Quantity and assortment: SKU verification, carton count vs PO, AQL sampling',
      'Packaging and labeling: integrity, barcodes, markings, stacking suitability',
      'Shipment readiness: dimensions, weight, palletization, container loading readiness',
    ],
  },
  {
    title: 'Inspection Methods We Follow',
    table: {
      headers: ['Method', 'Purpose', 'Outcome'],
      rows: [
        ['AQL Sampling', 'Statistical sampling for large batches', 'Consistent quality benchmarking'],
        ['Visual Inspection', 'Finish, defects, workmanship', 'Clear pass/fail indicators'],
        ['Functional Testing', 'Product operation checks', 'Performance validation'],
        ['Packaging Audit', 'Carton, labeling, protection', 'Transit-ready packaging'],
        ['Quantity Verification', 'Count and assortment check', 'Order accuracy confirmation'],
      ],
    },
  },
  {
    title: 'Our Inspection Process - Step by Step',
    subtitle: 'From Factory to Approval',
    items: [
      'Inspection request and PO/spec submission',
      'Inspector assigned near factory location',
      'On-site inspection at factory or warehouse',
      'Sampling and checks as per AQL plan',
      'Photo and video documentation captured',
      'Detailed inspection report shared',
      'Approval for shipment or rework coordination',
    ],
  },
  {
    title: 'What You Receive After Inspection',
    subtitle: 'Actionable Inspection Report',
    items: [
      'High-resolution photos and videos',
      'Defect list (minor/major/critical)',
      'Quantity verification summary',
      'Packaging and labeling assessment',
      'Recommendation: Pass / Conditional Pass / Rework',
    ],
  },
  {
    title: 'Integration with DDP Shipping',
    subtitle: 'Quality to Delivery - One Flow',
    paragraphs: ['Inspection is directly linked to logistics: QC -> Approval -> Pickup -> Freight -> Customs -> Delivery.'],
    items: [
      'Shipment moves only after quality validation',
      'Reduced rework at destination',
      'Better supplier and warehouse coordination',
      'Smooth transition into DDP execution',
    ],
  },
  {
    title: 'When to Schedule Pre-Shipment Inspection',
    subtitle: 'Ideal Timing',
    items: [
      'When production is 80 to 100 percent complete',
      'Before final balance payment (where applicable)',
      'Prior to cargo pickup and consolidation',
    ],
  },
  {
    title: 'Industries We Cover',
    items: [
      'Consumer goods and retail products',
      'Electronics and accessories',
      'Machinery and components',
      'Furniture and home products',
      'Packaging materials',
      'Apparel and textiles',
    ],
  },
  {
    title: 'Why Choose CTIDDP for QC and Inspection',
    subtitle: 'Operational Advantages',
    items: [
      'On-ground inspection across China manufacturing hubs',
      'Standardized AQL-based checks',
      'Clear visual documentation with photos/videos',
      'Alignment with DDP shipment timelines',
      'Supplier coordination for next steps',
    ],
  },
  {
    title: 'Common Inspection Types We Offer',
    subtitle: 'Flexible Options',
    items: [
      'Pre-Production Check (PPC)',
      'During Production Inspection (DPI)',
      'Pre-Shipment Inspection (PSI)',
      'Container Loading Supervision (CLS)',
    ],
  },
]

export default function QcInspectionPage() {
  return (
    <ServiceDetailPage
      breadcrumb="QC and Inspection"
      pageLabel="QC and Inspection"
      canonicalUrl="https://www.ctiddp.com/services/qc-inspection"
      title="QC and Pre-Shipment Inspection in China | Quality Control for Imports to India"
      intro="Ensure every shipment meets your specifications before it leaves the factory with structured QC checks and report-based decisions."
      sections={sections}
      cta={{
        title: 'Book Your QC and Pre-Shipment Inspection',
        text: 'Validate your goods before they move to shipping.',
        buttonLabel: 'Schedule Inspection Now',
      }}
    />
  )
}

