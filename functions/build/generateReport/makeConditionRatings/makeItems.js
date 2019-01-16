"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeItems = void 0;

var _lodash = require("lodash");

var _constants = require("../constants");

var _makeImage = require("./makeImage");

var _makeEquipmentType = require("./makeEquipmentType");

var _makeManufacturer = require("./makeManufacturer");

var _makeCondition = require("./makeCondition");

const makeItems = async (items, itemName) => {
  if (items.length === 0) {
    return null;
  }

  const conditionRatingItems = items.map(async ({
    image,
    description,
    manufacturer,
    condition
  }, index) => [await (0, _makeImage.makeImage)(image), (0, _makeEquipmentType.makeEquipmentType)(description), (0, _makeManufacturer.makeManufacturer)(manufacturer), (0, _makeCondition.makeCondition)(condition)]);
  const tuples = (0, _lodash.chunk)((await Promise.all(conditionRatingItems)), 2);
  const grid = tuples.map((tuple, index, array) => {
    const row = {
      columns: tuple,
      marginBottom: _constants.verticalMargin,
      unbreakable: true
    };
    return row;
  });
  return [{
    text: `${itemName} Items`,
    fontSize: _constants.subHeaderFontSize,
    font: 'Oswald',
    marginBottom: _constants.verticalMargin
  }, grid];
};

exports.makeItems = makeItems;