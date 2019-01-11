"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSubtitle = void 0;

var _constants = require("./constants");

const makeSubtitle = subtitle => ({
  text: subtitle,
  font: 'Oswald',
  fontSize: _constants.headerFontSize,
  marginBottom: _constants.verticalMargin / 2,
  color: _constants.gray
});

exports.makeSubtitle = makeSubtitle;