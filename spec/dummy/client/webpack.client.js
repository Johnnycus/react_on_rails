const path = require('path');

module.exports = {
  entry: [
    'startup/clientApp'
  ],
  output: {
    path: '../app/assets/javascripts/generated',
    filename: "client.js"
  },
  resolve: {
    root: [path.join(__dirname, 'app')],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { loader: 'babel-loader' }
    ]
  }
};