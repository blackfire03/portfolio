"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
    ExternalLink, 
    ArrowUpRight, 
    CheckCircle2, 
    Sparkles, 
    Wrench,
    User,
    BarChart3,
    ArrowRight,
    Leaf,
    Compass,
    Target
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

const BRIEF_SCORES = [
    { criteria: "Premium, calm feel", score: 9 },
    { criteria: "Earthy without cliché (no green/brown overload)", score: 9 },
    { criteria: "Editorial / Aesop-Kinfolk tone", score: 9 },
    { criteria: "All 6 required sections delivered", score: 10 },
    { criteria: "Distinct from typical tea-brand sites", score: 8 },
    { criteria: "Target audience fit (25–40 urban professional)", score: 8 },
];

const DESIGN_SECTIONS = [
    {
        name: "Hero",
        desc: "A full-bleed, warm-lit photograph of three Leafora tins styled on linen with dried flowers, cinnamon, and roses — the kind of editorial food styling you'd see in a Kinfolk spread, not a product shot on white. A small tracked label (\"Single-origin teas from India's finest gardens\") sits above the headline, \"Tea, the way it was meant to be,\" set in a large, quiet serif with a single \"Discover the collection\" CTA — restraint over a hero full of competing buttons."
    },
    {
        name: "Brand Story",
        desc: "Rather than a paragraph of marketing copy, the About section is a single centered pull-quote from the founder, in italic serif, attributed simply as \"— Rohan, Founder.\" It reads like a magazine feature, not an About Us page, and does more to build trust in three sentences than a longer bio would."
    },
    {
        name: "Why Leafora",
        desc: "A 2×2 card grid on a warm tan background presents the brand's four differentiators (Single-origin always, Direct farm partnerships, Harvested to order, Third-party tested), each numbered 01–04 in the terracotta accent color. Numbering gives the grid structure and intentionality rather than feeling like a generic feature list."
    },
    {
        name: "Featured Products",
        desc: "Four teas (Morning Mist, Ember Chai, Nilgiri Dusk, White Peony) are shown as styled photography — tins on linen with props like dried orange, star anise, and a single flower — rather than flat catalog shots. Each card carries a small terracotta category tag (e.g. \"Darjeeling · First Flush\"), a one-line tasting note, price, and a quiet \"View →\" link. A \"Rare\" badge on White Peony adds scarcity without shouting."
    },
    {
        name: "Testimonials",
        desc: "A single large italic quote on a soft beige field, with a quotation-mark accent and simple carousel navigation — one voice at a time, matching the unhurried, editorial pace of the rest of the page rather than a busy grid of star ratings."
    },
    {
        name: "Footer",
        desc: "The page closes on a deep charcoal-black band — the only dark section on the page — grounding the palette and giving the brand wordmark (\"From the garden, for the quiet morning\") a moment of quiet contrast against the cream body above it."
    }
];

const RATIONALE_TABLE = [
    {
        req: "\"Premium, calm, earthy, not boring\"",
        sol: "Neutral cream/sand/linen palette with a single terracotta accent instead of literal green/brown"
    },
    {
        req: "\"Aesop / Kinfolk vibe\"",
        sol: "Editorial serif typography, generous whitespace, styled lifestyle photography over product-on-white shots"
    },
    {
        req: "\"Clean, intentional, a little editorial\"",
        sol: "Numbered sections, pull-quotes, small tracked labels — magazine-style structure throughout"
    },
    {
        req: "All six required sections",
        sol: "Hero, Brand Story, Why Leafora, Featured Products, Testimonials, and Footer all present and in a logical narrative order"
    },
    {
        req: "Avoid the \"every other tea site\" cliché",
        sol: "No leaf iconography, no forest green — mood and photography carry the \"tea\" signal instead"
    }
];

