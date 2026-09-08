import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone output produces a minimal server bundle, ideal for Docker.
  output: "standalone",
};

export default nextConfig;
