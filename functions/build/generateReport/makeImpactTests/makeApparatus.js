"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeApparatus = void 0;

var _constants = require("../constants");

const makeApparatus = (firstColumnWidth, {
  testApparatus
}) => ({
  marginBottom: _constants.verticalMargin,
  columns: [{
    text: 'Test Apparatus:',
    decoration: 'underline',
    bold: true,
    width: firstColumnWidth
  }, {
    text: testApparatus
  }]
});

exports.makeApparatus = makeApparatus;