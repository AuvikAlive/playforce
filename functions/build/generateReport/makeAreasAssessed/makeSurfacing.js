"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSurfacing = void 0;

var _constants = require("../constants");

const makeSurfacing = () => [{
  text: 'SURFACING',
  font: 'Oswald',
  fontSize: _constants.subHeaderFontSize,
  marginBottom: _constants.verticalMargin / 2
}, {
  marginBottom: _constants.verticalMargin,
  table: {
    widths: ['*'],
    body: [['Is the depth of loose-fill surfacing adequate?'], ['Is the surface of unitary surfaces in good repair?'], ['Is the surface free of any trip hazards?'], ['Is the surface and surrounding area free of objects that may cause injury (e.g. broken glass)?']]
  }
}];

exports.makeSurfacing = makeSurfacing;