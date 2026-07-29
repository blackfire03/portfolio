"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import Image from "next/image";

interface QualificationItem {
    title: string;
    institution: string;
    meta: string;
    icon: typeof Award;
    iconColor: string;
    bgColor: string;
    borderColor: string;
}

const QUALIFICATIONS: QualificationItem[] = [
    {
        title: "Master's in UI/UX and Graphic Designing",
        institution: "Red and White Multimedia Education, Surat",
        meta: "Private course · Mar 2024 – Mar 2026",
        icon: Award,
        iconColor: "text-amber-400",
        bgColor: "bg-amber-500/10",
        borderColor: "border-amber-500/25 group-hover:border-amber-400/50",
    },
    {
        title: "Diploma in Computer Engineering",
        institution: "Pravin Patil Polytechnic, Mumbai",
        meta: "Jun 2020 – Jun 2023",
        icon: GraduationCap,
        iconColor: "text-[#9d8cff]",
        bgColor: "bg-[#9d8cff]/10",
        borderColor: "border-[#9d8cff]/25 group-hover:border-[#9d8cff]/50",
    },
];

export function Qualifications() {
    return (
        <section className="relative z-20 bg-[#08090d] py-20 md:py-24 px-6 md:px-12 lg:px-24 border-b border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                
                {/* 2-Column Grid: Left (Timeline), Right (Floating 3D Cap Graphic) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* LEFT Column: Header & Timeline */}
                    <div className="lg:col-span-7 space-y-10 md:space-y-12">
                        {/* Header Block */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="text-left"
                        >
                            <span className="block text-[13px] font-semibold text-[#9a9ba3] tracking-[0.14em] uppercase mb-3">
                                BACKGROUND
                            </span>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                                Qualifications
                            </h2>
                        </motion.div>

                        {/* Timeline List */}
                        <div className="relative space-y-10 md:space-y-12">
                            {QUALIFICATIONS.map((item, index) => {
                                const IconComponent = item.icon;
                                const isLast = index === QUALIFICATIONS.length - 1;

                                return (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{
                                            duration: 0.6,
                                            delay: index * 0.15,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="relative flex items-start gap-5 md:gap-6 group"
                                    >
                                        {/* Left Icon & Vertical Connecting Line */}
                                        <div className="relative flex flex-col items-center shrink-0">
                                            {/* Icon Circle with Distinct Accent Colors */}
                                            <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full ${item.bgColor} border ${item.borderColor} flex items-center justify-center transition-all duration-300 shadow-md z-10`}>
                                                <IconComponent className={`w-5 h-5 md:w-6 md:h-6 ${item.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                                            </div>

                                            {/* Vertical Connecting Line */}
                                            {!isLast && (
                                                <div className="w-[2px] bg-white/10 h-full absolute top-12 md:top-14 left-1/2 -translate-x-1/2 pt-2 pb-2" />
                                            )}
                                        </div>

                                        {/* Content Details */}
                                        <div className="pt-1 md:pt-2 space-y-1.5 pb-2 min-w-0">
                                            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-white/90 transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-base md:text-lg text-[#9a9ba3] font-medium leading-relaxed">
                                                {item.institution}
                                            </p>
                                            <p className="text-xs md:text-sm text-[#6f707a] font-normal tracking-wide">
                                                {item.meta}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* RIGHT Column: Floating 3D Graduation Cap Graphic (No Card Background) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-5 flex justify-center items-center relative py-6"
                    >
                        {/* Subtle Floating 3D Cap graphic with soft ambient glow behind */}
                        <div className="relative w-full max-w-[360px] aspect-square flex items-center justify-center">
                            
                            {/* Ambient Glow */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#9d8cff]/20 to-cyan-500/15 rounded-full filter blur-3xl opacity-60 pointer-events-none" />

                            {/* Floating Animation */}
                            <motion.div
                                animate={{ y: [0, -12, 0] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="relative w-full h-full"
                            >
                                <Image
                                    src="/graduation_cap_graphic.png"
                                    alt="Graduation Cap 3D Graphic"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 360px"
                                    className="object-contain filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]"
                                    priority
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
