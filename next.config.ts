import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "biyopos.com" },
      { hostname: "encrypted-tbn0.gstatic.com" },
      { hostname: "www.shutterstock.com" },
      { hostname: "static01.nyt.com" },
    ],
  },
};

export default nextConfig;
