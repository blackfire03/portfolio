"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
    ExternalLink, 
    ArrowUpRight, 
    CheckCircle2, 
    AlertCircle, 
    Sparkles, 
    Wrench,
    User,
    BarChart3,
    ArrowRight,
    Flame
} from "lucide-react";

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

const AUDIT_DATA = [
    { criteria: "Brand & Aesthetic Alignment", before: 2, after: 9 },
    { criteria: "Atmosphere / Mood", before: 2, after: 9 },
    { criteria: "Photography & Art Direction", before: 4, after: 9 },
    { criteria: "Trust & Identity Signals", before: 2, after: 8 },
    { criteria: "Storytelling", before: 3, after: 8 },
    { criteria: "Navigation & Discovery", before: 5, after: 8 },
    { criteria: "Merchandising (Styling/Outfits)", before: 2, after: 8 },
];

const PROBLEMS = [
    {
        title: "The brand's biggest asset — its aesthetic — was invisible.",
        desc: "A boutique built around gothic and alternative style was presented on a plain white ecommerce template with no mood, lighting, or atmosphere anywhere on the page."
    },
    {
        title: "Hero space spent on a temporary announcement.",
        desc: "The homepage's most prominent real estate was a hand-drawn \"we moved locations\" map graphic — useful for a few weeks, but not a lasting first impression of the brand."
    },
    {
        title: "Clashing visual styles.",
        desc: "A hand-drawn doodle map, flat-background product photography, and on-model lifestyle shots all sat next to each other with no unifying art direction."
    },
    {
        title: "No trust or identity signals.",
        desc: "Nothing on the homepage mentioned the 4.9-star reputation, the women-owned/LGBTQ+ friendly identity, or the in-store gallery and events — all things this specific audience actively looks for."
    },
    {
        title: "Product-first, no storytelling.",
        desc: "The page jumped straight into product grids (\"Newest Additions,\" \"Shop by Collection\") with no narrative about who the boutique is or why it exists, beyond a few lines buried in the footer."
    }
];

const REDESIGN_POINTS = [
    {
        num: "01",
        title: "Atmosphere before products",
        desc: "The new homepage opens with a full-bleed photo of the boutique's actual interior — exposed brick, hanging Edison bulbs, warm shadow — paired with the line \"Austin's home for alternative fashion.\" This does in one scroll what the old site never did: establish mood."
    },
    {
        num: "02",
        title: "A dark, editorial visual system",
        desc: "The entire palette shifts from stark white to near-black with deep reds and warm amber lighting, paired with a serif display typeface (with italic accents) that reads as boutique-editorial rather than generic-ecommerce. This single shift makes the brand instantly recognizable and on-niche."
    },
    {
        num: "03",
        title: "Trust signals moved to the hero",
        desc: "The 4.9-star / 88 Google review badge, along with \"Women-Owned\" and \"LGBTQ+ Friendly\" identity markers, now sit directly beneath the hero — front and center instead of buried in the footer copy, where this audience is most likely to look for them."
    },
    {
        num: "04",
        title: "Editorial category navigation",
        desc: "Flat Shopify collection thumbnails are replaced with four large, moodily-lit photography tiles (Women's, Men's, Jewelry, Accessories) that double as both navigation and brand photography."
    },
    {
        num: "05",
        title: "Curated Collections, not just a product grid",
        desc: "An asymmetric \"Curated Collections\" section replaces the plain grid — a large apparel rack photo, dramatic macro shots of hanging jewelry and hardware, and smaller tiles for Bags & Accessories and Gifts & Merch, each styled like a magazine spread rather than a catalog page."
    },
    {
        num: "06",
        title: "\"Complete the Look\" styling module",
        desc: "A new section builds full outfits from styled photography — pairing a model shot with the specific pieces worn (Velvet Choker, Rose Lace Blouse) and their prices, adding a merchandising layer the old site never had."
    },
    {
        num: "07",
        title: "The physical boutique, front and center",
        desc: "Instead of a hand-drawn \"we moved\" map doodle, the redesign includes a proper \"Experience the Boutique\" section — hours, address, Get Directions and Call Boutique buttons, and warm in-store photography that sells the in-person visit as much as the products."
    }
];

