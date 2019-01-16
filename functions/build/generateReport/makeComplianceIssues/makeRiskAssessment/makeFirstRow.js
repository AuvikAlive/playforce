"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeFirstRow = void 0;

var _constants = require("../../constants");

const makeFirstRow = () => [{
  text: 'Probability',
  bold: true,
  fillColor: _constants.lightGray
}, {
  text: 'Injury Severity',
  bold: true,
  fillColor: _constants.lightGray
}, {
  text: 'Risk Level',
  bold: true,
  fillColor: _constants.lightGray
}];

exports.makeFirstRow = makeFirstRow;