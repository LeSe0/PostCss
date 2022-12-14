module.exports = {
  test: /\.css$/,
  use: [
    { loader: "style-loader" },
    {
      loader: "css-loader",
      options: {
        importLoaders: 1,
        modules: true,
        localIdentName: "[path]___[name]__[local]___[hash:base64:5]",
      },
    },
    { loader: "postcss-loader" },
  ],
};
