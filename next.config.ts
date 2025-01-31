import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['softstar.s3.amazonaws.com'],
  },
}

export default nextConfig
