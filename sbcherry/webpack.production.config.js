var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: {
    app: path.resolve(__dirname, './src/app.js'),
    vendors: ['react'] // And other vendors
  },
  output: {
    path: path.resolve(__dirname, 'dist2'),
    filename: '[name].js' // Notice we use a variable
  },
  devtool: 'cheap-module-source-map',
  resolve: {
    modulesDirectories: ['node_modules', 'shared']
  },
  module: {
    loaders: [
      { test: /.*\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /.*node_modules\/cherrytree\/.*\.js$/, loader: 'babel' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.html$/, loader: 'underscore-template' }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]

}
