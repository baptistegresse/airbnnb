import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => [
    {
      source: '/',
      destination: '/fr/home',
      permanent: false,
    }
  ]
};

export default nextConfig;
