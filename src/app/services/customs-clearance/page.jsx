import Breadcrumb from "@/components/service/Breadcrumb"
import Hero from "@/components/service/Hero"
import CTA from "@/components/service/CTA"

import {
  CheckCircle2,
  ShieldCheck,
  FileText,
  Calculator,
  Truck,
  Clock,
  Building2,
  Package,
  Layers,
  MapPin,
  Users,
  FileBarChart,
  Globe,
  TrendingUp,
} from "lucide-react"

export const metadata = {
  title: "Customs Clearance Services | China to India Import Compliance",
  description:
    "End-to-end customs clearance under DDP for China to India imports including documentation, duty calculation, and clearance coordination.",
  alternates: {
    canonical: "https://www.ctiddp.com/services/customs-clearance",
  },
}

export default function Page() {
  return (
    <main className="bg-black text-white">
      <Breadcrumb current="Customs Clearance" />

      {/* HERO SECTION */}
      <Hero
        title="Customs Clearance Services | China to India Import Compliance (DDP)"
        subtitle="Ensure fast, compliant entry of your cargo into India with end-to-end customs clearance under DDP. CTIDDP manages documentation, duty calculation, and clearance execution, so your shipments move from port to delivery without friction."
        badge="India Import Compliance"
        bgImage="/images/services/worker-factory-checking-number-white-plastic-bottles-warehouse.jpeg"
      />

      {/* WHAT IS CUSTOMS CLEARANCE */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
              The Gateway to India
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5 font-heading">
              What is Customs Clearance in DDP Shipping?
            </h2>

            <p className="text-white/70 text-lg mb-5">
              Customs clearance is the process of getting your goods legally
              approved for import into India. Under a DDP model, CTIDDP
              handles:
            </p>

            <div className="space-y-3">
              <div className="grid grid-cols-1 gap-2">
                {[
                  "Import documentation and filing",
                  "Duty & tax assessment",
                  "Coordination with customs authorities",
                  "Clearance at port/airport",
                  "Handover for last-mile delivery",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-white/60 text-sm"
                  >
                    <CheckCircle2 className="w-3 h-3 text-blue-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-transparent border border-white/10 rounded-2xl p-8 text-center">
            <Globe className="w-16 h-16 text-blue-400 mx-auto mb-4" />

            <p className="text-white/80 text-lg font-semibold">
              Single accountable workflow
            </p>

            <p className="text-2xl font-bold text-blue-400 mt-2">
              from origin to doorstep
            </p>
          </div>
        </div>
      </section>

      {/* CLEARANCE SCOPE */}
      <section className="px-6 py-24 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
              Complete Coverage
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5 font-heading">
              CTIDDP Customs Clearance Scope
            </h2>

            <p className="text-white/60 max-w-2xl mx-auto">
              End-to-end customs handling from documentation to cargo release
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
              <FileText className="w-10 h-10 text-blue-400 mb-5" />

              <h3 className="text-xl font-semibold mb-3">
                Documentation Management
              </h3>

              <ul className="space-y-2 text-white/60 text-sm">
                <li>
                  • Commercial invoice & packing list validation
                </li>
                <li>• HS code classification support</li>
                <li>• Import documentation preparation</li>
                <li>• Bill of Entry filing</li>
              </ul>
            </div>

            <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
              <Calculator className="w-10 h-10 text-blue-400 mb-5" />

              <h3 className="text-xl font-semibold mb-3">
                Duty & Tax Handling
              </h3>

              <ul className="space-y-2 text-white/60 text-sm">
                <li>• BCD, IGST, SWS calculation</li>
                <li>
                  • Duty planning aligned with product category
                </li>
                <li>
                  • FTA applicability guidance (where relevant)
                </li>
              </ul>
            </div>

            <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
              <ShieldCheck className="w-10 h-10 text-blue-400 mb-5" />

              <h3 className="text-xl font-semibold mb-3">
                Clearance Execution
              </h3>

              <ul className="space-y-2 text-white/60 text-sm">
                <li>
                  • Port and airport clearance coordination
                </li>
                <li>
                  • Examination handling & query resolution
                </li>
                <li>
                  • Release of cargo for onward delivery
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CLEARANCE FLOW */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
            Step by Step
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-5 font-heading">
            End-to-End Clearance Flow
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto">
            Structured process from pre-arrival to cargo release
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {[
            {
              step: "Pre-Arrival Preparation",
              desc: "Documents reviewed and aligned before cargo arrival",
            },
            {
              step: "Filing & Assessment",
              desc: "Bill of Entry filed with correct classification",
            },
            {
              step: "Customs Review",
              desc: "Queries handled with supporting documents",
            },
            {
              step: "Duty Settlement",
              desc: "Applicable duties and taxes processed",
            },
            {
              step: "Cargo Release",
              desc: "Shipment cleared and moved to delivery network",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-5 p-4 border-b border-white/10 last:border-0"
            >
              <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm font-bold shrink-0">
                {i + 1}
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  {item.step}
                </h3>

                <p className="text-white/50 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPLIANCE + SCENARIOS */}
      <section className="px-6 py-24 bg-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
              Regulatory Excellence
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">
              Compliance Areas We Manage
            </h2>

            <div className="space-y-4">
              {[
                {
                  icon: FileBarChart,
                  text: "HS code accuracy and classification",
                },
                {
                  icon: Users,
                  text: "Importer details and KYC alignment",
                },
                {
                  icon: ShieldCheck,
                  text: "Product-specific compliance requirements",
                },
                {
                  icon: Package,
                  text: "Labeling and packaging checks (as applicable)",
                },
                {
                  icon: Building2,
                  text: "Regulatory coordination with authorities",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-lg"
                >
                  <item.icon className="w-5 h-5 text-blue-400" />

                  <span className="text-white/80">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
              Perfect Fit
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">
              Suitable for These Import Scenarios
            </h2>

            <div className="space-y-4">
              {[
                {
                  icon: MapPin,
                  text: "China to India DDP shipments",
                },
                {
                  icon: Layers,
                  text: "Multi-category imports under one shipment",
                },
                {
                  icon: Truck,
                  text: "Bulk shipments (FCL/LCL/Air)",
                },
                {
                  icon: TrendingUp,
                  text: "Regular importers scaling operations",
                },
                {
                  icon: Building2,
                  text: "Canton Fair sourcing shipments",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5"
                >
                  <item.icon className="w-5 h-5 text-blue-400" />

                  <span className="text-white/80">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl border border-blue-500/20 p-10">
          <div className="text-center mb-8">
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
              Seamless Integration
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 font-heading">
              Integrated with CTIDDP Ecosystem
            </h2>

            <p className="text-white/60 max-w-2xl mx-auto">
              One Partner, One Flow - Complete visibility across every stage
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              "Supplier Payments",
              "QC & Inspection",
              "Warehousing & Consolidation",
              "Global DDP Shipping",
              "Last-Mile Delivery",
            ].map((service, i) => (
              <span
                key={i}
                className="bg-white/10 px-4 py-2 rounded-full text-sm text-white/80"
              >
                {service}
              </span>
            ))}
          </div>

          <p className="text-center text-white/70 text-sm">
            Customs clearance is fully integrated with the entire supply
            chain, ensuring complete visibility and coordination.
          </p>
        </div>
      </section>

      {/* ADVANTAGES + SHIPMENT TYPES */}
      <section className="px-6 py-24 bg-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
              Operational Strength
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">
              Key Advantages of CTIDDP Customs Clearance
            </h2>

            <div className="space-y-4">
              {[
                {
                  icon: MapPin,
                  text: "Dedicated customs handling for China–India trade",
                },
                {
                  icon: Clock,
                  text: "Pre-planned documentation to reduce processing time",
                },
                {
                  icon: Calculator,
                  text: "Structured duty calculation and transparency",
                },
                {
                  icon: Users,
                  text: "Direct coordination with port and customs teams",
                },
                {
                  icon: Truck,
                  text: "Integrated delivery after clearance",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-lg"
                >
                  <item.icon className="w-5 h-5 text-blue-400" />

                  <span className="text-white/80">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
              Flexible Capabilities
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">
              Shipment Types Covered
            </h2>

            <div className="grid gap-3">
              {[
                {
                  type: "Sea Freight",
                  desc: "FCL & LCL shipments",
                },
                {
                  type: "Air Freight",
                  desc: "Time-sensitive cargo",
                },
                {
                  type: "Consolidated Cargo",
                  desc: "Multi-supplier shipments",
                },
                {
                  type: "Multi-Supplier Shipments",
                  desc: "Combined from different vendors",
                },
                {
                  type: "Commercial Imports",
                  desc: "Across all product categories",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg border border-white/10 bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <Package className="w-4 h-4 text-blue-400" />

                    <span className="text-white/80 text-sm font-medium">
                      {item.type}
                    </span>

                    <span className="text-white/40 text-xs ml-auto">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Clear Your Shipments with Confidence"
        text="Streamline your imports with structured, compliant customs clearance. One partner. One workflow. Complete peace of mind from port to delivery."
        buttonLabel="Get DDP Quote"
      />
    </main>
  )
}