import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Veyra Skincare Social Media Content Design — Hitarth Nayak",
    description: "A 7-day social media launch campaign for Veyra skincare by Hitarth Nayak, emphasizing quiet luxury, editorial typography, and high negative space.",
    alternates: {
        canonical: "https://craftedbyhitarth.vercel.app/work/veyra",
    },
    openGraph: {
        title: "Veyra Skincare Social Media Content Design — Hitarth Nayak",
        description: "A 7-day social media launch campaign for Veyra skincare by Hitarth Nayak, emphasizing quiet luxury, editorial typography, and high negative space.",
        url: "https://craftedbyhitarth.vercel.app/work/veyra",
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
        title: "Veyra Skincare Social Media Content Design — Hitarth Nayak",
        description: "A 7-day social media launch campaign for Veyra skincare by Hitarth Nayak, emphasizing quiet luxury, editorial typography, and high negative space.",
        images: ["/opengraph-image.png"],
        creator: "@crafthitarth03",
    },
};

export default function VeyraLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
