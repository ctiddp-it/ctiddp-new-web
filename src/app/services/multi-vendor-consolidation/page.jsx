import { HiOutlineCube, HiOutlineGlobeAlt, HiOutlineBuildingStorefront, HiOutlineTruck, HiOutlineMagnifyingGlass, HiOutlineCurrencyDollar } from 'react-icons/hi2'
import ServiceTemplate from '@/components/service/ServiceTemplate'

export const metadata = {
  title: 'Multi-Vendor Consolidation — China to India | CTIDDP',
  description: 'Combine shipments from multiple Chinese vendors into a single DDP shipment. Reduce per-unit freight costs significantly.',
  alternates: { canonical: 'https://www.ctiddp.com/services/multi-vendor-consolidation' },
}

export default function Page() {
  return (
    <ServiceTemplate
      badge="MULTI-VENDOR"
      titleNode={<>Multi-Vendor<br /><span className="text-primary-light">Consolidation</span></>}
      subtitle="Combine shipments from multiple vendors across China into one DDP shipment. Reduce per-unit freight costs by up to 40%."
      bgImage="/images/services/supply-chain-representation-still-life.jpeg"
      trustPills={['Cost Savings', 'Multiple Vendors', 'Single Shipment', 'Tracked']}
      overviewTitle="One Shipment, <span class='highlight'>Multiple Vendors</span>"
      overviewText="When sourcing from 3, 5, or even 10 different suppliers across China, shipping each separately is expensive. We collect from all your vendors, consolidate at our Guangzhou warehouse, and ship as one — saving you up to 40% on freight."
      overviewImage="/images/services/supply-chain-representation-still-life.jpeg"
      overviewBullets={['Collect from unlimited vendors across China', 'Consolidate at our Guangzhou warehouse', 'Single Bill of Lading for entire shipment', 'Significant per-unit freight cost reduction', 'One customs clearance instead of multiple', 'Single delivery to your door in India']}
      features={[
        { icon: <HiOutlineCube size={22} />, title: 'Unlimited Vendors', description: 'We collect from as many suppliers as you need, anywhere in China.' },
        { icon: <HiOutlineCurrencyDollar size={22} />, title: 'Up to 40% Savings', description: 'Consolidated shipping dramatically reduces per-unit costs.' },
        { icon: <HiOutlineBuildingStorefront size={22} />, title: 'Warehouse Hub', description: 'Our Guangzhou facility handles receiving, QC, and consolidation.' },
      ]}
      featuresTitle="Consolidation <span class='highlight'>Benefits</span>"
      included={['Multi-vendor cargo collection', 'Warehouse consolidation', 'Cargo verification on receipt', 'Single Bill of Lading', 'Combined customs clearance', 'Single door delivery']}
      relatedServices={[
        { icon: <HiOutlineGlobeAlt size={22} />, title: 'DDP Shipping', description: 'Ship consolidated cargo DDP.', href: '/services/global-ddp-shipping' },
        { icon: <HiOutlineMagnifyingGlass size={22} />, title: 'QC & Inspection', description: 'Inspect each vendor before consolidation.', href: '/services/qc-inspection' },
        { icon: <HiOutlineTruck size={22} />, title: 'Last-Mile Delivery', description: 'Door delivery of consolidated cargo.', href: '/services/last-mile-delivery' },
      ]}
      ctaTitle="Consolidate & <span class='text-primary-light'>Save Big</span>"
      ctaSubtitle="Combine multiple vendor shipments and cut your freight costs dramatically."
    />
  )
}