var ExtractTextPlugins = require('extract-text-webpack-plugin');

module.exports = {
  watch: true,
  entry: './assets/js/entries/app.js',
  output: {
    filename: './dist/js/app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ["es2015", "react"]
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugins.extract(['css','sass'])
      }
    ]
  },
  plugins: [
    new ExtractTextPlugins('./dist/style/main.css', {
      allChunks: true
    })
  ],
  resolve: {
    extension: ['', '.js', '.es6']
  }
};