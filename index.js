module.exports = {
  overrideWebpackConfig: ({ webpackConfig, pluginOptions }) => {
    const WebappWebpackPlugin = require("webapp-webpack-plugin");

    webpackConfig.plugins.push(new WebappWebpackPlugin(pluginOptions));

    return webpackConfig;
  }
};
