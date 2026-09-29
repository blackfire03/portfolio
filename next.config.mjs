/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ["image/avif", "image/webp"],
    },
    modularizeImports: {
        "lucide-react": {
            transform: "lucide-react/dist/esm/icons/{{kebabCase member}}",
        },
    },
    async redirects() {
        return [
            {
                source: "/work/website-design",
                destination: "/work/website-design-projects",
                permanent: true,
            },
            {
                source: "/work/brand-identity-projects",
                destination: "/work/brand-identity",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
