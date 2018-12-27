"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeMiddleSectionSecondRow = void 0;

var _constants = require("../constants");

const makeMiddleSectionSecondRow = ({
  sectionFontSize,
  firstColumnWidth,
  client
}) => ({
  fontSize: sectionFontSize,
  columns: [{
    text: 'CLIENT',
    bold: true,
    width: firstColumnWidth
  }, {
    text: client,
    width: '*'
  }],
  marginTop: _constants.verticalMargin * 2
});

exports.makeMiddleSectionSecondRow = makeMiddleSectionSecondRow;