"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeTable = void 0;

var _makeFirstRow = require("./makeFirstRow");

var _makeSecondRow = require("./makeSecondRow");

const makeTable = (...args) => {
  return {
    colSpan: 2,
    layout: 'noBorders',
    alignment: 'center',
    table: {
      widths: ['*', '*', '*'],
      body: [(0, _makeFirstRow.makeFirstRow)(), (0, _makeSecondRow.makeSecondRow)(...args)]
    }
  };
};

exports.makeTable = makeTable;