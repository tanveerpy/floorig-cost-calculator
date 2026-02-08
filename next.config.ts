import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/floorig-cost-calculator',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
