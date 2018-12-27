"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeMiddleSectionThirdRow = void 0;

var _dateFns = require("date-fns");

var _constants = require("../constants");

const makeMiddleSectionThirdRow = ({
  sectionFontSize,
  firstColumnWidth,
  inspectionDate,
  displayName
}) => ({
  fontSize: sectionFontSize,
  columns: [{
    text: 'INSPECTION DATE',
    bold: true,
    width: firstColumnWidth
  }, {
    text: (0, _dateFns.format)(inspectionDate, 'DD MMMM YYYY'),
    width: '*'
  }, {
    text: 'INSPECTED BY',
    bold: true,
    width: 'auto'
  }, {
    text: displayName,
    width: '*',
    marginLeft: 45
  }],
  marginTop: _constants.verticalMargin * 2
});

exports.makeMiddleSectionThirdRow = makeMiddleSectionThirdRow;