"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeImpactTestImages = void 0;

var _makeTitle = require("../makeTitle");

var _makeTests = require("./makeTests");

const makeImpactTestImages = (impactTests, noPageBreak) => {
  if (impactTests && impactTests.length > 0 && impactTests.some(({
    results
  }) => results.length > 0)) {
    return [(0, _makeTitle.makeTitle)('IMPACT TEST IMAGES'), (0, _makeTests.makeTests)(impactTests), noPageBreak ? null : {
      text: '',
      pageBreak: 'after'
    }];
  } else {
    return null;
  }
};

exports.makeImpactTestImages = makeImpactTestImages;