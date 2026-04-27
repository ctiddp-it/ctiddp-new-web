"use client"

import Link from "next/link"

export default function Breadcrumb({ current }) {
  return (
    <div className="flex items-center gap-[7px] px-4 sm:px-[60px] py-[11px] bg-[rgba(37,99,235,0.03)] border-b border-[rgba(37,99,235,0.07)] overflow-x-auto">

      <span className="text-[11px] text-muted/60 whitespace-nowrap">
        <Link href="/" className="text-muted/60 no-underline">
          Home
        </Link>
      </span>

      <span className="text-[11px] text-[rgba(37,99,235,0.3)] whitespace-nowrap">/</span>

      <span className="text-[11px] text-muted/60 whitespace-nowrap">
        <Link href="/services" className="text-muted/60 no-underline">
          Services
        </Link>
      </span>

      <span className="text-[11px] text-[rgba(37,99,235,0.3)] whitespace-nowrap">/</span>

      <span className="text-[11px] text-blue-light whitespace-nowrap">
        {current}
      </span>
    </div>
  )
}