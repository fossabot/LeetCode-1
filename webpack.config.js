/* eslint-env node */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const output = {
  path: path.join(__dirname, 'dist'),
  name: '[name].built.js',
};

const appName = '19. Remove Nth Node From End of List';
const jsFile = path.join(__dirname, `Problems/0${appName}/${appName}.js`);

module.exports = {
  entry: {
    app: jsFile,
  },
  output: {
    path: output.path,
    filename: output.name,
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: `LeetCode - ${appName}`,
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
    ],
  },
  devServer: {
    host: '0.0.0.0',
    port: 10080,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
};
