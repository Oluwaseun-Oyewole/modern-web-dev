module.exports = {
  entry: "./index.jsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Target JavaScript files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Use babel-loader
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
    ],
  },
  devServer: {
    static: "./dist",
    port: 3000,
  },
};
