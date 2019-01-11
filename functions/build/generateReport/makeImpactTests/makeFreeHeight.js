"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeFreeHeight = void 0;

var _constants = require("../constants");

const makeFreeHeight = () => [{
  text: 'Free height of fall (hf)',
  bold: true
}, {
  marginBottom: _constants.verticalMargin,
  text: 'The greatest vertical distance from the clearly intended body support to the impact area below.'
}];

exports.makeFreeHeight = makeFreeHeight;