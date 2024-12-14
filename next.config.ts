import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: 'build',
  redirects: async () => [
    {
      source: '/',
      destination: '/fr/home',
      permanent: false,
    }
  ]
};

export default nextConfig;
