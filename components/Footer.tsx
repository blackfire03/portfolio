import Link from "next/link";

interface FooterProps {
    maxWidth?: string;
    className?: string;
}

export function Footer({ maxWidth = "max-w-7xl", className = "" }: FooterProps) {
    return (
        <footer className={`border-t border-white/10 bg-[#121212] py-12 px-6 md:px-12 lg:px-24 ${className}`}>
            <div className={`${maxWidth} mx-auto grid grid-cols-1 xl:grid-cols-[1fr_auto_1fr] items-center gap-6 xl:gap-8 text-zinc-400 text-sm font-light`}>
                {/* Zone 1: Copyright (Left-aligned) */}
                <div className="justify-self-start text-left">
                    <p className="xl:whitespace-nowrap">© {new Date().getFullYear()} Hitarth Nayak. All rights reserved.</p>
                </div>

                {/* Zone 2: Main Navigation (Centered) */}
                <nav aria-label="Footer Navigation" className="justify-self-start xl:justify-self-center flex flex-wrap items-center justify-start xl:justify-center gap-x-5 lg:gap-x-6 gap-y-2.5">
                    <Link href="/" className="hover:text-white transition-colors whitespace-nowrap">Home</Link>
                    <Link href="/work" className="hover:text-white transition-colors whitespace-nowrap">All Work</Link>
                    <Link href="/contact" className="hover:text-white transition-colors whitespace-nowrap">Contact</Link>
                    <Link href="/request-a-quote" className="hover:text-white transition-colors whitespace-nowrap">Request a Quote</Link>
                    <Link href="/privacy-policy" className="hover:text-white transition-colors whitespace-nowrap">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-white transition-colors whitespace-nowrap">Terms</Link>
                </nav>

                {/* Zone 3: Social Links (Right-aligned) */}
                <div className="justify-self-start xl:justify-self-end flex flex-wrap items-center justify-start xl:justify-end gap-5 lg:gap-6">
                    <a href="https://www.instagram.com/craftedbyhitarth/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors whitespace-nowrap">Instagram</a>
                    <a href="https://x.com/crafthitarth03" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors whitespace-nowrap">Twitter</a>
                    <a href="https://in.linkedin.com/in/hitarth-n-268316304" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors whitespace-nowrap">LinkedIn</a>
                    <a href="https://github.com/blackfire03" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors whitespace-nowrap">GitHub</a>
                </div>
            </div>
        </footer>
    );
}
