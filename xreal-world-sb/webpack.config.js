const path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loader: 'react-hot!babel',
      exclude: /node_modules/,
      include: __dirname
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  devServer: {
    port:4340,
    host: 'http://0.0.0.0',
    contentBase: './dist',
    hot: true,
    historyApiFallback: {
      index: 'index.html',
      rewrites: [
        { from: /\//, to: '/index.html'}
      ]      
    }
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]    
}
