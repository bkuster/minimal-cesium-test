const requestTileGeometry = require('./requestTileGeoemtry');

global.require = process.env.NODE_ENV === 'production' ? __non_webpack_require__ : require;

const tileGeometryPromise = requestTileGeometry(140810, 27294, 17);
tileGeometryPromise.then(
  (t) => {
    console.log(t);
  },
  (err) => {
    console.log(err);
  });
