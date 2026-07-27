"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
    ArrowRight, 
    Sparkles, 
    Wrench, 
    User, 
    BarChart3, 
    X,
    Maximize2,
    CheckCircle2
} from "lucide-react";

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
};

const CHART_DATA = [
    { label: '"Quiet luxury" restraint & tone', score: 9 },
    { label: "Consistency across formats (type + palette + logo)", score: 9 },
    { label: "Negative space / minimal-prop discipline", score: 9 },
    { label: "Trust-building (ingredient & philosophy posts)", score: 8 },
    { label: "Photographic moment (Day 3) fit", score: 8 },
    { label: "Target audience fit (women 20–35)", score: 8 },
];

const GRID_DAYS_DATA = [
    {
        day: 1,
        title: "Day 1 — Brand Intro",
        imageSrc: "/work/veyra/day1.jpg",
        label: "Day 1 — Brand Intro",
        caption: "Brand intro post — the product centered on soft cream with generous negative space, letting the headline 'Skincare, Simplified' and the product carry the entire first impression."
    },
    {
        day: 2,
        title: "Day 2 — Conviction Split",
        imageSrc: "/work/veyra/day2.jpg",
        label: "Day 2 — Conviction Split",
        caption: "A hard color-block ad-style split introducing the product's conviction: 'Fewer Ingredients. Visible Difference.' against a bold sage panel."
    },
    {
        day: 3,
        title: "Day 3 — Photographic Ritual",
        imageSrc: "/work/veyra/day3.jpg",
        label: "Day 3 — Photographic Ritual",
        caption: "An intimate, quiet photographic ritual moment — no headline text, letting the image and caption carry the story instead of an overlay."
    },
    {
        day: 4,
        title: "Day 4 — Philosophy Statement",
        imageSrc: "/work/veyra/day4.jpg",
        label: "Day 4 — Philosophy Statement",
        caption: "A solid sage philosophy card, type-only: 'We don't believe in twelve steps.' The one day the brand speaks without showing product at all."
    },
    {
        day: 5,
        title: "Day 5 — Ingredient Breakdown",
        imageSrc: "/work/veyra/day5.jpg",
        label: "Day 5 — Ingredient Breakdown",
        caption: "A left-aligned typographic ingredient breakdown — Hyaluronic Acid, Niacinamide, Vitamin E — anchored by a small bottle bottom-right for trust-building."
    },
    {
        day: 6,
        title: "Day 6 — Launch Invitation",
        imageSrc: "/work/veyra/day6.jpg",
        label: "Day 6 — Launch Invitation",
        caption: "A deliberate visual echo of Day 1, but shifting from introduction to invitation with 'Yours to Keep Simple' and a quiet launch CTA."
    },
    {
        day: 7,
        title: "Day 7 — Closing Testimonial",
        imageSrc: "/work/veyra/day7.jpg",
        label: "Day 7 — Closing Testimonial",
        caption: "A closing testimonial card pairing a customer quote with the campaign's opening tagline, closing the loop from introduction to proof."
    }
];

const RATIONALE_ROWS = [
    {
        req: '"Quiet luxury, not trendy K-beauty"',
        addressed: "Restrained one-hero-element compositions, generous negative space, and tracked editorial type on every post, with no icons, badges, or claims stickers"
    },
    {
        req: '"Consistent brand across 7 different formats"',
        addressed: "One locked type pairing and one two-tone palette used in deliberate rhythm, plus a single consistent logo placement logic"
    },
    {
        req: '"Calm, trustworthy, slightly clinical but soft"',
        addressed: "The ingredient post (Day 5) and philosophy post (Day 4) build credibility through plain, unembellished statements"
    },
    {
        req: '"High negative space, minimal props"',
        addressed: "Days 1, 2, 5, and 6 keep the product small in frame with deliberate empty space; Day 3 uses a tight, quiet crop rather than a styled scene"
    },
    {
        req: '"Ritual, lifestyle moment without breaking restraint"',
        addressed: "Day 3 implies routine and intimacy through framing rather than props or overlay text"
    },
    {
        req: '"A confident close to the week"',
        addressed: "Day 7 pairs a customer's voice with the campaign's opening tagline, closing the arc in a single quiet card"
    }
];

