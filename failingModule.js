if (process.env.NODE_ENV !== 'production') {
  require('amd-loader');
}
const CesiumTerrainProvider = require('cesium/Source/Core/CesiumTerrainProvider');
const terrainProvider = new CesiumTerrainProvider({ url: 'https://demo.virtualcitymap.de/api/examples/data/terrain' });

/**
 * @param {number} x
 * @param {number} y
 * @param {number} l
 * @return {PromiseLike}
 */
module.exports = function requestTileGeometry(x, y, l) {
  return terrainProvider.readyPromise.then(() => terrainProvider.requestTileGeometry(x, y, l));
};
