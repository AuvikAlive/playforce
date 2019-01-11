"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSurface = void 0;

var _constants = require("../constants");

const makeSurface = ({
  location,
  type,
  material,
  condition
}, marginLeft, marginBottom) => [{
  marginLeft,
  marginBottom,
  text: 'Surface Details:',
  decoration: 'underline',
  bold: true
}, {
  marginLeft,
  marginBottom,
  columns: [{
    text: 'Location within site',
    bold: true
  }, {
    text: 'Description',
    bold: true
  }, {
    text: 'Condition',
    bold: true
  }]
}, {
  marginLeft,
  marginBottom: _constants.verticalMargin,
  columns: [location, `${type} | ${material}`, condition]
}];

exports.makeSurface = makeSurface;