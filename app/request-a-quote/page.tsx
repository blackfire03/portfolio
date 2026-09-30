import type { Metadata } from "next";
import { QuoteContent } from "./QuoteContent";

export const metadata: Metadata = {
    title: "Request a Quote | Hitarth Nayak — Brand, UI/UX & Visual Designer",
    description: "Request a project quote from Hitarth Nayak for brand identity, UI/UX, website design, graphic design, social media design and visual design projects.",
    alternates: {
        canonical: "https://craftedbyhitarth.vercel.app/request-a-quote",
    },
    openGraph: {
        title: "Request a Quote | Hitarth Nayak — Brand, UI/UX & Visual Designer",
        description: "Request a project quote from Hitarth Nayak for brand identity, UI/UX, website design, graphic design, social media design and visual design projects.",
        url: "https://craftedbyhitarth.vercel.app/request-a-quote",
        siteName: "Hitarth Nayak Portfolio",
        images: [
            {
                url: "/opengraph-image.png",
                width: 1200,
                height: 630,
                alt: "Hitarth Nayak - UI/UX & Graphic Designer",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Request a Quote | Hitarth Nayak — Brand, UI/UX & Visual Designer",
        description: "Request a project quote from Hitarth Nayak for brand identity, UI/UX, website design, graphic design, social media design and visual design projects.",
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
            name: "Request a Quote",
            item: "https://craftedbyhitarth.vercel.app/request-a-quote",
        },
    ],
};

export default function RequestAQuotePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbJsonLd),
                }}
            />
            <QuoteContent />
        </>
    );
}
