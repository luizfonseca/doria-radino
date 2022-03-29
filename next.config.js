/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.ctfassets.net"],
  },
  reactStrictMode: true,
  i18n: {
    locales: ["en-US", "fr", "de", "it"],
    defaultLocale: "en-US",
  },
  headers: async () => {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Referrer-Policy",
            value: "same-origin",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
