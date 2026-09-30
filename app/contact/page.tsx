import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
    title: "Contact Hitarth Nayak | Freelance Brand & Visual Designer",
    description: "Get in touch with Hitarth Nayak for freelance brand identity, UI/UX, website, graphic design and visual design projects.",
    alternates: {
        canonical: "https://craftedbyhitarth.vercel.app/contact",
    },
    openGraph: {
        title: "Contact Hitarth Nayak | Freelance Brand & Visual Designer",
        description: "Get in touch with Hitarth Nayak for freelance brand identity, UI/UX, website, graphic design and visual design projects.",
        url: "https://craftedbyhitarth.vercel.app/contact",
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
        title: "Contact Hitarth Nayak | Freelance Brand & Visual Designer",
        description: "Get in touch with Hitarth Nayak for freelance brand identity, UI/UX, website, graphic design and visual design projects.",
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
            name: "Contact",
            item: "https://craftedbyhitarth.vercel.app/contact",
        },
    ],
};

export default function ContactPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbJsonLd),
                }}
            />
            <ContactContent />
        </>
    );
}
