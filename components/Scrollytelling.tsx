"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent, motion } from "framer-motion";

const FRAME_COUNT = 120; // 0 to 119

export function Scrollytelling() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);

    // Preload images
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];

        for (let i = 0; i < FRAME_COUNT; i++) {
            const img = new Image();
            const frameNum = i.toString().padStart(3, "0");
            img.src = `/sequence/frame_${frameNum}_delay-0.066s.webp`;

            const onImageLoad = () => {
                // Render frame 0 immediately as soon as the first image finishes loading
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
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

    useMotionValueEvent(frameIndex, "change", (latest) => {
        if (images.length > 0) {
            drawFrame(Math.floor(latest), images);
        }
    });

    const drawFrame = (index: number, imgList: HTMLImageElement[]) => {
        if (!canvasRef.current) return;

        // Fallback to frame 0 if the target frame isn't loaded yet
        let img = imgList[index];
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

                {/* Canvas Background */}
                <div className="absolute inset-0 z-0">
                    <canvas
                        ref={canvasRef}
                        className="w-full h-full object-cover"
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
