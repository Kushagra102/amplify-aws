/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "3dc.opensutd.org",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
