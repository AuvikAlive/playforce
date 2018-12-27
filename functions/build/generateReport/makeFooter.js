"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeFooter = void 0;

var _constants = require("./constants");

const makeFooter = (skipCommonHeaderFooter, title) => (currentPage, pageCount) => currentPage > skipCommonHeaderFooter ? [{
  text: title,
  marginLeft: _constants.pageMarginHorizontal
}, {
  text: `Page ${currentPage} of ${pageCount}`,
  marginLeft: _constants.pageMarginHorizontal
}] : null;

exports.makeFooter = makeFooter;