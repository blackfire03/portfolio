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
            name: "Quack's 43rd Street Bakery",
            item: "https://craftedbyhitarth.vercel.app/work/quacks-bakery",
        },
    ],
};

const creativeWorkJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Quack's 43rd Street Bakery — Website Redesign",
    headline: "Quack's 43rd Street Bakery Website Redesign",
    description: "Website redesign case study for Quack's 43rd Street Bakery by Hitarth Nayak, transforming an iconic Austin bakery into a story-driven digital storefront.",
    url: "https://craftedbyhitarth.vercel.app/work/quacks-bakery",
    image: "https://craftedbyhitarth.vercel.app/work/website-design-projects/quacks.jpg",
    creator: {
        "@type": "Person",
        name: "Hitarth Nayak",
        url: "https://craftedbyhitarth.vercel.app/",
    },
    about: {
        "@type": "Thing",
        name: "Quack's 43rd Street Bakery Website Redesign",
    },
};

export default function QuacksBakeryLayout({
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
