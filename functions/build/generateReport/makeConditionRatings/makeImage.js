"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeImage = void 0;

var _constants = require("../constants");

var _utils = require("../utils/");

const makeImage = async imageUrl => {
  const image = await (0, _utils.fetchImage)(imageUrl);
  return image ? {
    image,
    width: (_constants.pageWidth - 2 * _constants.pageMarginHorizontal) / 2 - 10,
    height: 170,
    marginBottom: _constants.verticalMargin
  } : null;
};

exports.makeImage = makeImage;