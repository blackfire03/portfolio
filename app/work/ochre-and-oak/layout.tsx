import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ochre & Oak Social Media & Mascot Design — Hitarth Nayak",
    description: "A 7-day social media campaign and custom brand mascot design for Ochre & Oak specialty coffee café, created by Hitarth Nayak.",
    alternates: {
        canonical: "https://craftedbyhitarth.vercel.app/work/ochre-and-oak",
    },
    openGraph: {
        title: "Ochre & Oak Social Media & Mascot Design — Hitarth Nayak",
        description: "A 7-day social media campaign and custom brand mascot design for Ochre & Oak specialty coffee café, created by Hitarth Nayak.",
        url: "https://craftedbyhitarth.vercel.app/work/ochre-and-oak",
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
        title: "Ochre & Oak Social Media & Mascot Design — Hitarth Nayak",
        description: "A 7-day social media campaign and custom brand mascot design for Ochre & Oak specialty coffee café, created by Hitarth Nayak.",
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
            name: "Ochre & Oak",
            item: "https://craftedbyhitarth.vercel.app/work/ochre-and-oak",
        },
    ],
};

const creativeWorkJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Ochre & Oak — Café Social Media Content & Mascot Design",
    headline: "Ochre & Oak Café Social Media Content & Mascot Design",
    description: "A 7-day social media campaign and custom brand mascot design for Ochre & Oak specialty coffee café, created by Hitarth Nayak.",
    url: "https://craftedbyhitarth.vercel.app/work/ochre-and-oak",
    image: "https://craftedbyhitarth.vercel.app/work/ochre-oak/card_thumbnail.jpg",
    creator: {
        "@type": "Person",
        name: "Hitarth Nayak",
        url: "https://craftedbyhitarth.vercel.app/",
    },
    about: {
        "@type": "Thing",
        name: "Ochre & Oak Specialty Coffee Café 7-Day Social Media Campaign",
    },
};

export default function OchreAndOakLayout({
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
