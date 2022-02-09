const path = require("path");
const webpack = require("webpack");

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
          plugins: [],
        },
      },
    ],
  }, // 적용
  plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  }, // 출력
};
