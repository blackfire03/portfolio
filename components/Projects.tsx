"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

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
        <section className="relative z-20 bg-[#121212] min-h-screen py-32 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
                        Experience & Work
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-2xl font-light">
                        My professional journey in design and business development.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className={`group relative rounded-2xl p-px bg-gradient-to-b ${project.color} ${project.glow} transition-all duration-500`}
                        >
                            {/* Card Inner */}
                            <div className={`relative h-full bg-[#121212]/80 backdrop-blur-xl rounded-[15px] p-8 border ${project.border} flex flex-col transition-colors duration-500 group-hover:bg-[#1a1a1a]/80`}>



                                <h3 className="text-2xl font-semibold text-white mb-3">
                                    {project.title}
                                </h3>

                                <p className="text-zinc-400 font-light mb-8 flex-grow">
                                    {project.description}
                                </p>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2 mb-6">
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
