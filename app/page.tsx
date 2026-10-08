import type { Metadata } from "next";
import { Scrollytelling } from "@/components/Scrollytelling";
import { HeroInfo } from "@/components/HeroInfo";
import { Skills } from "@/components/Skills";
import { Qualifications } from "@/components/Qualifications";
import { Projects } from "@/components/Projects";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
    title: "Hitarth Nayak — UI/UX & Graphic Designer",
    description: "Portfolio of Hitarth Nayak, a UI/UX and graphic designer specializing in accessible digital experiences, design systems, and brand identities.",
    alternates: {
        canonical: "https://craftedbyhitarth.vercel.app/",
    },
    openGraph: {
        title: "Hitarth Nayak — UI/UX & Graphic Designer",
        description: "Portfolio of Hitarth Nayak, a UI/UX and graphic designer specializing in accessible digital experiences, design systems, and brand identities.",
        url: "https://craftedbyhitarth.vercel.app/",
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
        title: "Hitarth Nayak — UI/UX & Graphic Designer",
        description: "Portfolio of Hitarth Nayak, a UI/UX and graphic designer specializing in accessible digital experiences, design systems, and brand identities.",
        images: ["/opengraph-image.png"],
        creator: "@crafthitarth03",
    },
};

export default function Home() {
    return (
        <main className="min-h-screen bg-[#000000]">
            <Scrollytelling />
            <HeroInfo />
            <Skills />
            <Qualifications />
            <Projects />
            <ContactCTA />
            <Footer />
        </main>
    );
}
