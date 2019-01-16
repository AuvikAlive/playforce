"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSubtitle = void 0;

var _constants = require("../constants");

const makeSubtitle = () => ({
  text: 'The following notes apply to this inspection report.',
  marginBottom: _constants.verticalMargin
});

exports.makeSubtitle = makeSubtitle;