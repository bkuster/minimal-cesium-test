# Test Setup
This is just a small test script to support [this issue](https://github.com/bkuster/minimal-cesium-test).
The `fails.js` script fails and the `works.js` script works. To run both in development:
`npm run fails` and `npm run works`. To run them for production first run: `npm run build` and then:
`node dist/fails.js` and `node dist/works.js`.

### Discoveries
- Providing `require` to the global can help
- Providin `require` only helps, if the `CesiumTerrainProvider` is not created in
its own modules top level scope (see `alsoFails.js`)
