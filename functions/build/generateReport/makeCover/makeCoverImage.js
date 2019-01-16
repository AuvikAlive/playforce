"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeCoverImage = void 0;

var _constants = require("../constants");

var _utils = require("../utils/");

const makeCoverImage = async imageUrl => {
  const image = await (0, _utils.fetchImage)(imageUrl);
  return image ? {
    image,
    width: _constants.pageWidth,
    marginLeft: -_constants.pageMarginHorizontal,
    height: 432
  } : null;
};

exports.makeCoverImage = makeCoverImage;