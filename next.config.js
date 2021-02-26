module.exports = {
  async redirects() {
    return [
      {
        source: "/download/:sercli*",
        destination: "/install/:sercli*", // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: "/team",
        destination: "/about", // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: "/developers",
        destination: "/about", // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: "/staff",
        destination: "/about", // Matched parameters can be used in the destination
        permanent: true,
      },
    ];
  },
};
