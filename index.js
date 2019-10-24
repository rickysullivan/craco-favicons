const { throwUnexpectedConfigError } = require("@craco/craco");

const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
  overrideWebpackConfig: ({
    webpackConfig,
    pluginOptions,
    context: { env }
  }) => {
    if (pluginOptions && !pluginOptions.logo) {
      return throwUnexpectedConfigError({
        packageName: "favicons-webpack-plugin",
        githubRepo: "jantimon/favicons-webpack-plugin",
        message: "You must supply a valid logo param.",
        githubIssueQuery: "logo"
      });
    }

    webpackConfig.plugins.push(
      new FaviconsWebpackPlugin(
        pluginOptions
          ? {
              ...pluginOptions,
              devMode: env === "production" ? "webapp" : "light"
            }
          : null
      )
    );

    return webpackConfig;
  }
};
