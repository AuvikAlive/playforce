"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeHeader = void 0;

var _makeSubtitle = require("../makeSubtitle");

const makeHeader = ({
  location,
  type,
  material
}) => {
  return (0, _makeSubtitle.makeSubtitle)(`${location} - ${type} | ${material}`);
};

exports.makeHeader = makeHeader;