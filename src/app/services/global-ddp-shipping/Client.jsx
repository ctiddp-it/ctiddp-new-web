"use client"

import Breadcrumb from "@/components/service/Breadcrumb"
import Hero from "@/components/service/Hero"
import CTA from "@/components/service/CTA"
import { motion } from "framer-motion"
import {
    Globe,
    Truck,
    Package,
    FileText,
    Ship,
    Plane,
    Factory,
    ShieldCheck,
    Clock,
    HandCoins,
    CheckCircle2,
    Building2,
    ClipboardList,
    Landmark,
    TableProperties,
    ChevronRight,
    Sparkles
} from "lucide-react"


const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" },
}

const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { staggerChildren: 0.1 },
}

export default function GlobalDDPServicePage() {
    return (
        <main className="bg-black text-white">

            <Breadcrumb current="Global DDP Shipping" />

            {/* HERO SECTION - Enhanced with better hierarchy */}
            <Hero
                title="Global DDP Shipping from China to India | CTIDDP"
                subtitle="Move your goods from factory floor in China to your warehouse in India under a single, fixed DDP contract with one accountable partner."
                badge="End-to-End DDP Solution"
                bgImage="/images/services/aerial-view-commercial-dock.jpg"
            />

            {/* WHAT IS DDP - More visual and explanatory */}
            <section className="px-6 py-24 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">The DDP Advantage</motion.span>
                    <motion.h2 {...fadeUp} className="text-4xl md:text-5xl font-bold mt-3 mb-5 font-heading">What is Global DDP Shipping?</motion.h2>
                    <motion.p {...fadeUp} className="text-white/60 max-w-2xl mx-auto text-lg font-body">
                        Delivered Duty Paid (DDP) is a complete logistics model where your logistics partner handles the entire shipment lifecycle end-to-end.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { icon: Factory, title: "Origin Management", text: "Factory pickup in China, export documentation, and cargo consolidation (multi-vendor support)." },
                        { icon: Ship, title: "International Freight", text: "Air or Sea freight with route planning and carrier booking for cost-optimised transit." },
                        { icon: Landmark, title: "Destination Clearance", text: "Import customs clearance, duty & GST management, and last-mile PAN India delivery." },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp}
                            transition={{ delay: i * 0.1 }}
                            className="group relative border border-white/10 rounded-2xl p-8 bg-gradient-to-br from-white/5 to-transparent hover:bg-white/10 transition-all duration-300 hover:border-blue-500/50"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-blue-600/0 group-hover:to-blue-600/5 rounded-2xl transition-all duration-500" />
                            <item.icon className="mb-5 text-blue-400 w-10 h-10" />
                            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                            <p className="text-white/60 text-sm leading-relaxed">{item.text}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.p {...fadeUp} className="text-center text-white/50 text-sm mt-10 border-t border-white/10 pt-8 max-w-3xl mx-auto">
                    With CTIDDP, DDP is structured for India-bound imports with operational control in China and execution in India.
                </motion.p>
            </section>

            {/* SCOPE & DELIVERABLES - Feature table + coverage grid */}
            <section className="px-6 py-24 bg-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">What's Included</motion.span>
                        <motion.h2 {...fadeUp} className="text-4xl md:text-5xl font-bold mt-3 font-heading">Scope & Deliverables</motion.h2>
                        <motion.p {...fadeUp} className="text-white/60 max-w-2xl mx-auto mt-4">
                            Everything under one contract — from supplier coordination to door delivery.
                        </motion.p>
                    </div>

                    {/* End-to-End Coverage Grid */}
                    <motion.h3 {...fadeUp} className="text-2xl font-semibold mb-6 text-center md:text-left font-heading">End-to-End Coverage</motion.h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-16">
                        {[
                            "Supplier coordination & cargo readiness",
                            "Cross-border supplier payments",
                            "Multi-vendor cargo consolidation in China",
                            "Export clearance in China",
                            "Air Freight / Sea Freight (FCL / LCL)",
                            "Import customs clearance in India",
                            "Duty & GST management",
                            "Last-mile PAN India delivery",
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                initial="initial"
                                whileInView="whileInView"
                                className="flex items-center gap-3 p-3 rounded-lg"
                            >
                                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                <span className="text-white/80">{item}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Detailed Table */}
                    <motion.h3 {...fadeUp} className="text-2xl font-semibold mb-6 text-center md:text-left font-heading">What You Get Under One Contract</motion.h3>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b border-white/20">
                                    <th className="text-left py-4 px-4 text-white font-semibold">Component</th>
                                    <th className="text-left py-4 px-4 text-white font-semibold">What CTIDDP Handles</th>
                                    <th className="text-left py-4 px-4 text-white font-semibold">Outcome for You</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { component: "Supplier Coordination", handles: "Pickup scheduling, documentation alignment", outcome: "Faster dispatch readiness" },
                                    { component: "Freight Management", handles: "Route planning, carrier booking (Air/Sea)", outcome: "Cost-optimised transit" },
                                    { component: "Customs Clearance", handles: "Documentation, compliance, duty calculation", outcome: "Smooth port clearance" },
                                    { component: "Duty & Tax Handling", handles: "BCD, IGST, SWS pre-managed", outcome: "Predictable landed cost" },
                                    { component: "Cargo Consolidation", handles: "Multi-vendor aggregation in China", outcome: "Reduced shipping cost" },
                                    { component: "Last-Mile Delivery", handles: "Port to warehouse (PAN India)", outcome: "Complete door delivery" },
                                ].map((row, i) => (
                                    <motion.tr key={i} {...fadeUp} transition={{ delay: i * 0.05 }} className="border-b border-white/10 hover:bg-white/5">
                                        <td className="py-4 px-4 font-medium">{row.component}</td>
                                        <td className="py-4 px-4 text-white/70">{row.handles}</td>
                                        <td className="py-4 px-4 text-white/70">{row.outcome}</td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* SHIPPING MODES + PROCESS FLOW - Combined two-column layout */}
            <section className="px-6 py-24 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left: Shipping Modes */}
                    <div>
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider font-heading">Choose Your Mode</motion.span>
                        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">Shipping Modes We Offer</motion.h2>
                        <div className="space-y-6">
                            {[
                                { icon: Ship, title: "Sea Freight (FCL / LCL)", desc: "Ideal for bulk shipments and heavy cargo. Cost-efficient for large volumes with consolidation options available." },
                                { icon: Plane, title: "Air Freight", desc: "Faster transit for urgent shipments. Ideal for high-value or time-sensitive cargo." },
                                { icon: Globe, title: "Hybrid Solutions", desc: "Mix of air + sea for cost and speed balance — best of both worlds." },
                            ].map((item, i) => (
                                <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="flex gap-5 p-5 rounded-xl border border-white/10 hover:bg-white/5 transition">
                                    <item.icon className="w-8 h-8 text-blue-400 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                                        <p className="text-white/60 text-sm">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Process Flow */}
                    <div>
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider font-heading">Step by Step</motion.span>
                        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">Process Flow — From China to Your Warehouse</motion.h2>
                        <div className="space-y-3">
                            {[
                                "Supplier finalisation & shipment readiness",
                                "Pickup from factory (China)",
                                "Warehouse consolidation (if required)",
                                "Export clearance & freight dispatch",
                                "Transit (Air/Sea)",
                                "Import customs clearance (India)",
                                "Duties & tax processing",
                                "Last-mile delivery to your warehouse",
                            ].map((step, i) => (
                                <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.05 }} className="flex items-center gap-4 p-3 rounded-lg group hover:bg-white/5">
                                    <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm font-bold">{i + 1}</div>
                                    <span className="text-white/80">{step}</span>
                                    {i < 7 && <ChevronRight className="w-4 h-4 text-white/30 ml-auto" />}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* INDUSTRIES WE SERVE - Grid with icons */}
            <section className="px-6 py-24 bg-white/5">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider font-heading">Expertise Across Sectors</motion.span>
                    <motion.h2 {...fadeUp} className="text-4xl md:text-5xl font-bold mt-3 mb-16 font-heading">Industries We Serve</motion.h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {[
                            "Industrial Machinery & Equipment",
                            "Electronics & Components",
                            "Consumer Goods & Retail",
                            "Automotive Parts",
                            "Furniture & Interiors",
                            "Packaging & Raw Materials",
                        ].map((industry, i) => (
                            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.05 }} className="p-5 border border-white/10 rounded-xl text-center hover:border-blue-500/50 transition group">
                                <Building2 className="w-8 h-8 text-blue-400 mx-auto mb-3 opacity-70 group-hover:opacity-100" />
                                <span className="text-sm text-white/70 group-hover:text-white">{industry}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY CTIDDP + COST STRUCTURE - Two column layout */}
            <section className="px-6 py-24 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left: Why Choose Us */}
                    <div>
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider font-heading">Trusted Partner</motion.span>
                        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">Why Businesses Choose CTIDDP</motion.h2>
                        <div className="grid gap-4">
                            {[
                                "Single point of contact for entire shipment",
                                "Integrated China + India logistics execution",
                                "Transparent cost structure (DDP model)",
                                "Multi-vendor shipment capability",
                                "Real-time coordination across supply chain",
                                "Dedicated support for business importers",
                            ].map((item, i) => (
                                <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.05 }} className="flex items-center gap-3 p-3">
                                    <Sparkles className="w-5 h-5 text-blue-400" />
                                    <span className="text-white/80">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Cost Structure */}
                    <div>
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider font-heading">No Surprises</motion.span>
                        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">Cost Structure</motion.h2>
                        <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                            <p className="text-white/70 mb-6">Key pricing components included in your single DDP quote:</p>
                            <div className="space-y-4 mb-8">
                                {[
                                    "Freight Charges (Air / Sea)",
                                    "Duty & GST (as per product category)",
                                    "Handling & Clearance Charges",
                                    "Last-Mile Delivery",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between border-b border-white/10 pb-2">
                                        <span className="text-white/80">{item}</span>
                                        <HandCoins className="w-4 h-4 text-blue-400" />
                                    </div>
                                ))}
                            </div>
                            <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/20">
                                <p className="text-blue-300 text-sm font-medium">📦 CTIDDP provides a single consolidated DDP quote — eliminating fragmented cost planning.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* COMPLIANCE + WHEN TO CHOOSE - Two column layout */}
            <section className="px-6 py-24 bg-white/5">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
                    {/* Left: Compliance */}
                    <div>
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider font-heading">Full Compliance</motion.span>
                        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">Documentation Support</motion.h2>
                        <div className="space-y-4">
                            {[
                                "Commercial Invoice",
                                "Packing List",
                                "Bill of Lading / Airway Bill",
                                "Import documentation for Indian customs",
                                "Duty classification & tax alignment",
                            ].map((doc, i) => (
                                <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.05 }} className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                                    <ClipboardList className="w-5 h-5 text-blue-400" />
                                    <span className="text-white/80">{doc}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: When to Choose */}
                    <div>
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider font-heading">Perfect Fit</motion.span>
                        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">When Should You Choose DDP Shipping?</motion.h2>
                        <div className="space-y-4">
                            {[
                                "First-time importers needing guidance",
                                "Businesses scaling imports from China",
                                "Multi-supplier sourcing (Canton Fair, etc.)",
                                "Bulk procurement from China",
                                "Businesses needing predictable cost & delivery",
                            ].map((useCase, i) => (
                                <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.05 }} className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                                    <Clock className="w-5 h-5 text-blue-400" />
                                    <span className="text-white/80">{useCase}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <CTA
                title="Get Your Global DDP Quote Today"
                text="Plan your next shipment with full visibility and control. One contract. One price. One accountable partner."
                buttonLabel="Get DDP Quote"
            />

        </main>
    )
}