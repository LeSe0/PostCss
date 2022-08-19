module.exports = {
  plugins: [
    "postcss-import",
    "postcss-url",
    "postcss-nested",
    "postcss-short",
    [
      "postcss-preset-env",
      {
        browsers: "last 2 versions",
        stage: 0,
      },
    ],
  ],
};
