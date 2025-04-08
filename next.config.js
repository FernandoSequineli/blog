const { withFaust, getWpHostname } = require("@faustwp/core");

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withFaust({});

module.exports = {
  async headers() {
    return [
      {
        source: "/blog",
        headers: [
          {
            key: "cache-control",
            value: "max-age=9999999",
          },
        ],
      },
    ];
  },
};
