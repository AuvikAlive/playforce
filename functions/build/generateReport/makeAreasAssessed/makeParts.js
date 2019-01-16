"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeParts = void 0;

var _constants = require("../constants");

const makeParts = () => [{
  text: 'MOVING PARTS',
  font: 'Oswald',
  fontSize: _constants.subHeaderFontSize,
  marginBottom: _constants.verticalMargin / 2
}, {
  pageBreak: 'after',
  table: {
    widths: ['*'],
    body: [['Is the free space adequate for forced movement items?'], ['Is the equipment free of crush or shear points?'], ['Are the chains and connectors free of excessive wear (<40%)'], ["Are moving and 'sealed for life' parts moving freely?"]]
  }
}];

exports.makeParts = makeParts;