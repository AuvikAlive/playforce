"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeTitle = void 0;

var _constants = require("../constants");

const makeTitle = () => ({
  text: 'AREAS ASSESSED FOR COMPLIANCE',
  font: 'Oswald',
  fontSize: _constants.headerFontSize,
  marginBottom: _constants.verticalMargin
});

exports.makeTitle = makeTitle;