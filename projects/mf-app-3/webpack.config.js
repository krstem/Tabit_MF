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
    uniqueName: "mfApp3",
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
      name: "mfApp3",
      filename: "remoteEntry.js",
      exposes: {
        './LoginInside': './projects/mf-app-3/src/app/login/login.component.ts',
        './Profile': './projects/mf-app-3/src/app/profile/profile.component.ts',
      },

      // For hosts (please adjust)
      // remotes: {
      //     "hostApp": "http://localhost:4200/remoteEntry.js",
      //     "mfApp": "http://localhost:4300/remoteEntry.js",
      //     "mfApp2": "http://localhost:4500/remoteEntry.js",

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
