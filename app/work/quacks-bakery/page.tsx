"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
    ExternalLink, 
    ArrowUpRight, 
    CheckCircle2, 
    AlertCircle, 
    Sparkles, 
    Layers, 
    Award, 
    Wrench,
    User,
    BarChart3,
    ArrowRight
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
    { criteria: "Brand Storytelling", before: 2, after: 9 },
    { criteria: "Visual Consistency", before: 3, after: 9 },
    { criteria: "Photography Quality", before: 2, after: 9 },
    { criteria: "Content Curation", before: 3, after: 8 },
    { criteria: "Conversion Path Clarity", before: 4, after: 8 },
    { criteria: "Trust & Credibility Signals", before: 3, after: 8 },
    { criteria: "Information Architecture", before: 4, after: 9 },
];

const PROBLEMS = [
    {
        title: "No brand story",
        desc: "Nothing on the page communicated why Quack's mattered to the neighborhood — no founding date, no mission, no personality beyond a logo."
    },
    {
        title: "Inconsistent visual language",
        desc: "A hand-drawn storefront illustration sat next to stock UI patterns (dark footer, generic badges), with no unifying typography or color system."
    },
    {
        title: "Instagram as content strategy",
        desc: "The homepage's main visual real estate was a raw, unedited Instagram embed — mixing cake-smash videos, meme reaction gifs, and product shots with no curation or control over what a first-time visitor saw."
    },
    {
        title: "Broken embed",
        desc: "The Google Maps section rendered with a visible unstyled white box artifact, which is the kind of detail that quietly erodes trust."
    },
    {
        title: "Weak conversion path",
        desc: "\"Order Online,\" \"Menu,\" and \"Merch Store\" competed for attention with no clear priority, and there was no FAQ, seasonal messaging, or newsletter capture to keep visitors engaged."
    }
];

const REDESIGN_POINTS = [
    {
        num: "01",
        title: "A real brand narrative, not just a homepage",
        desc: "The new site opens with an \"Est. 1983\" tag and a headline — \"Austin's Neighborhood Bakery Since Day One\" — paired with real interior photography of the counter and baked goods. This immediately establishes credibility and warmth that the original illustration couldn't."
    },
    {
        num: "02",
        title: "Photography over illustration",
        desc: "Every section now uses genuine lifestyle and product photography — the pastry case, a latte and croissant on a marble table, a wedding cake at a reception. This single change does more to signal quality and craftsmanship than any copy could."
    },
    {
        num: "03",
        title: "Curated menu highlights replace the raw social feed",
        desc: "Instead of embedding an unfiltered Instagram grid, a \"Featured Favorites\" card grid showcases four hero products (Signature Chocolate Cake, Ham & Swiss Croissant, Sugar Cinnamon Roll, Key Lime Pie) with names, short descriptions, and an add-to-order affordance — giving the business full control over first impressions."
    },
    {
        num: "04",
        title: "Story-driven page flow",
        desc: "The page now reads like a narrative rather than a stack of disconnected blocks: Hero → social proof → featured menu items → seasonal promotion → custom cakes & events → coffee program → brand values → FAQ → footer with newsletter signup."
    },
    {
        num: "05",
        title: "A cohesive visual system",
        desc: "A restrained palette of cream, terracotta, and olive green replaces the mismatched teal-and-navy of the original. Serif display headings paired with clean sans-serif body text give the site an editorial, artisanal feel that matches the product."
    },
    {
        num: "06",
        title: "Conversion details that were previously missing",
        desc: "A sticky seasonal announcement bar, a persistent \"Order Now\" CTA in the nav, an FAQ accordion, a newsletter capture in the footer, and a clean \"Visit Us\" block with hours, address, and a working directions link, replacing the broken map embed."
    }
];

