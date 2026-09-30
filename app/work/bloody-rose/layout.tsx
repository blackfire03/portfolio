import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Bloody Rose Boutique Website Redesign — Hitarth Nayak",
    description: "Website redesign case study for Bloody Rose Boutique by Hitarth Nayak, turning a generic Shopify store into a moody, brand-true alternative fashion experience.",
    alternates: {
        canonical: "https://craftedbyhitarth.vercel.app/work/bloody-rose",
    },
    openGraph: {
        title: "Bloody Rose Boutique Website Redesign — Hitarth Nayak",
        description: "Website redesign case study for Bloody Rose Boutique by Hitarth Nayak, turning a generic Shopify store into a moody, brand-true alternative fashion experience.",
        url: "https://craftedbyhitarth.vercel.app/work/bloody-rose",
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
        title: "Bloody Rose Boutique Website Redesign — Hitarth Nayak",
        description: "Website redesign case study for Bloody Rose Boutique by Hitarth Nayak, turning a generic Shopify store into a moody, brand-true alternative fashion experience.",
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
            name: "Bloody Rose Boutique",
            item: "https://craftedbyhitarth.vercel.app/work/bloody-rose",
        },
    ],
};

const creativeWorkJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Bloody Rose Boutique — Website Redesign",
    headline: "Bloody Rose Boutique Website Redesign",
    description: "Website redesign case study for Bloody Rose Boutique by Hitarth Nayak, turning a generic Shopify store into a moody, brand-true alternative fashion experience.",
    url: "https://craftedbyhitarth.vercel.app/work/bloody-rose",
    image: "https://craftedbyhitarth.vercel.app/work/website-design-projects/bloody-rose.jpg",
    creator: {
        "@type": "Person",
        name: "Hitarth Nayak",
        url: "https://craftedbyhitarth.vercel.app/",
    },
    about: {
        "@type": "Thing",
        name: "Bloody Rose Boutique Alternative Fashion Website Redesign",
    },
};

export default function BloodyRoseLayout({
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
