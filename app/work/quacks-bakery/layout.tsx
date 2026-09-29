import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Quack's 43rd Street Bakery Website Redesign — Hitarth Nayak",
    description: "Website redesign case study for Quack's 43rd Street Bakery by Hitarth Nayak, transforming an iconic Austin bakery into a story-driven digital storefront.",
    alternates: {
        canonical: "https://craftedbyhitarth.vercel.app/work/quacks-bakery",
    },
    openGraph: {
        title: "Quack's 43rd Street Bakery Website Redesign — Hitarth Nayak",
        description: "Website redesign case study for Quack's 43rd Street Bakery by Hitarth Nayak, transforming an iconic Austin bakery into a story-driven digital storefront.",
        url: "https://craftedbyhitarth.vercel.app/work/quacks-bakery",
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
        title: "Quack's 43rd Street Bakery Website Redesign — Hitarth Nayak",
        description: "Website redesign case study for Quack's 43rd Street Bakery by Hitarth Nayak, transforming an iconic Austin bakery into a story-driven digital storefront.",
        images: ["/opengraph-image.png"],
        creator: "@crafthitarth03",
    },
};

export default function QuacksBakeryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
