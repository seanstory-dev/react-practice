const path = require("path");
const webpack = require("webpack");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  name: "word-chain-setup",
  mode: "development", // production
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"], // 타입스크립트 사용 시 변경
  },

  entry: {
    app: ["./client"],
  }, // 입력
  module: {
    rules: [
      {
        test: /\.jsx?$/, // 타입스크립트 사용 시 변경
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 5% in KR"], // browserslist(https://github.com/browserslist/browserslist#full-list)
                },
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          plugins: ["react-refresh/babel"],
        },
      },
    ],
  }, // 적용
  plugins: [new RefreshWebpackPlugin()],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
    publicPath: "/dist/",
  }, // 출력
  devServer: {
    devMiddleware: { publicPath: "/dist/" }, // 웹팩이 생성해주는 경로
    static: { directory: path.resolve(__dirname) },
    hot: true,
  },
};
