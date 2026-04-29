"use client"

import Breadcrumb from "@/components/service/Breadcrumb"
import Hero from "@/components/service/Hero"
import CTA from "@/components/service/CTA"
import { motion } from "framer-motion"
import {
    CheckCircle2,
    Warehouse,
    Boxes,
    PackageSearch,
    Sparkles,
    MapPin,
    Truck,
    ClipboardList,
    Package,
    Box,
    Building2,
    Users,
    TrendingDown,
    Clock,
    Layers,
    Shield,
    GitBranch,
    TrendingUp, 
} from "lucide-react"

const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.5, ease: "easeOut" },
}

export default function WarehousingClient() {
    return (
        <main className="bg-black text-white">
            <Breadcrumb current="Warehousing and Consolidation" />

            {/* HERO SECTION - Enhanced */}
            <Hero
                title="Warehousing and Consolidation in China | Smart Cargo Management for India Imports"
                subtitle="Reduce shipping cost and simplify multi-supplier sourcing with warehouse consolidation in China. CTIDDP receives goods from different suppliers, verifies, sorts, repacks, and ships them as a single optimized DDP shipment to India."
                badge="Warehouse Consolidation"
                bgImage="/images/services/warehouse-workers-checking-inventory-goods-distribution-large-storehouse.jpeg"
            />

            {/* WHAT IS WAREHOUSING & CONSOLIDATION - New explanatory section */}
            <section className="px-6 py-24 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">The Smart Approach</motion.span>
                        <motion.h2 {...fadeUp} className="text-4xl md:text-5xl font-bold mt-3 mb-5 font-heading">
                            What is Warehousing & Consolidation?
                        </motion.h2>
                        <motion.p {...fadeUp} className="text-white/70 text-lg mb-5">
                            Warehousing & consolidation is the process of collecting shipments from multiple suppliers into a single controlled location, preparing them for efficient export and delivery.
                        </motion.p>
                        <motion.div {...fadeUp} className="space-y-3">
                            <p className="text-white/60 font-medium">Instead of shipping each order separately, CTIDDP:</p>
                            <div className="grid grid-cols-1 gap-2">
                                {[
                                    "Receives goods at our China warehouse",
                                    "Verifies quantity and condition",
                                    "Combines shipments into one load",
                                    "Optimises packaging for freight",
                                    "Dispatches as a single shipment to India",
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
                        <TrendingDown className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                        <p className="text-white/80 text-lg font-semibold">Results in better cost efficiency</p>
                        <p className="text-2xl font-bold text-blue-400 mt-2">and smoother logistics execution</p>
                    </motion.div>
                </div>
            </section>

            {/* WAREHOUSE NETWORK IN CHINA */}
            <section className="px-6 py-24 bg-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Strategic Presence</motion.span>
                        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold mt-3 mb-5 font-heading">
                            CTIDDP Warehouse Network in China
                        </motion.h2>
                        <motion.p {...fadeUp} className="text-white/60 max-w-2xl mx-auto">
                            Strategically located near major manufacturing hubs
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                        {[
                            { city: "Guangzhou", description: "Southern China's manufacturing powerhouse" },
                            { city: "Foshan", description: "Major hub for furniture and home products" },
                        ].map((location, i) => (
                            <motion.div
                                key={i}
                                {...fadeUp}
                                transition={{ delay: i * 0.1 }}
                                className="border border-white/10 rounded-2xl p-8 text-center bg-gradient-to-br from-white/5 to-transparent hover:border-blue-500/30 transition"
                            >
                                <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold mb-2">{location.city}</h3>
                                <p className="text-white/60">{location.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div {...fadeUp} className="mt-8 text-center">
                        <p className="text-white/50 text-sm">These locations enable:</p>
                        <div className="flex flex-wrap justify-center gap-4 mt-3">
                            {["Faster supplier coordination", "Quick cargo movement", "Efficient consolidation timelines"].map((benefit, i) => (
                                <span key={i} className="bg-white/10 px-3 py-1 rounded-full text-xs text-white/70">✓ {benefit}</span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* WHAT WE DO INSIDE THE WAREHOUSE - Four pillars */}
            <section className="px-6 py-24 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Warehouse Operations</motion.span>
                    <motion.h2 {...fadeUp} className="text-4xl md:text-5xl font-bold mt-3 mb-5 font-heading">
                        What We Do Inside the Warehouse
                    </motion.h2>
                    <motion.p {...fadeUp} className="text-white/60 max-w-2xl mx-auto">
                        End-to-end handling from receiving to dispatch preparation
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Inbound Handling */}
                    <motion.div {...fadeUp} className="border border-white/10 rounded-2xl p-6 bg-white/5 hover:bg-white/10 transition">
                        <Truck className="w-8 h-8 text-blue-400 mb-4" />
                        <h3 className="text-lg font-semibold mb-3">Inbound Handling</h3>
                        <ul className="space-y-2 text-white/60 text-sm">
                            <li className="flex items-center gap-2">• Receiving cargo from suppliers</li>
                            <li className="flex items-center gap-2">• Order-wise segregation</li>
                            <li className="flex items-center gap-2">• Initial condition check</li>
                        </ul>
                    </motion.div>

                    {/* Verification & Control */}
                    <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="border border-white/10 rounded-2xl p-6 bg-white/5 hover:bg-white/10 transition">
                        <ClipboardList className="w-8 h-8 text-blue-400 mb-4" />
                        <h3 className="text-lg font-semibold mb-3">Verification & Control</h3>
                        <ul className="space-y-2 text-white/60 text-sm">
                            <li className="flex items-center gap-2">• Quantity vs purchase orders</li>
                            <li className="flex items-center gap-2">• SKU matching & labeling checks</li>
                            <li className="flex items-center gap-2">• Discrepancy coordination</li>
                        </ul>
                    </motion.div>

                    {/* Consolidation & Packing */}
                    <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="border border-white/10 rounded-2xl p-6 bg-white/5 hover:bg-white/10 transition">
                        <Boxes className="w-8 h-8 text-blue-400 mb-4" />
                        <h3 className="text-lg font-semibold mb-3">Consolidation & Packing</h3>
                        <ul className="space-y-2 text-white/60 text-sm">
                            <li className="flex items-center gap-2">• Combining multiple shipments</li>
                            <li className="flex items-center gap-2">• Repacking for space optimisation</li>
                            <li className="flex items-center gap-2">• Carton restructuring for safe transit</li>
                        </ul>
                    </motion.div>

                    {/* Pre-Shipment Preparation */}
                    <motion.div {...fadeUp} transition={{ delay: 0.3 }} className="border border-white/10 rounded-2xl p-6 bg-white/5 hover:bg-white/10 transition">
                        <PackageSearch className="w-8 h-8 text-blue-400 mb-4" />
                        <h3 className="text-lg font-semibold mb-3">Pre-Shipment Preparation</h3>
                        <ul className="space-y-2 text-white/60 text-sm">
                            <li className="flex items-center gap-2">• Marking & documentation alignment</li>
                            <li className="flex items-center gap-2">• Ready for export clearance</li>
                            <li className="flex items-center gap-2">• Freight booking coordination</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* WHY CONSOLIDATION MATTERS + IDEAL USE CASES - Two column */}
            <section className="px-6 py-24 bg-white/5">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
                    {/* Left: Business Impact */}
                    <div>
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Business Impact</motion.span>
                        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">Why Consolidation Matters for Importers</motion.h2>
                        <div className="space-y-4">
                            {[
                                { icon: TrendingDown, text: "Lower overall shipping cost (combined freight)" },
                                { icon: Users, text: "Better control over multiple suppliers" },
                                { icon: ClipboardList, text: "Reduced handling complexity" },
                                { icon: Clock, text: "Structured shipment planning" },
                                { icon: Truck, text: "Faster transition to DDP delivery" },
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

                    {/* Right: Ideal Use Cases */}
                    <div>
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Perfect Fit</motion.span>
                        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">Ideal Use Cases for Consolidation</motion.h2>
                        <div className="space-y-4">
                            {[
                                { icon: GitBranch, text: "Sourcing from multiple suppliers in China" },
                                { icon: Package, text: "Small to medium shipments (LCL optimization)" },
                                { icon: Building2, text: "Canton Fair purchases from different vendors" },
                                { icon: Layers, text: "Bulk buying across product categories" },
                                { icon: TrendingUp, text: "Businesses scaling import operations" },
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

            {/* DDP INTEGRATION + HANDLING TYPES - Two column */}
            <section className="px-6 py-24 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left: DDP Integration */}
                    <div>
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Seamless Integration</motion.span>
                        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">Integration with Global DDP Shipping</motion.h2>
                        <div className="bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl p-8 border border-blue-500/20">
                            <div className="text-center mb-6">
                                <p className="text-white/80 text-lg">One Continuous Flow</p>
                                <div className="flex items-center justify-center gap-1 mt-4 flex-wrap">
                                    {["Supplier", "Warehouse", "Consolidation", "Freight", "Customs", "Delivery"].map((stage, i) => (
                                        <div key={i} className="flex items-center">
                                            <span className="bg-blue-500/20 px-2 py-1 rounded-full text-xs text-blue-300">{stage}</span>
                                            {i < 5 && <span className="text-white/30 mx-1">→</span>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-3">
                                {[
                                    "Coordinated shipments from multiple suppliers",
                                    "Cost-efficient logistics under one roof",
                                    "Seamless door delivery under one contract",
                                ].map((benefit, i) => (
                                    <div key={i} className="flex items-center gap-2 text-white/70 text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-blue-400" />
                                        <span>{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Handling Types */}
                    <div>
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Flexible Options</motion.span>
                        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">Handling Types We Support</motion.h2>
                        <div className="grid gap-3">
                            {[
                                { type: "Multi-vendor consolidation", desc: "Combine products from different suppliers" },
                                { type: "LCL shipments", desc: "Less than Container Load optimization" },
                                { type: "FCL preparation", desc: "Full Container Load ready for dispatch" },
                                { type: "Mixed product categories", desc: "Different products in one shipment" },
                                { type: "Palletised or carton-based", desc: "Flexible packaging formats supported" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    {...fadeUp}
                                    transition={{ delay: i * 0.08 }}
                                    className="p-3 rounded-lg border border-white/10 bg-white/5 hover:border-blue-500/30 transition"
                                >
                                    <div className="flex items-center gap-3">
                                        <Box className="w-4 h-4 text-blue-400" />
                                        <span className="text-white/80 text-sm">{item.type}</span>
                                        <span className="text-white/40 text-xs ml-auto">{item.desc}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* QUALITY & CONTROL AT WAREHOUSE LEVEL */}
            <section className="px-6 py-24 bg-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Quality Assurance</motion.span>
                        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold mt-3 font-heading">
                            Quality & Control at Warehouse Level
                        </motion.h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {[
                            "Visual inspection during receiving",
                            "Packaging condition assessment",
                            "Label and marking verification",
                            "Shipment readiness confirmation",
                        ].map((check, i) => (
                            <motion.div
                                key={i}
                                {...fadeUp}
                                transition={{ delay: i * 0.08 }}
                                className="flex items-center gap-2 p-3 rounded-lg border border-white/10 bg-white/5"
                            >
                                <Shield className="w-4 h-4 text-blue-400" />
                                <span className="text-white/70 text-sm">{check}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE CTIDDP - Standalone section */}
            <section className="px-6 py-24 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Trusted Partner</motion.span>
                    <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold mt-3 font-heading">Why Choose CTIDDP Warehousing & Consolidation</motion.h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { icon: MapPin, title: "Strategic Presence", desc: "Warehouse presence in China manufacturing hubs (Guangzhou, Foshan)" },
                        { icon: Users, title: "Direct Coordination", desc: "Direct coordination with your suppliers" },
                        { icon: Layers, title: "Integrated Services", desc: "Integrated with QC, payments, and shipping" },
                        { icon: TrendingDown, title: "Cost Efficiency", desc: "Optimised cargo planning for cost efficiency" },
                        { icon: Shield, title: "Single Partner", desc: "Single partner for complete logistics execution" },
                        { icon: Clock, title: "Timely Execution", desc: "Structured timelines for every shipment" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp}
                            transition={{ delay: i * 0.07 }}
                            className="border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/30 transition bg-white/5"
                        >
                            <item.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                            <h3 className="font-semibold mb-1">{item.title}</h3>
                            <p className="text-white/50 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* FINAL CTA */}
            <CTA
                title="Consolidate Your Shipments. Reduce Your Costs."
                text="Bring all your supplier shipments into one streamlined flow. One warehouse. One shipment. One DDP contract."
                buttonLabel="Get DDP Quote"
            />
        </main>
    )
}