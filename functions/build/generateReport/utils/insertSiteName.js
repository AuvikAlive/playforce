"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertSiteName = void 0;

var _ramda = require("ramda");

const insertSiteName = (0, _ramda.curry)((siteName, str) => {
  return str.replace('<<Insert Site>>', siteName);
});
exports.insertSiteName = insertSiteName;