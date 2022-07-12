const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: { "bundle.min": "./src/index.tsx" },
  // entry: "./src/index.tsx",
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
      { test: /\.(mp3|m4a|wav)$/, type: "asset/resource" },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "[name].js",
    assetModuleFilename: "assets/[hash][ext][query]",
    clean: true,
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
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        include: /\.min\.js$/,
      }),
    ],
  },
};
