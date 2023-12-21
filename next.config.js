/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // output: "standalone",
  images: {
    unoptimized: true,
  }
//   basePath: "",
//   experimental: {
//   appDir: true,
// },
};

module.exports = nextConfig;
