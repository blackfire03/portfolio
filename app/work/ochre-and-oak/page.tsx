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
    ChevronLeft, 
    ChevronRight, 
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

const stagger = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

// 3. Brief Alignment Chart Data
const BRIEF_SCORES = [
    { criteria: "Mascot consistency across formats", score: 9 },
    { criteria: "\"Slow morning\" mood/tone", score: 9 },
    { criteria: "Feed variety (no repeated post type)", score: 8 },
    { criteria: "Carousel structure/cohesion (Day 2 & 4)", score: 9 },
    { criteria: "Brand recognizability at a glance", score: 9 },
    { criteria: "Target audience fit (22–35 professionals)", score: 8 }
];

// Data for 7 Days Grid
const GRID_DAYS_DATA = [
    {
        day: 1,
        title: "Day 1 — Brand Intro",
        isCarousel: false,
        slides: [
            {
                imageSrc: "/work/ochre-oak/day1.jpg",
                label: "Day 1 — Brand Intro",
                caption: "Brand intro post introducing the Ochre & Oak mascot for the first time. A bold text-on-color card that sets the tone for the whole feed."
            }
        ]
    },
    {
        day: 2,
        title: "Day 2 — Bean-to-Cup Carousel",
        isCarousel: true,
        slides: [
            {
                imageSrc: "/work/ochre-oak/day2-slide1.jpg",
                label: "Day 2 — Slide 1 of 5 (Grown)",
                caption: "A five-step bean-to-cup carousel using a matching icon-badge template per slide. Turns the coffee-making process into a satisfying swipe-through story."
            },
            {
                imageSrc: "/work/ochre-oak/day2-slide2.jpg",
                label: "Day 2 — Slide 2 of 5 (Roasted)",
                caption: "Detailed view of the roasting phase with consistent badge positioning across the slide sequence."
            },
            {
                imageSrc: "/work/ochre-oak/day2-slide3.jpg",
                label: "Day 2 — Slide 3 of 5 (Ground)",
                caption: "Highlighting single-origin grinding precision and grind size notes."
            },
            {
                imageSrc: "/work/ochre-oak/day2-slide4.jpg",
                label: "Day 2 — Slide 4 of 5 (Brewed)",
                caption: "Showcasing pour-over brewing art with warm natural lighting."
            },
            {
                imageSrc: "/work/ochre-oak/day2-slide5.jpg",
                label: "Day 2 — Slide 5 of 5 (Poured)",
                caption: "The final pour into a handcrafted ceramic cup, completing the bean-to-cup journey."
            }
        ]
    },
    {
        day: 3,
        title: "Day 3 — Featured Drink",
        isCarousel: false,
        slides: [
            {
                imageSrc: "/work/ochre-oak/day3.jpg",
                label: "Day 3 — Featured Drink",
                caption: "Featured drink post for the Ochre Latte. A clean, condensation-beaded product shot kept product-forward, with the mascot tucked quietly into the corner."
            }
        ]
    },
    {
        day: 4,
        title: "Day 4 — Ways to Enjoy",
        isCarousel: true,
        slides: [
            {
                imageSrc: "/work/ochre-oak/day4-slide1.jpg",
                label: "Day 4 — Slide 1 of 4 (Title)",
                caption: "A 'ways to enjoy your coffee' carousel using the same badge-and-caption template as Day 2, so the two carousels read as siblings."
            },
            {
                imageSrc: "/work/ochre-oak/day4-slide2.jpg",
                label: "Day 4 — Slide 2 of 4 (Hot)",
                caption: "Highlighting rich espresso poured over perfectly steamed oat milk."
            },
            {
                imageSrc: "/work/ochre-oak/day4-slide3.jpg",
                label: "Day 4 — Slide 3 of 4 (Iced)",
                caption: "Refreshing Japanese-style cold brew served over artisanal clear ice cubes."
            },
            {
                imageSrc: "/work/ochre-oak/day4-slide4.jpg",
                label: "Day 4 — Slide 4 of 4 (To-Go)",
                caption: "Eco-friendly takeaway cup styled for morning commutes and slow strolls."
            }
        ]
    },
    {
        day: 5,
        title: "Day 5 — Moody Interior",
        isCarousel: false,
        slides: [
            {
                imageSrc: "/work/ochre-oak/day5.jpg",
                label: "Day 5 — Moody Interior",
                caption: "A moody, illustrated café-window scene with a miniature mascot seated at the table — turning a cozy stock mood into a scene that's unmistakably Ochre & Oak."
            }
        ]
    },
    {
        day: 6,
        title: "Day 6 — Coffee & Pastry Pairing",
        isCarousel: false,
        slides: [
            {
                imageSrc: "/work/ochre-oak/day6.jpg",
                label: "Day 6 — Coffee & Pastry Pairing",
                caption: "A pairing post for coffee and pastry, styled as a flat lay with hand-drawn callouts — appetite appeal handled through product photography rather than heavy graphic styling."
            }
        ]
    },
    {
        day: 7,
        title: "Day 7 — Weekend CTA",
        isCarousel: false,
        slides: [
            {
                imageSrc: "/work/ochre-oak/day7.jpg",
                label: "Day 7 — Weekend CTA",
                caption: "Weekend CTA post featuring a real to-go cup branded with the mascot as a foil sticker — the one post where the mascot moves off the screen and onto the physical product."
            }
        ]
    }
];

