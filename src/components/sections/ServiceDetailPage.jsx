import Link from 'next/link'

function SectionTable({ table }) {
  if (!table) return null

  return (
    <div className="overflow-x-auto border border-[rgba(37,99,235,0.2)] rounded-[4px]">
      <table className="w-full min-w-[640px] text-left">
        <thead className="bg-[rgba(37,99,235,0.08)]">
          <tr>
            {table.headers.map((header) => (
              <th key={header} className="px-4 py-3 text-xs uppercase tracking-[1px] text-blue-light">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-t border-[rgba(37,99,235,0.12)]">
              {row.map((cell, cellIndex) => (
                <td key={`${rowIndex}-${cellIndex}`} className="px-4 py-3 text-sm text-muted">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function ServiceDetailPage({ breadcrumb, pageLabel, canonicalUrl, title, intro, sections, cta }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${canonicalUrl}#service`,
        name: pageLabel,
        serviceType: pageLabel,
        provider: {
          '@type': 'Organization',
          name: 'CTIDDP',
          url: 'https://www.ctiddp.com/',
        },
        areaServed: {
          '@type': 'Country',
          name: 'India',
        },
        description: intro,
        url: canonicalUrl,
      },
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: title,
        isPartOf: {
          '@id': 'https://www.ctiddp.com/#website',
        },
        mainEntity: {
          '@id': `${canonicalUrl}#service`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.ctiddp.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: 'https://www.ctiddp.com/services',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: pageLabel,
            item: canonicalUrl,
          },
        ],
      },
    ],
  }

  return (
    <main className="bg-black text-white font-['Outfit',sans-serif]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <div className="flex items-center gap-[7px] px-4 sm:px-[60px] py-[11px] bg-[rgba(37,99,235,0.03)] border-b border-[rgba(37,99,235,0.07)] overflow-x-auto">
        <span className="text-[11px] text-muted/60 whitespace-nowrap">
          <Link href="/" className="text-muted/60 no-underline">Home</Link>
        </span>
        <span className="text-[11px] text-[rgba(37,99,235,0.3)] whitespace-nowrap">/</span>
        <span className="text-[11px] text-muted/60 whitespace-nowrap">
          <Link href="/services" className="text-muted/60 no-underline">Services</Link>
        </span>
        <span className="text-[11px] text-[rgba(37,99,235,0.3)] whitespace-nowrap">/</span>
        <span className="text-[11px] text-blue-light whitespace-nowrap">{breadcrumb}</span>
      </div>

      <section className="relative overflow-hidden flex items-center justify-center text-center min-h-[40vh] px-4 sm:px-[60px] pt-[60px] sm:pt-[80px] pb-[52px] sm:pb-[64px] bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.1)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-[920px]">
          <div className="inline-flex items-center gap-2 bg-[rgba(37,99,235,0.1)] border border-border text-blue-light text-[11px] font-medium tracking-[2px] uppercase px-5 py-2 rounded-full mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
            Service Detail
          </div>
          <h1 className="font-heading text-[clamp(30px,4.6vw,54px)] font-light leading-[1.12] mb-4">{title}</h1>
          <p className="text-[15px] text-muted max-w-[800px] mx-auto">{intro}</p>
        </div>
      </section>

      <section className="px-4 sm:px-[60px] py-[56px] sm:py-[72px] bg-deep">
        <div className="max-w-[1100px] mx-auto space-y-8">
          {sections.map((section) => (
            <article key={section.title} className="bg-[var(--overlay-card)] border border-[rgba(37,99,235,0.12)] rounded-[4px] p-5 sm:p-7">
              <h2 className="font-heading text-[clamp(24px,3vw,34px)] font-light mb-3">{section.title}</h2>
              {section.subtitle ? <h3 className="text-lg text-blue-light mb-3">{section.subtitle}</h3> : null}

              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="text-[14px] text-muted leading-relaxed mb-3">{paragraph}</p>
              ))}

              {section.items?.length ? (
                <ul className="grid gap-2 mt-4">
                  {section.items.map((item) => (
                    <li key={item} className="text-[14px] text-muted flex items-start gap-2">
                      <span className="text-blue-light mt-0.5">-</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {section.table ? <div className="mt-5"><SectionTable table={section.table} /></div> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="relative text-center px-4 sm:px-[60px] py-12 sm:py-16 overflow-hidden bg-linear-to-br from-[rgba(37,99,235,0.12)] to-[rgba(37,99,235,0.05)] border-y border-[rgba(37,99,235,0.15)]">
        <h2 className="font-heading text-[clamp(28px,3.5vw,44px)] font-light text-white leading-[1.2] mb-3">{cta.title}</h2>
        <p className="text-sm text-muted max-w-[500px] mx-auto mb-7">{cta.text}</p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-cyan-500 text-[#FFFFFF] px-6 sm:px-8 py-3 rounded-[3px] font-bold text-[13px] tracking-[1px] uppercase transition-all hover:scale-[1.02]"
          >
            {cta.buttonLabel}
          </Link>
        </div>
      </section>
    </main>
  )
}
