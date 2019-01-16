"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeGrid = void 0;

var _lodash = require("lodash");

var _constants = require("../constants");

var _makeImage = require("./makeImage");

var _makeEquipmentType = require("./makeEquipmentType");

var _makeAssetId = require("./makeAssetId");

var _makeManufacturer = require("./makeManufacturer");

var _makeCondition = require("./makeCondition");

const makeGrid = conditionRatings => {
  const conditionRatingItems = conditionRatings.map(({
    image,
    equipment,
    assetId,
    manufacturer,
    condition,
    estimatedDateInstalled
  }, index) => [(0, _makeImage.makeImage)(image), (0, _makeEquipmentType.makeEquipmentType)(equipment), (0, _makeAssetId.makeAssetId)(assetId), (0, _makeManufacturer.makeManufacturer)(manufacturer), (0, _makeCondition.makeCondition)(condition)]);
  const tuples = (0, _lodash.chunk)(conditionRatingItems, 2);
  const grid = tuples.map((tuple, index, array) => {
    const row = {
      columns: tuple,
      marginBottom: _constants.verticalMargin,
      unbreakable: true
    };

    if (index + 1 === array.length) {
      row.pageBreak = 'after';
    }

    return row;
  });
  return grid;
};

exports.makeGrid = makeGrid;