export default function QuacksCaseStudy() {
    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-rose-500/20 font-sans flex flex-col justify-between">
            
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
                        Case Studies <span className="mx-2">/</span> <span className="text-zinc-300">Quack's 43rd Street Bakery</span>
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
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wide uppercase">
                                <Sparkles className="w-3.5 h-3.5" /> Case Study
                            </div>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                                Quack's 43rd Street Bakery — Website Redesign
                            </h1>
                            <p className="text-lg md:text-xl text-zinc-400 font-light max-w-3xl leading-relaxed">
                                Transforming an iconic 40+ year Austin bakery's online presence from a disjointed layout into a story-driven, high-converting digital storefront.
                            </p>
                        </motion.div>

                        {/* Side-by-Side Live Links */}
                        <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                            {/* Legacy Site Card */}
                            <a 
                                href="https://quacks43rd.com/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group relative p-6 rounded-2xl bg-zinc-900/60 border border-white/10 hover:border-amber-500/40 hover:bg-zinc-900/90 transition-all duration-300 flex flex-col justify-between"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="space-y-1">
                                        <span className="text-xs font-semibold text-rose-400 uppercase tracking-wider">Before</span>
                                        <h3 className="text-xl font-semibold text-white group-hover:text-amber-400 transition-colors">
                                            Legacy Site
                                        </h3>
                                    </div>
                                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-400 group-hover:text-amber-400 group-hover:border-amber-500/30 transition-all">
                                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </div>
                                </div>
                                <p className="text-sm text-zinc-400 font-light leading-relaxed mb-4">
                                    The original uncurated website featuring raw social feeds and unstyled embed artifacts.
                                </p>
                                <div className="text-xs text-zinc-500 font-mono flex items-center gap-1.5 group-hover:text-zinc-400 transition-colors">
                                    <ExternalLink className="w-3.5 h-3.5" /> quacks43rd.com
                                </div>
                            </a>

                            {/* Quack's 2.0 Card */}
                            <a 
                                href="https://sunny-spark-share.lovable.app/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group relative p-6 rounded-2xl bg-gradient-to-br from-amber-900/20 via-zinc-900/80 to-zinc-900/60 border border-amber-500/30 hover:border-amber-400 hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.2)] transition-all duration-300 flex flex-col justify-between"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="space-y-1">
                                        <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">After</span>
                                        <h3 className="text-xl font-semibold text-white group-hover:text-amber-300 transition-colors flex items-center gap-2">
                                            Quack's 2.0 (Redesign)
                                        </h3>
                                    </div>
                                    <div className="p-2.5 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-300 group-hover:bg-amber-500 group-hover:text-black transition-all">
                                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </div>
                                </div>
                                <p className="text-sm text-zinc-300 font-light leading-relaxed mb-4">
                                    The new editorial, high-converting digital homepage with curated visual storytelling.
                                </p>
                                <div className="text-xs text-amber-400/80 font-mono flex items-center gap-1.5 group-hover:text-amber-300 transition-colors">
                                    <ExternalLink className="w-3.5 h-3.5" /> sunny-spark-share.lovable.app
                                </div>
                            </a>
                        </motion.div>

                        {/* Project Quick Meta */}
                        <motion.div variants={fadeIn} className="flex flex-wrap gap-8 pt-4 pb-6 border-b border-white/10 text-sm">
                            <div className="flex items-center gap-2 text-zinc-400">
                                <Wrench className="w-4 h-4 text-amber-400" />
                                <span><strong className="text-zinc-200 font-medium">Tools:</strong> Figma | Adobe Creative Suite</span>
                            </div>
                            <div className="flex items-center gap-2 text-zinc-400">
                                <User className="w-4 h-4 text-amber-400" />
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
                                <div className="flex items-center gap-2 text-amber-400 text-sm font-semibold tracking-wide uppercase mb-1">
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
                                <div className="w-3.5 h-3.5 rounded-sm bg-rose-500/80"></div>
                                <span className="text-zinc-400">Before Redesign</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3.5 h-3.5 rounded-sm bg-emerald-400"></div>
                                <span className="text-zinc-200">After Redesign (Quack's 2.0)</span>
                            </div>
                        </div>

                        {/* Horizontal Bar Chart */}
                        <div className="space-y-6 pt-2">
                            {AUDIT_DATA.map((item, index) => (
                                <div key={index} className="space-y-2">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="font-medium text-zinc-200">{item.criteria}</span>
                                        <div className="flex items-center gap-3 text-xs font-mono">
                                            <span className="text-rose-400 font-semibold">Before: {item.before}/10</span>
                                            <span className="text-zinc-600">|</span>
                                            <span className="text-emerald-400 font-semibold">After: {item.after}/10</span>
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
                                                className="h-full bg-rose-500/80 rounded-full"
                                            />
                                        </div>
                                        {/* After Bar */}
                                        <div className="w-full h-3 bg-zinc-900 rounded-full overflow-hidden flex items-center">
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${(item.after / 10) * 100}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: index * 0.08 + 0.1 }}
                                                className="h-full bg-emerald-400 rounded-full"
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
                                Quack's 43rd Street Bakery is a long-running Austin institution — a 4.5-star, 1,700+ review neighborhood favorite known for custom cakes, wholesale baking, and a loyal community following. Their existing website, however, didn't reflect that reputation. It leaned on an illustrated storefront graphic, an embedded Instagram feed as the primary visual content, and a broken/styled map component — undercutting the credibility of a brand voted "Best of Austin."
                            </p>
                            <p>
                                The goal of this redesign was simple: make the website feel as trustworthy, warm, and established as the bakery itself, while giving the business a stronger platform to sell cakes, drive online orders, and convert first-time visitors into customers.
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
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {REDESIGN_POINTS.map((pt, idx) => (
                                <div key={idx} className="p-8 rounded-2xl bg-zinc-900/60 border border-white/10 space-y-4 hover:border-amber-500/40 transition-all duration-300 group">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                                            Pillar {pt.num}
                                        </span>
                                        <CheckCircle2 className="w-5 h-5 text-emerald-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                                        {pt.title}
                                    </h3>
                                    <p className="text-zinc-400 text-sm font-light leading-relaxed">
                                        {pt.desc}
                                    </p>
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
                        className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-amber-500/30 space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 text-amber-400 text-sm font-semibold tracking-wide uppercase">
                            <Award className="w-4 h-4" /> Impact & Results
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                            Outcome
                        </h2>
                        <p className="text-zinc-300 font-light text-base md:text-lg leading-relaxed">
                            The redesign repositions Quack's from a generic small-business template into a site that matches the strength of its 40+ year reputation — leading with real photography and storytelling, curating content instead of outsourcing it to a live social feed, and giving every visitor a clear path to order, book a custom cake, or learn more about the bakery's place in the neighborhood.
                        </p>

                        <div className="pt-4 flex flex-wrap gap-4">
                            <a 
                                href="https://sunny-spark-share.lovable.app/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 text-black font-semibold hover:bg-amber-400 transition-colors"
                            >
                                Experience Quack's 2.0 Redesign <ArrowUpRight className="w-4 h-4" />
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
