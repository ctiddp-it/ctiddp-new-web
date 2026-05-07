import Breadcrumb from "@/components/service/Breadcrumb"
import Hero from "@/components/service/Hero"
import CTA from "@/components/service/CTA"

import {
  CheckCircle2,
  Camera,
  PackageCheck,
  ShieldCheck,
  ClipboardList,
  FileText,
  Eye,
  Truck,
  Clock,
  Building2,
  Layers,
  AlertTriangle,
  ThumbsUp,
  Calendar,
  MapPin,
  BarChart3,
  Users,
} from "lucide-react"

export const metadata = {
  title: "QC and Pre-Shipment Inspection in China | CTIDDP",
  description:
    "On-ground quality control and pre-shipment inspection in China with photo/video reports, defect classification, and packaging checks.",
  alternates: {
    canonical: "https://www.ctiddp.com/services/qc-inspection",
  },
}

export default function Page() {
  return (
    <main className="bg-black text-white">
      <Breadcrumb current="QC and Inspection" />

      {/* HERO SECTION */}
      <Hero
        title="QC and Pre-Shipment Inspection in China | Quality Control for Imports to India"
        subtitle="Ensure every shipment meets your specifications before it leaves the factory with structured QC checks and report-based decisions."
        badge="Quality Control & PSI"
        bgImage="/images/services/young-female-warehouse-worker-checks-counting-cardboard-boxes-warehouse-using.jpeg"
      />

      {/* WHAT IS PRE-SHIPMENT INSPECTION */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
              The Quality Gateway
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5">
              What is QC & Pre-Shipment Inspection?
            </h2>

            <p className="text-white/70 text-lg mb-5">
              Pre-shipment inspection (PSI) is a structured quality check
              conducted when production is complete (or ~80–100% finished) and
              goods are ready for dispatch.
            </p>

            <div className="space-y-3">
              <p className="text-white/60 font-medium">It validates:</p>

              <div className="grid grid-cols-2 gap-2">
                {[
                  "Product quality against specs",
                  "Quantity and assortment",
                  "Workmanship and finish",
                  "Packaging and labeling",
                  "Carton integrity",
                  "Loading readiness",
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
            <ShieldCheck className="w-16 h-16 text-blue-400 mx-auto mb-4" />

            <p className="text-white/80 text-lg font-semibold">
              CTIDDP executes PSI at factory/warehouse level
            </p>

            <p className="text-2xl font-bold text-blue-400 mt-2">
              and aligns results with your DDP shipping plan
            </p>
          </div>
        </div>
      </section>

      {/* QC COVERAGE */}
      <section className="px-6 py-24 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
              Comprehensive Checks
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5">
              CTIDDP QC Coverage - What We Inspect
            </h2>

            <p className="text-white/60 max-w-2xl mx-auto">
              Every aspect of your shipment is verified against your
              specifications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-white/10 rounded-2xl p-6 bg-white/5 hover:bg-white/10 transition">
              <Eye className="w-8 h-8 text-blue-400 mb-4" />

              <h3 className="text-lg font-semibold mb-3">
                Product Quality & Workmanship
              </h3>

              <ul className="space-y-2 text-white/60 text-sm">
                <li>• Visual inspection against samples</li>
                <li>• Functional checks (where applicable)</li>
                <li>• Defect identification & categorisation</li>
              </ul>
            </div>

            <div className="border border-white/10 rounded-2xl p-6 bg-white/5 hover:bg-white/10 transition">
              <ClipboardList className="w-8 h-8 text-blue-400 mb-4" />

              <h3 className="text-lg font-semibold mb-3">
                Quantity & Assortment
              </h3>

              <ul className="space-y-2 text-white/60 text-sm">
                <li>• SKU verification</li>
                <li>• Carton count vs purchase order</li>
                <li>• Random sampling as per AQL standards</li>
              </ul>
            </div>

            <div className="border border-white/10 rounded-2xl p-6 bg-white/5 hover:bg-white/10 transition">
              <PackageCheck className="w-8 h-8 text-blue-400 mb-4" />

              <h3 className="text-lg font-semibold mb-3">
                Packaging & Labeling
              </h3>

              <ul className="space-y-2 text-white/60 text-sm">
                <li>• Inner/outer packaging integrity</li>
                <li>• Barcodes, labels, and markings</li>
                <li>• Carton strength & stacking suitability</li>
              </ul>
            </div>

            <div className="border border-white/10 rounded-2xl p-6 bg-white/5 hover:bg-white/10 transition">
              <Truck className="w-8 h-8 text-blue-400 mb-4" />

              <h3 className="text-lg font-semibold mb-3">
                Shipment Readiness
              </h3>

              <ul className="space-y-2 text-white/60 text-sm">
                <li>• Carton dimensions & weight checks</li>
                <li>• Palletisation (if required)</li>
                <li>• Container loading readiness (FCL/LCL)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* INSPECTION METHODS */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
            Methodology
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Inspection Methods We Follow
          </h2>

          <p className="text-white/60 mt-3">
            Structured, standards-based quality verification
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left py-4 px-4 text-white font-semibold">
                  Method
                </th>

                <th className="text-left py-4 px-4 text-white font-semibold">
                  Purpose
                </th>

                <th className="text-left py-4 px-4 text-white font-semibold">
                  Outcome
                </th>
              </tr>
            </thead>

            <tbody>
              {[
                {
                  method: "AQL Sampling",
                  purpose: "Statistical sampling for large batches",
                  outcome: "Consistent quality benchmarking",
                },
                {
                  method: "Visual Inspection",
                  purpose: "Finish, defects, workmanship",
                  outcome: "Clear pass/fail indicators",
                },
                {
                  method: "Functional Testing",
                  purpose: "Product operation checks",
                  outcome: "Performance validation",
                },
                {
                  method: "Packaging Audit",
                  purpose: "Carton, labeling, protection",
                  outcome: "Transit-ready packaging",
                },
                {
                  method: "Quantity Verification",
                  purpose: "Count and assortment check",
                  outcome: "Order accuracy confirmation",
                },
              ].map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-white/10 hover:bg-white/5"
                >
                  <td className="py-4 px-4 font-medium">{row.method}</td>

                  <td className="py-4 px-4 text-white/70">
                    {row.purpose}
                  </td>

                  <td className="py-4 px-4 text-white/70">
                    {row.outcome}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* PROCESS + REPORT */}
      <section className="px-6 py-24 bg-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
              Step by Step
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8">
              Our Inspection Process
            </h2>

            <div className="space-y-4">
              {[
                "Inspection request & PO/spec submission",
                "Inspector assigned near factory location",
                "On-site inspection at factory/warehouse",
                "Sampling and checks as per AQL plan",
                "Photo & video documentation captured",
                "Detailed inspection report shared",
                "Approval for shipment / rework coordination",
              ].map((step, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm font-bold shrink-0">
                    {i + 1}
                  </div>

                  <span className="text-white/80">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
              Deliverables
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8">
              What You Receive After Inspection
            </h2>

            <div className="bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-xl font-semibold mb-5 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-400" />
                Actionable Inspection Report
              </h3>

              <div className="space-y-4">
                {[
                  {
                    icon: Camera,
                    text: "High-resolution photos & videos",
                  },
                  {
                    icon: AlertTriangle,
                    text: "Defect list (minor/major/critical)",
                  },
                  {
                    icon: ClipboardList,
                    text: "Quantity verification summary",
                  },
                  {
                    icon: PackageCheck,
                    text: "Packaging & labeling assessment",
                  },
                  {
                    icon: ThumbsUp,
                    text:
                      "Clear recommendation: Pass / Conditional Pass / Rework",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-2 rounded-lg bg-white/5"
                  >
                    <item.icon className="w-4 h-4 text-blue-400" />

                    <span className="text-white/70 text-sm">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DDP + TIMING */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
              Seamless Integration
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8">
              Integration with DDP Shipping
            </h2>

            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <div className="text-center mb-6">
                <p className="text-white/80 text-lg">
                  Quality to Delivery - One Flow
                </p>

                <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
                  {[
                    "QC",
                    "Approval",
                    "Pickup",
                    "Freight",
                    "Customs",
                    "Delivery",
                  ].map((stage, i) => (
                    <div key={i} className="flex items-center">
                      <span className="bg-blue-500/20 px-3 py-1 rounded-full text-sm text-blue-300">
                        {stage}
                      </span>

                      {i < 5 && (
                        <span className="text-white/30 mx-1">→</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                {[
                  "Shipment moves only after quality validation",
                  "Reduced rework at destination",
                  "Better coordination with supplier and warehouse",
                  "Smooth transition into DDP execution",
                ].map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-white/70 text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />

                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
              Timing
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8">
              When to Schedule Pre-Shipment Inspection
            </h2>

            <div className="space-y-4">
              {[
                {
                  icon: Calendar,
                  text: "When production is 80–100% complete",
                },
                {
                  icon: Clock,
                  text:
                    "Before final balance payment (where applicable)",
                },
                {
                  icon: Truck,
                  text: "Prior to cargo pickup and consolidation",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5"
                >
                  <item.icon className="w-6 h-6 text-blue-400" />

                  <span className="text-white/80">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="px-6 py-24 bg-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
            Expertise Across Sectors
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-12">
            Industries We Cover
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Consumer Goods",
              "Electronics & Accessories",
              "Machinery & Components",
              "Furniture & Home Products",
              "Packaging Materials",
              "Apparel & Textiles",
            ].map((industry, i) => (
              <div
                key={i}
                className="p-4 border border-white/10 rounded-xl text-center hover:border-blue-500/30 transition bg-white/5"
              >
                <Building2 className="w-6 h-6 text-blue-400 mx-auto mb-2 opacity-70" />

                <span className="text-sm text-white/70">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE + TYPES */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
              Trusted Partner
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8">
              Why Choose CTIDDP for QC & Inspection
            </h2>

            <div className="space-y-4">
              {[
                {
                  icon: MapPin,
                  text:
                    "On-ground inspection across China manufacturing hubs",
                },
                {
                  icon: BarChart3,
                  text: "Standardised AQL-based checks",
                },
                {
                  icon: Camera,
                  text:
                    "Clear visual documentation (photo/video)",
                },
                {
                  icon: Calendar,
                  text:
                    "Alignment with your DDP shipment timeline",
                },
                {
                  icon: Users,
                  text:
                    "Coordination with suppliers for next steps",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition"
                >
                  <item.icon className="w-5 h-5 text-blue-400" />

                  <span className="text-white/80">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
              Flexible Options
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8">
              Common Inspection Types We Offer
            </h2>

            <div className="grid gap-3">
              {[
                {
                  type: "Pre-Production Check (PPC)",
                  desc:
                    "Raw material & component verification before manufacturing begins",
                },
                {
                  type: "During Production Inspection (DPI)",
                  desc:
                    "In-process checks while production is ongoing",
                },
                {
                  type: "Pre-Shipment Inspection (PSI)",
                  desc:
                    "Final check when goods are packed and ready",
                },
                {
                  type: "Container Loading Supervision (CLS)",
                  desc:
                    "Loading oversight to prevent damage and errors",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border border-white/10 bg-white/5 hover:border-blue-500/30 transition"
                >
                  <div className="flex items-center gap-3">
                    <Layers className="w-5 h-5 text-blue-400" />

                    <div>
                      <h4 className="font-semibold text-white">
                        {item.type}
                      </h4>

                      <p className="text-white/50 text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Book Your QC & Pre-Shipment Inspection"
        text="Validate your goods before they move to shipping. Get photo/video evidence, defect reports, and clear pass/rework recommendations."
        buttonLabel="Schedule Inspection Now"
      />
    </main>
  )
}