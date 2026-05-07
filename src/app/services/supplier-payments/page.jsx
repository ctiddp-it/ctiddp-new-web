import Breadcrumb from "@/components/service/Breadcrumb"
import Hero from "@/components/service/Hero"
import CTA from "@/components/service/CTA"

import {
  CheckCircle2,
  Landmark,
  BadgeCheck,
  FileText,
  Sparkles,
  Shield,
  Globe,
  Clock,
  Building2,
  Users,
  ArrowRight,
  Wallet,
  RefreshCw,
  FileCheck,
  TrendingUp,
} from "lucide-react"

export const metadata = {
  title: "Secure Supplier Payments in China | CTIDDP",
  description:
    "Secure cross-border supplier payment management for China imports with verification, compliance, currency handling, and tracking.",
  alternates: {
    canonical: "https://www.ctiddp.com/services/supplier-payments",
  },
}

export default function Page() {
  return (
    <main className="bg-black text-white">
      <Breadcrumb current="Supplier Payments" />

      {/* HERO */}
      <Hero
        title="Secure Supplier Payments in China | Cross-Border Payment Management by CTIDDP"
        subtitle="Pay your China suppliers with confidence and control through a managed payment process aligned with your shipment execution."
        badge="Cross-Border Payment Management"
        bgImage="/images/services/businessman-uses-online-shopping-card-pay-via-mobile-phone-network.jpeg"
      />

      {/* WHAT IS SUPPLIER PAYMENT MANAGEMENT */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
              The Challenge
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5 font-heading">
              What is Supplier Payment Management for Imports?
            </h2>

            <p className="text-white/70 text-lg mb-6">
              Supplier payment management ensures your funds reach the right
              supplier, through the right channel, with full documentation and
              compliance.
            </p>

            <div className="space-y-3">
              <p className="text-white/60">
                When sourcing from China, payments typically involve:
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "International bank transfers",
                  "Currency conversion (INR to USD/CNY)",
                  "Supplier verification",
                  "Transaction documentation",
                  "Payment tracking",
                ].map((item, i) => (
                  <span
                    key={i}
                    className="bg-white/10 rounded-full px-3 py-1 text-sm text-white/70"
                  >
                    • {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-transparent border border-white/10 rounded-2xl p-8 text-center">
            <Shield className="w-16 h-16 text-blue-400 mx-auto mb-4" />

            <p className="text-white/80 text-lg font-semibold">
              CTIDDP simplifies this entire process
            </p>

            <p className="text-2xl font-bold text-blue-400 mt-2">
              Into a structured, secure workflow
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE HANDLE */}
      <section className="px-6 py-24 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
              End-to-End Solution
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5 font-heading">
              CTIDDP Supplier Payment Solution
            </h2>

            <p className="text-white/60 max-w-2xl mx-auto">
              What we handle - from verification to dispatch coordination
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: BadgeCheck,
                title: "Supplier Verification",
                text:
                  "Supplier account and documentation checks before funds are initiated. Ensure you're paying the right entity.",
              },
              {
                icon: Landmark,
                title: "Cross-Border Payment Handling",
                text:
                  "Structured payment processing from India to China with currency conversion support (INR → USD/CNY).",
              },
              {
                icon: FileText,
                title: "Documentation and Tracking",
                text:
                  "Invoice validation, payment records, and dispatch-aligned transaction visibility from start to finish.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group border border-white/10 rounded-2xl p-8 bg-gradient-to-br from-white/5 to-transparent hover:bg-white/10 transition-all duration-300 hover:border-blue-500/50"
              >
                <item.icon className="w-10 h-10 text-blue-400 mb-5" />

                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-white/65 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-3 pt-8 border-t border-white/10">
            {[
              "Supplier verification before payment",
              "Cross-border payment processing",
              "Currency conversion handling",
              "Invoice & documentation validation",
              "Payment tracking & confirmation",
              "Coordination with supplier for dispatch",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-white/50 text-sm"
              >
                <CheckCircle2 className="w-3 h-3 text-blue-400" />

                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW + FEATURES */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
              Step by Step
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">
              Payment Workflow
            </h2>

            <div className="space-y-4">
              {[
                "You finalise supplier and order details",
                "CTIDDP verifies supplier credentials",
                "Invoice and payment terms are reviewed",
                "Payment is processed via secure channels",
                "Supplier confirms receipt",
                "Production or dispatch is initiated",
              ].map((step, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm font-bold shrink-0">
                    {i + 1}
                  </div>

                  <span className="text-white/80">{step}</span>

                  {i < 5 && (
                    <ArrowRight className="w-4 h-4 text-white/20 ml-auto shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
              Built for Importers
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">
              Key Features
            </h2>

            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <div className="space-y-5">
                {[
                  {
                    icon: Shield,
                    title: "Verified supplier payment flow",
                    desc:
                      "Every transaction starts with supplier confirmation",
                  },
                  {
                    icon: FileCheck,
                    title: "Structured documentation support",
                    desc:
                      "Invoices, receipts, and logs maintained",
                  },
                  {
                    icon: Globe,
                    title: "Cross-border transaction handling",
                    desc:
                      "Seamless INR to CNY/USD processing",
                  },
                  {
                    icon: RefreshCw,
                    title: "Integrated with logistics execution",
                    desc:
                      "Payments trigger shipment readiness",
                  },
                  {
                    icon: Clock,
                    title: "Real-time coordination",
                    desc:
                      "Supplier updates and tracking visibility",
                  },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <feature.icon className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />

                    <div>
                      <h4 className="font-medium text-white">
                        {feature.title}
                      </h4>

                      <p className="text-white/50 text-sm">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAYMENT METHODS */}
      <section className="px-6 py-24 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
              Flexible Options
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 font-heading">
              Payment Methods We Support
            </h2>

            <p className="text-white/60 mt-3">
              Structured payment processing for every stage of procurement
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-4 px-4 text-white font-semibold">
                    Payment Type
                  </th>

                  <th className="text-left py-4 px-4 text-white font-semibold">
                    Use Case
                  </th>

                  <th className="text-left py-4 px-4 text-white font-semibold">
                    Handled By CTIDDP
                  </th>
                </tr>
              </thead>

              <tbody>
                {[
                  {
                    type: "Bank Transfer (TT)",
                    useCase: "Standard supplier payments",
                    handled: "✓",
                  },
                  {
                    type: "Advance Payments",
                    useCase: "Production initiation",
                    handled: "✓",
                  },
                  {
                    type: "Balance Payments",
                    useCase: "Before shipment dispatch",
                    handled: "✓",
                  },
                  {
                    type: "Multi-Supplier Payments",
                    useCase:
                      "Bulk sourcing / consolidation",
                    handled: "✓",
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-white/10 hover:bg-white/5"
                  >
                    <td className="py-4 px-4 font-medium">
                      {row.type}
                    </td>

                    <td className="py-4 px-4 text-white/70">
                      {row.useCase}
                    </td>

                    <td className="py-4 px-4 text-blue-400">
                      {row.handled}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* WHY STRUCTURED + DDP */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
              Risk Mitigation
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">
              Why Supplier Payments Need Structured Handling
            </h2>

            <div className="space-y-4">
              {[
                "Correct supplier identification",
                "Accurate invoice validation",
                "Currency exchange handling",
                "Documentation alignment with shipment",
                "Payment confirmation before dispatch",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5"
                >
                  <Shield className="w-5 h-5 text-blue-400" />

                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-white/60 text-sm mt-6 p-4 border-l-2 border-blue-400 bg-white/5">
              CTIDDP ensures all these steps are handled within a controlled
              and transparent system.
            </p>
          </div>

          <div>
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
              Seamless Integration
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">
              Integrated with DDP Shipping
            </h2>

            <div className="bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl p-8 border border-blue-500/20">
              <div className="text-center mb-6">
                <p className="text-white/80 text-lg">
                  One Flow - Payment to Delivery
                </p>

                <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
                  {[
                    "Payment",
                    "Production",
                    "Pickup",
                    "Shipping",
                    "Delivery",
                  ].map((stage, i) => (
                    <div key={i} className="flex items-center">
                      <span className="bg-blue-500/20 px-3 py-1 rounded-full text-sm text-blue-300">
                        {stage}
                      </span>

                      {i < 4 && (
                        <ArrowRight className="w-4 h-4 text-white/30 mx-1" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                {[
                  "Faster shipment readiness",
                  "Better coordination with suppliers",
                  "Smooth transition into shipping process",
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
        </div>
      </section>

      {/* USE CASES + DOCS */}
      <section className="px-6 py-24 bg-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
              Perfect Fit
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">
              Ideal for These Use Cases
            </h2>

            <div className="space-y-3">
              {[
                {
                  icon: Users,
                  text:
                    "Importers sourcing from multiple suppliers",
                },
                {
                  icon: Building2,
                  text: "Businesses attending Canton Fair",
                },
                {
                  icon: TrendingUp,
                  text: "Bulk product buyers",
                },
                {
                  icon: Shield,
                  text: "First-time importers from China",
                },
                {
                  icon: Sparkles,
                  text:
                    "Growing businesses scaling procurement",
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
              Full Compliance
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">
              Documentation & Compliance Support
            </h2>

            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <p className="text-white/70 mb-5">
                Included with every payment:
              </p>

              <div className="space-y-3">
                {[
                  "Invoice validation",
                  "Payment confirmation records",
                  "Supplier coordination logs",
                  "Alignment with shipping documentation",
                ].map((doc, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-2"
                  >
                    <FileText className="w-4 h-4 text-blue-400" />

                    <span className="text-white/70 text-sm">
                      {doc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
            Trusted Partner
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-3 font-heading">
            Why Choose CTIDDP for Supplier Payments
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Users,
              title: "One Partner",
              desc:
                "One partner for payment + shipping - no middlemen",
            },
            {
              icon: Globe,
              title: "Cross-Border Expertise",
              desc:
                "Structured cross-border transaction process",
            },
            {
              icon: BadgeCheck,
              title: "Supplier Coordination",
              desc:
                "Supplier coordination handled professionally",
            },
            {
              icon: Clock,
              title: "Reduced Effort",
              desc:
                "Reduced operational effort for your team",
            },
            {
              icon: RefreshCw,
              title: "Seamless Transition",
              desc:
                "Seamless transition to DDP shipping",
            },
            {
              icon: Wallet,
              title: "Cost Predictability",
              desc:
                "Transparent pricing with no hidden fees",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/30 transition bg-white/5"
            >
              <item.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />

              <h3 className="font-semibold mb-1">{item.title}</h3>

              <p className="text-white/50 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Simplify Your Supplier Payments Today"
        text="Handle payments and shipping under one structured system. One partner. One workflow. Complete peace of mind."
        buttonLabel="Get Started with CTIDDP"
      />
    </main>
  )
}