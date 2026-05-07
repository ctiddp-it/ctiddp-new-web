import Breadcrumb from "@/components/service/Breadcrumb"
import Hero from "@/components/service/Hero"
import CTA from "@/components/service/CTA"
import {
    CheckCircle2,
    Truck,
    MapPin,
    Package,
    Clock,
    Users,
    TrendingUp,
    Warehouse,
    Navigation,
    Calendar,
    Shield,
    Boxes,
    Target,
    ArrowRight,
} from "lucide-react"

export const metadata = {
    title: "Last-Mile Delivery in India | CTIDDP",
    description:
        "Reliable last-mile DDP delivery across India from port or airport to your warehouse with scheduled dispatch and delivery coordination.",
    alternates: {
        canonical: "https://www.ctiddp.com/services/last-mile-delivery",
    },
}

export default function Page() {
    return (
        <main className="bg-black text-white">
            <Breadcrumb current="Last-Mile Delivery" />

            <Hero
                title="Last-Mile Delivery in India | Final Leg DDP Shipping by CTIDDP"
                subtitle="Complete your import journey with reliable final delivery from port or airport to your warehouse anywhere in India."
                badge="PAN India Delivery"
                bgImage="/images/services/warehouse-logistics-streamlined-delivery-process-with-boxes-loaded-onto-cargo-truck-generative-ai.jpeg"
            />

            {/* WHAT IS LAST-MILE DELIVERY */}
            <section className="px-6 py-24 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
                            The Final Stage
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5 font-heading">
                            What is Last-Mile Delivery in DDP Shipping?
                        </h2>

                        <p className="text-white/70 text-lg mb-5">
                            Last-mile delivery is the final stage of your shipment, where goods are transported from the port, airport, or warehouse to your destination.
                        </p>

                        <div className="space-y-3">
                            <p className="text-white/60 font-medium">
                                Under CTIDDP&apos;s DDP model, this stage is:
                            </p>

                            <div className="grid grid-cols-1 gap-2">
                                {[
                                    "Pre-planned alongside customs clearance",
                                    "Coordinated with transport partners",
                                    "Executed with delivery tracking and confirmation",
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
                        <Target className="w-16 h-16 text-blue-400 mx-auto mb-4" />

                        <p className="text-white/80 text-lg font-semibold">
                            Your shipment arrives on time
                        </p>

                        <p className="text-2xl font-bold text-blue-400 mt-2">
                            and in expected condition
                        </p>
                    </div>
                </div>
            </section>

            {/* PAN INDIA DELIVERY NETWORK */}
            <section className="px-6 py-24 bg-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
                            National Coverage
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-5 font-heading">
                            CTIDDP Last-Mile Delivery Coverage
                        </h2>

                        <p className="text-white/60 max-w-2xl mx-auto">
                            PAN India delivery network covering major business and industrial hubs
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {[
                            "Hyderabad",
                            "Bangalore",
                            "Chennai",
                            "Mumbai",
                            "Delhi NCR",
                            "Tier-2 Cities",
                            "Tier-3 Cities",
                        ].map((city, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-2 p-3 rounded-lg border border-white/10 bg-white/5"
                            >
                                <MapPin className="w-4 h-4 text-blue-400" />
                                <span className="text-white/70 text-sm">{city}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHAT WE HANDLE */}
            <section className="px-6 py-24 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
                        Delivery Operations
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5 font-heading">
                        What We Handle in the Final Delivery Stage
                    </h2>

                    <p className="text-white/60 max-w-2xl mx-auto">
                        Complete execution from port/airport to your warehouse
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
                        <Navigation className="w-10 h-10 text-blue-400 mb-5" />

                        <h3 className="text-xl font-semibold mb-3">
                            Post-Clearance Movement
                        </h3>

                        <ul className="space-y-2 text-white/60 text-sm">
                            <li>• Cargo pickup from port/airport</li>
                            <li>• Transfer to local delivery network</li>
                            <li>• Route planning based on destination</li>
                        </ul>
                    </div>

                    <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
                        <Calendar className="w-10 h-10 text-blue-400 mb-5" />

                        <h3 className="text-xl font-semibold mb-3">
                            Delivery Coordination
                        </h3>

                        <ul className="space-y-2 text-white/60 text-sm">
                            <li>• Scheduling delivery slots</li>
                            <li>• Communication with consignee</li>
                            <li>• Delivery confirmation & documentation</li>
                        </ul>
                    </div>

                    <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
                        <Shield className="w-10 h-10 text-blue-400 mb-5" />

                        <h3 className="text-xl font-semibold mb-3">
                            Cargo Handling
                        </h3>

                        <ul className="space-y-2 text-white/60 text-sm">
                            <li>• Safe loading and unloading</li>
                            <li>• Packaging integrity maintenance</li>
                            <li>• Handling based on shipment type</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* DELIVERY OPTIONS + FLOW */}
            <section className="px-6 py-24 bg-white/5">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
                    <div>
                        <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
                            Flexible Execution
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">
                            Delivery Options Based on Shipment Type
                        </h2>

                        <div className="space-y-3">
                            {[
                                { icon: Boxes, text: "Full Container Delivery (FCL)" },
                                { icon: Package, text: "Consolidated Cargo Delivery (LCL)" },
                                { icon: Truck, text: "Air Cargo Final Delivery" },
                                { icon: Warehouse, text: "Warehouse-to-warehouse transfer" },
                                { icon: TrendingUp, text: "Bulk and palletised cargo delivery" },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-white/5"
                                >
                                    <item.icon className="w-5 h-5 text-blue-400" />
                                    <span className="text-white/80">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
                            Seamless Integration
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">
                            How Last-Mile Delivery Fits into the DDP Flow
                        </h2>

                        <div className="bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl p-8 border border-blue-500/20">
                            <div className="text-center mb-6">
                                <p className="text-white/80 text-lg">
                                    End-to-End Shipment Flow
                                </p>

                                <div className="flex items-center justify-center gap-1 mt-4 flex-wrap">
                                    {["Supplier", "Pickup", "Freight", "Customs", "Last-Mile"].map((stage, i) => (
                                        <div key={i} className="flex items-center">
                                            <span className="bg-blue-500/20 px-2 py-1 rounded-full text-xs text-blue-300">
                                                {stage}
                                            </span>

                                            {i < 4 && (
                                                <ArrowRight className="w-3 h-3 text-white/30 mx-1" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-3">
                                {[
                                    "Smooth transition from clearance to delivery",
                                    "No delays between logistics stages",
                                    "Consistent coordination across all steps",
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

            {/* DELIVERY PROCESS */}
            <section className="px-6 py-24 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
                        Step by Step
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold mt-3 font-heading">
                        Delivery Process - Final Stage Execution
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto">
                    {[
                        "Shipment cleared at port or airport",
                        "Cargo transferred to delivery network",
                        "Route and schedule finalised",
                        "Shipment dispatched to destination",
                        "Delivery completed with confirmation",
                    ].map((step, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-4 p-4 border-b border-white/10 last:border-0"
                        >
                            <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm font-bold shrink-0">
                                {i + 1}
                            </div>

                            <span className="text-white/80">{step}</span>

                            {i < 4 && (
                                <ArrowRight className="w-4 h-4 text-white/20 ml-auto shrink-0" />
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* WHY CHOOSE + USE CASES */}
            <section className="px-6 py-24 bg-white/5">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
                    <div>
                        <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
                            Trusted Partner
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">
                            Why Businesses Choose CTIDDP for Last-Mile Delivery
                        </h2>

                        <div className="space-y-4">
                            {[
                                { icon: Users, text: "Single partner handling entire shipment" },
                                { icon: Calendar, text: "Coordinated delivery scheduling" },
                                { icon: MapPin, text: "Coverage across India" },
                                { icon: Clock, text: "Alignment with DDP shipment timelines" },
                                { icon: Shield, text: "Structured handover process" },
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
                            Suitable Use Cases
                        </h2>

                        <div className="space-y-4">
                            {[
                                { icon: Boxes, text: "Bulk imports requiring direct warehouse delivery" },
                                { icon: MapPin, text: "Multi-location deliveries across India" },
                                { icon: Shield, text: "High-value shipments needing controlled handling" },
                                { icon: TrendingUp, text: "Businesses scaling import operations" },
                                { icon: Users, text: "Regular importers managing multiple shipments" },
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

            {/* INTEGRATION */}
            <section className="px-6 py-24 max-w-7xl mx-auto">
                <div className="bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl border border-blue-500/20 p-10">
                    <div className="text-center mb-8">
                        <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
                            Connected Ecosystem
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 font-heading">
                            Integration with CTIDDP Services
                        </h2>

                        <p className="text-white/60 max-w-2xl mx-auto">
                            Last-mile delivery is integrated with the complete logistics chain
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {[
                            "Global DDP Shipping",
                            "Customs Clearance",
                            "Warehousing & Consolidation",
                            "Supplier Payments",
                            "QC & Inspection",
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
                        This creates a continuous logistics flow with no operational gaps.
                    </p>
                </div>
            </section>

            <CTA
                title="Deliver Your Shipments with Precision"
                text="Complete your import journey with reliable last-mile execution. One partner. One flow. Door delivery guaranteed."
                buttonLabel="Get DDP Quote"
            />
        </main>
    )
}