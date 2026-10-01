"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageSquare, Clock, ShieldCheck } from "lucide-react";
import { QuoteForm } from "@/components/QuoteForm";

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

export function QuoteContent() {
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
                        Portfolio <span className="mx-2 text-zinc-500" aria-hidden="true">/</span> <span className="text-zinc-200">Request a Quote</span>
                    </nav>
                </motion.div>

                {/* Main Container */}
                <div className="max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-20">

                    {/* SECTION 1 — HERO */}
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        animate="visible"
                        className="mb-12 md:mb-16 text-left"
                    >
                        <motion.span
                            variants={fadeIn}
                            className="block text-[13px] md:text-[14px] font-semibold text-[#9d8cff] tracking-[0.16em] uppercase mb-4"
                        >
                            REQUEST A QUOTE
                        </motion.span>

                        <motion.h1
                            variants={fadeIn}
                            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-[-0.03em] leading-[1.08] mb-6"
                        >
                            Let&apos;s talk about<br />
                            <span className="text-[#9d8cff]">your project.</span>
                        </motion.h1>

                        <motion.p
                            variants={fadeIn}
                            className="text-base sm:text-lg text-[#9a9ba3] font-light leading-relaxed max-w-2xl"
                        >
                            Tell me what you&apos;re building, what you need designed, and where you&apos;re currently at. I&apos;ll review the details and get back to you with the next steps.
                        </motion.p>

                        {/* Secondary Link to General Contact */}
                        <motion.div variants={fadeIn} className="pt-6">
                            <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-zinc-400 bg-[#0f1118] border border-white/10 rounded-full px-4 py-2">
                                <span>Just have a quick question?</span>
                                <Link
                                    href="/contact"
                                    className="text-[#9d8cff] hover:text-[#b0a2ff] font-medium flex items-center gap-1 transition-colors"
                                >
                                    Get in touch <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* FORM SECTION */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <QuoteForm />
                    </motion.div>

                    {/* Supporting Expectations Grid */}
                    <div className="pt-12 mt-12 border-t border-white/5">
                        <h2 className="text-xs font-semibold text-[#8c8d99] tracking-[0.14em] uppercase mb-6">
                            WHAT TO EXPECT
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-zinc-400">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-[#141622] border border-[#27293a] flex items-center justify-center shrink-0 text-[#9d8cff]">
                                    <Clock className="w-4 h-4" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-white">Direct review</h3>
                                    <p className="text-xs text-[#9a9ba3] mt-1 leading-relaxed">
                                        Every submission is evaluated directly by Hitarth to scope realistic milestones.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-[#141622] border border-[#27293a] flex items-center justify-center shrink-0 text-[#9d8cff]">
                                    <MessageSquare className="w-4 h-4" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-white">No obligation</h3>
                                    <p className="text-xs text-[#9a9ba3] mt-1 leading-relaxed">
                                        Free exploratory discussions to make sure our vision and requirements align.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-[#141622] border border-[#27293a] flex items-center justify-center shrink-0 text-[#9d8cff]">
                                    <ShieldCheck className="w-4 h-4" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-white">Confidential</h3>
                                    <p className="text-xs text-[#9a9ba3] mt-1 leading-relaxed">
                                        Your project context, ideas, and contact information are kept strictly confidential.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-white/10 bg-[#121212] py-12 px-6 md:px-12 lg:px-24 w-full mt-16">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-400 text-sm font-light">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                        <p>© {new Date().getFullYear()} Hitarth Nayak. All rights reserved.</p>
                        <span className="hidden md:inline text-white/20" aria-hidden="true">|</span>
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <span className="hidden md:inline text-white/20" aria-hidden="true">|</span>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
                    </div>
                    <div className="flex gap-6">
                        <a href="https://www.instagram.com/craftedbyhitarth/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
                        <a href="https://x.com/crafthitarth03" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
                        <a href="https://in.linkedin.com/in/hitarth-n-268316304" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="https://github.com/blackfire03" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                    </div>
                </div>
            </footer>
        </main>
    );
}
