"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeTests = void 0;

var _constants = require("../constants");

var _makeTest = require("./makeTest");

const makeTests = impactTests => {
  const testItems = impactTests.map(item => (0, _makeTest.makeTest)(item));
  return [{
    text: 'Test Results:',
    decoration: 'underline',
    bold: true,
    marginBottom: _constants.verticalMargin
  }, testItems];
};

exports.makeTests = makeTests;