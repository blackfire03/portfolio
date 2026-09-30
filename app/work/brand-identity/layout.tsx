import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Brand Identity Projects — Hitarth Nayak",
    description: "Brand identity design projects by Hitarth Nayak, focusing on cohesive visual systems, logo design, color palettes, and brand guidelines.",
    alternates: {
        canonical: "https://craftedbyhitarth.vercel.app/work/brand-identity",
    },
    openGraph: {
        title: "Brand Identity Projects — Hitarth Nayak",
        description: "Brand identity design projects by Hitarth Nayak, focusing on cohesive visual systems, logo design, color palettes, and brand guidelines.",
        url: "https://craftedbyhitarth.vercel.app/work/brand-identity",
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
        title: "Brand Identity Projects — Hitarth Nayak",
        description: "Brand identity design projects by Hitarth Nayak, focusing on cohesive visual systems, logo design, color palettes, and brand guidelines.",
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
            name: "Brand Identity Projects",
            item: "https://craftedbyhitarth.vercel.app/work/brand-identity",
        },
    ],
};

export default function BrandIdentityLayout({
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
            {children}
        </>
    );
}
