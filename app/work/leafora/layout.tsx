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

const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://craftedbyhitarth.vercel.app/",
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "Work",
            item: "https://craftedbyhitarth.vercel.app/work",
        },
        {
            "@type": "ListItem",
            position: 3,
            name: "Website Design Projects",
            item: "https://craftedbyhitarth.vercel.app/work/website-design-projects",
        },
        {
            "@type": "ListItem",
            position: 4,
            name: "Leafora",
            item: "https://craftedbyhitarth.vercel.app/work/leafora",
        },
    ],
};

const creativeWorkJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Leafora — Premium Tea Brand Homepage Design",
    headline: "Leafora Premium Tea Brand Homepage Design",
    description: "Homepage design case study for Leafora by Hitarth Nayak, crafting a calm, earthy, and premium digital experience for an artisanal tea brand.",
    url: "https://craftedbyhitarth.vercel.app/work/leafora",
    image: "https://craftedbyhitarth.vercel.app/work/website-design-projects/leafora.jpg",
    creator: {
        "@type": "Person",
        name: "Hitarth Nayak",
        url: "https://craftedbyhitarth.vercel.app/",
    },
    about: {
        "@type": "Thing",
        name: "Leafora Artisanal Tea Brand Homepage Design",
    },
};

export default function LeaforaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbJsonLd),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(creativeWorkJsonLd),
                }}
            />
            {children}
        </>
    );
}
