"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeEquipment = void 0;

var _constants = require("../constants");

const makeEquipment = () => [{
  text: 'EQUIPMENT (general)',
  font: 'Oswald',
  fontSize: _constants.subHeaderFontSize,
  marginBottom: _constants.verticalMargin / 2
}, {
  marginBottom: _constants.verticalMargin,
  table: {
    widths: ['*'],
    body: [['Are the footings adequately covered?'], ['Are the foundations stable and free of movement?'], ['Is the equipment free of protrusions or sharp edges that may be hazardous?'], ['Are all components present and secure?'], ['Is the equipment in good repair (i.e. free from excessive rust, cracked welds, splintering timber, etc.)?'], ['Are all items of equipment within the maximum free height of fall (<3.0m; upper body <2.2m; SECS <1.8m)']]
  }
}];

exports.makeEquipment = makeEquipment;