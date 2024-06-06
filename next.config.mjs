/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['optimalprice.kr'],
    remotePatterns: [
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
