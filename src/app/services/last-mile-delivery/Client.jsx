"use client"

import Breadcrumb from "@/components/service/Breadcrumb"
import Hero from "@/components/service/Hero"
import CTA from "@/components/service/CTA"
import { motion } from "framer-motion"
import {
    CheckCircle2,
    Truck,
    MapPin,
    Package,
    Clock,
    Building2,
    Users,
    TrendingUp,
    Globe,
    Warehouse,
    Navigation,
    Calendar,
    Shield,
    Boxes,
    Target,
    ArrowRight,
} from "lucide-react"

const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" },
}

export default function LastMileDeliveryClient() {
    return (
        <main className="bg-black text-white">
            <Breadcrumb current="Last-Mile Delivery" />

            {/* HERO SECTION - Enhanced */}
            <Hero
                title="Last-Mile Delivery in India | Final Leg DDP Shipping by CTIDDP"
                subtitle="Complete your import journey with reliable final delivery from port or airport to your warehouse anywhere in India."
                badge="PAN India Delivery"
                bgImage="/images/services/warehouse-logistics-streamlined-delivery-process-with-boxes-loaded-onto-cargo-truck-generative-ai.jpg"
            />

            {/* WHAT IS LAST-MILE DELIVERY - Explanatory section */}
            <section className="px-6 py-24 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">The Final Stage</motion.span>
                        <motion.h2 {...fadeUp} className="text-4xl md:text-5xl font-bold mt-3 mb-5 font-heading">
                            What is Last-Mile Delivery in DDP Shipping?
                        </motion.h2>
                        <motion.p {...fadeUp} className="text-white/70 text-lg mb-5">
                            Last-mile delivery is the final stage of your shipment, where goods are transported from the port, airport, or warehouse to your destination.
                        </motion.p>
                        <motion.div {...fadeUp} className="space-y-3">
                            <p className="text-white/60 font-medium">Under CTIDDP's DDP model, this stage is:</p>
                            <div className="grid grid-cols-1 gap-2">
                                {[
                                    "Pre-planned alongside customs clearance",
                                    "Coordinated with transport partners",
                                    "Executed with delivery tracking and confirmation",
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
                        <Target className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                        <p className="text-white/80 text-lg font-semibold">Your shipment arrives on time</p>
                        <p className="text-2xl font-bold text-blue-400 mt-2">and in expected condition</p>
                    </motion.div>
                </div>
            </section>

            {/* PAN INDIA DELIVERY NETWORK */}
            <section className="px-6 py-24 bg-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">National Coverage</motion.span>
                        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold mt-3 mb-5 font-heading">
                            CTIDDP Last-Mile Delivery Coverage
                        </motion.h2>
                        <motion.p {...fadeUp} className="text-white/60 max-w-2xl mx-auto">
                            PAN India delivery network covering major business and industrial hubs
                        </motion.p>
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
                            <motion.div
                                key={i}
                                {...fadeUp}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-center gap-2 p-3 rounded-lg border border-white/10 bg-white/5 hover:border-blue-500/30 transition"
                            >
                                <MapPin className="w-4 h-4 text-blue-400" />
                                <span className="text-white/70 text-sm">{city}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHAT WE HANDLE IN FINAL DELIVERY - Three pillars */}
            <section className="px-6 py-24 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Delivery Operations</motion.span>
                    <motion.h2 {...fadeUp} className="text-4xl md:text-5xl font-bold mt-3 mb-5 font-heading">
                        What We Handle in the Final Delivery Stage
                    </motion.h2>
                    <motion.p {...fadeUp} className="text-white/60 max-w-2xl mx-auto">
                        Complete execution from port/airport to your warehouse
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Post-Clearance Movement */}
                    <motion.div {...fadeUp} className="border border-white/10 rounded-2xl p-8 bg-white/5 hover:bg-white/10 transition">
                        <Navigation className="w-10 h-10 text-blue-400 mb-5" />
                        <h3 className="text-xl font-semibold mb-3">Post-Clearance Movement</h3>
                        <ul className="space-y-2 text-white/60 text-sm">
                            <li className="flex items-center gap-2">• Cargo pickup from port/airport</li>
                            <li className="flex items-center gap-2">• Transfer to local delivery network</li>
                            <li className="flex items-center gap-2">• Route planning based on destination</li>
                        </ul>
                    </motion.div>

                    {/* Delivery Coordination */}
                    <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="border border-white/10 rounded-2xl p-8 bg-white/5 hover:bg-white/10 transition">
                        <Calendar className="w-10 h-10 text-blue-400 mb-5" />
                        <h3 className="text-xl font-semibold mb-3">Delivery Coordination</h3>
                        <ul className="space-y-2 text-white/60 text-sm">
                            <li className="flex items-center gap-2">• Scheduling delivery slots</li>
                            <li className="flex items-center gap-2">• Communication with consignee</li>
                            <li className="flex items-center gap-2">• Delivery confirmation & documentation</li>
                        </ul>
                    </motion.div>

                    {/* Cargo Handling */}
                    <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="border border-white/10 rounded-2xl p-8 bg-white/5 hover:bg-white/10 transition">
                        <Shield className="w-10 h-10 text-blue-400 mb-5" />
                        <h3 className="text-xl font-semibold mb-3">Cargo Handling</h3>
                        <ul className="space-y-2 text-white/60 text-sm">
                            <li className="flex items-center gap-2">• Safe loading and unloading</li>
                            <li className="flex items-center gap-2">• Packaging integrity maintenance</li>
                            <li className="flex items-center gap-2">• Handling based on shipment type</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* DELIVERY OPTIONS + HOW IT FITS INTO DDP - Two column */}
            <section className="px-6 py-24 bg-white/5">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
                    {/* Left: Delivery Options */}
                    <div>
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Flexible Execution</motion.span>
                        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">Delivery Options Based on Shipment Type</motion.h2>
                        <div className="space-y-3">
                            {[
                                { icon: Boxes, text: "Full Container Delivery (FCL)" },
                                { icon: Package, text: "Consolidated Cargo Delivery (LCL)" },
                                { icon: Truck, text: "Air Cargo Final Delivery" },
                                { icon: Warehouse, text: "Warehouse-to-warehouse transfer" },
                                { icon: TrendingUp, text: "Bulk and palletised cargo delivery" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    {...fadeUp}
                                    transition={{ delay: i * 0.07 }}
                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition border border-white/5"
                                >
                                    <item.icon className="w-5 h-5 text-blue-400" />
                                    <span className="text-white/80">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: DDP Flow Integration */}
                    <div>
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Seamless Integration</motion.span>
                        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">How Last-Mile Delivery Fits into the DDP Flow</motion.h2>
                        <div className="bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl p-8 border border-blue-500/20">
                            <div className="text-center mb-6">
                                <p className="text-white/80 text-lg">End-to-End Shipment Flow</p>
                                <div className="flex items-center justify-center gap-1 mt-4 flex-wrap">
                                    {["Supplier", "Pickup", "Freight", "Customs", "Last-Mile"].map((stage, i) => (
                                        <div key={i} className="flex items-center">
                                            <span className="bg-blue-500/20 px-2 py-1 rounded-full text-xs text-blue-300">{stage}</span>
                                            {i < 4 && <ArrowRight className="w-3 h-3 text-white/30 mx-1" />}
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
                                    <div key={i} className="flex items-center gap-2 text-white/70 text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-blue-400" />
                                        <span>{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DELIVERY PROCESS - Step by step */}
            <section className="px-6 py-24 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Step by Step</motion.span>
                    <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold mt-3 font-heading">
                        Delivery Process — Final Stage Execution
                    </motion.h2>
                </div>

                <div className="max-w-3xl mx-auto">
                    {[
                        "Shipment cleared at port or airport",
                        "Cargo transferred to delivery network",
                        "Route and schedule finalised",
                        "Shipment dispatched to destination",
                        "Delivery completed with confirmation",
                    ].map((step, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp}
                            transition={{ delay: i * 0.08 }}
                            className="flex items-center gap-4 p-4 border-b border-white/10 last:border-0"
                        >
                            <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm font-bold shrink-0">
                                {i + 1}
                            </div>
                            <span className="text-white/80">{step}</span>
                            {i < 4 && <ArrowRight className="w-4 h-4 text-white/20 ml-auto shrink-0" />}
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* WHY CHOOSE CTIDDP + SUITABLE USE CASES - Two column */}
            <section className="px-6 py-24 bg-white/5">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
                    {/* Left: Why Choose CTIDDP */}
                    <div>
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Trusted Partner</motion.span>
                        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">Why Businesses Choose CTIDDP for Last-Mile Delivery</motion.h2>
                        <div className="space-y-4">
                            {[
                                { icon: Users, text: "Single partner handling entire shipment" },
                                { icon: Calendar, text: "Coordinated delivery scheduling" },
                                { icon: MapPin, text: "Coverage across India" },
                                { icon: Clock, text: "Alignment with DDP shipment timelines" },
                                { icon: Shield, text: "Structured handover process" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    {...fadeUp}
                                    transition={{ delay: i * 0.07 }}
                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition"
                                >
                                    <item.icon className="w-5 h-5 text-blue-400" />
                                    <span className="text-white/80">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Suitable Use Cases */}
                    <div>
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Perfect Fit</motion.span>
                        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">Suitable Use Cases</motion.h2>
                        <div className="space-y-4">
                            {[
                                { icon: Boxes, text: "Bulk imports requiring direct warehouse delivery" },
                                { icon: MapPin, text: "Multi-location deliveries across India" },
                                { icon: Shield, text: "High-value shipments needing controlled handling" },
                                { icon: TrendingUp, text: "Businesses scaling import operations" },
                                { icon: Users, text: "Regular importers managing multiple shipments" },
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

            {/* INTEGRATION WITH CTIDDP SERVICES */}
            <section className="px-6 py-24 max-w-7xl mx-auto">
                <div className="bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl border border-blue-500/20 p-10">
                    <div className="text-center mb-8">
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Connected Ecosystem</motion.span>
                        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold mt-3 mb-4 font-heading">
                            Integration with CTIDDP Services
                        </motion.h2>
                        <motion.p {...fadeUp} className="text-white/60 max-w-2xl mx-auto">
                            Last-mile delivery is integrated with the complete logistics chain
                        </motion.p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {[
                            "Global DDP Shipping",
                            "Customs Clearance",
                            "Warehousing & Consolidation",
                            "Supplier Payments",
                            "QC & Inspection",
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
                        This creates a continuous logistics flow with no operational gaps.
                    </motion.p>
                </div>
            </section>

            {/* FINAL CTA */}
            <CTA
                title="Deliver Your Shipments with Precision"
                text="Complete your import journey with reliable last-mile execution. One partner. One flow. Door delivery guaranteed."
                buttonLabel="Get DDP Quote"
            />
        </main>
    )
}