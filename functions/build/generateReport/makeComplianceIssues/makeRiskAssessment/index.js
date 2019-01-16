"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeRiskAssessment = void 0;

var _makeTable = require("./makeTable");

const makeRiskAssessment = (...args) => {
  return [{}, {
    text: 'Risk Assessment:',
    bold: true,
    marginTop: 16
  }, (0, _makeTable.makeTable)(...args), {}];
};

exports.makeRiskAssessment = makeRiskAssessment;