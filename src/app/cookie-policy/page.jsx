import Link from 'next/link'

export const metadata = {
  title: 'Cookie Policy | CTIDDP',
  description:
    'Read the official Cookie Policy for CTIDDP regarding website cookies, analytics, tracking technologies, and user preferences.',
  alternates: {
    canonical: 'https://www.ctiddp.com/cookie-policy',
  },
}

export default function CookiePolicyPage() {
  return (
    <main className="bg-black text-white px-4 sm:px-8 lg:px-16 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-heading mb-4">
          Cookie Policy
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
            This Cookie Policy explains how CTIDDP uses cookies and similar
            technologies when you visit our website. By continuing to use our
            website, you agree to the use of cookies as described in this
            policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-heading mb-3">
            2. What Are Cookies?
          </h2>

          <p className="text-muted">
            Cookies are small text files stored on your device when you visit a
            website. They help websites function efficiently, remember user
            preferences, and improve browsing experience.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-heading mb-3">
            3. Types of Cookies We Use
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-heading mb-2">
                Essential Cookies
              </h3>

              <p className="text-muted">
                These cookies are necessary for core website functionality,
                including navigation, security, and form submissions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-heading mb-2">
                Performance & Analytics Cookies
              </h3>

              <p className="text-muted">
                These cookies help us understand how visitors interact with our
                website by collecting anonymous usage and performance data.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-heading mb-2">
                Functional Cookies
              </h3>

              <p className="text-muted">
                These cookies remember user preferences and improve personalized
                experiences on the website.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-heading mb-2">
                Marketing & Advertising Cookies
              </h3>

              <p className="text-muted">
                These cookies may be used to deliver relevant advertisements,
                measure campaign effectiveness, and track interactions with
                marketing content.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-heading mb-3">
            4. Third-Party Cookies
          </h2>

          <p className="text-muted">
            CTIDDP may use third-party services such as analytics tools,
            advertising platforms, chat integrations, or embedded content that
            place cookies on your device. These third parties manage their own
            cookie and privacy practices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-heading mb-3">
            5. How We Use Cookies
          </h2>

          <p className="text-muted mb-4">
            Cookies may be used to:
          </p>

          <ul className="list-disc pl-6 text-muted space-y-2">
            <li>Maintain website security and functionality</li>
            <li>Analyze website traffic and user behavior</li>
            <li>Improve website performance and experience</li>
            <li>Remember user settings and preferences</li>
            <li>Support marketing and advertising activities</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-heading mb-3">
            6. Managing Cookies
          </h2>

          <p className="text-muted">
            Most web browsers allow you to control or disable cookies through
            browser settings. Disabling certain cookies may affect website
            functionality and user experience.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-heading mb-3">
            7. Data Protection
          </h2>

          <p className="text-muted">
            Information collected through cookies is handled securely and in
            accordance with our{' '}
            <Link
              href="/privacy-policy"
              className="text-blue-light hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-heading mb-3">
            8. Updates to This Cookie Policy
          </h2>

          <p className="text-muted">
            CTIDDP may update this Cookie Policy periodically. Continued use of
            the website after updates indicates acceptance of the revised
            policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-heading mb-3">
            9. Contact Information
          </h2>

          <p className="text-muted mb-2">
            For questions related to this Cookie Policy, please contact:
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