"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSurrounds = void 0;

var _constants = require("../constants");

const makeSurrounds = () => [{
  text: 'SURROUNDS',
  font: 'Oswald',
  fontSize: _constants.subHeaderFontSize,
  marginBottom: _constants.verticalMargin / 2
}, {
  marginBottom: _constants.verticalMargin,
  table: {
    widths: ['*'],
    body: [['Are pathways around playground free of trip hazards (from cracks, etc.)?'], ['Is access from car park appropriate for users of all abilities?'], ['Is the area free of dead overhanging branches that may potentially fall onto the playground?'], ['Are ancillary items (tables, seats, shade structures, fences, gates, etc.) in good repair?']]
  }
}];

exports.makeSurrounds = makeSurrounds;