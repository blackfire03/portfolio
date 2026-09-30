"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ContactCTA() {
    return (
        <section id="contact" className="relative z-20 bg-[#000000] py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-white/5">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-6 flex flex-col items-center"
                >
                    <span className="block text-[13px] md:text-[14px] font-semibold text-[#9d8cff] tracking-[0.16em] uppercase">
                        HAVE A PROJECT IN MIND?
                    </span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-[-0.03em] leading-[1.08]">
                        Let&apos;s make something<br />
                        <span className="text-[#9d8cff]">great together.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-[#9a9ba3] font-light max-w-xl leading-relaxed pt-2">
                        Have a brand, website, or visual project in mind? Let&apos;s talk about it.
                    </p>
                    <div className="pt-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 bg-[#9d8cff] hover:bg-[#b0a2ff] text-[#08090d] font-bold text-base md:text-lg px-8 py-4 rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(157,140,255,0.28)]"
                        >
                            Contact me
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
