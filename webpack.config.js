const path = require("path");

module.exports = {
  entry: "./index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/, // Target JavaScript files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Use babel-loader
        },
      },
    ],
  },
};
