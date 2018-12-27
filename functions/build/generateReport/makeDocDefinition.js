"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeDocDefinition = void 0;

var _pageMargins = require("./pageMargins");

var _pageSize = require("./pageSize");

var _makeHeader = require("./makeHeader");

var _makeFooter = require("./makeFooter");

var _logo = require("./logo");

var _makeCover = require("./makeCover/");

const makeDocDefinition = requestBody => {
  const {
    reportPreferences,
    organisation
  } = requestBody;
  const skipCommonHeaderFooter = 1;
  const docDefinition = {
    pageMargins: _pageMargins.pageMargins,
    pageSize: _pageSize.pageSize,
    header: (0, _makeHeader.makeHeader)(1),
    footer: (0, _makeFooter.makeFooter)(skipCommonHeaderFooter, 'Comprehensive Playground Inspection Report'),
    images: {
      logo: _logo.logo
    },
    content: [(0, _makeCover.makeCover)(reportPreferences, organisation)]
  };
  return docDefinition;
};

exports.makeDocDefinition = makeDocDefinition;