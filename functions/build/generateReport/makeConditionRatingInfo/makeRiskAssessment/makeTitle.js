"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeTitle = void 0;

var _constants = require("../../constants");

const makeTitle = () => ({
  text: 'RISK ASSESSMENT MATRIX',
  fontSize: _constants.subHeaderFontSize,
  font: 'Oswald',
  marginBottom: _constants.verticalMargin
});

exports.makeTitle = makeTitle;