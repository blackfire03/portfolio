import Link from "next/link";

interface FooterProps {
    maxWidth?: string;
    className?: string;
}

export function Footer({ maxWidth = "max-w-7xl", className = "" }: FooterProps) {
    return (
        <footer className={`border-t border-white/10 bg-[#121212] py-12 px-6 md:px-12 lg:px-24 ${className}`}>
            <div className={`${maxWidth} mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-400 text-sm font-light`}>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2 text-center md:text-left">
                    <p>© {new Date().getFullYear()} Hitarth Nayak. All rights reserved.</p>
                    <span className="hidden sm:inline text-white/20" aria-hidden="true">|</span>
                    <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span className="text-white/20" aria-hidden="true">|</span>
                        <Link href="/work" className="hover:text-white transition-colors">All Work</Link>
                        <span className="text-white/20" aria-hidden="true">|</span>
                        <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                        <span className="text-white/20" aria-hidden="true">|</span>
                        <Link href="/request-a-quote" className="hover:text-white transition-colors">Request a Quote</Link>
                        <span className="text-white/20" aria-hidden="true">|</span>
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <span className="text-white/20" aria-hidden="true">|</span>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                    </nav>
                </div>
                <div className="flex gap-6 shrink-0">
                    <a href="https://www.instagram.com/craftedbyhitarth/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
                    <a href="https://x.com/crafthitarth03" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
                    <a href="https://in.linkedin.com/in/hitarth-n-268316304" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="https://github.com/blackfire03" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                </div>
            </div>
        </footer>
    );
}
