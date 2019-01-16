"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeOutro = void 0;

var _constants = require("../constants");

const makeOutro = () => ({
  text: 'The copyright in this report is shared between Play Force Pty Ltd and the client requesting the report. The client is free to share the contents of this report, but it must be shared in full.',
  marginTop: _constants.verticalMargin * 3
});

exports.makeOutro = makeOutro;