"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertSiteAddress = void 0;

var _ramda = require("ramda");

const insertSiteAddress = (0, _ramda.curry)((siteAdress, str) => str.replace('<<Insert Address>>', siteAdress));
exports.insertSiteAddress = insertSiteAddress;