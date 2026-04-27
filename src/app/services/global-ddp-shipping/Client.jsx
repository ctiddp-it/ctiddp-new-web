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
} from "lucide-react"

const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
}

export default function Client() {
    return (
        <main className="bg-black text-white">

            <Breadcrumb current="Global DDP Shipping" />

            {/* HERO */}
            <Hero
                title="Global DDP Shipping from China to India | CTIDDP"
                subtitle="Move your goods from factory floor in China to your warehouse in India under a single, fixed DDP contract with one accountable partner."
            />

            {/* WHAT IS DDP */}
            <section className="px-6 py-20">
                <motion.h2 {...fadeUp} className="text-3xl mb-10 text-center">
                    What is Global DDP Shipping?
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { icon: Factory, text: "Factory pickup in China" },
                        { icon: Ship, text: "International freight (Air / Sea)" },
                        { icon: FileText, text: "Export & import documentation" },
                        { icon: ShieldCheck, text: "Duties & taxes handled" },
                        { icon: Truck, text: "Last-mile delivery" },
                        { icon: Globe, text: "End-to-end coordination" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp}
                            transition={{ delay: i * 0.1 }}
                            className="border border-white/10 p-6 rounded-lg bg-white/5 hover:bg-white/10 transition"
                        >
                            <item.icon className="mb-4 text-blue-400" />
                            <p className="text-sm text-white/80">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* END-TO-END COVERAGE */}
            <section className="px-6 py-20 bg-white/5">
                <motion.h2 {...fadeUp} className="text-3xl mb-10 text-center">
                    End-to-End Coverage
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {[
                        "Supplier coordination & cargo readiness",
                        "Cross-border supplier payments",
                        "Multi-vendor consolidation",
                        "Export clearance in China",
                        "Import customs clearance in India",
                        "Duty & GST handling",
                        "PAN India last-mile delivery",
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp}
                            transition={{ delay: i * 0.1 }}
                            className="p-5 border border-white/10 rounded-lg"
                        >
                            {item}
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* PROCESS FLOW */}
            <section className="px-6 py-20">
                <motion.h2 {...fadeUp} className="text-3xl mb-12 text-center">
                    From China to Your Warehouse
                </motion.h2>

                <div className="max-w-3xl mx-auto space-y-6">
                    {[
                        "Supplier finalization & shipment readiness",
                        "Pickup from factory in China",
                        "Export clearance & dispatch",
                        "Air / Sea transit",
                        "Import customs clearance in India",
                        "Final delivery to your warehouse",
                    ].map((step, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp}
                            transition={{ delay: i * 0.1 }}
                            className="flex gap-4 items-start"
                        >
                            <div className="text-blue-400 font-bold">{i + 1}</div>
                            <p className="text-white/70 text-sm">{step}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* SHIPPING MODES */}
            <section className="px-6 py-20 bg-white/5">
                <motion.h2 {...fadeUp} className="text-3xl mb-10 text-center">
                    Shipping Modes
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: Ship,
                            title: "Sea Freight",
                            desc: "Best for bulk and heavy cargo. Cost-efficient.",
                        },
                        {
                            icon: Plane,
                            title: "Air Freight",
                            desc: "Fastest option for urgent shipments.",
                        },
                        {
                            icon: Globe,
                            title: "Hybrid",
                            desc: "Balanced mix of speed and cost.",
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 border border-white/10 rounded-lg"
                        >
                            <item.icon className="mb-4 text-blue-400" />
                            <h3 className="mb-2 font-semibold">{item.title}</h3>
                            <p className="text-white/60 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* INDUSTRIES */}
            <section className="px-6 py-20">
                <motion.h2 {...fadeUp} className="text-3xl mb-10 text-center">
                    Industries We Serve
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-4 text-center text-sm text-white/60">
                    {[
                        "Industrial Machinery",
                        "Electronics",
                        "Consumer Goods",
                        "Automotive Parts",
                        "Furniture",
                        "Raw Materials",
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp}
                            className="p-4 border border-white/10 rounded"
                        >
                            {item}
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* WHY CTIDDP */}
            <section className="px-6 py-20 bg-white/5">
                <motion.h2 {...fadeUp} className="text-3xl mb-10 text-center">
                    Why Businesses Choose CTIDDP
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {[
                        "Single point of contact",
                        "Transparent DDP pricing",
                        "China + India integrated operations",
                        "Multi-vendor shipment capability",
                        "Real-time coordination",
                        "Dedicated importer support",
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp}
                            className="p-5 border border-white/10 rounded"
                        >
                            {item}
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* COST STRUCTURE */}
            <section className="px-6 py-20">
                <motion.h2 {...fadeUp} className="text-3xl mb-10 text-center">
                    Cost Structure
                </motion.h2>

                <div className="max-w-3xl mx-auto space-y-4 text-white/70">
                    {[
                        "Freight charges (air or sea)",
                        "Duty & GST",
                        "Handling & clearance",
                        "Last-mile delivery",
                    ].map((item, i) => (
                        <motion.p key={i} {...fadeUp}>
                            • {item}
                        </motion.p>
                    ))}
                </div>
            </section>

            {/* COMPLIANCE */}
            <section className="px-6 py-20 bg-white/5 text-center">
                <motion.h2 {...fadeUp} className="text-3xl mb-6">
                    Compliance & Documentation
                </motion.h2>

                <motion.p {...fadeUp} className="max-w-2xl mx-auto text-white/60">
                    Commercial invoices, packing lists, bills of lading, and customs
                    documentation are handled end-to-end to ensure smooth clearance.
                </motion.p>
            </section>

            {/* CTA */}
            <CTA
                title="Get Your Global DDP Quote Today"
                text="Plan your next shipment with full visibility and control."
                buttonLabel="Get DDP Quote"
            />

        </main>
    )
}