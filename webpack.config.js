var path = require('path');

module.exports = {
  entry: {
    App: "./app/assets/scripts/App.js",
    Vendor: "./app/assets/scripts/Vendor.js"
  },
  output: {
    path: path.resolve(__dirname, "./app/temp/scripts"), //absolute path for webpack
    filename: "[name].js"
  },

  module: {
    loaders: [{
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      },
      test: /\.js$/,
      exclude: /node_modules/
    }]
  }
}