"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeImpactTests = void 0;

var _makeTitle = require("../makeTitle");

var _makeGeneralInfo = require("./makeGeneralInfo");

var _makeTests = require("./makeTests");

var _makeDisclaimer = require("./makeDisclaimer");

const makeImpactTests = (impactTest, appliedStandards) => {
  return [(0, _makeTitle.makeTitle)('IMPACT ATTENUATION TEST'), (0, _makeGeneralInfo.makeGeneralInfo)(impactTest, appliedStandards), (0, _makeTests.makeTests)(impactTest.surfaces), (0, _makeDisclaimer.makeDisclaimer)()];
};

exports.makeImpactTests = makeImpactTests;