"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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

export default function SocialMediaCreatives() {
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
                    <Link href="/" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                        Back to Homepage
                    </Link>
                    <div className="text-sm font-medium text-zinc-500">
                        Case Studies <span className="mx-2">/</span> <span className="text-zinc-300">Social Media Creatives</span>
                    </div>
                </motion.div>

                {/* Cards Section */}
                <section className="px-6 md:px-12 lg:px-24 py-20 max-w-[100rem] mx-auto w-full">
                    <motion.div 
                        variants={stagger}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
                    >
                        {/* Card 1 */}
                        <motion.div variants={fadeIn} className="group">
                            <Link href="/work/ochre-and-oak" className="block">
                                <div className="relative aspect-[16/11] overflow-hidden rounded-xl mb-6 bg-[#092701]">
                                    <Image 
                                        src="/work/ochre-oak/card_thumbnail.jpg"
                                        alt="Ochre & Oak — Café Social Media Content & Mascot Design"
                                        fill
                                        className="object-contain p-3 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                        priority
                                    />
                                </div>
                                <h3 className="text-[1.1rem] font-semibold text-white mb-2 group-hover:text-zinc-300 transition-colors">
                                    Ochre & Oak — Café Social Media Content & Mascot Design
                                </h3>
                            </Link>
                            <p className="text-zinc-500 text-[0.85rem] font-light leading-relaxed mb-4 line-clamp-2">
                                A 7-day Instagram content calendar plus a recurring brand mascot for a minimal specialty coffee café.
                            </p>
                            <Link href="/work/ochre-and-oak" className="inline-flex items-center gap-2 text-[0.85rem] font-medium text-zinc-400 group-hover:text-white transition-all">
                                <ArrowRight className="w-4 h-4 rotate-[-45deg]" /> View Case Study
                            </Link>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div variants={fadeIn} className="group">
                            <Link href="/work/veyra" className="block">
                                <div className="relative aspect-[16/11] overflow-hidden rounded-xl mb-6 bg-[#ece8dc]">
                                    <Image 
                                        src="/work/veyra/logo.jpg"
                                        alt="Veyra — Skincare Brand & Social Media Content Design"
                                        fill
                                        className="object-contain p-4 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                        priority
                                    />
                                </div>
                                <h3 className="text-[1.1rem] font-semibold text-white mb-2 group-hover:text-zinc-300 transition-colors">
                                    Veyra — Skincare Brand & Social Media Content Design
                                </h3>
                            </Link>
                            <p className="text-zinc-500 text-[0.85rem] font-light leading-relaxed mb-4 line-clamp-2">
                                A 7-day Instagram content calendar for a minimal clean skincare brand positioned as &apos;quiet luxury&apos;.
                            </p>
                            <Link href="/work/veyra" className="inline-flex items-center gap-2 text-[0.85rem] font-medium text-zinc-400 group-hover:text-white transition-all">
                                <ArrowRight className="w-4 h-4 rotate-[-45deg]" /> View Case Study
                            </Link>
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
