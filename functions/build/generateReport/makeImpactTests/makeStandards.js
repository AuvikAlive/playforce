"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeStandards = void 0;

var _constants = require("../constants");

const makeStandards = firstColumnWidth => {
  return {
    marginBottom: _constants.verticalMargin,
    columns: [{
      text: 'Applied Standard(s):',
      decoration: 'underline',
      bold: true,
      width: firstColumnWidth
    }, {
      text: 'AS 4422:2016'
    }]
  };
};

exports.makeStandards = makeStandards;