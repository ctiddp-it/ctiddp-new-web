import Link from 'next/link'

export const metadata = {
  title: 'Terms and Conditions | CTIDDP',
  description:
    'Read the official Terms and Conditions for CTIDDP logistics, sourcing, shipping, customs clearance, warehousing, and related services.',
  alternates: {
    canonical: 'https://www.ctiddp.com/terms',
  },
}

export default function TermsPage() {
  return (
    <main className="bg-black text-white px-4 sm:px-8 lg:px-16 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-heading mb-4">
          Terms and Conditions
        </h1>

        <p className="text-muted mb-10">
          Effective Date: 01-05-2026
          <br />
          Company Name: CTIDDP
          <br />
          Website:{' '}
          <Link
            href="https://www.ctiddp.com"
            className="text-blue-light hover:underline"
          >
            www.ctiddp.com
          </Link>
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-heading mb-3">
            1. Acceptance of Terms
          </h2>
          <p className="text-muted">
            By accessing or using our services, you agree to comply with these
            Terms & Conditions. If you do not agree, you should not use our
            services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-heading mb-3">
            2. Scope of Services
          </h2>

          <p className="text-muted mb-4">
            CTIDDP provides end-to-end logistics and sourcing solutions,
            including:
          </p>

          <ul className="list-disc pl-6 text-muted space-y-2">
            <li>Global DDP Shipping (China to India)</li>
            <li>QC & Pre-Shipment Inspection</li>
            <li>Multi-Vendor Consolidation</li>
            <li>Warehousing & Cargo Handling</li>
            <li>Customs Clearance & Duty Management</li>
            <li>Last-Mile Delivery Across India</li>
            <li>Supplier Payments Assistance</li>
            <li>Canton Fair Support & Sourcing</li>
          </ul>

          <p className="text-muted mt-4">
            All services are provided under a single contract model, unless
            stated otherwise.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-heading mb-3">
            3. User Responsibilities
          </h2>

          <p className="text-muted mb-4">You agree to:</p>

          <ul className="list-disc pl-6 text-muted space-y-2">
            <li>
              Provide accurate shipment, product, and documentation details
            </li>
            <li>
              Ensure goods comply with Indian import laws and regulations
            </li>
            <li>Avoid restricted or prohibited items</li>
            <li>Make timely payments as per agreed terms</li>
          </ul>

          <p className="text-muted mt-4">
            Failure to comply may result in delays, penalties, or shipment
            rejection.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-heading mb-3">
            4. Pricing & Payment Terms
          </h2>

          <ul className="list-disc pl-6 text-muted space-y-2">
            <li>
              All quotes are based on provided shipment details and may vary if
              details change
            </li>
            <li>
              Payments must be made in advance or as per agreed milestones
            </li>
            <li>
              Duties, taxes, and applicable charges under DDP will be included
              unless stated otherwise
            </li>
            <li>Delayed payments may lead to service suspension</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-heading mb-3">
            5. Shipment & Delivery Terms
          </h2>

          <ul className="list-disc pl-6 text-muted space-y-2">
            <li>Delivery timelines are estimated, not guaranteed</li>
            <li>
              Delays due to customs, port congestion, weather, or government
              actions are beyond our control
            </li>
            <li>
              CTIDDP will make all reasonable efforts to ensure timely delivery
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-heading mb-3">
            6. Customs & Compliance
          </h2>

          <ul className="list-disc pl-6 text-muted space-y-2">
            <li>
              We assist with customs clearance, but final authority lies with
              Indian customs authorities
            </li>
            <li>
              Any penalties, seizures, or delays due to incorrect documentation
              or non-compliance are the client’s responsibility
            </li>
            <li>
              HS code classification and duty estimation are provided based on
              best knowledge
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-heading mb-3">
            7. Inspection & Quality Assurance
          </h2>

          <ul className="list-disc pl-6 text-muted space-y-2">
            <li>
              QC and inspection services are conducted as per agreed standards
              (e.g., AQL)
            </li>
            <li>Reports are shared for transparency</li>
            <li>
              CTIDDP is not liable for manufacturing defects beyond inspection
              scope
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-heading mb-3">
            8. Warehousing & Consolidation
          </h2>

          <ul className="list-disc pl-6 text-muted space-y-2">
            <li>
              Goods stored in our partner warehouses are handled with care
            </li>
            <li>
              Storage duration limits and charges will be communicated in advance
            </li>
            <li>
              Unclaimed goods beyond agreed timelines may incur additional
              charges
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-heading mb-3">
            9. Limitation of Liability
          </h2>

          <p className="text-muted mb-4">CTIDDP is not liable for:</p>

          <ul className="list-disc pl-6 text-muted space-y-2">
            <li>Indirect or consequential losses</li>
            <li>Supplier-related issues</li>
            <li>Delays beyond operational control</li>
          </ul>

          <p className="text-muted mt-4">
            Maximum liability (if applicable) is limited to the service fee
            paid.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-heading mb-3">
            10. Insurance
          </h2>

          <ul className="list-disc pl-6 text-muted space-y-2">
            <li>
              Cargo insurance may be included or optional, based on agreement
            </li>
            <li>
              Clients are encouraged to verify coverage details before shipment
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-heading mb-3">
            11. Cancellation & Refund Policy
          </h2>

          <ul className="list-disc pl-6 text-muted space-y-2">
            <li>
              Orders can be cancelled before shipment processing begins
            </li>
            <li>
              Once shipment is in transit, cancellation is not possible
            </li>
            <li>
              Refunds (if applicable) will be processed after deducting incurred
              costs
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-heading mb-3">
            12. Force Majeure
          </h2>

          <p className="text-muted mb-4">
            CTIDDP is not responsible for delays or failures caused by events
            beyond control, including:
          </p>

          <ul className="list-disc pl-6 text-muted space-y-2">
            <li>Natural disasters</li>
            <li>Government restrictions</li>
            <li>War, strikes, or pandemics</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-heading mb-3">
            13. Intellectual Property
          </h2>

          <p className="text-muted">
            All website content, branding, and materials are owned by CTIDDP
            and cannot be used without permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-heading mb-3">
            14. Privacy & Data Protection
          </h2>

          <p className="text-muted">
            User data is handled securely and used only for service-related
            purposes. Please refer to our{' '}
            <Link
              href="/privacy-policy"
              className="text-blue-light hover:underline"
            >
              Privacy Policy
            </Link>{' '}
            for details.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-heading mb-3">
            15. Governing Law & Jurisdiction
          </h2>

          <p className="text-muted">
            These Terms shall be governed by the laws of India. Any disputes
            shall be subject to the jurisdiction of courts in Visakhapatnam.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-heading mb-3">
            16. Updates to Terms
          </h2>

          <p className="text-muted">
            CTIDDP reserves the right to update these Terms at any time.
            Continued use of services implies acceptance of revised terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-heading mb-3">
            17. Contact Information
          </h2>

          <p className="text-muted mb-2">
            For any queries related to these Terms:
          </p>

          <div className="text-muted space-y-2">
            <p>
              Email:{' '}
              <a
                href="mailto:info@ctiddp.com"
                className="text-blue-light hover:underline"
              >
                info@ctiddp.com
              </a>
            </p>

            <p>
              Phone:{' '}
              <a
                href="tel:+918790013772"
                className="text-blue-light hover:underline"
              >
                +91 87900 13772
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}