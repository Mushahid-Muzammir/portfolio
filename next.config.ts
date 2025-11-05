
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
experimental: {
    // @ts-expect-error - 'turbo' is not part of ExperimentalConfig in this Next version
    turbo: true, // default in Next 16, safe
  },};

export default nextConfig;
