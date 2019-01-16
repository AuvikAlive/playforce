"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeDocDefinition = void 0;

var _pageMargins = require("./pageMargins");

var _pageSize = require("./pageSize");

var _makeHeader = require("./makeHeader");

var _makeFooter = require("./makeFooter");

var _logo = require("./logo");

var _makeCover = require("./makeCover/");

var _makeAuditSummary = require("./makeAuditSummary");

var _makeConditionRatingInfo = require("./makeConditionRatingInfo/");

var _makeConditionRatings = require("./makeConditionRatings/");

var _makeImpactTests = require("./makeImpactTests/");

const makeDocDefinition = async requestBody => {
  const {
    reportPreferences,
    organisation,
    inspection,
    site,
    client,
    author,
    equipment,
    impactTest
  } = requestBody;
  const skipCommonHeaderFooter = 1;
  const docDefinition = {
    pageMargins: _pageMargins.pageMargins,
    pageSize: _pageSize.pageSize,
    header: (0, _makeHeader.makeHeader)(1),
    footer: (0, _makeFooter.makeFooter)(skipCommonHeaderFooter, 'Comprehensive Playground Inspection Report'),
    images: {
      logo: _logo.logo
    },
    content: [await (0, _makeCover.makeCover)({
      reportPreferences,
      organisation,
      inspection,
      site,
      client,
      author
    }), await (0, _makeAuditSummary.makeAuditSummary)(inspection.auditSummary, author, site), (0, _makeConditionRatingInfo.makeConditionRatingInfo)(), await (0, _makeConditionRatings.makeConditionRatings)(equipment), (0, _makeImpactTests.makeImpactTests)(impactTest, inspection.standards)]
  };
  return docDefinition;
};

exports.makeDocDefinition = makeDocDefinition;