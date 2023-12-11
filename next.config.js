/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    typedRoutes: false,
  },
};

module.exports = nextConfig;

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV !== "production",
});

module.exports = withPWA({
  reactStrictMode: true,
  experimental: {
    webpackBuildWorker: true,
  },
});
