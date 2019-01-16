"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSecondPoint = void 0;

var _constants = require("../constants");

const makeSecondPoint = standardItems => ({
  columnGap: 20,
  columns: [{
    width: 'auto',
    text: '2'
  }, [{
    width: '*',
    text: 'Applicable Standards & Compliance',
    bold: true,
    marginBottom: _constants.verticalMargin / 2
  }, {
    text: `The equipment in this report has been assessed, were applicable, in accordance with ${standardItems.join(' ')}`,
    marginBottom: _constants.verticalMargin
  }, {
    text: "Whilst compliance with standards is not mandatory in Australia, it is recommended. Compliance with Standards does not remove the operator's responsibility to ensure that equipment is safe and failure to comply does not necessarily mean that equipment is dangerous.",
    marginBottom: _constants.verticalMargin
  }]]
});

exports.makeSecondPoint = makeSecondPoint;