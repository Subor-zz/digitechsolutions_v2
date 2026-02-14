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
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
  // 301 Permanent redirects for renamed routes
  async redirects() {
    return [
      // Legacy fractional CTO pages redirect to new ZZP pages
      {
        source: '/diensten/fractional-cto',
        destination: '/diensten/zzp-applicatiebeheerder',
        permanent: true, // 301 redirect
      },
      {
        source: '/diensten/fractional-cto/:path*',
        destination: '/diensten/zzp-applicatiebeheerder/:path*',
        permanent: true, // 301 redirect
      },
      // Legacy IT consultancy page redirect to functioneel beheer
      {
        source: '/diensten/it-consultancy',
        destination: '/diensten/zzp-functioneel-beheerder',
        permanent: true, // 301 redirect
      },
      {
        source: '/diensten/it-consultancy/:path*',
        destination: '/diensten/zzp-functioneel-beheerder/:path*',
        permanent: true, // 301 redirect
      },
      // Legacy applicatieconsultatie redirect (existing)
      {
        source: '/diensten/applicatieconsultatie',
        destination: '/diensten/zzp-functioneel-beheerder',
        permanent: true, // 301 redirect
      },
      {
        source: '/diensten/applicatieconsultatie/:path*',
        destination: '/diensten/zzp-functioneel-beheerder/:path*',
        permanent: true, // 301 redirect
      },
      // Legacy technical strategy redirect
      {
        source: '/diensten/technical-strategy',
        destination: '/diensten/zzp-applicatiebeheerder',
        permanent: true, // 301 redirect
      },
      {
        source: '/diensten/technical-strategy/:path*',
        destination: '/diensten/zzp-applicatiebeheerder/:path*',
        permanent: true, // 301 redirect
      },
      // Legacy projectmanagement redirect
      {
        source: '/diensten/projectmanagement',
        destination: '/diensten/it-project-manager',
        permanent: true, // 301 redirect
      },
      {
        source: '/diensten/projectmanagement/:path*',
        destination: '/diensten/it-project-manager/:path*',
        permanent: true, // 301 redirect
      },
      // Legacy product-business-consultatie redirect
      {
        source: '/diensten/product-business-consultatie',
        destination: '/diensten/productconsultatie',
        permanent: true, // 301 redirect
      },
      {
        source: '/diensten/product-business-consultatie/:path*',
        destination: '/diensten/productconsultatie/:path*',
        permanent: true, // 301 redirect
      },
      // Legacy it-consultant-breda redirect
      {
        source: '/it-consultant-breda',
        destination: '/diensten/zzp-applicatiebeheerder',
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
