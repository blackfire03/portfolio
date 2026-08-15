"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { sendGAEvent } from "@next/third-parties/google";

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
        transition: { staggerChildren: 0.2 }
    }
};

export default function WebsiteDesignProjects() {
    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-white/20 font-sans flex flex-col justify-between">
            <div>
                {/* Top Bar / Breadcrumb */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full px-6 md:px-12 lg:px-24 py-8 flex items-center justify-between sticky top-0 bg-[#050505]/80 backdrop-blur-md z-50 border-b border-white/5"
                >
                    <div className="flex items-center gap-4">
                        <Link href="/work" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
                            <ArrowRight className="w-4 h-4 rotate-180" /> All Work
                        </Link>
                        <span className="text-zinc-600">|</span>
                        <Link href="/" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                            Home
                        </Link>
                    </div>
                    <div className="text-sm font-medium text-zinc-500">
                        Case Studies <span className="mx-2">/</span> <span className="text-zinc-300">Website Design Projects</span>
                    </div>
                </motion.div>

                {/* Main Content Section */}
                <section className="px-6 md:px-12 lg:px-24 py-20 max-w-[100rem] mx-auto w-full">
                    <motion.div 
                        variants={stagger}
                        initial="hidden"
                        animate="visible"
                        className="space-y-12"
                    >
                        {/* Header */}
                        <motion.div variants={fadeIn} className="space-y-4 max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold tracking-wide uppercase">
                                <Sparkles className="w-3.5 h-3.5" /> Project Category
                            </div>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                                Website Design Projects
                            </h1>
                            <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
                                Turning complex ideas into simple, elegant websites built for usability and impact.
                            </p>
                        </motion.div>

                        {/* Cards Grid */}
                        <motion.div 
                            variants={stagger}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
                        >
                            {/* Card 1 */}
                            <motion.div variants={fadeIn} className="group">
                                <Link 
                                    href="/work/quacks-bakery" 
                                    onClick={() => sendGAEvent("event", "cta_view_case_study")}
                                    className="block"
                                >
                                    <div className="relative aspect-[16/11] overflow-hidden rounded-xl mb-6 bg-[#004aac]">
                                        <Image 
                                            src="/work/website-design-projects/quacks.jpg"
                                            alt="Quack's 43rd Street Bakery"
                                            fill
                                            className="object-contain p-3 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                            priority
                                        />
                                    </div>
                                    <h3 className="text-[1.1rem] font-semibold text-white mb-2 group-hover:text-zinc-300 transition-colors">
                                        Quack's 43rd Street Bakery
                                    </h3>
                                </Link>
                                <p className="text-zinc-500 text-[0.85rem] font-light leading-relaxed mb-4 line-clamp-2">
                                    From a broken map and a raw Instagram feed to a story driven site... gave Quack's a homepage worthy of its 'Best of Austin' reputation.
                                </p>
                                <Link 
                                    href="/work/quacks-bakery" 
                                    onClick={() => sendGAEvent("event", "cta_view_case_study")}
                                    className="inline-flex items-center gap-2 text-[0.85rem] font-medium text-zinc-400 group-hover:text-white transition-all"
                                >
                                    <ArrowRight className="w-4 h-4 rotate-[-45deg]" /> View Case Study
                                </Link>
                            </motion.div>

                            {/* Card 2 */}
                            <motion.div variants={fadeIn} className="group">
                                <Link 
                                    href="/work/bloody-rose" 
                                    onClick={() => sendGAEvent("event", "cta_view_case_study")}
                                    className="block"
                                >
                                    <div className="relative aspect-[16/11] overflow-hidden rounded-xl mb-6 bg-[#ffffff]">
                                        <Image 
                                            src="/work/website-design-projects/bloody-rose.jpg"
                                            alt="Bloody Rose Boutique"
                                            fill
                                            className="object-contain p-4 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                        />
                                    </div>
                                    <h3 className="text-[1.1rem] font-semibold text-white mb-2 group-hover:text-zinc-300 transition-colors">
                                        Bloody Rose Boutique
                                    </h3>
                                </Link>
                                <p className="text-zinc-500 text-[0.85rem] font-light leading-relaxed mb-4 line-clamp-2">
                                    Turning a generic Shopify storefront into a moody, brand-true experience for Austin's home for alternative fashion.
                                </p>
                                <Link 
                                    href="/work/bloody-rose" 
                                    onClick={() => sendGAEvent("event", "cta_view_case_study")}
                                    className="inline-flex items-center gap-2 text-[0.85rem] font-medium text-zinc-400 group-hover:text-white transition-all"
                                >
                                    <ArrowRight className="w-4 h-4 rotate-[-45deg]" /> View Case Study
                                </Link>
                            </motion.div>

                            {/* Card 3 */}
                            <motion.div variants={fadeIn} className="group">
                                <Link 
                                    href="/work/leafora" 
                                    onClick={() => sendGAEvent("event", "cta_view_case_study")}
                                    className="block"
                                >
                                    <div className="relative aspect-[16/11] overflow-hidden rounded-xl mb-6 bg-[#edeae3]">
                                        <Image 
                                            src="/work/website-design-projects/leafora.jpg"
                                            alt="Leafora"
                                            fill
                                            className="object-contain p-4 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                        />
                                    </div>
                                    <h3 className="text-[1.1rem] font-semibold text-white mb-2 group-hover:text-zinc-300 transition-colors">
                                        Leafora
                                    </h3>
                                </Link>
                                <p className="text-zinc-500 text-[0.85rem] font-light leading-relaxed mb-4 line-clamp-2">
                                    Designed from a single client brief: premium, calm, and earthy — without a single cliché.
                                </p>
                                <Link 
                                    href="/work/leafora" 
                                    onClick={() => sendGAEvent("event", "cta_view_case_study")}
                                    className="inline-flex items-center gap-2 text-[0.85rem] font-medium text-zinc-400 group-hover:text-white transition-all"
                                >
                                    <ArrowRight className="w-4 h-4 rotate-[-45deg]" /> View Case Study
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </section>
            </div>

            {/* Footer */}
            <footer className="border-t border-white/10 bg-[#121212] py-12 px-6 md:px-12 lg:px-24 w-full">
                <div className="max-w-[100rem] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-500 text-sm font-light">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                        <p>© {new Date().getFullYear()} Hitarth. All rights reserved.</p>
                        <span className="hidden md:inline text-white/20">|</span>
                        <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
                        <span className="hidden md:inline text-white/20">|</span>
                        <a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a>
                    </div>
                    <div className="flex gap-6">
                        <a href="https://www.instagram.com/craftedbyhitarth/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                        <a href="https://www.linkedin.com/in/hitarth-nayak-268316304/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="https://github.com/blackfire03" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                    </div>
                </div>
            </footer>
        </main>
    );
}
