const path = require('path');

module.exports = {
  entry: './js/main.js',
  output: {
    path: path.resolve(__dirname, './js/dist'),
    filename: 'bundle.js'
  }
}