"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeMiddleSectionFirstRow = void 0;

var _utils = require("../utils/");

var _constants = require("../constants");

const makeMiddleSectionFirstRow = ({
  sectionFontSize,
  firstColumnWidth,
  name,
  location
}) => {
  const address = (0, _utils.formatSiteAddress)(location);
  return {
    fontSize: sectionFontSize,
    columns: [{
      text: 'LOCATION',
      bold: true,
      width: firstColumnWidth
    }, [{
      text: name,
      width: '*'
    }, {
      text: address
    }]],
    marginTop: _constants.verticalMargin * 5
  };
};

exports.makeMiddleSectionFirstRow = makeMiddleSectionFirstRow;