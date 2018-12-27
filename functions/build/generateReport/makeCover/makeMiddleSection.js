"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeMiddleSection = void 0;

var _constants = require("../constants");

var _makeMiddleSectionFirstRow = require("./makeMiddleSectionFirstRow");

var _makeMiddleSectionSecondRow = require("./makeMiddleSectionSecondRow");

var _makeMiddleSectionThirdRow = require("./makeMiddleSectionThirdRow");

var _makeStandardItems = require("./makeStandardItems");

const sectionFontSize = _constants.fontSize + 2;
const firstColumnWidth = 150;

const makeMiddleSection = ({
  location,
  client,
  inspectionDate,
  displayName,
  appliedStandards
}) => {
  const {
    name
  } = location;
  return [(0, _makeMiddleSectionFirstRow.makeMiddleSectionFirstRow)({
    sectionFontSize,
    firstColumnWidth,
    name,
    location
  }), (0, _makeMiddleSectionSecondRow.makeMiddleSectionSecondRow)({
    sectionFontSize,
    firstColumnWidth,
    client
  }), (0, _makeMiddleSectionThirdRow.makeMiddleSectionThirdRow)({
    sectionFontSize,
    firstColumnWidth,
    inspectionDate,
    displayName
  }), (0, _makeStandardItems.makeStandardItems)(appliedStandards)];
};

exports.makeMiddleSection = makeMiddleSection;