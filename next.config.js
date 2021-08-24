/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/first",
        destination: "/",
        permanent: true,
      },
      {
        source: "/download/:sercli*",
        destination: "/install/:sercli*", // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: "/team",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/developers",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/staff",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/help",
        destination: "/troubleshooting",
        permanent: true,
      },
    ];
  },
};
