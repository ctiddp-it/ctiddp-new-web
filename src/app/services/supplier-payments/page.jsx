import { HiOutlineCreditCard, HiOutlineShieldCheck, HiOutlineDocumentCheck, HiOutlineGlobeAlt, HiOutlineBuildingStorefront, HiOutlineMagnifyingGlass } from 'react-icons/hi2'
import ServiceTemplate from '@/components/service/ServiceTemplate'

export const metadata = {
  title: 'Supplier Payments — Secure China Supplier Payments | CTIDDP',
  description: 'Secure and efficient payment processing to your Chinese suppliers. Buyer protection, currency management, and full transaction transparency.',
  alternates: { canonical: 'https://www.ctiddp.com/services/supplier-payments' },
}

export default function Page() {
  return (
    <ServiceTemplate
      badge="SECURE PAYMENTS"
      titleNode={<>Supplier Payments<br /><span className="text-primary-light">Safe, Fast & Transparent</span></>}
      subtitle="Process payments to your Chinese suppliers securely with buyer protection, currency handling, and complete transaction transparency."
      bgImage="/images/services/businessman-uses-online-shopping-card-pay-via-mobile-phone-network.jpeg"
      trustPills={['Buyer Protection', 'Multi-Currency', 'Full Transparency', 'Compliant']}
      overviewTitle="Why Supplier <span class='highlight'>Payment Management?</span>"
      overviewText="Managing cross-border payments to Chinese suppliers involves currency conversion, compliance, and risk. CTIDDP handles the entire process — ensuring your suppliers get paid on time, while you stay protected."
      overviewImage="/images/services/businessman-uses-online-shopping-card-pay-via-mobile-phone-network.jpeg"
      overviewBullets={['Secure payment gateway with buyer protection', 'Multi-currency support (CNY, USD, INR)', 'Compliance with FEMA and RBI regulations', 'Payment tracking with full audit trail', 'Supplier verification before payment release']}
      features={[
        { icon: <HiOutlineCreditCard size={22} />, title: 'Secure Transfers', description: 'Bank-grade security for all cross-border transactions.' },
        { icon: <HiOutlineShieldCheck size={22} />, title: 'Buyer Protection', description: 'Funds released to supplier only after QC approval.' },
        { icon: <HiOutlineDocumentCheck size={22} />, title: 'Full Documentation', description: 'Complete payment records for your accounting and compliance.' },
      ]}
      featuresTitle="Payment <span class='highlight'>Features</span>"
      included={['Cross-border wire transfers', 'Currency conversion management', 'Payment tracking & confirmation', 'Supplier verification', 'FEMA/RBI compliance documentation', 'Payment linked to QC approval']}
      relatedServices={[
        { icon: <HiOutlineGlobeAlt size={22} />, title: 'Global DDP Shipping', description: 'End-to-end DDP shipping from China.', href: '/services/global-ddp-shipping' },
        { icon: <HiOutlineMagnifyingGlass size={22} />, title: 'QC & Inspection', description: 'Quality checks before payment release.', href: '/services/qc-inspection' },
        { icon: <HiOutlineBuildingStorefront size={22} />, title: 'Warehousing', description: 'Consolidate cargo from paid suppliers.', href: '/services/warehousing' },
      ]}
      ctaTitle="Secure Your <span class='text-primary-light'>Supplier Payments</span>"
      ctaSubtitle="Pay your Chinese suppliers safely with full buyer protection and compliance."
    />
  )
}