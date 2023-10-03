const path = require("path");
const { DefinePlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { getProdRemoteEntryUrl } = require("./webpack.utils");

module.exports = {
  mode: "production",
  plugins: [
    new DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
      },
    }),
    new HtmlWebpackPlugin({
      title: "Building Scalable and Modular Web Applications with React, Micro Frontends and Webpack Module Federation",
      template: path.resolve(__dirname, "..", "./src/index.html"),
      app1RemoteEntry: getProdRemoteEntryUrl("https://mfe-app1.vercel.app"),
      app2RemoteEntry: getProdRemoteEntryUrl("https://mfe-app2.vercel.app"),
    }),
  ],
  devtool: "source-map",
};