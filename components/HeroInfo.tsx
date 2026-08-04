"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, ArrowRight, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";

export function HeroInfo() {
    const [time, setTime] = useState<Date | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "center center"]
    });

    // Use spring for smoother transitions
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Gradual unblur and fade in as we scroll towards the section
    const opacity = useTransform(smoothProgress, [0, 0.8], [0, 1]);
    const blurValue = useTransform(smoothProgress, [0, 0.8], [20, 0]);
    const yValue = useTransform(smoothProgress, [0, 0.8], [50, 0]);
    const blur = useTransform(blurValue, (v) => `blur(${v}px)`);

    useEffect(() => {
        setTime(new Date());
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const getISTTime = (date: Date) => {
        return new Date(date.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
    };

    const isOnline = () => {
        if (!time) return false;
        const istDate = getISTTime(time);
        const hours = istDate.getHours();
        return hours >= 21 || hours < 7;
    };

    const formatISTTime = (date: Date) => {
        return date.toLocaleTimeString("en-US", {
            timeZone: "Asia/Kolkata",
            hour12: true,
            hour: "numeric",
            minute: "2-digit",
            second: "2-digit"
        });
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
        visible: { 
            opacity: 1, 
            y: 0, 
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
        }
    };

    return (
        <section 
            ref={containerRef}
            className="relative z-20 bg-[#000000] min-h-screen w-full px-6 md:px-12 lg:px-16 text-white overflow-hidden font-sans border-b border-white/5"
        >
            <motion.div 
                style={{ opacity, filter: blur, y: yValue }}
                className="relative pt-24 pb-20 max-w-[95rem] mx-auto min-h-screen flex flex-col justify-between"
            >
                {/* Header Section */}
                <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-white">
                        UI/UX & Graphic Designer<br />
                        based in India
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mt-20 md:mt-0">
                    {/* Bio Section (Bottom Left) */}
                    <div className="max-w-md">
                        <div className="text-[0.85rem] text-zinc-500 mb-4 font-medium flex items-center gap-2">
                            <span className={isOnline() ? "text-[#4ade80]" : "text-red-500"}>
                                ({isOnline() ? "Online" : "Offline"})
                            </span>
                            <span>Now, {time ? formatISTTime(time) : "00:00:00 PM"} IST</span>
                        </div>
                        <p className="text-[1rem] md:text-[1.1rem] text-zinc-400 font-light leading-relaxed mb-8">
                            Enthusiastic about design, typography, and the dynamic
                            areas of interaction design across the web. Specialised in
                            building digital products that translate into accessible
                            and functional experiences.
                        </p>
                        <div className="flex items-center gap-4">
                            <button 
                                onClick={() => {
                                    sendGAEvent("event", "cta_work_together");
                                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="bg-white text-black px-6 py-2.5 rounded-full text-[0.9rem] font-bold hover:bg-zinc-200 transition-all cursor-pointer"
                            >
                                Let&apos;s Work Together
                            </button>
                            <button 
                                onClick={() => {
                                    sendGAEvent("event", "cta_view_all_work");
                                }}
                                className="text-zinc-400 border border-white/10 hover:border-white/20 hover:text-white px-6 py-2.5 rounded-full text-[0.9rem] font-medium transition-all flex items-center gap-2 cursor-pointer"
                            >
                                <ArrowRight className="w-4 h-4 rotate-[-45deg]" /> View All Work
                            </button>
                        </div>
                    </div>

                    {/* Case Studies Section (Bottom Right) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Case Study 1: Website Design Projects */}
                        <div className="group">
                            <div className="relative aspect-[16/11] overflow-hidden rounded-xl mb-6 bg-[#0a0a0a]">
                                <Image 
                                    src="/website_design_projects.jpg"
                                    alt="Website Design Projects"
                                    fill
                                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                    priority
                                />
                            </div>
                            <h3 className="text-[1.1rem] font-semibold text-white mb-2 group-hover:text-zinc-300 transition-colors">
                                Website Design Projects
                            </h3>
                            <p className="text-zinc-500 text-[0.85rem] font-light leading-relaxed mb-4 line-clamp-2">
                                Turning complex ideas into simple, elegant websites built for usability and impact.
                            </p>
                            <Link 
                                href="/work/website-design-projects" 
                                onClick={() => sendGAEvent("event", "cta_view_projects")}
                                className="inline-flex items-center gap-2 text-[0.85rem] font-medium text-zinc-400 group-hover:text-white transition-all"
                            >
                                <ArrowRight className="w-4 h-4 rotate-[-45deg]" /> View Projects
                            </Link>
                        </div>

                        {/* Case Study 2 */}
                        <div className="group">
                            <Link 
                                href="/work/social-media-creatives" 
                                onClick={() => sendGAEvent("event", "cta_view_projects")}
                                className="block"
                            >
                                <div className="relative aspect-[16/11] overflow-hidden rounded-xl mb-6 bg-[#004aac]">
                                    <Image 
                                        src="/social_media_creatives.jpg"
                                        alt="Social Media Creatives"
                                        fill
                                        className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                        priority
                                    />
                                </div>
                                <h3 className="text-[1.1rem] font-semibold text-white mb-2 group-hover:text-zinc-300 transition-colors">
                                    Social Media Creatives
                                </h3>
                            </Link>
                            <p className="text-zinc-500 text-[0.85rem] font-light leading-relaxed mb-4 line-clamp-2">
                                Scroll-stopping single posts and carousels designed to inform, engage, and build brand presence.
                            </p>
                            <Link 
                                href="/work/social-media-creatives" 
                                onClick={() => sendGAEvent("event", "cta_view_projects")}
                                className="inline-flex items-center gap-2 text-[0.85rem] font-medium text-zinc-400 group-hover:text-white transition-all"
                            >
                                <ArrowRight className="w-4 h-4 rotate-[-45deg]" /> View Projects
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
