"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeMethod = void 0;

var _constants = require("../constants");

const makeMethod = firstColumnWidth => ({
  marginBottom: _constants.verticalMargin,
  columns: [{
    text: 'Test Method:',
    decoration: 'underline',
    bold: true,
    width: firstColumnWidth
  }, {
    text: 'The on-site testing was conducted in accordance with the test method provided in applied standard(s).'
  }]
});

exports.makeMethod = makeMethod;