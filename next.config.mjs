/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  turbopack: {
    root: process.cwd()
  },

  // Headers de sécurité
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY', // Empêche l'affichage dans une iframe
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff', // Force le respect du Content-Type
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin', // Limite les infos envoyées aux sites externes
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()', // Désactive caméra/micro/GPS
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on', // Active le prefetch DNS pour meilleures perfs
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains', // Force HTTPS (une fois en prod)
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://api.emailjs.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https:",
              "font-src 'self' data:",
              "connect-src 'self' https://api.emailjs.com https://www.google-analytics.com https://www.googletagmanager.com",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
