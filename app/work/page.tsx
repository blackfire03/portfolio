"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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

const CATEGORIES = [
    {
        title: "Website Design Projects",
        description: "Turning complex ideas into simple, elegant websites built for usability and impact.",
        image: "/website-design-cover.png",
        href: "/work/website-design-projects",
        bgClass: "bg-[#edeae4]",
    },
    {
        title: "Social Media Creatives",
        description: "Scroll-stopping single posts and carousels designed to inform, engage, and build brand presence.",
        image: "/social-media-creatives-cover.png",
        href: "/work/social-media-creatives",
        bgClass: "bg-[#f1ede4]",
    },
    {
        title: "Brand Identity Projects",
        description: "Building cohesive brand identities — logos, color systems, and visual guidelines that stick.",
        image: "/brand-identity-cover.png",
        href: "/work/brand-identity",
        bgClass: "bg-[#f1ede4]",
    },
];

export default function AllWorkPage() {
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
                        Portfolio <span className="mx-2">/</span> <span className="text-zinc-300">All Work</span>
                    </div>
                </motion.div>

                {/* Main Content Section */}
                <section className="px-6 md:px-12 lg:px-24 py-16 md:py-20 max-w-[100rem] mx-auto w-full">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="mb-12 md:mb-16"
                    >
                        <span className="block text-[13px] font-semibold text-[#9a9ba3] tracking-[0.14em] uppercase mb-3">
                            SELECTED WORK
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
                            All Work & Projects
                        </h1>
                        <p className="text-base md:text-lg text-zinc-400 font-light max-w-2xl leading-relaxed">
                            A showcase of digital experiences, interactive design systems, social creatives, and brand identity projects.
                        </p>
                    </motion.div>

                    {/* Cards Grid */}
                    <motion.div 
                        variants={stagger}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
                    >
                        {CATEGORIES.map((category, index) => (
                            <motion.div key={index} variants={fadeIn} className="group flex flex-col justify-between">
                                <div>
                                    <Link 
                                        href={category.href} 
                                        onClick={() => sendGAEvent("event", "cta_view_projects")}
                                        className="block"
                                    >
                                        <div className={`relative aspect-[16/11] overflow-hidden rounded-xl mb-6 ${category.bgClass}`}>
                                            <Image 
                                                src={category.image}
                                                alt={category.title}
                                                fill
                                                className="object-contain group-hover:scale-105 transition-all duration-700"
                                                priority={index === 0}
                                            />
                                        </div>
                                        <h2 className="text-[1.1rem] font-semibold text-white mb-2 group-hover:text-zinc-300 transition-colors">
                                            {category.title}
                                        </h2>
                                    </Link>
                                    <p className="text-zinc-500 text-[0.85rem] font-light leading-relaxed mb-4 line-clamp-2">
                                        {category.description}
                                    </p>
                                </div>
                                <div>
                                    <Link 
                                        href={category.href} 
                                        onClick={() => sendGAEvent("event", "cta_view_projects")}
                                        className="inline-flex items-center gap-2 text-[0.85rem] font-medium text-zinc-400 group-hover:text-white transition-all"
                                    >
                                        <ArrowRight className="w-4 h-4 rotate-[-45deg]" /> View Projects
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
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
