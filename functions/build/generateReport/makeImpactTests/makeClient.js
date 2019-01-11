"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeClient = void 0;

var _constants = require("../constants");

const makeClient = (firstColumnWidth, client) => ({
  marginBottom: _constants.verticalMargin,
  columns: [{
    text: 'Client:',
    decoration: 'underline',
    bold: true,
    width: firstColumnWidth
  }, {
    text: client
  }]
});

exports.makeClient = makeClient;