import { validateMetaAtBuildTime } from './app/lib/meta-validation.js';

// Run meta validation at build time
validateMetaAtBuildTime();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'maas-log-prod.cn-wlcb.ufileos.com',
      },
    ],
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
  },
  // 301 Permanent redirects for renamed routes
  async redirects() {
    return [
      {
        source: '/diensten/applicatieconsultatie',
        destination: '/diensten/it-consultancy',
        permanent: true, // 301 redirect
      },
      {
        source: '/diensten/applicatieconsultatie/:path*',
        destination: '/diensten/it-consultancy/:path*',
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
