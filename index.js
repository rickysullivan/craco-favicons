const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
  overrideWebpackConfig: ({ webpackConfig, pluginOptions }) => {
    webpackConfig.plugins.push(new FaviconsWebpackPlugin(pluginOptions));

    return webpackConfig;
  }
};
