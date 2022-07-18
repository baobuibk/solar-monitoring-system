module.exports = function (context, options) {
    return {
      name: "my-loaders",
      configureWebpack(config, isServer) {
        return {
          module: {
            rules: [{ test: /\.yaml$/, use: "yaml-loader" }],
          },
        };
      },
    };
  };
  