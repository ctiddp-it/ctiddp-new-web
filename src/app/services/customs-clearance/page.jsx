import { HiOutlineShieldCheck, HiOutlineDocumentCheck, HiOutlineGlobeAlt, HiOutlineTruck, HiOutlineBuildingStorefront, HiOutlineCurrencyDollar } from 'react-icons/hi2'
import ServiceTemplate from '@/components/service/ServiceTemplate'

export const metadata = {
  title: 'Customs Clearance at All Indian Ports | CTIDDP',
  description: 'Expert import customs clearance at all Indian ports. Compliant documentation, BCD & IGST handling, and duty calculation included.',
  alternates: { canonical: 'https://www.ctiddp.com/services/customs-clearance' },
}

export default function Page() {
  return (
    <ServiceTemplate
      badge="CUSTOMS CLEARANCE"
      titleNode={<>Customs Clearance<br /><span className="text-primary-light">All Indian Ports</span></>}
      subtitle="Expert import customs clearance with compliant documentation, HS code verification, duty calculation, and BCD & IGST handling at all major Indian ports."
      bgImage="/images/services/male-entrepreneur-businessman-expert-reading-documents.jpeg"
      trustPills={['All Ports', 'Compliant', 'BCD/IGST', 'Licensed CHA']}
      overviewTitle="Expert <span class='highlight'>Customs Handling</span>"
      overviewText="India's import regulations are complex. Our licensed Custom House Agent (CHA) team handles the complete clearance process — from Bill of Entry filing to duty payment and cargo release."
      overviewImage="/images/home/hassle-free-customs-clearance-india-imports.jpg"
      overviewBullets={['Bill of Entry filing at all major Indian ports', 'HS code classification and duty calculation', 'BCD, IGST, and SWS payment management', 'FSSAI, BIS, and other regulatory compliance', 'Out of Charge (OOC) processing', 'Documentation support for audits']}
      features={[
        { icon: <HiOutlineShieldCheck size={22} />, title: 'Licensed CHA', description: 'Our licensed Custom House Agent handles all port-level compliance.' },
        { icon: <HiOutlineDocumentCheck size={22} />, title: 'HS Code Accuracy', description: 'Correct classification ensures you pay the right duty — no overpayment.' },
        { icon: <HiOutlineCurrencyDollar size={22} />, title: 'Duty Management', description: 'BCD, IGST, SWS calculated and paid. Predictable landed cost upfront.' },
      ]}
      featuresTitle="Clearance <span class='highlight'>Capabilities</span>"
      included={['Bill of Entry filing', 'HS code classification', 'BCD/IGST/SWS calculation', 'Port documentation handling', 'FSSAI/BIS compliance support', 'Out of Charge processing', 'Audit-ready documentation']}
      relatedServices={[
        { icon: <HiOutlineGlobeAlt size={22} />, title: 'DDP Shipping', description: 'Complete DDP with customs included.', href: '/services/global-ddp-shipping' },
        { icon: <HiOutlineTruck size={22} />, title: 'Last-Mile Delivery', description: 'Port-to-door delivery after clearance.', href: '/services/last-mile-delivery' },
        { icon: <HiOutlineBuildingStorefront size={22} />, title: 'Warehousing', description: 'Pre-clearance warehouse storage.', href: '/services/warehousing' },
      ]}
      ctaTitle="Clear Customs <span class='text-primary-light'>Without Stress</span>"
      ctaSubtitle="Let our licensed team handle your import clearance at any Indian port."
    />
  )
}