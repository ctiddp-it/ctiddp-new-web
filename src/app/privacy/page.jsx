import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | CTIDDP',
  description:
    'Read the official Privacy Policy for CTIDDP regarding data collection, usage, security, cookies, and customer information handling.',
  alternates: {
    canonical: 'https://www.ctiddp.com/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-black text-white px-4 sm:px-8 lg:px-16 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-heading mb-4">
          Privacy Policy
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
            1. Introduction
          </h2>

          <p className="text-muted">
            CTIDDP values your privacy and is committed to protecting your
            personal and business information. This Privacy Policy explains how
            we collect, use, store, and safeguard your information when you use
            our website or services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-heading mb-3">
            2. Information We Collect
          </h2>

          <p className="text-muted mb-4">
            We may collect the following types of information:
          </p>

          <ul className="list-disc pl-6 text-muted space-y-2">
            <li>Name, company name, and contact details</li>
            <li>Email address and phone number</li>
            <li>Shipment and logistics-related information</li>
            <li>Billing and payment-related information</li>
            <li>Business documents and import/export details</li>
            <li>Website usage data, IP address, and browser information</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-heading mb-3">
            3. How We Use Your Information
          </h2>

          <p className="text-muted mb-4">
            The information collected may be used to:
          </p>

          <ul className="list-disc pl-6 text-muted space-y-2">
            <li>Provide logistics and sourcing services</li>
            <li>Process enquiries, shipments, and transactions</li>
            <li>Coordinate customs clearance and delivery operations</li>
            <li>Improve website functionality and user experience</li>
            <li>Send service updates and operational communications</li>
            <li>Maintain legal, accounting, and compliance records</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-heading mb-3">
            4. Information Sharing
          </h2>

          <p className="text-muted mb-4">
            CTIDDP does not sell personal information. Information may be shared
            only with:
          </p>

          <ul className="list-disc pl-6 text-muted space-y-2">
            <li>Logistics and warehousing partners</li>
            <li>Customs brokers and government authorities</li>
            <li>Payment processing providers</li>
            <li>Technology and service providers supporting operations</li>
            <li>Legal authorities where required by law</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-heading mb-3">
            5. Data Security
          </h2>

          <p className="text-muted">
            We implement reasonable administrative, technical, and operational
            safeguards to protect your information from unauthorized access,
            misuse, disclosure, or loss. However, no online system can be
            guaranteed as completely secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-heading mb-3">
            6. Cookies & Tracking Technologies
          </h2>

          <p className="text-muted">
            Our website may use cookies and analytics tools to improve
            functionality, monitor traffic, and enhance user experience. By
            using our website, you consent to the use of such technologies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-heading mb-3">
            7. Third-Party Services
          </h2>

          <p className="text-muted">
            Our website may contain links to third-party websites or services.
            CTIDDP is not responsible for the privacy practices, content, or
            security of external websites.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-heading mb-3">
            8. Data Retention
          </h2>

          <p className="text-muted">
            We retain information only for as long as necessary to provide
            services, comply with legal obligations, resolve disputes, and
            enforce agreements.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-heading mb-3">
            9. Your Rights
          </h2>

          <p className="text-muted mb-4">
            Depending on applicable laws, you may have the right to:
          </p>

          <ul className="list-disc pl-6 text-muted space-y-2">
            <li>Request access to your personal information</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of information where applicable</li>
            <li>Withdraw consent for certain communications</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-heading mb-3">
            10. Children's Privacy
          </h2>

          <p className="text-muted">
            CTIDDP services are intended for businesses and individuals above
            the age of 18. We do not knowingly collect personal information from
            children.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-heading mb-3">
            11. Updates to This Privacy Policy
          </h2>

          <p className="text-muted">
            CTIDDP may update this Privacy Policy from time to time. Continued
            use of our website or services after updates indicates acceptance of
            the revised policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-heading mb-3">
            12. Contact Information
          </h2>

          <p className="text-muted mb-2">
            For any questions regarding this Privacy Policy, please contact:
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

            <p>
              Website:{' '}
              <Link
                href="https://www.ctiddp.com"
                className="text-blue-light hover:underline"
              >
                www.ctiddp.com
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}