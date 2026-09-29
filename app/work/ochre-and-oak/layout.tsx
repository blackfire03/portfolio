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

export default function OchreAndOakLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
