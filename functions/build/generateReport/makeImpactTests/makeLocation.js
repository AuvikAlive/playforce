"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeLocation = void 0;

var _utils = require("../utils/");

var _constants = require("../constants");

const makeLocation = (firstColumnWidth, location) => ({
  marginBottom: _constants.verticalMargin,
  columns: [{
    text: 'Site Location:',
    decoration: 'underline',
    bold: true,
    width: firstColumnWidth
  }, [{
    text: location.name
  }, {
    text: (0, _utils.formatSiteAddress)(location)
  }]]
});

exports.makeLocation = makeLocation;