export default function VeyraCaseStudy() {
    const [activeLightboxDay, setActiveLightboxDay] = useState<number | null>(null);

    const currentLightboxData = activeLightboxDay !== null 
        ? GRID_DAYS_DATA.find(d => d.day === activeLightboxDay) 
        : null;

    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-[#849b87]/30 font-sans flex flex-col justify-between">
            <div>
                {/* 1. Header & Navigation */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full px-6 md:px-12 lg:px-24 py-8 flex items-center justify-between sticky top-0 bg-[#050505]/80 backdrop-blur-md z-40 border-b border-white/5"
                >
                    <Link href="/work/social-media-creatives" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                        ← Back to Social Media Creatives
                    </Link>
                    <div className="text-sm font-medium text-zinc-500 hidden md:block">
                        <Link href="/" className="hover:text-zinc-300 transition-colors">Homepage</Link>
                        <span className="mx-2">/</span>
                        <Link href="/work/social-media-creatives" className="hover:text-zinc-300 transition-colors">Social Media Creatives</Link>
                        <span className="mx-2">/</span>
                        <span className="text-[#849b87]">Veyra</span>
                    </div>
                </motion.div>

                {/* Hero / Header Section */}
                <section className="px-6 md:px-12 lg:px-24 pt-16 pb-12 max-w-6xl mx-auto w-full space-y-8">
                    <motion.div 
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="space-y-4"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#849b87]/10 border border-[#849b87]/30 text-[#849b87] text-xs font-mono tracking-wider uppercase">
                            <Sparkles className="w-3.5 h-3.5" /> Skincare Brand & Social Media Series
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                            Veyra — Skincare Brand & Social Media Content Design
                        </h1>
                        <p className="text-zinc-400 text-lg md:text-xl font-light max-w-3xl">
                            Fictional Client Project · Beauty & Skincare / Personal Care · 7-Day Social Media Content Series
                        </p>
                    </motion.div>

                    {/* Metadata Grid */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-2xl bg-zinc-950 border border-white/10"
                    >
                        <div>
                            <span className="text-xs text-zinc-500 uppercase tracking-wider block mb-1">Client</span>
                            <span className="text-sm font-medium text-zinc-200">Fictional Client Project</span>
                        </div>
                        <div>
                            <span className="text-xs text-zinc-500 uppercase tracking-wider block mb-1">Industry</span>
                            <span className="text-sm font-medium text-zinc-200">Beauty & Skincare</span>
                        </div>
                        <div>
                            <span className="text-xs text-zinc-500 uppercase tracking-wider block mb-1 flex items-center gap-1">
                                <Wrench className="w-3 h-3 text-[#849b87]" /> Tools Used
                            </span>
                            <span className="text-sm font-medium text-zinc-200">Canva</span>
                        </div>
                        <div>
                            <span className="text-xs text-zinc-500 uppercase tracking-wider block mb-1 flex items-center gap-1">
                                <User className="w-3 h-3 text-[#849b87]" /> Role
                            </span>
                            <span className="text-sm font-medium text-zinc-200">Solo designer & content creator</span>
                        </div>
                    </motion.div>
                </section>

                {/* Main Content Body */}
                <section className="px-6 md:px-12 lg:px-24 py-12 max-w-6xl mx-auto w-full space-y-20">
                    
                    {/* 2. Intro Paragraph */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                        className="p-8 md:p-10 rounded-3xl bg-zinc-950/60 border border-[#849b87]/20 relative overflow-hidden"
                    >
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#849b87]/10 rounded-full blur-3xl pointer-events-none" />
                        <p className="text-zinc-300 font-light text-lg md:text-xl leading-relaxed">
                            Veyra is a clean, minimal skincare brand positioned as &apos;quiet luxury&apos; — calm, trustworthy, and slightly clinical but soft. This project covers a full 7-day Instagram content calendar built entirely on restraint: a locked type system, a disciplined two-tone palette, and one flexible logo mark carrying identity across statement cards, photography, and typographic posts.
                        </p>
                    </motion.div>

                    {/* 3. Brief Alignment Chart */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                            <BarChart3 className="w-6 h-6 text-[#849b87]" />
                            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                                How the content measures up against the brief
                            </h2>
                        </div>
                        
                        <p className="text-xs text-zinc-400 italic">
                            *Subjective self-assessment scores (1–10 scale) against key creative brief parameters.
                        </p>

                        <div className="space-y-5 p-6 md:p-8 rounded-2xl bg-zinc-950 border border-white/10">
                            {CHART_DATA.map((item, idx) => (
                                <div key={idx} className="space-y-2">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="font-medium text-zinc-300">{item.label}</span>
                                        <span className="font-mono text-xs font-semibold text-[#849b87]">{item.score}/10</span>
                                    </div>
                                    <div className="w-full h-3 bg-zinc-900 rounded-full overflow-hidden p-0.5 border border-white/5">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${(item.score / 10) * 100}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: idx * 0.1, ease: "easeOut" }}
                                            className="h-full bg-gradient-to-r from-[#849b87]/80 to-[#849b87] rounded-full"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* 4. The Brief */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-4">
                            The Brief
                        </h2>
                        <div className="space-y-4 text-zinc-300 font-light text-base md:text-lg leading-relaxed bg-zinc-950 p-8 rounded-3xl border border-white/10">
                            <p>
                                Veyra is a clean, minimal skincare brand positioned as &apos;quiet luxury&apos; rather than trendy K-beauty — calm, trustworthy, and slightly clinical but soft. Aimed at women 20–35 who want simple, effective skincare without a twelve-step routine. The brief called for a soft white / sage / dusty blush palette, editorial sans-serif typography with generous tracking, and photography built on soft shadows, glass/ceramic textures, and high negative space — avoiding clutter entirely, with one hero element per slide.
                            </p>
                            <p>
                                The ask covered seven distinct days: a brand-intro post, a benefit/ingredient-substance post, a ritual/lifestyle moment, a brand-philosophy statement, a formula/trust post, a launch invitation, and a closing testimonial — each doing a different job in the arc from &apos;who is this brand&apos; to &apos;why should you buy it,&apos; while all needing to read as one unmistakable identity.
                            </p>
                        </div>
                    </motion.div>

                    {/* 5. The Challenge */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-4">
                            The Challenge
                        </h2>
                        <div className="space-y-4 text-zinc-300 font-light text-base md:text-lg leading-relaxed bg-zinc-950 p-8 rounded-3xl border border-white/10">
                            <p>
                                A 7-day calendar built almost entirely on restraint is harder to hold together than one built on a mascot or a bold color explosion — there&apos;s nowhere to hide inconsistency. The challenge was making a solid-color statement card, a photographic lifestyle shot, a typographic ingredient list, and a centered product post all feel like the same quiet brand, without ever leaning on clutter, badges, or decoration to do the job.
                            </p>
                            <p>
                                Rather than relying on a character or an ornamental system, the project used three quieter tools as glue: a single locked type pairing (Josefin Sans for tracked-out headlines, Poppins Light for supporting copy), a two-color palette used in deliberate rhythm (soft cream and sage green alternating across the week, so the grid breathes rather than repeats), and one consistent logo placement logic — small, corner-anchored on product posts, recolored and bottom-centered like a signature on the two pure-statement posts.
                            </p>
                        </div>
                    </motion.div>

                    {/* 6. The 7-Day Grid */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="border-b border-white/10 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-2">
                            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                                The 7-Day Content Grid
                            </h2>
                            <p className="text-xs text-zinc-400">
                                Click any card to expand in Lightbox · Single-image posts
                            </p>
                        </div>

                        {/* Row 1: Day 1 - Day 4 (4 Cards) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {GRID_DAYS_DATA.slice(0, 4).map(card => (
                                <div 
                                    key={card.day}
                                    className="group bg-zinc-950 border border-white/10 rounded-2xl p-4 flex flex-col justify-between hover:border-[#849b87]/50 transition-all duration-300"
                                >
                                    <div className="space-y-3">
                                        {/* Image Area */}
                                        <div 
                                            onClick={() => setActiveLightboxDay(card.day)}
                                            className="relative aspect-[4/5] rounded-xl bg-[#2a352c]/50 border border-white/10 flex flex-col items-center justify-center p-4 text-center cursor-pointer overflow-hidden group-hover:border-[#849b87]/40 transition-colors"
                                        >
                                            {card.imageSrc ? (
                                                <Image 
                                                    src={card.imageSrc}
                                                    alt={card.label}
                                                    fill
                                                    className="object-cover"
                                                    priority={card.day === 1}
                                                />
                                            ) : (
                                                <>
                                                    <span className="text-xs font-mono font-semibold text-[#849b87] uppercase tracking-wider mb-1">
                                                        {card.title}
                                                    </span>
                                                    <p className="text-sm font-semibold text-white">
                                                        {card.label}
                                                    </p>
                                                </>
                                            )}
                                            <Maximize2 className="absolute top-3 right-3 w-4 h-4 text-zinc-300 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 p-0.5 rounded" />
                                        </div>

                                        {/* Permanently Visible 2-line Caption */}
                                        <p className="text-zinc-400 text-xs font-light leading-relaxed line-clamp-2 min-h-[2.5rem]">
                                            {card.caption}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Row 2: Day 5 - Day 7 (3 Cards) */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {GRID_DAYS_DATA.slice(4, 7).map(card => (
                                <div 
                                    key={card.day}
                                    className="group bg-zinc-950 border border-white/10 rounded-2xl p-4 flex flex-col justify-between hover:border-[#849b87]/50 transition-all duration-300"
                                >
                                    <div className="space-y-3">
                                        {/* Image Area */}
                                        <div 
                                            onClick={() => setActiveLightboxDay(card.day)}
                                            className="relative aspect-[4/5] rounded-xl bg-[#2a352c]/50 border border-white/10 flex flex-col items-center justify-center p-4 text-center cursor-pointer overflow-hidden group-hover:border-[#849b87]/40 transition-colors"
                                        >
                                            {card.imageSrc ? (
                                                <Image 
                                                    src={card.imageSrc}
                                                    alt={card.label}
                                                    fill
                                                    className="object-cover"
                                                />
                                            ) : (
                                                <>
                                                    <span className="text-xs font-mono font-semibold text-[#849b87] uppercase tracking-wider mb-1">
                                                        {card.title}
                                                    </span>
                                                    <p className="text-sm font-semibold text-white">
                                                        {card.label}
                                                    </p>
                                                </>
                                            )}
                                            <Maximize2 className="absolute top-3 right-3 w-4 h-4 text-zinc-300 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 p-0.5 rounded" />
                                        </div>

                                        {/* Permanently Visible 2-line Caption */}
                                        <p className="text-zinc-400 text-xs font-light leading-relaxed line-clamp-2 min-h-[2.5rem]">
                                            {card.caption}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* 8. The Logo Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center p-8 md:p-12 rounded-3xl bg-zinc-950 border border-white/10"
                    >
                        {/* Logo Image Left */}
                        <div className="relative aspect-[4/5] rounded-2xl bg-[#7a8a6d] border border-[#849b87]/30 overflow-hidden">
                            <Image 
                                src="/work/veyra/logo_section.jpg"
                                alt="Veyra Logo"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Text Right */}
                        <div className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                                The Logo
                            </h2>
                            <p className="text-zinc-300 font-light text-sm md:text-base leading-relaxed">
                                A single abstract, line-drawn emblem that reads as a softly rounded figure-and-leaf silhouette rather than a literal object: an open, arched outline containing a looped, almost figure-like line that resolves into a small leaf shape at its base. Rendered in a single sage-green line weight with no fill, shading, or gradient, it sits above the tracked-caps wordmark &apos;VEYRA&apos; set in a clean, airy sans-serif.
                            </p>
                            <p className="text-zinc-300 font-light text-sm md:text-base leading-relaxed">
                                What makes it work as a system rather than a decoration is its restraint and flexibility: it appears at full size embossed directly onto the product bottle, shrinks to a quiet corner mark on every graphic post, and is the only element in the entire system ever recolored — swapped from its native sage to cream on the two solid-color statement cards (Days 4 and 7) — so it can sit correctly against either half of the brand&apos;s two-tone palette without ever needing a second version designed.
                            </p>
                        </div>
                    </motion.div>

                    {/* 9. Design Rationale Table */}
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
                            <table className="w-full text-left border-collapse text-sm">
                                <thead>
                                    <tr className="border-b border-white/10 bg-zinc-900/80 text-zinc-300 font-semibold">
                                        <th className="py-4 px-6 w-1/3">Brief requirement</th>
                                        <th className="py-4 px-6 w-2/3">How it was addressed</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5 text-zinc-400 font-light">
                                    {RATIONALE_ROWS.map((row, rIdx) => (
                                        <tr key={rIdx} className="hover:bg-white/[0.02] transition-colors">
                                            <td className="py-4 px-6 font-medium text-zinc-200">{row.req}</td>
                                            <td className="py-4 px-6 leading-relaxed">{row.addressed}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>

                    {/* 10. Outcome */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                        className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-[#849b87]/20 border border-[#849b87]/30 space-y-4"
                    >
                        <div className="inline-flex items-center gap-2 text-[#849b87] text-sm font-semibold tracking-wide uppercase">
                            <CheckCircle2 className="w-4 h-4" /> Final Outcome
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                            Project Outcome
                        </h2>
                        <p className="text-zinc-300 font-light text-base md:text-lg leading-relaxed">
                            The result is a seven-day feed that moves between solid-color statement cards, close intimate photography, and typographic ingredient breakdowns without ever repeating the same layout twice — yet reads as one unmistakably quiet, confident brand throughout, carried almost entirely by a single locked type system, a disciplined two-tone palette, and one flexible logo mark doing double duty as both a corner signature and, twice, the closing word.
                        </p>
                    </motion.div>

                </section>
            </div>

            {/* 7. Click-to-Expand Lightbox Modal */}
            <AnimatePresence>
                {activeLightboxDay !== null && currentLightboxData && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setActiveLightboxDay(null)}
                        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
                    >
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-zinc-950 border border-white/20 rounded-3xl p-6 md:p-8 max-w-2xl w-full relative space-y-6 shadow-2xl"
                        >
                            {/* Close Button */}
                            <button 
                                onClick={() => setActiveLightboxDay(null)}
                                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-zinc-900 border border-white/20 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Modal Header */}
                            <div className="pr-10">
                                <span className="text-xs font-mono font-semibold text-[#849b87] uppercase tracking-wider">
                                    {currentLightboxData.title}
                                </span>
                                <h3 className="text-xl font-bold text-white mt-1">
                                    {currentLightboxData.label}
                                </h3>
                            </div>

                            {/* Enlarged Image Area */}
                            <div className="relative aspect-[4/5] max-h-[55vh] w-full max-w-md mx-auto rounded-2xl bg-[#d9d8d6] border border-white/10 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                                {currentLightboxData.imageSrc ? (
                                    <Image 
                                        src={currentLightboxData.imageSrc}
                                        alt={currentLightboxData.label}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                ) : (
                                    <>
                                        <span className="text-sm font-semibold text-white mb-2">
                                            {currentLightboxData.label}
                                        </span>
                                        <p className="text-xs text-zinc-500">Enlarged Placeholder View</p>
                                    </>
                                )}
                            </div>

                            {/* Repeats 2-line caption under enlarged image */}
                            <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/10">
                                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                                    {currentLightboxData.caption}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Footer */}
            <footer className="border-t border-white/10 bg-[#121212] py-12 px-6 md:px-12 lg:px-24 w-full mt-20">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-500 text-sm font-light">
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
