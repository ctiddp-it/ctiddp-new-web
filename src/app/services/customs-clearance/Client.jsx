"use client"

import Breadcrumb from "@/components/service/Breadcrumb"
import Hero from "@/components/service/Hero"
import CTA from "@/components/service/CTA"
import { motion } from "framer-motion"
import {
    CheckCircle2,
    FileCheck2,
    ShieldCheck,
    Landmark,
    Sparkles,
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
    TrendingUp
} from "lucide-react"

const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" },
}

export default function CustomsClearanceClient() {
    return (
        <main className="bg-black text-white">
            <Breadcrumb current="Customs Clearance" />

            {/* HERO SECTION - Enhanced */}
            <Hero
                title="Customs Clearance Services | China to India Import Compliance (DDP)"
                subtitle="Ensure fast, compliant entry of your cargo into India with end-to-end customs clearance under DDP. CTIDDP manages documentation, duty calculation, and clearance execution, so your shipments move from port to delivery without friction."
                badge="India Import Compliance"
                bgImage="/images/services/worker-factory-checking-number-white-plastic-bottles-warehouse.jpg"
            />

            {/* WHAT IS CUSTOMS CLEARANCE - New explanatory section */}
            <section className="px-6 py-24 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">The Gateway to India</motion.span>
                        <motion.h2 {...fadeUp} className="text-4xl md:text-5xl font-bold mt-3 mb-5 font-heading">
                            What is Customs Clearance in DDP Shipping?
                        </motion.h2>
                        <motion.p {...fadeUp} className="text-white/70 text-lg mb-5">
                            Customs clearance is the process of getting your goods legally approved for import into India. Under a DDP model, CTIDDP handles:
                        </motion.p>
                        <motion.div {...fadeUp} className="space-y-3">
                            <div className="grid grid-cols-1 gap-2">
                                {[
                                    "Import documentation and filing",
                                    "Duty & tax assessment",
                                    "Coordination with customs authorities",
                                    "Clearance at port/airport",
                                    "Handover for last-mile delivery",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-white/60 text-sm">
                                        <CheckCircle2 className="w-3 h-3 text-blue-400" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                    <motion.div {...fadeUp} className="bg-gradient-to-br from-blue-500/10 to-transparent border border-white/10 rounded-2xl p-8 text-center">
                        <Globe className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                        <p className="text-white/80 text-lg font-semibold">Single accountable workflow</p>
                        <p className="text-2xl font-bold text-blue-400 mt-2">from origin to doorstep</p>
                    </motion.div>
                </div>
            </section>

            {/* CTIDDP CUSTOMS CLEARANCE SCOPE - Three pillars */}
            <section className="px-6 py-24 bg-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Complete Coverage</motion.span>
                        <motion.h2 {...fadeUp} className="text-4xl md:text-5xl font-bold mt-3 mb-5 font-heading">
                            CTIDDP Customs Clearance Scope
                        </motion.h2>
                        <motion.p {...fadeUp} className="text-white/60 max-w-2xl mx-auto">
                            End-to-end customs handling from documentation to cargo release
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Documentation Management */}
                        <motion.div {...fadeUp} className="border border-white/10 rounded-2xl p-8 bg-white/5 hover:bg-white/10 transition group">
                            <FileText className="w-10 h-10 text-blue-400 mb-5" />
                            <h3 className="text-xl font-semibold mb-3">Documentation Management</h3>
                            <ul className="space-y-2 text-white/60 text-sm">
                                <li className="flex items-center gap-2">• Commercial invoice & packing list validation</li>
                                <li className="flex items-center gap-2">• HS code classification support</li>
                                <li className="flex items-center gap-2">• Import documentation preparation</li>
                                <li className="flex items-center gap-2">• Bill of Entry filing</li>
                            </ul>
                        </motion.div>

                        {/* Duty & Tax Handling */}
                        <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="border border-white/10 rounded-2xl p-8 bg-white/5 hover:bg-white/10 transition group">
                            <Calculator className="w-10 h-10 text-blue-400 mb-5" />
                            <h3 className="text-xl font-semibold mb-3">Duty & Tax Handling</h3>
                            <ul className="space-y-2 text-white/60 text-sm">
                                <li className="flex items-center gap-2">• BCD, IGST, SWS calculation</li>
                                <li className="flex items-center gap-2">• Duty planning aligned with product category</li>
                                <li className="flex items-center gap-2">• FTA applicability guidance (where relevant)</li>
                            </ul>
                        </motion.div>

                        {/* Clearance Execution */}
                        <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="border border-white/10 rounded-2xl p-8 bg-white/5 hover:bg-white/10 transition group">
                            <ShieldCheck className="w-10 h-10 text-blue-400 mb-5" />
                            <h3 className="text-xl font-semibold mb-3">Clearance Execution</h3>
                            <ul className="space-y-2 text-white/60 text-sm">
                                <li className="flex items-center gap-2">• Port and airport clearance coordination</li>
                                <li className="flex items-center gap-2">• Examination handling & query resolution</li>
                                <li className="flex items-center gap-2">• Release of cargo for onward delivery</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* END-TO-END CLEARANCE FLOW - Step by step process */}
            <section className="px-6 py-24 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Step by Step</motion.span>
                    <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold mt-3 mb-5 font-heading">
                        End-to-End Clearance Flow
                    </motion.h2>
                    <motion.p {...fadeUp} className="text-white/60 max-w-2xl mx-auto">
                        Structured process from pre-arrival to cargo release
                    </motion.p>
                </div>

                <div className="max-w-3xl mx-auto">
                    {[
                        { step: "Pre-Arrival Preparation", desc: "Documents reviewed and aligned before cargo arrival" },
                        { step: "Filing & Assessment", desc: "Bill of Entry filed with correct classification" },
                        { step: "Customs Review", desc: "Queries handled with supporting documents" },
                        { step: "Duty Settlement", desc: "Applicable duties and taxes processed" },
                        { step: "Cargo Release", desc: "Shipment cleared and moved to delivery network" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp}
                            transition={{ delay: i * 0.08 }}
                            className="flex items-start gap-5 p-4 border-b border-white/10 last:border-0"
                        >
                            <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm font-bold shrink-0">
                                {i + 1}
                            </div>
                            <div>
                                <h3 className="font-semibold text-white">{item.step}</h3>
                                <p className="text-white/50 text-sm">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* COMPLIANCE AREAS + SUITABLE SCENARIOS - Two column */}
            <section className="px-6 py-24 bg-white/5">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
                    {/* Left: Compliance Areas */}
                    <div>
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Regulatory Excellence</motion.span>
                        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">Compliance Areas We Manage</motion.h2>
                        <div className="space-y-4">
                            {[
                                { icon: FileBarChart, text: "HS code accuracy and classification" },
                                { icon: Users, text: "Importer details and KYC alignment" },
                                { icon: ShieldCheck, text: "Product-specific compliance requirements" },
                                { icon: Package, text: "Labeling and packaging checks (as applicable)" },
                                { icon: Building2, text: "Regulatory coordination with authorities" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    {...fadeUp}
                                    transition={{ delay: i * 0.07 }}
                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition"
                                >
                                    <item.icon className="w-5 h-5 text-blue-400" />
                                    <span className="text-white/80">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Suitable Scenarios */}
                    <div>
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Perfect Fit</motion.span>
                        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">Suitable for These Import Scenarios</motion.h2>
                        <div className="space-y-4">
                            {[
                                { icon: MapPin, text: "China to India DDP shipments" },
                                { icon: Layers, text: "Multi-category imports under one shipment" },
                                { icon: Truck, text: "Bulk shipments (FCL/LCL/Air)" },
                                { icon: TrendingUp, text: "Regular importers scaling operations" },
                                { icon: Building2, text: "Canton Fair sourcing shipments" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    {...fadeUp}
                                    transition={{ delay: i * 0.07 }}
                                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition"
                                >
                                    <item.icon className="w-5 h-5 text-blue-400" />
                                    <span className="text-white/80">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* INTEGRATED WITH CTIDDP ECOSYSTEM */}
            <section className="px-6 py-24 max-w-7xl mx-auto">
                <div className="bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl border border-blue-500/20 p-10">
                    <div className="text-center mb-8">
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Seamless Integration</motion.span>
                        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold mt-3 mb-4 font-heading">
                            Integrated with CTIDDP Ecosystem
                        </motion.h2>
                        <motion.p {...fadeUp} className="text-white/60 max-w-2xl mx-auto">
                            One Partner, One Flow — Complete visibility across every stage
                        </motion.p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {[
                            "Supplier Payments",
                            "QC & Inspection",
                            "Warehousing & Consolidation",
                            "Global DDP Shipping",
                            "Last-Mile Delivery",
                        ].map((service, i) => (
                            <motion.span
                                key={i}
                                {...fadeUp}
                                transition={{ delay: i * 0.05 }}
                                className="bg-white/10 px-4 py-2 rounded-full text-sm text-white/80"
                            >
                                {service}
                            </motion.span>
                        ))}
                    </div>

                    <motion.p {...fadeUp} className="text-center text-white/70 text-sm">
                        Customs clearance is fully integrated with the entire supply chain, ensuring complete visibility and coordination.
                    </motion.p>
                </div>
            </section>

            {/* KEY ADVANTAGES + SHIPMENT TYPES - Two column */}
            <section className="px-6 py-24 bg-white/5">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
                    {/* Left: Key Advantages */}
                    <div>
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Operational Strength</motion.span>
                        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">Key Advantages of CTIDDP Customs Clearance</motion.h2>
                        <div className="space-y-4">
                            {[
                                { icon: MapPin, text: "Dedicated customs handling for China–India trade" },
                                { icon: Clock, text: "Pre-planned documentation to reduce processing time" },
                                { icon: Calculator, text: "Structured duty calculation and transparency" },
                                { icon: Users, text: "Direct coordination with port and customs teams" },
                                { icon: Truck, text: "Integrated delivery after clearance" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    {...fadeUp}
                                    transition={{ delay: i * 0.07 }}
                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition"
                                >
                                    <item.icon className="w-5 h-5 text-blue-400" />
                                    <span className="text-white/80">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Shipment Types Covered */}
                    <div>
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Flexible Capabilities</motion.span>
                        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">Shipment Types Covered</motion.h2>
                        <div className="grid gap-3">
                            {[
                                { type: "Sea Freight", desc: "FCL & LCL shipments" },
                                { type: "Air Freight", desc: "Time-sensitive cargo" },
                                { type: "Consolidated Cargo", desc: "Multi-supplier shipments" },
                                { type: "Multi-Supplier Shipments", desc: "Combined from different vendors" },
                                { type: "Commercial Imports", desc: "Across all product categories" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    {...fadeUp}
                                    transition={{ delay: i * 0.08 }}
                                    className="p-3 rounded-lg border border-white/10 bg-white/5 hover:border-blue-500/30 transition"
                                >
                                    <div className="flex items-center gap-3">
                                        <Package className="w-4 h-4 text-blue-400" />
                                        <span className="text-white/80 text-sm font-medium">{item.type}</span>
                                        <span className="text-white/40 text-xs ml-auto">{item.desc}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <CTA
                title="Clear Your Shipments with Confidence"
                text="Streamline your imports with structured, compliant customs clearance. One partner. One workflow. Complete peace of mind from port to delivery."
                buttonLabel="Get DDP Quote"
            />
        </main>
    )
}