import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "All Work & Projects — Hitarth Nayak",
    description: "Explore selected design work by Hitarth Nayak, including website design case studies, social media creative campaigns, and brand identity projects.",
    alternates: {
        canonical: "https://craftedbyhitarth.vercel.app/work",
    },
    openGraph: {
        title: "All Work & Projects — Hitarth Nayak",
        description: "Explore selected design work by Hitarth Nayak, including website design case studies, social media creative campaigns, and brand identity projects.",
        url: "https://craftedbyhitarth.vercel.app/work",
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
        title: "All Work & Projects — Hitarth Nayak",
        description: "Explore selected design work by Hitarth Nayak, including website design case studies, social media creative campaigns, and brand identity projects.",
        images: ["/opengraph-image.png"],
        creator: "@crafthitarth03",
    },
};

export default function WorkLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
