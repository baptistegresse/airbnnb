import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirect() {
    return [
      {
        source: '/:path*',
        destination: '/home',
        permanent: false,
        statusCode: 404
      }
    ];
  }
};

export default nextConfig;
