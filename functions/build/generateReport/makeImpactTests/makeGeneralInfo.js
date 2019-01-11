"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeGeneralInfo = void 0;

var _makeLocation = require("./makeLocation");

var _makeClient = require("./makeClient");

var _makeDate = require("./makeDate");

var _makeWeatherCondition = require("./makeWeatherCondition");

var _makeApparatus = require("./makeApparatus");

var _makeStandards = require("./makeStandards");

var _makeMethod = require("./makeMethod");

const firstColumnWidth = 170;

const makeGeneralInfo = (impactGeneralInfo, appliedStandards) => {
  const {
    location,
    client,
    inspectionDate
  } = impactGeneralInfo;
  return [location && (0, _makeLocation.makeLocation)(firstColumnWidth, location), client && (0, _makeClient.makeClient)(firstColumnWidth, client), inspectionDate && (0, _makeDate.makeDate)(firstColumnWidth, inspectionDate), (0, _makeWeatherCondition.makeWeatherCondition)(firstColumnWidth, impactGeneralInfo), (0, _makeApparatus.makeApparatus)(firstColumnWidth, impactGeneralInfo), (0, _makeStandards.makeStandards)(firstColumnWidth, appliedStandards), (0, _makeMethod.makeMethod)(firstColumnWidth)];
};

exports.makeGeneralInfo = makeGeneralInfo;