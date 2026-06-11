import { HiOutlineTruck, HiOutlineGlobeAlt, HiOutlineShieldCheck, HiOutlineDocumentCheck, HiOutlineBuildingStorefront, HiOutlineClock } from 'react-icons/hi2'
import ServiceTemplate from '@/components/service/ServiceTemplate'

export const metadata = {
  title: 'Last-Mile Delivery Across India | CTIDDP',
  description: 'Door-to-door delivery anywhere in India. Real-time tracking, proof of delivery, and dedicated support for your imported cargo.',
  alternates: { canonical: 'https://www.ctiddp.com/services/last-mile-delivery' },
}

export default function Page() {
  return (
    <ServiceTemplate
      badge="LAST-MILE DELIVERY"
      titleNode={<>Last-Mile Delivery<br /><span className="text-primary-light">Anywhere in India</span></>}
      subtitle="Door-to-door delivery across India with real-time tracking, proof of delivery, and dedicated support until your cargo arrives."
      bgImage="/images/home/door-to-door-delivery-china-imports-india.jpg"
      trustPills={['PAN-India', 'Real-time Tracking', 'Proof of Delivery', 'Insured']}
      overviewTitle="Complete <span class='highlight'>Door Delivery</span>"
      overviewText="Once your imported goods clear Indian customs, our last-mile delivery network takes over — transporting your cargo from port to your warehouse or doorstep anywhere in India."
      overviewImage="/images/home/door-to-door-delivery-china-imports-india.jpg"
      overviewBullets={['PAN-India delivery coverage', 'Real-time GPS tracking for all shipments', 'Digital proof of delivery (POD)', 'Insurance coverage for transit damage', 'Dedicated support until delivery confirmation', 'Multiple vehicle types (FTL, PTL, courier)']}
      features={[
        { icon: <HiOutlineTruck size={22} />, title: 'PAN-India Network', description: 'Delivery to any pin code in India through our carrier network.' },
        { icon: <HiOutlineClock size={22} />, title: 'Real-time Tracking', description: 'GPS-enabled tracking from port to your doorstep.' },
        { icon: <HiOutlineDocumentCheck size={22} />, title: 'Digital POD', description: 'Electronic proof of delivery with photo and signature confirmation.' },
      ]}
      featuresTitle="Delivery <span class='highlight'>Features</span>"
      included={['Port-to-door transport', 'GPS real-time tracking', 'Digital proof of delivery', 'Transit insurance', 'Multiple vehicle options', 'Delivery confirmation notification']}
      relatedServices={[
        { icon: <HiOutlineShieldCheck size={22} />, title: 'Customs Clearance', description: 'Clear customs before last-mile.', href: '/services/customs-clearance' },
        { icon: <HiOutlineGlobeAlt size={22} />, title: 'DDP Shipping', description: 'Complete DDP with delivery.', href: '/services/global-ddp-shipping' },
        { icon: <HiOutlineBuildingStorefront size={22} />, title: 'Warehousing', description: 'Store before delivery scheduling.', href: '/services/warehousing' },
      ]}
      ctaTitle="Deliver to <span class='text-primary-light'>Any Doorstep in India</span>"
      ctaSubtitle="Complete your import journey with reliable last-mile delivery."
    />
  )
}