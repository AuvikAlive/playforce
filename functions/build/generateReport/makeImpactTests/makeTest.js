"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeTest = void 0;

var _constants = require("../constants");

var _makeSurface = require("./makeSurface");

var _makeDrops = require("./makeDrops");

var _makeComment = require("./makeComment");

const marginLeft = 85;
const marginBottom = _constants.verticalMargin / 2;

const makeTest = surface => {
  const {
    results,
    comment
  } = surface;
  return results.length > 0 ? [(0, _makeSurface.makeSurface)(surface, marginLeft, marginBottom), (0, _makeDrops.makeDrops)(results, marginLeft, comment ? marginBottom : _constants.verticalMargin * 2), (0, _makeComment.makeComment)(comment, marginLeft)] : null;
};

exports.makeTest = makeTest;