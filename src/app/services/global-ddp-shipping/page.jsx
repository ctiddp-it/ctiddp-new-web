import {
  HiOutlineGlobeAlt,
  HiOutlineTruck,
  HiOutlineShieldCheck,
  HiOutlineCreditCard,
  HiOutlineMagnifyingGlass,
  HiOutlineBuildingStorefront,
  HiOutlineDocumentCheck,
  HiOutlineCube,
} from 'react-icons/hi2'
import ServiceTemplate from '@/components/service/ServiceTemplate'

export const metadata = {
  title: 'Global DDP Shipping from China to India | CTIDDP',
  description: 'Move goods from China to India under a single fixed DDP contract. CTIDDP manages pickup, freight, customs, duties, and final delivery.',
  alternates: { canonical: 'https://www.ctiddp.com/services/global-ddp-shipping' },
}

export default function Page() {
  return (
    <ServiceTemplate
      badge="END-TO-END DDP SOLUTION"
      titleNode={<>Global DDP Shipping<br /><span className="text-primary-light">China to India</span></>}
      subtitle="Move your goods from factory floor in China to your warehouse in India under a single, fixed DDP contract with one accountable partner."
      bgImage="/images/services/aerial-view-commercial-dock.jpeg"
      trustPills={['Sea Freight', 'Air Freight', 'All Duties Pre-Paid', 'Door Delivery']}

      overviewTitle="What is Global <span class='highlight'>DDP Shipping?</span>"
      overviewText="Delivered Duty Paid (DDP) is a complete logistics model where your logistics partner handles the entire shipment lifecycle — from supplier pickup in China to doorstep delivery in India, with all customs duties and taxes pre-paid."
      overviewImage="/images/home/china-to-india-ddp-shipping-warehouse.webp"
      overviewBullets={[
        'Supplier coordination & cargo readiness verification',
        'Cross-border supplier payments processing',
        'Multi-vendor cargo consolidation in China',
        'Air or Sea freight (FCL / LCL) with real-time tracking',
        'Import customs clearance at Indian ports',
        'Duty & GST management (BCD, IGST, SWS)',
        'Last-mile PAN India delivery with POD',
      ]}

      features={[
        { icon: <HiOutlineGlobeAlt size={22} />, title: 'Origin Management', description: 'Factory pickup in China, export documentation, and cargo consolidation with multi-vendor support.' },
        { icon: <HiOutlineTruck size={22} />, title: 'International Freight', description: 'Air or Sea freight with route planning and carrier booking for cost-optimized transit.' },
        { icon: <HiOutlineShieldCheck size={22} />, title: 'Destination Clearance', description: 'Import customs clearance, duty & GST management, and last-mile PAN India delivery.' },
        { icon: <HiOutlineCreditCard size={22} />, title: 'Transparent Pricing', description: 'Single consolidated DDP quote — freight, duties, handling, and delivery all included upfront.' },
        { icon: <HiOutlineDocumentCheck size={22} />, title: 'Documentation Support', description: 'Commercial Invoice, Packing List, Bill of Lading, and complete Indian customs documentation.' },
        { icon: <HiOutlineBuildingStorefront size={22} />, title: 'Multi-Vendor Consolidation', description: 'Collect from multiple factories, consolidate at our Guangzhou warehouse, ship as one.' },
      ]}
      featuresTitle="The DDP <span class='highlight'>Advantage</span>"

      processSteps={[
        { icon: <HiOutlineMagnifyingGlass size={22} />, title: 'Supplier Finalization', description: 'Verify shipment readiness with your supplier.' },
        { icon: <HiOutlineCube size={22} />, title: 'Factory Pickup', description: 'Collect cargo from factory in China.' },
        { icon: <HiOutlineBuildingStorefront size={22} />, title: 'Consolidation', description: 'Warehouse consolidation if needed.' },
        { icon: <HiOutlineDocumentCheck size={22} />, title: 'Export Clearance', description: 'China-side customs and freight dispatch.' },
        { icon: <HiOutlineGlobeAlt size={22} />, title: 'Transit (Air/Sea)', description: 'Tracked shipping to Indian port.' },
        { icon: <HiOutlineShieldCheck size={22} />, title: 'Import Clearance', description: 'Indian customs with duties pre-paid.' },
        { icon: <HiOutlineTruck size={22} />, title: 'Door Delivery', description: 'Last-mile to your warehouse in India.' },
      ]}
      processTitle="Process Flow — <span class='highlight'>China to Your Warehouse</span>"

      included={[
        'Supplier coordination & cargo readiness',
        'Cross-border supplier payments',
        'Multi-vendor cargo consolidation in China',
        'Export clearance in China',
        'Air Freight / Sea Freight (FCL / LCL)',
        'Import customs clearance in India',
        'Duty & GST management (BCD, IGST)',
        'Last-mile PAN India delivery',
      ]}

      relatedServices={[
        { icon: <HiOutlineMagnifyingGlass size={22} />, title: 'QC & Inspection', description: 'On-site quality checks before shipment.', href: '/services/qc-inspection' },
        { icon: <HiOutlineBuildingStorefront size={22} />, title: 'Warehousing & Consolidation', description: 'Multi-vendor consolidation at our warehouse.', href: '/services/warehousing' },
        { icon: <HiOutlineShieldCheck size={22} />, title: 'Customs Clearance', description: 'Expert import clearance at all Indian ports.', href: '/services/customs-clearance' },
      ]}

      ctaTitle="Get Your Global <span class='text-primary-light'>DDP Quote Today</span>"
      ctaSubtitle="Plan your next shipment with full visibility and control. One contract. One price. One accountable partner."
    />
  )
}