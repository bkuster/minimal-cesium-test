const requestTileGeometry = require('./requestTileGeoemtry');

const tileGeometryPromise = requestTileGeometry(140810, 27294, 17);
tileGeometryPromise.then(
    (t) => {
      console.log(t);
    },
    (err) => {
      console.log(err);
    });
