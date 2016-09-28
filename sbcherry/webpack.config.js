module.exports = {
  context: __dirname,
  entry: './src/app',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
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
  }
}
