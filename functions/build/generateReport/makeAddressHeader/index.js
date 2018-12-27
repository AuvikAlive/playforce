"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeAddressHeader = void 0;

var _constants = require("../constants");

var _makeLogo = require("./makeLogo");

var _makeAddress = require("./makeAddress");

const makeAddressHeader = organisation => ({
  marginTop: _constants.pageMarginVertical - _constants.logoOffset,
  columns: [(0, _makeLogo.makeLogo)(), (0, _makeAddress.makeAddress)(organisation)]
});

exports.makeAddressHeader = makeAddressHeader;