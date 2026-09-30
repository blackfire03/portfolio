"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail, Clock, Calendar, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
};

const stagger = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const SERVICES = [
    "Brand Identity",
    "UI/UX Design",
    "Website Design",
    "Graphic Design",
    "Social Media Design",
    "Visual Systems"
];

export function ContactContent() {
    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-[#9d8cff]/20 font-sans flex flex-col justify-between overflow-x-hidden">
            <div>
                {/* Top Bar / Breadcrumb */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full px-6 md:px-12 lg:px-24 py-6 md:py-8 flex items-center justify-between sticky top-0 bg-[#050505]/85 backdrop-blur-md z-40 border-b border-white/5"
                >
                    <Link href="/" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 rotate-180" /> Back to Homepage
                    </Link>
                    <nav aria-label="Breadcrumb" className="text-sm font-medium text-zinc-400">
                        Portfolio <span className="mx-2 text-zinc-500" aria-hidden="true">/</span> <span className="text-zinc-200">Contact</span>
                    </nav>
                </motion.div>

                {/* Main Content Area */}
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-20">

                    {/* SECTION 1 — HERO */}
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        animate="visible"
                        className="mb-14 md:mb-20 max-w-3xl"
                    >
                        <motion.span
                            variants={fadeIn}
                            className="block text-[13px] md:text-[14px] font-semibold text-[#9d8cff] tracking-[0.16em] uppercase mb-4"
                        >
                            GET IN TOUCH
                        </motion.span>

                        <motion.h1
                            variants={fadeIn}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-extrabold text-white tracking-[-0.03em] leading-[1.08] mb-6"
                        >
                            Let&apos;s build something<br />
                            <span className="text-[#9d8cff]">worth remembering.</span>
                        </motion.h1>

                        <motion.p
                            variants={fadeIn}
                            className="text-base sm:text-lg md:text-xl text-[#9a9ba3] font-light leading-relaxed max-w-2xl"
                        >
                            I&apos;m Hitarth Nayak — freelance brand & visual designer. Available for freelance and contractual design projects across brand identity, digital experiences, websites, and visual systems. Share your project details below to get started.
                        </motion.p>
                    </motion.div>

                    {/* TWO-COLUMN GRID: Supporting Context & Form */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">

                        {/* LEFT COLUMN: Supporting Sections */}
                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-40px" }}
                            className="space-y-10"
                        >
                            {/* SECTION 3 — WHAT I CAN HELP WITH */}
                            <motion.div variants={fadeIn} className="space-y-4">
                                <span className="block text-[12px] font-semibold text-[#8c8d99] tracking-[0.14em] uppercase">
                                    CAPABILITIES
                                </span>
                                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                                    What I can help with
                                </h2>
                                <p className="text-sm text-[#9a9ba3] font-light leading-relaxed">
                                    Whether you need end-to-end design or focused execution for a specific milestone:
                                </p>
                                <div className="flex flex-wrap gap-2.5 pt-1">
                                    {SERVICES.map((service) => (
                                        <span
                                            key={service}
                                            className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[#141620] border border-[#262838] text-zinc-300 hover:border-[#9d8cff]/50 transition-colors"
                                        >
                                            {service}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* SECTION 4 — EXPECTATION / RESPONSE */}
                            <motion.div variants={fadeIn} className="rounded-2xl bg-[#0f1118] border border-white/10 p-6 space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-lg bg-[#181a26] border border-[#2d3042] flex items-center justify-center shrink-0">
                                        <Clock className="w-4 h-4 text-[#9d8cff]" />
                                    </div>
                                    <div>
                                        <h2 className="text-base font-semibold text-white">
                                            What happens next
                                        </h2>
                                        <p className="text-xs text-[#9a9ba3]">
                                            Quick turnaround & personal review
                                        </p>
                                    </div>
                                </div>
                                <p className="text-sm text-[#9a9ba3] font-light leading-relaxed">
                                    Tell me what you&apos;re working on. I&apos;ll review the details and get back to you personally — typically in <strong className="text-white font-semibold">2 hours</strong>.
                                </p>
                                <div className="pt-1 flex items-center gap-2 text-xs text-zinc-400">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                                    <span>Open to freelance & contractual work worldwide</span>
                                </div>
                            </motion.div>

                            {/* SECONDARY CTA — REQUEST A QUOTE */}
                            <motion.div variants={fadeIn} className="rounded-2xl bg-gradient-to-r from-[#141624] to-[#10121b] border border-[#9d8cff]/30 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <div>
                                    <span className="text-[11px] font-semibold text-[#9d8cff] uppercase tracking-wider block mb-1">
                                        Have a specific project in mind?
                                    </span>
                                    <h3 className="text-sm font-semibold text-white">
                                        Need a detailed proposal or timeline estimate?
                                    </h3>
                                </div>
                                <Link
                                    href="/request-a-quote"
                                    className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#9d8cff] hover:bg-[#b0a2ff] text-[#08090d] text-xs font-bold transition-all shadow-[0_0_15px_rgba(157,140,255,0.2)]"
                                >
                                    <span>Request a quote</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </motion.div>

                            {/* SECTION 5 — OPTIONAL ALTERNATIVE */}
                            <motion.div variants={fadeIn} className="rounded-2xl bg-[#0f1118] border border-white/10 p-6 space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-lg bg-[#181a26] border border-[#2d3042] flex items-center justify-center shrink-0">
                                        <Calendar className="w-4 h-4 text-[#9d8cff]" />
                                    </div>
                                    <div>
                                        <h2 className="text-base font-semibold text-white">
                                            Prefer a quick conversation?
                                        </h2>
                                        <p className="text-xs text-[#9a9ba3]">
                                            Skip the form and talk directly
                                        </p>
                                    </div>
                                </div>
                                <p className="text-sm text-[#9a9ba3] font-light leading-relaxed">
                                    If you&apos;d rather discuss your project goals directly, schedule a quick 30-minute intro call on my calendar.
                                </p>
                                <div className="pt-2">
                                    <a
                                        href="https://calendly.com/freelancing-hitarth/30min"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#1b1e2c] border border-white/15 hover:border-[#9d8cff] text-white text-sm font-semibold transition-all hover:bg-[#222538] cursor-pointer"
                                    >
                                        <Calendar className="w-4 h-4 text-[#9d8cff]" />
                                        <span>Book a 30-minute call</span>
                                        <ArrowRight className="w-3.5 h-3.5 rotate-[-45deg] text-zinc-400" />
                                    </a>
                                </div>
                            </motion.div>

                            {/* SECTION 6 — FINAL CONTACT DETAILS */}
                            <motion.div variants={fadeIn} className="rounded-2xl bg-[#0f1118] border border-white/10 p-6 space-y-3">
                                <span className="block text-[12px] font-semibold text-[#8c8d99] tracking-[0.14em] uppercase">
                                    DIRECT CONTACT
                                </span>
                                <div className="space-y-3 pt-1">
                                    <a
                                        href="mailto:freelancing.hitarth@gmail.com"
                                        className="flex items-center gap-3 text-sm text-zinc-300 hover:text-white transition-colors group"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-[#181a26] border border-[#2d3042] flex items-center justify-center shrink-0 group-hover:border-[#9d8cff]/60 transition-colors">
                                            <Mail className="w-4 h-4 text-[#9d8cff]" />
                                        </div>
                                        <span className="truncate">freelancing.hitarth@gmail.com</span>
                                    </a>

                                    <a
                                        href="tel:+917021484227"
                                        className="flex items-center gap-3 text-sm text-zinc-300 hover:text-white transition-colors group"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-[#181a26] border border-[#2d3042] flex items-center justify-center shrink-0 group-hover:border-[#9d8cff]/60 transition-colors">
                                            <Phone className="w-4 h-4 text-[#9d8cff]" />
                                        </div>
                                        <span>+91 7021484227</span>
                                    </a>
                                </div>
                            </motion.div>

                        </motion.div>

                        {/* RIGHT COLUMN: SECTION 2 — CONTACT FORM */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <ContactForm />
                        </motion.div>

                    </div>

                </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-white/10 bg-[#121212] py-12 px-6 md:px-12 lg:px-24 w-full mt-16">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-400 text-sm font-light">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                        <p>© {new Date().getFullYear()} Hitarth. All rights reserved.</p>
                        <span className="hidden md:inline text-white/20" aria-hidden="true">|</span>
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <span className="hidden md:inline text-white/20" aria-hidden="true">|</span>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
                    </div>
                    <div className="flex gap-6">
                        <a href="https://www.instagram.com/craftedbyhitarth/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
                        <a href="https://x.com/crafthitarth03" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
                        <a href="https://in.linkedin.com/in/hitarth-n-268316304" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="https://github.com/blackfire03" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                    </div>
                </div>
            </footer>
        </main>
    );
}