export default function LeaforaCaseStudy() {
    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-orange-600/20 font-sans flex flex-col justify-between">
            
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
                        Case Studies <span className="mx-2">/</span> <span className="text-zinc-300">Leafora</span>
                    </div>
                </motion.div>

                {/* Hero Header & Link */}
                <section className="px-6 md:px-12 lg:px-24 pt-16 pb-12 max-w-[85rem] mx-auto w-full">
                    <motion.div 
                        variants={stagger}
                        initial="hidden"
                        animate="visible"
                        className="space-y-8"
                    >
                        <motion.div variants={fadeIn} className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-600/10 border border-orange-500/20 text-orange-400 text-xs font-semibold tracking-wide uppercase">
                                <Sparkles className="w-3.5 h-3.5" /> Case Study — From-Scratch Design
                            </div>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                                Leafora — Premium Tea Brand Homepage Design
                            </h1>
                            <p className="text-lg md:text-xl text-zinc-400 font-light max-w-3xl leading-relaxed">
                                Designed from a single client brief: premium, calm, and earthy — without a single cliché.
                            </p>
                        </motion.div>

                        {/* Live Design Link Card */}
                        <motion.div variants={fadeIn} className="pt-2">
                            <a 
                                href="https://leafora-editorial-bloom.lovable.app/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-orange-950/30 via-zinc-900/80 to-zinc-900/60 border border-orange-500/30 hover:border-orange-500 hover:shadow-[0_0_30px_-5px_rgba(234,88,12,0.25)] transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                            >
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider">Interactive Live Preview</span>
                                        <span className="px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-300 text-[0.7rem] font-mono">Kinfolk / Aesop Style</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-orange-300 transition-colors">
                                        View Live Design
                                    </h3>
                                    <p className="text-sm text-zinc-300 font-light max-w-xl leading-relaxed">
                                        Experience the full 6-section editorial desktop homepage built with quiet serif typography and warm earthy tones.
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-orange-600 text-white group-hover:bg-orange-500 transition-all shrink-0 flex items-center gap-2 font-medium text-sm">
                                    <span>Explore Site</span>
                                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </div>
                            </a>
                        </motion.div>

                        {/* Project Quick Meta */}
                        <motion.div variants={fadeIn} className="flex flex-wrap gap-8 pt-4 pb-6 border-b border-white/10 text-sm">
                            <div className="flex items-center gap-2 text-zinc-400">
                                <Wrench className="w-4 h-4 text-orange-400" />
                                <span><strong className="text-zinc-200 font-medium">Tools:</strong> Figma | Gemini & Chatgpt (for image generation)</span>
                            </div>
                            <div className="flex items-center gap-2 text-zinc-400">
                                <User className="w-4 h-4 text-orange-400" />
                                <span><strong className="text-zinc-200 font-medium">Role:</strong> Solo Designer</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Main Content Body */}
                <section className="px-6 md:px-12 lg:px-24 py-8 max-w-[85rem] mx-auto w-full space-y-20">
                    
                    {/* Brief Alignment Chart Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                        className="rounded-3xl bg-zinc-950 border border-white/10 p-6 md:p-10 space-y-8"
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
                            <div>
                                <div className="flex items-center gap-2 text-orange-400 text-sm font-semibold tracking-wide uppercase mb-1">
                                    <BarChart3 className="w-4 h-4" /> Performance Against Requirements
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white">
                                    How the Design Measures Up Against the Brief
                                </h2>
                            </div>
                            <div className="text-xs text-zinc-400 bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl self-start md:self-auto font-mono">
                                Brief Alignment Score (1–10, subjective self-assessment)
                            </div>
                        </div>

                        {/* Horizontal Bar Chart */}
                        <div className="space-y-6 pt-2">
                            {BRIEF_SCORES.map((item, index) => (
                                <div key={index} className="space-y-2">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="font-medium text-zinc-200">{item.criteria}</span>
                                        <span className="text-orange-400 font-mono font-semibold text-xs">
                                            Score: {item.score}/10
                                        </span>
                                    </div>
                                    
                                    <div className="w-full h-3 bg-zinc-900 rounded-full overflow-hidden flex items-center">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${(item.score / 10) * 100}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: index * 0.1 }}
                                            className="h-full bg-gradient-to-r from-orange-700 to-orange-500 rounded-full shadow-[0_0_12px_rgba(234,88,12,0.4)]"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* The Brief */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-4 flex items-center gap-3">
                            <Compass className="w-6 h-6 text-orange-400" /> The Brief
                        </h2>
                        <div className="text-zinc-300 font-light text-base md:text-lg leading-relaxed space-y-4">
                            <p>
                                Leafora is a single-origin tea brand sourcing directly from farms in Darjeeling, Assam, and Nilgiris, targeting urban professionals aged 25–40 who care about quality, wellness, and aesthetics. The founder, Rohan Mehta, came in with a clear point of view:
                            </p>
                            <blockquote className="p-6 rounded-2xl bg-zinc-900/60 border-l-4 border-orange-500 text-white italic text-lg font-serif">
                                "I don't want it to look like every other tea website with just green and brown slapped everywhere. Be more thoughtful than that."
                            </blockquote>
                            <p>
                                The ask was a desktop homepage design covering six sections — Hero, About/Brand Story, Featured Products, Why Leafora, Testimonials, and Footer — with the explicit reference points Aesop and Kinfolk: clean, intentional, a little editorial, premium without being boring.
                            </p>
                        </div>
                    </motion.div>

                    {/* The Challenge */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                        className="p-8 rounded-3xl bg-zinc-900/40 border border-white/5 space-y-6"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-4 flex items-center gap-3">
                            <Target className="w-6 h-6 text-orange-400" /> The Challenge
                        </h2>
                        <div className="text-zinc-300 font-light text-base leading-relaxed space-y-4">
                            <p>
                                The brief's hardest constraint wasn't a section list — it was a feeling to avoid. Most tea and wellness brands default to the same visual shorthand: forest green, kraft-paper brown, leaf iconography, rustic serif logos. Leafora needed to feel earthy and premium without falling into that template, while still communicating "tea," "single-origin," and "sourced with care" at a glance.
                            </p>
                            <p>
                                The solve was to shift the palette away from literal tea colors entirely — toward warm neutrals (cream, sand, linen) with a single confident accent (a muted terracotta/rust) — and to let mood-lit photography, not iconography, do the work of signaling quality and origin.
                            </p>
                        </div>
                    </motion.div>

                    {/* The Design */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-4">
                            The Design
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {DESIGN_SECTIONS.map((sec, idx) => (
                                <div key={idx} className="p-7 rounded-2xl bg-zinc-900/60 border border-white/10 space-y-4 hover:border-orange-500/40 transition-all duration-300 group flex flex-col justify-between">
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">
                                                Section 0{idx + 1}
                                            </span>
                                            <Leaf className="w-5 h-5 text-orange-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors">
                                            {sec.name}
                                        </h3>
                                        <p className="text-zinc-400 text-sm font-light leading-relaxed">
                                            {sec.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Design Rationale Table */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-4">
                            Design Rationale
                        </h2>
                        
                        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-zinc-950">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/5 border-b border-white/10 text-orange-400 uppercase text-xs tracking-wider">
                                    <tr>
                                        <th className="py-4 px-6 font-semibold">Brief Requirement</th>
                                        <th className="py-4 px-6 font-semibold">How It Was Addressed</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5 text-zinc-300 font-light">
                                    {RATIONALE_TABLE.map((row, i) => (
                                        <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                                            <td className="py-4 px-6 font-medium text-white">{row.req}</td>
                                            <td className="py-4 px-6 text-zinc-400">{row.sol}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>

                    {/* Outcome */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                        className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-orange-950/20 border border-orange-500/30 space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 text-orange-400 text-sm font-semibold tracking-wide uppercase">
                            <CheckCircle2 className="w-4 h-4" /> Final Outcome
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                            Outcome
                        </h2>
                        <p className="text-zinc-300 font-light text-base md:text-lg leading-relaxed">
                            The result is a homepage that reads closer to a lifestyle or wellness editorial than a typical tea e-commerce template — meeting Leafora's premium positioning and giving Rohan a first draft that directly answers the one instruction he was most explicit about: don't make it look like every other tea site.
                        </p>

                        <div className="pt-4 flex flex-wrap gap-4">
                            <a 
                                href="https://leafora-editorial-bloom.lovable.app/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-600 text-white font-semibold hover:bg-orange-500 transition-colors shadow-[0_0_20px_rgba(234,88,12,0.3)]"
                            >
                                Experience Leafora Design Live <ArrowUpRight className="w-4 h-4" />
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
