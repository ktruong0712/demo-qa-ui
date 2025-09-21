import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Fix the workspace root warning
  experimental: {
    turbo: {
      root: '/Users/lehang/Desktop/Capstone/demo-qa-ui'
    }
  }
};

export default nextConfig;
