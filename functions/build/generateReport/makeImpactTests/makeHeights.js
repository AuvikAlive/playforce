"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeHeights = void 0;

var _constants = require("../constants");

var _makeFreeHeight = require("./makeFreeHeight");

var _makeMeasuredHeight = require("./makeMeasuredHeight");

var _makeCriticalHeight = require("./makeCriticalHeight");

const makeHeights = firstColumnWidth => ({
  marginBottom: _constants.verticalMargin,
  columns: [{
    text: 'Height Definitions:',
    decoration: 'underline',
    bold: true,
    width: firstColumnWidth
  }, [(0, _makeFreeHeight.makeFreeHeight)(), (0, _makeMeasuredHeight.makeMeasuredHeight)(), (0, _makeCriticalHeight.makeCriticalHeight)()]]
});

exports.makeHeights = makeHeights;