export default function BloodyRoseCaseStudy() {
    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-rose-600/20 font-sans flex flex-col justify-between">
            
            <div>
                {/* Top Bar / Breadcrumb */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full px-6 md:px-12 lg:px-24 py-6 flex items-center justify-between sticky top-0 bg-[#050505]/80 backdrop-blur-md z-50 border-b border-white/5"
                >
                    <Link href="/work/website-design-projects" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 rotate-180" /> Back to Case Studies
                    </Link>
                    <div className="text-sm font-medium text-zinc-500 hidden sm:block">
                        Case Studies <span className="mx-2">/</span> <span className="text-zinc-300">Bloody Rose Boutique</span>
                    </div>
                </motion.div>

                {/* Hero Header & Links */}
                <section className="px-6 md:px-12 lg:px-24 pt-16 pb-12 max-w-[85rem] mx-auto w-full">
                    <motion.div 
                        variants={stagger}
                        initial="hidden"
                        animate="visible"
                        className="space-y-8"
                    >
                        <motion.div variants={fadeIn} className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold tracking-wide uppercase">
                                <Sparkles className="w-3.5 h-3.5" /> Case Study
                            </div>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                                Bloody Rose Boutique — Website Redesign
                            </h1>
                            <p className="text-lg md:text-xl text-zinc-400 font-light max-w-3xl leading-relaxed">
                                Turning a generic Shopify storefront into a moody, brand-true experience for Austin's home for alternative fashion.
                            </p>
                        </motion.div>

                        {/* Side-by-Side Live Links */}
                        <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                            {/* Old Storefront Card */}
                            <a 
                                href="https://bloodyroseboutique.com/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group relative p-6 rounded-2xl bg-zinc-900/60 border border-white/10 hover:border-rose-500/40 hover:bg-zinc-900/90 transition-all duration-300 flex flex-col justify-between"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="space-y-1">
                                        <span className="text-xs font-semibold text-rose-400 uppercase tracking-wider">Before</span>
                                        <h3 className="text-xl font-semibold text-white group-hover:text-rose-400 transition-colors">
                                            Old Storefront
                                        </h3>
                                    </div>
                                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-400 group-hover:text-rose-400 group-hover:border-rose-500/30 transition-all">
                                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </div>
                                </div>
                                <p className="text-sm text-zinc-400 font-light leading-relaxed mb-4">
                                    The original plain white Shopify template with flat product grids and no brand atmosphere.
                                </p>
                                <div className="text-xs text-zinc-500 font-mono flex items-center gap-1.5 group-hover:text-zinc-400 transition-colors">
                                    <ExternalLink className="w-3.5 h-3.5" /> bloodyroseboutique.com
                                </div>
                            </a>

                            {/* Bloody Rose 2.0 Card */}
                            <a 
                                href="https://rose-boutique-craft.lovable.app/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group relative p-6 rounded-2xl bg-gradient-to-br from-rose-950/30 via-zinc-900/80 to-zinc-900/60 border border-rose-500/30 hover:border-rose-500 hover:shadow-[0_0_30px_-5px_rgba(244,63,94,0.25)] transition-all duration-300 flex flex-col justify-between"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="space-y-1">
                                        <span className="text-xs font-semibold text-rose-400 uppercase tracking-wider">After</span>
                                        <h3 className="text-xl font-semibold text-white group-hover:text-rose-300 transition-colors flex items-center gap-2">
                                            Bloody Rose 2.0 (Redesign)
                                        </h3>
                                    </div>
                                    <div className="p-2.5 rounded-xl bg-rose-500/20 border border-rose-500/30 text-rose-300 group-hover:bg-rose-500 group-hover:text-white transition-all">
                                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </div>
                                </div>
                                <p className="text-sm text-zinc-300 font-light leading-relaxed mb-4">
                                    The dark, atmospheric editorial experience matching the boutique's in-person identity.
                                </p>
                                <div className="text-xs text-rose-400/90 font-mono flex items-center gap-1.5 group-hover:text-rose-300 transition-colors">
                                    <ExternalLink className="w-3.5 h-3.5" /> rose-boutique-craft.lovable.app
                                </div>
                            </a>
                        </motion.div>

                        {/* Project Quick Meta */}
                        <motion.div variants={fadeIn} className="flex flex-wrap gap-8 pt-4 pb-6 border-b border-white/10 text-sm">
                            <div className="flex items-center gap-2 text-zinc-400">
                                <Wrench className="w-4 h-4 text-rose-400" />
                                <span><strong className="text-zinc-200 font-medium">Tools:</strong> Figma | Adobe Creative Suite</span>
                            </div>
                            <div className="flex items-center gap-2 text-zinc-400">
                                <User className="w-4 h-4 text-rose-400" />
                                <span><strong className="text-zinc-200 font-medium">Role:</strong> Solo Designer</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Main Content Body */}
                <section className="px-6 md:px-12 lg:px-24 py-8 max-w-[85rem] mx-auto w-full space-y-20">
                    
                    {/* Design Audit Comparison Chart Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                        className="rounded-3xl bg-zinc-950 border border-white/10 p-6 md:p-10 space-y-8"
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
                            <div>
                                <div className="flex items-center gap-2 text-rose-400 text-sm font-semibold tracking-wide uppercase mb-1">
                                    <BarChart3 className="w-4 h-4" /> Before vs. After Analysis
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white">
                                    Design Audit Comparison
                                </h2>
                            </div>
                            <div className="text-xs text-zinc-400 bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl self-start md:self-auto font-mono">
                                Design Audit Score (1–10, qualitative assessment)
                            </div>
                        </div>

                        {/* Legend */}
                        <div className="flex items-center gap-6 text-sm font-medium">
                            <div className="flex items-center gap-2">
                                <div className="w-3.5 h-3.5 rounded-sm bg-rose-950 border border-rose-500/40"></div>
                                <span className="text-zinc-400">Before Redesign</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3.5 h-3.5 rounded-sm bg-rose-500"></div>
                                <span className="text-zinc-200">After Redesign (Bloody Rose 2.0)</span>
                            </div>
                        </div>

                        {/* Horizontal Bar Chart */}
                        <div className="space-y-6 pt-2">
                            {AUDIT_DATA.map((item, index) => (
                                <div key={index} className="space-y-2">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="font-medium text-zinc-200">{item.criteria}</span>
                                        <div className="flex items-center gap-3 text-xs font-mono">
                                            <span className="text-rose-400/80 font-semibold">Before: {item.before}/10</span>
                                            <span className="text-zinc-600">|</span>
                                            <span className="text-rose-400 font-semibold">After: {item.after}/10</span>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-1.5">
                                        {/* Before Bar */}
                                        <div className="w-full h-3 bg-zinc-900 rounded-full overflow-hidden flex items-center">
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${(item.before / 10) * 100}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: index * 0.08 }}
                                                className="h-full bg-rose-950 border-r border-rose-500/30 rounded-full"
                                            />
                                        </div>
                                        {/* After Bar */}
                                        <div className="w-full h-3 bg-zinc-900 rounded-full overflow-hidden flex items-center">
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${(item.after / 10) * 100}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: index * 0.08 + 0.1 }}
                                                className="h-full bg-rose-500 rounded-full"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Overview */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-4">
                            Overview
                        </h2>
                        <div className="text-zinc-300 font-light text-base md:text-lg leading-relaxed space-y-4">
                            <p>
                                Bloody Rose Boutique is Austin's go-to destination for alternative fashion — dark streetwear, gothic jewelry, and gifts "for goths, punks, witches, and rockers," with a 4.9-star rating across nearly 90 reviews. It's a niche built entirely on aesthetic and atmosphere. The original website, however, ran on a stock Shopify storefront template with a flat white background — the visual opposite of the moody, candlelit, dark-romantic identity the boutique has built in person.
                            </p>
                            <p>
                                The goal of this redesign was to make the website feel like walking into the actual store: dim lighting, warm brass tones, dramatic product photography, and a clear sense of place — while still functioning as a real ecommerce and discovery tool for shoppers.
                            </p>
                        </div>
                    </motion.div>

                    {/* The Problem */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-4 flex items-center gap-3">
                            The Problem
                        </h2>
                        <p className="text-zinc-400 font-light text-base leading-relaxed">
                            Auditing the original site surfaced a few clear issues:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                            {PROBLEMS.map((prob, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 space-y-2 hover:border-rose-500/30 transition-colors">
                                    <div className="flex items-center gap-2 text-rose-400 font-semibold text-base">
                                        <AlertCircle className="w-4 h-4 shrink-0" />
                                        <h3>{prob.title}</h3>
                                    </div>
                                    <p className="text-zinc-400 text-sm font-light leading-relaxed">
                                        {prob.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* The Redesign */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-4">
                            The Redesign
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {REDESIGN_POINTS.map((pt, idx) => (
                                <div key={idx} className="p-7 rounded-2xl bg-zinc-900/60 border border-white/10 space-y-4 hover:border-rose-500/40 transition-all duration-300 group flex flex-col justify-between">
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">
                                                Pillar {pt.num}
                                            </span>
                                            <CheckCircle2 className="w-5 h-5 text-rose-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <h3 className="text-lg font-bold text-white group-hover:text-rose-300 transition-colors leading-snug">
                                            {pt.title}
                                        </h3>
                                        <p className="text-zinc-400 text-sm font-light leading-relaxed">
                                            {pt.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Outcome */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                        className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-rose-950/20 border border-rose-500/30 space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 text-rose-400 text-sm font-semibold tracking-wide uppercase">
                            <Flame className="w-4 h-4" /> Impact & Transformation
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                            Outcome
                        </h2>
                        <p className="text-zinc-300 font-light text-base md:text-lg leading-relaxed">
                            The redesign turns Bloody Rose Boutique's website from a generic Shopify storefront into a page that finally matches the identity of the shop itself — dark, atmospheric, and unmistakably alternative — while surfacing the trust signals (reviews, values, in-store experience) that matter most to its community. Product discovery is now paired with mood and storytelling instead of competing with a mismatched hand-drawn banner.
                        </p>

                        <div className="pt-4 flex flex-wrap gap-4">
                            <a 
                                href="https://rose-boutique-craft.lovable.app/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-rose-600 text-white font-semibold hover:bg-rose-500 transition-colors shadow-[0_0_20px_rgba(225,29,72,0.3)]"
                            >
                                Experience Bloody Rose 2.0 <ArrowUpRight className="w-4 h-4" />
                            </a>
                            <Link 
                                href="/work/website-design-projects" 
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors"
                            >
                                Back to Case Studies
                            </Link>
                        </div>
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
