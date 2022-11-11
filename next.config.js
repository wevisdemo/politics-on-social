/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  // basePath: "/politics-on-social",
  // assetPrefix: "/politics-on-social/",
  images: {
    unoptimized: true,
  },
  env: {
    BASE_PATH: "/politics-on-social",
    HOST: "https://wevisdemo.github.io",
    SECURE_HOST: "https://wevisdemo.github.io",

    NETLIFY_NEXT_PLUGIN_SKIP: true,
  },
};

module.exports = nextConfig;
