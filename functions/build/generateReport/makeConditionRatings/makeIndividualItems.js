"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeIndividualItems = void 0;

var _makeItems = require("./makeItems");

var _makeAncillaryItems = require("./makeAncillaryItems");

var _equipmentTypes = require("./equipmentTypes");

var _utils = require("../utils/");

const makeIndividualItems = async conditionRatings => {
  const playItems = conditionRatings.filter(({
    type
  }) => (0, _utils.capitalize)(type) === _equipmentTypes.equipmentTypes[0]);
  const fitnessItems = conditionRatings.filter(({
    type
  }) => (0, _utils.capitalize)(type) === _equipmentTypes.equipmentTypes[1]);
  const ancillaryItems = conditionRatings.filter(({
    type
  }) => (0, _utils.capitalize)(type) === _equipmentTypes.equipmentTypes[2]);
  return [await (0, _makeItems.makeItems)(playItems, 'Play'), await (0, _makeItems.makeItems)(fitnessItems, 'Fitness'), (0, _makeAncillaryItems.makeAncillaryItems)(ancillaryItems)];
};

exports.makeIndividualItems = makeIndividualItems;