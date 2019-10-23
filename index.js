module.exports = {
  overrideWebpackConfig: ({ webpackConfig, pluginOptions }) => {
    const AppManifestWebpackPlugin = require("app-manifest-webpack-plugin");

    const pluginInstance = new AppManifestWebpackPlugin(pluginOptions);

    webpackConfig.plugins.push(pluginInstance);

    return webpackConfig;
  }
};
