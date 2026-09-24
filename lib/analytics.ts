// Lightweight analytics event dispatcher for Google Tag Manager
export function sendGAEvent(...args: unknown[]) {
    if (typeof window !== "undefined") {
        (window as unknown as { dataLayer: unknown[] }).dataLayer =
            (window as unknown as { dataLayer: unknown[] }).dataLayer || [];
        if (args.length >= 2 && args[0] === "event" && typeof args[1] === "string") {
            const eventParams = typeof args[2] === "object" && args[2] !== null ? args[2] : {};
            (window as unknown as { dataLayer: unknown[] }).dataLayer.push({
                event: args[1],
                ...eventParams,
            });
        } else {
            (window as unknown as { dataLayer: unknown[] }).dataLayer.push(args);
        }
    }
}
