import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Website Design Projects — Hitarth Nayak",
    description: "Website design case studies and redesign projects by Hitarth Nayak, focused on usability, storytelling, and high-impact digital experiences.",
    alternates: {
        canonical: "https://craftedbyhitarth.vercel.app/work/website-design-projects",
    },
    openGraph: {
        title: "Website Design Projects — Hitarth Nayak",
        description: "Website design case studies and redesign projects by Hitarth Nayak, focused on usability, storytelling, and high-impact digital experiences.",
        url: "https://craftedbyhitarth.vercel.app/work/website-design-projects",
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
        title: "Website Design Projects — Hitarth Nayak",
        description: "Website design case studies and redesign projects by Hitarth Nayak, focused on usability, storytelling, and high-impact digital experiences.",
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
    ],
};

export default function WebsiteDesignProjectsLayout({
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
