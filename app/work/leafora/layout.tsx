import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Leafora Premium Tea Brand Homepage Design — Hitarth Nayak",
    description: "Homepage design case study for Leafora by Hitarth Nayak, crafting a calm, earthy, and premium digital experience for an artisanal tea brand.",
    alternates: {
        canonical: "https://craftedbyhitarth.vercel.app/work/leafora",
    },
    openGraph: {
        title: "Leafora Premium Tea Brand Homepage Design — Hitarth Nayak",
        description: "Homepage design case study for Leafora by Hitarth Nayak, crafting a calm, earthy, and premium digital experience for an artisanal tea brand.",
        url: "https://craftedbyhitarth.vercel.app/work/leafora",
        images: [
            {
                url: "/opengraph-image.png",
                width: 1200,
                height: 630,
                alt: "Hitarth Nayak - UI/UX & Graphic Designer",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Leafora Premium Tea Brand Homepage Design — Hitarth Nayak",
        description: "Homepage design case study for Leafora by Hitarth Nayak, crafting a calm, earthy, and premium digital experience for an artisanal tea brand.",
        images: ["/opengraph-image.png"],
        creator: "@crafthitarth03",
    },
};

export default function LeaforaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
