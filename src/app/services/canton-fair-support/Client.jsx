"use client"

import Breadcrumb from "@/components/service/Breadcrumb"
import Hero from "@/components/service/Hero"
import CTA from "@/components/service/CTA"
import { motion } from "framer-motion"
import {
    CheckCircle2,
    MapPin,
    Users,
    Building2,
    Package,
    TrendingUp,
    Globe,
    Calendar,
    Shield,
    FileText,
    Handshake,
    ClipboardList,
    Truck,
    Camera,
    Languages,
    ArrowRight,
    Sparkles,
    BadgeCheck,
    Phone,
} from "lucide-react"

const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.5, ease: "easeOut" },
}

export default function CantonFairSupportClient() {
    return (
        <main className="bg-black text-white">
            <Breadcrumb current="Canton Fair Support" />

            {/* HERO SECTION - Enhanced */}
            <Hero
                title="Canton Fair Support Services | Source Smarter with On-Ground Experts"
                subtitle="Maximise your sourcing at the Canton Fair with end-to-end on-ground support. CTIDDP helps you identify reliable suppliers, negotiate effectively, verify products, and plan shipping, all from a single coordinated system."
                badge="On-Ground Experts"
                bgImage="/images/services/male-entrepreneur-businessman-expert-reading-documents.jpeg"
            />

            {/* WHAT IS CANTON FAIR SUPPORT - Explanatory section */}
            <section className="px-6 py-24 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Sourcing Intelligence</motion.span>
                        <motion.h2 {...fadeUp} className="text-4xl md:text-5xl font-bold mt-3 mb-5 font-heading">
                            What is Canton Fair Support?
                        </motion.h2>
                        <motion.p {...fadeUp} className="text-white/70 text-lg mb-5">
                            Canton Fair support is a structured service designed to help importers navigate the exhibition efficiently and connect with the right suppliers.
                        </motion.p>
                        <motion.div {...fadeUp} className="space-y-3">
                            <p className="text-white/60 font-medium">It helps you:</p>
                            <div className="grid grid-cols-1 gap-2">
                                {[
                                    "Navigate the exhibition efficiently",
                                    "Connect with the right suppliers",
                                    "Validate product quality and pricing",
                                    "Plan logistics from sourcing to delivery",
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
                        <Sparkles className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                        <p className="text-white/80 text-lg font-semibold">Complete sourcing + shipping strategy</p>
                        <p className="text-2xl font-bold text-blue-400 mt-2">not just supplier discovery</p>
                    </motion.div>
                </div>
            </section>

            {/* ON-GROUND SUPPORT AT CANTON FAIR */}
            <section className="px-6 py-24 bg-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Local Presence</motion.span>
                        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold mt-3 mb-5 font-heading">
                            On-Ground Support at Canton Fair
                        </motion.h2>
                        <motion.p {...fadeUp} className="text-white/60 max-w-2xl mx-auto">
                            Guangzhou-based expert team ready to assist you
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Guangzhou-Based Team */}
                        <motion.div {...fadeUp} className="border border-white/10 rounded-2xl p-8 bg-white/5 hover:bg-white/10 transition">
                            <MapPin className="w-10 h-10 text-blue-400 mb-4" />
                            <h3 className="text-xl font-semibold mb-3">Guangzhou-Based Expert Team</h3>
                            <ul className="space-y-3 text-white/60 text-sm">
                                <li className="flex items-center gap-2">• Local team present at Canton Fair</li>
                                <li className="flex items-center gap-2">• Assistance in navigating halls and categories</li>
                                <li className="flex items-center gap-2">• Real-time support during meetings</li>
                            </ul>
                        </motion.div>

                        {/* Translation & Negotiation */}
                        <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="border border-white/10 rounded-2xl p-8 bg-white/5 hover:bg-white/10 transition">
                            <Languages className="w-10 h-10 text-blue-400 mb-4" />
                            <h3 className="text-xl font-semibold mb-3">Real-Time Translation & Negotiation</h3>
                            <ul className="space-y-3 text-white/60 text-sm">
                                <li className="flex items-center gap-2">• Mandarin-English communication support</li>
                                <li className="flex items-center gap-2">• Assistance in supplier discussions</li>
                                <li className="flex items-center gap-2">• Clear understanding of specs and pricing</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SUPPLIER EVALUATION & VERIFICATION - Two column */}
            <section className="px-6 py-24 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left: Supplier Selection */}
                    <div>
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Verify First</motion.span>
                        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">Supplier Evaluation & Verification</motion.h2>
                        <div className="space-y-6">
                            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                    <BadgeCheck className="w-5 h-5 text-blue-400" />
                                    Smart Supplier Selection
                                </h3>
                                <ul className="space-y-3 text-white/60 text-sm">
                                    <li className="flex items-center gap-2">• Background verification of suppliers</li>
                                    <li className="flex items-center gap-2">• Factory-level insights and credibility checks</li>
                                    <li className="flex items-center gap-2">• Assistance in shortlisting reliable vendors</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right: Sample Checks */}
                    <div>
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Quality First</motion.span>
                        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold mt-3 mb-8 invisible md:visible">
                            &nbsp;
                        </motion.h2>
                        <div className="space-y-6">
                            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                    <Camera className="w-5 h-5 text-blue-400" />
                                    Sample Checks & Validation
                                </h3>
                                <ul className="space-y-3 text-white/60 text-sm">
                                    <li className="flex items-center gap-2">• Product sample evaluation</li>
                                    <li className="flex items-center gap-2">• Quality expectation alignment</li>
                                    <li className="flex items-center gap-2">• Packaging and specification review</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* END-TO-END SOURCING SUPPORT */}
            <section className="px-6 py-24 bg-white/5">
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Complete Journey</motion.span>
                    <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold mt-3 font-heading">
                        End-to-End Sourcing Support
                    </motion.h2>
                    <motion.p {...fadeUp} className="text-white/60 mt-3 max-w-2xl mx-auto">
                        From fair to shipment planning - everything under one roof
                    </motion.p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: Handshake, title: "Supplier Coordination", text: "Supplier coordination after meetings" },
                            { icon: ClipboardList, title: "Quotation Optimisation", text: "Quotation comparison and optimisation" },
                            { icon: Globe, title: "Shipment Planning", text: "Shipment planning under DDP model" },
                            { icon: Package, title: "Multi-Vendor Planning", text: "Multi-vendor consolidation planning" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                {...fadeUp}
                                transition={{ delay: i * 0.08 }}
                                className="border border-white/10 rounded-xl p-5 text-center bg-white/5 hover:border-blue-500/30 transition"
                            >
                                <item.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                                <h3 className="font-semibold mb-2 text-sm">{item.title}</h3>
                                <p className="text-white/50 text-xs">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* POST-FAIR EXECUTION STRATEGY + HOW IT FITS INTO ECOSYSTEM - Two column */}
            <section className="px-6 py-24 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left: Post-Fair Strategy */}
                    <div>
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">After the Fair</motion.span>
                        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">Post-Fair Execution Strategy</motion.h2>
                        <div className="space-y-4">
                            {[
                                { icon: Phone, text: "Supplier communication management" },
                                { icon: FileText, text: "Order finalisation guidance" },
                                { icon: Shield, text: "Documentation and compliance planning" },
                                { icon: Truck, text: "Integration with shipping and delivery" },
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

                    {/* Right: Ecosystem Integration */}
                    <div>
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Seamless Integration</motion.span>
                        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">How It Fits into CTIDDP Ecosystem</motion.h2>
                        <div className="bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl p-8 border border-blue-500/20">
                            <div className="text-center mb-6">
                                <p className="text-white/80 text-lg">Complete Trade Flow</p>
                                <div className="flex flex-wrap items-center justify-center gap-1 mt-4">
                                    {["Canton Fair", "Selection", "QC", "Consolidation", "Shipping", "Customs", "Delivery"].map((stage, i) => (
                                        <div key={i} className="flex items-center">
                                            <span className="bg-blue-500/20 px-2 py-1 rounded-full text-xs text-blue-300">{stage}</span>
                                            {i < 6 && <ArrowRight className="w-3 h-3 text-white/30 mx-1" />}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-3">
                                {[
                                    "Continuity from sourcing to delivery",
                                    "Single point of coordination",
                                    "Better planning and execution",
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

            {/* IDEAL FOR THESE IMPORTERS + KEY ADVANTAGES - Two column */}
            <section className="px-6 py-24 bg-white/5">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
                    {/* Left: Ideal Importers */}
                    <div>
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Perfect Fit</motion.span>
                        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">Ideal for These Importers</motion.h2>
                        <div className="space-y-4">
                            {[
                                { icon: Users, text: "First-time importers visiting Canton Fair" },
                                { icon: Building2, text: "Businesses sourcing from multiple suppliers" },
                                { icon: TrendingUp, text: "Importers planning bulk or regular shipments" },
                                { icon: Package, text: "Companies expanding product categories" },
                                { icon: Calendar, text: "Buyers looking for structured sourcing support" },
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

                    {/* Right: Key Advantages */}
                    <div>
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Why Choose Us</motion.span>
                        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">Key Advantages</motion.h2>
                        <div className="grid gap-3">
                            {[
                                { icon: MapPin, text: "On-ground team in Guangzhou" },
                                { icon: Languages, text: "Real-time negotiation support" },
                                { icon: BadgeCheck, text: "Supplier verification and validation" },
                                { icon: Globe, text: "Integrated shipping planning" },
                                { icon: Shield, text: "End-to-end DDP execution" },
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

            {/* FINAL CTA */}
            <CTA
                title="Make Your Canton Fair Visit Result-Driven"
                text="Turn your sourcing into a complete logistics solution. From exhibition hall to your warehouse - one partner, complete control."
                buttonLabel="Get DDP Quote"
            />
        </main>
    )
}