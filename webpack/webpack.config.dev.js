const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.join(__dirname, '..');
const APP_PATH = `${ROOT_PATH}/src`;

module.exports = {
  context: APP_PATH,
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    `${APP_PATH}/main`
  ],
  output: {
    path: `${ ROOT_PATH }/build`,
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
  ],
  module: {
    preLoaders: [
      { test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/ }
    ],
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass',
        exclude: /node_modules/
      }
    ]
  }
};
