import Breadcrumb from "@/components/service/Breadcrumb"
import Hero from "@/components/service/Hero"
import CTA from "@/components/service/CTA"

import {
  CheckCircle2,
  Truck,
  Warehouse,
  FileText,
  Package,
  TrendingDown,
  Users,
  Building2,
  Layers,
  GitBranch,
  Boxes,
  MapPin,
  Calendar,
  ArrowRight,
  Globe,
  Camera,
  ClipboardList,
} from "lucide-react"

export const metadata = {
  title: "Multi-Vendor Consolidation in China | CTIDDP",
  description:
    "Combine shipments from multiple China suppliers into one cost-efficient DDP cargo with pickup, consolidation, and dispatch management.",
  alternates: {
    canonical:
      "https://www.ctiddp.com/services/multi-vendor-consolidation",
  },
}

export default function Page() {
  return (
    <main className="bg-black text-white">
      <Breadcrumb current="Multi-Vendor Consolidation" />

      {/* HERO SECTION */}
      <Hero
        title="Multi-Vendor Consolidation in China | Reduce Costs with Smart DDP Shipping"
        subtitle="Optimize your imports by combining shipments from multiple suppliers into a single cost-efficient cargo. CTIDDP manages collection, consolidation, documentation, and dispatch, ensuring smooth movement from multiple factories to one final delivery in India."
        badge="Smart Consolidation"
        bgImage="/images/services/arranging-order-deliveries-using-invoice-identification-codes.jpeg"
      />

      {/* WHAT IS MULTI-VENDOR CONSOLIDATION */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
              The Smart Approach
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5 font-heading">
              What is Multi-Vendor Consolidation?
            </h2>

            <p className="text-white/70 text-lg mb-5">
              Multi-vendor consolidation allows you to source products from
              multiple suppliers in China and combine them into one shipment
              under a single logistics plan.
            </p>

            <div className="space-y-3">
              <div className="grid grid-cols-1 gap-2">
                {[
                  "Source products from multiple suppliers in China",
                  "Combine them into one shipment",
                  "Ship together under a single logistics plan",
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
            <TrendingDown className="w-16 h-16 text-blue-400 mx-auto mb-4" />

            <p className="text-white/80 text-lg font-semibold">
              Reduces shipping costs
            </p>

            <p className="text-2xl font-bold text-blue-400 mt-2">
              and improves operational efficiency
            </p>
          </div>
        </div>
      </section>

      {/* HOW CTIDDP HANDLES CONSOLIDATION */}
      <section className="px-6 py-24 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
              Our Process
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5 font-heading">
              How CTIDDP Handles Consolidation
            </h2>

            <p className="text-white/60 max-w-2xl mx-auto">
              End-to-end management from supplier pickup to dispatch
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-white/10 rounded-2xl p-6 bg-white/5 hover:bg-white/10 transition">
              <Truck className="w-8 h-8 text-blue-400 mb-4" />

              <h3 className="text-lg font-semibold mb-3">
                Supplier Pickup & Coordination
              </h3>

              <ul className="space-y-2 text-white/60 text-sm">
                <li>• Cargo collection from multiple factories</li>
                <li>• Supplier coordination and scheduling</li>
                <li>• Acceptance from any China address</li>
              </ul>
            </div>

            <div className="border border-white/10 rounded-2xl p-6 bg-white/5 hover:bg-white/10 transition">
              <Warehouse className="w-8 h-8 text-blue-400 mb-4" />

              <h3 className="text-lg font-semibold mb-3">
                Warehouse Consolidation
              </h3>

              <ul className="space-y-2 text-white/60 text-sm">
                <li>• Goods received at consolidation warehouse</li>
                <li>• Sorting and grouping based on shipment plan</li>
                <li>• Secure storage before dispatch</li>
              </ul>
            </div>

            <div className="border border-white/10 rounded-2xl p-6 bg-white/5 hover:bg-white/10 transition">
              <FileText className="w-8 h-8 text-blue-400 mb-4" />

              <h3 className="text-lg font-semibold mb-3">
                Documentation & Preparation
              </h3>

              <ul className="space-y-2 text-white/60 text-sm">
                <li>• Packing list and invoice preparation</li>
                <li>• HS code verification</li>
                <li>• SWS and duty calculation alignment</li>
              </ul>
            </div>

            <div className="border border-white/10 rounded-2xl p-6 bg-white/5 hover:bg-white/10 transition">
              <Package className="w-8 h-8 text-blue-400 mb-4" />

              <h3 className="text-lg font-semibold mb-3">
                Shipment Dispatch
              </h3>

              <ul className="space-y-2 text-white/60 text-sm">
                <li>• Consolidated cargo shipped via air or sea</li>
                <li>• Integrated with DDP shipping process</li>
                <li>• Routed for customs clearance and delivery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
            Designed for Importers
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-5 font-heading">
            Key Features of Our Consolidation Service
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              icon: GitBranch,
              text: "Accept shipments from multiple suppliers",
            },
            {
              icon: MapPin,
              text: "Centralised consolidation warehouse in China",
            },
            {
              icon: ClipboardList,
              text: "Structured documentation handling",
            },
            {
              icon: Camera,
              text: "Arrival photo verification for each shipment",
            },
            {
              icon: Globe,
              text: "Ready for DDP shipping execution",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/5 hover:border-blue-500/30 transition"
            >
              <item.icon className="w-5 h-5 text-blue-400 shrink-0" />

              <span className="text-white/80 text-sm">{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* WORKFLOW + TYPES */}
      <section className="px-6 py-24 bg-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
              Step by Step
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">
              Consolidation Workflow
            </h2>

            <div className="space-y-4">
              {[
                "Suppliers dispatch goods to consolidation warehouse",
                "Cargo received, verified, and documented",
                "Shipments combined into one load",
                "Packing list and invoice finalised",
                "Cargo dispatched under DDP shipping",
              ].map((step, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm font-bold shrink-0">
                    {i + 1}
                  </div>

                  <span className="text-white/80">{step}</span>

                  {i < 4 && (
                    <ArrowRight className="w-4 h-4 text-white/20 ml-auto shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
              Flexible Options
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">
              Types of Consolidation Supported
            </h2>

            <div className="space-y-3">
              {[
                {
                  icon: Boxes,
                  text: "LCL (Less than Container Load) consolidation",
                  desc: "Perfect for smaller shipments",
                },
                {
                  icon: Layers,
                  text: "Multi-category product consolidation",
                  desc: "Different products in one shipment",
                },
                {
                  icon: Package,
                  text: "Small batch + bulk shipment combination",
                  desc: "Flexible volume mixing",
                },
                {
                  icon: Globe,
                  text: "Air + sea mixed logistics planning",
                  desc: "Optimized mode selection",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border border-white/10 bg-white/5 hover:border-blue-500/30 transition"
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-blue-400" />

                    <div>
                      <span className="text-white/80 font-medium">
                        {item.text}
                      </span>

                      <p className="text-white/40 text-xs">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS + USE CASES */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
              Business Advantages
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">
              Benefits for Importers
            </h2>

            <div className="space-y-4">
              {[
                {
                  icon: TrendingDown,
                  text: "Lower shipping cost per unit",
                },
                {
                  icon: Package,
                  text: "Single shipment instead of multiple dispatches",
                },
                {
                  icon: FileText,
                  text: "Simplified documentation process",
                },
                {
                  icon: Users,
                  text: "Better control over supplier shipments",
                },
                {
                  icon: Calendar,
                  text: "Improved logistics efficiency",
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
              Perfect Fit
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">
              Ideal Use Cases
            </h2>

            <div className="space-y-4">
              {[
                {
                  icon: GitBranch,
                  text: "Sourcing from multiple suppliers in China",
                },
                {
                  icon: Package,
                  text: "Small shipments that need combining",
                },
                {
                  icon: TrendingDown,
                  text: "Importers optimizing logistics costs",
                },
                {
                  icon: Building2,
                  text: "Businesses scaling product sourcing",
                },
                {
                  icon: MapPin,
                  text: "Canton Fair sourcing consolidation",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition"
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
      <section className="px-6 py-24 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl border border-blue-500/20 p-10">
            <div className="text-center mb-8">
              <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
                Connected Ecosystem
              </span>

              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 font-heading">
                Integrated with CTIDDP Ecosystem
              </h2>

              <p className="text-white/60 max-w-2xl mx-auto">
                One partner for complete flow - from supplier to delivery
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                "Supplier Payments",
                "QC & Pre-Shipment Inspection",
                "Global DDP Shipping",
                "Customs Clearance",
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
              Creating a fully connected logistics system from supplier to
              delivery.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Consolidate Smart. Ship Efficiently."
        text="Reduce cost and streamline your imports with expert consolidation. One warehouse. One shipment. One DDP contract."
        buttonLabel="Get DDP Quote"
      />
    </main>
  )
}