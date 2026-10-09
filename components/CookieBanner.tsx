"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export const CONSENT_STORAGE_KEY = "portfolio_cookie_consent";

type ConsentChoice = "all" | "essential";

function updateGoogleConsent(analyticsGranted: boolean) {
    if (typeof window === "undefined") return;

    const win = window as unknown as {
        gtag?: (...args: unknown[]) => void;
        dataLayer?: unknown[];
    };

    if (typeof win.gtag === "function") {
        win.gtag("consent", "update", {
            analytics_storage: analyticsGranted ? "granted" : "denied",
            ad_storage: "denied",
            ad_user_data: "denied",
            ad_personalization: "denied",
        });
    }

    if (Array.isArray(win.dataLayer)) {
        win.dataLayer.push({
            event: analyticsGranted ? "consent_analytics_granted" : "consent_analytics_denied",
        });
    }
}

function clearAnalyticsCookies() {
    if (typeof document === "undefined") return;

    try {
        const cookies = document.cookie.split(";");
        const hostname = window.location.hostname;
        const hostParts = hostname.split(".");
        const rootDomain =
            hostParts.length > 1
                ? "." + hostParts.slice(-2).join(".")
                : hostname;

        for (const cookie of cookies) {
            const name = cookie.split("=")[0].trim();
            if (name.startsWith("_ga")) {
                document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
                document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${hostname};`;
                document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${rootDomain};`;
            }
        }
    } catch {
        // Silently handle any browser cookie access restrictions
    }
}

export function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        try {
            const saved = localStorage.getItem(CONSENT_STORAGE_KEY) as ConsentChoice | null;
            if (!saved) {
                setIsVisible(true);
            }
        } catch {
            // LocalStorage inaccessible (e.g. strict privacy mode), do not force banner repeatedly
        }

        const handleOpenBanner = () => {
            setIsVisible(true);
        };

        window.addEventListener("open-cookie-banner", handleOpenBanner);
        return () => {
            window.removeEventListener("open-cookie-banner", handleOpenBanner);
        };
    }, []);

    const handleAcceptAll = () => {
        try {
            localStorage.setItem(CONSENT_STORAGE_KEY, "all");
        } catch {
            // LocalStorage fallback
        }
        updateGoogleConsent(true);
        setIsVisible(false);
    };

    const handleEssentialOnly = () => {
        try {
            localStorage.setItem(CONSENT_STORAGE_KEY, "essential");
        } catch {
            // LocalStorage fallback
        }
        updateGoogleConsent(false);
        clearAnalyticsCookies();
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.aside
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 24 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    aria-label="Cookie preferences"
                    role="region"
                    className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 pointer-events-none"
                >
                    <div className="max-w-4xl mx-auto bg-[#141416]/95 backdrop-blur-md border border-white/10 rounded-2xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.7)] pointer-events-auto">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 md:gap-8">
                            <div className="space-y-1.5 max-w-2xl">
                                <h2 className="text-sm font-semibold text-white tracking-tight">
                                    Cookie Preferences
                                </h2>
                                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                                    This portfolio uses optional Google Analytics cookies to help understand visitor interactions and improve design presentation. Advertising and marketing cookies are never used. You can accept analytics or continue with essential functionality only. Learn more in the{" "}
                                    <Link
                                        href="/privacy-policy"
                                        className="text-zinc-200 underline underline-offset-4 decoration-white/20 hover:text-white hover:decoration-white transition-colors"
                                    >
                                        Privacy Policy
                                    </Link>
                                    .
                                </p>
                            </div>
                            <div className="grid grid-cols-2 sm:flex sm:items-center gap-2.5 sm:gap-3 shrink-0">
                                <button
                                    type="button"
                                    onClick={handleEssentialOnly}
                                    className="px-5 py-2.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-xs sm:text-sm font-medium text-zinc-300 hover:text-white transition-all duration-150 active:scale-95 text-center cursor-pointer whitespace-nowrap"
                                >
                                    Essential Only
                                </button>
                                <button
                                    type="button"
                                    onClick={handleAcceptAll}
                                    className="px-6 py-2.5 rounded-full bg-white text-black hover:bg-zinc-200 text-xs sm:text-sm font-bold transition-all duration-150 active:scale-95 shadow-sm text-center cursor-pointer whitespace-nowrap"
                                >
                                    Accept All
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.aside>
            )}
        </AnimatePresence>
    );
}
