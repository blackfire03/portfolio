"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface SkillTool {
    name: string;
    level: "Advanced" | "Intermediate" | "Beginner";
    filledBars: number; // 1, 2, or 3 out of 3
    icon: string;
}

const SKILL_TOOLS: SkillTool[] = [
    {
        name: "Adobe Illustrator",
        level: "Advanced",
        filledBars: 3,
        icon: "/logos/illustrator.png",
    },
    {
        name: "Adobe Photoshop",
        level: "Advanced",
        filledBars: 3,
        icon: "/logos/photoshop.png",
    },
    {
        name: "Figma",
        level: "Advanced",
        filledBars: 3,
        icon: "/logos/figma.png",
    },
    {
        name: "Canva",
        level: "Advanced",
        filledBars: 3,
        icon: "/logos/canva.png",
    },
    {
        name: "Adobe After Effects",
        level: "Beginner",
        filledBars: 1,
        icon: "/logos/after-effects.png",
    },
    {
        name: "Adobe InDesign",
        level: "Intermediate",
        filledBars: 2,
        icon: "/logos/indesign.png",
    },
];

export function Skills() {
    return (
        <section className="relative z-20 bg-[#08090d] py-24 md:py-32 px-6 md:px-12 lg:px-24 border-b border-white/5">
            <div className="max-w-7xl mx-auto">
                {/* Header Block */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-14 md:mb-16 text-left"
                >
                    <span className="block text-[13px] font-semibold text-[#9a9ba3] tracking-[0.14em] uppercase mb-3">
                        SKILLS
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                        Tools I work with
                    </h2>
                </motion.div>

                {/* 2-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    {SKILL_TOOLS.map((tool, index) => (
                        <motion.div
                            key={tool.name}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.08,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="group relative flex items-center justify-between gap-4 p-5 md:p-6 rounded-[20px] bg-[#12131a]/90 border border-white/[0.08] hover:border-white/20 hover:bg-[#171822] transition-all duration-300 shadow-lg"
                        >
                            {/* Left Side: Icon & Details */}
                            <div className="flex items-center gap-4.5 md:gap-5 min-w-0">
                                {/* Tool Logo Icon */}
                                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-[14px] overflow-hidden shrink-0 bg-[#1a1b24] shadow-md border border-white/5 group-hover:scale-105 transition-transform duration-300">
                                    <Image
                                        src={tool.icon}
                                        alt={tool.name}
                                        fill
                                        sizes="(max-width: 768px) 48px, 56px"
                                        className="object-cover"
                                        priority={index < 4}
                                    />
                                </div>

                                {/* Tool Title & Skill Level Segmented Bars */}
                                <div className="space-y-2 min-w-0">
                                    <h3 className="text-base md:text-lg font-bold text-white tracking-tight truncate group-hover:text-[#9d8cff] transition-colors">
                                        {tool.name}
                                    </h3>

                                    {/* 3 Segmented Skill Level Bars */}
                                    <div className="flex items-center gap-2">
                                        {[1, 2, 3].map((barIndex) => (
                                            <div
                                                key={barIndex}
                                                className={`h-[5px] w-10 md:w-12 rounded-full transition-colors duration-300 ${
                                                    barIndex <= tool.filledBars
                                                        ? "bg-white group-hover:bg-[#9d8cff]"
                                                        : "bg-white/15"
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Skill Level Text */}
                            <span className="text-xs md:text-sm font-medium text-[#9a9ba3] shrink-0 text-right">
                                {tool.level}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
