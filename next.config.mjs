/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.optimalprice.kr',
        port: '',
        pathname: '/cat01.webp',
      },
      {
        protocol: 'https',
        hostname: 'cdn.optimalprice.kr',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'optimalprice.kr',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
