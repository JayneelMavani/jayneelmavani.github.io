// next.config.mjs
import { withContentCollections } from "@content-collections/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  // Remove swcMinify (deprecated in Next 15+, not a valid key)
  // Remove headers() — doesn't work with output: export
};

export default withContentCollections(nextConfig);