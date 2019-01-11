"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertSite = void 0;

const insertSite = (str, siteName = '<<Insert Site>>') => str.replace('<<Insert Site>>', siteName);

exports.insertSite = insertSite;