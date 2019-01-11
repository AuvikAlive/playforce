"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeDisclaimer = void 0;

var _constants = require("../constants");

const makeDisclaimer = () => ({
  text: '*The results of this on-site test report are not to be considered comparable to those of a laboratory test.',
  fontSize: _constants.fontSize / 1.5,
  marginTop: _constants.verticalMargin,
  italics: true,
  marginLeft: 85,
  pageBreak: 'after'
});

exports.makeDisclaimer = makeDisclaimer;