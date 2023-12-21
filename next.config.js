/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // images: {
  //   unoptimized: true,
  // }
  basePath: "https://slr-app.vercel.app",
  output: "standalone",
  experimental: {
  appDir: true,
},
};

module.exports = nextConfig;
