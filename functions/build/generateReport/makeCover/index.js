"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeCover = void 0;

var _makeAddressHeader = require("../makeAddressHeader");

var _makeTitle = require("./makeTitle");

// import { makeCoverImage } from './makeCoverImage'
// import { makeMiddleSection } from './makeMiddleSection'
const makeCover = (reportPreferences, organisation) => {
  return [(0, _makeAddressHeader.makeAddressHeader)(organisation), (0, _makeTitle.makeTitle)(reportPreferences.title)];
};

exports.makeCover = makeCover;