/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

const env = process.env.NODE_ENV || "development";

module.exports = {
  mode: env === "production" ? "production" : "development",
  entry: {
    lib: ["./src/index.ts"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    library: "gastromaticons",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /(node_modules)/,
        use: [{ loader: "babel-loader" }],
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
    ],
  },
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "react-dom",
    },
  },
  optimization: {
    minimize: false,
  },
};
