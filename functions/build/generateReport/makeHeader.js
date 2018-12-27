"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeHeader = void 0;

var _logo = require("./logo");

var _constants = require("./constants");

const makeHeader = skipCommonHeaderFooter => currentPage => currentPage > skipCommonHeaderFooter ? {
  image: _logo.logo,
  width: 208,
  marginTop: _constants.pageMarginVertical,
  marginLeft: _constants.pageMarginHorizontal
} : null;

exports.makeHeader = makeHeader;