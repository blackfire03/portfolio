import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Social Media Creatives — Hitarth Nayak",
    description: "Social media campaigns, single posts, and carousel content series designed by Hitarth Nayak to build brand engagement and visual consistency.",
    alternates: {
        canonical: "https://craftedbyhitarth.vercel.app/work/social-media-creatives",
    },
    openGraph: {
        title: "Social Media Creatives — Hitarth Nayak",
        description: "Social media campaigns, single posts, and carousel content series designed by Hitarth Nayak to build brand engagement and visual consistency.",
        url: "https://craftedbyhitarth.vercel.app/work/social-media-creatives",
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
        title: "Social Media Creatives — Hitarth Nayak",
        description: "Social media campaigns, single posts, and carousel content series designed by Hitarth Nayak to build brand engagement and visual consistency.",
        images: ["/opengraph-image.png"],
        creator: "@crafthitarth03",
    },
};

export default function SocialMediaCreativesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
