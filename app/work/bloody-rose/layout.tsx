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

export default function BloodyRoseLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
