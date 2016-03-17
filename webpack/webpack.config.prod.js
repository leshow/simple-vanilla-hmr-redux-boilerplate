const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.join(__dirname, '..');
const APP_PATH = `${ROOT_PATH}/src`;

module.exports = {
  devtool: 'source-map',
  entry: `${APP_PATH}/main`,
  output: {
    path: `${ ROOT_PATH }/build`,
    publicPath: '/',
    filename: 'bundle-[hash].js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: `${APP_PATH}/template.html`
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    // new webpack.ProvidePlugin({
    //   'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    // }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        drop_debugger: true
      },
      output: {
        ascii_only: true,
        comments: false
      }
    })
  ],
  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'eslint', exclude: /node_modules/ }
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
