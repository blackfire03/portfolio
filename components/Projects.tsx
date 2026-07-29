"use client";

import { motion } from "framer-motion";

const PROJECTS = [
    {
        title: "Vitrag Estates Agency",
        description: "Designed and developed the complete company website, creating user-friendly layouts focused on navigation and conversion.",
        tags: ["Web Design", "UI/UX", "Responsive", "Wix"],
        color: "from-blue-500/20 to-cyan-500/20",
        border: "border-blue-500/20",
        glow: "group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]",
    },
    {
        title: "Vision World Import & Export LTD",
        description: "Designed product catalogues, improved PDF layouts, and delivered print-ready design assets.",
        tags: ["Graphic Design", "Print Design", "Typography", "Layout"],
        color: "from-purple-500/20 to-pink-500/20",
        border: "border-purple-500/20",
        glow: "group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]",
    },
    {
        title: "Daydreamsoft Infotech LLP",
        description: "Managed international clients on Upwork, handled requirement gathering, and client coordination.",
        tags: ["Business Dev", "Client Relations", "Requirement Gathering"],
        color: "from-emerald-500/20 to-teal-500/20",
        border: "border-emerald-500/20",
        glow: "group-hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]",
    },
];

export function Projects() {
    return (
        <section className="relative z-20 bg-[#08090d] py-20 md:py-24 px-6 md:px-12 lg:px-24 border-b border-white/5">
            <div className="max-w-7xl mx-auto">
                {/* Header Block */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-12 md:mb-14 text-left"
                >
                    <span className="block text-[13px] font-semibold text-[#9a9ba3] tracking-[0.14em] uppercase mb-3">
                        EXPERIENCE
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
                        Experience & Work
                    </h2>
                    <p className="text-base md:text-lg text-[#9a9ba3] font-light max-w-2xl">
                        My professional journey in design and business development.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {PROJECTS.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 0.6,
                                delay: i * 0.1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className={`group relative rounded-[20px] p-px bg-gradient-to-b ${project.color} ${project.glow} transition-all duration-500`}
                        >
                            {/* Card Inner */}
                            <div className={`relative h-full bg-[#12131a]/90 backdrop-blur-xl rounded-[19px] p-7 md:p-8 border ${project.border} flex flex-col transition-colors duration-500 group-hover:bg-[#171822]`}>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#9d8cff] transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-[#9a9ba3] font-light text-sm md:text-base leading-relaxed mb-6 flex-grow">
                                    {project.description}
                                </p>

                                <div className="mt-auto pt-2">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, j) => (
                                            <span
                                                key={j}
                                                className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/10"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
