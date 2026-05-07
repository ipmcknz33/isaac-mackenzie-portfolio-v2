import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async headers() {
    return [
      {
        source: "/assets/isaac-resume.pdf",
        headers: [{ key: "Content-Disposition", value: "inline" }],
      },
      {
        source: "/assets/isaac-certificate.pdf",
        headers: [{ key: "Content-Disposition", value: "inline" }],
      },
    ];
  },
};

export default nextConfig;
