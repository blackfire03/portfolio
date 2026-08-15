"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Palette, Layers, Box } from "lucide-react";

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

export default function BrandIdentityProjects() {
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
                        Case Studies <span className="mx-2">/</span> <span className="text-zinc-300">Brand Identity Projects</span>
                    </div>
                </motion.div>

                {/* Header & Placeholder Section */}
                <section className="px-6 md:px-12 lg:px-24 py-20 max-w-[100rem] mx-auto w-full">
                    <motion.div 
                        variants={stagger}
                        initial="hidden"
                        animate="visible"
                        className="space-y-12"
                    >
                        <motion.div variants={fadeIn} className="space-y-4 max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold tracking-wide uppercase">
                                <Sparkles className="w-3.5 h-3.5" /> Project Category
                            </div>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                                Brand Identity Projects
                            </h1>
                            <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
                                Building cohesive brand identities — logos, color systems, and visual guidelines that stick.
                            </p>
                        </motion.div>

                        {/* Coming Soon / In Progress Container */}
                        <motion.div 
                            variants={fadeIn}
                            className="rounded-3xl bg-zinc-950/60 border border-white/10 p-8 md:p-14 text-center space-y-6 max-w-4xl"
                        >
                            <div className="w-16 h-16 mx-auto rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                                <Palette className="w-8 h-8" />
                            </div>
                            
                            <div className="space-y-2">
                                <h2 className="text-2xl font-bold text-white">
                                    Case Studies in Progress
                                </h2>
                                <p className="text-zinc-400 font-light text-base max-w-lg mx-auto leading-relaxed">
                                    Brand identity showcases, design systems, and identity guideline case studies are being finalized for this section.
                                </p>
                            </div>

                            <div className="pt-4 flex flex-wrap justify-center gap-4">
                                <Link 
                                    href="/work/website-design-projects"
                                    className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors text-sm"
                                >
                                    Explore Website Design
                                </Link>
                                <Link 
                                    href="/work/social-media-creatives"
                                    className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors text-sm"
                                >
                                    Explore Social Creatives
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                </section>
            </div>

            {/* Footer */}
            <footer className="border-t border-white/10 bg-[#121212] py-12 px-6 md:px-12 lg:px-24 w-full mt-20">
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
