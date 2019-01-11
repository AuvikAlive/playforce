"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeDrops = void 0;

var _constants = require("../constants");

var _makeDropHeader = require("./makeDropHeader");

var _makeDropRows = require("./makeDropRows");

const lighterGray = '#efefef';

const makeDrops = (dropTests, marginLeft, marginBottom) => ({
  layout: {
    hLineWidth: () => 0,
    vLineWidth: () => 0,
    fillColor: function (i, node) {
      if (i === 0) {
        return _constants.lightGray;
      } else if (i !== 1 && i % 2 === 0) {
        return lighterGray;
      } else {
        return null;
      }
    }
  },
  marginLeft,
  marginBottom,
  alignment: 'center',
  unbreakable: true,
  table: {
    widths: ['*', 150, '*', '*', '*', '*', 100],
    body: [(0, _makeDropHeader.makeDropHeader)(), ...(0, _makeDropRows.makeDropRows)(dropTests)]
  }
});

exports.makeDrops = makeDrops;