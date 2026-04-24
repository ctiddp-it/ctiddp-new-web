import ServiceDetailPage from '@/components/sections/ServiceDetailPage'

export const metadata = {
  title: 'Secure Supplier Payments in China | CTIDDP',
  description:
    'Secure cross-border supplier payment management for China imports with verification, compliance, currency handling, and tracking.',
  alternates: {
    canonical: 'https://www.ctiddp.com/services/supplier-payments',
  },
}

const sections = [
  {
    title: 'What is Supplier Payment Management for Imports?',
    paragraphs: [
      'Supplier payment management ensures your funds reach the right supplier through the right channel with full documentation and compliance.',
      'CTIDDP simplifies this entire process into a structured and secure workflow for India to China procurement.',
    ],
    items: [
      'International bank transfers',
      'Currency conversion (INR to USD/CNY)',
      'Supplier verification',
      'Transaction documentation',
      'Payment tracking',
    ],
  },
  {
    title: 'CTIDDP Supplier Payment Solution - What We Handle',
    subtitle: 'End-to-End Payment Coverage',
    items: [
      'Supplier verification before payment',
      'Cross-border payment processing (India to China)',
      'Currency conversion handling',
      'Invoice and documentation validation',
      'Payment tracking and confirmation',
      'Supplier coordination for dispatch readiness',
    ],
  },
  {
    title: 'Payment Workflow - Step-by-Step',
    subtitle: 'How It Works',
    items: [
      'You finalize supplier and order details',
      'CTIDDP verifies supplier credentials',
      'Invoice and payment terms are reviewed',
      'Payment is processed through secure channels',
      'Supplier confirms receipt',
      'Production or dispatch is initiated',
    ],
  },
  {
    title: 'Key Features of CTIDDP Supplier Payments',
    subtitle: 'Built for Importers',
    items: [
      'Verified supplier payment flow',
      'Structured documentation support',
      'Cross-border transaction handling',
      'Integrated with logistics execution',
      'Real-time supplier coordination',
    ],
  },
  {
    title: 'Payment Methods We Support',
    table: {
      headers: ['Payment Type', 'Use Case', 'Handled By CTIDDP'],
      rows: [
        ['Bank Transfer (TT)', 'Standard supplier payments', 'Yes'],
        ['Advance Payments', 'Production initiation', 'Yes'],
        ['Balance Payments', 'Before shipment dispatch', 'Yes'],
        ['Multi-Supplier Payments', 'Bulk sourcing and consolidation', 'Yes'],
      ],
    },
  },
  {
    title: 'Why Supplier Payments Need Structured Handling',
    subtitle: 'Key Considerations',
    items: [
      'Correct supplier identification',
      'Accurate invoice validation',
      'Currency exchange handling',
      'Documentation aligned with shipment',
      'Payment confirmation before dispatch',
    ],
  },
  {
    title: 'Integrated with DDP Shipping',
    subtitle: 'One Flow - Payment to Delivery',
    paragraphs: ['Supplier payments are directly connected with logistics: Payment -> Production -> Pickup -> Shipping -> Delivery.'],
    items: [
      'Faster shipment readiness',
      'Better supplier coordination',
      'Smooth transition into shipping process',
    ],
  },
  {
    title: 'Ideal for These Use Cases',
    subtitle: 'Who Benefits Most',
    items: [
      'Importers sourcing from multiple suppliers',
      'Businesses attending Canton Fair',
      'Bulk product buyers',
      'First-time importers from China',
      'Growing businesses scaling procurement',
    ],
  },
  {
    title: 'Documentation and Compliance Support',
    subtitle: 'Included with Every Payment',
    items: [
      'Invoice validation',
      'Payment confirmation records',
      'Supplier coordination logs',
      'Alignment with shipping documentation',
    ],
  },
  {
    title: 'Why Choose CTIDDP for Supplier Payments',
    subtitle: 'Business Advantages',
    items: [
      'One partner for payment plus shipping',
      'Structured cross-border transaction process',
      'Professional supplier coordination',
      'Reduced operational effort',
      'Seamless transition to DDP shipping',
    ],
  },
]

export default function SupplierPaymentsPage() {
  return (
    <ServiceDetailPage
      breadcrumb="Supplier Payments"
      pageLabel="Supplier Payments"
      canonicalUrl="https://www.ctiddp.com/services/supplier-payments"
      title="Secure Supplier Payments in China | Cross-Border Payment Management by CTIDDP"
      intro="Pay your China suppliers with confidence and control through a managed payment process aligned with your shipment execution."
      sections={sections}
      cta={{
        title: 'Simplify Your Supplier Payments Today',
        text: 'Handle payments and shipping under one structured system.',
        buttonLabel: 'Get Started with CTIDDP',
      }}
    />
  )
}

