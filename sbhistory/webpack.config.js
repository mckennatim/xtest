const path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:4301',
    './src/app.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      include: __dirname,
      query:
      {
        presets:['es2015']
      } 
    }]
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: {
      index: 'index.html'
    }
  },
  devtool: 'source-map',
  plugins: [
  ]    
}
