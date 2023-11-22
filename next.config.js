/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.dankscreations.com',
      },
    ],
  },
};

module.exports = nextConfig;
