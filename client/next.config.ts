import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["framer-motion", "motion"],

  // OR this, if you want Next.js to transpile it fully:
  // transpilePackages: ["framer-motion", "motion"],
};

export default nextConfig;
