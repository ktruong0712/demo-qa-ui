import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  eslint: {
    // Only run ESLint on these directories during production builds
    dirs: ['src/pages', 'src/components'],
    // Don't fail the build on ESLint errors
    ignoreDuringBuilds: false,
  },
  typescript: {
    // Don't fail the build on TypeScript errors
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
