import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  // GitHub Pages serves the site under /<repo>; the deploy workflow sets this, local dev stays at /
  basePath: process.env.PAGES_BASE_PATH,
};

export default nextConfig;