const RATIONALE_ROWS = [
    {
        req: "\"Minimal, slow-morning café feeling\"",
        addressed: "Breathable layouts, generous negative space, unhurried rounded typography, and soft taglines across every post"
    },
    {
        req: "\"Consistent brand across 7 different formats\"",
        addressed: "A single recurring mascot appears in every post — full hero, corner badge, illustrated companion, or physical cup sticker"
    },
    {
        req: "\"Bean-to-cup\" and \"ways to enjoy\" carousels",
        addressed: "Matching step templates (circular badge, step tag, headline, caption) so each carousel reads as a structured swipe-through"
    },
    {
        req: "\"Moody, cozy\" behind-the-scenes post",
        addressed: "Illustrated rainy café-window scene with the mascot seated at the table, pairing warmth with narrative"
    },
    {
        req: "\"Appetite-appeal\" pairing post",
        addressed: "Flat-lay-adjacent photography with hand-labeled callouts, keeping focus on the food and drink"
    },
    {
        req: "\"Bold, inviting\" weekend CTA",
        addressed: "Wavy display type, a physical to-go cup carrying the mascot as a sticker, clear location and hours"
    }
];

export default function OchreAndOakCaseStudy() {
    // Slide index state per day (dayId -> slideIndex)
    const [slideIndices, setSlideIndices] = useState<{ [key: number]: number }>({
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0
    });

    // Lightbox Modal state
    const [activeLightboxDay, setActiveLightboxDay] = useState<number | null>(null);

    const handlePrevSlide = (dayId: number, e?: React.MouseEvent) => {
        e?.stopPropagation();
        const dayData = GRID_DAYS_DATA.find(d => d.day === dayId);
        if (!dayData) return;
        setSlideIndices(prev => {
            const current = prev[dayId] || 0;
            const next = current === 0 ? dayData.slides.length - 1 : current - 1;
            return { ...prev, [dayId]: next };
        });
    };

    const handleNextSlide = (dayId: number, e?: React.MouseEvent) => {
        e?.stopPropagation();
        const dayData = GRID_DAYS_DATA.find(d => d.day === dayId);
        if (!dayData) return;
        setSlideIndices(prev => {
            const current = prev[dayId] || 0;
            const next = current === dayData.slides.length - 1 ? 0 : current + 1;
            return { ...prev, [dayId]: next };
        });
    };

    const currentLightboxData = activeLightboxDay !== null 
        ? GRID_DAYS_DATA.find(d => d.day === activeLightboxDay)
        : null;

    const currentLightboxSlideIndex = activeLightboxDay !== null 
        ? slideIndices[activeLightboxDay] || 0 
        : 0;

    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-[#c85a32]/30 font-sans flex flex-col justify-between">
            
            <div>
                {/* Top Bar / Navigation */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full px-6 md:px-12 lg:px-24 py-6 flex items-center justify-between sticky top-0 bg-[#050505]/80 backdrop-blur-md z-50 border-b border-white/5"
                >
                    <Link href="/work/social-media-creatives" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 rotate-180" /> Back to Case Studies
                    </Link>
                    <div className="text-sm font-medium text-zinc-500 hidden sm:block">
                        Case Studies <span className="mx-2">/</span> <Link href="/work/social-media-creatives" className="hover:text-zinc-300 transition-colors">Social Media Creatives</Link> <span className="mx-2">/</span> <span className="text-zinc-300">Ochre & Oak</span>
                    </div>
                </motion.div>

                {/* 1. Header Section */}
                <section className="px-6 md:px-12 lg:px-24 pt-16 pb-12 max-w-[85rem] mx-auto w-full">
                    <motion.div 
                        variants={stagger}
                        initial="hidden"
                        animate="visible"
                        className="space-y-6"
                    >
                        <motion.div variants={fadeIn} className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c85a32]/10 border border-[#c85a32]/30 text-[#c85a32] text-xs font-semibold tracking-wide uppercase">
                                <Sparkles className="w-3.5 h-3.5" /> Social Media & Mascot Design
                            </div>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                                Ochre & Oak — Café Social Media Content & Mascot Design
                            </h1>
                            <p className="text-sm md:text-base text-zinc-400 font-medium tracking-wide">
                                Fictional Client Project · Food & Beverage / Café · 7-Day Social Media Content Series
                            </p>
                        </motion.div>

                        {/* Project Meta */}
                        <motion.div variants={fadeIn} className="flex flex-wrap gap-8 pt-4 pb-6 border-b border-white/10 text-sm">
                            <div className="flex items-center gap-2 text-zinc-400">
                                <Wrench className="w-4 h-4 text-[#c85a32]" />
                                <span><strong className="text-zinc-200 font-medium">Tools:</strong> Canva</span>
                            </div>
                            <div className="flex items-center gap-2 text-zinc-400">
                                <User className="w-4 h-4 text-[#c85a32]" />
                                <span><strong className="text-zinc-200 font-medium">Role:</strong> Solo Designer</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Main Content Container */}
                <section className="px-6 md:px-12 lg:px-24 py-8 max-w-[85rem] mx-auto w-full space-y-20">
                    
                    {/* 2. Intro Paragraph */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                        className="p-8 md:p-10 rounded-2xl bg-zinc-950 border border-white/10 space-y-4"
                    >
                        <p className="text-base md:text-lg text-zinc-300 font-light leading-relaxed">
                            Ochre & Oak is a minimal specialty coffee café built around a &apos;slow morning&apos; feeling. This project covers a full 7-day Instagram content calendar — mixing single posts and carousels — anchored by a custom brand mascot designed to carry consistency across every format, from flat graphic cards to photography.
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
                        <div className="flex items-center justify-between border-b border-white/10 pb-4">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                                    <BarChart3 className="w-6 h-6 text-[#c85a32]" />
                                    How the content measures up against the brief
                                </h2>
                                <p className="text-xs text-zinc-500 mt-1 italic">
                                    Subjective self-assessment against brief requirements (1–10 scale)
                                </p>
                            </div>
                        </div>

                        <div className="p-6 md:p-8 rounded-2xl bg-zinc-950 border border-white/10 space-y-6">
                            {BRIEF_SCORES.map((item, idx) => (
                                <div key={idx} className="space-y-2">
                                    <div className="flex justify-between items-center text-sm font-medium">
                                        <span className="text-zinc-200">{item.criteria}</span>
                                        <span className="text-[#c85a32] font-semibold">{item.score} / 10</span>
                                    </div>
                                    <div className="w-full bg-zinc-900 h-3 rounded-full overflow-hidden p-0.5 border border-white/5">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${(item.score / 10) * 100}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: idx * 0.1, ease: "easeOut" }}
                                            className="h-full rounded-full bg-gradient-to-r from-[#c85a32]/80 to-[#c85a32]"
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
                        <div className="text-zinc-300 font-light text-base md:text-lg leading-relaxed space-y-4">
                            <p>
                                Ochre & Oak is a minimal specialty coffee café built around a &apos;slow morning&apos; feeling — exposed wood, ceramic cups, natural light — aimed at young professionals, remote workers, and coffee enthusiasts aged 22–35. The brief called for a full 7-day content calendar mixing single posts and carousels, with a visual direction built on warm neutrals, editorial serif headlines, natural-light flat lays, and breathable, minimal-text layouts — the antithesis of a busy, discount-driven café feed.
                            </p>
                            <p>
                                The ask covered seven distinct days: a brand-intro post, a bean-to-cup carousel, a featured-drink post, a &apos;ways to enjoy your coffee&apos; carousel, a moody interior quote card, a coffee-and-pastry pairing post, and a weekend call-to-action — each with its own format and visual job to do, but all needing to read as one brand.
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
                        <div className="text-zinc-300 font-light text-base md:text-lg leading-relaxed space-y-4">
                            <p>
                                A 7-day calendar is only as strong as its glue. Individual posts are easy; what&apos;s hard is making a discount-flat-lay, a process carousel, and a moody illustrated scene all feel like they came from the same café. Rather than relying purely on a fixed color palette to do that job, the project introduced a recurring mascot — a small, sleepy-eyed coffee cup character — that could appear consistently across every post regardless of format, mood, or medium.
                            </p>
                            <p>
                                The brand also leaned into a confident, saturated green-and-cream palette rather than a purely neutral one, using deep forest green as an anchor tone and a soft matcha-cream as its counterpart — giving the &apos;slow morning&apos; feeling a more playful, distinctive edge, while still keeping the typography and pacing calm and unhurried.
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
                        <div className="border-b border-white/10 pb-4 flex flex-col md:flex-row md:items-center justify-between gap-2">
                            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                                The 7-Day Content Grid
                            </h2>
                            <p className="text-xs text-zinc-400">
                                Click any card to expand in Lightbox · Arrow controls cycle carousel slides
                            </p>
                        </div>

                        {/* Row 1: Day 1 - Day 4 (4 Cards) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {GRID_DAYS_DATA.slice(0, 4).map(card => {
                                const currentSlideIdx = slideIndices[card.day] || 0;
                                const activeSlide = card.slides[currentSlideIdx];

                                return (
                                    <div 
                                        key={card.day}
                                        className="group bg-zinc-950 border border-white/10 rounded-2xl p-4 flex flex-col justify-between hover:border-[#c85a32]/50 transition-all duration-300"
                                    >
                                        <div className="space-y-3">
                                            {/* Image Placeholder / Asset Area */}
                                            <div 
                                                onClick={() => setActiveLightboxDay(card.day)}
                                                className="relative aspect-[4/5] rounded-xl bg-[#092701] border border-white/10 flex flex-col items-center justify-center p-4 text-center cursor-pointer overflow-hidden group-hover:border-[#c85a32]/40 transition-colors"
                                            >
                                                {activeSlide.imageSrc ? (
                                                    <Image 
                                                        src={activeSlide.imageSrc}
                                                        alt={activeSlide.label}
                                                        fill
                                                        className="object-cover"
                                                        priority={card.day === 1}
                                                    />
                                                ) : (
                                                    <>
                                                        <span className="text-xs font-mono font-semibold text-[#c85a32] uppercase tracking-wider mb-1">
                                                            {card.title}
                                                        </span>
                                                        <p className="text-sm font-semibold text-white">
                                                            {activeSlide.label}
                                                        </p>
                                                    </>
                                                )}
                                                <Maximize2 className="absolute top-3 right-3 w-4 h-4 text-zinc-300 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 p-0.5 rounded" />

                                                {/* Carousel Arrow Controls */}
                                                {card.isCarousel && (
                                                    <div className="absolute inset-x-2 bottom-3 flex justify-between items-center px-1">
                                                        <button 
                                                            onClick={(e) => handlePrevSlide(card.day, e)}
                                                            className="w-7 h-7 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-white hover:bg-[#c85a32] transition-colors"
                                                            title="Previous slide"
                                                        >
                                                            <ChevronLeft className="w-4 h-4" />
                                                        </button>
                                                        <span className="text-[0.7rem] bg-black/60 px-2 py-0.5 rounded-full text-zinc-300 font-mono">
                                                            {currentSlideIdx + 1}/{card.slides.length}
                                                        </span>
                                                        <button 
                                                            onClick={(e) => handleNextSlide(card.day, e)}
                                                            className="w-7 h-7 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-white hover:bg-[#c85a32] transition-colors"
                                                            title="Next slide"
                                                        >
                                                            <ChevronRight className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Permanently Visible 2-line Caption */}
                                            <p className="text-zinc-400 text-xs font-light leading-relaxed line-clamp-2 min-h-[2.5rem]">
                                                {activeSlide.caption}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Row 2: Day 5 - Day 7 (3 Cards) */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {GRID_DAYS_DATA.slice(4, 7).map(card => {
                                const currentSlideIdx = slideIndices[card.day] || 0;
                                const activeSlide = card.slides[currentSlideIdx];

                                return (
                                    <div 
                                        key={card.day}
                                        className="group bg-zinc-950 border border-white/10 rounded-2xl p-4 flex flex-col justify-between hover:border-[#c85a32]/50 transition-all duration-300"
                                    >
                                        <div className="space-y-3">
                                            {/* Image Placeholder / Asset Area */}
                                            <div 
                                                onClick={() => setActiveLightboxDay(card.day)}
                                                className="relative aspect-[4/5] rounded-xl bg-[#092701] border border-white/10 flex flex-col items-center justify-center p-4 text-center cursor-pointer overflow-hidden group-hover:border-[#c85a32]/40 transition-colors"
                                            >
                                                {activeSlide.imageSrc ? (
                                                    <Image 
                                                        src={activeSlide.imageSrc}
                                                        alt={activeSlide.label}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                ) : (
                                                    <>
                                                        <span className="text-xs font-mono font-semibold text-[#c85a32] uppercase tracking-wider mb-1">
                                                            {card.title}
                                                        </span>
                                                        <p className="text-sm font-semibold text-white">
                                                            {activeSlide.label}
                                                        </p>
                                                    </>
                                                )}
                                                <Maximize2 className="absolute top-3 right-3 w-4 h-4 text-zinc-300 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 p-0.5 rounded" />
                                            </div>

                                            {/* Permanently Visible 2-line Caption */}
                                            <p className="text-zinc-400 text-xs font-light leading-relaxed line-clamp-2 min-h-[2.5rem]">
                                                {activeSlide.caption}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* 8. Mascot Design Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center p-8 md:p-12 rounded-3xl bg-zinc-950 border border-white/10"
                    >
                        {/* Mascot Image Left */}
                        <div className="relative aspect-[4/5] rounded-2xl bg-[#092701] border border-[#c85a32]/30 overflow-hidden">
                            <Image 
                                src="/work/ochre-oak/mascot.jpg"
                                alt="Ochre & Oak Mascot"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Text Right */}
                        <div className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                                The Mascot
                            </h2>
                            <p className="text-zinc-300 font-light text-sm md:text-base leading-relaxed">
                                A small anthropomorphic coffee cup — light sage-green body, dark forest-green rim and lid, closed sleepy eyes, a gentle smile, and a soft cream foam swirl styled like a little chef&apos;s hat. Simple stick arms and legs give it just enough personality to wave, walk, or sit at a table without ever feeling over-designed.
                            </p>
                            <p className="text-zinc-300 font-light text-sm md:text-base leading-relaxed">
                                What makes it work as a system, not just a logo: it appears as a full illustrated hero on Day 1, shrinks to a quiet corner badge on product and process posts (Days 2–6), and shows up &apos;in the wild&apos; as a printed sticker on a real cup in Day 7 — moving between flat graphic design, editorial illustration, and photographed product without ever breaking character. That consistency is what lets seven visually different posts read instantly as the same brand while scrolling.
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
                        className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-[#c85a32]/20 border border-[#c85a32]/30 space-y-4"
                    >
                        <div className="inline-flex items-center gap-2 text-[#c85a32] text-sm font-semibold tracking-wide uppercase">
                            <CheckCircle2 className="w-4 h-4" /> Final Outcome
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                            Project Outcome
                        </h2>
                        <p className="text-zinc-300 font-light text-base md:text-lg leading-relaxed">
                            The result is a seven-day feed that never repeats the same post twice — moving between illustration, product photography, icon-driven carousels, and outdoor lifestyle shots — yet reads as one unmistakable brand throughout, carried almost entirely by a single, well-designed mascot.
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
                            className="bg-zinc-950 border border-white/20 rounded-3xl p-6 md:p-8 max-w-3xl w-full relative space-y-6 shadow-2xl"
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
                                <span className="text-xs font-mono font-semibold text-[#c85a32] uppercase tracking-wider">
                                    {currentLightboxData.title}
                                </span>
                                <h3 className="text-xl font-bold text-white mt-1">
                                    {currentLightboxData.slides[currentLightboxSlideIndex].label}
                                </h3>
                            </div>

                            {/* Enlarged Image Area */}
                            <div className="relative aspect-[4/5] max-h-[60vh] w-full max-w-md mx-auto rounded-2xl bg-[#092701] border border-white/10 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                                {currentLightboxData.slides[currentLightboxSlideIndex].imageSrc ? (
                                    <Image 
                                        src={currentLightboxData.slides[currentLightboxSlideIndex].imageSrc!}
                                        alt={currentLightboxData.slides[currentLightboxSlideIndex].label}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                ) : (
                                    <>
                                        <span className="text-sm font-semibold text-white mb-2">
                                            {currentLightboxData.slides[currentLightboxSlideIndex].label}
                                        </span>
                                        <p className="text-xs text-zinc-500">Enlarged Placeholder View</p>
                                    </>
                                )}

                                {/* Lightbox Carousel Arrows */}
                                {currentLightboxData.isCarousel && (
                                    <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between items-center pointer-events-none">
                                        <button 
                                            onClick={(e) => handlePrevSlide(currentLightboxData.day, e)}
                                            className="pointer-events-auto w-10 h-10 rounded-full bg-black/80 border border-white/20 flex items-center justify-center text-white hover:bg-[#c85a32] transition-colors shadow-lg"
                                        >
                                            <ChevronLeft className="w-5 h-5" />
                                        </button>
                                        <button 
                                            onClick={(e) => handleNextSlide(currentLightboxData.day, e)}
                                            className="pointer-events-auto w-10 h-10 rounded-full bg-black/80 border border-white/20 flex items-center justify-center text-white hover:bg-[#c85a32] transition-colors shadow-lg"
                                        >
                                            <ChevronRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Repeats 2-line caption under enlarged image */}
                            <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/10">
                                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                                    {currentLightboxData.slides[currentLightboxSlideIndex].caption}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 13. Footer */}
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
