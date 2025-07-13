import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Development performance optimizations
  experimental: {
    optimizePackageImports: ['antd', '@ant-design/icons'],
  },
  // Optimize images
  images: {
    unoptimized: false,
  },
};

export default nextConfig;
