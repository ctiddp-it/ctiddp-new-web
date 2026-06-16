// app/components/WhoThisIsFor.jsx

import {
  Package,
  Factory,
  Building2,
  ShoppingCart,
  Truck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const audiences = [
  {
    icon: Package,
    title: "Importers & Traders",
    tagline: "Streamline your import operations",
    description:
      "From sourcing to delivery, manage your entire import process through a single unified platform.",
    benefits: [
      "AI-powered supplier matching",
      "End-to-end shipment tracking",
      "Automated customs documentation",
      "Inventory management integration",
    ],
    stats: [
      { value: "50%", label: "Cost Reduction" },
      { value: "3x", label: "Faster Delivery" },
    ],
    color: "#0B2A6B",
  },
  {
    icon: Factory,
    title: "Manufacturers",
    tagline: "Expand your sourcing network",
    description:
      "Connect with verified suppliers across 45+ countries.",
    benefits: [
      "Verified global supplier base",
      "Quality assurance protocols",
      "Competitive pricing analysis",
      "Streamlined procurement",
    ],
    stats: [
      { value: "45+", label: "Countries" },
      { value: "10K+", label: "Suppliers" },
    ],
    color: "#FE5101",
  },
  {
    icon: Building2,
    title: "Infrastructure Developers",
    tagline: "Execute large-scale projects",
    description:
      "Handle complex infrastructure projects with dedicated project management.",
    benefits: [
      "Dedicated project managers",
      "Bulk shipping solutions",
      "Installation & execution",
      "Timeline guarantee",
    ],
    stats: [
      { value: "100+", label: "Projects Done" },
      { value: "99%", label: "On-Time Rate" },
    ],
    color: "#0B2A6B",
  },
  {
    icon: ShoppingCart,
    title: "Project Buyers",
    tagline: "Source globally with confidence",
    description:
      "Make informed purchasing decisions with transparent pricing.",
    benefits: [
      "Transparent pricing models",
      "Verified supplier network",
      "Quality inspection reports",
      "Secure payment protection",
    ],
    stats: [
      { value: "100%", label: "Verification" },
      { value: "24/7", label: "Support" },
    ],
    color: "#FE5101",
  },
  {
    icon: Truck,
    title: "B2B Distributors",
    tagline: "Scale your distribution network",
    description:
      "Build a robust distribution network with reliable logistics.",
    benefits: [
      "Multi-warehouse management",
      "Real-time inventory sync",
      "Last-mile delivery network",
      "Returns management",
    ],
    stats: [
      { value: "5K+", label: "Deliveries/Day" },
      { value: "99.5%", label: "Accuracy" },
    ],
    color: "#0B2A6B",
  },
];

export default function WhoThisIsFor() {
  return (
    <section className="py-16 md:py-20 lg:py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
            <span className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[#FE5101]">
              Built For
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FE5101]" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B2A6B]">
            Who This Is <span className="text-[#FE5101]">For</span>
          </h2>

          <div className="flex h-[3.5px] w-[72px] overflow-hidden rounded-full mt-4 mb-5">
            <div className="flex-1 bg-[#0B2A6B]" />
            <div className="flex-1 bg-[#FE5101]" />
          </div>

          <p className="max-w-3xl text-gray-600">
            Tailored solutions for every participant in the global trade
            ecosystem.
          </p>
        </div>

        {/* Server Component Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{
                      backgroundColor: `${audience.color}15`,
                    }}
                  >
                    <Icon
                      className="w-7 h-7"
                      style={{
                        color: audience.color,
                      }}
                    />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-[#0B2A6B]">
                      {audience.title}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {audience.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {audience.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {audience.stats.map((stat, idx) => (
                    <div key={idx}>
                      <div
                        className="text-2xl font-bold"
                        style={{
                          color: audience.color,
                        }}
                      >
                        {stat.value}
                      </div>

                      <div className="text-xs text-gray-500">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-6">
                  {audience.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2
                        className="w-4 h-4"
                        style={{
                          color: audience.color,
                        }}
                      />

                      <span className="text-sm text-gray-700">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl py-3 text-white font-semibold"
                  style={{
                    backgroundColor: audience.color,
                  }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}