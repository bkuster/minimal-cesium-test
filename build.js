const webpack = require('webpack');
const config = require('./webpack.conf');

config.mode = 'production';
const compiler = webpack(config);
compiler.run();
