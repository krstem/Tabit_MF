const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "mfApp",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
      library: {type: "module"},

      // For remotes (please adjust)
      name: "mfApp",
      filename: "remoteEntry.js",
      exposes: {
        './App': './projects/mf-app/src/app/app.component.ts',
        './WelcomeComponent': './projects/mf-app/src/app/welcome/welcome.component.ts',
        './ProductsComponent': './projects/mf-app/src/app/products/products.component.ts',
      },

      // For hosts (please adjust)
      // remotes: {
      //   "hostApp": "http://localhost:4200/remoteEntry.js",
      // },

      shared: share({
        "@ngrx/store": {singleton: true, strictVersion: true, requiredVersion: 'auto'},
        "@angular/core": {singleton: true, strictVersion: true, requiredVersion: 'auto'},
        "@angular/common": {singleton: true, strictVersion: true, requiredVersion: 'auto'},
        "@angular/common/http": {singleton: true, strictVersion: true, requiredVersion: 'auto'},
        "@angular/router": {singleton: true, strictVersion: true, requiredVersion: 'auto'},

        ...sharedMappings.getDescriptors()
      })

    }),
    sharedMappings.getPlugin()
  ],
};
