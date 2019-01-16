"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSecondRow = void 0;

var _constants = require("../../constants");

const colorMap = {
  VL: _constants.blue,
  L: _constants.green,
  M: _constants.yellow,
  H: _constants.pink,
  VH: _constants.purple
};

const makeSecondRow = (probability, severity, level) => {
  const colorProperty = level.substring(0, 2).trim();
  return [probability, severity, {
    text: level,
    fillColor: colorMap[colorProperty]
  }];
};

exports.makeSecondRow = makeSecondRow;