const path = require('path');

module.exports = {
  entry: './pub/js/main.js',
  output: {
    path: path.resolve(__dirname, './pub/js/dist'),
    filename: 'bundle.js'
  }
}