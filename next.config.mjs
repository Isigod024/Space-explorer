

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'th.bing.com',
      },
      {
        protocol: 'https',
        hostname: 'www.stelvision.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: 'www.schoolap.com',
      },
      {
        protocol: 'https',
        hostname: 'tse4.mm.bing.net',
      },
      {
        protocol: 'https',
        hostname: 'tse3.mm.bing.net',
      },
      {
        protocol: 'https',
        hostname: 'tse1.mm.bing.net',
      },
      {
        protocol: 'https',
        hostname: 'tse1.explicit.bing.net',
      },
    ],
  },
  ...nextI18NextConfig,
};

export default nextConfig;
