"use client"

import Breadcrumb from "@/components/service/Breadcrumb"
import Hero from "@/components/service/Hero"
import CTA from "@/components/service/CTA"
import { motion } from "framer-motion"
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

const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.5, ease: "easeOut" },
}

const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { staggerChildren: 0.1 },
}

export default function SupplierPaymentsClient() {
    return (
        <main className="bg-black text-white">
            <Breadcrumb current="Supplier Payments" />

            {/* HERO SECTION - Enhanced */}
            <Hero
                title="Secure Supplier Payments in China | Cross-Border Payment Management by CTIDDP"
                subtitle="Pay your China suppliers with confidence and control through a managed payment process aligned with your shipment execution."
                badge="Cross-Border Payment Management"
                bgImage="/images/services/businessman-uses-online-shopping-card-pay-via-mobile-phone-network.jpeg"
            />

            {/* WHAT IS SUPPLIER PAYMENT MANAGEMENT - New explanatory section */}
            <section className="px-6 py-24 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">The Challenge</motion.span>
                        <motion.h2 {...fadeUp} className="text-4xl md:text-5xl font-bold mt-3 mb-5 font-heading">
                            What is Supplier Payment Management for Imports?
                        </motion.h2>
                        <motion.p {...fadeUp} className="text-white/70 text-lg mb-6">
                            Supplier payment management ensures your funds reach the right supplier, through the right channel, with full documentation and compliance.
                        </motion.p>
                        <motion.div {...fadeUp} className="space-y-3">
                            <p className="text-white/60">When sourcing from China, payments typically involve:</p>
                            <div className="flex flex-wrap gap-2">
                                {["International bank transfers", "Currency conversion (INR to USD/CNY)", "Supplier verification", "Transaction documentation", "Payment tracking"].map((item, i) => (
                                    <span key={i} className="bg-white/10 rounded-full px-3 py-1 text-sm text-white/70">• {item}</span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                    <motion.div {...fadeUp} className="bg-gradient-to-br from-blue-500/10 to-transparent border border-white/10 rounded-2xl p-8 text-center">
                        <Shield className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                        <p className="text-white/80 text-lg font-semibold">CTIDDP simplifies this entire process</p>
                        <p className="text-2xl font-bold text-blue-400 mt-2">Into a structured, secure workflow</p>
                    </motion.div>
                </div>
            </section>

            {/* WHAT WE HANDLE - Three pillars (enhanced from original blocks) */}
            <section className="px-6 py-24 bg-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">End-to-End Solution</motion.span>
                        <motion.h2 {...fadeUp} className="text-4xl md:text-5xl font-bold mt-3 mb-5 font-heading">
                            CTIDDP Supplier Payment Solution
                        </motion.h2>
                        <motion.p {...fadeUp} className="text-white/60 max-w-2xl mx-auto">
                            What we handle - from verification to dispatch coordination
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: BadgeCheck, title: "Supplier Verification", text: "Supplier account and documentation checks before funds are initiated. Ensure you're paying the right entity." },
                            { icon: Landmark, title: "Cross-Border Payment Handling", text: "Structured payment processing from India to China with currency conversion support (INR → USD/CNY)." },
                            { icon: FileText, title: "Documentation and Tracking", text: "Invoice validation, payment records, and dispatch-aligned transaction visibility from start to finish." },
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                {...fadeUp}
                                transition={{ delay: i * 0.08 }}
                                className="group border border-white/10 rounded-2xl p-8 bg-gradient-to-br from-white/5 to-transparent hover:bg-white/10 transition-all duration-300 hover:border-blue-500/50"
                            >
                                <item.icon className="w-10 h-10 text-blue-400 mb-5" />
                                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                                <p className="text-white/65 text-sm leading-relaxed">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Additional coverage items as a grid */}
                    <motion.div {...fadeUp} className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-3 pt-8 border-t border-white/10">
                        {[
                            "Supplier verification before payment",
                            "Cross-border payment processing",
                            "Currency conversion handling",
                            "Invoice & documentation validation",
                            "Payment tracking & confirmation",
                            "Coordination with supplier for dispatch",
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-white/50 text-sm">
                                <CheckCircle2 className="w-3 h-3 text-blue-400" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* PAYMENT WORKFLOW + KEY FEATURES - Two column layout */}
            <section className="px-6 py-24 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left: Workflow */}
                    <div>
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Step by Step</motion.span>
                        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">Payment Workflow</motion.h2>
                        <div className="space-y-4">
                            {[
                                "You finalise supplier and order details",
                                "CTIDDP verifies supplier credentials",
                                "Invoice and payment terms are reviewed",
                                "Payment is processed via secure channels",
                                "Supplier confirms receipt",
                                "Production or dispatch is initiated",
                            ].map((step, i) => (
                                <motion.div
                                    key={i}
                                    {...fadeUp}
                                    transition={{ delay: i * 0.06 }}
                                    className="flex items-center gap-4 p-3 rounded-lg group hover:bg-white/5"
                                >
                                    <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm font-bold shrink-0">
                                        {i + 1}
                                    </div>
                                    <span className="text-white/80">{step}</span>
                                    {i < 5 && <ArrowRight className="w-4 h-4 text-white/20 ml-auto shrink-0" />}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Key Features */}
                    <div>
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Built for Importers</motion.span>
                        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">Key Features</motion.h2>
                        <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                            <div className="space-y-5">
                                {[
                                    { icon: Shield, title: "Verified supplier payment flow", desc: "Every transaction starts with supplier confirmation" },
                                    { icon: FileCheck, title: "Structured documentation support", desc: "Invoices, receipts, and logs maintained" },
                                    { icon: Globe, title: "Cross-border transaction handling", desc: "Seamless INR to CNY/USD processing" },
                                    { icon: RefreshCw, title: "Integrated with logistics execution", desc: "Payments trigger shipment readiness" },
                                    { icon: Clock, title: "Real-time coordination", desc: "Supplier updates and tracking visibility" },
                                ].map((feature, i) => (
                                    <div key={i} className="flex gap-4 items-start">
                                        <feature.icon className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
                                        <div>
                                            <h4 className="font-medium text-white">{feature.title}</h4>
                                            <p className="text-white/50 text-sm">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PAYMENT METHODS TABLE */}
            <section className="px-6 py-24 bg-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Flexible Options</motion.span>
                        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold mt-3 font-heading">Payment Methods We Support</motion.h2>
                        <motion.p {...fadeUp} className="text-white/60 mt-3">Structured payment processing for every stage of procurement</motion.p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b border-white/20">
                                    <th className="text-left py-4 px-4 text-white font-semibold">Payment Type</th>
                                    <th className="text-left py-4 px-4 text-white font-semibold">Use Case</th>
                                    <th className="text-left py-4 px-4 text-white font-semibold">Handled By CTIDDP</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { type: "Bank Transfer (TT)", useCase: "Standard supplier payments", handled: "✓" },
                                    { type: "Advance Payments", useCase: "Production initiation", handled: "✓" },
                                    { type: "Balance Payments", useCase: "Before shipment dispatch", handled: "✓" },
                                    { type: "Multi-Supplier Payments", useCase: "Bulk sourcing / consolidation", handled: "✓" },
                                ].map((row, i) => (
                                    <motion.tr
                                        key={i}
                                        {...fadeUp}
                                        transition={{ delay: i * 0.08 }}
                                        className="border-b border-white/10 hover:bg-white/5"
                                    >
                                        <td className="py-4 px-4 font-medium">{row.type}</td>
                                        <td className="py-4 px-4 text-white/70">{row.useCase}</td>
                                        <td className="py-4 px-4 text-blue-400">{row.handled}</td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* WHY STRUCTURED HANDLING + INTEGRATED WITH DDP - Two column */}
            <section className="px-6 py-24 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left: Why Structured Handling */}
                    <div>
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Risk Mitigation</motion.span>
                        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">Why Supplier Payments Need Structured Handling</motion.h2>
                        <div className="space-y-4">
                            {[
                                "Correct supplier identification",
                                "Accurate invoice validation",
                                "Currency exchange handling",
                                "Documentation alignment with shipment",
                                "Payment confirmation before dispatch",
                            ].map((item, i) => (
                                <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.07 }} className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                                    <Shield className="w-5 h-5 text-blue-400" />
                                    <span className="text-white/80">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                        <motion.p {...fadeUp} className="text-white/60 text-sm mt-6 p-4 border-l-2 border-blue-400 bg-white/5">
                            CTIDDP ensures all these steps are handled within a controlled and transparent system.
                        </motion.p>
                    </div>

                    {/* Right: Integrated with DDP Shipping */}
                    <div>
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Seamless Integration</motion.span>
                        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">Integrated with DDP Shipping</motion.h2>
                        <div className="bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl p-8 border border-blue-500/20">
                            <div className="text-center mb-6">
                                <p className="text-white/80 text-lg">One Flow - Payment to Delivery</p>
                                <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
                                    {["Payment", "Production", "Pickup", "Shipping", "Delivery"].map((stage, i) => (
                                        <div key={i} className="flex items-center">
                                            <span className="bg-blue-500/20 px-3 py-1 rounded-full text-sm text-blue-300">{stage}</span>
                                            {i < 4 && <ArrowRight className="w-4 h-4 text-white/30 mx-1" />}
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

            {/* IDEAL USE CASES + DOCUMENTATION - Two column */}
            <section className="px-6 py-24 bg-white/5">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
                    {/* Left: Ideal Use Cases */}
                    <div>
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Perfect Fit</motion.span>
                        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">Ideal for These Use Cases</motion.h2>
                        <div className="space-y-3">
                            {[
                                { icon: Users, text: "Importers sourcing from multiple suppliers" },
                                { icon: Building2, text: "Businesses attending Canton Fair" },
                                { icon: TrendingUp, text: "Bulk product buyers" },
                                { icon: Shield, text: "First-time importers from China" },
                                { icon: Sparkles, text: "Growing businesses scaling procurement" },
                            ].map((item, i) => (
                                <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.06 }} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition">
                                    <item.icon className="w-5 h-5 text-blue-400" />
                                    <span className="text-white/80">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Documentation & Compliance */}
                    <div>
                        <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Full Compliance</motion.span>
                        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold mt-3 mb-8 font-heading">Documentation & Compliance Support</motion.h2>
                        <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                            <p className="text-white/70 mb-5">Included with every payment:</p>
                            <div className="space-y-3">
                                {[
                                    "Invoice validation",
                                    "Payment confirmation records",
                                    "Supplier coordination logs",
                                    "Alignment with shipping documentation",
                                ].map((doc, i) => (
                                    <div key={i} className="flex items-center gap-3 p-2">
                                        <FileText className="w-4 h-4 text-blue-400" />
                                        <span className="text-white/70 text-sm">{doc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE CTIDDP - Standalone section */}
            <section className="px-6 py-24 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <motion.span {...fadeUp} className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Trusted Partner</motion.span>
                    <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold mt-3 font-heading">Why Choose CTIDDP for Supplier Payments</motion.h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { icon: Users, title: "One Partner", desc: "One partner for payment + shipping - no middlemen" },
                        { icon: Globe, title: "Cross-Border Expertise", desc: "Structured cross-border transaction process" },
                        { icon: BadgeCheck, title: "Supplier Coordination", desc: "Supplier coordination handled professionally" },
                        { icon: Clock, title: "Reduced Effort", desc: "Reduced operational effort for your team" },
                        { icon: RefreshCw, title: "Seamless Transition", desc: "Seamless transition to DDP shipping" },
                        { icon: Wallet, title: "Cost Predictability", desc: "Transparent pricing with no hidden fees" },
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
                title="Simplify Your Supplier Payments Today"
                text="Handle payments and shipping under one structured system. One partner. One workflow. Complete peace of mind."
                buttonLabel="Get Started with CTIDDP"
            />
        </main>
    )
}