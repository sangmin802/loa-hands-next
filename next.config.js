module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        dgram: "empty",
        fs: "empty",
        net: "empty",
        tls: "empty",
        child_process: "empty",
      };
    } else {
    }
    return config;
  },
};

const withCSS = require("@zeit/next-css");
module.exports = withCSS(() => {
  return {
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]",
    },
  };
});
