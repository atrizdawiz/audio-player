const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.tsx",
  devtool: "source-map",
  mode: "development",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "@teamsupercell/typings-for-css-modules-loader",
            options: {
              // pass all the options for `css-loader` to `css-loader`, eg.
            },
          },
          {
            loader: "css-loader",
            options: {},
          },
        ],
      },
      { test: /\.tsx?$/, exclude: /(node_modules)/, loader: "ts-loader" },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "bundle.js",
  },
  devServer: {
    static: { directory: path.join(__dirname, "public/") },
    port: 3000,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      hash: true, // Cache busting
      filename: "../dist/index.html",
    }),
  ],
};
