// @ts-check
const { startDevServer } = require("@cypress/webpack-dev-server");
const webpackConfig = require("@vue/cli-service/webpack.config");

/**
 * @type Cypress.PluginConfig
 */
module.exports = (on, config) => {
  on("dev-server:start", (options) =>
    startDevServer({ options, webpackConfig })
  );

  return config;
};
