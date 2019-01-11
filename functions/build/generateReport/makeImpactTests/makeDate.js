"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeDate = void 0;

var _dateFns = require("date-fns");

var _constants = require("../constants");

const makeDate = (firstColumnWidth, inspectionDate) => ({
  marginBottom: _constants.verticalMargin,
  columns: [{
    text: 'Date of Testing:',
    decoration: 'underline',
    bold: true,
    width: firstColumnWidth
  }, {
    text: (0, _dateFns.format)(inspectionDate, 'DD MMMM YYYY')
  }]
});

exports.makeDate = makeDate;