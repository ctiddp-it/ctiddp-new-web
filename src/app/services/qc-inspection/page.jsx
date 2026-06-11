import { HiOutlineMagnifyingGlass, HiOutlineDocumentCheck, HiOutlineShieldCheck, HiOutlineGlobeAlt, HiOutlineBuildingStorefront, HiOutlineCreditCard } from 'react-icons/hi2'
import ServiceTemplate from '@/components/service/ServiceTemplate'

export const metadata = {
  title: 'QC & Pre-Shipment Inspection in China | CTIDDP',
  description: 'On-site quality checks and pre-shipment inspections at Chinese supplier facilities. Defect screening, sample verification, and compliance reporting.',
  alternates: { canonical: 'https://www.ctiddp.com/services/qc-inspection' },
}

export default function Page() {
  return (
    <ServiceTemplate
      badge="QUALITY CONTROL"
      titleNode={<>QC & Pre-Shipment<br /><span className="text-primary-light">Inspection</span></>}
      subtitle="On-site quality checks at supplier facilities in China. Defect screening, sample verification, and compliance reporting before shipment."
      bgImage="/images/services/young-female-warehouse-worker-checks-counting-cardboard-boxes-warehouse-using.jpeg"
      trustPills={['On-Site QC', 'Photo Reports', 'Defect Screening', 'Pre-Shipment']}
      overviewTitle="Why QC <span class='highlight'>Inspection?</span>"
      overviewText="Catching defects after goods arrive in India is expensive and time-consuming. Our on-ground QC team in China inspects your products at the factory — ensuring quality standards are met before any cargo is shipped."
      overviewImage="/images/services/worker-factory-checking-number-white-plastic-bottles-warehouse.jpeg"
      overviewBullets={['Factory-level inspection at supplier location', 'Detailed photo/video reports shared digitally', 'Defect classification (critical, major, minor)', 'AQL-based sampling methodology', 'Inspection linked to payment release approval']}
      features={[
        { icon: <HiOutlineMagnifyingGlass size={22} />, title: 'Pre-Shipment Inspection', description: 'Full product check before cargo leaves the factory.' },
        { icon: <HiOutlineDocumentCheck size={22} />, title: 'Detailed Reports', description: 'Photo/video documentation with defect classification.' },
        { icon: <HiOutlineShieldCheck size={22} />, title: 'AQL Standards', description: 'Industry-standard Acceptable Quality Level methodology.' },
      ]}
      featuresTitle="Inspection <span class='highlight'>Services</span>"
      included={['Pre-shipment product inspection', 'During-production inspection', 'Container loading supervision', 'Factory audit reports', 'Defect photo documentation', 'AQL-based sampling']}
      relatedServices={[
        { icon: <HiOutlineCreditCard size={22} />, title: 'Supplier Payments', description: 'Payment linked to QC approval.', href: '/services/supplier-payments' },
        { icon: <HiOutlineBuildingStorefront size={22} />, title: 'Warehousing', description: 'QC-approved goods stored for consolidation.', href: '/services/warehousing' },
        { icon: <HiOutlineGlobeAlt size={22} />, title: 'DDP Shipping', description: 'Ship inspected goods to India.', href: '/services/global-ddp-shipping' },
      ]}
      ctaTitle="Get QC <span class='text-primary-light'>Before You Ship</span>"
      ctaSubtitle="Don't risk receiving defective goods. Inspect at the source in China."
    />
  )
}