import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
    formats: ["image/webp"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/admin", destination: "https://admin.intactic.net", permanent: false },
      { source: "/admin/:path*", destination: "https://admin.intactic.net/:path*", permanent: false },
      { source: "/privacy", destination: "/privacy-cookies", permanent: true },
      { source: "/privacy-policy", destination: "/privacy-cookies", permanent: true },
      { source: "/cookies", destination: "/privacy-cookies", permanent: true },
      { source: "/terms", destination: "/terms-policies", permanent: true },
    ];
  },
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "@radix-ui/react-accordion",
      "@radix-ui/react-dialog",
      "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-select",
      "@radix-ui/react-tabs",
      "@radix-ui/react-tooltip",
      "framer-motion",
      "recharts",
    ],
  },
};

export default nextConfig;
