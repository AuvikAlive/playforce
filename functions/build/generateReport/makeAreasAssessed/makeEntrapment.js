"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeEntrapment = void 0;

var _constants = require("../constants");

const makeEntrapment = () => [{
  text: 'PROTECTION AGAINST ENTRAPMENT',
  font: 'Oswald',
  fontSize: _constants.subHeaderFontSize,
  marginBottom: _constants.verticalMargin / 2
}, {
  marginBottom: _constants.verticalMargin,
  table: {
    widths: ['*'],
    body: [['Is the equipment free of head and neck entrapments?'], ['Is the equipment free of finger entrapments?'], ['Is the equipment free of clothing entrapments?'], ['Is the equipment free of whole body entrapments?'], ['Is the equipment free of foot or leg entrapments?']]
  }
}];

exports.makeEntrapment = makeEntrapment;