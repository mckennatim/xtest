const path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/app.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:4200'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'react-hot!babel',
      exclude: /node_modules/,
      include: __dirname
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    port:4200,
    host: 'http://0.0.0.0',
    contentBase: './dist',
    hot: true,
    historyApiFallback: {
      index: 'http://localhost:4200/index.html',
      rewrites: [
        { from: /\/animal/, to: 'index.html'}
      ]      
    }
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]    
}
