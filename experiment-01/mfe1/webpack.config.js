const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "auto",
    uniqueName: "poc",
    scriptType: "text/javascript",
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "poc",
      library: { type: "var", name: "poc" },
      filename: "remoteEntry.js",
      exposes: {
        "./web-components": "./src/bootstrap.ts",
      },

      shared: {
        "@angular/core": { requiredVersion: false },
        "@angular/common": { requiredVersion: false },
        "@angular/router": { requiredVersion: false },
        rxjs: {},
      },
    }),
  ],
};
