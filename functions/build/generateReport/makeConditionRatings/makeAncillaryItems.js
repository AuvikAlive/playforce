"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeAncillaryItems = void 0;

var _lodash = require("lodash");

var _constants = require("../constants");

var _makeImage = require("./makeImage");

var _makeEquipmentType = require("./makeEquipmentType");

var _makeCondition = require("./makeCondition");

const makeAncillaryItems = ancillaryItems => {
  if (ancillaryItems.length === 0) {
    return null;
  }

  const conditionRatingItems = ancillaryItems.map(({
    image,
    equipment,
    assetId,
    manufacturer,
    condition,
    estimatedDateInstalled
  }, index) => [(0, _makeImage.makeImage)(image), (0, _makeEquipmentType.makeEquipmentType)(equipment), (0, _makeCondition.makeCondition)(condition)]);
  const tuples = (0, _lodash.chunk)(conditionRatingItems, 2);
  const grid = tuples.map((tuple, index, array) => {
    const row = {
      columns: tuple,
      marginBottom: _constants.verticalMargin,
      unbreakable: true
    };
    return row;
  });
  return [{
    text: 'Ancillary Items',
    fontSize: _constants.subHeaderFontSize,
    font: 'Oswald',
    marginBottom: _constants.verticalMargin
  }, grid];
};

exports.makeAncillaryItems = makeAncillaryItems;