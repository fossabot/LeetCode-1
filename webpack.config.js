/* eslint-env node */
const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const output = {
  path: path.join(__dirname, 'dist'),
  name: '[name].built.js',
};

const dirStrings = fs.readdirSync(path.join(__dirname, 'Problems'));
const dirArray = Array(731);
// eslint-disable-next-line no-restricted-syntax
dirStrings.forEach((dirName) => {
  const dirNum = parseInt(dirName, 10);
  if (!Number.isNaN(dirNum)) {
    dirArray[dirNum] = dirName;
  }
});

const itemNumber = 24;
const appName = dirArray[itemNumber];
const jsFile = path.join(__dirname, `Problems/${appName}/main.js`);

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
    loaders: [{}],
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
