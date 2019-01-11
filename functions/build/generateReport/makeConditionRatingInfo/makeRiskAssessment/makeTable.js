"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeTable = void 0;

var _constants = require("../../constants");

var _firstRow = require("./firstRow");

var _secondRow = require("./secondRow");

var _thirdRow = require("./thirdRow");

var _fourthRow = require("./fourthRow");

var _fifthRow = require("./fifthRow");

var _sixthRow = require("./sixthRow");

var _lastRow = require("./lastRow");

const makeTable = () => ({
  marginBottom: _constants.verticalMargin,
  alignment: 'center',
  table: {
    widths: ['auto', 'auto', '*', '*', '*', '*', '*'],
    body: [_firstRow.firstRow, _secondRow.secondRow, _thirdRow.thirdRow, _fourthRow.fourthRow, _fifthRow.fifthRow, _sixthRow.sixthRow, _lastRow.lastRow]
  }
});

exports.makeTable = makeTable;