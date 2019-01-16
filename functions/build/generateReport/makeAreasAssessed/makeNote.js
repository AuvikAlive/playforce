"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeNote = void 0;

var _constants = require("../constants");

const makeNote = () => [{
  text: 'Non-compliances have been detailed in the preceding pages, if any.',
  marginBottom: _constants.verticalMargin
}, {
  text: [{
    text: 'NOTE: ',
    bold: true
  }, 'While some items may be identified as non-compliant, a low level of risk may not require any action to be undertaken. Other items may be generally compliant but still require attention. Any issues have been addressed in the previous pages.'],
  marginBottom: _constants.verticalMargin
}];

exports.makeNote = makeNote;