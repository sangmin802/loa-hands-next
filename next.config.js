// module.exports = {
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.node = {
//         dgram: "empty",
//         fs: "empty",
//         net: "empty",
//         tls: "empty",
//         child_process: "empty",
//       };
//     } else {
//     }
//     return config;
//   },
// };
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

module.exports = withCSS({
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          name: "[name].ext",
        },
      },
    });

    if (!isServer) {
      config.node = {
        dgram: "empty",
        fs: "empty",
        net: "empty",
        tls: "empty",
        child_process: "empty",
      };
    }

    return config;
  },
});
