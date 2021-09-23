module.exports = {
  module: {
    rules: [
      // define loaders
      {
        test: /\.m?js$/, // babel processes .mjs & .js files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'], // adds additional code to help with modern syntax
          },
        },
      },
    ],
  },
};
