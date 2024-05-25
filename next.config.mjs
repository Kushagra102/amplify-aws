/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "3dc.opensutd.org",
        protocol: "https",
      },
      {
        hostname: "test-slate-data.s3.ap-southeast-1.amazonaws.com",
        protocol: "https",
      }
    ],
  },
};

export default nextConfig;
