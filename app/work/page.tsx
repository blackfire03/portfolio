"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { sendGAEvent } from "@/lib/analytics";

import { Footer } from "@/components/Footer";

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
        alt: "Website design projects showcase cover featuring client homepage mockups",
    },
    {
        title: "Social Media Creatives",
        description: "Scroll-stopping single posts and carousels designed to inform, engage, and build brand presence.",
        image: "/social-media-creatives-cover.png",
        href: "/work/social-media-creatives",
        bgClass: "bg-[#f1ede4]",
        alt: "Social media creative projects cover showcasing campaign cards and layouts",
    },
    {
        title: "Brand Identity Projects",
        description: "Building cohesive brand identities — logos, color systems, and visual guidelines that stick.",
        image: "/brand-identity-cover.png",
        href: "/work/brand-identity",
        bgClass: "bg-[#f1ede4]",
        alt: "Brand identity projects cover illustrating typography and visual design systems",
    },
];

const FEATURED_CASE_STUDIES = [
    {
        title: "Quack's 43rd Street Bakery",
        category: "Website Design",
        href: "/work/quacks-bakery",
    },
    {
        title: "Bloody Rose Boutique",
        category: "Website Design",
        href: "/work/bloody-rose",
    },
    {
        title: "Leafora",
        category: "Website Design",
        href: "/work/leafora",
    },
    {
        title: "Ochre & Oak",
        category: "Social Media Creatives",
        href: "/work/ochre-and-oak",
    },
    {
        title: "Veyra",
        category: "Social Media Creatives",
        href: "/work/veyra",
    },
];

const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://craftedbyhitarth.vercel.app/",
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "Work",
            item: "https://craftedbyhitarth.vercel.app/work",
        },
    ],
};

export default function AllWorkPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-white/20 font-sans flex flex-col justify-between">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbJsonLd),
                }}
            />
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
                    <nav aria-label="Breadcrumb" className="text-sm font-medium text-zinc-400">
                        Portfolio <span className="mx-2 text-zinc-400" aria-hidden="true">/</span> <span className="text-zinc-300">All Work</span>
                    </nav>
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
                                                alt={category.alt}
                                                fill
                                                className="object-contain group-hover:scale-105 transition-all duration-700"
                                                priority={index === 0}
                                            />
                                        </div>
                                        <h2 className="text-[1.1rem] font-semibold text-white mb-2 group-hover:text-zinc-300 transition-colors">
                                            {category.title}
                                        </h2>
                                    </Link>
                                    <p className="text-zinc-400 text-[0.85rem] font-light leading-relaxed mb-4 line-clamp-2">
                                        {category.description}
                                    </p>
                                </div>
                                <div>
                                    <Link 
                                        href={category.href} 
                                        onClick={() => sendGAEvent("event", "cta_view_projects")}
                                        aria-label={`Explore ${category.title}`}
                                        className="inline-flex items-center gap-2 text-[0.85rem] font-medium text-zinc-400 group-hover:text-white transition-all"
                                    >
                                        <ArrowRight className="w-4 h-4 rotate-[-45deg]" /> View Projects
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Featured Case Studies Section */}
                    <div className="mt-20 pt-16 border-t border-white/10">
                        <div className="mb-8">
                            <span className="block text-[13px] font-semibold text-[#9a9ba3] tracking-[0.14em] uppercase mb-2">
                                IN-DEPTH WORK
                            </span>
                            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                                Featured Case Studies
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                            {FEATURED_CASE_STUDIES.map((project, idx) => (
                                <Link
                                    key={idx}
                                    href={project.href}
                                    className="group p-5 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/20 hover:bg-zinc-900/70 transition-all flex flex-col justify-between space-y-4"
                                >
                                    <div className="space-y-1.5">
                                        <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block">
                                            {project.category}
                                        </span>
                                        <h3 className="text-base font-semibold text-white group-hover:text-zinc-200 transition-colors">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <div className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 group-hover:text-white transition-colors">
                                        Read Case Study <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            <Footer maxWidth="max-w-[100rem]" className="w-full mt-20" />
        </main>
    );
}
