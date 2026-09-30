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
            name: "Social Media Creatives",
            item: "https://craftedbyhitarth.vercel.app/work/social-media-creatives",
        },
        {
            "@type": "ListItem",
            position: 4,
            name: "Veyra",
            item: "https://craftedbyhitarth.vercel.app/work/veyra",
        },
    ],
};

const creativeWorkJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Veyra — Skincare Brand & Social Media Content Design",
    headline: "Veyra Skincare Brand & Social Media Content Design",
    description: "A 7-day social media launch campaign for Veyra skincare by Hitarth Nayak, emphasizing quiet luxury, editorial typography, and high negative space.",
    url: "https://craftedbyhitarth.vercel.app/work/veyra",
    image: "https://craftedbyhitarth.vercel.app/work/veyra/logo.jpg",
    creator: {
        "@type": "Person",
        name: "Hitarth Nayak",
        url: "https://craftedbyhitarth.vercel.app/",
    },
    about: {
        "@type": "Thing",
        name: "Veyra Clean Skincare 7-Day Social Media Launch Campaign",
    },
};

export default function VeyraLayout({
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
