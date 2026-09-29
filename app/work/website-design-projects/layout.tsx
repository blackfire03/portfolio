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

export default function WebsiteDesignProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
