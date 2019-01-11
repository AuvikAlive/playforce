"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeAssetId = void 0;

const makeAssetId = assetId => ({
  text: [{
    text: 'Asset Id: ',
    bold: true
  }, `${assetId ? assetId : 'None'}`]
});

exports.makeAssetId = makeAssetId;