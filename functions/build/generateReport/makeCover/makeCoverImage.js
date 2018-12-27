"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeCoverImage = void 0;

var _constants = require("../constants");

const makeCoverImage = image => image ? {
  image,
  width: _constants.pageWidth,
  marginLeft: -_constants.pageMarginHorizontal,
  height: 432
} : null;

exports.makeCoverImage = makeCoverImage;