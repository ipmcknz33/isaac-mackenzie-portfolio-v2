import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async headers() {
    return [
      {
        source: "/assets/:path*.pdf",
        headers: [
          { key: "Content-Disposition", value: "inline" },
          { key: "Content-Type", value: "application/pdf" },
        ],
      },
    ];
  },
};

export default nextConfig;
