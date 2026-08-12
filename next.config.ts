import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/diensten", destination: "/#routes", permanent: true },
      { source: "/diensten/zzp-applicatiebeheerder", destination: "/applicatiemodernisering", permanent: true },
      { source: "/diensten/zzp-functioneel-beheerder", destination: "/workflowmodernisering", permanent: true },
      { source: "/diensten/support-itsm", destination: "/workflowmodernisering", permanent: true },
      { source: "/diensten/it-consultancy", destination: "/modernization-scan", permanent: true },
      { source: "/diensten/full-stack-development", destination: "/applicatiemodernisering", permanent: true },
      { source: "/diensten/productconsultatie", destination: "/modernization-scan", permanent: true },
      { source: "/diensten/product-business-consultatie", destination: "/modernization-scan", permanent: true },
      { source: "/diensten/applicatieconsultatie", destination: "/applicatiemodernisering", permanent: true },
      { source: "/over-mij", destination: "/#over-digitech", permanent: true },
      { source: "/contact", destination: "/kennismaking", permanent: true },
      { source: "/voorwaarden", destination: "/algemene-voorwaarden", permanent: true },
      { source: "/cookiebeleid", destination: "/privacy", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
