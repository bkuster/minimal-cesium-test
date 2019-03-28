const path = require('path');

module.exports = {
  entry: {
    fails: './fails.js',
    works: './works.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    sourcePrefix: '',
  },
  target: 'node',
};
