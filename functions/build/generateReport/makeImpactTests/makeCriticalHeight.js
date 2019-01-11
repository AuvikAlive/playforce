"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeCriticalHeight = void 0;

var _constants = require("../constants");

const makeCriticalHeight = () => [{
  text: 'Critical fall height (hc)',
  bold: true
}, {
  marginBottom: _constants.verticalMargin,
  text: 'The maximum free height of fall for which a surface will provide an acceptable level of impact attenuation.'
}];

exports.makeCriticalHeight = makeCriticalHeight;