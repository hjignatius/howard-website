import type { NextConfig } from "next";

// howardignatius.com is canonical. Everything else — the www variant and both
// nocturnography.com hosts, which have no separate site — redirects to it.
const ALIASES = [
  "www.howardignatius.com",
  "nocturnography.com",
  "www.nocturnography.com",
];

const nextConfig: NextConfig = {
  async redirects() {
    return ALIASES.map((host) => ({
      source: "/:path*",
      has: [{ type: "host" as const, value: host }],
      destination: "https://howardignatius.com/:path*",
      permanent: true,
    }));
  },
};

export default nextConfig;
