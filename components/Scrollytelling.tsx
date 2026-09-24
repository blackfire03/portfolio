"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent, motion } from "framer-motion";
import Image from "next/image";

const FRAME_COUNT = 120; // 0 to 119

export function Scrollytelling() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const rafIdRef = useRef<number | null>(null);
    const latestFrameRef = useRef<number>(0);

    // Eagerly preload all frames in memory for smooth, lag-free scroll playback
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let isCancelled = false;

        for (let i = 0; i < FRAME_COUNT; i++) {
            const img = new window.Image();
            const frameNum = i.toString().padStart(3, "0");
            img.src = `/sequence/frame_${frameNum}_delay-0.066s.webp`;

            const onImageLoad = () => {
                if (isCancelled) return;
                // Render initial frame immediately once loaded
                if (i === 0 || loadedImages[0]?.complete) {
                    if (canvasRef.current) {
                        drawFrame(Math.floor(frameIndex.get()), loadedImages);
                    }
                }
            };

            if (img.complete) {
                onImageLoad();
            } else {
                img.onload = onImageLoad;
            }

            loadedImages.push(img);
        }
        setImages(loadedImages);

        return () => {
            isCancelled = true;
            if (rafIdRef.current !== null) {
                cancelAnimationFrame(rafIdRef.current);
            }
        };
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

    // Throttle frame draws to requestAnimationFrame for 60fps/120fps smooth playback without dropping frames
    useMotionValueEvent(frameIndex, "change", (latest) => {
        latestFrameRef.current = Math.floor(latest);

        if (rafIdRef.current === null) {
            rafIdRef.current = requestAnimationFrame(() => {
                if (images.length > 0) {
                    drawFrame(latestFrameRef.current, images);
                }
                rafIdRef.current = null;
            });
        }
    });

    const drawFrame = (index: number, imgList: HTMLImageElement[]) => {
        if (!canvasRef.current) return;

        // Find the target frame, or smoothly fallback to the closest loaded previous frame, or frame 0
        let img = imgList[index];
        if (!img || !img.complete) {
            for (let k = index - 1; k >= 0; k--) {
                if (imgList[k]?.complete) {
                    img = imgList[k];
                    break;
                }
            }
        }
        if (!img || !img.complete) {
            img = imgList[0];
        }
        if (!img || !img.complete) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Canvas dimensions have been scaled by devicePixelRatio for sharpness
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;

        let renderWidth = canvas.width;
        let renderHeight = canvas.height;
        let offsetX = 0;
        let offsetY = 0;

        if (canvasRatio > imgRatio) {
            renderHeight = canvas.width / imgRatio;
            offsetY = (canvas.height - renderHeight) / 2;
        } else {
            renderWidth = canvas.height * imgRatio;
            offsetX = (canvas.width - renderWidth) / 2;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Background fill to match sequence bg
        ctx.fillStyle = "#121212";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
    };

    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                const dpr = window.devicePixelRatio || 1;
                canvasRef.current.width = window.innerWidth * dpr;
                canvasRef.current.height = window.innerHeight * dpr;

                drawFrame(Math.floor(frameIndex.get()), images);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [images]);

    // Overlay Animations 
    const text1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
    const text1Y = useTransform(scrollYProgress, [0, 0.15], [0, -100]);

    const text2Opacity = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.45], [0, 1, 1, 0]);
    const text2X = useTransform(scrollYProgress, [0.2, 0.45], [50, -50]);

    const text3Opacity = useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.85], [0, 1, 1, 0]);
    const text3Y = useTransform(scrollYProgress, [0.55, 0.85], [50, -50]);

    return (
        <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">

                {/* Hero Visual: Next.js Image with priority for instant mobile LCP + Canvas overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/sequence/frame_000_delay-0.066s.webp"
                        alt="Hitarth Nayak - UI/UX & Graphic Designer"
                        fill
                        priority
                        sizes="100vw"
                        quality={80}
                        className="object-cover pointer-events-none"
                    />
                    <canvas
                        ref={canvasRef}
                        className="w-full h-full object-cover relative z-10"
                        style={{
                            width: "100%",
                            height: "100%"
                        }}
                    />
                </div>

                {/* Text Overlays */}
                <div className="pointer-events-none absolute inset-0 z-10">
                    {/* Section 1 */}
                    <motion.div
                        style={{ opacity: text1Opacity, y: text1Y }}
                        className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
                    >
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white drop-shadow-lg">
                            Hitarth Nayak.
                        </h1>
                        <p className="mt-4 text-xl md:text-3xl text-zinc-300 font-light drop-shadow-md">
                            UI/UX & Graphic Designer
                        </p>
                    </motion.div>

                    {/* Section 2 */}
                    <motion.div
                        style={{ opacity: text2Opacity, x: text2X }}
                        className="absolute inset-0 flex flex-col items-start justify-center p-8 md:p-24"
                    >
                        <h2 className="text-4xl md:text-7xl font-bold tracking-tight max-w-3xl text-white leading-tight drop-shadow-lg">
                            Creating intuitive <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                                interfaces.
                            </span>
                        </h2>
                        <div className="w-24 h-1 mt-8 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full" />
                    </motion.div>

                    {/* Section 3 */}
                    <motion.div
                        style={{ opacity: text3Opacity, y: text3Y }}
                        className="absolute inset-0 flex flex-col items-end justify-center text-right p-8 md:p-24"
                    >
                        <h2 className="text-4xl md:text-7xl font-bold tracking-tight max-w-3xl text-white drop-shadow-lg">
                            User-first <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                                mindset.
                            </span>
                        </h2>
                        <div className="w-full flex justify-end">
                            <div className="w-24 h-1 mt-8 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full" />
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    );
}
