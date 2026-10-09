"use client";

export function CookiePreferenceButton() {
    const handleOpen = () => {
        if (typeof window !== "undefined") {
            window.dispatchEvent(new Event("open-cookie-banner"));
        }
    };

    return (
        <button
            type="button"
            onClick={handleOpen}
            className="inline-flex items-center gap-2 text-white underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors font-medium cursor-pointer text-sm"
        >
            Change cookie preferences
        </button>
    );
}
