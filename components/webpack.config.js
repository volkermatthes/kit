const webpack = require("webpack");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const fs = require("fs");

const appDirectory = fs.realpathSync(process.cwd());

// Gets absolute path of file within app directory
const resolveAppPath = (relativePath) =>
  path.resolve(appDirectory, relativePath);

// Host
const host = process.env.HOST || "localhost";

const env = process.env.NODE_ENV || "development";

module.exports = {
  mode: env === "production" ? "production" : "development",
  context: __dirname,
  entry: {
    lib: ["./src/index.ts"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    library: "kit",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  devServer: {
    hot: true,
    contentBase: "./",
    historyApiFallback: true,
  },
  resolve: {
    extensions: [
      ".js",
      ".jsx",
      ".json",
      ".ts",
      ".tsx",
      "less",
      "scss",
      "svg",
      "woff",
      "ttf",
      "eot",
    ],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        include: path.resolve(__dirname, "src"),
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        // Preprocess our own .css files
        // This is the place to add your own loaders (e.g. sass/less etc.)
        // for a list of loaders, see https://webpack.js.org/loaders/#styling
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "less-loader", "sass-loader"],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "less-loader", // compiles Less to CSS
          },
        ],
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: [path.resolve(__dirname, "node_modules")],
              },
            },
          },
        ],
      },
      {
        // Preprocess 3rd party .css files located in node_modules
        test: /\.css$/,
        include: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
