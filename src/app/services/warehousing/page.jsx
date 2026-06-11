import { HiOutlineBuildingStorefront, HiOutlineCube, HiOutlineGlobeAlt, HiOutlineTruck, HiOutlineMagnifyingGlass, HiOutlineDocumentCheck } from 'react-icons/hi2'
import ServiceTemplate from '@/components/service/ServiceTemplate'

export const metadata = {
  title: 'Warehousing & Consolidation in Guangzhou | CTIDDP',
  description: 'Collect and consolidate cargo from multiple Chinese suppliers at our Guangzhou warehouse. Reduce freight costs with multi-vendor consolidation.',
  alternates: { canonical: 'https://www.ctiddp.com/services/warehousing' },
}

export default function Page() {
  return (
    <ServiceTemplate
      badge="WAREHOUSING"
      titleNode={<>Warehousing &<br /><span className="text-primary-light">Consolidation</span></>}
      subtitle="Collect cargo from multiple suppliers, consolidate at our secure Guangzhou warehouse, and ship as one — saving significant freight costs."
      bgImage="/images/services/caucasian-warehouse-worker-lifting-weight-with-manual-pallet-jack.jpeg"
      trustPills={['Guangzhou Hub', 'Multi-Vendor', 'Cost Savings', 'Secure Storage']}
      overviewTitle="Why <span class='highlight'>Consolidation?</span>"
      overviewText="When you source from multiple suppliers in China, shipping each order separately costs significantly more. Our Guangzhou warehouse collects, inspects, repackages, and consolidates all your cargo into a single shipment."
      overviewImage="/images/services/warehouse-logistics-streamlined-delivery-process-with-boxes-loaded-onto-cargo-truck-generative-ai.jpeg"
      overviewBullets={['Multi-vendor cargo collection from anywhere in China', 'Secure storage at our bonded Guangzhou facility', 'Cargo inspection and quality verification on arrival', 'Professional repacking and palletization', 'Single consolidated shipment to India (sea or air)', 'Significant freight cost reduction (up to 40%)']}
      features={[
        { icon: <HiOutlineBuildingStorefront size={22} />, title: 'Secure Storage', description: 'Bonded warehouse in Guangzhou with 24/7 security and climate control.' },
        { icon: <HiOutlineCube size={22} />, title: 'Multi-Vendor Pickup', description: 'We collect from multiple suppliers across China and bring to our warehouse.' },
        { icon: <HiOutlineDocumentCheck size={22} />, title: 'Cargo Verification', description: 'Each incoming shipment is inspected, counted, and documented.' },
      ]}
      featuresTitle="Warehouse <span class='highlight'>Capabilities</span>"
      included={['Multi-vendor cargo collection', 'Warehouse receiving & inspection', 'Secure storage (short/long term)', 'Repacking & palletization', 'Cargo photography & documentation', 'Consolidated shipping arrangement']}
      relatedServices={[
        { icon: <HiOutlineGlobeAlt size={22} />, title: 'DDP Shipping', description: 'Ship consolidated cargo to India.', href: '/services/global-ddp-shipping' },
        { icon: <HiOutlineMagnifyingGlass size={22} />, title: 'QC & Inspection', description: 'Quality check before consolidation.', href: '/services/qc-inspection' },
        { icon: <HiOutlineTruck size={22} />, title: 'Last-Mile Delivery', description: 'Door delivery once in India.', href: '/services/last-mile-delivery' },
      ]}
      ctaTitle="Consolidate & <span class='text-primary-light'>Save on Freight</span>"
      ctaSubtitle="Combine shipments from multiple vendors and reduce your per-unit shipping costs."
    />
  )
}