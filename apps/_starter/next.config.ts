import type { NextConfig } from "next";

const config: NextConfig = {
  transpilePackages: ["@demos/blocks"],
  redirects: async () => [{ source: "/", destination: "/en", permanent: false }],
};

export default config;
