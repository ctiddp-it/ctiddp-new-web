import { HiOutlineCalendarDays, HiOutlineGlobeAlt, HiOutlineMagnifyingGlass, HiOutlineBuildingStorefront, HiOutlineTruck, HiOutlineChatBubbleLeftRight } from 'react-icons/hi2'
import ServiceTemplate from '@/components/service/ServiceTemplate'

export const metadata = {
  title: 'Canton Fair Support — Sourcing & DDP Shipping | CTIDDP',
  description: 'On-ground Canton Fair support in Guangzhou. We attend with you, source suppliers, inspect products, negotiate, and ship everything DDP to India.',
  alternates: { canonical: 'https://www.ctiddp.com/services/canton-fair-support' },
}

export default function Page() {
  return (
    <ServiceTemplate
      badge="CANTON FAIR 2026"
      titleNode={<>Canton Fair<br /><span className="text-primary-light">Support & Shipping</span></>}
      subtitle="We attend the Canton Fair with you, handle everything in Mandarin, inspect goods, negotiate with suppliers, and ship everything DDP to India."
      bgImage="/images/services/arranging-order-deliveries-using-invoice-identification-codes.jpeg"
      trustPills={['On-Ground Support', 'Mandarin Experts', 'End-to-End DDP', 'All 3 Phases']}
      overviewTitle="Your Canton Fair <span class='highlight'>Partner</span>"
      overviewText="The Canton Fair is the world's largest trade fair — overwhelming for first-time attendees. Our Guangzhou team attends all 3 phases with you, handles supplier negotiations in Mandarin, inspects products on-site, and ships everything DDP to India."
      overviewImage="/images/services/arranging-order-deliveries-using-invoice-identification-codes.jpeg"
      overviewBullets={['On-ground team at all 3 phases of Canton Fair', 'Mandarin-speaking negotiation support', 'On-site product inspection and sample verification', 'Supplier background verification', 'Multi-supplier consolidation at our warehouse', 'Complete DDP shipping to India']}
      features={[
        { icon: <HiOutlineCalendarDays size={22} />, title: 'All 3 Phases', description: 'We cover Electronics, Consumer Goods, and Textiles phases.' },
        { icon: <HiOutlineChatBubbleLeftRight size={22} />, title: 'Mandarin Support', description: 'Our team negotiates in Mandarin for better terms.' },
        { icon: <HiOutlineMagnifyingGlass size={22} />, title: 'On-Site Inspection', description: 'Immediate quality checks at supplier booths.' },
      ]}
      featuresTitle="Fair <span class='highlight'>Support Services</span>"
      included={['Fair attendance (all 3 phases)', 'Translation & negotiation', 'Supplier verification', 'On-site product inspection', 'Sample management', 'Multi-vendor consolidation', 'DDP shipping to India']}
      relatedServices={[
        { icon: <HiOutlineGlobeAlt size={22} />, title: 'DDP Shipping', description: 'Ship fair purchases DDP to India.', href: '/services/global-ddp-shipping' },
        { icon: <HiOutlineBuildingStorefront size={22} />, title: 'Warehousing', description: 'Store fair purchases at our warehouse.', href: '/services/warehousing' },
        { icon: <HiOutlineTruck size={22} />, title: 'Last-Mile Delivery', description: 'Deliver fair purchases to your door.', href: '/services/last-mile-delivery' },
      ]}
      ctaTitle="Book Your <span class='text-primary-light'>Canton Fair Support</span>"
      ctaSubtitle="Attend the 140th Canton Fair with on-ground CTIDDP support."
    />
  )
}