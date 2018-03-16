const webpack = require('webpack');
const path = require('path');
const loaders = require('./loaders');

const SOURCE_FOLDER = path.resolve(__dirname, '../src');
const BUILD_FOLDER = path.resolve(__dirname, '../build');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const plugins = [];
plugins.push(new CleanWebpackPlugin([BUILD_FOLDER]));

module.exports = {
  mode: 'production',
  entry: SOURCE_FOLDER + '/deni-react-modal/deni-react-modal.jsx',
  output: {
    path: BUILD_FOLDER,
    filename: 'deni-react-modal.js',
    library: 'DeniReactModal',
    libraryTarget: 'umd'
  },
  module: {
    rules: loaders
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
