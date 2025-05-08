const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  swcMinify: true,
  // Add other Next.js configurations here if needed
};

// Apply the plugin directly to the nextConfig
module.exports = withBundleAnalyzer(nextConfig);